'use client';

import { motion } from 'framer-motion';
import SafeImage from '@/components/SafeImage';
import { Teacher } from '@/lib/data/teachers';

interface TeacherCardProps {
  teacher: Teacher;
  index?: number;
}

export default function TeacherCard({ teacher, index = 0 }: TeacherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-soft overflow-hidden border border-transparent group transition-all duration-300"
        whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.12)' }}
      >
        <div className="relative h-48 sm:h-64 bg-gray-100 overflow-hidden">
          <SafeImage
            src={teacher.image}
            alt={`عکس استاد ${teacher.name} - ${teacher.title} - آکادمی 84`}
            fill
            className="object-cover teacher-image-offset transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-1 text-primary-900">{teacher.name}</h3>
          <p className="text-accent-600 font-medium mb-3 text-sm">{teacher.title}</p>
          <p className="text-primary-500 mb-4 line-clamp-3 text-sm leading-relaxed">{teacher.bio}</p>
          <div className="flex flex-wrap gap-2">
            {teacher.specialties.map((specialty, i) => (
              <span
                key={i}
                className="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-lg font-medium border border-primary-100 transition-colors duration-200 hover:bg-primary-100"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
