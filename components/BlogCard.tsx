'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BlogPost } from '@/lib/data/posts';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [imgError, setImgError] = useState(false);
  const formattedDate = new Date(post.date).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        {!imgError ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            <span className="text-center px-4 text-sm">{post.title}</span>
          </div>
        )}
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
