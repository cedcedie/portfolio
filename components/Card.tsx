import type { ReactNode } from 'react';

type CardProps = {
  /** Optional anchor id for nav targeting. */
  id?: string;
  /** Mono micro-label rendered in the card's top-left as a marker. */
  label?: string;
  /** Optional index, zero-padded, shown before the label. */
  index?: number;
  /** Extra classes — used to drive grid column/row spans per cell. */
  className?: string;
  /** Render as <a> when set, turning the whole card into a link. */
  href?: string;
  external?: boolean;
  children: ReactNode;
};

/**
 * Bento cell. A flat, bordered surface (no shadow — stays monochrome).
 * The optional mono label gives each cell its resume/CV marker. When `href`
 * is provided the entire card becomes an interactive link with a hover border.
 */
export default function Card({
  id,
  label,
  index,
  className = '',
  href,
  external,
  children,
}: CardProps) {
  const marker =
    label != null
      ? index != null
        ? `${String(index).padStart(2, '0')} — ${label}`
        : label
      : null;

  const base =
    'flex h-full flex-col border border-line bg-paper p-5 transition-colors duration-200 sm:p-6';
  const interactive = href ? 'group hover:border-ink cursor-pointer' : '';

  const inner = (
    <>
      {marker && (
        <span className="mb-4 font-mono text-[11px] uppercase tracking-label text-ink-faint">
          {marker}
        </span>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        className={`${base} ${interactive} scroll-mt-24 ${className}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <section id={id} className={`${base} scroll-mt-24 ${className}`}>
      {inner}
    </section>
  );
}
