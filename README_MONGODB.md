# راهنمای اتصال MongoDB

## تنظیمات انجام شده

اطلاعات اتصال MongoDB Atlas به پروژه اضافه شده است.

### اطلاعات اتصال:
- **Username**: `alighasemian2111_db_user`
- **Password**: `65K7zWOvJb0W5wd2`
- **Cluster**: `Cluster0.mxvrcg1.mongodb.net`
- **Database Name**: `academy` (پیش‌فرض)

## فایل‌های ایجاد شده

### 1. `.env.local`
فایل حاوی اطلاعات اتصال (این فایل در `.gitignore` است و commit نمی‌شود)

### 2. `lib/mongodb.ts`
فایل اصلی اتصال به MongoDB با helper functions

### 3. `lib/db/collections.ts`
تعریف نام collection ها و helper function برای دسترسی به collection ها

### 4. `app/api/test-db/route.ts`
API endpoint برای تست اتصال به دیتابیس

## استفاده

### تست اتصال:
```bash
# در مرورگر یا با curl
curl http://localhost:3000/api/test-db
```

### استفاده در کد:

```typescript
import getDatabase from '@/lib/mongodb';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';

// استفاده از database
const db = await getDatabase();
const collection = db.collection('contacts');

// یا استفاده از helper
const contacts = await getCollection(COLLECTIONS.CONTACTS);
```

### مثال: ذخیره فرم تماس

```typescript
import { getCollection, COLLECTIONS } from '@/lib/db/collections';

export async function saveContact(data: ContactFormData) {
  const collection = await getCollection(COLLECTIONS.CONTACTS);
  const result = await collection.insertOne({
    ...data,
    createdAt: new Date(),
  });
  return result;
}
```

## Collection های پیشنهادی

- `contacts` - پیام‌های فرم تماس
- `enrollments` - ثبت‌نام‌های دوره‌ها
- `courses` - دوره‌ها (می‌توان از static data استفاده کرد)
- `posts` - پست‌های وبلاگ
- `services` - خدمات
- `teachers` - اساتید
- `students` - دانشجویان

## نکات مهم

1. **رمز عبور**: رمز عبور در connection string باید URL encoded باشد. در حال حاضر به صورت مستقیم استفاده شده است.

2. **IP Whitelist**: IP شما (`62.60.229.245`) به Access List اضافه شده است. برای production باید IP سرور را اضافه کنید.

3. **Environment Variables**: در production، باید متغیرهای محیطی را در پلتفرم دیپلوی (مثل Vercel) تنظیم کنید.

4. **Security**: هرگز `.env.local` را commit نکنید. این فایل در `.gitignore` قرار دارد.

## مراحل بعدی

برای استفاده از MongoDB در فرم‌ها:

1. ایجاد API routes برای فرم تماس
2. ایجاد API routes برای ثبت‌نام دوره‌ها
3. ایجاد Admin Panel (اختیاری) برای مشاهده داده‌ها

