import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-brand">
          The Reality
        </p>
        <h2 className="font-display max-w-4xl text-4xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          You've built something real. Your market can't see it.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-[1fr_auto_1fr] md:gap-16">
        <Reveal delay={120}>
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-sky-cyan">
              The Disconnect
            </h3>
            <p className="text-base text-muted-foreground sm:text-lg" style={{ lineHeight: 1.8 }}>
              Your brand doesn't carry the weight of your actual expertise. You
              over-explain pricing and lose deals to competitors with better
              optics but inferior delivery.
            </p>
          </div>
        </Reveal>

        <div aria-hidden className="hidden w-px bg-border md:block" />
        <div aria-hidden className="h-px w-full bg-border md:hidden" />

        <Reveal delay={240}>
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-violet-brand">
              The Fix
            </h3>
            <p className="text-base text-muted-foreground sm:text-lg" style={{ lineHeight: 1.8 }}>
              Generic templates and manipulative marketing tactics aren't the
              answer. You need a brand system that reflects your true values
              without crossing ethical lines. That is what we fix.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
