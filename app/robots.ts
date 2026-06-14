import type { MetadataRoute } from 'next';
import { contact } from '@/lib/resume-data';

/**
 * Emitted as /robots.txt at build time. Allows all crawlers and points them
 * to the sitemap.
 */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const base = contact.portfolio.replace(/\/$/, '');

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  };
}
