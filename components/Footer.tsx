import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">درباره ما</h3>
            <p className="text-gray-400">
              آکادمی و شرکت علی قاسمیان - ارائه خدمات آموزشی و تخصصی با کیفیت
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/academy/courses" className="hover:text-white transition-colors">
                  دوره‌ها
                </Link>
              </li>
              <li>
                <Link href="/company/services" className="hover:text-white transition-colors">
                  خدمات شرکت
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ایمیل: <a href="mailto:BYALIGHASEMIAN@GMAIL.COM" className="hover:text-white transition-colors">BYALIGHASEMIAN@GMAIL.COM</a></li>
              <li>تلفن: <a href="tel:09375640513" className="hover:text-white transition-colors">09375640513</a></li>
              <li>آدرس: قم، زنبیل آباد، خیابان عطاران</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} تمام حقوق محفوظ است - علی قاسمیان</p>
        </div>
      </div>
    </footer>
  );
}

