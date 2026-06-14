import { profile } from '@/lib/resume-data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 border-t border-line py-8 text-center font-mono text-[11px] uppercase tracking-label text-ink-faint">
      © {year} {profile.name}
    </footer>
  );
}
