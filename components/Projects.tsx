import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects, homeProjectNames } from '@/lib/resume-data';
import { ArrowUpRight } from '@/components/icons';

/**
 * Projects bento on the home page. Shows the curated `homeProjectNames` set in
 * order; "View all projects" links to the dedicated /projects page. Featured
 * projects span full width.
 */
export default function Projects() {
  // Curated home-page subset, in the order listed; the rest live on /projects.
  const featured = homeProjectNames
    .map((name) => projects.find((p) => p.name === name))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <div id="projects" className="scroll-mt-24">
      <div className="mb-3 mt-2 flex items-center justify-between gap-4">
        <h2 className="font-mono text-[11px] uppercase tracking-label text-ink-faint">
          04 — Projects
        </h2>
        <Link
          href="/projects"
          prefetch
          className="link-underline gap-1.5 font-mono text-[11px] uppercase tracking-label"
        >
          View all projects
          <ArrowUpRight width={13} height={13} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {featured.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            showCover={false}
            className={project.featured ? 'sm:col-span-2' : ''}
          />
        ))}
      </div>
    </div>
  );
}
