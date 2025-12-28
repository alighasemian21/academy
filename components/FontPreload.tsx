'use client';

import { useEffect } from 'react';

export default function FontPreload() {
  useEffect(() => {
    // Preload critical fonts
    const fonts = [
      '/fonts/Vazir-Regular.woff2',
      '/fonts/Vazir-Bold.woff2',
      '/fonts/IranianSans.woff2',
    ];

    fonts.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = font;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}

