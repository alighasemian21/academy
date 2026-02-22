'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import StepIndicator from './StepIndicator';
import StepPersonalInfo from './StepPersonalInfo';
import StepConfirmation from './StepConfirmation';
import { sendEnrollmentEmail } from '@/lib/emailjs';
import type { PersonalInfoData, RegistrationFormData } from '@/lib/validations/enrollment';

export const WORKSHOP_COURSE_ID = 'workshop-kashan-mobile-clip';
const WORKSHOP_DISPLAY_TITLE = 'ورکشاپ کلیپ‌سازی با موبایل - کاشان';
const STORAGE_KEY = 'academy84_prereg_draft';

function normalizeReferralCodeForApi(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;
  const normalized = trimmed.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
  return normalized.length === 4 && /^[a-zA-Z0-9]{4}$/.test(normalized) ? normalized : undefined;
}

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
  const [isHydrated, setIsHydrated] = useState(false);

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

  const saveDraft = useCallback(
    (data: Partial<RegistrationFormData>) => {
      const updated = { ...formData, ...data };
      setFormData(updated);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
    },
    [formData]
  );

  const clearDraft = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  }, []);

  const handlePersonalInfoNext = async (data: PersonalInfoData & { courseId: string; referralCode?: string }) => {
    setIsSubmitting(true);
    saveDraft(data);
    try {
      const referralForApi = normalizeReferralCodeForApi(data.referralCode);
      const apiBody = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        course: data.courseId,
        nationalId: data.nationalId || undefined,
        gender: data.gender || undefined,
        birthDate: data.birthDate || undefined,
        address: data.address || undefined,
        referralCode: referralForApi,
      };
      try {
        const res = await fetch('/api/enrollments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(apiBody),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.success) {
          // API failure is ignored; we still send email and show success
        }
      } catch {
        // Network or API error ignored; email is the source of truth
      }

      const now = new Date();
      const timeString = new Intl.DateTimeFormat('fa-IR', {
        dateStyle: 'full',
        timeStyle: 'short',
      }).format(now);

      const emailParams = {
        name: data.name,
        national_number: data.nationalId || '',
        mobile: data.phone,
        email: data.email,
        gender: data.gender === 'male' ? 'مرد' : 'زن',
        birth_date: data.birthDate || '',
        address: data.address || '',
        course: WORKSHOP_DISPLAY_TITLE,
        deposite_receipt: '—',
        time: timeString,
        message: `پیش‌ثبت‌نام ${WORKSHOP_DISPLAY_TITLE}`,
        referral_code: referralForApi,
      };

      toast.info('در حال ارسال اطلاعات...');
      await sendEnrollmentEmail(emailParams);

      clearDraft();
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

  if (!isHydrated) {
    return (
      <div className="bg-white rounded-2xl shadow-soft p-8 max-w-3xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="flex justify-between">
            {[1, 2].map((i) => (
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
    <div className="bg-white rounded-2xl p-6 max-w-3xl mx-auto mb-8">
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
