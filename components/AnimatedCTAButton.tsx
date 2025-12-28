'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedCTAButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function AnimatedCTAButton({ 
  href, 
  children, 
  className = '',
  variant = 'primary'
}: AnimatedCTAButtonProps) {
  const baseClasses = variant === 'primary'
    ? 'inline-flex items-center gap-3 px-10 py-4 bg-primary-900 text-white rounded-2xl font-bold text-lg hover:bg-primary-800 transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl'
    : 'inline-flex items-center gap-3 px-10 py-4 bg-white text-primary-900 border-2 border-primary-900 rounded-2xl font-bold text-lg hover:bg-primary-50 hover:border-primary-800 transition-all duration-300 shadow-soft hover:shadow-soft-lg';

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
        <motion.svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ x: variant === 'primary' ? -5 : -5 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </motion.svg>
      </Link>
    </motion.div>
  );
}



