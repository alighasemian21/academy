import { MetadataRoute } from 'next';
import { getAllCourses } from '@/lib/data/courses';
import { getAllPosts } from '@/lib/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.academy84.ir';
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academy`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/academy/courses`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/academy/teachers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academy/students`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academy/register`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academy/studio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/academy/studio/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Dynamic course pages (with images for Google Image search)
  const courses = getAllCourses();
  const coursePages = courses.map((course) => {
    const imageUrl = course.image.startsWith('http')
      ? course.image
      : `${baseUrl}${course.image.startsWith('/') ? course.image : '/' + course.image}`;
    return {
      url: `${baseUrl}/academy/courses/${course.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: [{ url: imageUrl, alt: course.title }],
    };
  });

  // Dynamic blog post pages (with images)
  const posts = getAllPosts();
  const blogPages = posts.map((post) => {
    const imageUrl = post.image.startsWith('http')
      ? post.image
      : `${baseUrl}${post.image.startsWith('/') ? post.image : '/' + post.image}`;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: [{ url: imageUrl, alt: post.title }],
    };
  });

  return [...staticPages, ...coursePages, ...blogPages];
}

