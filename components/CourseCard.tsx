'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Course } from '@/lib/data/courses';
import PlaceholderImage from './PlaceholderImage';

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        href={`/academy/courses/${course.slug}`}
        className="group block bg-white rounded-2xl shadow-soft overflow-hidden border border-primary-100 h-full flex flex-col transition-all duration-300 hover:shadow-soft-xl hover:border-accent-200"
      >
        <div className="relative h-52 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
          <PlaceholderImage type="course" className="w-full h-full absolute inset-0" text={course.title} />
          {course.featured && (
            <motion.div 
              className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              ویژه
            </motion.div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <motion.div 
          className="p-6 flex-grow flex flex-col"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors line-clamp-2 min-h-[3.5rem]">
            {course.title}
          </h3>
          <p className="text-primary-600 mb-5 line-clamp-2 text-sm leading-relaxed flex-grow">
            {course.description}
          </p>
          
          <div className="flex items-center justify-between mb-5 pb-5 border-b border-primary-100">
            <div className="flex items-center gap-2 text-sm text-primary-600">
              <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.duration}</span>
            </div>
            <div className="text-lg font-bold text-primary-900">
              {course.price.toLocaleString('fa-IR')} <span className="text-sm font-normal text-primary-600">تومان</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-primary-700">
              <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">{course.instructor}</span>
            </span>
            <motion.span 
              className="flex items-center gap-2 text-accent-600 font-bold"
              whileHover={{ gap: 8, color: '#ea580c' }}
              transition={{ duration: 0.2 }}
            >
              مشاهده دوره
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
