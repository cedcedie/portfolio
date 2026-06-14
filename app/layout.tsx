import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { profile, contact } from '@/lib/resume-data';
import ThemeScript from '@/components/ThemeScript';
import './globals.css';

const siteUrl = contact.portfolio;
const siteTitle = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: profile.bio,
  // Help search/AI crawlers and rich-link previews understand the page.
  keywords: [
    profile.name,
    'Software Developer',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Flutter',
    'Portfolio',
    profile.location,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: siteTitle,
    description: profile.bio,
    url: siteUrl,
    siteName: siteTitle,
    type: 'website',
    locale: 'en_US',
    // app/opengraph-image.tsx is picked up automatically as the OG image.
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: profile.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-dvh">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
