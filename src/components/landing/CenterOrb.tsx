/**
 * CenterOrb — central glowing orb for the "Why Choose Us" section.
 * Placeholder mark: swap the content inside the circle for a real logo later.
 */
export function CenterOrb() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Replace this div's contents with your logo/mark later */}
      <div className="orb-breathe relative z-10 flex size-36 items-center justify-center rounded-full border border-sky-cyan/30 bg-gradient-to-br from-deep-purple via-background to-royal-blue/60 backdrop-blur-xl sm:size-44">
        <span className="font-display text-3xl font-semibold tracking-wide text-foreground sm:text-4xl">
          Si<span className="text-bright-cyan">F</span>8
        </span>
      </div>
      <div
        aria-hidden
        className="absolute h-64 w-64 rounded-full opacity-60 blur-3xl sm:h-80 sm:w-80"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.74 0.115 220 / 22%), oklch(0.55 0.16 315 / 12%), transparent)",
        }}
      />
    </div>
  );
}
