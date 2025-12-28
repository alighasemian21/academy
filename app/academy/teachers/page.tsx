import { Metadata } from 'next';
import TeacherCard from '@/components/TeacherCard';
import { getAllTeachers } from '@/lib/data/teachers';

export const metadata: Metadata = {
  title: 'اساتید',
  description: 'معرفی اساتید مجرب و با تجربه آکادمی 84. مدرسان حرفه‌ای که سال‌ها در صنعت فعالیت داشته‌اند و تجربه‌های عملی خود را با دانشجویان به اشتراک می‌گذارند.',
  keywords: ['اساتید آکادمی 84', 'مدرس', 'آموزش', 'حرفه‌ای', 'تجربه'],
  openGraph: {
    title: 'اساتید | آکادمی 84',
    description: 'معرفی اساتید مجرب و با تجربه آکادمی 84',
    url: 'https://www.academy84.ir/academy/teachers',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/academy/teachers',
  },
};

export default function TeachersPage() {
  const teachers = getAllTeachers();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">اساتید ما</h1>
          <p className="text-xl text-gray-700">
            با بهترین و باتجربه‌ترین اساتید یاد بگیرید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
}

