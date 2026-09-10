import { useState } from "react";
import { Reveal } from "./Reveal";
import {
  Store,
  Rocket,
  Crown,
  Sparkles,
  Check,
  Zap,
  ShieldCheck,
  ChevronDown,
  Clapperboard,
} from "lucide-react";

type FeatureGroup = { title: string; items: string[] };

type Package = {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  price: string;
  billing: string;
  timeline: string;
  icon: typeof Store;
  featured?: boolean;
  groups: FeatureGroup[];
  cta: string;
  ctaStyle: "outline" | "primary" | "dark";
  glow: string;
  hoverGlow: string;
  borderHover: string;
};

const packages: Package[] = [
  {
    id: "souq-lite",
    badge: "Starter",
    name: "Souq Lite",
    tagline: "Essential identity to launch your brand fast.",
    price: "৳40,000",
    billing: "one-time",
    timeline: "7 Business Days · 1 Round of Revisions",
    icon: Sparkles,
    cta: "Start Small",
    ctaStyle: "outline",
    glow: "shadow-[0_0_50px_-22px_rgba(76,183,228,0.4)]",
    hoverGlow: "hover:shadow-[0_0_70px_-14px_rgba(76,183,228,0.5)]",
    borderHover: "hover:border-sky-cyan/40",
    groups: [
      {
        title: "Strategy & Governance",
        items: [
          "Core Brand Statement & Value Pillars",
          "Basic Ethical & Shariah Compliance Check",
        ],
      },
      {
        title: "Visual Identity",
        items: [
          "Primary Logo Mark & Standalone Icon",
          "Color Palette & Standard Typography Pairing",
          "1-Page Quick-Reference Brand Board",
        ],
      },
      {
        title: "Digital Launch",
        items: [
          "Social Media Setup (Avatar & Cover Banner)",
          "2 Reusable Social Post Templates",
          "Standard Digital Letterhead",
        ],
      },
    ],
  },
  {
    id: "souq",
    badge: "Foundation",
    name: "Souq",
    tagline: "Perfect for launching with clarity and presence.",
    price: "৳80,000",
    billing: "one-time",
    timeline: "15 Business Days · 2 Rounds of Revisions",
    icon: Store,
    cta: "Launch with Souq",
    ctaStyle: "outline",
    glow: "shadow-[0_0_50px_-22px_rgba(76,183,228,0.45)]",
    hoverGlow: "hover:shadow-[0_0_70px_-14px_rgba(76,183,228,0.55)]",
    borderHover: "hover:border-sky-cyan/40",
    groups: [
      {
        title: "Strategic Positioning & Compliance",
        items: [
          "Core Market Positioning & Differentiation Charter",
          "Brand Voice, Tone & Boilerplate Messaging",
          "Shariah Compliance & Ethical Advertising Audit",
        ],
      },
      {
        title: "Visual Identity System",
        items: [
          "Primary Logo, Secondary Marks & Responsive Wordmark",
          "Corporate Color Palette & Typography Hierarchy",
          "20-Page Brand Style Guide (Rules, spacing, clear space)",
        ],
      },
      {
        title: "Print & Digital Launch Kit",
        items: [
          "Stationery Suite (Business Card, Letterhead, Envelope)",
          "Social Media Launch Kit (Profile, Cover & 5 Post Templates)",
          "Digital Letterhead & Email Signature Design",
        ],
      },
    ],
  },
  {
    id: "qafilah",
    badge: "Most Popular",
    name: "Qafilah",
    tagline: "Everything required to scale and dominate your niche.",
    price: "৳150,000",
    billing: "one-time",
    timeline: "1 Month · 3 Structured Review Rounds",
    icon: Rocket,
    featured: true,
    cta: "Scale with Qafilah",
    ctaStyle: "primary",
    glow: "shadow-[0_0_70px_-18px_rgba(149,80,179,0.5)]",
    hoverGlow: "hover:shadow-[0_0_100px_-10px_rgba(149,80,179,0.6)]",
    borderHover: "hover:border-violet-brand/50",
    groups: [
      {
        title: "Advanced Strategy & Positioning",
        items: [
          "Comprehensive Competitive Audit & Audience Personas",
          "Brand Archetype & Core Value Proposition Framework",
          "Shariah Compliance Certification & Ethics Documentation",
        ],
      },
      {
        title: "Full-Stack Identity & Verbal System",
        items: [
          "Everything in Souq + Custom Iconography & Pattern Suite",
          "Channel-Specific Copywriting Guide (Social, Ad, Web)",
          "60+ Page Digital Brand Book & Component Guidelines",
        ],
      },
      {
        title: "Sales Enablement & Marketing",
        items: [
          "Pitch Deck Template (15 Master Slides in Figma/Keynote)",
          "Corporate Brochure & Multi-Page Company Profile Blueprint",
          "Modular Social Media Grid (15+ Post & Story Templates)",
          "Merchandising & Basic Product Packaging Layouts",
        ],
      },
      {
        title: "Digital & Handoff",
        items: [
          "Figma UI Component Library & Design Tokens",
          "2 Months of Structured Implementation Support",
        ],
      },
    ],
  },
  {
    id: "diwan",
    badge: "Enterprise",
    name: "Diwan",
    tagline: "Complete multi-platform brand ecosystem & governance.",
    price: "৳250,000",
    billing: "one-time",
    timeline: "2 Months · Dedicated Executive Support",
    icon: Crown,
    cta: "Schedule Executive Call",
    ctaStyle: "dark",
    glow: "shadow-[0_0_50px_-22px_rgba(212,168,71,0.4)]",
    hoverGlow: "hover:shadow-[0_0_70px_-14px_rgba(212,168,71,0.5)]",
    borderHover: "hover:border-[#d4a847]/40",
    groups: [
      {
        title: "Enterprise Architecture & Governance",
        items: [
          "Everything in Qafilah + Sub-Brand Architecture",
          "100-Topic Multi-Platform Content Roadmap & Launch Strategy",
          "6 Months of Brand Governance & Executive Advisory",
        ],
      },
      {
        title: "Total Visual & Environmental Ecosystem",
        items: [
          "Proprietary Type Styling & Stress-Testing",
          "Spatial & Environmental Signage Specs (Office & Retail)",
          "Premium Packaging Suite (Custom foils, embossing & unboxing)",
        ],
      },
      {
        title: "Cinematic Video & Motion System",
        items: [
          "Cinematic Brand Launch Scripting & Story Framework",
          "Animated 2D/3D Logo Bug, Lower Thirds & Transition Kit",
          "UI Motion Guidelines & Video Outro Specifications",
        ],
      },
      {
        title: "Digital & Team Handoff",
        items: [
          "E-Commerce UI Assets (Webflow/Shopify Visual Kit)",
          "Internal Brand Culture & Onboarding Deck",
          "Live Team Training Workshops & Executive Handoff",
        ],
      },
    ],
  },
];

