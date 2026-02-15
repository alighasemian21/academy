import { Metadata } from 'next';
import CourseCard from '@/components/CourseCard';
import { getAllCourses } from '@/lib/data/courses';
import CoursesWithFilters from '@/components/CoursesWithFilters';

export const metadata: Metadata = {
  title: 'دوره‌های آموزشی',
  description: 'مشاهده تمام دوره‌های آموزشی آکادمی 84. دوره‌های حرفه‌ای شامل عکاسی، تصویربرداری، تولید محتوا، موبایلگرافی، برنامه نویسی وب، طراحی و گرافیک و تدوین ویدیو. آموزش عملی و پروژه‌محور.',
  keywords: ['دوره‌های آموزشی', 'دوره‌های آکادمی 84', 'آموزش حرفه‌ای', 'عکاسی', 'تصویربرداری', 'تولید محتوا', 'موبایلگرافی', 'طراحی و گرافیک', 'تدوین ویدیو', 'برنامه نویسی وب'],
  openGraph: {
    title: 'دوره‌های آموزشی | آکادمی 84',
    description: 'مشاهده تمام دوره‌های آموزشی آکادمی 84. دوره‌های حرفه‌ای و پروژه‌محور',
    url: 'https://www.academy84.ir/academy/courses',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/academy/courses',
  },
};

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">دوره‌های آموزشی</h1>
          <p className="text-xl text-gray-700">
            انتخاب از بین بهترین دوره‌های آموزشی
          </p>
        </div>

        <CoursesWithFilters courses={courses} />
      </div>
    </div>
  );
}

