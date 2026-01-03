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
    image: '/images/students/project-1.jpg',
    achievement: 'پروژه برتر دوره',
  },
  {
    id: '2',
    name: 'سارا کریمی',
    course: 'طراحی UI/UX',
    projectTitle: 'طراحی اپلیکیشن موبایل',
    projectDescription: 'طراحی کامل رابط کاربری یک اپلیکیشن موبایل',
    image: '/images/students/project-2.jpg',
    achievement: 'طراحی خلاقانه',
  },
  {
    id: '3',
    name: 'حسین احمدی',
    course: 'بازاریابی دیجیتال',
    projectTitle: 'کمپین تبلیغاتی',
    projectDescription: 'راه‌اندازی و مدیریت یک کمپین تبلیغاتی موفق',
    image: '/images/students/project-3.jpg',
  },
  {
    id: '4',
    name: 'مریم رضایی',
    course: 'مدیریت کسب‌وکار',
    projectTitle: 'بیزینس پلن',
    projectDescription: 'تهیه بیزینس پلن کامل برای استارتاپ',
    image: '/images/students/project-4.jpg',
  },
  {
    id: '5',
    name: 'امیر حسینی',
    course: 'برنامه‌نویسی وب',
    projectTitle: 'پنل مدیریت',
    projectDescription: 'ساخت پنل مدیریت با React و TypeScript',
    image: '/images/students/project-5.jpg',
  },
  {
    id: '6',
    name: 'زهرا نوری',
    course: 'طراحی UI/UX',
    projectTitle: 'طراحی وبسایت',
    projectDescription: 'طراحی رابط کاربری یک وبسایت شرکتی',
    image: '/images/students/project-6.jpg',
  },
];

export function getAllStudents(): Student[] {
  return students;
}

