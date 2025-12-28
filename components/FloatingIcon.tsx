'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingIconProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FloatingIcon({ 
  children, 
  delay = 0, 
  duration = 6,
  className = '' 
}: FloatingIconProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

