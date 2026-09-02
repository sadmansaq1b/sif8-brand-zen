import { Reveal } from "./Reveal";

export function Founder() {
  return (
    <section id="founder" className="relative mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <Reveal>
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
          <div className="shrink-0">
            <div className="relative size-40 rounded-full border border-border bg-muted/30 sm:size-48">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40">
                <span className="text-xs uppercase tracking-[0.2em]">Headshot</span>
              </div>
              <div
                className="absolute -inset-1 -z-10 rounded-full opacity-50 blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, oklch(0.74 0.115 220 / 30%), oklch(0.55 0.16 315 / 20%), transparent)",
                }}
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-sky-cyan/70">
              Founder
            </p>
            <h2 className="font-display mb-6 text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
              Sifat — Brand Strategist & Creative Director
            </h2>
            <div className="space-y-5 text-base leading-[1.85] text-muted-foreground">
              <p>
                I've watched excellent founders hesitate on their pricing because their brand didn't carry the weight of what they actually delivered. I built SiF8 to fix this disconnect.
              </p>
              <p>
                After years of working in design and strategy, I know that generic templates don't work. A true brand is a system of decisions about who you are and what you refuse to do. When built correctly, the brand does the heavy lifting — saving your time, margins, and peace of mind.
              </p>
              <p className="text-foreground">
                If you're ready to build a structurally clean and ethically grounded business, let's begin.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
