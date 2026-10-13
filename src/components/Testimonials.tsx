import { BadgeCheck, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "../lib/reveal";

const testimonials = [
  {
    quote:
      "I stopped buying lotion at 35 because nothing worked. MENAZ is the first one that made my skin feel like it did in my twenties — soft, calm, and genuinely hydrated all day.",
    name: "Maya K.",
    meta: "Age 42 · Daily Hydration",
    initials: "MK",
    cls: "from-bronze to-copper",
    featured: true,
  },
  {
    quote:
      "The dry patches on my shins are gone after two weeks. It absorbs in seconds — no greasy film on my clothes, no smell. Just done.",
    name: "James R.",
    meta: "Age 38 · Night Repair",
    initials: "JR",
    cls: "from-copper to-espresso",
  },
  {
    quote:
      "Fragrance-free was the deal-maker for me. Sensitive skin approved — zero irritation, zero breakouts, and my arms finally stop itching in winter.",
    name: "Priya S.",
    meta: "Age 45 · The Body Duo",
    initials: "PS",
    cls: "from-glow to-bronze",
  },
  {
    quote:
      "My elbows and knees used to crack every winter. Not anymore. This bottle lives on my nightstand and I've bought it four times.",
    name: "Dana W.",
    meta: "Age 51 · Daily Hydration",
    initials: "DW",
    cls: "from-sage to-copper",
  },
  {
    quote:
      "Night Repair is unreal. I wake up and my hands look five years younger — the fine lines are visibly softer.",
    name: "Tomás L.",
    meta: "Age 36 · Night Repair",
    initials: "TL",
    cls: "from-bronze to-glow",
  },
  {
    quote:
      "Bought the duo, then subscribed three months later. My skin has never been this consistent — my dermatologist noticed.",
    name: "Aisha B.",
    meta: "Age 39 · Ritual Club member",
    initials: "AB",
    cls: "from-espresso to-bronze",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-bronze text-bronze" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32" aria-labelledby="reviews-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 h-[24rem] w-[24rem] rounded-full bg-gradient-to-b from-sand/50 to-transparent blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Real reviews"
          title={
            <span id="reviews-heading">
              Loved by <em className="bg-gradient-to-r from-copper to-bronze bg-clip-text font-medium text-transparent italic">grown-up skin</em>
            </span>
          }
          sub="12,000+ verified reviews and a 4.9 average — from people who had all but given up on lotion."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              variant="up"
              delay={(i % 3) * 110}
              className={t.featured ? "lg:col-span-2" : ""}
            >
              <figure
                className={`group flex h-full flex-col justify-between rounded-3xl border border-espresso/5 bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-24px_rgba(150,101,63,0.35)] ${
                  t.featured ? "bg-gradient-to-br from-white/80 to-cream/80 border-bronze/15" : "hover:border-bronze/25"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Stars />
                    <span className="flex items-center gap-1.5 rounded-full bg-sage/15 px-3 py-1 text-[11px] font-semibold text-espresso/70">
                      <BadgeCheck className="h-3.5 w-3.5 text-sage" />
                      Verified buyer
                    </span>
                  </div>
                  <blockquote
                    className={`mt-5 leading-relaxed text-cocoa ${
                      t.featured
                        ? "font-display text-2xl font-medium text-espresso sm:text-[1.7rem]"
                        : "text-[15px]"
                    }`}
                  >
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-7 flex items-center gap-3.5">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.cls} text-xs font-bold text-white shadow-md shadow-espresso/15`}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-espresso">{t.name}</p>
                    <p className="text-xs text-drift">{t.meta}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
