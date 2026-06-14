'use client';

import { useState } from 'react';
import type { Project } from '@/lib/resume-data';
import Card from '@/components/Card';
import Lightbox from '@/components/Lightbox';
import { ArrowUpRight, GitHubIcon, ImagesIcon, ExpandIcon } from '@/components/icons';

/**
 * Project bento cell: optional cover image, name, role/date, description, tech
 * pills, and links. The cover (or first gallery image) opens a lightbox showing
 * every gallery image. Featured projects span two columns (via className).
 */
export default function ProjectCard({
  project,
  className = '',
  showCover = true,
}: {
  project: Project;
  className?: string;
  showCover?: boolean;
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const gallery = project.gallery ?? [];
  const hasGallery = gallery.length > 0;
  // Cover precedence: explicit cover → first gallery image → none (text-only).
  // The home-page preview hides the cover (`showCover={false}`).
  const cover = showCover ? (project.cover ?? gallery[0]) : undefined;
  // Lightbox shows the gallery if present, otherwise just the cover.
  const lightboxImages = hasGallery ? gallery : cover ? [cover] : [];
  const hasImages = lightboxImages.length > 0;
  const hasLinks = Boolean(project.github || project.live) || gallery.length > 1;

  return (
    <Card className={className}>
      {cover && (
        <button
          type="button"
          onClick={() => setGalleryOpen(true)}
          aria-label={`View ${project.name} gallery`}
          className="group relative -mx-5 -mt-5 mb-5 block aspect-[16/9] overflow-hidden border-b border-line bg-line/20 sm:-mx-6 sm:-mt-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover}
            alt={`${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="pointer-events-none absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
            <ExpandIcon width={12} height={12} />
            {hasGallery ? `${gallery.length} images` : 'View'}
          </span>
        </button>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium text-ink">{project.name}</h3>
        {(project.github || project.live) && (
          <ArrowUpRight className="mt-1 shrink-0 text-ink-faint" />
        )}
      </div>

      <p className="mt-1 font-mono text-[11px] uppercase tracking-label text-ink-faint tabular">
        {project.role} · {project.period}
      </p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="border border-line px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      {hasLinks && (
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline gap-1.5 font-mono text-xs uppercase tracking-label"
            >
              <GitHubIcon width={14} height={14} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="link-underline gap-1.5 font-mono text-xs uppercase tracking-label"
            >
              <ArrowUpRight width={14} height={14} />
              Live
            </a>
          )}
          {/* Explicit gallery link when there's more than one image. A single
              cover is already openable by clicking the thumbnail. */}
          {gallery.length > 1 && (
            <button
              type="button"
              onClick={() => setGalleryOpen(true)}
              className="link-underline gap-1.5 font-mono text-xs uppercase tracking-label"
            >
              <ImagesIcon width={14} height={14} />
              Gallery
              <span className="text-ink-faint">({gallery.length})</span>
            </button>
          )}
        </div>
      )}

      {hasImages && (
        <Lightbox
          images={lightboxImages}
          index={galleryOpen ? 0 : null}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </Card>
  );
}
