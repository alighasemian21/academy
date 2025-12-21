'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Teacher } from '@/lib/data/teachers';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 bg-gray-200">
        {!imgError ? (
          <Image
            src={teacher.image}
            alt={teacher.name}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            <span className="text-center px-4 text-sm">{teacher.name}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
        <p className="text-primary-600 mb-3">{teacher.title}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{teacher.bio}</p>
        <div className="flex flex-wrap gap-2">
          {teacher.specialties.map((specialty, index) => (
            <span
              key={index}
              className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
