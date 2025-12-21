export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'طراحی و توسعه وبسایت',
    description: 'طراحی و توسعه وبسایت‌های حرفه‌ای با آخرین تکنولوژی‌ها',
    features: [
      'طراحی Responsive',
      'بهینه‌سازی SEO',
      'سرعت بالا',
      'پشتیبانی کامل',
    ],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    featured: true,
  },
  {
    id: '2',
    title: 'مشاوره کسب‌وکار',
    description: 'مشاوره تخصصی برای راه‌اندازی و توسعه کسب‌وکار',
    features: [
      'تحلیل بازار',
      'تدوین استراتژی',
      'برنامه‌ریزی',
      'مشاوره مستمر',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    featured: true,
  },
  {
    id: '3',
    title: 'برندینگ و هویت بصری',
    description: 'طراحی هویت بصری و برندینگ حرفه‌ای برای کسب‌وکار شما',
    features: [
      'طراحی لوگو',
      'طراحی کارت ویزیت',
      'طراحی کاتالوگ',
      'راهنمای برند',
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    featured: true,
  },
  {
    id: '4',
    title: 'بازاریابی دیجیتال',
    description: 'خدمات بازاریابی دیجیتال و تبلیغات آنلاین',
    features: [
      'سئو و بهینه‌سازی',
      'تبلیغات گوگل',
      'مدیریت شبکه‌های اجتماعی',
      'تحلیل و گزارش',
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    featured: false,
  },
];

export function getAllServices(): Service[] {
  return services;
}

export function getFeaturedServices(count?: number): Service[] {
  const featured = services.filter((service) => service.featured);
  return count ? featured.slice(0, count) : featured;
}

