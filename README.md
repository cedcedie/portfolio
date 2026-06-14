# Resume

A minimal, typography-first résumé / CV website with a hybrid **bento-grid**
layout. Monochrome palette, **light + dark mode**, no heavy animation —
composed in mixed-size grid cells rather than one long scroll.

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4** (CSS-first, no
config file), and the **Geist** font family. Configured for **static export**
so it deploys to GitHub Pages, Vercel, Netlify, or any static host.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

> **Note for OneDrive users:** this project lives in a OneDrive-synced folder.
> The `.next` build cache and `node_modules` are excluded from sync — if you
> ever hit an *Internal Server Error* or a `build-manifest.json` ENOENT while
> running `npm run dev`, OneDrive grabbed a lock on `.next` mid-write. Fix:
> stop the dev server, delete `.next`, and restart. (Moving the project out of
> OneDrive, e.g. to `C:\dev\`, avoids it entirely.)

## Editing your content

All copy lives in one file — you should not need to touch any component:

```
lib/resume-data.ts
```

Edit the values to update any part of the résumé. The file is split into:

| Export           | Controls                                              |
| ---------------- | ----------------------------------------------------- |
| `profile`        | Name, title, location, bio, availability status       |
| `navLinks`       | Header navigation                                     |
| `experience`     | Roles, date ranges, stack, achievement bullets        |
| `projects`       | Project cards (set `featured: true` for a wide cell)  |
| `skills`         | Skill groups (Languages / Frameworks / Game-AR-DB / Tools) |
| `education`      | Degree, school, period                                |
| `certifications` | Name, issuer, date, optional `file` (PDF/image link)  |
| `contact`        | Email, phone, GitHub, LinkedIn, portfolio             |

### Profile photo

Save your photo as **`public/profile.jpg`** (square works best). Until you add
it, the avatar shows your initials as a fallback — nothing breaks. The image is
rendered in grayscale and reveals full color on hover. To use a different
filename or format, change the `src` in `components/Hero.tsx`.

### Dark mode

A light/dark toggle sits in the header. The preference is saved to
`localStorage` and falls back to the OS setting; an inline script in the
document head applies it before first paint so there's no flash. Theme colors
are CSS variables in `app/globals.css` (`:root` for light, `:root.dark` for
dark) — edit those to retune either palette.

### Certificates

Drop your certificate PDFs (or images) into `public/certificates/` and point the
matching `file:` path in `certifications` at them. Filenames currently expected:
`java-fundamentals.pdf` and `systems-administration.pdf`. A cert with no `file`
renders as a plain, non-clickable card. See `public/certificates/README.md`.

## Scripts

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Start the dev server with hot reload                 |
| `npm run build` | Production build + static export to `out/`           |
| `npm run start` | Serve the production build locally                   |
| `npm run lint`  | Run ESLint                                           |

## Deploying

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects
   Next.js and serves the static export. No configuration, no `vercel.json`.
3. **Before deploying, make sure `public/profile.jpg` is committed** — the photo
   is served as a static asset and works identically in dev and on Vercel. If
   it's missing, the avatar falls back to your initials (no error).

Every push to the default branch redeploys automatically.

### GitHub Pages / any static host

```bash
npm run build
```

The site is exported to `out/`. Publish that folder.

> **GitHub Pages note:** if you serve from a sub-path (e.g.
> `username.github.io/repo`), set `basePath` and `assetPrefix` in
> `next.config.mjs`:
>
> ```js
> const repo = 'your-repo-name';
> const nextConfig = {
>   output: 'export',
>   trailingSlash: true,
>   basePath: `/${repo}`,
>   assetPrefix: `/${repo}/`,
>   images: { unoptimized: true },
> };
> ```

## Project structure

```
.
├── app/
│   ├── globals.css        # Tailwind v4 @theme tokens, focus + reduced-motion rules, utilities
│   ├── layout.tsx         # Root layout, Geist fonts, metadata
│   └── page.tsx           # Bento grid assembly (block order + grid rows)
├── components/
│   ├── Header.tsx         # Sticky nav + theme toggle
│   ├── ThemeToggle.tsx    # Light/dark switch (client)
│   ├── ThemeScript.tsx    # No-flash inline theme init for <head>
│   ├── Avatar.tsx         # Profile photo with initials fallback (client)
│   ├── Hero.tsx           # Photo + name + availability + location bento block
│   ├── About.tsx          # Bio cell
│   ├── Skills.tsx         # Grouped skill pills cell
│   ├── Experience.tsx     # Roles as 2-col card row
│   ├── Projects.tsx       # Project bento (featured cell spans wide)
│   ├── ProjectCard.tsx    # Single project card
│   ├── Education.tsx      # Education cell
│   ├── Certifications.tsx # Cert cards linking to PDFs
│   ├── Contact.tsx        # Email / phone / GitHub / LinkedIn
│   ├── Footer.tsx
│   ├── Card.tsx           # Shared bento cell primitive
│   ├── BlockHeading.tsx   # Mono section marker above 2-col rows
│   └── icons.tsx          # Inline SVG icon set
├── lib/
│   └── resume-data.ts     # ← all content lives here
├── public/
│   └── certificates/      # ← drop certificate PDFs/images here
├── next.config.mjs        # Static export config
├── postcss.config.mjs     # @tailwindcss/postcss (Tailwind v4)
└── tsconfig.json
```

## Customizing the look

- **Colors & type tokens:** the `@theme` block in `app/globals.css` (`paper`,
  `ink`, `line`, `accent`). The design is monochrome by intent — the `accent`
  is used only for link/hover emphasis.
- **Fonts:** swapped in `app/layout.tsx`. Geist Sans for text, Geist Mono for
  labels, dates, and tags.
- **Global styles:** focus rings, the reduced-motion guard, and the animated
  hover underline live in `app/globals.css`.
```
