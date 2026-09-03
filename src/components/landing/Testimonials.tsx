import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
  companyInitials: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We knew exactly what kind of design we wanted, but explaining it to someone else was proving difficult. Working with SiF8, we felt an immediate sense of relief the moment we received the first sample! Their excellent design skills, quick response, and fast delivery truly impressed us. Thanks to their professional design, our brand is now much more presentable to our audience. I would highly recommend SiF8's services to anyone looking for flawless work!",
    author: "Rezwan Islam Zim",
    role: "CEO & Co-Founder, Elite Event House",
    initials: "RZ",
    companyInitials: "EH",
  },
  {
    quote:
      "SiF8 upgraded our brand value with a premium visual identity and strategic clarity that set us apart from competitors. Highly recommend them to any founder looking to scale their brand.",
    author: "MA Zinnah",
    role: "Co-Founder, Pizzaburg Treats",
    initials: "MZ",
    companyInitials: "PT",
  },
  {
    quote:
      "From uncovering our market differentiation to building our brand narrative and naming our company, SiF8 gave us the strategic clarity we needed. Their ability to translate core ideas into an authoritative brand identity is unmatched.",
    author: "Lutfor Rahman",
    role: "Co-Founder, Kaysaan",
    initials: "LR",
    companyInitials: "KY",
  },
  {
    quote:
      "We loved the work, Masha'Allah! The rebranding received an overwhelmingly positive response from our customers.",
    author: "Masuda Binte Bashar",
    role: "CEO & Founder, Aboron",
    initials: "MB",
    companyInitials: "AB",
  },
];

function Card({ t }: { t: Testimonial }) {
  const long = t.quote.length > 220;
  return (
    <article
      className="group glass flex h-[380px] w-[320px] shrink-0 flex-col items-center justify-between rounded-2xl border-white/10 p-7 text-center transition-all duration-500 hover:border-sky-cyan/30 hover:shadow-[0_0_50px_-12px_oklch(0.74_0.115_220/35%),inset_0_0_30px_-15px_oklch(0.74_0.115_220/25%)] sm:h-[400px] sm:w-[360px]"
    >
      <Quote
        className="size-5 text-sky-cyan/50 transition-colors duration-500 group-hover:text-bright-cyan/70"
        aria-hidden
      />

      <blockquote
        className={`font-light leading-relaxed text-white/70 ${
          long ? "text-[13px] leading-[1.75]" : "text-base leading-[1.8]"
        }`}
      >
        “{t.quote}”
      </blockquote>

      <div className="flex items-center gap-3">
        <div className="flex items-center">
          {/* headshot placeholder */}
          <div className="relative z-10 flex size-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-[#3125AD] to-[#9550B3] font-mono text-[10px] font-semibold tracking-wider text-white">
            {t.initials}
          </div>
          {/* company logo placeholder sliding under the headshot */}
          <div className="relative z-0 -ml-4 flex size-10 items-center justify-center rounded-full border-2 border-background bg-[#231342] pl-3 font-mono text-[9px] font-semibold tracking-wider text-sky-cyan/80">
            {t.companyInitials}
          </div>
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-white">{t.author}</p>
          <p className="text-xs text-white/50">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const target = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const hovering = useRef(false);
  const half = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      half.current = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);

    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (!dragging.current && !hovering.current && !reduce) {
        target.current -= dt * 42; // auto-scroll speed px/s
      }
      offset.current += (target.current - offset.current) * (1 - Math.exp(-8 * dt));

      const h = half.current;
      if (h > 0) {
        let x = offset.current % h;
        if (x > 0) x -= h;
        track.style.transform = `translate3d(${x.toFixed(2)}px,0,0)`;
      }
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
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    target.current += dx;
  };
  const endDrag = () => {
    dragging.current = false;
  };

  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.36 0.17 276 / 18%), oklch(0.21 0.069 312 / 20%), transparent)",
        }}
      />

      <div className="relative mx-auto mb-14 max-w-6xl px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-sky-cyan/70">
          Testimonials
        </p>
        <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
          What Founders Say
        </h2>
      </div>

      <div
        className="relative cursor-grab touch-pan-y select-none active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => {
          hovering.current = false;
          endDrag();
        }}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div ref={trackRef} className="flex w-max gap-6 px-6 will-change-transform">
          {doubled.map((t, i) => (
            <Card key={`${t.author}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-xs tracking-[0.2em] text-muted-foreground/70">
        DRAG TO EXPLORE
      </p>
    </section>
  );
}
