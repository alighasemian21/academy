'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { href: '/academy/studio', label: 'استودیو' },
    { href: '/blog', label: 'وبلاگ' },
    { href: '/contact', label: 'تماس با ما' },
  ];

  return (
    <header
      className={`bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1),0_8px_16px_-8px_rgba(0,0,0,0.1)]' : 'shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-reverse space-x-3 group" aria-label="صفحه اصلی آکادمی 84">
            <div
              className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-gray-100 p-2 transition-transform duration-200 hover:scale-105 active:scale-95"
              aria-hidden="true"
            >
              <Image
                src="/images/logos/logo-84-white.png"
                alt="لوگو آکادمی هشتاد و چهار"
                width={40}
                height={40}
                className="object-contain brightness-0"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-primary-900 hidden sm:inline tracking-tight group-hover:text-accent-600 transition-colors duration-200">آکادمی هشتاد و چهار</span>
            <span className="text-xl font-bold text-primary-900 sm:hidden group-hover:text-accent-600 transition-colors duration-200">آکادمی ۸۴</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary-700 hover:text-primary-900 font-medium text-sm transition-colors duration-200 relative group/link block"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 origin-center scale-x-0 transition-transform duration-200 ease-out group-hover/link:animate-navUnderlineDraw" />
                </Link>
              </div>
            ))}
            <div>
              <Link
                href="/academy/register"
                className="mr-2 xl:mr-4 px-5 xl:px-6 py-2.5 bg-primary-900 text-white rounded-xl font-semibold text-sm whitespace-nowrap shadow-soft hover:shadow-soft-lg transition-all duration-300 block hover:scale-105 hover:-translate-y-0.5 active:scale-95"
              >
                ثبت‌نام دوره
              </Link>
            </div>
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
        <div
          className={`lg:hidden border-t border-gray-100 transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-[min(500px,70vh)] opacity-100 mt-4 pt-4 pb-4 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="space-y-1 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3.5 text-primary-700 hover:text-primary-900 active:text-primary-900 hover:bg-gray-50 active:bg-gray-100 rounded-lg font-medium transition-colors duration-200 touch-manipulation min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/academy/register"
              className="block mx-4 mt-4 px-6 py-3.5 bg-primary-900 text-white text-center rounded-xl font-semibold hover:bg-primary-800 active:bg-primary-700 transition-colors duration-200 touch-manipulation min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              ثبت‌نام دوره
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
