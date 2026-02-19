import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { BlogPost } from '@/lib/data/posts';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div 
      className="opacity-0 animate-fade-in-card bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 bg-gray-200">
        <SafeImage
          src={post.image}
          alt={`تصویر مقاله ${post.title} - وبلاگ آکادمی 84`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
        />
        <div className="absolute top-2 left-2 bg-primary-600 text-white text-sm px-3 py-1 rounded">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{post.author}</span>
          <span>{formattedDate}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="block mt-4 text-primary-600 hover:text-primary-700 font-semibold"
        >
          ادامه مطلب →
        </Link>
      </div>
    </div>
  );
}
