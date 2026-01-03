import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/auth';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'پنل مدیریت',
  description: 'پنل مدیریت آکادمی 84',
};

export default async function AdminPage() {
  try {
    await requireAdmin();
  } catch (error: any) {
    if (error.message === 'Unauthorized' || error.message === 'Forbidden') {
      redirect('/auth/signin?callbackUrl=/admin');
    }
    throw error;
  }

  const contactsCollection = await getCollection(COLLECTIONS.CONTACTS);
  const enrollmentsCollection = await getCollection(COLLECTIONS.ENROLLMENTS);

  const [totalContacts, unreadContacts, totalEnrollments, pendingEnrollments] = await Promise.all([
    contactsCollection.countDocuments(),
    contactsCollection.countDocuments({ read: false }),
    enrollmentsCollection.countDocuments(),
    enrollmentsCollection.countDocuments({ status: 'pending' }),
  ]);

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary-900 mb-2">پنل مدیریت</h1>
          <p className="text-gray-600">خوش آمدید به پنل مدیریت</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link
            href="/admin/contacts"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">پیام‌های تماس</h3>
            <p className="text-3xl font-bold text-primary-600">{totalContacts}</p>
            {unreadContacts > 0 && (
              <p className="text-sm text-red-600 mt-2">{unreadContacts} خوانده نشده</p>
            )}
          </Link>

          <Link
            href="/admin/enrollments"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">ثبت‌نام‌ها</h3>
            <p className="text-3xl font-bold text-primary-600">{totalEnrollments}</p>
            {pendingEnrollments > 0 && (
              <p className="text-sm text-yellow-600 mt-2">{pendingEnrollments} در انتظار</p>
            )}
          </Link>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">دوره‌ها</h3>
            <p className="text-3xl font-bold text-primary-600">-</p>
            <p className="text-sm text-gray-600 mt-2">مدیریت دوره‌ها</p>
          </div>

          <Link
            href="/admin/reports"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">آمار</h3>
            <p className="text-3xl font-bold text-primary-600">{totalContacts + totalEnrollments}</p>
            <p className="text-sm text-gray-600 mt-2">مشاهده آمار کامل</p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">دسترسی سریع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admin/contacts"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold mb-2">مدیریت پیام‌ها</h3>
              <p className="text-sm text-gray-600">مشاهده و مدیریت پیام‌های تماس</p>
            </Link>
            <Link
              href="/admin/enrollments"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold mb-2">مدیریت ثبت‌نام‌ها</h3>
              <p className="text-sm text-gray-600">مشاهده و مدیریت ثبت‌نام دوره‌ها</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

