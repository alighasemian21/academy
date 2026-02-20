import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'استودیو',
  description: 'استودیو آکادمی 84 - ارائه خدمات تخصصی طراحی وب، برندینگ، مشاوره کسب‌وکار و بازاریابی دیجیتال با کیفیت جهانی',
  keywords: ['استودیو', 'خدمات', 'طراحی', 'برندینگ', 'مشاوره'],
  openGraph: {
    title: 'استودیو | آکادمی 84',
    description: 'استودیو آکادمی 84 - ارائه خدمات تخصصی با کیفیت جهانی',
    url: 'https://www.academy84.ir/academy/studio',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/academy/studio',
  },
};

export default function CompanyPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: 'خانه', href: '/' }, { label: 'آکادمی', href: '/academy' }, { label: 'استودیو' }]} />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">شرکت ما</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ارائه بهترین خدمات تخصصی با کیفیت بالا و پشتیبانی مستمر
          </p>
        </div>

        <div className="bg-primary-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-center">درباره شرکت</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            شرکت ما با سال‌ها تجربه در زمینه ارائه خدمات تخصصی، آماده خدمت‌رسانی به کسب‌وکارها و سازمان‌ها است. ما با تیمی متخصص و با تجربه، بهترین راه‌حل‌ها را برای شما ارائه می‌دهیم.
          </p>
        </div>

        <div className="text-center mb-12">
          <Link
            href="/academy/studio/services"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            مشاهده خدمات
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">تخصص و تجربه</h3>
            <p className="text-gray-700">تیمی متخصص با سال‌ها تجربه در زمینه‌های مختلف</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">سرعت و کیفیت</h3>
            <p className="text-gray-700">ارائه خدمات با بالاترین کیفیت در کمترین زمان</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">پشتیبانی کامل</h3>
            <p className="text-gray-700">پشتیبانی مستمر و همراهی شما در تمام مراحل</p>
          </div>
        </div>
      </div>
    </div>
  );
}

