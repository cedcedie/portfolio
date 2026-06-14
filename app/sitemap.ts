import type { MetadataRoute } from 'next';
import { contact } from '@/lib/resume-data';

/**
 * Static sitemap. With `output: 'export'` this is emitted as /sitemap.xml at
 * build time. List every routable page so crawlers discover them all.
 */
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = contact.portfolio.replace(/\/$/, '');
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/projects/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/certificates/`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
