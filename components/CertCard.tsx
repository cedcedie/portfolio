'use client';

import { useState } from 'react';
import type { Certification } from '@/lib/resume-data';
import Lightbox from '@/components/Lightbox';
import { ArrowUpRight, ExpandIcon } from '@/components/icons';

/**
 * Certificate card: preview image on top, details below.
 *
 * - Cards with a preview `image` open it in a full-screen lightbox on click
 *   (with a "View PDF" link to the source `file`).
 * - Cards with only a `file` (no image) open that file in a new tab.
 * - Cards with neither render as a static, non-interactive card.
 */
export default function CertCard({ cert }: { cert: Certification }) {
  const [open, setOpen] = useState(false);
  // If the preview file is missing/broken, fall back to the label block.
  const [imageOk, setImageOk] = useState(true);
  const hasImage = Boolean(cert.image) && imageOk;

  const body = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-line/20">
        {cert.image && imageOk ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cert.image}
              alt={`${cert.name} certificate`}
              loading="lazy"
              onError={() => setImageOk(false)}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            />
            {/* Hover affordance: this preview is zoomable. */}
            <span className="pointer-events-none absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
              <ExpandIcon width={14} height={14} />
            </span>
          </>
        ) : (
          <div className="grid h-full w-full place-items-center font-mono text-[11px] uppercase tracking-label text-ink-faint">
            {cert.issuer}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium leading-snug text-ink transition-colors group-hover:text-accent">
            {cert.name}
          </h3>
          {(cert.file || hasImage) && (
            <ArrowUpRight
              width={14}
              height={14}
              className="mt-0.5 shrink-0 text-ink-faint transition-colors group-hover:text-accent"
            />
          )}
        </div>

        <p className="mt-1 font-mono text-[11px] uppercase tracking-label text-ink-faint">
          {cert.issuer}
        </p>

        {cert.description && (
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
            {cert.description}
          </p>
        )}

        <p className="mt-auto pt-3 font-mono text-[11px] uppercase tracking-label text-ink-faint tabular">
          {cert.date}
        </p>
      </div>
    </>
  );

  const shell =
    'group flex h-full flex-col border border-line transition-colors duration-200';

  // Image present → open the lightbox (richest experience).
  if (hasImage) {
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`${shell} cursor-pointer text-left hover:border-ink`}
        >
          {body}
        </button>
        <Lightbox
          images={[cert.image!]}
          index={open ? 0 : null}
          onClose={() => setOpen(false)}
        />
      </>
    );
  }

  // No image but a file → link straight to it.
  if (cert.file) {
    return (
      <a
        href={cert.file}
        target="_blank"
        rel="noreferrer"
        className={`${shell} cursor-pointer hover:border-ink`}
      >
        {body}
      </a>
    );
  }

  return <div className={shell}>{body}</div>;
}
