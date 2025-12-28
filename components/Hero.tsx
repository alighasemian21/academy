'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CountUpWithDelay from './CountUpWithDelay';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null!);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Background Image with Overlay - Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/95 via-white/90 to-primary-50/95 z-10"></div>
        <motion.div 
          className="absolute inset-0 opacity-[0.03] z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #171717 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        ></motion.div>
      </motion.div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-20">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={badgeVariants}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-900 text-white rounded-full text-sm font-medium mb-8 shadow-soft-lg">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              <span>آکادمی 84 | آموزش تخصصی تصویر و رسانه</span>
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary-900 mb-8 leading-[1.1] tracking-tight">
              <motion.span 
                className="block mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                مسیر حرفه‌ای‌شدنت
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 bg-clip-text text-transparent animate-gradient"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                از همین امروز شروع می‌شود
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary-700 mb-14 max-w-4xl mx-auto leading-relaxed font-light">
              در آکادمی 84، مهارت‌هایت را با روش‌های عملی و پروژه‌محور، از صفر تا حرفه‌ای یاد می‌گیری. 
              <span className="block mt-3 font-semibold text-primary-900">هزاران دانشجو موفقیت خود را به ما مدیونند.</span>
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <MagneticButton strength={0.15}>
              <Link
                href="/academy/courses"
                className="group relative px-10 py-5 bg-primary-900 text-white rounded-2xl font-bold text-lg shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 w-full sm:w-auto touch-manipulation min-h-[56px] flex items-center justify-center overflow-hidden"
                aria-label="مشاهده دوره‌های آکادمی 84"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  مشاهده دوره‌ها
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </motion.svg>
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="absolute inset-0 bg-white/10 rounded-2xl"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Link
                href="/academy/enrollment"
                className="group px-10 py-5 bg-white text-primary-900 border-2 border-primary-900 rounded-2xl font-bold text-lg hover:bg-primary-50 hover:border-primary-800 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3 touch-manipulation min-h-[56px] shadow-soft hover:shadow-soft-lg"
                aria-label="شروع یادگیری رایگان در آکادمی 84"
              >
                شروع رایگان
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </motion.svg>
              </Link>
            </MagneticButton>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 max-w-4xl mx-auto pt-12 sm:pt-16 border-t-2 border-primary-200/50"
          >
            <div className="group min-h-[120px] flex flex-col justify-center">
              <CountUpWithDelay 
                end={10} 
                suffix="+" 
                delay={400}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors duration-300"
              />
              <div className="text-base sm:text-lg text-primary-600 font-medium">سال تجربه</div>
            </div>
            <div className="group min-h-[120px] flex flex-col justify-center">
              <CountUpWithDelay 
                end={500} 
                suffix="+" 
                delay={600}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors duration-300"
              />
              <div className="text-base sm:text-lg text-primary-600 font-medium">دانشجوی موفق</div>
            </div>
            <div className="group min-h-[120px] flex flex-col justify-center">
              <CountUpWithDelay 
                end={20} 
                suffix="+" 
                delay={800}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors duration-300"
              />
              <div className="text-base sm:text-lg text-primary-600 font-medium">دوره تخصصی</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-accent-200/30 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-primary-200/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
}

