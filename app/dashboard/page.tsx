import { Metadata } from 'next';
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import { getCourseBySlug } from '@/lib/data/courses';

export const metadata: Metadata = {
  title: 'داشبورد',
  description: 'داشبورد دانشجو - آکادمی 84',
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/auth/signin');
  }

  const enrollmentsCollection = await getCollection(COLLECTIONS.ENROLLMENTS);
  const enrollments = await enrollmentsCollection
    .find({ email: user.email, status: 'confirmed' })
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary-900 mb-2">
            داشبورد من
          </h1>
          <p className="text-gray-600">خوش آمدید، {user.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">دوره‌های ثبت‌نام شده</h3>
            <p className="text-3xl font-bold text-primary-600">{enrollments.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">وضعیت حساب</h3>
            <p className="text-lg text-green-600">فعال</p>
          </div>
          <Link
            href="/dashboard/profile"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">پروفایل</h3>
            <p className="text-gray-600">ویرایش اطلاعات</p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">دوره‌های من</h2>
          </div>
          <div className="p-6">
            {enrollments.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  شما هنوز در دوره‌ای ثبت‌نام نکرده‌اید
                </p>
                <Link
                  href="/academy/courses"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  مشاهده دوره‌ها
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {enrollments.map((enrollment: any) => {
                  const course = getCourseBySlug(enrollment.course);
                  return (
                    <div
                      key={enrollment._id.toString()}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-semibold">
                            {course?.title || enrollment.course}
                          </h3>
                          <p className="text-gray-600">
                            تاریخ ثبت‌نام:{' '}
                            {new Date(enrollment.createdAt).toLocaleDateString('fa-IR')}
                          </p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          تایید شده
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

