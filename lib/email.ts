export interface EmailConfig {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(config: EmailConfig): Promise<boolean> {
  if (process.env.EMAIL_SERVICE === 'resend' && process.env.RESEND_API_KEY) {
    return sendEmailResend(config);
  }

  console.warn('Email service not configured. Email data:', config);
  return false;
}

async function sendEmailResend(config: EmailConfig): Promise<boolean> {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: config.from,
        to: config.to,
        subject: config.subject,
        html: config.html,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

export const emailTemplates = {
  enrollmentConfirmation: (name: string, courseTitle: string) => ({
    subject: 'تایید ثبت‌نام در دوره',
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">سلام ${name}،</h2>
        <p>ثبت‌نام شما در دوره <strong>${courseTitle}</strong> دریافت شد.</p>
        <p>به زودی با شما تماس خواهیم گرفت تا مراحل بعدی را انجام دهیم.</p>
        <p>با تشکر،<br>تیم آکادمی 84</p>
      </div>
    `,
  }),

  contactReceived: (name: string) => ({
    subject: 'دریافت پیام شما',
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">سلام ${name}،</h2>
        <p>پیام شما دریافت شد و در اسرع وقت به آن پاسخ خواهیم داد.</p>
        <p>با تشکر،<br>تیم آکادمی 84</p>
      </div>
    `,
  }),
};

