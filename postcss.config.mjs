/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind v4 is CSS-first; this single plugin replaces the v3
    // tailwindcss + autoprefixer pair (vendor-prefixing is built in).
    '@tailwindcss/postcss': {},
  },
};

export default config;
