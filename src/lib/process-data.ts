export type ProcessStage = {
  num: string;
  title: string;
  subtitle: string;
  intent: string;
  deliverables: string[];
  loop: string[];
};

export const processStages: ProcessStage[] = [
  {
    num: "01",
    title: "Internal Clarity",
    subtitle: "Niyyah & Strategy",
    intent:
      "We diagnose what your brand actually stands for, who it's for, what market it lives in, and whether the business is structurally clean — before a single visual decision is made. Most founders discover their real positioning problem here.",
    deliverables: [
      "Shariah Compliance Audit",
      "Competitor Research",
      "TAM & Market Research",
      "Market Aspiration & Ground Reality",
      "Core Positioning Charter",
      "Brand Archetype & Voice",
    ],
    loop: [
      "Strategy draft delivered",
      "Founder review session",
      "1 structured revision round",
      "Strategy locked",
    ],
  },
  {
    num: "02",
    title: "Visual Identity & System",
    subtitle: "Design as Decision-Making",
    intent:
      "Every visual choice is made against the locked strategy — never before it. Color, type, mark, system. None of it is decoration. It is your positioning made visible. The result is an identity that scales without losing integrity.",
    deliverables: [
      "Logo System",
      "Color & Typography",
      "Iconography & Pattern Suite",
      "Do's & Don'ts System",
      "Sticker & Expression Kit",
      "Motion Logo",
      "Brand Book",
      "Figma Component Library",
    ],
    loop: ["Concepts presented", "Direction locked", "2–3 revision rounds", "Final delivery"],
  },
  {
    num: "03",
    title: "The Barakah System",
    subtitle: "Voice & Continuity",
    intent:
      "We establish how the brand speaks, what it refuses to say, and how it compounds trust over time. You leave with a system, not a dependency. Your team should be able to run this without us.",
    deliverables: [
      "Channel Copywriting Guide",
      "Communication Guidelines",
      "Execution Roadmap",
      "Implementation Support",
    ],
    loop: [
      "System draft delivered",
      "Walkthrough session",
      "1 revision round",
      "Handoff complete",
    ],
  },
  {
    num: "04",
    title: "Brand Expansion",
    subtitle: "Expression & Activation",
    intent:
      "Once the core system is built and locked, we expand it into the physical and digital world — wherever your brand needs to show up.",
    deliverables: [
      "Packaging Design",
      "Retail & Spatial Branding",
      "Event & Experiential Branding",
      "Website Design & Development",
      "Digital Campaign Design",
      "IRL Campaign Strategy",
      "Employee Dispatch Sessions",
    ],
    loop: [
      "Scope defined per module",
      "Concepts reviewed",
      "Revisions per module",
      "Delivery & handoff",
    ],
  },
];
