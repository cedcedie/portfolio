import BlockHeading from '@/components/BlockHeading';
import Card from '@/components/Card';
import { experience } from '@/lib/resume-data';

/**
 * Experience block: each role is its own bento card in a 2-column grid.
 * Role + company lead, the period sits in tabular mono, then a lean bullet list.
 */
export default function Experience() {
  return (
    <div id="experience" className="scroll-mt-24">
      <BlockHeading label="Experience" index={3} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {experience.map((job) => (
          <Card key={`${job.company}-${job.period}`}>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base font-medium text-ink">{job.role}</h3>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-label text-ink-faint tabular">
                {job.period}
              </span>
            </div>

            <p className="mt-0.5 text-sm text-ink-muted">{job.company}</p>
            {job.meta && (
              <p className="mt-0.5 font-mono text-[11px] text-ink-faint">
                {job.meta}
              </p>
            )}
            {job.stack && (
              <p className="mt-2 font-mono text-[11px] text-ink-muted">
                {job.stack}
              </p>
            )}

            <ul className="mt-4 space-y-2">
              {job.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                >
                  <span
                    className="mt-2 h-px w-2.5 shrink-0 bg-ink-faint"
                    aria-hidden
                  />
                  <span className="min-w-0">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
