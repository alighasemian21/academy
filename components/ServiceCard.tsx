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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        {!imgError ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            <span className="text-center px-4 text-sm">{service.title}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <span className="text-primary-600 ml-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="block w-full bg-primary-600 text-white text-center py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          دریافت مشاوره
        </Link>
      </div>
    </div>
  );
}
