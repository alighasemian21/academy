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
```

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

## نکات مهم:

1. **فایل .env.local در .gitignore است** - این فایل commit نمی‌شود و فقط در سیستم شما وجود دارد.

2. **برای Production**: در پلتفرم دیپلوی (مثل Vercel)، باید این متغیرها را در Environment Variables تنظیم کنید.

3. **رمز عبور URL Encoded**: اگر رمز عبور شامل کاراکترهای خاص باشد، باید URL encoded شود. برای 65K7zWOvJb0W5wd2 نیازی نیست.

4. **IP Whitelist**: IP شما (`62.60.229.245`) باید در MongoDB Atlas Network Access باشد.

