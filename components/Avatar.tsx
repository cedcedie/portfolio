'use client';

import { useEffect, useRef, useState } from 'react';

type AvatarProps = {
  src: string;
  alt: string;
  /** Shown if the image fails to load (e.g. file not added yet). */
  initials: string;
};

/**
 * Square profile photo with a monochrome initials fallback, shown in full
 * color. The image is always visible immediately; we only swap to initials on
 * a genuine load error. A mount-time `complete`/`naturalWidth` check covers the
 * case where the image finished loading before React attached its handlers
 * (which previously left it hidden until a re-render).
 */
export default function Avatar({ src, alt, initials }: AvatarProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      // Finished loading before hydration, but with no pixels → broken/missing.
      setFailed(true);
    }
  }, []);

  if (failed) {
    return (
      <div
        aria-label={alt}
        role="img"
        className="grid aspect-square w-full place-items-center border border-line bg-line/30 font-mono text-2xl font-medium tracking-tight text-ink-faint"
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="aspect-square w-full border border-line object-cover"
    />
  );
}
