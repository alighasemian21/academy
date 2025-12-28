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
    title: 'دوره مدیریت کسب‌وکار و کارآفرینی',
    description: 'از ایده تا اجرا: یادگیری کامل اصول مدیریت کسب‌وکار، راه‌اندازی استارتاپ موفق و تبدیل رویاها به واقعیت',
    instructor: 'علی قاسمیان',
    duration: '40 ساعت',
    price: 2500000,
    image: '/images/courses/placeholder-course.svg',
    featured: true,
    slug: 'business-management',
    content: 'در این دوره جامع، با اصول حرفه‌ای مدیریت کسب‌وکار، راه‌اندازی استارتاپ موفق، مدیریت تیم، جذب سرمایه، استراتژی‌های رشد و بازاریابی آشنا می‌شوید و گام‌به‌گام کسب‌وکار خود را می‌سازید.',
  },
  {
    id: '2',
    title: 'دوره برنامه‌نویسی وب Full-Stack',
    description: 'تبدیل شدن به یک برنامه‌نویس حرفه‌ای: از صفر تا صد توسعه وب با آخرین تکنولوژی‌های روز دنیا',
    instructor: 'علی قاسمیان',
    duration: '60 ساعت',
    price: 3000000,
    image: '/images/courses/placeholder-course.svg',
    featured: true,
    slug: 'web-development',
    content: 'دوره کامل و جامع برنامه‌نویسی وب شامل HTML5، CSS3، JavaScript ES6+، React، Next.js، Node.js و پایگاه داده. با پروژه‌های واقعی و قابل ارائه در رزومه.',
  },
  {
    id: '3',
    title: 'دوره بازاریابی دیجیتال و سئو',
    description: 'استاد بازاریابی دیجیتال شوید: یادگیری تکنیک‌های پیشرفته سئو، تبلیغات آنلاین و رشد کسب‌وکار',
    instructor: 'علی قاسمیان',
    duration: '30 ساعت',
    price: 2000000,
    image: '/images/courses/placeholder-course.svg',
    featured: true,
    slug: 'digital-marketing',
    content: 'آموزش کامل و کاربردی بازاریابی دیجیتال شامل سئو، تبلیغات گوگل و شبکه‌های اجتماعی، ایمیل مارکتینگ، آنالیتیکس و تبدیل بازدیدکننده به مشتری.',
  },
  {
    id: '4',
    title: 'دوره طراحی UI/UX حرفه‌ای',
    description: 'طراحی تجربه‌های کاربری خیره‌کننده: یادگیری طراحی رابط کاربری مدرن و تجربه کاربری عالی',
    instructor: 'علی قاسمیان',
    duration: '45 ساعت',
    price: 2700000,
    image: '/images/courses/placeholder-course.svg',
    featured: false,
    slug: 'ui-ux-design',
    content: 'آموزش کامل طراحی رابط کاربری و تجربه کاربری با ابزارهای مدرن مانند Figma، Adobe XD، کاربری‌پژوهی، وایر‌فریمینگ و طراحی پروتوتایپ‌های تعاملی.',
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

