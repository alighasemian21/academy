import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import ServiceCard from '@/components/ServiceCard';
import { getFeaturedCourses } from '@/lib/data/courses';
import { getFeaturedServices } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'خانه',
  description: 'آکادمی 84 - آموزش تخصصی تصویر و رسانه. دوره‌های عملی و پروژه‌محور برای تبدیل شدن به حرفه‌ای',
  openGraph: {
    title: 'آکادمی 84',
    description: 'آموزش تخصصی تصویر و رسانه با روش‌های عملی و پروژه‌محور',
  },
};

export default function Home() {
  const featuredCourses = getFeaturedCourses(3);
  const featuredServices = getFeaturedServices(3);

  return (
    <div>
      <Hero />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tight">
                چرا آکادمی 84؟
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <h3 className="text-xl font-bold text-primary-900 mb-3">آموزش عملی و پروژه‌محور</h3>
                <p className="text-primary-700 leading-relaxed">
                  هر دوره با پروژه‌های واقعی همراه است. نه فقط تئوری، بلکه ساخت نمونه کارهای قابل ارائه در رزومه.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <h3 className="text-xl font-bold text-primary-900 mb-3">اساتید با تجربه صنعتی</h3>
                <p className="text-primary-700 leading-relaxed">
                  مدرسان ما سال‌ها در پروژه‌های واقعی کار کرده‌اند و تجربه‌های عملی خود را با تو به اشتراک می‌گذارند.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <h3 className="text-xl font-bold text-primary-900 mb-3">پشتیبانی مستمر</h3>
                <p className="text-primary-700 leading-relaxed">
                  بعد از پایان دوره هم تنها نمی‌مانی. تیم ما برای پاسخ به سوالات و راهنمایی‌های بیشتر کنارت است.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <h3 className="text-xl font-bold text-primary-900 mb-3">گواهینامه معتبر</h3>
                <p className="text-primary-700 leading-relaxed">
                  بعد از اتمام موفقیت‌آمیز هر دوره، گواهینامه معتبر دریافت می‌کنی که در رزومه و لینکدین قابل استفاده است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 mb-4 tracking-tight">
              دوره‌های محبوب
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              دوره‌هایی که بیشترین استقبال را داشته‌اند و دانشجویان با آن‌ها به نتایج عالی رسیده‌اند
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/academy/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white rounded-xl font-semibold hover:bg-primary-800 transition-all duration-200 shadow-soft hover:shadow-soft-lg"
            >
              مشاهده تمام دوره‌ها
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 mb-4 tracking-tight">
              خدمات تخصصی
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              علاوه بر آموزش، خدمات تخصصی برای کسب‌وکارها و پروژه‌های حرفه‌ای ارائه می‌دهیم
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/company/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-900 border-2 border-primary-900 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200"
            >
              مشاهده تمام خدمات
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

