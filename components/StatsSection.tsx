'use client';

import { motion } from 'framer-motion';
import CountUpWithDelay from './CountUpWithDelay';
import AnimatedSection from './AnimatedSection';
import AnimatedHeading from './AnimatedHeading';

export default function StatsSection() {
  const stats = [
    {
      number: 10,
      suffix: '+',
      label: 'سال تجربه',
      description: 'در زمینه آموزش',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: 500,
      suffix: '+',
      label: 'دانشجوی موفق',
      description: 'در سراسر ایران',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: 20,
      suffix: '+',
      label: 'دوره تخصصی',
      description: 'در زمینه‌های مختلف',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      number: 98,
      suffix: '%',
      label: 'رضایت دانشجویان',
      description: 'از کیفیت آموزش',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <section className="pt-6 sm:pt-10 pb-24 sm:pb-28 lg:pb-32 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-14 sm:mb-16">
              <AnimatedHeading
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight"
                as="h2"
              >
                اعداد حرف می‌زنند
              </AnimatedHeading>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                اعتماد هزاران دانشجو و سال‌ها تجربه در زمینه آموزش، آکادمی 84 را به برترین مرکز آموزش تبدیل کرده است
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-2xl mb-4 sm:mb-5 group-hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </motion.div>
                  <CountUpWithDelay
                    end={stat.number}
                    suffix={stat.suffix}
                    delay={index * 200}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1.5 sm:mb-2 block group-hover:text-accent-300 transition-colors duration-300"
                  />
                  <div className="text-base sm:text-lg font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-white/60 text-xs sm:text-sm">{stat.description}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom curve -- outside overflow-hidden, overlaps to kill subpixel gap */}
      <div className="relative -mt-1 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}

