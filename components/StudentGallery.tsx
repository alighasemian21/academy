'use client';

import { motion } from 'framer-motion';
import SafeImage from '@/components/SafeImage';
import { Student } from '@/lib/data/students';

interface StudentGalleryProps {
  student: Student;
  index?: number;
}

export default function StudentGallery({ student, index = 0 }: StudentGalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-soft overflow-hidden border border-transparent group transition-all duration-300 h-full"
        whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.12)' }}
      >
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          <SafeImage
            src={student.image}
            alt={`نمونه کار ${student.projectTitle} توسط ${student.name} - دانشجوی دوره ${student.course} - آکادمی 84`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {student.achievement && (
            <div className="absolute top-3 left-3 bg-accent-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium shadow-soft">
              {student.achievement}
            </div>
          )}
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary-900">{student.projectTitle}</h3>
          <p className="text-accent-600 font-medium mb-1 text-sm">{student.name}</p>
          <p className="text-primary-400 text-xs mb-3">دوره: {student.course}</p>
          <p className="text-primary-500 line-clamp-2 text-sm leading-relaxed">{student.projectDescription}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
