'use client';

import Link from 'next/link';
import CountUp from './CountUp';
import AnimatedSection from './AnimatedSection';

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
          <AnimatedSection animation="fade-in" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              آکادمی تخصصی آموزش تصویر و رسانه
            </div>
          </AnimatedSection>
          
          {/* Main Heading */}
          <AnimatedSection animation="fade-in-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 mb-6 leading-tight tracking-tight">
              مهارت‌هایت را
              <span className="block text-accent-600 mt-2">به سطح حرفه‌ای برسان</span>
            </h1>
          </AnimatedSection>
          
          {/* Description */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              در آکادمی 84، با روش‌های عملی و پروژه‌محور، از اصول اولیه تا تکنیک‌های پیشرفته را یاد می‌گیری و نمونه کارهای واقعی می‌سازی.
            </p>
          </AnimatedSection>
          
          {/* CTA Buttons */}
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/academy/courses"
                className="group relative px-8 py-4 bg-primary-900 text-white rounded-xl font-semibold text-lg shadow-soft-lg hover:shadow-soft transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto touch-manipulation min-h-[52px] flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  مشاهده دوره‌ها
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                href="/academy/enrollment"
                className="px-8 py-4 bg-white text-primary-900 border-2 border-primary-900 rounded-xl font-semibold text-lg hover:bg-primary-50 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 touch-manipulation min-h-[52px]"
              >
                شروع یادگیری
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
          
          {/* Stats */}
          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-primary-200">
              <div>
                <CountUp 
                  end={10} 
                  suffix="+" 
                  className="text-3xl sm:text-4xl font-bold text-primary-900 mb-1"
                />
                <div className="text-sm text-primary-600">سال تجربه</div>
              </div>
              <div>
                <CountUp 
                  end={500} 
                  suffix="+" 
                  className="text-3xl sm:text-4xl font-bold text-primary-900 mb-1"
                />
                <div className="text-sm text-primary-600">دانشجوی موفق</div>
              </div>
              <div>
                <CountUp 
                  end={20} 
                  suffix="+" 
                  className="text-3xl sm:text-4xl font-bold text-primary-900 mb-1"
                />
                <div className="text-sm text-primary-600">دوره تخصصی</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

