import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';

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

const faqSchemaItems = [
  { question: 'دوره‌ها به چه صورت برگزار می‌شوند؟', answer: 'دوره‌های آکادمی 84 به صورت حضوری و با تمرکز بر تمرین عملی و پروژه‌محور برگزار می‌شوند. هر دوره شامل جلسات آموزشی، تمرین‌های عملی، نقد و بررسی پروژه‌ها و پشتیبانی مستمر است.' },
  { question: 'آیا پیش‌نیاز خاصی برای شرکت در دوره‌ها نیاز است؟', answer: 'بیشتر دوره‌ها برای افراد مبتدی طراحی شده‌اند و نیاز به پیش‌نیاز خاصی ندارند. در صورتی که دوره‌ای نیاز به پیش‌زمینه خاصی داشته باشد، در صفحه دوره ذکر شده است.' },
  { question: 'چگونه می‌توانم در دوره ثبت‌نام کنم؟', answer: 'می‌توانید از طریق صفحه ثبت‌نام آنلاین، فرم مربوطه را پر کرده و منتظر تماس ما بمانید. همچنین می‌توانید با شماره تماس 09133139424 تماس بگیرید.' },
  { question: 'هزینه دوره‌ها چقدر است؟', answer: 'هزینه هر دوره در صفحه مربوط به آن ذکر شده است. همچنین می‌توانید از بخش دوره‌ها، قیمت تمام دوره‌ها را مشاهده کنید.' },
  { question: 'آیا گواهینامه اعطا می‌شود؟', answer: 'بله، پس از اتمام موفقیت‌آمیز هر دوره، گواهینامه معتبر آکادمی 84 به دانشجویان اعطا می‌شود.' },
  { question: 'آیا امکان پرداخت اقساطی وجود دارد؟', answer: 'برای اطلاعات بیشتر درباره روش‌های پرداخت و امکان پرداخت اقساطی، لطفاً با ما تماس بگیرید تا راهنمایی‌های لازم را دریافت کنید.' },
  { question: 'محل برگزاری دوره‌ها کجاست؟', answer: 'دوره‌ها در شعب آکادمی 84 برگزار می‌شوند: شعبه ۱ در کاشان، خیابان بهشتی و شعبه ۲ در قم، سالاریه.' },
  { question: 'آیا امکان برگزاری دوره به صورت آنلاین وجود دارد؟', answer: 'در حال حاضر دوره‌ها به صورت حضوری برگزار می‌شوند تا امکان تمرین عملی و نقد لحظه‌ای فراهم باشد. در صورت نیاز به دوره آنلاین، لطفاً با ما تماس بگیرید.' },
];

export default function FAQPage() {
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchemaItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumb items={[{ label: 'خانه', href: '/' }, { label: 'سوالات متداول' }]} />
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

