'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import StepIndicator from './StepIndicator';
import StepPersonalInfo from './StepPersonalInfo';
import StepCoursePayment from './StepCoursePayment';
import StepConfirmation from './StepConfirmation';
import { uploadToCloudinary } from '@/lib/cloudinary';
import { sendEnrollmentEmail } from '@/lib/emailjs';
import { getCourseById } from '@/lib/data/courses';
import type { PersonalInfoData, RegistrationFormData } from '@/lib/validations/enrollment';

const STORAGE_KEY = 'academy84_registration_draft';

const steps = [
  { title: 'اطلاعات شخصی', description: 'ورود مشخصات فردی' },
  { title: 'دوره و پرداخت', description: 'اطلاعات دوره و واریزی' },
  { title: 'تایید نهایی', description: 'ثبت‌نام موفق' },
];

const initialFormData: RegistrationFormData = {
  name: '',
  phone: '',
  email: '',
  nationalId: '',
  gender: '' as any,
  birthDate: '',
  address: '',
  courseId: '',
  receiptUrl: '',
};

export default function CourseRegistrationWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);
  const [isUploading, setIsUploading] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Restore draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // Ignore parse errors
    }
    setIsHydrated(true);
  }, []);

  // Auto-save draft to localStorage
  const saveDraft = useCallback(
    (data: Partial<RegistrationFormData>) => {
      const updated = { ...formData, ...data };
      setFormData(updated);
      try {
        // Don't save receiptUrl to draft
        const { receiptUrl, ...toSave } = updated;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
      } catch {
        // Ignore storage errors
      }
    },
    [formData]
  );

  // Clear draft after successful submission
  const clearDraft = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  // Step 1: Personal Info completed
  const handlePersonalInfoNext = (data: PersonalInfoData & { courseId: string }) => {
    saveDraft(data);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Step 2: Upload receipt and send email
  const handlePaymentNext = async (receiptFile: File) => {
    setIsUploading(true);

    try {
      // 1. Upload receipt to Cloudinary
      toast.info('در حال آپلود رسید واریزی...');
      const uploadResult = await uploadToCloudinary(receiptFile);
      const receiptUrl = uploadResult.secure_url;

      // 2. Build email data
      const course = getCourseById(formData.courseId);
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('fa-IR', {
        dateStyle: 'full',
        timeStyle: 'short',
      }).format(now);

      const emailParams = {
        name: formData.name,
        national_number: formData.nationalId,
        mobile: formData.phone,
        email: formData.email,
        gender: formData.gender === 'male' ? 'مرد' : 'زن',
        birth_date: formData.birthDate,
        address: formData.address,
        course: course?.title || formData.courseId,
        deposite_receipt: receiptUrl,
        time: timeString,
        message: `ثبت‌نام در دوره ${course?.title || ''} — هزینه: ${course?.price?.toLocaleString('fa-IR') || ''} تومان`,
      };

      // 3. Send email via EmailJS
      toast.info('در حال ارسال اطلاعات...');
      await sendEnrollmentEmail(emailParams);

      // 4. Success
      saveDraft({ receiptUrl });
      clearDraft();
      setFormData((prev) => ({ ...prev, receiptUrl }));
      setCurrentStep(3);
      toast.success('ثبت‌نام با موفقیت انجام شد!');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: any) {
      console.error('Registration error:', error);
      toast.error(error.message || 'خطایی رخ داد. لطفاً دوباره تلاش کنید.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleBackToStep1 = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show nothing until hydrated (prevents flash of empty form when draft exists)
  if (!isHydrated) {
    return (
      <div className="bg-white rounded-2xl shadow-soft p-8 max-w-3xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="flex justify-between">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="w-16 h-3 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 max-w-3xl mx-auto mb-8">
      <StepIndicator currentStep={currentStep} steps={steps} />

      {currentStep === 1 && (
          <StepPersonalInfo
            key="step1"
            data={{
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              nationalId: formData.nationalId,
              gender: formData.gender,
              birthDate: formData.birthDate,
              address: formData.address,
              courseId: formData.courseId,
            }}
            onNext={handlePersonalInfoNext}
          />
      )}

      {currentStep === 2 && (
          <StepCoursePayment
            key="step2"
            courseId={formData.courseId}
            onNext={handlePaymentNext}
            onBack={handleBackToStep1}
            isUploading={isUploading}
          />
      )}

      {currentStep === 3 && (
          <StepConfirmation
            key="step3"
            data={formData}
            onBack={handleBackToStep1}
          />
      )}
    </div>
  );
}
