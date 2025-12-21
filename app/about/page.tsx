export const metadata = {
  title: 'درباره ما - علی قاسمیان',
  description: 'درباره علی قاسمیان و آکادمی',
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">درباره ما</h1>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">علی قاسمیان</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                من علی قاسمیان، مدیر و بنیان‌گذار آکادمی هستم. با بیش از ۱۰ سال تجربه در زمینه مدیریت، آموزش و ارائه خدمات تخصصی، هدف من کمک به رشد و پیشرفت افراد و کسب‌وکارها است.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                در آکادمی ما، دوره‌های آموزشی با کیفیت بالا و اساتید مجرب ارائه می‌شود. ما متعهد به ارائه بهترین محتوای آموزشی و پشتیبانی مستمر از دانشجویان هستیم.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                استودیو آکادمی، به عنوان دپارتمانی از آکادمی، با تیمی متخصص و با تجربه، خدمات متنوعی از جمله طراحی و توسعه وبسایت، مشاوره کسب‌وکار، برندینگ و بازاریابی دیجیتال را ارائه می‌دهد.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">ماموریت ما</h3>
              <p className="text-gray-700">
                ارائه بهترین خدمات آموزشی و تخصصی با هدف کمک به رشد و پیشرفت افراد و کسب‌وکارها
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">چشم‌انداز ما</h3>
              <p className="text-gray-700">
                تبدیل شدن به برترین مرجع آموزشی و ارائه‌دهنده خدمات تخصصی در منطقه
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">ارزش‌های ما</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">تعهد</h4>
                <p className="text-gray-700 text-sm">تعهد به کیفیت و رضایت مشتری</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-bold mb-2">نوآوری</h4>
                <p className="text-gray-700 text-sm">استفاده از جدیدترین روش‌ها و تکنولوژی‌ها</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold mb-2">همکاری</h4>
                <p className="text-gray-700 text-sm">کار تیمی و همکاری نزدیک با مشتریان</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

