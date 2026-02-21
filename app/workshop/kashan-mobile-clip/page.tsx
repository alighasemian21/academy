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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-sm font-medium tracking-wide text-primary-500 mb-3">
            پیش‌ثبت‌نام ورکشاپ
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-primary-900 tracking-tight leading-tight mb-5">
            کلیپ‌سازی با موبایل
          </h1>
          <div className="w-12 h-0.5 bg-accent-400/60 rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg text-primary-600/90 max-w-xl mx-auto leading-relaxed">
            ورکشاپ یک‌روزه تخصصی در کاشان با بهترین استاد موبایگرافی. فرم زیر را تکمیل کنید؛ به زودی با شما تماس خواهیم گرفت.
          </p>
        </div>

        <WorkshopPreregWizard />
      </div>
    </div>
  );
}
