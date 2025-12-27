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
    <Link 
      href={`/academy/courses/${course.slug}`}
      className="group block bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-primary-100 active:scale-[0.98]"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
        {!imgError ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
            <span className="text-center px-4 text-sm text-primary-700 font-medium">{course.title}</span>
          </div>
        )}
        {course.featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            ویژه
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-800 transition-colors line-clamp-2">
          {course.title}
        </h3>
        <p className="text-primary-600 mb-4 line-clamp-2 text-sm leading-relaxed">
          {course.description}
        </p>
        <div className="flex items-center justify-between mb-5 pb-5 border-b border-primary-100">
          <div className="flex items-center gap-2 text-sm text-primary-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{course.duration}</span>
          </div>
          <div className="text-lg font-bold text-primary-900">
            {course.price.toLocaleString('fa-IR')} <span className="text-sm font-normal text-primary-600">تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-primary-700">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {course.instructor}
          </span>
          <span className="flex items-center gap-1 text-accent-600 font-semibold group-hover:gap-2 group-hover:text-accent-700 transition-all">
            مشاهده دوره
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
