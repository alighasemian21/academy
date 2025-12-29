import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import CourseCard from '@/components/CourseCard';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedFeatureCard from '@/components/AnimatedFeatureCard';
import AnimatedCTAButton from '@/components/AnimatedCTAButton';
import { getFeaturedCourses } from '@/lib/data/courses';
import { getFeaturedServices } from '@/lib/data/services';
import { getFeaturedTestimonials } from '@/lib/data/testimonials';

export const metadata: Metadata = {
  title: 'خانه',
  description: 'آکادمی 84 - مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری. دوره‌های حرفه‌ای شامل تولید محتوا، موبایگرافی، عکاسی، طراحی، تدوین و برنامه‌نویسی وب. خلاقیت، تصمیم‌گیری و تجربه عملی محور اصلی آموزش است.',
  keywords: ['آکادمی 84', 'آموزش دیجیتال', 'آموزش تصویر و رسانه', 'دوره آموزشی', 'آموزش حرفه‌ای', 'آموزش حضوری', 'مهارت‌های دیجیتال', 'تولید محتوا', 'موبایگرافی', 'عکاسی حرفه‌ای'],
  openGraph: {
    title: 'آکادمی 84 | مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری',
    description: 'آکادمی 84 - مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری. دوره‌های حرفه‌ای و پروژه‌محور',
    url: 'https://www.academy84.ir',
  },
  alternates: {
    canonical: 'https://www.academy84.ir',
  },
};

export default function Home() {
  const featuredCourses = getFeaturedCourses(3);
  const featuredServices = getFeaturedServices(3);
  const featuredTestimonials = getFeaturedTestimonials(3);

  return (
    <div>
      <Hero />

      <StatsSection />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <AnimatedHeading
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 tracking-tight"
                as="h2"
              >
                چرا آکادمی 84؟
              </AnimatedHeading>
                <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
                  آکادمی ۸۴، مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری
                </p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <AnimatedFeatureCard delay={0.1}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 group transition-colors duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">حضوری و پرمیوم</h3>
                    <p className="text-primary-700 leading-relaxed text-lg">
                      تمرین عملی و نقد انسانی
                    </p>
                </div>
              </AnimatedFeatureCard>
              <AnimatedFeatureCard delay={0.2}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 group transition-colors duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">خلاقیت محور</h3>
                    <p className="text-primary-700 leading-relaxed text-lg">
                      یادگیری ابزار نیست، یادگیری تصمیم‌سازی است
                    </p>
                </div>
              </AnimatedFeatureCard>
              <AnimatedFeatureCard delay={0.3}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 group transition-colors duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">ضد AI</h3>
                    <p className="text-primary-700 leading-relaxed text-lg">
                      مهارت‌هایی که ماشین جایگزینش نمی‌شود
                    </p>
                </div>
              </AnimatedFeatureCard>
              <AnimatedFeatureCard delay={0.4}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 group transition-colors duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">خروجی واقعی</h3>
                    <p className="text-primary-700 leading-relaxed text-lg">
                      پروژه‌هایی که آماده انتشار یا استفاده حرفه‌ای هستند
                    </p>
                </div>
              </AnimatedFeatureCard>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <AnimatedHeading
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 tracking-tight"
                as="h2"
              >
                دوره‌های محبوب
              </AnimatedHeading>
              <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
                دوره‌هایی که بیشترین استقبال را داشته‌اند و دانشجویان با آن‌ها به نتایج عالی و پیشرفت شغلی دست یافته‌اند
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
          <div className="text-center">
            <AnimatedSection animation="fade-in-up">
              <AnimatedCTAButton href="/academy/courses" variant="primary">
                مشاهده تمام دوره‌ها
              </AnimatedCTAButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <AnimatedHeading
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 tracking-tight"
                as="h2"
              >
                نظرات دانشجویان
              </AnimatedHeading>
              <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
                تجربه‌های واقعی و صادقانه دانشجویانی که مسیر موفقیت خود را با آکادمی 84 آغاز کرده‌اند
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <AnimatedHeading
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 tracking-tight"
                as="h2"
              >
                خدمات تخصصی
              </AnimatedHeading>
              <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
                علاوه بر آموزش‌های جامع، خدمات تخصصی و حرفه‌ای برای کسب‌وکارها و پروژه‌های بزرگ ارائه می‌دهیم
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="text-center">
            <AnimatedSection animation="fade-in-up">
              <AnimatedCTAButton href="/academy/studio/services" variant="secondary">
                مشاهده تمام خدمات
              </AnimatedCTAButton>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
