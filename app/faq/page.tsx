import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'سوالات متداول',
  description: 'سوالات متداول درباره آکادمی 84، دوره‌ها، ثبت‌نام و خدمات',
  keywords: ['سوالات متداول', 'FAQ', 'آکادمی 84', 'دوره‌های آموزشی'],
  openGraph: {
    title: 'سوالات متداول | آکادمی 84',
    description: 'سوالات متداول درباره آکادمی 84',
    url: 'https://www.academy84.ir/faq',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">سوالات متداول</h1>
          <p className="text-xl text-gray-700">
            پاسخ سوالات رایج شما درباره آکادمی 84
          </p>
        </div>

        <FAQSection />
      </div>
    </div>
  );
}

