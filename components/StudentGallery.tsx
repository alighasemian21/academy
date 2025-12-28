'use client';

import { Student } from '@/lib/data/students';
import PlaceholderImage from './PlaceholderImage';

interface StudentGalleryProps {
  student: Student;
}

export default function StudentGallery({ student }: StudentGalleryProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <PlaceholderImage type="student" className="w-full h-full absolute inset-0" text={student.projectTitle} />
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
