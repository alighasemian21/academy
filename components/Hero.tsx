import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #171717 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            آکادمی تخصصی آموزش تصویر و رسانه
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 mb-6 leading-tight tracking-tight">
            مهارت‌هایت را
            <span className="block text-accent-600 mt-2">به سطح حرفه‌ای برسان</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            در آکادمی 84، با روش‌های عملی و پروژه‌محور، از اصول اولیه تا تکنیک‌های پیشرفته را یاد می‌گیری و نمونه کارهای واقعی می‌سازی.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/academy/courses"
              className="group relative px-8 py-4 bg-primary-900 text-white rounded-xl font-semibold text-lg shadow-soft-lg hover:shadow-soft transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10">مشاهده دوره‌ها</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link
              href="/academy/enrollment"
              className="px-8 py-4 bg-white text-primary-900 border-2 border-primary-900 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300 w-full sm:w-auto"
            >
              شروع یادگیری
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-primary-200">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-900 mb-1">۱۰+</div>
              <div className="text-sm text-primary-600">سال تجربه</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-900 mb-1">۵۰۰+</div>
              <div className="text-sm text-primary-600">دانشجوی موفق</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-900 mb-1">۲۰+</div>
              <div className="text-sm text-primary-600">دوره تخصصی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