const trustItems = [
  { label: "Fixed Scope", icon: Check },
  { label: "No Hidden Fees", icon: Zap },
  { label: "Shariah Compliant", icon: ShieldCheck },
];

function ctaClasses(style: Package["ctaStyle"]) {
  switch (style) {
    case "primary":
      return "border border-bright-cyan/50 bg-sky-cyan/20 text-bright-cyan shadow-[0_0_24px_-6px_oklch(0.74_0.115_220/60%)] hover:bg-sky-cyan/30 hover:shadow-[0_0_32px_-4px_oklch(0.74_0.115_220/70%)]";
    case "dark":
      return "border border-white/15 bg-foreground text-background hover:bg-foreground/90";
    default:
      return "border border-sky-cyan/30 bg-sky-cyan/5 text-sky-cyan hover:border-sky-cyan/60 hover:bg-sky-cyan/15";
  }
}

export function Pricing() {
  const [open, setOpen] = useState<string | null>("qafilah");

  return (
    <section id="pricing" className="relative overflow-hidden px-6 py-28 sm:py-36">
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
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.55 0.16 315 / 16%), oklch(0.36 0.17 276 / 14%), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 text-center sm:mb-20">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-sky-cyan/80">
              Investment
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Choose Your Brand Universe
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Fixed-scope packages, built inside out. Tap any package to see
              everything included.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            const expanded = open === pkg.id;
            return (
              <Reveal key={pkg.id} delay={i * 100}>
                <article
                  onClick={() => setOpen(expanded ? null : pkg.id)}
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white/[0.06] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1.5 ${pkg.glow} ${pkg.hoverGlow} ${
                    pkg.featured
                      ? "border-violet-brand/40 xl:-translate-y-2 xl:scale-[1.02] xl:hover:-translate-y-3.5"
                      : `border-white/15 ${pkg.borderHover}`
                  }`}
                >
                  {/* Top gradient sheen */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${
                      pkg.featured
                        ? "from-violet-brand/15"
                        : "from-sky-cyan/10"
                    } to-transparent`}
                  />

                  <div className="relative flex flex-1 flex-col p-6">
                    {/* Badge + icon */}
                    <div className="mb-5 flex items-center justify-between">
                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${
                          pkg.featured
                            ? "border-violet-brand/40 bg-violet-brand/20 text-violet-brand"
                            : "border-sky-cyan/30 bg-sky-cyan/10 text-sky-cyan"
                        }`}
                      >
                        {pkg.badge}
                      </span>
                      <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md transition-colors duration-300 group-hover:border-sky-cyan/30">
                        <Icon className="size-4 text-foreground/80 transition-colors duration-300 group-hover:text-sky-cyan" />
                      </span>
                    </div>

                    {/* Header */}
                    <h3 className="font-display text-2xl font-medium text-foreground">
                      {pkg.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {pkg.tagline}
                    </p>

                    <div className="mt-5 flex items-baseline gap-2">
                      <p className="font-sans text-3xl font-bold tracking-tight text-foreground">
                        {pkg.price}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {pkg.billing}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground/80">
                      {pkg.timeline}
                    </p>

                    {/* Details toggle */}
                    <button
                      type="button"
                      className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                      aria-expanded={expanded}
                    >
                      {expanded ? "Hide details" : "View details"}
                      <ChevronDown
                        className={`size-4 transition-transform duration-500 ${
                          expanded ? "rotate-180 text-sky-cyan" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        expanded
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-5 pb-1">
                          {pkg.groups.map((group) => (
                            <div key={group.title}>
                              <p
                                className={`mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                                  pkg.featured
                                    ? "text-violet-brand"
                                    : "text-sky-cyan/80"
                                }`}
                              >
                                {group.title}
                              </p>
                              <ul className="space-y-2">
                                {group.items.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2.5 text-[13px] leading-snug text-foreground/70"
                                  >
                                    <Check
                                      className={`mt-0.5 size-3.5 shrink-0 ${
                                        pkg.featured
                                          ? "text-violet-brand"
                                          : "text-sky-cyan/80"
                                      }`}
                                    />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-6">
                      <a
                        href="#evaluation"
                        onClick={(e) => e.stopPropagation()}
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 ${ctaClasses(pkg.ctaStyle)}`}
                      >
                        {pkg.cta} <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Add-on strip */}
        <Reveal delay={300}>
          <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-bright-cyan/20 bg-white/[0.06] p-6 backdrop-blur-xl shadow-[0_0_50px_-20px_rgba(14,255,255,0.3)] sm:flex-row sm:items-center sm:gap-8 sm:p-7">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-bright-cyan/30 bg-bright-cyan/10">
              <Clapperboard className="size-5 text-bright-cyan" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-medium text-foreground">
                  Kinetic Motion Identity
                </h3>
                <span className="rounded-full border border-bright-cyan/30 bg-bright-cyan/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-bright-cyan">
                  Add-on
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                High-impact 3–5 second 2D logo sting with sonic branding for
                reels, video intros, and digital presentations. Includes
                4K/1080p MP4, transparent ProRes MOV/WebM overlay, and
                web-ready Lottie/GIF asset.
              </p>
            </div>
            <div className="shrink-0 sm:text-right">
              <p className="font-sans text-2xl font-bold tracking-tight text-foreground">
                +৳10,000
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                One-time · 3–5 Business Days
              </p>
            </div>
          </div>
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={400}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-foreground/50"
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
