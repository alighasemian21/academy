import { Metadata } from 'next';
import StudentGallery from '@/components/StudentGallery';
import { getAllStudents } from '@/lib/data/students';

export const metadata: Metadata = {
  title: 'دانشجویان و نمونه کارها',
  description: 'گالری نمونه کارها و پروژه‌های موفق دانشجویان آکادمی 84. مشاهده دستاوردها و موفقیت‌های دانشجویانی که مسیر حرفه‌ای‌شدن خود را با ما آغاز کرده‌اند.',
  keywords: ['نمونه کار', 'پروژه دانشجویان', 'گالری', 'دستاورد', 'موفقیت'],
  openGraph: {
    title: 'دانشجویان و نمونه کارها | آکادمی 84',
    description: 'گالری نمونه کارها و پروژه‌های موفق دانشجویان آکادمی 84',
    url: 'https://www.academy84.ir/academy/students',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/academy/students',
  },
};

export default function StudentsPage() {
  const students = getAllStudents();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">دانشجویان و نمونه کارها</h1>
          <p className="text-xl text-gray-700">
            پروژه‌های موفق دانشجویان ما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student) => (
            <StudentGallery key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}

