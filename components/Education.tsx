import Card from '@/components/Card';
import { education } from '@/lib/resume-data';

/**
 * Education cell. Compact — degree, school, period. Shares a bento row with
 * Certifications.
 */
export default function Education() {
  return (
    <Card id="education" label="Education" index={5}>
      <div className="space-y-5">
        {education.map((edu) => (
          <div key={edu.degree}>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base font-medium text-ink">{edu.degree}</h3>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-label text-ink-faint tabular">
                {edu.period}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-ink-muted">{edu.school}</p>
            {edu.location && (
              <p className="mt-0.5 font-mono text-[11px] text-ink-faint">
                {edu.location}
              </p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
