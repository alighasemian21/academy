'use client';

import Link from 'next/link';
import type { RegistrationFormData } from '@/lib/validations/enrollment';
import { getCourseById } from '@/lib/data/courses';

interface StepConfirmationProps {
  data: RegistrationFormData;
  onBack: () => void;
  successTitle?: string;
  successDescription?: string;
}

function formatPricePersian(price: number): string {
  return `${price.toLocaleString('fa-IR')} تومان`;
}

export default function StepConfirmation({ data, onBack, successTitle, successDescription }: StepConfirmationProps) {
  const course = getCourseById(data.courseId);

  return (
    <div className="text-center animate-[fade-in_0.4s_ease-out]">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-[scale-in_0.4s_ease-out_0.2s_both]">
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-primary-900 mb-2">
        {successTitle ?? 'ثبت‌نام با موفقیت انجام شد!'}
      </h2>
      <p className="text-primary-600 mb-8">
        {successDescription ?? 'اطلاعات شما ارسال شد و به زودی با شما تماس خواهیم گرفت.'}
      </p>

      <div className="bg-gray-50 rounded-2xl p-6 text-right mb-8 border border-gray-100">
        <h3 className="text-sm font-bold text-primary-900 mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          خلاصه اطلاعات ثبت‌نام
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex gap-2">
            <span className="text-primary-500">نام:</span>
            <span className="font-medium text-primary-900">{data.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-primary-500">شماره همراه:</span>
            <span className="font-medium text-primary-900" dir="ltr">{data.phone}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-primary-500">ایمیل:</span>
            <span className="font-medium text-primary-900" dir="ltr">{data.email}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-primary-500">کد ملی:</span>
            <span className="font-medium text-primary-900" dir="ltr">{data.nationalId}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-primary-500">جنسیت:</span>
            <span className="font-medium text-primary-900">
              {data.gender === 'male' ? 'مرد' : 'زن'}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-primary-500">تاریخ تولد:</span>
            <span className="font-medium text-primary-900">{data.birthDate}</span>
          </div>
          {course && (
            <>
              <div className="flex gap-2">
                <span className="text-primary-500">دوره:</span>
                <span className="font-medium text-primary-900">{course.title}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-primary-500">هزینه:</span>
                <span className="font-medium text-accent-600">
                  {formatPricePersian(course.price)}
                </span>
              </div>
            </>
          )}
          <div className="col-span-full flex gap-2">
            <span className="text-primary-500">آدرس:</span>
            <span className="font-medium text-primary-900">{data.address}</span>
          </div>
          {'referralCode' in data && data.referralCode && (
            <div className="flex gap-2">
              <span className="text-primary-500">کد معرف:</span>
              <span className="font-medium text-primary-900" dir="ltr">{data.referralCode}</span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-accent-50 rounded-2xl p-6 mb-8 border border-accent-200/50">
        <h3 className="text-sm font-bold text-primary-900 mb-3">پیگیری ثبت‌نام</h3>
        <p className="text-sm text-primary-600 mb-3">
          در صورت نیاز به پیگیری، با شماره زیر تماس بگیرید:
        </p>
        <a
          href="tel:09133139424"
          className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-accent-200 text-accent-600 font-semibold text-sm hover:bg-accent-50 transition-colors"
          dir="ltr"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          09133139424
        </a>
      </div>

      <div className="flex gap-3">
        <Link
          href="/"
          className="flex-1 px-6 py-3.5 bg-primary-900 text-white rounded-xl font-semibold text-sm hover:bg-primary-800 transition-colors text-center"
        >
          بازگشت به صفحه اصلی
        </Link>
        <Link
          href="/academy/courses"
          className="flex-1 px-6 py-3.5 border border-gray-300 text-primary-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors text-center"
        >
          مشاهده دوره‌ها
        </Link>
      </div>
    </div>
  );
}
