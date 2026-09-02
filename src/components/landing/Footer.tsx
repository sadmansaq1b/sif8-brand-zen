import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#foundation" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks = [
  "Brand Strategy",
  "Visual Identity",
  "Voice & Messaging",
  "Shariah Compliance Audit",
  "Brand Activation",
  "Brand Governance",
];

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <p className="font-display text-2xl font-semibold tracking-wide text-foreground">
              Si<span className="text-bright-cyan">F</span>8
            </p>
            <p className="font-display text-sm italic text-muted-foreground">
              Niyyah First. Everything else follows.
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-sky-cyan/50 hover:text-bright-cyan"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-sky-cyan">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-sky-cyan">
              Services
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-sky-cyan">
              Start Here
            </p>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Take the Halal Filter. Honest answers within 48 hours.
            </p>
            <a
              href="#evaluation"
              className="inline-flex items-center gap-2 rounded-full border border-sky-cyan/40 bg-sky-cyan/10 px-5 py-2.5 text-sm font-medium text-sky-cyan backdrop-blur-md transition-all hover:border-bright-cyan/60 hover:bg-sky-cyan/20 hover:text-bright-cyan"
            >
              Free Evaluation →
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} SiF8. Without deception. Without compromise.
          </p>
        </div>
      </div>
    </footer>
  );
}
