export const metadata = {
  title: 'درباره ما - آکادمی 84',
  description: 'آکادمی 84 - آموزش تخصصی تصویر و رسانه با بیش از ۱۰ سال تجربه. دوره‌های عملی و پروژه‌محور',
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
            <h2 className="text-3xl font-bold text-primary-900 mb-6">ما کی هستیم؟</h2>
            <div className="space-y-6 text-primary-700 leading-relaxed text-lg">
              <p>
                آکادمی 84 یک مرکز تخصصی آموزش تصویر و رسانه است که از سال ۱۳۹۴ فعالیت خود را آغاز کرده. در این سال‌ها، بیش از ۵۰۰ دانشجو با ما همراه شده‌اند و مهارت‌های خود را به سطح حرفه‌ای رسانده‌اند.
              </p>
              <p>
                تفاوت ما در این است که فقط تئوری یاد نمی‌دهیم. هر دوره با پروژه‌های واقعی همراه است و در پایان، نمونه کارهایی داری که می‌توانی در رزومه و پورتفولیو قرار دهی.
              </p>
              <p>
                اساتید ما سال‌ها در پروژه‌های واقعی کار کرده‌اند و تجربه‌های عملی خود را با تو به اشتراک می‌گذارند. این یعنی یاد می‌گیری که در دنیای واقعی چطور کار می‌کند، نه فقط در کتاب‌ها.
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
            <h3 className="text-3xl font-bold mb-8 text-center">ارزش‌های ما</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3">کیفیت</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  هر دوره با دقت طراحی شده و محتوای آن مرتب به‌روزرسانی می‌شود تا با آخرین استانداردهای صنعت هماهنگ باشد.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3">عملگرایی</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  تمرکز روی مهارت‌های عملی که در دنیای واقعی به کار می‌آیند. نه تئوری محض، بلکه کاربرد واقعی.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3">پشتیبانی</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  بعد از پایان دوره هم تنها نمی‌مانی. تیم ما برای پاسخ به سوالات و راهنمایی‌های بیشتر کنارت است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

