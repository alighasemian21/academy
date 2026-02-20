'use client';

import { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({
  children,
  className = '',
}: MagneticButtonProps) {
  return (
    <div className={`inline-block transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}>
      {children}
    </div>
  );
}
