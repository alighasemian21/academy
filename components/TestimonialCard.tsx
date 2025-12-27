'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Testimonial } from '@/lib/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-soft p-8 border border-primary-100 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] h-full flex flex-col active:scale-[0.98]">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent-500' : 'text-primary-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-primary-700 leading-relaxed mb-6 flex-grow text-lg">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Course Badge */}
      {testimonial.course && (
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg border border-primary-200">
            {testimonial.course}
          </span>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-primary-100">
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-primary-100 flex-shrink-0">
          {!imgError && !testimonial.image.startsWith('data:') && !testimonial.image.includes('placeholder') ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              sizes="56px"
              unoptimized={testimonial.image.endsWith('.svg')}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary-200 text-primary-600 font-bold text-lg">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-primary-900 text-lg">{testimonial.name}</h4>
          <p className="text-sm text-primary-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

