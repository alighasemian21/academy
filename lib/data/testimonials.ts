export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  course?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'سارا احمدی',
    role: 'طراح گرافیک',
    image: '/images/testimonials/placeholder.svg',
    text: 'دوره طراحی UI/UX آکادمی 84 واقعاً زندگی من رو تغییر داد. از صفر شروع کردم و الان در یک شرکت معتبر کار می‌کنم. اساتید خیلی حرفه‌ای و پشتیبانی عالی بود.',
    rating: 5,
    course: 'دوره طراحی UI/UX',
  },
  {
    id: '2',
    name: 'محمد رضایی',
    role: 'توسعه‌دهنده Frontend',
    image: '/images/testimonials/placeholder.svg',
    text: 'بهترین تصمیم زندگی حرفه‌ای من بود که دوره برنامه‌نویسی وب رو در آکادمی 84 ثبت‌نام کردم. پروژه‌های واقعی و پشتیبانی مستمر باعث شد خیلی سریع پیشرفت کنم.',
    rating: 5,
    course: 'دوره برنامه‌نویسی وب',
  },
  {
    id: '3',
    name: 'فاطمه کریمی',
    role: 'مدیر بازاریابی دیجیتال',
    image: '/images/testimonials/placeholder.svg',
    text: 'دوره بازاریابی دیجیتال آکادمی 84 رو به همه پیشنهاد می‌کنم. محتوای به‌روز، اساتید با تجربه و محیط یادگیری عالی. الان می‌تونم به راحتی کمپین‌های موفق راه‌اندازی کنم.',
    rating: 5,
    course: 'دوره بازاریابی دیجیتال',
  },
  {
    id: '4',
    name: 'علی نوری',
    role: 'کارآفرین',
    image: '/images/testimonials/placeholder.svg',
    text: 'دوره مدیریت کسب‌وکار به من کمک کرد که استارتاپ خودم رو راه‌اندازی کنم. تکنیک‌های عملی و مشاوره‌های اساتید واقعاً ارزشمند بود.',
    rating: 5,
    course: 'دوره مدیریت کسب‌وکار',
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

export function getFeaturedTestimonials(count?: number): Testimonial[] {
  return count ? testimonials.slice(0, count) : testimonials;
}

