import { z } from 'zod';

/**
 * Iranian National ID (کد ملی) validation algorithm
 */
function isValidNationalId(code: string): boolean {
  if (!/^\d{10}$/.test(code)) return false;

  // Check all same digits
  if (/^(\d)\1{9}$/.test(code)) return false;

  const digits = code.split('').map(Number);
  const checkDigit = digits[9];

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * (10 - i);
  }

  const remainder = sum % 11;

  if (remainder < 2) {
    return checkDigit === remainder;
  }
  return checkDigit === 11 - remainder;
}

export const personalInfoSchema = z.object({
  name: z
    .string()
    .min(3, 'نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد')
    .max(100, 'نام و نام خانوادگی نباید بیش از ۱۰۰ کاراکتر باشد'),
  phone: z
    .string()
    .regex(/^09\d{9}$/, 'شماره همراه باید با ۰۹ شروع شود و ۱۱ رقم باشد'),
  email: z
    .string()
    .email('ایمیل معتبر نیست'),
  nationalId: z
    .string()
    .length(10, 'کد ملی باید ۱۰ رقم باشد')
    .regex(/^\d{10}$/, 'کد ملی فقط شامل اعداد باشد')
    .refine(isValidNationalId, 'کد ملی معتبر نیست'),
  gender: z
    .enum(['male', 'female'], { message: 'لطفاً جنسیت را انتخاب کنید' }),
  birthDate: z
    .string()
    .min(1, 'تاریخ تولد الزامی است'),
  address: z
    .string()
    .min(10, 'آدرس باید حداقل ۱۰ کاراکتر باشد')
    .max(500, 'آدرس نباید بیش از ۵۰۰ کاراکتر باشد'),
});

export const paymentSchema = z.object({
  courseId: z
    .string()
    .min(1, 'لطفاً یک دوره انتخاب کنید'),
  receiptFile: z
    .any()
    .refine((file) => file instanceof File, 'لطفاً رسید واریزی را آپلود کنید')
    .refine(
      (file) => file instanceof File && file.size <= 5 * 1024 * 1024,
      'حجم فایل نباید بیش از ۵ مگابایت باشد'
    )
    .refine(
      (file) =>
        file instanceof File &&
        ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'].includes(file.type),
      'فرمت فایل باید تصویر (JPG, PNG, WebP) یا PDF باشد'
    ),
});

export type PersonalInfoData = z.infer<typeof personalInfoSchema>;
export type PaymentData = z.infer<typeof paymentSchema>;

export interface RegistrationFormData extends PersonalInfoData {
  courseId: string;
  receiptUrl?: string;
  referralCode?: string;
}
