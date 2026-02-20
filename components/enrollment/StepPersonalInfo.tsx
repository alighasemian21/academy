'use client';

import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import type { PersonalInfoData } from '@/lib/validations/enrollment';
import { personalInfoSchema } from '@/lib/validations/enrollment';
import { getAllCourses } from '@/lib/data/courses';

interface StepPersonalInfoProps {
  data: PersonalInfoData & { courseId: string };
  onNext: (data: PersonalInfoData & { courseId: string }) => void;
}

export default function StepPersonalInfo({ data, onNext }: StepPersonalInfoProps) {
  const [formData, setFormData] = useState<PersonalInfoData & { courseId: string }>({
    name: data.name || '',
    phone: data.phone || '',
    email: data.email || '',
    nationalId: data.nationalId || '',
    gender: data.gender || '' as any,
    birthDate: data.birthDate || '',
    address: data.address || '',
    courseId: data.courseId || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const courses = getAllCourses();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCourseSelect = (courseId: string) => {
    setFormData((prev) => ({ ...prev, courseId }));
    setIsDropdownOpen(false);
    if (errors.courseId) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.courseId;
        return next;
      });
    }
  };

  const selectedCourse = courses.find((c) => c.id === formData.courseId);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleDateChange = (date: any) => {
    if (date) {
      const formatted = date.format('YYYY/MM/DD');
      setFormData((prev) => ({ ...prev, birthDate: formatted }));
      if (errors.birthDate) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.birthDate;
          return next;
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate courseId separately
    if (!formData.courseId) {
      setErrors((prev) => ({ ...prev, courseId: 'لطفاً یک دوره انتخاب کنید' }));
      return;
    }

    const result = personalInfoSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    onNext(formData);
  };

  const inputClassName = (field: string) =>
    `w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all duration-200 text-sm ${
      errors[field]
        ? 'border-red-400 bg-red-50'
        : 'border-gray-300 bg-white hover:border-gray-400'
    }`;

  const labelClassName = 'block text-sm font-medium text-primary-700 mb-1.5';

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 animate-[fade-in_0.3s_ease-out]"
    >
      {/* Course Selection - Custom Dropdown */}
      <div>
        <label className={labelClassName}>
          انتخاب دوره <span className="text-red-500">*</span>
        </label>
        <div ref={dropdownRef} className="relative">
          {/* Trigger Button */}
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full px-4 py-3 border rounded-xl text-sm text-right flex items-center justify-between transition-all duration-200 outline-none ${
              errors.courseId
                ? 'border-red-400 bg-red-50'
                : isDropdownOpen
                ? 'border-accent-500 ring-2 ring-accent-500/20 bg-white'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          >
            {selectedCourse ? (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-500 shrink-0" />
                <span className="font-medium text-primary-800">{selectedCourse.title}</span>
                <span className="text-primary-400 hidden sm:inline">—</span>
                <span className="text-primary-400 text-xs hidden sm:inline">{selectedCourse.instructor}</span>
              </span>
            ) : (
              <span className="text-gray-400">یک دوره را انتخاب کنید...</span>
            )}
            <svg
              className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-soft-lg overflow-hidden animate-[fade-in_0.15s_ease-out]">
              <div className="max-h-64 overflow-y-auto py-1">
                {courses.map((course) => {
                  const isSelected = formData.courseId === course.id;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleCourseSelect(course.id)}
                      className={`w-full text-right px-4 py-3 flex items-center justify-between gap-3 transition-colors duration-150 ${
                        isSelected
                          ? 'bg-accent-50'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className={`text-sm truncate ${isSelected ? 'font-semibold text-accent-600' : 'font-medium text-primary-800'}`}>
                          {course.title}
                        </span>
                        <span className="text-xs text-primary-400 truncate">
                          {course.instructor} · {course.duration}
                        </span>
                      </div>
                      {isSelected && (
                        <svg
                          className="w-5 h-5 text-accent-500 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
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
        {errors.courseId && (
          <p className="text-red-500 text-xs mt-1">{errors.courseId}</p>
        )}
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClassName}>
          نام و نام خانوادگی <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClassName('name')}
          placeholder="مثال: علی محمدی"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Phone & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClassName}>
            شماره همراه <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputClassName('phone')} text-left dir-ltr`}
            placeholder="09123456789"
            dir="ltr"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClassName}>
            ایمیل <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClassName('email')} text-left`}
            placeholder="example@email.com"
            dir="ltr"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* National ID & Gender Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nationalId" className={labelClassName}>
            کد ملی <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nationalId"
            name="nationalId"
            value={formData.nationalId}
            onChange={handleChange}
            className={`${inputClassName('nationalId')} text-left`}
            placeholder="۱۲۳۴۵۶۷۸۹۰"
            dir="ltr"
            maxLength={10}
          />
          {errors.nationalId && (
            <p className="text-red-500 text-xs mt-1">{errors.nationalId}</p>
          )}
        </div>
        <div>
          <label className={labelClassName}>
            جنسیت <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className="w-4 h-4 text-accent-500 border-gray-300 focus:ring-accent-500"
              />
              <span className="text-sm text-primary-700 group-hover:text-primary-900">
                مرد
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className="w-4 h-4 text-accent-500 border-gray-300 focus:ring-accent-500"
              />
              <span className="text-sm text-primary-700 group-hover:text-primary-900">
                زن
              </span>
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
          )}
        </div>
      </div>

      {/* Birth Date */}
      <div>
        <label className={labelClassName}>
          تاریخ تولد <span className="text-red-500">*</span>
        </label>
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          value={formData.birthDate || undefined}
          onChange={handleDateChange}
          format="YYYY/MM/DD"
          inputClass={inputClassName('birthDate')}
          containerClassName="w-full"
          placeholder="انتخاب تاریخ تولد"
          maxDate={new Date()}
        />
        {errors.birthDate && (
          <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className={labelClassName}>
          آدرس <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className={inputClassName('address')}
          placeholder="آدرس کامل محل سکونت خود را وارد کنید..."
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-accent-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent-600 transition-colors shadow-soft hover:shadow-soft-lg"
        >
          مرحله بعد: اطلاعات دوره و پرداخت
        </button>
      </div>
    </form>
  );
}
