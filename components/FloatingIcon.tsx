import { ReactNode } from 'react';

interface FloatingIconProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FloatingIcon({
  children,
  className = '',
}: FloatingIconProps) {
  return (
    <div className={`animate-float ${className}`}>
      {children}
    </div>
  );
}
