'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from './CountUp';

interface CountUpWithDelayProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
}

export default function CountUpWithDelay({ 
  end, 
  duration = 3500, 
  suffix = '', 
  prefix = '',
  className = '',
  delay = 0
}: CountUpWithDelayProps) {
  const [shouldStart, setShouldStart] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldStart) return;

    const currentRef = countRef.current;
    if (!currentRef) return;

    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // For elements that are already in viewport, start immediately
    const checkInView = () => {
      const rect = currentRef.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight + 100 && rect.bottom > -100;
      
      if (isInView) {
        timeoutId = setTimeout(() => {
          setShouldStart(true);
        }, delay);
        return true;
      }
      return false;
    };

    // Check immediately if already in view (with a small delay to ensure ref is set)
    const initTimeout = setTimeout(() => {
      if (checkInView()) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !shouldStart) {
              timeoutId = setTimeout(() => {
                setShouldStart(true);
              }, delay);
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '100px 0px 0px 0px'
        }
      );

      observer.observe(currentRef);
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [shouldStart, delay]);

  if (!shouldStart) {
    return (
      <div ref={countRef} className={className}>
        {prefix}0{suffix}
      </div>
    );
  }

  return (
    <CountUp
      end={end}
      duration={duration}
      suffix={suffix}
      prefix={prefix}
      className={className}
    />
  );
}

