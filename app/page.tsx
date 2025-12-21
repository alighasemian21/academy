import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import ServiceCard from '@/components/ServiceCard';
import { getFeaturedCourses } from '@/lib/data/courses';
import { getFeaturedServices } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'خانه',
  description: 'خوش آمدید به آکادمی و شرکت علی قاسمیان - ارائه بهترین خدمات آموزشی و تخصصی با بالاترین کیفیت',
  openGraph: {
    title: 'آکادمی و شرکت - علی قاسمیان',
    description: 'ارائه بهترین خدمات آموزشی و تخصصی با بالاترین کیفیت',
  },
};

export default function Home() {
  const featuredCourses = getFeaturedCourses(3);
  const featuredServices = getFeaturedServices(3);

  return (
    <div>
      <Hero />

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">درباره ما</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              علی قاسمیان با سال‌ها تجربه در زمینه مدیریت و آموزش، مجموعه‌ای متشکل از آکادمی آموزشی و شرکت تخصصی را راه‌اندازی کرده است. ما متعهد به ارائه بهترین خدمات و آموزش‌ها با بالاترین استانداردها هستیم.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              هدف ما این است که با استفاده از دانش و تجربه خود، به پیشرفت و رشد افراد و کسب‌وکارها کمک کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            دوره‌های ویژه
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/academy/courses"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              مشاهده تمام دوره‌ها
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            خدمات شرکت
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/company/services"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              مشاهده تمام خدمات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

