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
    ? 'inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-primary-900 text-white rounded-full font-bold text-base sm:text-lg hover:bg-primary-800 transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97]'
    : 'inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-primary-900 border-2 border-primary-200 rounded-full font-bold text-base sm:text-lg hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97]';

  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {children}
      <svg 
        className="w-4 h-4 sm:w-5 sm:h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
      </svg>
    </Link>
  );
}
