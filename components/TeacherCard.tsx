'use client';

import SafeImage from '@/components/SafeImage';
import { Teacher } from '@/lib/data/teachers';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <SafeImage
          src={teacher.image}
          alt={`عکس استاد ${teacher.name} - ${teacher.title} - آکادمی 84`}
          fill
          className="object-cover teacher-image-offset"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 300px"
        />
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
