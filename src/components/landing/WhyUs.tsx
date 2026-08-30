import { Reveal } from "./Reveal";
import { CenterOrb } from "./CenterOrb";

const cards = [
  { title: "Strategy Before Aesthetics", desc: "Every visual decision is anchored in positioning work, not taste trends." },
  { title: "Amanah in Every Deliverable", desc: "We build with honesty as a design constraint — no inflated claims, no dark patterns." },
  { title: "Systems, Not Logos", desc: "You leave with a working brand system: voice, identity, and rules that scale with you." },
  { title: "Built for the Long Term", desc: "Foundations that compound in trust, instead of campaigns that decay in weeks." },
  { title: "Founder-to-Founder Fluency", desc: "We understand the weight of building something real — we've been in the room." },
  { title: "Premium Without Compromise", desc: "High-end craft that never asks you to cross an ethical line to win the market." },
];

/**
 * Curved connector paths from each card toward the orb, drawn in a
 * viewBox matching the 3-col x 3-row grid (orb in the center cell).
 */
const connectors = [
  "M 200 150 C 350 180, 450 250, 560 330", // top-left
  "M 600 120 C 600 200, 600 260, 600 300", // top-center
  "M 1000 150 C 850 180, 750 250, 640 330", // top-right
  "M 200 690 C 350 660, 450 590, 560 510", // bottom-left
  "M 600 720 C 600 640, 600 580, 600 540", // bottom-center
  "M 1000 690 C 850 660, 750 590, 640 510", // bottom-right
];

export function WhyUs() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <h2 className="font-display mx-auto max-w-3xl text-center text-4xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-5xl">
          Why founders choose SiF8
        </h2>
      </Reveal>

      <div className="relative mt-16 lg:mt-20">
        {/* Connector lines (desktop only) */}
        <svg
          aria-hidden
          viewBox="0 0 1200 840"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          preserveAspectRatio="none"
        >
          {connectors.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="url(#connectorGrad)"
              strokeWidth="1.5"
              className="connector-line"
              opacity="0.55"
            />
          ))}
          <defs>
            <linearGradient id="connectorGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.55 0.16 315)" />
              <stop offset="50%" stopColor="oklch(0.36 0.17 276)" />
              <stop offset="100%" stopColor="oklch(0.74 0.115 220)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:gap-10">
          {cards.slice(0, 3).map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <Card title={c.title} desc={c.desc} />
            </Reveal>
          ))}

          <Reveal className="lg:col-start-2" delay={120}>
            <Card {...cards[3]} />
          </Reveal>
          <div className="flex items-center justify-center py-8 lg:col-start-2 lg:row-start-2 lg:py-0">
            <CenterOrb />
          </div>
          <Reveal className="lg:col-start-2 lg:row-start-3" delay={160}>
            <Card {...cards[4]} />
          </Reveal>
          <Reveal className="lg:col-start-3 lg:row-start-2" delay={200}>
            <Card {...cards[5]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass group h-full rounded-2xl p-7 transition-all duration-500 hover:border-sky-cyan/30 hover:bg-accent">
      <h3 className="font-display text-xl font-medium text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}
