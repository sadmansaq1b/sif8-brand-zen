import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import type { ProcessStage as Stage } from "@/lib/process-data";
import { ProcessVisual } from "./ProcessVisual";
import { Reveal } from "./Reveal";

export function ProcessStage({
  stage,
  index,
  open,
  onToggle,
  onCenter,
}: {
  stage: Stage;
  index: number;
  open: boolean;
  onToggle: () => void;
  onCenter: () => void;
}) {
  const flip = index % 2 === 1;
  const panelId = `stage-panel-${stage.num}`;
  const rowRef = useRef<HTMLDivElement>(null);
  const onCenterRef = useRef(onCenter);
  onCenterRef.current = onCenter;

  // Highlight (open) this stage when it scrolls into the center band of the viewport
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onCenterRef.current();
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const text = (
    <div className={flip ? "lg:pl-16" : "lg:pr-16 lg:text-right"}>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group w-full cursor-pointer text-left"
        >
          <span
            className={`flex items-start gap-3 ${flip ? "" : "lg:flex-row-reverse lg:text-right"}`}
          >
            <ChevronDown
              className={`mt-2 size-4 shrink-0 text-sky-cyan transition-transform duration-500 ${
                open ? "rotate-180" : ""
              }`}
            />
            <span className="block">
              <span className="font-display block text-2xl font-medium text-foreground transition-colors group-hover:text-sky-cyan sm:text-3xl">
                {stage.title}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">({stage.subtitle})</span>
            </span>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] leading-[1.8] text-muted-foreground">{stage.intent}</p>

          <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-sky-cyan">Deliverables</p>
          <ul className={`mt-3 flex flex-wrap gap-2 ${flip ? "" : "lg:justify-end"}`}>
            {stage.deliverables.map((d) => (
              <li
                key={d}
                className="glass rounded-full px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-bright-cyan/40 hover:text-bright-cyan"
              >
                {d}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-sky-cyan">Feedback Loop</p>
          <ol
            className={`mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 ${flip ? "" : "lg:justify-end"}`}
          >
            {stage.loop.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s}
                </span>
                {i < stage.loop.length - 1 && <span className="text-xs text-sky-cyan/60">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );

  const visual = (
    <div className={flip ? "lg:pr-16" : "lg:pl-16"}>
      <ProcessVisual index={index} active={open} />
    </div>
  );

  return (
    <Reveal className="relative">
      <div className="relative grid gap-8 pb-20 pl-14 lg:grid-cols-2 lg:items-center lg:gap-0 lg:pl-0">
        {/* node */}
        <div className="absolute left-0 top-1 lg:left-1/2 lg:-translate-x-1/2">
          <div
            className={`relative flex size-9 items-center justify-center rounded-lg border transition-all duration-500 ${
              open
                ? "border-bright-cyan/60 bg-card node-glow"
                : "border-border bg-card/80"
            }`}
          >
            <span
              className={`text-[11px] font-medium tabular-nums ${
                open ? "text-bright-cyan" : "text-muted-foreground"
              }`}
            >
              {stage.num}
            </span>
          </div>
        </div>

        {flip ? (
          <>
            <div className="order-2 lg:order-1">{visual}</div>
            <div className="order-1 lg:order-2">{text}</div>
          </>
        ) : (
          <>
            <div className="order-1">{text}</div>
            <div className="order-2">{visual}</div>
          </>
        )}
      </div>
    </Reveal>
  );
}
