import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const WorkshopPreregWizard = dynamic(
  () => import('@/components/enrollment/WorkshopPreregWizard'),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-2xl shadow-soft p-8 max-w-3xl mx-auto mb-8">
        <div className="animate-pulse space-y-6">
          <div className="flex justify-between">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="w-16 h-3 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: 'پیش‌ثبت‌نام ورکشاپ کلیپ‌سازی با موبایل',
  description:
    'پیش‌ثبت‌نام ورکشاپ تخصصی کلیپ‌سازی با موبایل در کاشان با استاد رضا نصیری. یک روزه، عملی و پروژه‌محور.',
  keywords: [
    'ورکشاپ کلیپ‌سازی',
    'موبایگرافی',
    'کاشان',
    'رضا نصیری',
    'آکادمی 84',
    'پیش‌ثبت‌نام',
  ],
  openGraph: {
    title: 'پیش‌ثبت‌نام ورکشاپ کلیپ‌سازی با موبایل | آکادمی 84',
    description: 'ورکشاپ تخصصی کلیپ‌سازی با موبایل در کاشان. به زودی با شما تماس خواهیم گرفت.',
    url: 'https://www.academy84.ir/workshop/kashan-mobile-clip',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/workshop/kashan-mobile-clip',
  },
};

export default function WorkshopKashanMobileClipPage() {
  return (
    <div className="pt-16 pb-12 sm:pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <section className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-primary-500 uppercase mb-3">
            ایونت موج
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 tracking-tight leading-tight mb-5">
            کلیپ‌سازی با موبایل
          </h1>
          <p className="text-lg sm:text-xl text-primary-600/90 max-w-2xl mx-auto leading-relaxed mb-10">
            یک روز؛ همان موبایلت؛ خروجی حرفه‌ای. ورکشاپ عملی و پروژه‌محور با استاد رضا نصیری در کاشان.
          </p>
          <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl p-6 sm:p-8 text-right max-w-2xl mx-auto shadow-soft">
            <ul className="space-y-3 text-primary-700 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                یک‌روزه، فشرده و کاربردی
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                پروژه واقعی و خروجی آماده برای شبکه‌های اجتماعی
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                مربی: رضا نصیری — کاشان
              </li>
            </ul>
            <a
              href="#prereg"
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-900 text-white text-sm font-medium rounded-full hover:bg-primary-800 transition-colors"
            >
              پیش‌ثبت‌نام
              <span className="text-xs" aria-hidden>↓</span>
            </a>
          </div>
        </section>

        <section id="prereg" className="scroll-mt-24">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-2">
              پیش‌ثبت‌نام
            </h2>
            <p className="text-primary-600 text-sm sm:text-base max-w-md mx-auto">
              همین الان تا ظرفیت پر نشده ثبت‌نام کن؛ به زودی با تو تماس می‌گیریم.
            </p>
          </div>
          <WorkshopPreregWizard />
        </section>
      </div>
    </div>
  );
}
