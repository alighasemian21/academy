'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedFeatureCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedFeatureCard({ 
  children, 
  className = '',
  delay = 0
}: AnimatedFeatureCardProps) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -8, 
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
        borderColor: '#fb923c'
      }}
    >
      {children}
    </motion.div>
  );
}



