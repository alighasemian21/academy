import { Metadata } from 'next';
import CourseCard from '@/components/CourseCard';
import { getAllCourses } from '@/lib/data/courses';

export const metadata: Metadata = {
  title: 'دوره‌های آموزشی',
  description: 'مشاهده تمام دوره‌های آموزشی آکادمی 84. دوره‌های حرفه‌ای شامل تولید محتوای هوشمند، موبایگرافی کاربردی، عکاسی و فیلمبرداری حرفه‌ای، طراحی و هویت بصری، تدوین و داستان‌سرایی ویدیویی و برنامه‌نویسی وب کاربردی. آموزش عملی و پروژه‌محور.',
  keywords: ['دوره‌های آموزشی', 'دوره‌های آکادمی 84', 'آموزش حرفه‌ای', 'تولید محتوای هوشمند', 'موبایگرافی', 'عکاسی حرفه‌ای', 'طراحی هویت بصری', 'تدوین ویدیو', 'برنامه‌نویسی وب'],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

