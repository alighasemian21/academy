import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/data/posts';

export const metadata: Metadata = {
  title: 'وبلاگ',
  description: 'مقالات و مطالب آموزشی آکادمی 84 در زمینه کسب‌وکار، برنامه‌نویسی، بازاریابی دیجیتال، طراحی و توسعه وب. آموزش‌های رایگان و نکات حرفه‌ای.',
  keywords: ['مقالات آموزشی', 'وبلاگ آکادمی 84', 'آموزش رایگان', 'نکات برنامه‌نویسی', 'مقالات بازاریابی', 'مقالات کسب‌وکار'],
  openGraph: {
    title: 'وبلاگ | آکادمی 84',
    description: 'مقالات و مطالب آموزشی در زمینه کسب‌وکار، برنامه‌نویسی و بازاریابی',
    url: 'https://www.academy84.ir/blog',
  },
  alternates: {
    canonical: 'https://www.academy84.ir/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">وبلاگ</h1>
          <p className="text-xl text-gray-700">
            آخرین مقالات و مطالب آموزشی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

