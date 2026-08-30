export function Footer() {
  return (
    <footer id="evaluation" className="border-t border-border px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="font-display text-2xl font-semibold tracking-wide text-foreground">
          Si<span className="text-bright-cyan">F</span>8
        </p>
        <a
          href="#top"
          className="text-sm text-muted-foreground transition-colors hover:text-bright-cyan"
        >
          Apply for Basirah Brand Audit →
        </a>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} SiF8. Without deception. Without compromise.
        </p>
      </div>
    </footer>
  );
}
