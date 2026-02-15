import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export interface EnrollmentEmailParams {
  [key: string]: unknown;
  name: string;
  national_number: string;
  mobile: string;
  email: string;
  gender: string;
  birth_date: string;
  address: string;
  course: string;
  deposite_receipt: string;
  time: string;
  message: string;
}

/**
 * Send enrollment notification email via EmailJS.
 * Emails are sent to kavand123456789@gmail.com (To) and acadeemy84@gmail.com (BCC) as configured in the template.
 */
export async function sendEnrollmentEmail(params: EnrollmentEmailParams) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS configuration is missing');
  }

  const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);

  if (response.status !== 200) {
    throw new Error('خطا در ارسال ایمیل');
  }

  return response;
}
