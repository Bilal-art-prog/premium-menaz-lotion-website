import { useState } from "react";
import { Check, Truck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal, useInView } from "../lib/reveal";

const variants = [
  {
    id: "daily",
    name: "Daily Hydration",
    tag: "AM ritual",
    img: "/images/variant-daily.jpg",
    alt: "MENAZ Daily Hydration lotion bottle in bright morning light on a stone pedestal",
    desc: "A weightless morning lotion that floods skin with multi-weight hyaluronic acid and seals it in with niacinamide — so hydration lasts through meetings, workouts, and everything after.",
    actives: ["Hyaluronic complex 2%", "Niacinamide 5%", "Panthenol"],
    points: [
      "Absorbs in under 60 seconds",
      "Perfect under sunscreen or makeup",
      "Non-greasy and non-comedogenic",
    ],
    price: "$34",
    note: "250 ml · one-time, or $27/mo subscribed",
  },
  {
    id: "night",
    name: "Night Repair",
    tag: "PM ritual",
    img: "/images/variant-night.jpg",
    alt: "MENAZ Night Repair lotion bottle in moody candlelit evening light",
    desc: "A richer ceramide and peptide cream that works the night shift — rebuilding your moisture barrier while you sleep, so you wake up to skin that looks rested even when you aren't.",
    actives: ["Ceramide complex 4%", "Peptide blend", "Squalane 8%"],
    points: [
      "Deep repair for stressed, dry skin",
      "Visibly plumps fine lines overnight",
      "Layers over Daily Hydration for extra reinforcement",
    ],
    price: "$38",
    note: "250 ml · one-time, or $30/mo subscribed",
  },
  {
    id: "duo",
    name: "The Body Duo",
    tag: "Best value",
    img: "/images/variant-body.jpg",
    alt: "The MENAZ Body Duo — matching pump bottle and tube on travertine stone",
    desc: "Both formulas, one ritual. Pair Daily Hydration for mornings with Night Repair for evenings — the exact routine 96% of testers saw smoother skin with in just 14 days.",
    actives: ["Daily Hydration 250 ml", "Night Repair 250 ml", "Travel refill included"],
    points: [
      "Save $14 versus buying separately",
      "A complete AM + PM system",
      "Our most-repurchased bundle",
    ],
    price: "$58",
    note: "$72 value · free priority shipping",
  },
];

const ingredients = [
  {
    name: "Hyaluronic Acid Complex",
    pct: "2%",
    width: 42,
    desc: "Three molecular weights sink into every layer of skin for deep, lasting hydration.",
  },
  {
    name: "Ceramide Complex",
    pct: "4%",
    width: 64,
    desc: "Plant-derived lipids that rebuild the moisture barrier adult skin slowly loses.",
  },
  {
    name: "Niacinamide",
    pct: "5%",
    width: 80,
    desc: "Visibly refines texture, evens tone, and calms redness over time.",
  },
  {
    name: "Squalane",
    pct: "8%",
    width: 100,
    desc: "A featherlight emollient that locks moisture in without a trace of grease.",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const { ref: barsRef, inView: barsInView } = useInView<HTMLDivElement>(0.3);
  const variant = variants[active];

  return (
    <section id="collection" className="relative overflow-hidden bg-cream/60 py-24 sm:py-32" aria-labelledby="collection-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-r from-glow/40 to-transparent blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The collection"
          title={
            <span id="collection-heading">
              One ritual. <em className="bg-gradient-to-r from-copper to-bronze bg-clip-text font-medium text-transparent italic">Three ways in.</em>
            </span>
          }
          sub="Every formula shares the same clinical backbone — pick the one that fits your routine, or let the duo do the deciding for you."
        />

        {/* variant tabs */}
        <Reveal variant="up" delay={250}>
          <div className="mt-12 flex justify-center">
            <div
              role="tablist"
              aria-label="Choose a product"
              className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-espresso/8 bg-white/70 p-1.5 shadow-sm backdrop-blur-md"
            >
              {variants.map((v, i) => (
                <button
                  key={v.id}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 ${
                    active === i
                      ? "bg-espresso text-porcelain shadow-md shadow-espresso/25"
                      : "text-cocoa hover:bg-espresso/5 hover:text-espresso"
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* variant display */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* image crossfade */}
          <Reveal variant="left" className="relative">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] border border-white/70 shadow-[0_40px_80px_-32px_rgba(30,24,17,0.4)] lg:max-w-none">
              {variants.map((v, i) => (
                <img
                  key={v.id}
                  src={v.img}
                  alt={v.alt}
                  className={`aspect-[4/5] w-full object-cover transition-all duration-700 ease-out ${
                    active === i ? "scale-100 opacity-100" : "absolute inset-0 scale-105 opacity-0"
                  }`}
                  loading="lazy"
                />
              ))}
              <span className="absolute left-5 top-5 rounded-full bg-espresso/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-glow backdrop-blur-md">
                {variant.tag}
              </span>
            </div>
          </Reveal>

          {/* details */}
          <Reveal variant="right" key={variant.id} delay={80}>
            <div>
              <h3 className="font-display text-3xl font-medium tracking-tight text-espresso sm:text-4xl">
                {variant.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-cocoa/85 sm:text-lg">
                {variant.desc}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {variant.actives.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-bronze/25 bg-bronze/8 px-3.5 py-1.5 text-xs font-semibold text-copper"
                  >
                    {a}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 space-y-3">
                {variant.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-cocoa">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-bronze to-copper text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="font-display text-5xl font-medium tracking-tight text-espresso">
                  {variant.price}
                </span>
                <span className="pb-1.5 text-sm text-drift">{variant.note}</span>
              </div>

              <a
                href="#pricing"
                className="btn-shine group mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-bronze to-copper px-8 py-4 text-base font-semibold text-white shadow-xl shadow-bronze/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-copper/40"
              >
                Shop {variant.name}
              </a>
              <p className="mt-5 flex items-center gap-2 text-sm text-drift">
                <Truck className="h-4 w-4 text-bronze" />
                Free shipping over $50 · 30-day results guarantee
              </p>
            </div>
          </Reveal>
        </div>

        {/* formula breakdown */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal variant="left">
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-white/70 shadow-[0_40px_80px_-32px_rgba(30,24,17,0.4)]">
                <img
                  src="/images/texture.jpg"
                  alt="Macro shot of the MENAZ lotion texture — a silky ivory cream swatch"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 animate-float rounded-2xl border border-white/70 bg-white/80 px-5 py-3.5 shadow-xl shadow-espresso/10 backdrop-blur-xl sm:-right-8">
                <p className="font-display text-2xl font-medium text-espresso">5 actives</p>
                <p className="text-xs text-drift">zero fillers, zero fragrance</p>
              </div>
            </div>
          </Reveal>

          <div ref={barsRef}>
            <Reveal variant="right">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-copper">
                Inside every bottle
              </p>
              <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-espresso sm:text-4xl">
                Clinical actives, at percentages that work
              </h3>
            </Reveal>
            <div className="mt-8 space-y-7">
              {ingredients.map((ing, i) => (
                <div key={ing.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-semibold text-espresso">{ing.name}</h4>
                    <span className="font-display text-lg font-medium text-copper">{ing.pct}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-espresso/8">
                    <div
                      className={`bar-fill h-full rounded-full bg-gradient-to-r from-bronze to-copper ${barsInView ? "is-visible" : ""}`}
                      style={{ width: `${ing.width}%`, transitionDelay: `${i * 140}ms` }}
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa/75">{ing.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
