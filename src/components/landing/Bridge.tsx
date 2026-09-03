import { Reveal } from "./Reveal";

export function Bridge() {
  return (
    <section id="bridge" className="relative overflow-hidden px-6 py-32 sm:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.74 0.115 220 / 16%), oklch(0.21 0.069 312 / 30%), transparent)",
        }}
      />

      <Reveal className="relative text-center">
        <h2 className="font-display mx-auto max-w-4xl text-4xl font-medium leading-[1.2] tracking-tight text-foreground sm:text-6xl">
          Business{" "}
          <span className="inline-block align-middle">
            <svg
              width="140"
              height="40"
              viewBox="0 0 140 40"
              fill="none"
              className="mx-1 inline-block sm:w-[180px]"
              aria-hidden
            >
              <path
                className="heartbeat-line"
                d="M0 20 H 38 L 48 8 L 58 32 L 68 4 L 78 36 L 88 20 H 140"
                stroke="oklch(0.93 0.15 190)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          and <em className="text-sky-cyan">deen</em> were never separate
        </h2>
      </Reveal>
    </section>
  );
}
