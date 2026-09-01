import React, { useEffect, useRef, useState } from "react";

type Service = {
  num: string;
  title: string;
  desc: string;
  deliverables: string[];
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Brand Strategy",
    desc: "Positioning, messaging architecture, and competitive clarity. We find the ground you stand on — and build from there.",
    deliverables: ["Positioning", "Messaging map", "Competitive audit"],
  },
  {
    num: "02",
    title: "Brand Identity",
    desc: "Visual systems that carry meaning. A coherent language that reflects your character and earns immediate trust.",
    deliverables: ["Logo system", "Type & color", "Identity guide"],
  },
  {
    num: "03",
    title: "Brand Activation",
    desc: "Taking your brand from paper to reality. Campaigns and experiences that make your positioning felt.",
    deliverables: ["Launch plan", "Campaign kit", "Rollout assets"],
  },
  {
    num: "04",
    title: "Packaging Strategy & Design",
    desc: "Shelf presence built on brand truth. Packaging that communicates quality and reflects what's inside.",
    deliverables: ["Structure", "Label system", "Print-ready art"],
  },
  {
    num: "05",
    title: "Web Design & Development",
    desc: "Digital presence that converts through clarity. Strategy-informed design built to perform.",
    deliverables: ["UX architecture", "UI system", "Build & ship"],
  },
  {
    num: "06",
    title: "Content Strategy & Development",
    desc: "Words and visuals that communicate your truth consistently, rooted in your brand's niyyah.",
    deliverables: ["Content pillars", "Editorial calendar", "Asset library"],
  },
  {
    num: "07",
    title: "Halal Marketing",
    desc: "Communication rooted in haq. Honest persuasion, not manipulation. We market your truth.",
    deliverables: ["Ethics audit", "Channel plan", "Ad systems"],
  },
  {
    num: "08",
    title: "Brand Consultancy",
    desc: "For founders navigating the tension between growth and principles. We think with you — not just for you.",
    deliverables: ["Advisory retainer", "Workshops", "Decision reviews"],
  },
];

const COUNT = SERVICES.length;
const ANGLE = 360 / COUNT;

export function ServicesCarousel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // continuous progress in "card" units
  const progress = useRef(0);
  const target = useRef(0);
  const tilt = useRef({ x: 0, y: 0 });
  const tiltTarget = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastX = useRef(0);
  const autoplay = useRef(true);
  const radius = useRef(560);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const measure = () => {
      const w = wrapRef.current?.clientWidth ?? 1200;
      radius.current = Math.max(420, Math.min(760, w * 0.62));
    };
    measure();
    window.addEventListener("resize", measure);

    let raf = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (autoplay.current && !dragging.current && !reduce) {
        target.current += dt * 0.12;
      }

      progress.current += (target.current - progress.current) * (1 - Math.exp(-8 * dt));
      tilt.current.x += (tiltTarget.current.x - tilt.current.x) * (1 - Math.exp(-6 * dt));
      tilt.current.y += (tiltTarget.current.y - tilt.current.y) * (1 - Math.exp(-6 * dt));

      if (stageRef.current) {
        stageRef.current.style.transform = `rotateX(${tilt.current.x.toFixed(
          3,
        )}deg) rotateY(${(-progress.current * ANGLE + tilt.current.y).toFixed(3)}deg)`;
        const outer = stageRef.current.parentElement;
        if (outer) outer.style.transform = `translateZ(${-radius.current}px)`;
      }

      const idx = ((Math.round(progress.current) % COUNT) + COUNT) % COUNT;
      setActive((prev) => (prev === idx ? prev : idx));

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (rect) {
      tiltTarget.current = {
        x: ((e.clientY - rect.top) / rect.height - 0.5) * 8,
        y: ((e.clientX - rect.left) / rect.width - 0.5) * 6,
      };
    }
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    target.current -= dx / 220;
  };

  const endDrag = () => {
    dragging.current = false;
    target.current = Math.round(target.current);
  };

  const onLeave = () => {
    tiltTarget.current = { x: 0, y: 0 };
    endDrag();
  };

  const goTo = (i: number) => {
    const cur = target.current;
    const base = Math.round(cur / COUNT) * COUNT;
    const candidates = [base + i - COUNT, base + i, base + i + COUNT];
    target.current = candidates.reduce((a, b) =>
      Math.abs(b - cur) < Math.abs(a - cur) ? b : a,
    );
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
      onMouseEnter={() => (autoplay.current = false)}
      onMouseLeave={() => (autoplay.current = true)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.36 0.17 276 / 22%), oklch(0.21 0.069 312 / 26%), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-sky-cyan/70">
            Services
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
            What We Do
          </h2>
        </header>

        <div
          ref={wrapRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onMouseLeave={onLeave}
          className="relative h-[420px] cursor-grab touch-pan-y select-none active:cursor-grabbing sm:h-[480px]"
          style={{ perspective: "1350px" }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-0 w-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              ref={stageRef}
              className="absolute h-0 w-0"
              style={{ transformStyle: "preserve-3d" }}
            >
            {SERVICES.map((s, i) => (
              <article
                key={s.num}
                onClick={() => goTo(i)}
                className="absolute -left-[140px] -top-[165px] w-[280px] sm:-left-[160px] sm:-top-[180px] sm:w-[320px]"
                style={{
                  transform: `rotateY(${i * ANGLE}deg) translateZ(${radius.current}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className={`glass flex h-[330px] flex-col rounded-2xl p-6 transition-[opacity,box-shadow,border-color] duration-500 sm:h-[360px] ${
                    active === i
                      ? "border-sky-cyan/40 opacity-100 shadow-[0_0_60px_-10px_oklch(0.74_0.115_220/45%)]"
                      : "opacity-55"
                  }`}
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span className="font-mono text-xs tracking-[0.25em] text-sky-cyan/70">
                      {s.num}
                    </span>
                    <span className="font-display text-sm tracking-wide text-foreground/60">
                      Si<span className="text-bright-cyan">F</span>8
                    </span>
                  </div>

                  <h3 className="font-display mb-4 text-2xl font-medium leading-snug text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm font-light leading-[1.8] text-muted-foreground">
                    {s.desc}
                  </p>

                  <ul className="mt-auto space-y-2 border-t border-border pt-5">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/50"
                      >
                        <span className="size-1 rounded-full bg-bright-cyan/70" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {SERVICES.map((s, i) => (
            <button
              key={s.num}
              onClick={() => goTo(i)}
              aria-label={`Go to ${s.title}`}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                active === i ? "w-10 bg-bright-cyan" : "w-5 bg-foreground/20"
              }`}
            />
          ))}
        </div>
        <p className="mt-6 text-center text-xs tracking-[0.2em] text-muted-foreground/70">
          DRAG TO EXPLORE
        </p>
      </div>
    </section>
  );
}
