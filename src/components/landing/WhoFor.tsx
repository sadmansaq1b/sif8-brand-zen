import { Reveal } from "./Reveal";

const points = [
  "You're generating revenue but can't charge what your work is worth.",
  "You keep having to explain yourself in discovery calls.",
  "You got a logo with no strategic backbone behind it.",
  "You're quietly anxious that your marketing tactics might be crossing a line.",
  "You want to grow without compromising your deen.",
];

export function WhoFor() {
  return (
    <section id="services" className="relative mx-auto max-w-4xl px-6 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-64 top-0 h-[420px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.55 0.16 315 / 20%), transparent)",
        }}
      />

      <Reveal>
        <h2 className="font-display max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-5xl">
          Built for founders who refuse to trade their deen for their growth.
        </h2>
      </Reveal>

      <div className="mt-14">
        {points.map((p, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="flex items-baseline gap-6 border-b border-border py-6">
              <span className="shrink-0 text-sm font-medium tracking-widest text-sky-cyan/80 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="glass mt-12 rounded-2xl p-8 sm:p-10">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg" style={{ lineHeight: 1.8 }}>
            Founders chasing shortcuts, fast logos, or trend-chasing aesthetics...
            If that's not where you are, we'll tell you honestly — before you
            spend a single taka.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
