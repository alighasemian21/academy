'use client';

import { ReactNode, useState } from 'react';

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: 'button' | 'link';
}

export default function RippleButton({
  children,
  className = '',
  onClick,
  href,
  as = 'button',
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [rippleId, setRippleId] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: rippleId };
    setRipples((prev) => [...prev, newRipple]);
    setRippleId((prev) => prev + 1);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const baseClasses = `relative overflow-hidden ${className}`;

  const content = (
    <>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 300,
            height: 300,
            marginLeft: -150,
            marginTop: -150,
          }}
        />
      ))}
    </>
  );

  if (as === 'link' && href) {
    return (
      <a href={href} className={baseClasses} onClick={handleClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={handleClick}>
      {content}
    </button>
  );
}
