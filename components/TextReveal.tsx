'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function TextReveal({ children, delay = 0, className = '' }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setIsVisible(true), delay);
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-in-up transition-all duration-500 ease-out ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? '0ms' : `${delay}ms` }}
    >
      {children}
    </div>
  );
}
