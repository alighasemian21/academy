import CourseCard from '@/components/CourseCard';
import { getAllCourses } from '@/lib/data/courses';

export const metadata = {
  title: 'دوره‌های آموزشی - آکادمی',
  description: 'مشاهده تمام دوره‌های آموزشی آکادمی',
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

