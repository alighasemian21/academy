export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}

export const posts: BlogPost[] = [
  {
    id: '1',
    title: '۱۰ نکته کلیدی برای راه‌اندازی کسب‌وکار موفق',
    excerpt: 'راهنمای کامل برای راه‌اندازی و مدیریت یک کسب‌وکار موفق',
    content: `
      راه‌اندازی یک کسب‌وکار موفق نیاز به برنامه‌ریزی دقیق، دانش و تجربه دارد. در این مقاله به ۱۰ نکته کلیدی می‌پردازیم که می‌تواند به شما در راه‌اندازی کسب‌وکار موفق کمک کند.

      ## ۱. شناسایی نیاز بازار
      قبل از شروع، حتماً نیاز بازار را شناسایی کنید. آیا محصول یا خدمات شما واقعاً مورد نیاز است؟

      ## ۲. برنامه‌ریزی دقیق
      یک بیزینس پلن جامع تهیه کنید که شامل تمام جنبه‌های کسب‌وکار شما باشد.

      ## ۳. تیم مناسب
      یک تیم متخصص و متعهد جمع‌آوری کنید که در کنار شما باشند.

      ## ۴. سرمایه‌گذاری هوشمند
      بودجه خود را به درستی مدیریت کنید و در جاهای مناسب سرمایه‌گذاری کنید.

      و نکات دیگر...
    `,
    author: 'علی قاسمیان',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    slug: '10-tips-for-successful-business',
    category: 'کسب‌وکار',
  },
  {
    id: '2',
    title: 'آموزش React برای مبتدیان',
    excerpt: 'شروع یادگیری React با این راهنمای کامل',
    content: `
      React یکی از محبوب‌ترین کتابخانه‌های JavaScript برای ساخت رابط کاربری است. در این مقاله به اصول اولیه React می‌پردازیم.

      ## معرفی React
      React یک کتابخانه JavaScript است که توسط فیسبوک توسعه داده شده است.

      ## نصب و راه‌اندازی
      برای شروع کار با React، ابتدا باید آن را نصب کنید.

      و ادامه مطلب...
    `,
    author: 'علی قاسمیان',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    slug: 'react-for-beginners',
    category: 'برنامه‌نویسی',
  },
  {
    id: '3',
    title: 'راهنمای سئو برای وبسایت‌ها',
    excerpt: 'بهینه‌سازی وبسایت برای موتورهای جستجو',
    content: `
      سئو یا بهینه‌سازی موتور جستجو یکی از مهم‌ترین جنبه‌های موفقیت یک وبسایت است.

      ## اهمیت سئو
      سئو می‌تواند ترافیک ارگانیک وبسایت شما را به میزان قابل توجهی افزایش دهد.

      ## تکنیک‌های سئو
      در این مقاله به مهم‌ترین تکنیک‌های سئو می‌پردازیم.

      و ادامه مطلب...
    `,
    author: 'علی قاسمیان',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    slug: 'seo-guide',
    category: 'بازاریابی',
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

