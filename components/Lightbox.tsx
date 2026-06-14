'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon, ArrowLeftIcon } from '@/components/icons';

/**
 * Full-screen image gallery (lightbox). Dependency-free, keyboard-driven:
 * Esc closes, ← / → step through. Used by both certificate previews and
 * project galleries. Pass the list of image URLs and the index to open at.
 *
 * Rendered through a portal to <body> so `position: fixed` always covers the
 * viewport — a transformed ancestor (e.g. the on-load `reveal` animation)
 * would otherwise re-anchor `fixed` and trap the overlay inside the card.
 */
export default function Lightbox({
  images,
  index,
  onClose,
}: {
  images: string[];
  /** Index to open at; `null` keeps the lightbox closed. */
  index: number | null;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index ?? 0);
  const [mounted, setMounted] = useState(false);

  // Portals need the DOM; only render after mount (and skips SSR mismatch).
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (index != null) setCurrent(index);
  }, [index]);

  const go = useCallback(
    (delta: number) => {
      setCurrent((c) => (c + delta + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (index == null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, go, onClose]);

  const goTo = useCallback((i: number) => setCurrent(i), []);

  if (index == null || images.length === 0 || !mounted) return null;

  const multiple = images.length > 1;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="fixed inset-0 z-[60] flex flex-col bg-black/85 backdrop-blur-md motion-safe:animate-[fade-up_0.2s_ease]"
    >
      {/* Top bar: counter + close. */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <span className="font-mono text-[11px] uppercase tracking-label text-white/60 tabular">
          {multiple ? `${current + 1} / ${images.length}` : 'Preview'}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Stage. Click the backdrop (not the image) to dismiss. */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6 sm:px-16"
        onClick={onClose}
      >
        {multiple && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white sm:left-6"
          >
            <ArrowLeftIcon width={18} height={18} />
          </button>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={images[current]}
          src={images[current]}
          alt={`Gallery image ${current + 1}`}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full object-contain shadow-2xl motion-safe:animate-fade-up"
        />

        {multiple && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next image"
            className="absolute right-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white sm:right-6"
          >
            <ArrowLeftIcon width={18} height={18} className="rotate-180" />
          </button>
        )}
      </div>

      {/* Dot indicators — one per image, current one elongated. */}
      {multiple && (
        <div className="flex items-center justify-center gap-2 px-4 pb-6 sm:pb-8">
          {images.map((src, i) => {
            const active = i === current;
            return (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={active}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/35 hover:bg-white/60'
                }`}
              />
            );
          })}
        </div>
      )}
    </div>,
    document.body,
  );
}
