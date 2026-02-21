'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

export interface HeroSlide {
  image: string;
  alt: string;
}

interface HeroProps {
  slides?: HeroSlide[];
}

const defaultSlides: HeroSlide[] = [
  { image: '/images/hero/slide-1.jpg', alt: 'استودیو حرفه‌ای آکادمی 84' },
  { image: '/images/hero/slide-2.jpg', alt: 'فضای آموزشی آکادمی 84' },
  { image: '/images/hero/slide-3.jpg', alt: 'تیم خلاق آکادمی 84' },
];

const SLIDE_INTERVAL = 6000;

export default function Hero({ slides }: HeroProps) {
  const heroSlides = slides && slides.length > 0 ? slides : defaultSlides;
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
  }, [heroSlides.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    resetTimer();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Slide images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: backgroundY }}
        >
          <Image
            src={heroSlides[current].image}
            alt={heroSlides[current].alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={current === 0}
            quality={75}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay -- bottom blends into Stats dark bg */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-900" />

      {/* Dot-pattern texture */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden hidden sm:block">
        <motion.div
          className="absolute top-20 right-10 w-24 h-24 bg-white/[0.06] rounded-full blur-2xl"
          animate={{ y: [0, -25, 0], x: [0, 12, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-24 left-10 w-36 h-36 bg-accent-500/[0.06] rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -18, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/[0.04] rounded-full blur-xl"
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-12">
            <Image
              src="/images/logos/logo-84-white.png"
              alt="آکادمی هشتاد و چهار"
              width={80}
              height={80}
              className="mx-auto opacity-90"
              priority
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-[1.25] tracking-tight max-w-4xl mx-auto drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
          >
            <span className="block">اولین ایونت تخصصی</span>
            <span className="block mt-1 sm:mt-1.5">تولید محتوا با موبایل</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/60 font-light mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            مرکز آموزش حضوری و پرمیوم مهارت‌های دیجیتال و تصویری
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-white/40 mb-12 sm:mb-14 max-w-xl mx-auto"
          >
            ما ابزار آموزش نمی‌دهیم؛ ما انسان‌هایی می‌سازیم که تصمیم درست می‌گیرند.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 sm:mb-12"
          >
            <Link
              href="/workshop/kashan-mobile-clip"
              className="group px-8 sm:px-10 py-4 sm:py-5 border border-white/20 text-white rounded-full font-medium text-base sm:text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 w-full sm:w-auto text-center min-h-[52px] flex items-center justify-center gap-3"
            >
              ایونت موج
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <Link
              href="/workshop/kashan-mobile-clip"
              className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-primary-900 rounded-full font-medium text-base sm:text-lg hover:bg-white/90 transition-all duration-300 w-full sm:w-auto text-center min-h-[52px] flex items-center justify-center"
            >
              پیش‌ثبت‌نام
            </Link>
          </motion.div>

          {/* Navigation dots */}
          {heroSlides.length > 1 && (
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2.5"
            >
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`اسلاید ${index + 1}`}
                  className="relative p-1 group"
                >
                  <span
                    className={`block rounded-full transition-all duration-500 ${
                      index === current
                        ? 'w-8 h-2 bg-white'
                        : 'w-2 h-2 bg-white/30 group-hover:bg-white/50'
                    }`}
                  />
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <motion.div
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
