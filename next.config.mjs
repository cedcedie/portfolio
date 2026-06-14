/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages / Vercel static hosting.
  output: 'export',

  // Emit folder-style URLs (e.g. /about/) so static hosts resolve cleanly.
  trailingSlash: true,

  images: {
    // next/image optimization is unavailable in a static export.
    unoptimized: true,
  },
};

export default nextConfig;
