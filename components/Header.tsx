'use client';

import { useEffect, useState } from 'react';
import { navLinks, profile } from '@/lib/resume-data';
import ThemeToggle from '@/components/ThemeToggle';
import { MenuIcon, CloseIcon } from '@/components/icons';

/**
 * Sticky top bar: name on the left; nav + theme toggle on the right.
 * Desktop shows the section links inline. Mobile collapses them into a
 * hamburger that opens a dropdown panel (closes on Esc, outside click, or
 * selecting a link).
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="/"
          className="shrink-0 font-mono text-sm font-medium tracking-tight text-ink transition-colors hover:text-accent"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-5 sm:gap-7">
          {/* Desktop: inline section links. */}
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-xs uppercase tracking-label text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          {/* Mobile: hamburger toggle. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink sm:hidden"
          >
            {open ? <CloseIcon width={18} height={18} /> : <MenuIcon width={18} height={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel. */}
      {open && (
        <>
          {/* Click-outside scrim (below the panel, above the page). */}
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-14 z-30 cursor-default sm:hidden"
          />
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="absolute inset-x-0 top-14 z-40 border-b border-line bg-paper motion-safe:animate-fade-up sm:hidden"
          >
            <ul className="mx-auto flex max-w-5xl flex-col px-4 py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-3 font-mono text-xs uppercase tracking-label text-ink-muted transition-colors last:border-b-0 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
