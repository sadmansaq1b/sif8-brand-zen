import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.36 0.17 276 / 35%), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-40 h-[480px] w-[560px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.21 0.069 312 / 60%), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-1/3 h-[420px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.74 0.115 220 / 18%), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-sky-cyan">
            Strategy-Led Brand Systems for Muslim Founders
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display text-5xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Your work is worth more than your brand is charging for it.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            SiF8 builds brand systems from the inside out — positioning, identity,
            and voice — so your business becomes legible, trustworthy, and
            premium. Without deception. Without compromise.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href="#evaluation"
              className="group inline-flex items-center gap-2 rounded-full bg-bright-cyan px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.93_0.15_190/50%)] transition-all hover:shadow-[0_0_60px_-6px_oklch(0.93_0.15_190/70%)]"
            >
              Apply for Basirah Brand Audit
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="text-sm text-muted-foreground">
              <span className="mr-1 text-bright-cyan">✦</span> Trusted by 20+ brands
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
