import { Reveal } from "./Reveal";
import { Store, Rocket, Crown, Check, Zap, ShieldCheck } from "lucide-react";

const packages = [
  {
    id: "souq",
    name: "Souq",
    subtitle: "Activation",
    price: "৳80,000",
    timeline: "Delivered in 15 Days",
    icon: Store,
    gradient: "from-[#4CB7E4] via-[#0db4cc]/80 to-transparent",
    shadow: "shadow-[0_0_60px_-20px_rgba(76,183,228,0.35)]",
    hoverShadow: "hover:shadow-[0_0_80px_-12px_rgba(76,183,228,0.55)]",
    features: ["Strategic Positioning", "Visual Identity System", "Launch Kit", "Halal Filter Audit"],
  },
  {
    id: "qafilah",
    name: "Qafilah",
    subtitle: "Growth",
    price: "৳1,80,000",
    timeline: "Delivered in 30 Days",
    icon: Rocket,
    featured: true,
    gradient: "from-[#231342] via-[#9550B3]/80 via-[#e040fb]/60 to-transparent",
    shadow: "shadow-[0_0_70px_-18px_rgba(149,80,179,0.4)]",
    hoverShadow: "hover:shadow-[0_0_100px_-10px_rgba(224,64,251,0.45)]",
    features: ["Brand Architecture", "Voice & Messaging", "Content Playbook", "30-Day Advisory"],
  },
  {
    id: "diwan",
    name: "Diwan",
    subtitle: "Enterprise",
    price: "Custom",
    timeline: "Scope-Based Timeline",
    icon: Crown,
    gradient: "from-[#d4a847] via-[#231342]/60 to-transparent",
    shadow: "shadow-[0_0_60px_-20px_rgba(212,168,71,0.35)]",
    hoverShadow: "hover:shadow-[0_0_80px_-12px_rgba(212,168,71,0.5)]",
    features: ["End-to-End Rebrand", "Campaign Systems", "Brand Governance", "Quarterly Strategy"],
  },
];

const trustItems = [
  { label: "Fixed Scope", icon: Check },
  { label: "No Hidden Fees", icon: Zap },
  { label: "Shariah Compliant", icon: ShieldCheck },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      {/* Subtle architectural grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center sm:mb-20">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-sky-cyan/80">
              Investment
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Choose Your Brand Universe
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <Reveal key={pkg.id} delay={i * 120}>
                <article
                  className={`group relative flex min-h-[480px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 ${pkg.shadow} ${pkg.hoverShadow} ${
                    pkg.featured
                      ? "lg:min-h-[520px] lg:scale-[1.02] lg:border-violet-brand/30"
                      : ""
                  }`}
                >
                  {/* Featured badge */}
                  {pkg.featured && (
                    <div className="absolute right-5 top-5 z-20 rounded-full border border-violet-brand/30 bg-violet-brand/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-brand backdrop-blur-sm">
                      Most Popular
                    </div>
                  )}

                  {/* Bottom gradient glow */}
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t ${pkg.gradient} opacity-90 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 bottom-0 h-[42%] blur-3xl bg-gradient-to-t ${pkg.gradient} opacity-40 transition-opacity duration-500 group-hover:opacity-60`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-1 flex-col p-7 sm:p-8">
                    {/* Icon */}
                    <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 group-hover:border-sky-cyan/30 group-hover:bg-sky-cyan/10">
                      <Icon className="size-5 text-white/80 transition-colors duration-300 group-hover:text-sky-cyan" />
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-display text-3xl font-medium text-foreground">
                          {pkg.name}
                        </h3>
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {pkg.subtitle}
                        </span>
                      </div>
                      <p className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground">
                        {pkg.price}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {pkg.timeline}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="mb-8 space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-white/70"
                        >
                          <span className="inline-flex size-1.5 shrink-0 rounded-full bg-sky-cyan/80" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-auto pt-4">
                      <a
                        href="#evaluation"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:text-bright-cyan"
                      >
                        Select Package <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Trust strip */}
        <Reveal delay={400}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-white/50"
                >
                  <Icon className="size-4 text-sky-cyan/80" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
