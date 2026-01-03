import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/auth';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import { getAllCourses } from '@/lib/data/courses';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'گزارش و آمار',
  description: 'پنل مدیریت - گزارش و آمار تفصیلی',
};

function getDateRanges() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const monthAgo = new Date(today);
  monthAgo.setMonth(monthAgo.getMonth() - 1);

  return { today, weekAgo, monthAgo };
}

export default async function AdminReportsPage() {
  try {
    await requireAdmin();
  } catch (error: any) {
    if (error.message === 'Unauthorized' || error.message === 'Forbidden') {
      redirect('/auth/signin?callbackUrl=/admin/reports');
    }
    throw error;
  }

  const contactsCollection = await getCollection(COLLECTIONS.CONTACTS);
  const enrollmentsCollection = await getCollection(COLLECTIONS.ENROLLMENTS);
  const courses = getAllCourses();

  const { today, weekAgo, monthAgo } = getDateRanges();

  const [
    totalContacts,
    unreadContacts,
    readContacts,
    contactsToday,
    contactsThisWeek,
    contactsThisMonth,
    totalEnrollments,
    pendingEnrollments,
    confirmedEnrollments,
    cancelledEnrollments,
    enrollmentsToday,
    enrollmentsThisWeek,
    enrollmentsThisMonth,
  ] = await Promise.all([
    contactsCollection.countDocuments(),
    contactsCollection.countDocuments({ read: false }),
    contactsCollection.countDocuments({ read: true }),
    contactsCollection.countDocuments({ createdAt: { $gte: today } }),
    contactsCollection.countDocuments({ createdAt: { $gte: weekAgo } }),
    contactsCollection.countDocuments({ createdAt: { $gte: monthAgo } }),
    enrollmentsCollection.countDocuments(),
    enrollmentsCollection.countDocuments({ status: 'pending' }),
    enrollmentsCollection.countDocuments({ status: 'confirmed' }),
    enrollmentsCollection.countDocuments({ status: 'cancelled' }),
    enrollmentsCollection.countDocuments({ createdAt: { $gte: today } }),
    enrollmentsCollection.countDocuments({ createdAt: { $gte: weekAgo } }),
    enrollmentsCollection.countDocuments({ createdAt: { $gte: monthAgo } }),
  ]);

  const enrollmentsByCourse = await Promise.all(
    courses.map(async (course) => {
      const count = await enrollmentsCollection.countDocuments({ course: course.slug });
      return { course: course.title, count };
    })
  );

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary-900 mb-2">گزارش و آمار</h1>
            <p className="text-gray-600">آمار تفصیلی تماس‌ها و ثبت‌نام‌ها</p>
          </div>
          <Link
            href="/admin"
            className="px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
          >
            بازگشت به پنل
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">آمار تماس‌ها</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">کل تماس‌ها</p>
                <p className="text-3xl font-bold text-blue-600">{totalContacts}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">خوانده نشده</p>
                <p className="text-3xl font-bold text-red-600">{unreadContacts}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">خوانده شده</p>
                <p className="text-3xl font-bold text-green-600">{readContacts}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">امروز</p>
                <p className="text-3xl font-bold text-purple-600">{contactsToday}</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">هفته جاری</p>
                <p className="text-3xl font-bold text-yellow-600">{contactsThisWeek}</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">ماه جاری</p>
                <p className="text-3xl font-bold text-indigo-600">{contactsThisMonth}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">آمار ثبت‌نام‌ها</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">کل ثبت‌نام‌ها</p>
                <p className="text-3xl font-bold text-blue-600">{totalEnrollments}</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">در انتظار</p>
                <p className="text-3xl font-bold text-yellow-600">{pendingEnrollments}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">تأیید شده</p>
                <p className="text-3xl font-bold text-green-600">{confirmedEnrollments}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">لغو شده</p>
                <p className="text-3xl font-bold text-red-600">{cancelledEnrollments}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">امروز</p>
                <p className="text-3xl font-bold text-purple-600">{enrollmentsToday}</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">هفته جاری</p>
                <p className="text-3xl font-bold text-indigo-600">{enrollmentsThisWeek}</p>
              </div>
            </div>
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">ماه جاری</p>
              <p className="text-3xl font-bold text-gray-700">{enrollmentsThisMonth}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">ثبت‌نام‌ها بر اساس دوره</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enrollmentsByCourse.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">{item.course}</p>
                <p className="text-2xl font-bold text-primary-600">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

