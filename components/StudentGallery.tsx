'use client';

import SafeImage from '@/components/SafeImage';
import { Student } from '@/lib/data/students';

interface StudentGalleryProps {
  student: Student;
}

export default function StudentGallery({ student }: StudentGalleryProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <SafeImage
          src={student.image}
          alt={`نمونه کار ${student.projectTitle} توسط ${student.name} - دانشجوی دوره ${student.course} - آکادمی 84`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
        />
        {student.achievement && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded">
            {student.achievement}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{student.projectTitle}</h3>
        <p className="text-primary-600 mb-2">{student.name}</p>
        <p className="text-gray-600 text-sm mb-2">دوره: {student.course}</p>
        <p className="text-gray-700 line-clamp-2">{student.projectDescription}</p>
      </div>
    </div>
  );
}
