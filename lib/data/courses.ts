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
  startDate?: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'عکاسی',
    description: 'اصول و تکنیک‌های عکاسی حرفه‌ای را از نورپردازی و کادربندی تا ویرایش و خروجی نهایی یاد بگیرید. تمرین عملی و پروژه محور با نقد حضوری.',
    instructor: 'علی قاسمیان',
    duration: '50 ساعت',
    price: 6000000,
    image: '/images/courses/camera.png',
    featured: true,
    slug: 'photography',
    content: 'اصول و تکنیک‌های عکاسی حرفه‌ای را از نورپردازی و کادربندی تا ویرایش و خروجی نهایی یاد بگیرید. ویژگی‌ها: تمرین عملی حضوری با نقد لحظه‌ای، یادگیری نورپردازی و ترکیب‌بندی، خروجی آماده برای برند یا شبکه‌های اجتماعی، تمرکز روی خلاقیت و تصمیم‌گیری بصری.',
    startDate: '۱۴۰۵/۰۱/۱۵',
  },
  {
    id: '2',
    title: 'تصویربرداری',
    description: 'فیلمبرداری حرفه‌ای با دوربین را از پایه یاد بگیرید. زاویه، حرکت دوربین، نورپردازی و روایت تصویری در پروژه‌های واقعی.',
    instructor: 'علی قاسمیان',
    duration: '50 ساعت',
    price: 6000000,
    image: '/images/courses/camera.png',
    featured: true,
    slug: 'videography',
    content: 'فیلمبرداری حرفه‌ای با دوربین را از پایه یاد بگیرید. ویژگی‌ها: تمرین عملی و نقد تیمی، یادگیری زاویه و حرکت دوربین، نورپردازی صحنه و روایت تصویری، خروجی آماده استفاده در برند یا شبکه‌های اجتماعی.',
    startDate: '۱۴۰۵/۰۱/۲۰',
  },
  {
    id: '3',
    title: 'تولید محتوا',
    description: 'یاد بگیرید چگونه با استراتژی و ابزارهای حرفه‌ای محتوای اثرگذار بسازید. تمرین‌ها حضوری و پروژه محور هستند تا تصمیم‌گیری شما در فضای واقعی محک بخورد.',
    instructor: 'علی قاسمیان',
    duration: '40 ساعت',
    price: 4000000,
    image: '/images/courses/digital-marketing.png',
    featured: true,
    slug: 'content-production',
    content: 'یاد بگیرید چگونه با استراتژی و ابزارهای حرفه‌ای محتوای اثرگذار بسازید. تمرین‌ها حضوری و پروژه محور هستند. ویژگی‌ها: تمرین عملی حضوری و نقد لحظه‌ای، خروجی واقعی برای شبکه‌های اجتماعی یا برند، تمرکز روی تصمیم‌سازی و اثرگذاری محتوا.',
    startDate: '۱۴۰۵/۰۲/۰۱',
  },
  {
    id: '4',
    title: 'موبایلگرافی',
    description: 'با موبایل و ابزار ساده، ویدیوها و عکس‌های حرفه‌ای بسازید و روایت تصویری خود را ارتقا دهید. تمرین عملی و نقد حضوری.',
    instructor: 'علی قاسمیان',
    duration: '35 ساعت',
    price: 4000000,
    image: '/images/courses/phone.png',
    featured: true,
    slug: 'mobilography',
    content: 'با موبایل و ابزار ساده، ویدیوها و عکس‌های حرفه‌ای بسازید و روایت تصویری خود را ارتقا دهید. ویژگی‌ها: تمرین عملی حضوری با نقد لحظه‌ای، یادگیری روایت تصویری و نورپردازی، خروجی آماده برای شبکه‌های اجتماعی یا برند، ترکیب خلاقیت و کاربرد واقعی.',
    startDate: '۱۴۰۵/۰۲/۱۰',
  },
  {
    id: '5',
    title: 'برنامه نویسی وب',
    description: 'یاد بگیرید چگونه وب‌سایت‌ها و ابزارهای دیجیتال کاربردی بسازید. دوره پروژه محور با تمرکز بر کاربرد واقعی و تجربه کاربری.',
    instructor: 'علی قاسمیان',
    duration: '60 ساعت',
    price: 8000000,
    image: '/images/courses/web-development.png',
    featured: true,
    slug: 'web-programming',
    content: 'یاد بگیرید چگونه وب‌سایت‌ها و ابزارهای دیجیتال کاربردی بسازید. ویژگی‌ها: تمرین عملی و پروژه محور، یادگیری تجربه کاربری و کاربرد واقعی، خروجی آماده برای استفاده واقعی یا کسب‌وکار، ترکیب خلاقیت و مهارت فنی.',
    startDate: '۱۴۰۵/۰۲/۱۵',
  },
  {
    id: '6',
    title: 'طراحی و گرافیک',
    description: 'طراحی گرافیک و هویت بصری حرفه‌ای بسازید، تصمیمات خلاقانه در رنگ، فونت و فرم بگیرید و خروجی واقعی داشته باشید.',
    instructor: 'علی قاسمیان',
    duration: '45 ساعت',
    price: 3000000,
    image: '/images/courses/ui-ux-design.png',
    featured: true,
    slug: 'design-graphics',
    content: 'طراحی گرافیک و هویت بصری حرفه‌ای بسازید، تصمیمات خلاقانه در رنگ، فونت و فرم بگیرید و خروجی واقعی داشته باشید. ویژگی‌ها: تمرین عملی و نقد حضوری، طراحی برای پروژه واقعی، تمرکز روی تصمیم‌گیری و خلاقیت انسانی، خروجی آماده برای برند یا پروژه شخصی.',
    startDate: '۱۴۰۵/۰۳/۰۱',
  },
  {
    id: '7',
    title: 'تدوین ویدیو',
    description: 'مهارت‌های تدوین حرفه‌ای را یاد بگیرید تا ویدیوهای شما جذاب و اثرگذار باشند. تمرین پروژه محور و نقد حضوری.',
    instructor: 'علی قاسمیان',
    duration: '40 ساعت',
    price: 7000000,
    image: '/images/courses/editing.png',
    featured: true,
    slug: 'video-editing',
    content: 'مهارت‌های تدوین حرفه‌ای را یاد بگیرید تا ویدیوهای شما جذاب و اثرگذار باشند. ویژگی‌ها: تمرین پروژه محور و نقد حضوری، یادگیری تصمیم‌گیری در ریتم، کات و موسیقی، خروجی پروژه محور آماده انتشار.',
    startDate: '۱۴۰۵/۰۳/۱۰',
  },
];

export function getAllCourses(): Course[] {
  return courses;
}

export function getFeaturedCourses(count?: number): Course[] {
  const featured = courses.filter((course) => course.featured);
  return count ? featured.slice(0, count) : featured;
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

