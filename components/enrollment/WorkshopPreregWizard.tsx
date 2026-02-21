'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import StepIndicator from './StepIndicator';
import StepPersonalInfo from './StepPersonalInfo';
import StepConfirmation from './StepConfirmation';
import type { PersonalInfoData, RegistrationFormData } from '@/lib/validations/enrollment';

export const WORKSHOP_COURSE_ID = 'workshop-kashan-mobile-clip';

const steps = [
  { title: 'اطلاعات شخصی', description: 'ورود مشخصات فردی' },
  { title: 'تایید نهایی', description: 'ثبت موفق' },
];

const initialFormData: RegistrationFormData = {
  name: '',
  phone: '',
  email: '',
  nationalId: '',
  gender: '' as 'male' | 'female',
  birthDate: '',
  address: '',
  courseId: WORKSHOP_COURSE_ID,
  referralCode: '',
};

export default function WorkshopPreregWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePersonalInfoNext = async (data: PersonalInfoData & { courseId: string; referralCode?: string }) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          course: data.courseId,
          nationalId: data.nationalId || undefined,
          gender: data.gender || undefined,
          birthDate: data.birthDate || undefined,
          address: data.address || undefined,
          referralCode: data.referralCode?.trim() || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || 'خطا در ثبت پیش‌ثبت‌نام');
      }
      setFormData((prev) => ({ ...prev, ...data }));
      setCurrentStep(2);
      toast.success('پیش‌ثبت‌نام با موفقیت انجام شد.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'خطایی رخ داد. لطفاً دوباره تلاش کنید.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToStep1 = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            courseId: WORKSHOP_COURSE_ID,
            referralCode: formData.referralCode || '',
          }}
          onNext={handlePersonalInfoNext}
          hideCourseSelect
          fixedCourseId={WORKSHOP_COURSE_ID}
          submitDisabled={isSubmitting}
          showReferralCode
        />
      )}

      {currentStep === 2 && (
        <StepConfirmation
          key="step2"
          data={formData}
          onBack={handleBackToStep1}
          successTitle="پیش‌ثبت‌نام با موفقیت انجام شد"
          successDescription="به زودی با شما تماس خواهیم گرفت."
        />
      )}
    </div>
  );
}
