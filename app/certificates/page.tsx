import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import CertCard from '@/components/CertCard';
import Footer from '@/components/Footer';
import { profile, certifications } from '@/lib/resume-data';
import { ArrowLeftIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: `Certifications — ${profile.name}`,
  description: `Certifications and awards earned by ${profile.name}.`,
};

/**
 * Dedicated certifications page. Lists every entry in `certifications`.
 * Mirrors /projects so the two "view all" destinations feel consistent.
 * Add more certs in lib/resume-data.ts and they appear here automatically.
 */
export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
        <div>
          <Link
            href="/"
            className="link-underline mb-6 gap-1.5 font-mono text-[11px] uppercase tracking-label"
          >
            <ArrowLeftIcon width={14} height={14} />
            Back
          </Link>
          <h1 className="text-display font-semibold text-ink">Certifications</h1>
          <p className="mt-4 max-w-measure text-lg text-ink-muted">
            Coursework awards and competency assessments — from Oracle Academy
            and the Linux Professional Institute to the national TOPCIT exam.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {certifications.map((cert) => (
            <CertCard key={cert.name} cert={cert} />
          ))}
        </div>

        <Footer />
      </main>
    </>
  );
}
