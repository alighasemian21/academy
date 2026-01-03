import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/auth';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import EnrollmentsList from '@/components/admin/EnrollmentsList';
import { getAllCourses } from '@/lib/data/courses';

export const metadata: Metadata = {
  title: 'مدیریت ثبت‌نام‌ها',
  description: 'پنل مدیریت - ثبت‌نام دوره‌ها',
};

export default async function AdminEnrollmentsPage() {
  try {
    await requireAdmin();
  } catch (error: any) {
    if (error.message === 'Unauthorized' || error.message === 'Forbidden') {
      redirect('/auth/signin?callbackUrl=/admin/enrollments');
    }
    throw error;
  }

  const enrollmentsCollection = await getCollection(COLLECTIONS.ENROLLMENTS);
  const enrollments = await enrollmentsCollection
    .find({})
    .sort({ createdAt: -1 })
    .limit(100)
    .toArray();

  const courses = getAllCourses();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary-900 mb-2">ثبت‌نام‌ها</h1>
          <p className="text-gray-600">مدیریت و مشاهده ثبت‌نام دوره‌ها</p>
        </div>

        <EnrollmentsList initialEnrollments={enrollments as any} courses={courses} />
      </div>
    </div>
  );
}

