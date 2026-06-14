import { navLinks, profile } from '@/lib/resume-data';
import ThemeToggle from '@/components/ThemeToggle';

/**
 * Sticky top bar: name on the left; section nav and theme toggle on the right.
 * Section labels hide on small screens (each section carries its own heading),
 * leaving a compact Contact link plus the toggle.
 */
export default function Header() {
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
          <nav aria-label="Primary">
            <ul className="flex items-center gap-5 sm:gap-7">
              {navLinks.map((link) => (
                <li key={link.href} className="hidden sm:block">
                  <a
                    href={link.href}
                    className="font-mono text-xs uppercase tracking-label text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {/* Compact entry point on mobile: jump straight to contact. */}
              <li className="sm:hidden">
                <a
                  href="/#contact"
                  className="font-mono text-xs uppercase tracking-label text-ink-muted transition-colors hover:text-ink"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
