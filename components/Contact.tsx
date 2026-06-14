import Card from '@/components/Card';
import { contact } from '@/lib/resume-data';
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/icons';

/**
 * Contact cell — direct links only, no form. A primary email CTA plus a résumé
 * download lead; the secondary channels (phone, socials) follow as a tidy grid.
 * An availability pill signals open-to-work status pulled from `profile`.
 */
export default function Contact() {
  const channels = [
    {
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, '')}`,
      Icon: PhoneIcon,
      external: false,
    },
    {
      label: 'GitHub',
      value: contact.github.replace(/^https?:\/\//, ''),
      href: contact.github,
      Icon: GitHubIcon,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: contact.linkedin.replace(/^https?:\/\//, ''),
      href: contact.linkedin,
      Icon: LinkedInIcon,
      external: true,
    },
    {
      label: 'Facebook',
      value: contact.facebook.replace(/^https?:\/\//, ''),
      href: contact.facebook,
      Icon: FacebookIcon,
      external: true,
    },
  ];

  return (
    <Card id="contact" label="Contact" index={7} className="sm:col-span-3">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-measure">
          <p className="text-base leading-relaxed text-ink sm:text-lg">
            Have a role, a project, or a question? The fastest way to reach me is
            by email.
          </p>
        </div>

        {/* Primary action — résumé download already lives in the hero. */}
        <a
          href={`mailto:${contact.email}`}
          className="group inline-flex shrink-0 items-center justify-center gap-2 border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-label text-paper transition-colors hover:bg-transparent hover:text-ink"
        >
          <MailIcon width={15} height={15} />
          {contact.email}
        </a>
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-x-8 divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-y-0">
        {channels.map(({ label, value, href, Icon, external }) => (
          <li key={label} className="border-b border-line">
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group flex items-center justify-between gap-4 py-3.5"
            >
              <span className="flex items-center gap-3">
                <Icon className="text-ink-faint transition-colors group-hover:text-accent" />
                <span className="font-mono text-[11px] uppercase tracking-label text-ink-faint">
                  {label}
                </span>
              </span>
              <span className="link-underline truncate text-sm">{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
