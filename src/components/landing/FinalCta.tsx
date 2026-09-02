import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="evaluation" className="relative overflow-hidden px-6 py-28 sm:py-36">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.36 0.17 276 / 30%), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 h-[380px] w-[440px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.74 0.115 220 / 16%), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-sky-cyan">
            The Final Step
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Ready to build a brand that carries your work?
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The Halal Filter is a short evaluation — your business type, how you
            currently market, and what you're looking to build. We verify Shariah
            compliance, confirm you're committed to the process, and that this is
            the right time to invest. If you pass, we book a Discovery Call. If
            you don't, we tell you honestly — and point you toward what to fix
            first. We respond within 48 hours.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-full bg-bright-cyan px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.93_0.15_190/50%)] transition-all hover:shadow-[0_0_60px_-6px_oklch(0.93_0.15_190/70%)]"
            >
              Apply for the Basirah Brand Audit
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Fixed scope. No hidden fees. No manipulation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
