'use client';

import { useState, useMemo } from 'react';
import { Course } from '@/lib/data/courses';

interface CourseFiltersProps {
  courses: Course[];
  onFilteredCoursesChange: (courses: Course[]) => void;
}

export default function CourseFilters({ courses, onFilteredCoursesChange }: CourseFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  const instructors = useMemo(() => {
    const unique = new Set(courses.map((course) => course.instructor));
    return Array.from(unique);
  }, [courses]);

  const filteredCourses = useMemo(() => {
    let filtered = [...courses];

    if (searchQuery) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedInstructor) {
      filtered = filtered.filter((course) => course.instructor === selectedInstructor);
    }

    if (priceRange !== 'all') {
      filtered = filtered.filter((course) => {
        if (priceRange === 'low') return course.price < 2500000;
        if (priceRange === 'medium') return course.price >= 2500000 && course.price < 3000000;
        if (priceRange === 'high') return course.price >= 3000000;
        return true;
      });
    }

    return filtered;
  }, [courses, searchQuery, selectedInstructor, priceRange]);

  useMemo(() => {
    onFilteredCoursesChange(filteredCourses);
  }, [filteredCourses, onFilteredCoursesChange]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedInstructor('');
    setPriceRange('all');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            جستجو
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو در عنوان یا توضیحات..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            مدرس
          </label>
          <select
            value={selectedInstructor}
            onChange={(e) => setSelectedInstructor(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">همه اساتید</option>
            {instructors.map((instructor) => (
              <option key={instructor} value={instructor}>
                {instructor}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            محدوده قیمت
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value as any)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">همه قیمت‌ها</option>
            <option value="low">زیر 2.5 میلیون</option>
            <option value="medium">2.5 تا 3 میلیون</option>
            <option value="high">بالای 3 میلیون</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-600">
          {filteredCourses.length} دوره یافت شد
        </p>
        {(searchQuery || selectedInstructor || priceRange !== 'all') && (
          <button
            onClick={clearFilters}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            پاک کردن فیلترها
          </button>
        )}
      </div>
    </div>
  );
}

