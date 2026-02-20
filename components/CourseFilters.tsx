'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { Course } from '@/lib/data/courses';

interface CourseFiltersProps {
  courses: Course[];
  onFilteredCoursesChange: (courses: Course[]) => void;
}

export default function CourseFilters({ courses, onFilteredCoursesChange }: CourseFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const [isInstructorOpen, setIsInstructorOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const instructorRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (instructorRef.current && !instructorRef.current.contains(e.target as Node)) {
        setIsInstructorOpen(false);
      }
      if (priceRef.current && !priceRef.current.contains(e.target as Node)) {
        setIsPriceOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const priceOptions = [
    { value: 'all', label: 'همه قیمت‌ها' },
    { value: 'low', label: 'زیر 2.5 میلیون' },
    { value: 'medium', label: '2.5 تا 3 میلیون' },
    { value: 'high', label: 'بالای 3 میلیون' },
  ];

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
    <div className="bg-white rounded-2xl shadow-soft p-4 sm:p-6 mb-8 border border-gray-100">
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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-200 text-sm hover:border-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            مدرس
          </label>
          <div ref={instructorRef} className="relative">
            <button
              type="button"
              onClick={() => { setIsInstructorOpen(!isInstructorOpen); setIsPriceOpen(false); }}
              className={`w-full px-4 py-2.5 border rounded-xl text-sm text-right flex items-center justify-between transition-all duration-200 outline-none ${
                isInstructorOpen
                  ? 'border-primary-500 ring-2 ring-primary-500/20 bg-white'
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
            >
              {selectedInstructor ? (
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600 shrink-0" />
                  <span className="font-medium text-primary-800">{selectedInstructor}</span>
                </span>
              ) : (
                <span className="text-gray-400">همه اساتید</span>
              )}
              <svg
                className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${isInstructorOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isInstructorOpen && (
              <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-soft-lg overflow-hidden animate-[fade-in_0.15s_ease-out]">
                <div className="max-h-56 overflow-y-auto py-1">
                  <button
                    type="button"
                    onClick={() => { setSelectedInstructor(''); setIsInstructorOpen(false); }}
                    className={`w-full text-right px-4 py-2.5 flex items-center justify-between text-sm transition-colors duration-150 ${
                      !selectedInstructor ? 'bg-primary-50 font-semibold text-primary-700' : 'hover:bg-gray-50 text-primary-800'
                    }`}
                  >
                    <span>همه اساتید</span>
                    {!selectedInstructor && (
                      <svg className="w-4 h-4 text-primary-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  {instructors.map((instructor) => {
                    const isSelected = selectedInstructor === instructor;
                    return (
                      <button
                        key={instructor}
                        type="button"
                        onClick={() => { setSelectedInstructor(instructor); setIsInstructorOpen(false); }}
                        className={`w-full text-right px-4 py-2.5 flex items-center justify-between text-sm transition-colors duration-150 ${
                          isSelected ? 'bg-primary-50 font-semibold text-primary-700' : 'hover:bg-gray-50 text-primary-800'
                        }`}
                      >
                        <span>{instructor}</span>
                        {isSelected && (
                          <svg className="w-4 h-4 text-primary-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            محدوده قیمت
          </label>
          <div ref={priceRef} className="relative">
            <button
              type="button"
              onClick={() => { setIsPriceOpen(!isPriceOpen); setIsInstructorOpen(false); }}
              className={`w-full px-4 py-2.5 border rounded-xl text-sm text-right flex items-center justify-between transition-all duration-200 outline-none ${
                isPriceOpen
                  ? 'border-primary-500 ring-2 ring-primary-500/20 bg-white'
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
            >
              {priceRange !== 'all' ? (
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600 shrink-0" />
                  <span className="font-medium text-primary-800">
                    {priceOptions.find((o) => o.value === priceRange)?.label}
                  </span>
                </span>
              ) : (
                <span className="text-gray-400">همه قیمت‌ها</span>
              )}
              <svg
                className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${isPriceOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isPriceOpen && (
              <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-soft-lg overflow-hidden animate-[fade-in_0.15s_ease-out]">
                <div className="py-1">
                  {priceOptions.map((option) => {
                    const isSelected = priceRange === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => { setPriceRange(option.value as 'all' | 'low' | 'medium' | 'high'); setIsPriceOpen(false); }}
                        className={`w-full text-right px-4 py-2.5 flex items-center justify-between text-sm transition-colors duration-150 ${
                          isSelected ? 'bg-primary-50 font-semibold text-primary-700' : 'hover:bg-gray-50 text-primary-800'
                        }`}
                      >
                        <span>{option.label}</span>
                        {isSelected && (
                          <svg className="w-4 h-4 text-primary-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-600">
          {filteredCourses.length} دوره یافت شد
        </p>
        {(searchQuery || selectedInstructor || priceRange !== 'all') && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-white bg-primary-50 hover:bg-primary-600 px-4 py-2 rounded-xl font-medium transition-all duration-200"
          >
            پاک کردن فیلترها
          </button>
        )}
      </div>
    </div>
  );
}
