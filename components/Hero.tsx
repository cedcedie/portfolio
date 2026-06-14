import Card from '@/components/Card';
import Avatar from '@/components/Avatar';
import { profile, contact } from '@/lib/resume-data';
import { ArrowUpRight } from '@/components/icons';

/** Initials for the avatar fallback (e.g. "CJ"). */
const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .filter(Boolean)
  .slice(0, 2)
  .join('')
  .toUpperCase();

/**
 * Top bento block. Left: profile photo (spans the full height). Right: a
 * stacked column with the name/intro on top and two aligned stat cells
 * (status + résumé) below — so everything on the right edge lines up.
 */
export default function Hero() {
  return (
    <div
      id="top"
      className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
    >
      {/* Profile photo — left column, full height of the block. */}
      <Card label="Profile" className="animate-fade-up p-3 sm:p-3">
        <Avatar
          src="/profile.png"
          alt={`${profile.name} — ${profile.title}`}
          initials={initials}
        />
      </Card>

      {/* Right column: intro on top, two stat cells aligned beneath it. */}
      <div className="grid auto-rows-min gap-3 sm:col-span-2 sm:gap-4">
        <Card
          label="Intro"
          index={0}
          className="animate-fade-up justify-center"
        >
          <div className="py-2">
            <h1 className="text-display font-semibold text-ink">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-measure text-lg text-ink-muted sm:text-xl">
              {profile.title}
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {/* Availability. */}
          <Card label="Status" className="animate-fade-up justify-center">
            <span className="inline-flex items-center gap-2">
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  profile.available ? 'bg-emerald-500' : 'bg-ink-faint'
                }`}
                aria-hidden
              />
              <span className="text-sm font-medium text-ink">
                {profile.availabilityNote}
              </span>
            </span>
          </Card>

          {/* Résumé download. */}
          <Card
            label="Resume"
            href={contact.resume}
            external
            className="animate-fade-up justify-between"
          >
            <p className="text-sm text-ink">Download my full résumé (PDF)</p>
            <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-label text-ink-muted transition-colors group-hover:text-accent">
              View resume
              <ArrowUpRight width={13} height={13} />
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
}
