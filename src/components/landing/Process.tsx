import { useState } from "react";
import { processStages } from "@/lib/process-data";
import { ProcessStage } from "./ProcessStage";
import { Reveal } from "./Reveal";

export function Process() {
  const [open, setOpen] = useState(0);
  const [inView, setInView] = useState(0);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.36 0.17 276 / 22%), oklch(0.21 0.069 312 / 22%), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-sky-cyan">The Process</p>
          <h2
            id="process-heading"
            className="font-display mx-auto mt-4 max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-5xl"
          >
            The Foundation Process
          </h2>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-16 left-[17px] top-0 w-px lg:left-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(0.55 0.16 315 / 60%), oklch(0.36 0.17 276 / 70%), oklch(0.74 0.115 220 / 60%), transparent)",
            }}
          />

          {processStages.map((stage, i) => (
            <ProcessStage
              key={stage.num}
              stage={stage}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
