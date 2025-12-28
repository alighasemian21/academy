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
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">آکادمی آموزشی</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ارائه بهترین دوره‌های آموزشی با کیفیت بالا و اساتید مجرب
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Link
            href="/academy/courses"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-xl font-bold mb-2">دوره‌ها</h2>
            <p className="text-gray-600">مشاهده تمام دوره‌های آموزشی</p>
          </Link>

          <Link
            href="/academy/teachers"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h2 className="text-xl font-bold mb-2">اساتید</h2>
            <p className="text-gray-600">معرفی اساتید مجرب</p>
          </Link>

          <Link
            href="/academy/students"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h2 className="text-xl font-bold mb-2">دانشجویان</h2>
            <p className="text-gray-600">گالری دانشجویان و نمونه کارها</p>
          </Link>

          <Link
            href="/academy/enrollment"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-xl font-bold mb-2">ثبت‌نام</h2>
            <p className="text-gray-600">ثبت‌نام آنلاین در دوره‌ها</p>
          </Link>
        </div>

        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">چرا آکادمی ما؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="font-bold mb-2">اساتید مجرب</h3>
              <p className="text-gray-700">استفاده از بهترین و باتجربه‌ترین اساتید</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">محتوای به‌روز</h3>
              <p className="text-gray-700">آخرین تکنولوژی‌ها و روش‌های آموزشی</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">پشتیبانی کامل</h3>
              <p className="text-gray-700">پشتیبانی مستمر از دانشجویان</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

