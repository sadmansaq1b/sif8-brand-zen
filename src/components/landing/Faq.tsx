import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "I've hired designers before. What makes this different?",
    answer:
      "Most designers start with aesthetics. We start with diagnosis. Before anything is made visually, we go through your positioning, your market, your compliance, your competitive landscape. The visual work only begins after the strategic foundation is locked. What you've likely experienced before is aesthetics without architecture — a logo that looks fine and changes nothing.",
  },
  {
    question: "Is this only for Muslim businesses?",
    answer:
      "The Shariah compliance audit and ethical advertising framework are built specifically for founders who need their business to be clean — not just functional. If that matters to you, this is built for you. If it doesn't, there are faster, cheaper options better suited to what you need.",
  },
  {
    question: "I'm a small business. Is this too big for where I am right now?",
    answer:
      "The Souq tier exists for exactly this reason — a complete strategic and visual foundation, delivered in 15 days domestically. The question isn't whether your business is big enough. It's whether you're serious enough about building it correctly. If you're generating revenue but stuck at a ceiling you can't break through, the brand is usually the reason.",
  },
  {
    question: "How many revisions do I get? What if I don't like the direction?",
    answer:
      "Revisions are structured, not open-ended — 2 rounds on Souq, 3 on Qafilah, dedicated rounds on Diwan. This is by design. Unlimited revisions sound generous; in practice they produce indecision, scope creep, and a final result that satisfies no one. What protects you is Phase 1 — because when the strategy is locked and agreed upon before design begins, the visual direction has a rational foundation to be judged against. Taste is subjective. Strategy isn't.",
  },
  {
    question: "What does the Halal Filter actually involve?",
    answer:
      "A short evaluation — your business type, how you currently market, and what you're looking to build. We verify Shariah compliance, check that the business model is sound, and confirm that this is the right moment for you to invest in a brand system. If you pass, we schedule the Discovery Call. If you don't, we tell you why honestly — and what to fix first. It takes less than 10 minutes. We respond within 48 hours.",
  },
  {
    question: "Can I just get a logo?",
    answer:
      "No. A logo without a strategy behind it is decoration. We don't offer decoration. The minimum engagement is Souq — which includes the strategic foundation, the compliance audit, and the full visual identity system. If you want a standalone logo, there are many designers who will do that. We're not the right fit.",
  },
  {
    question: "What happens after the project is done? Am I on my own?",
    answer:
      "Every tier includes implementation support during the build period. After delivery, the Barakah System — your voice guidelines, execution roadmap, and brand rules — is designed so your team can run it without us. For founders who want ongoing protection, the Brand Governance & Advisory add-on keeps SiF8 as an active brand counsel. But the goal is always a system, not a dependency.",
  },
  {
    question: "Do you work with businesses outside Bangladesh?",
    answer:
      "Yes. Global pricing is in USD and structured for async-first delivery — built for GCC, Southeast Asia, UK, Europe, and diaspora markets. Timezone overlap sessions are included from Qafilah upward. Every deliverable is handed off via a dedicated Notion portal with video walkthroughs.",
  },
  {
    question: "The price feels high. How do I know this is worth it?",
    answer:
      "87% of consumers pay a premium for a brand they trust. Brand consistency alone lifts revenue 10–33%. Design-driven companies outperform the market 2 to 1. These aren't claims — they're documented figures from Edelman, Lucidpress, and McKinsey. The question isn't whether strategic branding delivers ROI. The question is whether your business is at the point where the ROI compounds. If it is, the investment pays for itself in reduced acquisition costs, higher pricing power, and clients who come to you already convinced. If it isn't, we'll tell you that in the evaluation — before you spend anything.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <Reveal>
        <h2 className="font-display mb-16 text-center text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
          Honest answers to the questions you're actually asking.
        </h2>
      </Reveal>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <Reveal key={i} delay={i * 60}>
            <AccordionItem
              value={`item-${i}`}
              className="glass rounded-2xl border border-border px-5 transition-colors data-[state=open]:border-sky-cyan/25"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline hover:text-bright-cyan [&[data-state=open]>svg]:rotate-180">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Reveal>
        ))}
      </Accordion>
    </section>
  );
}
