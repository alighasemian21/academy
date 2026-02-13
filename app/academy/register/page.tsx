import { Metadata } from 'next';
import CourseRegistrationWizard from '@/components/enrollment/CourseRegistrationWizard';

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
