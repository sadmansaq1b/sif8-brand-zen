import React, { useRef, useState } from "react";

const SERVICES = [
  {
    num: "01",
    title: "Brand Strategy",
    desc: "Positioning, messaging architecture, and competitive clarity. We find the ground you stand on — and build from there.",
  },
  {
    num: "02",
    title: "Brand Identity",
    desc: "Visual systems that carry meaning. A coherent language that reflects your character and earns immediate trust.",
  },
  {
    num: "03",
    title: "Brand Activation",
    desc: "Taking your brand from paper to reality. Campaigns and experiences that make your positioning felt.",
  },
  {
    num: "04",
    title: "Packaging Strategy & Design",
    desc: "Shelf presence built on brand truth. Packaging that communicates quality and reflects what's inside.",
  },
  {
    num: "05",
    title: "Web Design & Development",
    desc: "Digital presence that converts through clarity. Strategy-informed design built to perform.",
  },
  {
    num: "06",
    title: "Content Strategy & Development",
    desc: "Words and visuals that communicate your truth consistently, rooted in your brand's niyyah.",
  },
  {
    num: "07",
    title: "Halal Marketing",
    desc: "Communication rooted in haq. Honest persuasion, not manipulation. We market your truth.",
  },
  {
    num: "08",
    title: "Brand Consultancy",
    desc: "For founders navigating the tension between growth and principles. We think with you — not just for you.",
  },
];

const ServiceCard = ({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const rotateX =
    isHovered && cardRef.current
      ? (mousePos.y / cardRef.current.offsetHeight - 0.5) * -12
      : 0;
  const rotateY =
    isHovered && cardRef.current
      ? (mousePos.x / cardRef.current.offsetWidth - 0.5) * 12
      : 0;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full min-h-[280px] cursor-default rounded-[16px] transition-all duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-md transition-colors duration-300 group-hover:border-white/[0.15]">
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
      </div>
      <div
        className="relative z-10 flex h-full flex-col p-8 pointer-events-none"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="mb-auto">
          <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-white/30">
            {num}
          </span>
          <h3 className="mb-4 text-xl font-medium leading-snug tracking-wide text-white/90">
            {title}
          </h3>
        </div>
        <p className="text-sm font-light leading-relaxed text-white/50">
          {desc}
        </p>
      </div>
    </div>
  );
};

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="flex min-h-screen flex-col items-center justify-center bg-[#000000] px-6 py-20 text-white selection:bg-white/20 sm:px-12 lg:px-24"
    >
      <div className="w-full max-w-[1400px]">
        <div className="mb-16 flex flex-col items-start md:mb-24">
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white/90 md:text-5xl">
            What We Do
          </h2>
          <div className="h-[1px] w-12 bg-white/20" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.num}
              num={service.num}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
