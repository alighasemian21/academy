'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { getCourseById } from '@/lib/data/courses';

interface StepCoursePaymentProps {
  courseId: string;
  onNext: (receiptFile: File) => void;
  onBack: () => void;
  isUploading: boolean;
}

/**
 * Format a number to Persian digits with thousand separators.
 */
function formatPricePersian(price: number): string {
  const formatted = price.toLocaleString('fa-IR');
  return `${formatted} تومان`;
}

export default function StepCoursePayment({
  courseId,
  onNext,
  onBack,
  isUploading,
}: StepCoursePaymentProps) {
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const course = getCourseById(courseId);

  // Payment info (placeholder card number)
  const cardNumber = '**** **** **** ****';
  const cardHolder = 'علی قاسمیان';

  const validateFile = (file: File): string | null => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return 'فرمت فایل باید تصویر (JPG, PNG, WebP) یا PDF باشد';
    }
    if (file.size > 5 * 1024 * 1024) {
      return 'حجم فایل نباید بیش از ۵ مگابایت باشد';
    }
    return null;
  };

  const handleFile = useCallback((file: File) => {
    const error = validateFile(file);
    if (error) {
      setFileError(error);
      return;
    }
    setFileError('');
    setReceiptFile(file);

    // Create preview
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleCopyCard = async () => {
    try {
      await navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
      setCopied(true);
      toast.success('شماره کارت کپی شد');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('کپی شماره کارت با خطا مواجه شد');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!receiptFile) {
      setFileError('لطفاً رسید واریزی را آپلود کنید');
      return;
    }
    onNext(receiptFile);
  };

  if (!course) {
    return (
      <div className="text-center py-10 text-red-500">
        دوره انتخابی یافت نشد. لطفاً به مرحله قبل بازگردید.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Course Info Section */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 border border-primary-200/50">
          <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            اطلاعات دوره
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary-500">نام دوره:</span>
                <span className="text-sm font-semibold text-primary-900">{course.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary-500">استاد:</span>
                <span className="text-sm font-semibold text-primary-900">{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary-500">مدت دوره:</span>
                <span className="text-sm font-semibold text-primary-900">{course.duration}</span>
              </div>
            </div>
            <div className="space-y-3">
              {course.startDate && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-primary-500">تاریخ شروع:</span>
                  <span className="text-sm font-semibold text-primary-900">{course.startDate}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary-500">هزینه دوره:</span>
                <span className="text-sm font-bold text-accent-600">
                  {formatPricePersian(course.price)}
                </span>
              </div>
            </div>
          </div>
          {course.content && (
            <p className="mt-4 text-sm text-primary-600 leading-relaxed border-t border-primary-200/50 pt-4">
              {course.content}
            </p>
          )}
        </div>

        {/* Payment Info Section */}
        <div className="bg-gradient-to-br from-accent-50 to-orange-50 rounded-2xl p-6 border border-accent-200/50">
          <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            اطلاعات پرداخت
          </h3>
          <p className="text-sm text-primary-600 mb-4">
            لطفاً مبلغ{' '}
            <span className="font-bold text-accent-600">{formatPricePersian(course.price)}</span>{' '}
            را به شماره کارت زیر واریز کرده و رسید واریزی را آپلود کنید.
          </p>
          <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">صاحب حساب</p>
                <p className="font-semibold text-primary-900">{cardHolder}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">شماره کارت</p>
                <p className="font-mono text-lg font-semibold text-primary-900 tracking-wider" dir="ltr">
                  {cardNumber}
                </p>
              </div>
              <motion.button
                type="button"
                onClick={handleCopyCard}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs text-primary-700 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    کپی شد
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    کپی
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Upload Receipt Section */}
        <div>
          <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            آپلود رسید واریزی
          </h3>

          <div
            className={`relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 ${
              dragActive
                ? 'border-accent-500 bg-accent-50'
                : fileError
                ? 'border-red-400 bg-red-50'
                : receiptFile
                ? 'border-green-400 bg-green-50'
                : 'border-gray-300 bg-gray-50 hover:border-accent-400 hover:bg-accent-50/50'
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,application/pdf"
              onChange={handleFileInput}
              className="hidden"
            />

            {receiptFile ? (
              <div className="space-y-3">
                {previewUrl ? (
                  <div className="flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewUrl}
                      alt="پیش‌نمایش رسید"
                      className="max-h-48 rounded-lg shadow-soft object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                )}
                <p className="text-sm font-medium text-primary-700">{receiptFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(receiptFile.size / 1024 / 1024).toFixed(2)} مگابایت
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setReceiptFile(null);
                    setPreviewUrl(null);
                    setFileError('');
                  }}
                  className="text-xs text-red-500 hover:text-red-600 underline"
                >
                  حذف و انتخاب فایل دیگر
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-700">
                    فایل رسید واریزی را اینجا بکشید یا کلیک کنید
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    فرمت‌های مجاز: JPG, PNG, WebP, PDF — حداکثر ۵ مگابایت
                  </p>
                </div>
              </div>
            )}
          </div>
          {fileError && (
            <p className="text-red-500 text-xs mt-2">{fileError}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <motion.button
            type="button"
            onClick={onBack}
            className="flex-1 px-6 py-3.5 border border-gray-300 text-primary-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={isUploading}
          >
            بازگشت
          </motion.button>
          <motion.button
            type="submit"
            className="flex-[2] bg-accent-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent-600 transition-colors shadow-soft hover:shadow-soft-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileHover={{ scale: isUploading ? 1 : 1.01 }}
            whileTap={{ scale: isUploading ? 1 : 0.99 }}
            disabled={isUploading}
          >
            {isUploading ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                در حال ارسال...
              </>
            ) : (
              'ارسال و ثبت‌نام'
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
