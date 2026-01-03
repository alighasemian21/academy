# راهنمای ایجاد کاربر ادمین

این راهنما سه روش مختلف برای ایجاد کاربر ادمین را توضیح می‌دهد.

## روش 1: استفاده از MongoDB Compass (پیشنهادی - بدون نیاز به حل مشکل SSL)

### مرحله 1: نصب MongoDB Compass

1. به آدرس زیر بروید:
   ```
   https://www.mongodb.com/try/download/compass
   ```

2. MongoDB Compass را دانلود و نصب کنید

### مرحله 2: اتصال به MongoDB Atlas

1. MongoDB Compass را باز کنید

2. Connection String را از فایل `.env.local` کپی کنید:
   ```
   mongodb+srv://alighasemian2111_db_user:65K7zWOvJb0W5wd2@cluster0.mxvrcg1.mongodb.net/?appName=Cluster0
   ```

3. Connection String را در MongoDB Compass وارد کنید و روی "Connect" کلیک کنید

4. اگر اتصال موفق بود، دیتابیس `academy` را انتخاب کنید

### مرحله 3: Hash کردن رمز عبور

1. در ترمینال پروژه، دستور زیر را اجرا کنید:
   ```bash
   node scripts/hash-password.js Admin123!
   ```

2. خروجی را کپی کنید - این hash شده رمز عبور است

### مرحله 4: ایجاد کاربر در MongoDB Compass

1. در MongoDB Compass، به collection `users` بروید (یا آن را ایجاد کنید)

2. روی دکمه "INSERT DOCUMENT" کلیک کنید

3. Document زیر را وارد کنید (hash password را از مرحله قبل جایگزین کنید):

```json
{
  "name": "مدیر سیستم",
  "email": "admin@academy84.ir",
  "password": "PASTE_HASHED_PASSWORD_HERE",
  "role": "admin",
  "createdAt": {
    "$date": "2024-01-01T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2024-01-01T00:00:00.000Z"
  }
}
```

4. روی "Insert" کلیک کنید

5. ✅ کاربر ادمین ایجاد شد!

### اطلاعات ورود:
- **ایمیل**: `admin@academy84.ir`
- **رمز عبور**: `Admin123!`

---

## روش 2: حل مشکل SSL و استفاده از اسکریپت

### مرحله 1: بررسی IP Whitelist در MongoDB Atlas

1. به [MongoDB Atlas](https://cloud.mongodb.com/) بروید و وارد حساب کاربری شوید

2. روی "Network Access" در منوی سمت چپ کلیک کنید

3. بررسی کنید که IP شما در لیست باشد:
   - برای تست، می‌توانید `0.0.0.0/0` اضافه کنید (به همه IPها اجازه دسترسی می‌دهد - فقط برای تست!)
   - یا IP فعلی خود را اضافه کنید

4. روی "Add IP Address" کلیک کنید و IP را اضافه کنید

### مرحله 2: بررسی تنظیمات MongoDB Connection

1. فایل `.env.local` را بررسی کنید و مطمئن شوید `MONGODB_URI` درست است

2. تست اتصال:
   ```bash
   # در مرورگر یا با curl
   curl http://localhost:3000/api/test-db
   ```

### مرحله 3: اجرای اسکریپت create-admin

```bash
node scripts/create-admin.js
```

اگر موفق بود، پیام زیر را می‌بینید:
```
✅ Admin user created successfully!
📧 Login credentials:
   Email: admin@academy84.ir
   Password: Admin123!
```

---

## روش 3: استفاده از API Endpoint

### پیش‌نیازها:

1. مطمئن شوید `ADMIN_CREATE_SECRET` در `.env.local` تنظیم شده است:
   ```env
   ADMIN_CREATE_SECRET=your-secret-key-here
   ```

2. سرور را اجرا کنید:
   ```bash
   npm run dev
   ```

### استفاده از API:

```bash
curl -X POST http://localhost:3000/api/admin/create-user \
  -H "Content-Type: application/json" \
  -H "x-admin-secret: your-secret-key-here" \
  -d '{
    "name": "مدیر سیستم",
    "email": "admin@academy84.ir",
    "password": "Admin123!",
    "role": "admin"
  }'
```

---

## تست ورود

بعد از ایجاد کاربر:

1. به `http://localhost:3000/auth/signin` بروید

2. با اطلاعات زیر وارد شوید:
   - **ایمیل**: `admin@academy84.ir`
   - **رمز عبور**: `Admin123!`

3. باید به `/admin` redirect شوید

---

## نکات مهم

1. **تغییر رمز عبور**: بعد از اولین ورود، حتماً از `/dashboard/profile` رمز عبور را تغییر دهید

2. **امنیت**: هرگز رمز عبور hash شده را در کد commit نکنید

3. **مشکل SSL**: اگر مشکل SSL دارید، روش 1 (MongoDB Compass) را استفاده کنید

4. **Console Logs**: اگر مشکل دارید، Console مرورگر (F12) را باز کنید و لاگ‌ها را بررسی کنید

---

## عیب‌یابی

### مشکل: "User not found"
- بررسی کنید که کاربر در collection `users` وجود دارد
- بررسی کنید که email دقیقاً `admin@academy84.ir` است

### مشکل: "Invalid password"
- بررسی کنید که password hash درست است
- دوباره hash کنید با: `node scripts/hash-password.js Admin123!`

### مشکل: "Database connection error"
- بررسی IP whitelist در MongoDB Atlas
- بررسی Connection String در `.env.local`
- تست اتصال: `curl http://localhost:3000/api/test-db`

