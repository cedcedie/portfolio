'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@/components/icons';

type Theme = 'light' | 'dark';

/**
 * Light/dark toggle. The initial theme is applied by an inline script in the
 * document head (see ThemeScript) to avoid a flash, so this component only
 * reads the already-set state on mount and toggles it thereafter.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* localStorage may be unavailable (private mode) — ignore. */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        mounted
          ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
          : 'Toggle color theme'
      }
      className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink"
    >
      {/* Render both icons and swap via the .dark class so the button is
          correct even before hydration (no mismatch, no flash). */}
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
    </button>
  );
}
