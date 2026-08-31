const tints = [
  "oklch(0.55 0.16 315 / 45%)", // violet
  "oklch(0.36 0.17 276 / 50%)", // royal blue
  "oklch(0.74 0.115 220 / 40%)", // sky cyan
  "oklch(0.93 0.15 190 / 32%)", // bright cyan
];

function Panel({
  index,
  active,
  children,
}: {
  index: number;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative isolate w-full transition-all duration-700 ${
        active ? "opacity-100 saturate-100" : "opacity-45 saturate-50"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 bottom-0 h-2/3 rounded-full blur-3xl transition-opacity duration-700"
        style={{
          background: `radial-gradient(closest-side, ${tints[index % 4]}, transparent)`,
          opacity: active ? 1 : 0.45,
        }}
      />
      <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background: `linear-gradient(to top, ${tints[index % 4]}, transparent)`,
            opacity: 0.5,
          }}
        />
        <div className="relative flex min-h-[220px] flex-col justify-center gap-3">{children}</div>
      </div>
    </div>
  );
}

const label = "text-[9px] uppercase tracking-[0.18em] text-muted-foreground";
const chip = "rounded-xl border border-border bg-card/70 backdrop-blur-md shadow-lg";

export function ProcessVisual({ index, active }: { index: number; active: boolean }) {
  return (
    <Panel index={index} active={active}>
      {index === 0 && (
        <div className="flex flex-col gap-3">
          <div className={`${chip} float-drift mr-10 flex items-start gap-2 p-3`}>
            <span className="mt-0.5 size-4 shrink-0 rounded-full bg-violet-brand/60" />
            <div className="space-y-1.5">
              <p className={label}>Diagnostic</p>
              <div className="h-1.5 w-32 rounded-full bg-foreground/25" />
              <div className="h-1.5 w-24 rounded-full bg-foreground/15" />
            </div>
          </div>
          <div
            className={`${chip} float-drift ml-12 space-y-1.5 p-3`}
            style={{ animationDelay: "1.2s" }}
          >
            <p className={label}>Founder</p>
            <div className="h-1.5 w-28 rounded-full bg-sky-cyan/45" />
            <div className="h-1.5 w-20 rounded-full bg-foreground/15" />
          </div>
          <div
            className={`${chip} float-drift mr-16 space-y-1.5 p-3`}
            style={{ animationDelay: "2.1s" }}
          >
            <p className={label}>Positioning</p>
            <div className="h-1.5 w-36 rounded-full bg-foreground/25" />
          </div>
        </div>
      )}

      {index === 1 && (
        <div className="relative flex h-[200px] items-center justify-center">
          {[
            { t: "Color Palette", r: "-12deg", x: "-70px", d: "0s" },
            { t: "Type Scale", r: "6deg", x: "70px", d: "1.4s" },
            { t: "Logo Mark", r: "-2deg", x: "0px", d: "0.7s" },
          ].map((c, i) => (
            <div
              key={c.t}
              className="absolute w-40"
              style={{ transform: `translateX(${c.x}) rotate(${c.r})`, zIndex: i }}
            >
             <div className={`${chip} float-drift space-y-2 p-3`} style={{ animationDelay: c.d }}>
              <p className={label}>{c.t}</p>
              {c.t === "Color Palette" ? (
                <div className="flex gap-1.5">
                  <span className="size-5 rounded-md bg-deep-purple" />
                  <span className="size-5 rounded-md bg-royal-blue" />
                  <span className="size-5 rounded-md bg-violet-brand" />
                  <span className="size-5 rounded-md bg-sky-cyan" />
                </div>
              ) : c.t === "Logo Mark" ? (
                <p className="font-display text-2xl text-foreground">
                  Si<span className="text-bright-cyan">F</span>8
                </p>
              ) : (
                <div className="space-y-1">
                  <div className="h-2 w-full rounded-full bg-foreground/25" />
                  <div className="h-1.5 w-2/3 rounded-full bg-foreground/15" />
                </div>
              )}
             </div>
            </div>
          ))}
        </div>
      )}

      {index === 2 && (
        <div className="flex flex-col gap-3">
          <div className={`${chip} float-drift space-y-2 p-3`}>
            <p className={label}>Voice Guide</p>
            <div className="flex flex-wrap gap-1.5">
              {["Clear", "Restrained", "Truthful"].map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-sky-cyan/30 bg-sky-cyan/10 px-2 py-0.5 text-[10px] text-sky-cyan"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`${chip} float-drift ml-8 space-y-1.5 p-3`}
            style={{ animationDelay: "1.5s" }}
          >
            <p className={label}>Channel Playbook</p>
            <div className="h-1.5 w-32 rounded-full bg-foreground/25" />
            <div className="h-1.5 w-28 rounded-full bg-foreground/15" />
            <div className="h-1.5 w-20 rounded-full bg-foreground/10" />
          </div>
        </div>
      )}

      {index === 3 && (
        <div className="grid grid-cols-2 gap-3">
          {["Packaging", "Retail", "Web", "Campaign"].map((m, i) => (
            <div key={m} style={{ transform: `rotate(${i % 2 ? 3 : -3}deg)` }}>
              <div
                className={`${chip} float-drift space-y-2 p-3`}
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <p className={label}>{m}</p>
                <div className="h-8 rounded-md border border-border bg-gradient-to-br from-royal-blue/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      )}
    </Panel>
  );
}
