import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'درباره ما',
  description: 'آکادمی 84 - مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری. ما ابزار آموزش نمی‌دهیم؛ ما انسان‌هایی می‌سازیم که می‌توانند در دنیای دیجیتال و هوش مصنوعی تصمیم درست بگیرند و خروجی واقعی بسازند.',
  keywords: ['درباره آکادمی 84', 'معرفی آکادمی 84', 'آکادمی 84', 'آموزش دیجیتال', 'آموزش تصویر و رسانه', 'آموزش حضوری', 'مهارت‌های دیجیتال'],
  openGraph: {
    title: 'درباره ما | آکادمی 84',
    description: 'آکادمی 84 - مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری',
    url: 'https://www.academy84.ir/about',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/about',
  },
};

export default function AboutPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 mb-6 tracking-tight">
              درباره آکادمی 84
            </h1>
            <p className="text-xl text-primary-700 max-w-2xl mx-auto">
              جایی که مهارت‌هایت را به سطح حرفه‌ای می‌رسانی
            </p>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-12 border border-primary-100">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">معرفی آکادمی ۸۴</h2>
            <div className="space-y-6 text-primary-700 leading-relaxed text-lg">
              <p>
                آکادمی ۸۴، مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری است.
              </p>
              <p>
                ما ابزار آموزش نمی‌دهیم؛ ما انسان‌هایی می‌سازیم که می‌توانند در دنیای دیجیتال و هوش مصنوعی تصمیم درست بگیرند و خروجی واقعی بسازند.
              </p>
              <p>
                در آکادمی ۸۴، خلاقیت، تصمیم‌گیری و تجربه عملی محور اصلی آموزش است.
                AI تنها دستیار شماست، نه معلم. شما در مسیر تصمیم‌سازی حرفه‌ای، پروژه واقعی و مهارت غیرقابل جایگزینی با ماشین حرکت می‌کنید.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-primary-100 hover:border-primary-200 transition-colors">
              <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">ماموریت ما</h3>
              <p className="text-primary-700 leading-relaxed">
                آماده کردن تو برای ورود به بازار کار واقعی. نه فقط یادگیری تئوری، بلکه ساخت نمونه کارهای قابل ارائه و کسب مهارت‌های عملی که کارفرماها دنبالش هستند.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-primary-100 hover:border-primary-200 transition-colors">
              <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">چشم‌انداز ما</h3>
              <p className="text-primary-700 leading-relaxed">
                تبدیل شدن به مرجع اول آموزش تصویر و رسانه در ایران. جایی که هر کسی که می‌خواهد در این حوزه حرفه‌ای شود، اول به آکادمی 84 فکر می‌کند.
              </p>
            </div>
          </div>

          <div className="bg-primary-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">چرا آکادمی ۸۴؟</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3">حضوری و پرمیوم</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  تمرین عملی و نقد انسانی
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3">خلاقیت محور</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  یادگیری ابزار نیست، یادگیری تصمیم‌سازی است
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3">ضد AI</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  مهارت‌هایی که ماشین جایگزینش نمی‌شود
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3">خروجی واقعی</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  پروژه‌هایی که آماده انتشار یا استفاده حرفه‌ای هستند
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

