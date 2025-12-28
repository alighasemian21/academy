import { Metadata } from 'next';
import EnrollmentForm from '@/components/EnrollmentForm';

export const metadata: Metadata = {
  title: 'ثبت‌نام در دوره',
  description: 'ثبت‌نام آنلاین در دوره‌های آموزشی آکادمی 84. فرم ثبت‌نام را پر کنید تا با شما تماس بگیریم و در مورد دوره‌های مناسب شما راهنمایی‌تان کنیم.',
  keywords: ['ثبت‌نام', 'ثبت‌نام آنلاین', 'دوره آموزشی', 'فرم ثبت‌نام'],
  openGraph: {
    title: 'ثبت‌نام در دوره | آکادمی 84',
    description: 'ثبت‌نام آنلاین در دوره‌های آموزشی آکادمی 84',
    url: 'https://www.academy84.ir/academy/enrollment',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/academy/enrollment',
  },
};

export default function EnrollmentPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ثبت‌نام در دوره</h1>
          <p className="text-xl text-gray-700">
            فرم زیر را پر کنید تا با شما تماس بگیریم
          </p>
        </div>

        <EnrollmentForm />
      </div>
    </div>
  );
}

