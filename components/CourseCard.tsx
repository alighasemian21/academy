'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Course } from '@/lib/data/courses';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        {!imgError ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            <span className="text-center px-4 text-sm">{course.title}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">مدت زمان: {course.duration}</span>
          <span className="text-lg font-bold text-primary-600">
            {course.price.toLocaleString('fa-IR')} تومان
          </span>
        </div>
        <Link
          href={`/academy/courses/${course.slug}`}
          className="block w-full bg-primary-600 text-white text-center py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
}
