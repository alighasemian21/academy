import { ReactNode } from 'react';

interface AnimatedFeatureCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedFeatureCard({ 
  children, 
  className = '',
}: AnimatedFeatureCardProps) {
  return (
    <div className={`transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent-400 ${className}`}>
      {children}
    </div>
  );
}
