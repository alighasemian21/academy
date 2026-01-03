# راهنمای تنظیم Environment Variables

## مرحله 1: ایجاد فایل .env.local

در ریشه پروژه، یک فایل با نام `.env.local` ایجاد کنید و محتوای زیر را در آن قرار دهید:

```env
# MongoDB Atlas Connection
# توجه: رمز عبور باید URL encoded باشد (در حال حاضر به صورت مستقیم استفاده شده)
MONGODB_URI=mongodb+srv://alighasemian2111_db_user:65K7zWOvJb0W5wd2@cluster0.mxvrcg1.mongodb.net/?appName=Cluster0
MONGODB_DB_NAME=academy

# Site URL (برای production تغییر دهید)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Database User Credentials
DB_USER=alighasemian2111_db_user
DB_PASSWORD=65K7zWOvJb0W5wd2

# NextAuth Secret (ضروری برای احراز هویت)
# برای تولید یک secret تصادفی، دستور زیر را اجرا کنید:
# node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
NEXTAUTH_SECRET=your-secret-key-here-change-this-to-random-string

# Google Analytics 4 (اختیاری)
# برای دریافت Measurement ID به https://analytics.google.com بروید
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (اختیاری - برای ارسال ایمیل)
EMAIL_SERVICE=resend
RESEND_API_KEY=your-resend-api-key-here

# Admin User Creation Secret (اختیاری - برای استفاده از API endpoint)
ADMIN_CREATE_SECRET=your-admin-secret-key
```

**نکته**: می‌توانید از فایل `.env.example` به عنوان نمونه استفاده کنید.

## مرحله 2: نصب MongoDB Driver

اگر هنوز نصب نکرده‌اید، اجرا کنید:

```bash
npm install mongodb
```

## مرحله 3: تست اتصال

بعد از راه‌اندازی سرور (`npm run dev`)، در مرورگر به آدرس زیر بروید:

```
http://localhost:3000/api/test-db
```

اگر پیام موفقیت آمیز دریافت کردید، اتصال درست است.

## مرحله 4: ایجاد کاربر ادمین

برای دسترسی به پنل مدیریت، باید یک کاربر ادمین در MongoDB ایجاد کنید:

### روش 1: استفاده از Script (پیشنهادی)

```bash
node scripts/create-admin.js
```

این script یک کاربر ادمین با اطلاعات زیر ایجاد می‌کند:
- **ایمیل**: admin@academy84.ir
- **رمز عبور**: Admin123! (بعد از ورود حتماً تغییر دهید)
- **نقش**: admin

برای تغییر اطلاعات کاربر، فایل `scripts/create-admin.js` را ویرایش کنید.

### روش 2: استفاده از API Endpoint

```bash
curl -X POST http://localhost:3000/api/admin/create-user \
  -H "Content-Type: application/json" \
  -H "x-admin-secret: your-secret-key" \
  -d '{
    "name": "مدیر سیستم",
    "email": "admin@academy84.ir",
    "password": "Admin123!",
    "role": "admin"
  }'
```

**نکته**: برای استفاده از API، باید متغیر `ADMIN_CREATE_SECRET` را در `.env.local` تنظیم کنید.

## نکات مهم:

1. **فایل .env.local در .gitignore است** - این فایل commit نمی‌شود و فقط در سیستم شما وجود دارد.

2. **برای Production**: در پلتفرم دیپلوی (مثل Vercel)، باید این متغیرها را در Environment Variables تنظیم کنید.

3. **رمز عبور URL Encoded**: اگر رمز عبور شامل کاراکترهای خاص باشد، باید URL encoded شود. برای 65K7zWOvJb0W5wd2 نیازی نیست.

4. **IP Whitelist**: IP شما (`62.60.229.245`) باید در MongoDB Atlas Network Access باشد.

5. **NEXTAUTH_SECRET**: این متغیر برای امنیت جلسات ضروری است. حتماً یک مقدار تصادفی و ایمن انتخاب کنید.

6. **ایمنی**: بعد از ایجاد کاربر ادمین، حتماً رمز عبور را از طریق `/dashboard/profile` تغییر دهید.

