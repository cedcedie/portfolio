type BlockHeadingProps = {
  label: string;
  index: number;
};

/**
 * Section marker for the calmer 2-column rows (Experience, Projects, etc.).
 * Renders the mono index/label above a grid of cards rather than inside a cell.
 */
export default function BlockHeading({ label, index }: BlockHeadingProps) {
  return (
    <h2 className="mb-3 mt-2 font-mono text-[11px] uppercase tracking-label text-ink-faint">
      {String(index).padStart(2, '0')} — {label}
    </h2>
  );
}
