# راهنمای نصب تصویر برای اساتید

## مرحله 1: ذخیره تصویر

تصویر ارائه شده را با نام‌های زیر در پوشه `public/images/teachers/` ذخیره کنید:

1. `ali-ghasemian.jpg` - برای علی قاسمیان
2. `fateme-ahmadi.jpg` - برای فاطمه احمدی (همان تصویر)
3. `mohammad-rezaei.jpg` - برای محمد رضایی (همان تصویر)

## مرحله 2: کپی تصویر

می‌توانید تصویر را سه بار کپی کرده و با نام‌های بالا ذخیره کنید.

### روش 1: استفاده از File Explorer (ویندوز)
1. تصویر را در پوشه `public/images/teachers/` قرار دهید
2. نام آن را `ali-ghasemian.jpg` بگذارید
3. آن را دو بار دیگر کپی کنید و نام‌های `fateme-ahmadi.jpg` و `mohammad-rezaei.jpg` بگذارید

### روش 2: استفاده از PowerShell
در ترمینال PowerShell، به پوشه پروژه بروید و دستورات زیر را اجرا کنید:

```powershell
# فرض کنید تصویر شما با نام original.jpg ذخیره شده است
Copy-Item "public/images/teachers/original.jpg" -Destination "public/images/teachers/ali-ghasemian.jpg"
Copy-Item "public/images/teachers/original.jpg" -Destination "public/images/teachers/fateme-ahmadi.jpg"
Copy-Item "public/images/teachers/original.jpg" -Destination "public/images/teachers/mohammad-rezaei.jpg"
```

## نکته

اگر می‌خواهید تصاویر مختلف برای هر استاد داشته باشید، می‌توانید بعداً تصاویر جداگانه را جایگزین کنید.

