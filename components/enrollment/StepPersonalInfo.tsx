'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
  const courses = getAllCourses();

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
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      {/* Course Selection */}
      <div>
        <label htmlFor="courseId" className={labelClassName}>
          انتخاب دوره <span className="text-red-500">*</span>
        </label>
        <select
          id="courseId"
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
          className={inputClassName('courseId')}
        >
          <option value="">یک دوره را انتخاب کنید...</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title} — {course.instructor}
            </option>
          ))}
        </select>
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
        <motion.button
          type="submit"
          className="w-full bg-accent-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent-600 transition-colors shadow-soft hover:shadow-soft-lg"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          مرحله بعد: اطلاعات دوره و پرداخت
        </motion.button>
      </div>
    </motion.form>
  );
}
