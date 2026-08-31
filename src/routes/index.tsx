import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { WhoFor } from "@/components/landing/WhoFor";
import { WhyUs } from "@/components/landing/WhyUs";
import { Bridge } from "@/components/landing/Bridge";
import { Process } from "@/components/landing/Process";
import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { Footer } from "@/components/landing/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SiF8 — Strategy-Led Brand Systems for Muslim Founders" },
      {
        name: "description",
        content:
          "SiF8 builds brand systems from the inside out — positioning, identity, and voice — so your business becomes legible, trustworthy, and premium.",
      },
      { property: "og:title", content: "SiF8 — Strategy-Led Brand Systems for Muslim Founders" },
      {
        property: "og:description",
        content:
          "Positioning, identity, and voice — built without deception, without compromise.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhoFor />
        <WhyUs />
        <Bridge />
        <Process />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
}
