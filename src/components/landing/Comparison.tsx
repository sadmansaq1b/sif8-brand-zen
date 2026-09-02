import { Reveal } from "./Reveal";

const rows = [
  {
    criteria: "Starting point",
    sif8: "Your niyyah, values, and purpose",
    typical: "Your budget and timeline",
  },
  {
    criteria: "Brand foundation",
    sif8: "Strategy-first, then visuals",
    typical: "Logo first, strategy never",
  },
  {
    criteria: "Marketing approach",
    sif8: "Halal persuasion rooted in haq",
    typical: "FOMO, manipulation, urgency tricks",
  },
  {
    criteria: "Client relationship",
    sif8: "Long-term partner and counsel",
    typical: "Transactional — deliver and disappear",
  },
  {
    criteria: "Measure of success",
    sif8: "Barakah, trust, and legacy",
    typical: "Impressions and vanity metrics",
  },
  {
    criteria: "Values alignment",
    sif8: "Filters for clients who share principles",
    typical: "Works with anyone who pays",
  },
  {
    criteria: "Design philosophy",
    sif8: "Character expressed visually",
    typical: "Trend-chasing aesthetics",
  },
  {
    criteria: "Accountability",
    sif8: "Answers to something higher",
    typical: "Answers to the retainer",
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36">
      <Reveal>
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-sky-cyan/70">
            The Difference
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
            SiF8 vs. Typical Agency
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr
                className="text-xs uppercase tracking-[0.2em]"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <th className="w-[30%] px-5 py-4 font-medium text-muted-foreground sm:px-6 sm:py-5">
                  Criteria
                </th>
                <th className="w-[35%] px-5 py-4 font-medium text-bright-cyan sm:px-6 sm:py-5">
                  <span className="mr-2">✦</span> SiF8
                </th>
                <th className="w-[35%] px-5 py-4 font-medium text-muted-foreground sm:px-6 sm:py-5">
                  Typical Agency
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.criteria}
                  className="border-t border-border transition-colors hover:bg-white/[0.03]"
                  style={i % 2 === 0 ? { background: "rgba(255,255,255,0.03)" } : undefined}
                >
                  <td className="px-5 py-5 text-sm font-medium text-foreground sm:px-6 sm:py-6">
                    {row.criteria}
                  </td>
                  <td className="px-5 py-5 text-sm leading-relaxed text-foreground sm:px-6 sm:py-6">
                    <span className="mr-2 inline-block text-bright-cyan">✦</span>
                    {row.sif8}
                  </td>
                  <td className="px-5 py-5 text-sm leading-relaxed text-muted-foreground/80 sm:px-6 sm:py-6">
                    <span className="mr-2 inline-block text-muted-foreground/50">✗</span>
                    {row.typical}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
