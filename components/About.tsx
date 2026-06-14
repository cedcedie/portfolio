import Card from '@/components/Card';
import { profile } from '@/lib/resume-data';

/**
 * About cell — the bio narrative. Sits beside Skills in the bento row.
 */
export default function About() {
  return (
    <Card id="about" label="About" index={1} className="sm:col-span-1">
      <p className="text-pretty text-base leading-relaxed text-ink sm:text-lg">
        {profile.bio}
      </p>
    </Card>
  );
}
