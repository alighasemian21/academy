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
    'فقط با یک موبایل وارد بازار کار شوید. صفر تا صد تصویربرداری و ادیت با موبایل، با بهترین استاد ایران به‌صورت حضوری در کاشان. تکنیک‌های تصویربرداری، نورپردازی و ادیت با چاشنی خلاقیت.',
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
    description: 'ایونت موج: صفر تا صد تصویربرداری و ادیت با موبایل، حضوری در کاشان با بهترین استاد. پیش‌ثبت‌نام.',
    url: 'https://www.academy84.ir/workshop/kashan-mobile-clip',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/workshop/kashan-mobile-clip',
  },
};

import WorkshopAnimatedContent from './WorkshopAnimatedContent';

export default function WorkshopKashanMobileClipPage() {
  return (
    <WorkshopAnimatedContent>
      <WorkshopPreregWizard />
    </WorkshopAnimatedContent>
  );
}
