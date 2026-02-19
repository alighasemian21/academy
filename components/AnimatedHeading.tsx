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
  return (
    <Component className={className}>
      {children}
    </Component>
  );
}
