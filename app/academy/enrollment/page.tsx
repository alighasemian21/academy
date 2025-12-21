import EnrollmentForm from '@/components/EnrollmentForm';

export const metadata = {
  title: 'ثبت‌نام در دوره - آکادمی',
  description: 'ثبت‌نام آنلاین در دوره‌های آموزشی',
};

export default function EnrollmentPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ثبت‌نام در دوره</h1>
          <p className="text-xl text-gray-700">
            فرم زیر را پر کنید تا با شما تماس بگیریم
          </p>
        </div>

        <EnrollmentForm />
      </div>
    </div>
  );
}

