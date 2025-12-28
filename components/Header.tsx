'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ['0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)', '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 8px 16px -8px rgba(0, 0, 0, 0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'خانه' },
    { href: '/about', label: 'درباره ما' },
    { href: '/academy', label: 'آکادمی' },
    { href: '/academy/courses', label: 'دوره‌ها' },
    { href: '/academy/teachers', label: 'اساتید' },
    { href: '/company', label: 'شرکت' },
    { href: '/blog', label: 'وبلاگ' },
    { href: '/contact', label: 'تماس با ما' },
  ];

  return (
    <motion.header 
      className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50"
      style={{
        opacity: headerOpacity,
        boxShadow: headerShadow,
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-reverse space-x-3 group" aria-label="صفحه اصلی آکادمی 84">
            <motion.div 
              className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-gray-100 p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-hidden="true"
            >
              <Image
                src="/images/logos/logo-84.png"
                alt="لوگو آکادمی 84"
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
            <span className="text-2xl font-bold text-primary-900 hidden sm:inline tracking-tight group-hover:text-accent-600 transition-colors duration-200">آکادمی 84</span>
            <span className="text-xl font-bold text-primary-900 sm:hidden group-hover:text-accent-600 transition-colors duration-200">84</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-primary-700 hover:text-primary-900 font-medium text-sm transition-colors duration-200 relative group block"
                >
                  {link.label}
                  <motion.span 
                    className="absolute bottom-0 right-0 h-0.5 bg-gradient-to-l from-accent-500 to-accent-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <Link
                href="/academy/enrollment"
                className="mr-2 xl:mr-4 px-5 xl:px-6 py-2.5 bg-primary-900 text-white rounded-xl font-semibold text-sm whitespace-nowrap shadow-soft"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  ثبت‌نام
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden text-primary-800 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="منو"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden border-t border-gray-100 mt-4 pt-4 pb-4 space-y-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="block px-4 py-3.5 text-primary-700 hover:text-primary-900 active:text-primary-900 hover:bg-gray-50 active:bg-gray-100 rounded-lg font-medium transition-colors duration-200 touch-manipulation min-h-[44px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <Link
                href="/academy/enrollment"
                className="block mx-4 mt-4 px-6 py-3.5 bg-primary-900 text-white text-center rounded-xl font-semibold hover:bg-primary-800 active:bg-primary-700 transition-colors duration-200 touch-manipulation min-h-[44px] flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                ثبت‌نام
              </Link>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

