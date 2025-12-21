import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/data/posts';

export const metadata = {
  title: 'وبلاگ - مقالات آموزشی',
  description: 'مقالات و مطالب آموزشی در زمینه کسب‌وکار، برنامه‌نویسی و بازاریابی',
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

