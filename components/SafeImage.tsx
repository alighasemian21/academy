'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
}: SafeImageProps) {
  const [imgError, setImgError] = useState(false);
  const isSVG = src.endsWith('.svg');

  // For SVG files, use regular <img> tag to avoid CSP and Next.js Image issues
  if (isSVG) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={className}
          onError={() => setImgError(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          loading={priority ? 'eager' : 'lazy'}
        />
      );
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={() => setImgError(true)}
        loading={priority ? 'eager' : 'lazy'}
      />
    );
  }

  if (imgError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className || ''}`}
        style={fill ? { width: '100%', height: '100%', position: 'absolute' } : { width, height }}
      >
        <span className="text-center px-4 text-sm">{alt}</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={() => setImgError(true)}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        loading={priority ? undefined : 'lazy'}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgError(true)}
      priority={priority}
    />
  );
}
