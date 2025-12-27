'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Service } from '@/lib/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 border border-primary-100">
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
        {!imgError ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
            <span className="text-center px-4 text-sm text-primary-700 font-medium">{service.title}</span>
          </div>
        )}
        {service.featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            ویژه
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-800 transition-colors">
          {service.title}
        </h3>
        <p className="text-primary-600 mb-5 text-sm leading-relaxed line-clamp-2">
          {service.description}
        </p>
        <ul className="space-y-2.5 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-primary-700">
              <svg className="w-4 h-4 text-accent-600 ml-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="block w-full bg-primary-900 text-white text-center py-3 rounded-xl font-semibold hover:bg-primary-800 transition-all duration-200 shadow-soft hover:shadow-soft-lg"
        >
          دریافت مشاوره
        </Link>
      </div>
    </div>
  );
}
