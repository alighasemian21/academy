import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'آکادمی',
  description: 'آکادمی 84 - مرکز تخصصی آموزش تصویر و رسانه. دوره‌های حرفه‌ای، معرفی اساتید، گالری دانشجویان و نمونه کارها. شروع مسیر حرفه‌ای‌شدنت از اینجا.',
  keywords: ['آکادمی 84', 'آموزش تصویر و رسانه', 'دوره‌های آموزشی', 'اساتید', 'دانشجویان', 'نمونه کار'],
  openGraph: {
    title: 'آکادمی | آکادمی 84',
    description: 'مرکز تخصصی آموزش تصویر و رسانه. دوره‌های حرفه‌ای، پروژه‌محور و کاربردی',
    url: 'https://www.academy84.ir/academy',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/academy',
  },
};

export default function AcademyPage() {
  const cards = [
    {
      href: '/academy/courses',
      title: 'دوره‌ها',
      description: 'مشاهده تمام دوره‌های آموزشی',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      href: '/academy/teachers',
      title: 'اساتید',
      description: 'معرفی اساتید مجرب',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      href: '/academy/students',
      title: 'دانشجویان',
      description: 'گالری دانشجویان و نمونه کارها',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      href: '/academy/register',
      title: 'ثبت‌نام',
      description: 'ثبت‌نام آنلاین در دوره‌ها',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: 'اساتید مجرب',
      description: 'استفاده از بهترین و باتجربه‌ترین اساتید',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
    {
      title: 'محتوای به‌روز',
      description: 'آخرین تکنولوژی‌ها و روش‌های آموزشی',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'پشتیبانی کامل',
      description: 'پشتیبانی مستمر از دانشجویان',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-primary-900">آکادمی آموزشی</h1>
          <p className="text-lg sm:text-xl text-primary-600 max-w-3xl mx-auto">
            ارائه بهترین دوره‌های آموزشی با کیفیت بالا و اساتید مجرب
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white p-5 sm:p-6 rounded-2xl shadow-soft border border-transparent hover:border-accent-200 hover:shadow-soft-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-700 group-hover:bg-accent-50 group-hover:text-accent-600 transition-colors duration-300">
                {card.icon}
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-1.5 text-primary-900">{card.title}</h2>
              <p className="text-primary-500 text-sm">{card.description}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 sm:p-10 text-center border border-primary-100 shadow-soft">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-primary-900">چرا آکادمی ما؟</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2 text-primary-900">{feature.title}</h3>
                <p className="text-primary-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

