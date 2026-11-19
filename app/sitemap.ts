import { MetadataRoute } from 'next';
import { SERVICES_LIST } from '@/data/services';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://idm-inky.vercel.app';
  const now = new Date();

  const coreRoutes = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/portfolio',
    '/industries',
    '/blog',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_LIST.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...serviceRoutes, ...blogRoutes];
}
