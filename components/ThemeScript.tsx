/**
 * Runs synchronously in <head> before first paint to set the initial theme,
 * preventing a flash of the wrong color scheme. Uses a saved preference from
 * localStorage when present; otherwise defaults to dark (the portfolio's
 * primary look) rather than following the OS, so first-time visitors land in
 * dark mode and can switch to light via the toggle.
 */
const script = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark' : true;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
