import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { profile, projects, projectCategoryOrder } from '@/lib/resume-data';
import { ArrowLeftIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: `Selected projects by ${profile.name}.`,
};

/**
 * Dedicated projects page. Projects are grouped by `category` (Freelance /
 * Personal / Academic), each group introduced by a labeled separator, then
 * laid out in an even two-column grid of image-on-top cards (no full-width
 * spans). Empty groups are skipped, so the sections track the data.
 */
export default function ProjectsPage() {
  const groups = projectCategoryOrder
    .map((category) => ({
      category,
      items: projects.filter((p) => p.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl space-y-12 px-4 py-10 sm:px-6 sm:py-14">
        <div>
          <Link
            href="/"
            className="link-underline mb-6 gap-1.5 font-mono text-[11px] uppercase tracking-label"
          >
            <ArrowLeftIcon width={14} height={14} />
            Back
          </Link>
          <h1 className="text-display font-semibold text-ink">Projects</h1>
          <p className="mt-4 max-w-measure text-lg text-ink-muted">
            A selection of web, mobile, game, and AR work — grouped by freelance
            client work, personal builds, and academic projects.
          </p>
        </div>

        {groups.map(({ category, items }) => (
          <section key={category} className="space-y-4">
            {/* Category separator. */}
            <div className="flex items-center gap-4">
              <h2 className="shrink-0 font-mono text-[11px] uppercase tracking-label text-ink-faint">
                {category}
              </h2>
              <span className="h-px flex-1 bg-line" aria-hidden />
              <span className="shrink-0 font-mono text-[11px] tracking-label text-ink-faint tabular">
                {String(items.length).padStart(2, '0')}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </section>
        ))}

        <Footer />
      </main>
    </>
  );
}
