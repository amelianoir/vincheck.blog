import { MetadataRoute } from 'next';
import { carBrands } from '@/lib/brands';
import { countries } from '@/lib/countries';
import { blogPosts } from '@/lib/blog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vincheck.blog';

  // Static pages
  const routes = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  // Dynamic brand pages
  const brandRoutes = carBrands.map((brand) => ({
    url: `${baseUrl}/vin-check/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic country pages
  const countryRoutes = countries.map((country) => ({
    url: `${baseUrl}/global/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...brandRoutes, ...countryRoutes, ...blogRoutes];
}
