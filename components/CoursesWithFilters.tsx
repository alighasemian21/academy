'use client';

import { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import CourseFilters from '@/components/CourseFilters';
import { Course } from '@/lib/data/courses';

interface CoursesWithFiltersProps {
  courses: Course[];
}

export default function CoursesWithFilters({ courses }: CoursesWithFiltersProps) {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  return (
    <>
      <CourseFilters courses={courses} onFilteredCoursesChange={setFilteredCourses} />

      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">دوره‌ای با فیلترهای انتخاب شده یافت نشد</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      )}
    </>
  );
}

