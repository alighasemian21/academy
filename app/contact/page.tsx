import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'تماس با ما',
  description: 'تماس با آکادمی 84',
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تماس با ما</h1>
          <p className="text-xl text-gray-700">
            ما اینجا هستیم تا به شما کمک کنیم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">ایمیل</h3>
            <p className="text-gray-600">
              <a href="mailto:BYALIGHASEMIAN@GMAIL.COM" className="hover:text-primary-600 transition-colors">
                BYALIGHASEMIAN@GMAIL.COM
              </a>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">تلفن</h3>
            <p className="text-gray-600">
              <a href="tel:09375640513" className="hover:text-primary-600 transition-colors">
                09375640513
              </a>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">آدرس</h3>
            <p className="text-gray-600">قم، زنبیل آباد، خیابان عطاران</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

