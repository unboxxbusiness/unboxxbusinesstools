import { MetadataRoute } from 'next';
import { tools } from '@/app/tools/toolsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://unboxxbusiness.com'; // Replace with your actual domain

  const staticPages = [
    '',
    '/about',
    '/tools',
    '/book-demo',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const toolPages = tools.map((tool) => ({
    url: `${siteUrl}${tool.href}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...toolPages];
}
