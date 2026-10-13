import { CountUp, Reveal } from "../lib/reveal";

const press = [
  "VOGUE",
  "ELLE",
  "Harper's BAZAAR",
  "GQ",
  "Allure",
  "Cosmopolitan",
  "Forbes",
  "Vanity Fair",
];

const stats = [
  { value: 96, suffix: "%", label: "saw visibly smoother skin", sub: "14-day consumer study, n=214" },
  { value: 48, suffix: "h", label: "continuous hydration", sub: "corneometer-measured moisture" },
  { value: 12.4, suffix: "k", decimals: 1, label: "five-star reviews", sub: "and counting, every day" },
  { value: 30, suffix: "-day", label: "results guarantee", sub: "love it or it's on us" },
];

export default function SocialProof() {
  return (
    <section aria-label="Press and results" className="relative border-y border-espresso/5 bg-cream/70 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="fade">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-drift">
            As featured in
          </p>
        </Reveal>

        {/* press marquee */}
        <div className="marquee mask-fade-x mt-8 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-14 pr-14 animate-marquee sm:gap-20 sm:pr-20">
            {[...press, ...press].map((name, i) => (
              <span
                key={`${name}-${i}`}
                aria-hidden={i >= press.length}
                className="font-display text-2xl font-medium tracking-wide text-espresso/30 transition-colors duration-300 hover:text-espresso/70 sm:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* stats */}
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} variant="up" delay={i * 110}>
              <div className="group flex flex-col text-center lg:text-left">
                <dt className="order-2 mt-2 text-sm font-medium text-cocoa/80">
                  {stat.label}
                </dt>
                <dd className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    className="bg-gradient-to-r from-copper to-bronze bg-clip-text text-transparent"
                  />
                </dd>
                <p className="mt-1.5 text-xs text-drift">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
