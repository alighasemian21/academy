import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import EventBanner from '@/components/EventBanner';
import CourseCard from '@/components/CourseCard';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedFeatureCard from '@/components/AnimatedFeatureCard';
import AnimatedCTAButton from '@/components/AnimatedCTAButton';
import { getFeaturedCourses } from '@/lib/data/courses';

const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="min-h-screen bg-primary-900" aria-hidden="true" />,
});

const StatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: () => <div className="h-48 bg-primary-900" aria-hidden="true" />,
});
import { getFeaturedServices } from '@/lib/data/services';
import { getFeaturedTestimonials } from '@/lib/data/testimonials';
import { getSiteSettings } from '@/lib/data/siteSettings';

export const metadata: Metadata = {
  title: 'خانه',
  description: 'آکادمی 84 - مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری. دوره‌های حرفه‌ای شامل عکاسی، تصویربرداری، تولید محتوا، موبایلگرافی، برنامه نویسی وب، طراحی و گرافیک و تدوین ویدیو. خلاقیت، تصمیم‌گیری و تجربه عملی محور اصلی آموزش است.',
  keywords: ['آکادمی 84', 'آموزش دیجیتال', 'آموزش تصویر و رسانه', 'دوره آموزشی', 'آموزش حرفه‌ای', 'آموزش حضوری', 'عکاسی', 'تصویربرداری', 'تولید محتوا', 'موبایلگرافی', 'برنامه نویسی وب', 'طراحی و گرافیک', 'تدوین ویدیو'],
  openGraph: {
    title: 'آکادمی 84 | مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری',
    description: 'آکادمی 84 - مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری. دوره‌های حرفه‌ای و پروژه‌محور',
    url: 'https://www.academy84.ir',
  },
  alternates: {
    canonical: 'https://www.academy84.ir',
  },
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
      <span className="h-px w-8 sm:w-12 bg-accent-300" />
      <span className="text-xs sm:text-sm font-bold text-accent-500 tracking-wide">
        {children}
      </span>
      <span className="h-px w-8 sm:w-12 bg-accent-300" />
    </div>
  );
}

function SectionDivider() {
  return <div className="section-divider" />;
}

export default async function Home() {
  const featuredCourses = getFeaturedCourses(3);
  const featuredServices = getFeaturedServices(3);
  const featuredTestimonials = getFeaturedTestimonials(3);
  const settings = await getSiteSettings();

  return (
    <div>
      <EventBanner data={settings.eventBanner} />
      <Hero slides={settings.heroSlides} />

      <StatsSection />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center mb-12 sm:mb-14">
                <SectionBadge>درباره ما</SectionBadge>
                <AnimatedHeading
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-5 tracking-tight"
                  as="h2"
                >
                  چرا آکادمی 84؟
                </AnimatedHeading>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed">
                  آکادمی ۸۴، مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              <AnimatedFeatureCard delay={0.1}>
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 group transition-colors duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-900 mb-3">حضوری و پرمیوم</h3>
                  <p className="text-primary-600 leading-relaxed text-base sm:text-lg">
                    تمرین عملی و نقد انسانی
                  </p>
                </div>
              </AnimatedFeatureCard>
              <AnimatedFeatureCard delay={0.2}>
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 group transition-colors duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-900 mb-3">خلاقیت محور</h3>
                  <p className="text-primary-600 leading-relaxed text-base sm:text-lg">
                    یادگیری ابزار نیست، یادگیری تصمیم‌سازی است
                  </p>
                </div>
              </AnimatedFeatureCard>
              <AnimatedFeatureCard delay={0.3}>
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 group transition-colors duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-900 mb-3">ضد AI</h3>
                  <p className="text-primary-600 leading-relaxed text-base sm:text-lg">
                    مهارت‌هایی که ماشین جایگزینش نمی‌شود
                  </p>
                </div>
              </AnimatedFeatureCard>
              <AnimatedFeatureCard delay={0.4}>
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 group transition-colors duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-900 mb-3">خروجی واقعی</h3>
                  <p className="text-primary-600 leading-relaxed text-base sm:text-lg">
                    پروژه‌هایی که آماده انتشار یا استفاده حرفه‌ای هستند
                  </p>
                </div>
              </AnimatedFeatureCard>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Featured Courses */}
      <section className="section-padding bg-primary-50/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-12 sm:mb-14">
              <SectionBadge>دوره‌ها</SectionBadge>
              <AnimatedHeading
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-5 tracking-tight"
                as="h2"
              >
                دوره‌های محبوب
              </AnimatedHeading>
              <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed">
                دوره‌هایی که بیشترین استقبال را داشته‌اند و دانشجویان با آن‌ها به نتایج عالی دست یافته‌اند
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
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

      <SectionDivider />

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-12 sm:mb-14">
              <SectionBadge>نظرات</SectionBadge>
              <AnimatedHeading
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-5 tracking-tight"
                as="h2"
              >
                نظرات دانشجویان
              </AnimatedHeading>
              <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed">
                تجربه‌های واقعی و صادقانه دانشجویانی که مسیر موفقیت خود را با آکادمی 84 آغاز کرده‌اند
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
          <div className="text-center">
            <AnimatedSection animation="fade-in-up">
              <AnimatedCTAButton href="/academy/courses" variant="secondary">
                ثبت‌نام در دوره‌ها
              </AnimatedCTAButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Services Section */}
      <section className="section-padding bg-primary-50/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-12 sm:mb-14">
              <SectionBadge>خدمات</SectionBadge>
              <AnimatedHeading
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-5 tracking-tight"
                as="h2"
              >
                خدمات تخصصی
              </AnimatedHeading>
              <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed">
                علاوه بر آموزش‌های جامع، خدمات تخصصی و حرفه‌ای برای کسب‌وکارها و پروژه‌های بزرگ ارائه می‌دهیم
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
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

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-in-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
                آماده شروعی؟
              </h2>
              <p className="text-base sm:text-lg text-white/70 mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed">
                همین الان ثبت‌نام کن و مسیر حرفه‌ای‌شدنت را با آکادمی 84 شروع کن.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/academy/register"
                  className="px-8 sm:px-10 py-4 bg-white text-primary-900 rounded-full font-bold text-base sm:text-lg hover:bg-white/90 transition-all duration-300 w-full sm:w-auto text-center min-h-[52px] flex items-center justify-center shadow-soft-lg hover:shadow-soft-xl"
                >
                  ثبت‌نام دوره
                </Link>
                <Link
                  href="/contact"
                  className="group px-8 sm:px-10 py-4 border border-white/20 text-white rounded-full font-medium text-base sm:text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center min-h-[52px] flex items-center justify-center gap-3"
                >
                  مشاوره رایگان
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
