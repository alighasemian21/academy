'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '@/lib/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="bg-white rounded-2xl shadow-soft p-8 border border-primary-100 hover:shadow-soft-lg transition-all duration-300 h-full flex flex-col group">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent-500' : 'text-primary-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-primary-700 leading-relaxed mb-6 flex-grow text-lg group-hover:text-primary-900 transition-colors duration-300">
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
        <motion.div 
          className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex-shrink-0 ring-2 ring-primary-200 group-hover:ring-accent-300 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {!imgError && !testimonial.image.startsWith('data:') && !testimonial.image.includes('placeholder') ? (
            <Image
              src={testimonial.image}
              alt={`عکس ${testimonial.name} - دانشجوی ${testimonial.course || 'آکادمی 84'}`}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              sizes="56px"
              unoptimized={testimonial.image.endsWith('.svg')}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-400 to-accent-500 text-white font-bold text-lg">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </motion.div>
        <div>
          <h4 className="font-bold text-primary-900 text-lg group-hover:text-accent-600 transition-colors duration-300">{testimonial.name}</h4>
          <p className="text-sm text-primary-600">{testimonial.role}</p>
        </div>
      </div>
      </div>
    </motion.div>
  );
}

