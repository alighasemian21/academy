import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { getAllServices } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'خدمات',
  description: 'خدمات تخصصی آکادمی 84 شامل طراحی و توسعه وبسایت، مشاوره کسب‌وکار، برندینگ و بازاریابی دیجیتال. خدمات حرفه‌ای برای رشد و توسعه کسب‌وکار شما.',
  keywords: ['خدمات', 'طراحی وبسایت', 'مشاوره کسب‌وکار', 'برندینگ', 'بازاریابی دیجیتال'],
  openGraph: {
    title: 'خدمات | آکادمی 84',
    description: 'خدمات تخصصی آکادمی 84 برای رشد و توسعه کسب‌وکار شما',
    url: 'https://www.academy84.ir/academy/studio/services',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/academy/studio/services',
  },
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">خدمات ما</h1>
          <p className="text-xl text-gray-700">
            خدمات تخصصی ما برای کسب‌وکار شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 bg-primary-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">سوال دارید؟</h2>
          <p className="mb-6">برای دریافت مشاوره رایگان با ما تماس بگیرید</p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            تماس با ما
          </a>
        </div>
      </div>
    </div>
  );
}

