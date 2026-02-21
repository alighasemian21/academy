import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const WorkshopPreregWizard = dynamic(
  () => import('@/components/enrollment/WorkshopPreregWizard'),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-2xl shadow-soft p-8 max-w-3xl mx-auto">
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
        </div>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: 'پیش‌ثبت‌نام ایونت موج',
  description: 'فرم پیش‌ثبت‌نام ایونت موج — کلیپ‌سازی با موبایل در کاشان.',
  robots: 'noindex, follow',
};

export default function WorkshopRegisterPage() {
  return (
    <div className="pt-16 pb-12 sm:pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="mb-8">
          <Link
            href="/workshop/kashan-mobile-clip"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-900 text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            بازگشت به صفحه ایونت موج
          </Link>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary-900 tracking-tight mb-3">
            پیش‌ثبت‌نام
          </h1>
          <p className="text-primary-600 text-base max-w-md mx-auto">
            <span className="block">همین الان تا ظرفیت پر نشده ثبت‌نام کن.</span>
            <span className="block mt-1.5">به زودی با تو تماس می‌گیریم.</span>
          </p>
        </div>
        <WorkshopPreregWizard />
      </div>
    </div>
  );
}
