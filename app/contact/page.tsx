import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'تماس با ما',
  description: 'تماس با آکادمی 84 - سوالات، پیشنهادات و درخواست مشاوره. آدرس: قم، زنبیل آباد، خیابان عطاران. تلفن: 09375640513',
  keywords: ['تماس با آکادمی 84', 'آدرس آکادمی 84', 'شماره تماس آکادمی 84', 'ایمیل آکادمی 84', 'مشاوره رایگان'],
  openGraph: {
    title: 'تماس با ما | آکادمی 84',
    description: 'تماس با آکادمی 84 - سوالات، پیشنهادات و درخواست مشاوره',
    url: 'https://www.academy84.ir/contact',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="section-padding bg-primary-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 mb-6 tracking-tight">
            تماس با ما
          </h1>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            سوالی داری؟ پیشنهادی؟ یا می‌خوای درباره دوره‌ها بیشتر بدونی؟ ما اینجا هستیم تا کمکت کنیم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-soft p-8 text-center border border-primary-100 hover:shadow-soft-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-3">ایمیل</h3>
            <p className="text-primary-600">
              <a href="mailto:BYALIGHASEMIAN@GMAIL.COM" className="hover:text-primary-900 transition-colors break-all">
                BYALIGHASEMIAN@GMAIL.COM
              </a>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 text-center border border-primary-100 hover:shadow-soft-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-3">تلفن</h3>
            <p className="text-primary-600">
              <a href="tel:09375640513" className="hover:text-primary-900 transition-colors">
                09375640513
              </a>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 text-center border border-primary-100 hover:shadow-soft-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-3">آدرس</h3>
            <p className="text-primary-600">قم، زنبیل آباد، خیابان عطاران</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

