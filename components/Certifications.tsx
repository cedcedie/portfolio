import Link from 'next/link';
import Card from '@/components/Card';
import CertCard from '@/components/CertCard';
import { certifications } from '@/lib/resume-data';
import { ArrowUpRight } from '@/components/icons';

/**
 * Certifications cell. The home-page grid shows only the featured certificates
 * (to save space); "View all certifications" links to the dedicated
 * /certificates page — matching the Projects "view all" pattern.
 */
export default function Certifications() {
  const preview = certifications.filter((cert) => cert.featured);

  return (
    <Card id="certifications" className="sm:col-span-2">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-label text-ink-faint">
          06 — Certifications
        </span>
        <Link
          href="/certificates"
          prefetch
          className="link-underline gap-1.5 font-mono text-[11px] uppercase tracking-label"
        >
          View all
          <ArrowUpRight width={13} height={13} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {preview.map((cert) => (
          <CertCard key={cert.name} cert={cert} />
        ))}
      </div>
    </Card>
  );
}
