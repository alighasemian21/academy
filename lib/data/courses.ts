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
    title: 'تولید محتوای هوشمند',
    description: 'یاد بگیرید چگونه با استراتژی و هوش مصنوعی محتوای حرفه‌ای و اثرگذار بسازید. تمرین‌ها حضوری و پروژه محور هستند تا تصمیم‌گیری شما در فضای واقعی محک بخورد.',
    instructor: 'علی قاسمیان',
    duration: '40 ساعت',
    price: 2500000,
    image: '/images/courses/digital-marketing.png',
    featured: true,
    slug: 'smart-content-production',
    content: 'یاد بگیرید چگونه با استراتژی و هوش مصنوعی محتوای حرفه‌ای و اثرگذار بسازید. تمرین‌ها حضوری و پروژه محور هستند تا تصمیم‌گیری شما در فضای واقعی محک بخورد. ویژگی‌ها: تمرین عملی حضوری و نقد لحظه‌ای، یادگیری هدایت AI به‌عنوان دستیار، خروجی واقعی برای شبکه‌های اجتماعی یا برند، تمرکز روی تصمیم‌سازی و اثرگذاری محتوا.',
  },
  {
    id: '2',
    title: 'موبایگرافی کاربردی',
    description: 'با موبایل و ابزار ساده، ویدیوهای کوتاه و جذاب بسازید و روایت تصویری خود را حرفه‌ای کنید. تمرین عملی و نقد حضوری تضمین‌کننده رشد مهارت شماست.',
    instructor: 'علی قاسمیان',
    duration: '35 ساعت',
    price: 2200000,
    image: '/images/courses/phone.png',
    featured: true,
    slug: 'mobile-videography',
    content: 'با موبایل و ابزار ساده، ویدیوهای کوتاه و جذاب بسازید و روایت تصویری خود را حرفه‌ای کنید. تمرین عملی و نقد حضوری تضمین‌کننده رشد مهارت شماست. ویژگی‌ها: تمرین عملی حضوری با نقد لحظه‌ای، یادگیری روایت تصویری و نورپردازی، خروجی آماده برای شبکه‌های اجتماعی یا برند، ترکیب خلاقیت و کاربرد واقعی.',
  },
  {
    id: '3',
    title: 'عکاسی و فیلمبرداری حرفه‌ای',
    description: 'یاد بگیرید چگونه با نور، زاویه و روایت بصری پروژه‌های واقعی خلق کنید و عکس و ویدیوهای حرفه‌ای برای برند بسازید.',
    instructor: 'علی قاسمیان',
    duration: '50 ساعت',
    price: 3000000,
    image: '/images/courses/camera.png',
    featured: true,
    slug: 'professional-photography-videography',
    content: 'یاد بگیرید چگونه با نور، زاویه و روایت بصری پروژه‌های واقعی خلق کنید و عکس و ویدیوهای حرفه‌ای برای برند بسازید. ویژگی‌ها: تمرین عملی و نقد تیمی، تصمیم‌گیری لحظه‌ای برای پروژه‌های واقعی، خروجی آماده استفاده در برند یا شبکه‌های اجتماعی، یادگیری مهارت‌های غیرقابل جایگزین با AI.',
  },
  {
    id: '4',
    title: 'طراحی و هویت بصری',
    description: 'هویت بصری حرفه‌ای بسازید، تصمیمات خلاقانه در رنگ، فونت و فرم بگیرید و خروجی واقعی داشته باشید.',
    instructor: 'علی قاسمیان',
    duration: '45 ساعت',
    price: 2700000,
    image: '/images/courses/ui-ux-design.png',
    featured: true,
    slug: 'visual-identity-design',
    content: 'هویت بصری حرفه‌ای بسازید، تصمیمات خلاقانه در رنگ، فونت و فرم بگیرید و خروجی واقعی داشته باشید. ویژگی‌ها: تمرین عملی و نقد حضوری، طراحی هویت بصری برای پروژه واقعی، تمرکز روی تصمیم‌گیری و خلاقیت انسانی، خروجی آماده برای برند یا پروژه شخصی.',
  },
  {
    id: '5',
    title: 'تدوین و داستان‌سرایی ویدیویی',
    description: 'مهارت‌های تدوین و روایت تصویری حرفه‌ای را یاد بگیرید تا ویدیوهای شما جذاب و اثرگذار باشند.',
    instructor: 'علی قاسمیان',
    duration: '40 ساعت',
    price: 2400000,
    image: '/images/courses/editing.png',
    featured: true,
    slug: 'video-editing-storytelling',
    content: 'مهارت‌های تدوین و روایت تصویری حرفه‌ای را یاد بگیرید تا ویدیوهای شما جذاب و اثرگذار باشند. ویژگی‌ها: تمرین پروژه محور و نقد حضوری، یادگیری تصمیم‌گیری در ریتم، کات و موسیقی، خروجی پروژه محور آماده انتشار، استفاده از ابزار و AI فقط برای افزایش کیفیت و سرعت.',
  },
  {
    id: '6',
    title: 'برنامه‌نویسی وب کاربردی',
    description: 'یاد بگیرید چگونه وب‌سایت‌ها و ابزارهای دیجیتال کاربردی بسازید. دوره پروژه محور بوده و تمرکز بر کاربرد واقعی و تجربه کاربری است.',
    instructor: 'علی قاسمیان',
    duration: '60 ساعت',
    price: 3200000,
    image: '/images/courses/web-development.png',
    featured: true,
    slug: 'practical-web-programming',
    content: 'یاد بگیرید چگونه وب‌سایت‌ها و ابزارهای دیجیتال کاربردی بسازید. دوره پروژه محور بوده و تمرکز بر کاربرد واقعی و تجربه کاربری است. ویژگی‌ها: تمرین عملی و پروژه محور، یادگیری تجربه کاربری و کاربرد واقعی، خروجی آماده برای استفاده واقعی یا کسب‌وکار، ترکیب خلاقیت و مهارت فنی.',
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

