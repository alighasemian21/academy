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
    title: 'طراحی و توسعه وبسایت حرفه‌ای',
    description: 'ساخت وبسایت‌های مدرن، سریع و حرفه‌ای با آخرین تکنولوژی‌های روز دنیا که تجربه کاربری بی‌نظیری ارائه می‌دهند',
    features: [
      'طراحی Responsive و موبایل‌فرست',
      'بهینه‌سازی کامل برای SEO',
      'سرعت فوق‌العاده بالا',
      'پشتیبانی و نگهداری 24/7',
    ],
    image: '/images/services/placeholder-service.svg',
    featured: true,
  },
  {
    id: '2',
    title: 'مشاوره تخصصی کسب‌وکار',
    description: 'مشاوره راهبردی و تخصصی برای راه‌اندازی، توسعه و رشد کسب‌وکار شما با روش‌های علمی و اثبات‌شده',
    features: [
      'تحلیل عمیق بازار و رقبا',
      'تدوین استراتژی اختصاصی',
      'برنامه‌ریزی دقیق و اجرایی',
      'مشاوره مستمر و پشتیبانی',
    ],
    image: '/images/services/placeholder-service.svg',
    featured: true,
  },
  {
    id: '3',
    title: 'برندینگ و هویت بصری',
    description: 'طراحی هویت بصری قدرتمند و منحصر به فرد که برند شما را متمایز می‌کند و در ذهن مشتریان ماندگار می‌شود',
    features: [
      'طراحی لوگو و آرم حرفه‌ای',
      'طراحی کارت ویزیت و سربرگ',
      'طراحی کاتالوگ و بروشور',
      'راهنمای برند کامل',
    ],
    image: '/images/services/placeholder-service.svg',
    featured: true,
  },
  {
    id: '4',
    title: 'بازاریابی دیجیتال و تبلیغات',
    description: 'خدمات جامع بازاریابی دیجیتال و تبلیغات آنلاین برای افزایش فروش و رشد کسب‌وکار شما',
    features: [
      'سئو و بهینه‌سازی موتورهای جستجو',
      'تبلیغات گوگل و شبکه‌های اجتماعی',
      'مدیریت حرفه‌ای شبکه‌های اجتماعی',
      'تحلیل و گزارش عملکرد',
    ],
    image: '/images/services/placeholder-service.svg',
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

