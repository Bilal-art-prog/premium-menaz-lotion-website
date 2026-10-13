import { Check, Droplet, Quote, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { CountUp, Reveal } from "../lib/reveal";

const stats = [
  { value: 96, suffix: "%", label: "saw smoother, softer skin", sub: "in 14 days" },
  { value: 2.4, suffix: "x", decimals: 1, label: "hydration increase", sub: "measured at 24 hours" },
  { value: 87, suffix: "%", label: "reported calmer skin", sub: "less dryness & irritation" },
  { value: 98, suffix: "%", label: "would recommend it", sub: "to a friend or partner" },
];

const rows: { label: string; menaz: true; typical: string | false }[] = [
  { label: "Rebuilds the moisture barrier", menaz: true, typical: false },
  { label: "Hydration lasts a full 48 hours", menaz: true, typical: "reapply constantly" },
  { label: "Fragrance-free, sensitive-skin safe", menaz: true, typical: "synthetic fragrance" },
  { label: "Absorbs in under 60 seconds", menaz: true, typical: "greasy residue" },
  { label: "30-day money-back guarantee", menaz: true, typical: false },
];

export default function Benefits() {
  return (
    <section id="results" className="relative overflow-hidden bg-espresso py-24 text-porcelain sm:py-32" aria-labelledby="results-heading">
      {/* ambient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-copper/20 blur-[120px] animate-pulse-soft" />
        <div className="absolute -bottom-40 right-[8%] h-[26rem] w-[26rem] rounded-full bg-glow/10 blur-[100px] animate-pulse-soft-2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Measured results"
          title={
            <span id="results-heading">
              Results you can measure,{" "}
              <em className="bg-gradient-to-r from-glow via-bronze to-glow bg-clip-text font-medium text-transparent italic">
                not just imagine
              </em>
            </span>
          }
          sub="Independent 14-day consumer study and instrumental corneometer testing on adults aged 30–65. Every number below is measured, not marketed."
        />

        {/* stat cards */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} variant="up" delay={i * 110}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-glow/30 hover:bg-white/[0.07]">
                <p className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    className="bg-gradient-to-r from-glow to-bronze bg-clip-text text-transparent"
                  />
                </p>
                <p className="mt-3 text-sm font-medium text-porcelain/85">{stat.label}</p>
                <p className="mt-1 text-xs text-porcelain/45">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* lifestyle + comparison */}
        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal variant="left" className="h-full">
            <figure className="relative h-full min-h-[22rem] overflow-hidden rounded-[2.5rem] border border-white/10">
              <img
                src="/images/lifestyle.jpg"
                alt="A woman in her late 30s with glowing skin applying MENAZ lotion to her hands in warm light"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-8">
                <Quote className="h-7 w-7 text-glow" fill="currentColor" strokeWidth={0} />
                <blockquote className="mt-3 font-display text-xl leading-snug font-medium text-porcelain sm:text-2xl">
                  “Made for the skin you live in — through winters, workouts, and everything in between.”
                </blockquote>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal variant="right" delay={120} className="h-full">
            <div className="h-full rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
              <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                MENAZ vs. your old lotion
              </h3>
              <div className="mt-8 space-y-1">
                {/* header */}
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-porcelain/40">
                    What matters
                  </span>
                  <span className="flex items-center gap-2 pr-2 text-sm font-bold text-glow">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-bronze to-copper text-white">
                      <Droplet className="h-3.5 w-3.5" fill="currentColor" />
                    </span>
                    MENAZ
                  </span>
                  <span className="pl-2 text-sm font-medium text-porcelain/40">Typical</span>
                </div>
                {rows.map((row, i) => (
                  <Reveal key={row.label} variant="fade" delay={i * 80}>
                    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-white/5 py-4 transition-colors hover:bg-white/[0.03]">
                      <span className="text-sm text-porcelain/80">{row.label}</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-glow/15 text-glow">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      {row.typical ? (
                        <span className="w-28 pl-2 text-xs text-porcelain/40">{row.typical}</span>
                      ) : (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-porcelain/30">
                          <X className="h-4 w-4" strokeWidth={2.5} />
                        </span>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
