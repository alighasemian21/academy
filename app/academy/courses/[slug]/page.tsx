import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { getCourseBySlug, getAllCourses } from '@/lib/data/courses';

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const course = getCourseBySlug(params.slug);
  
  if (!course) {
    return {};
  }

  const baseUrl = 'https://www.academy84.ir';

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      url: `${baseUrl}/academy/courses/${course.slug}`,
      images: [course.image.startsWith('http') ? course.image : `https://www.academy84.ir${course.image.startsWith('/') ? course.image : '/' + course.image}`],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.description,
      images: [course.image.startsWith('http') ? course.image : `https://www.academy84.ir${course.image.startsWith('/') ? course.image : '/' + course.image}`],
    },
    alternates: {
      canonical: `${baseUrl}/academy/courses/${course.slug}`,
    },
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/academy/courses"
          className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
        >
          ← بازگشت به دوره‌ها
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 bg-gray-200">
            <SafeImage
              src={course.image}
              alt={`تصویر دوره ${course.title} - آکادمی 84`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>

          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-gray-700 mb-6">{course.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-bold mb-2">مدرس:</h3>
                <p className="text-gray-700">{course.instructor}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">مدت زمان:</h3>
                <p className="text-gray-700">{course.duration}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">قیمت:</h3>
                <p className="text-2xl font-bold text-primary-600">
                  {course.price.toLocaleString('fa-IR')} تومان
                </p>
              </div>
            </div>

            {course.content && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">درباره دوره</h2>
                <p className="text-gray-700 leading-relaxed">{course.content}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/academy/enrollment"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                ثبت‌نام در دوره
              </Link>
              <Link
                href="/contact"
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
              >
                سوال دارید؟ تماس بگیرید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

