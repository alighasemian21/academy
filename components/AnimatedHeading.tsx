'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function AnimatedHeading({ 
  children, 
  className = '',
  as: Component = 'h2'
}: AnimatedHeadingProps) {
  const MotionComponent = motion[Component] as any;
  
  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionComponent>
  );
}



