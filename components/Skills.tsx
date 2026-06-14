import Card from '@/components/Card';
import { skills } from '@/lib/resume-data';

/**
 * Skills cell — every category shown in full as compact tag pills, filling the
 * card. Categories are divided by hairlines for resume density. Add more groups
 * or items in lib/resume-data.ts and they flow in automatically.
 */
export default function Skills() {
  return (
    <Card id="skills" label="Skills" index={2} className="sm:col-span-2">
      <div className="flex h-full flex-col justify-center divide-y divide-line">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-2 py-3 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-5"
          >
            <h3 className="pt-1 font-mono text-[11px] uppercase tracking-label text-ink-faint">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-line px-2.5 py-1 text-sm text-ink transition-colors hover:border-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
