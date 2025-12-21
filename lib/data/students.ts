export interface Student {
  id: string;
  name: string;
  course: string;
  projectTitle: string;
  projectDescription: string;
  image: string;
  achievement?: string;
}

export const students: Student[] = [
  {
    id: '1',
    name: 'رضا محمدی',
    course: 'برنامه‌نویسی وب',
    projectTitle: 'سایت فروشگاهی',
    projectDescription: 'پیاده‌سازی یک سایت فروشگاهی کامل با React و Next.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    achievement: 'پروژه برتر دوره',
  },
  {
    id: '2',
    name: 'سارا کریمی',
    course: 'طراحی UI/UX',
    projectTitle: 'طراحی اپلیکیشن موبایل',
    projectDescription: 'طراحی کامل رابط کاربری یک اپلیکیشن موبایل',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    achievement: 'طراحی خلاقانه',
  },
  {
    id: '3',
    name: 'حسین احمدی',
    course: 'بازاریابی دیجیتال',
    projectTitle: 'کمپین تبلیغاتی',
    projectDescription: 'راه‌اندازی و مدیریت یک کمپین تبلیغاتی موفق',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
  },
  {
    id: '4',
    name: 'مریم رضایی',
    course: 'مدیریت کسب‌وکار',
    projectTitle: 'بیزینس پلن',
    projectDescription: 'تهیه بیزینس پلن کامل برای استارتاپ',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    id: '5',
    name: 'امیر حسینی',
    course: 'برنامه‌نویسی وب',
    projectTitle: 'پنل مدیریت',
    projectDescription: 'ساخت پنل مدیریت با React و TypeScript',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  },
  {
    id: '6',
    name: 'زهرا نوری',
    course: 'طراحی UI/UX',
    projectTitle: 'طراحی وبسایت',
    projectDescription: 'طراحی رابط کاربری یک وبسایت شرکتی',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
  },
];

export function getAllStudents(): Student[] {
  return students;
}

