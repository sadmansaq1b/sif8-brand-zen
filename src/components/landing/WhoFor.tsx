import { Reveal } from "./Reveal";
import { Gem, Tag, AlertTriangle, Stamp } from "lucide-react";

const blocks = [
  {
    icon: Gem,
    label: "Hidden gem",
    text: "When someone lands on your page or meets you, they can't tell. The brand doesn't hold the weight of what's actually inside.",
  },
  {
    icon: Tag,
    label: "Price tag",
    text: "You over-explain your prices. You lose deals to competitors who look more credible but deliver less.",
  },
  {
    icon: AlertTriangle,
    label: "Warning",
    text: "You're quietly anxious that the way you're showing up—the urgency triggers, the attention tactics—might have crossed a line you can't uncross.",
  },
  {
    icon: Stamp,
    label: "Generic template",
    text: "Most agencies make this worse with generic templates, trend-chasing aesthetics, and copy engineered to manipulate. That is what we fix.",
  },
];

export function WhoFor() {
  return (
    <section id="reality" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-1/4 h-[400px] w-[480px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.36 0.17 276 / 22%), transparent)",
        }}
      />

      <Reveal>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-brand">
          The Reality
        </p>
        <h2 className="font-display max-w-4xl text-4xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-5xl">
          You've built something real. Your market can't see it.
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="pointer-events-none absolute -inset-4 hidden md:block">
          <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-white/5" />
          <div className="absolute bottom-0 left-1/2 h-4 w-px -translate-x-1/2 bg-white/5" />
          <div className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-white/5" />
          <div className="absolute right-0 top-1/2 h-px w-4 -translate-y-1/2 bg-white/5" />
        </div>

        <div className="grid grid-cols-1 border-t border-l border-white/[0.05] md:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal
              key={i}
              delay={120 + i * 120}
              className="group relative border-b border-r border-white/[0.05] transition-colors duration-500 hover:border-sky-cyan/40"
            >
              <div className="relative flex flex-col items-center p-8 text-center sm:p-12">
                <b.icon
                  className="size-7 text-muted-foreground/60 transition-colors duration-500 group-hover:text-sky-cyan sm:size-8"
                  strokeWidth={1.25}
                  aria-label={b.label}
                />
                <p
                  className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground sm:text-base"
                  style={{ lineHeight: 1.8 }}
                >
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
