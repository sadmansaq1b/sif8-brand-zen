import { useRef, useState } from "react";

export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  gradient: string;
};

const CASES: CaseStudy[] = [
  {
    id: "axis-furniture",
    title: "Axis Furniture",
    category: "E-Commerce / Visual Identity",
    gradient:
      "bg-linear-to-br from-[#0A1628] via-royal-blue/70 to-sky-cyan/50",
  },
  {
    id: "kaysaan",
    title: "Kaysaan",
    category: "Tech / Brand Strategy",
    gradient:
      "bg-linear-to-br from-[#1A0F2E] via-violet-brand/80 to-royal-blue/60",
  },
  {
    id: "aboron",
    title: "Aboron",
    category: "Retail / Brand System",
    gradient:
      "bg-linear-to-br from-[#2A1F0B] via-[#C9A84C]/60 to-violet-brand/70",
  },
];

const contentPadding = "max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))";

export function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragged = useRef(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    startX.current = e.clientX;
    startScroll.current = track.scrollLeft;
    dragged.current = false;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 6) dragged.current = true;
    const track = trackRef.current;
    if (track) track.scrollLeft = startScroll.current - dx;
  };

  const onPointerUp = () => {
    setIsDragging(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (dragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section id="case-studies" className="relative overflow-hidden py-28 sm:py-36">
      <div className="relative mx-auto mb-10 max-w-6xl px-6 sm:mb-14">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-sky-cyan/70">
              Work
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
              Case Studies
            </h2>
          </div>
          <p className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground/70 sm:block">
            Drag to explore
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className={`scrollbar-hide flex w-full cursor-grab touch-pan-x snap-x snap-mandatory gap-6 overflow-x-auto py-2 ${
          isDragging ? "cursor-grabbing" : ""
        }`}
        style={{
          scrollSnapType: isDragging ? "none" : "x mandatory",
          scrollPaddingLeft: contentPadding,
          scrollPaddingRight: contentPadding,
          paddingLeft: contentPadding,
          paddingRight: contentPadding,
        }}
      >
        {CASES.map((study) => (
          <article
            key={study.id}
            className="group relative aspect-video w-[82vw] max-w-[720px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 ease-out hover:scale-[1.02] hover:border-sky-cyan/20 hover:shadow-[0_0_60px_-20px_oklch(0.74_0.115_220/30%)]"
          >
            <div className={`absolute inset-0 ${study.gradient}`} />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <span className="w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                {study.category}
              </span>

              <div className="flex items-end justify-between gap-4">
                <h3 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
                  {study.title}
                </h3>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="shrink-0 text-sm font-medium text-bright-cyan transition-all duration-300 group-hover:text-[#0EFFFF] group-hover:drop-shadow-[0_0_8px_rgba(14,255,255,0.6)]"
                >
                  View Case Study <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/70 sm:hidden">
        Drag to explore
      </p>
    </section>
  );
}
