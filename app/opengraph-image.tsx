import { ImageResponse } from 'next/og';
import { profile, skills } from '@/lib/resume-data';

/**
 * Build-time Open Graph card (1200×630). Rendered with next/og into a static
 * PNG during `next build` — works with `output: 'export'`. The look mirrors the
 * site: near-black paper, off-white ink, a mono marker rail, and a hairline
 * grid, so shared links carry the same editorial identity as the page.
 */
// Generate the PNG at build time so it ships with `output: 'export'`.
export const dynamic = 'force-static';
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const PAPER = '#0b0b0c';
const INK = '#f4f4f5';
const MUTED = '#a1a1aa';
const FAINT = '#71717a';
const LINE = '#2e2e33';
const ACCENT = '#60a5fa';

export default function OpengraphImage() {
  // A compact, recognizable tech strip drawn from the real skills data.
  const stack = [
    ...skills[0].items.slice(0, 3),
    ...skills[1].items.slice(0, 2),
    ...skills[2].items.slice(0, 2),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: PAPER,
          color: INK,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          // Hairline grid for atmosphere/depth.
          backgroundImage: `linear-gradient(${LINE} 1px, transparent 1px), linear-gradient(90deg, ${LINE} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          position: 'relative',
        }}
      >
        {/* Accent rail on the left edge. */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: ACCENT,
          }}
        />

        {/* Top marker. */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 22,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: FAINT,
          }}
        >
          <span>Portfolio</span>
          <span>{profile.location}</span>
        </div>

        {/* Name + title. */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 40,
              color: MUTED,
              letterSpacing: -1,
            }}
          >
            {profile.title}
          </div>
        </div>

        {/* Tech strip. */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 14,
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
          }}
        >
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                border: `1px solid ${LINE}`,
                padding: '8px 16px',
                fontSize: 22,
                letterSpacing: 1,
                textTransform: 'uppercase',
                color: MUTED,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
