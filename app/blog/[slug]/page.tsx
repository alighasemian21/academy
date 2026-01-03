import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { getPostBySlug, getAllPosts } from '@/lib/data/posts';
import BlogComments from '@/components/BlogComments';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  const baseUrl = 'https://www.academy84.ir';

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [post.image.startsWith('http') ? post.image : `https://www.academy84.ir${post.image.startsWith('/') ? post.image : '/' + post.image}`],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image.startsWith('http') ? post.image : `https://www.academy84.ir${post.image.startsWith('/') ? post.image : '/' + post.image}`],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http')
      ? post.image
      : `https://www.academy84.ir${post.image.startsWith('/') ? post.image : '/' + post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'آکادمی 84',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.academy84.ir/images/logos/logo-84.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.academy84.ir/blog/${post.slug}`,
    },
  };

  return (
    <div className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/blog"
          className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
        >
          ← بازگشت به وبلاگ
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 bg-gray-200">
            <SafeImage
              src={post.image}
              alt={`تصویر مقاله ${post.title} - وبلاگ آکادمی 84`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>

          <div className="p-8">
            <div className="mb-4">
              <span className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center text-gray-600 mb-8 border-b pb-4">
              <span className="ml-4">نویسنده: {post.author}</span>
              <span>تاریخ: {formattedDate}</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>
          </div>
        </article>

        <BlogComments postSlug={params.slug} />
      </div>
    </div>
  );
}

