export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  price: number;
  image: string;
  featured?: boolean;
  slug: string;
  content?: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'دوره مدیریت کسب‌وکار',
    description: 'یادگیری اصول مدیریت کسب‌وکار و راه‌اندازی استارتاپ',
    instructor: 'علی قاسمیان',
    duration: '40 ساعت',
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    slug: 'business-management',
    content: 'در این دوره با اصول مدیریت کسب‌وکار، راه‌اندازی استارتاپ، مدیریت تیم و رشد کسب‌وکار آشنا خواهید شد.',
  },
  {
    id: '2',
    title: 'دوره برنامه‌نویسی وب',
    description: 'یادگیری کامل برنامه‌نویسی وب با React و Next.js',
    instructor: 'علی قاسمیان',
    duration: '60 ساعت',
    price: 3000000,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    slug: 'web-development',
    content: 'دوره کامل برنامه‌نویسی وب شامل HTML، CSS، JavaScript، React و Next.js',
  },
  {
    id: '3',
    title: 'دوره بازاریابی دیجیتال',
    description: 'یادگیری تکنیک‌های بازاریابی دیجیتال و سئو',
    instructor: 'علی قاسمیان',
    duration: '30 ساعت',
    price: 2000000,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    slug: 'digital-marketing',
    content: 'آموزش کامل بازاریابی دیجیتال، سئو، شبکه‌های اجتماعی و تبلیغات آنلاین',
  },
  {
    id: '4',
    title: 'دوره طراحی UI/UX',
    description: 'یادگیری طراحی رابط کاربری و تجربه کاربری',
    instructor: 'علی قاسمیان',
    duration: '45 ساعت',
    price: 2700000,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: false,
    slug: 'ui-ux-design',
    content: 'آموزش کامل طراحی رابط کاربری و تجربه کاربری با ابزارهای مدرن',
  },
];

export function getAllCourses(): Course[] {
  return courses;
}

export function getFeaturedCourses(count?: number): Course[] {
  const featured = courses.filter((course) => course.featured);
  return count ? featured.slice(0, count) : featured;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

