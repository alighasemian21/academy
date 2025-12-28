# فونت‌های خود میزبانی شده

برای بهینه‌سازی عملکرد و بهبود سرعت بارگذاری، فونت‌های سایت به صورت self-hosted استفاده می‌شوند.

**توجه:** در حال حاضر فونت‌ها از CDN لود می‌شوند. برای بهینه‌سازی بهتر، لطفاً فایل‌های فونت را دانلود کرده و در این پوشه قرار دهید.

## فایل‌های مورد نیاز

لطفاً فایل‌های زیر را در این پوشه قرار دهید:

### Vazir
- `Vazir-Regular.woff2`
- `Vazir-Regular.woff`
- `Vazir-Bold.woff2`
- `Vazir-Bold.woff`

**لینک‌های مستقیم دانلود:**
- Vazir-Regular.woff2: https://github.com/rastikerdar/vazir-font/releases/download/v30.1.0/Vazir-Regular.woff2
- Vazir-Regular.woff: https://github.com/rastikerdar/vazir-font/releases/download/v30.1.0/Vazir-Regular.woff
- Vazir-Bold.woff2: https://github.com/rastikerdar/vazir-font/releases/download/v30.1.0/Vazir-Bold.woff2
- Vazir-Bold.woff: https://github.com/rastikerdar/vazir-font/releases/download/v30.1.0/Vazir-Bold.woff

### Iranian Sans
- `IranianSans.woff2`
- `IranianSans.woff`

**لینک مستقیم دانلود:**
- IranianSans.woff2: https://github.com/rastikerdar/iranian-sans/raw/master/IranianSans.woff2
- IranianSans.woff: https://github.com/rastikerdar/iranian-sans/raw/master/IranianSans.woff

## نحوه دانلود و نصب

### روش 1: دانلود دستی
1. از لینک‌های بالا، فایل‌های فونت را دانلود کنید
2. فایل‌های woff2 و woff را در پوشه `public/fonts/` قرار دهید
3. نام فایل‌ها باید دقیقاً مطابق با نام‌های بالا باشد
4. پس از قرار دادن فایل‌ها، فایل `app/globals.css` را به‌روزرسانی کنید تا از فایل‌های محلی استفاده کند

### روش 2: استفاده از اسکریپت PowerShell
اسکریپت `download-fonts.ps1` در ریشه پروژه موجود است. می‌توانید آن را اجرا کنید:
```powershell
powershell -ExecutionPolicy Bypass -File download-fonts.ps1
```

## بهینه‌سازی

فونت‌ها با `font-display: swap` تنظیم شده‌اند تا لود سریع‌تر و تجربه کاربری بهتری داشته باشند.

## تغییر از CDN به Local

پس از دانلود فایل‌های فونت، فایل `app/globals.css` را به‌روزرسانی کنید و خطوط `@import` را با `@font-face` محلی جایگزین کنید.

