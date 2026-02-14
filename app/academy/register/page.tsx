import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const CourseRegistrationWizard = dynamic(
  () => import('@/components/enrollment/CourseRegistrationWizard'),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-2xl shadow-soft p-8 max-w-3xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="flex justify-between">
            {[1, 2, 3].map((i) => (
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
  title: 'ثبت‌نام دوره',
  description:
    'ثبت‌نام آنلاین در دوره‌های آموزشی آکادمی 84. فرم ثبت‌نام را پر کنید، رسید واریزی را آپلود کنید و منتظر تایید باشید.',
  keywords: [
    'ثبت‌نام دوره',
    'ثبت‌نام آنلاین',
    'دوره آموزشی',
    'آکادمی 84',
    'فرم ثبت‌نام',
  ],
  openGraph: {
    title: 'ثبت‌نام دوره | آکادمی 84',
    description:
      'ثبت‌نام آنلاین در دوره‌های آموزشی آکادمی 84. فرم ثبت‌نام را پر کنید و رسید واریزی را آپلود کنید.',
    url: 'https://www.academy84.ir/academy/register',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/academy/register',
  },
};

export default function RegisterPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">
            ثبت‌نام دوره
          </h1>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            فرم زیر را تکمیل کنید و رسید واریزی خود را آپلود نمایید تا ثبت‌نام شما تایید شود.
          </p>
        </div>

        <CourseRegistrationWizard />
      </div>
    </div>
  );
}
