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

          <Link
            href="/admin/settings"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">تنظیمات سایت</h3>
            <p className="text-3xl font-bold text-accent-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </p>
            <p className="text-sm text-gray-600 mt-2">بنر رویداد و Hero</p>
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
            <Link
              href="/admin/settings"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold mb-2">تنظیمات صفحه اصلی</h3>
              <p className="text-sm text-gray-600">مدیریت بنر رویداد و اسلایدر Hero</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

