import { ArrowRight, Check, Lock, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "../lib/reveal";

const plans = [
  {
    name: "The Essential",
    price: "$34",
    note: "one full-size bottle",
    desc: "Perfect for trying MENAZ — or keeping your favorite formula stocked.",
    features: [
      "250 ml Daily Hydration",
      "Free shipping over $50",
      "30-day results guarantee",
    ],
    cta: "Shop The Essential",
    popular: false,
  },
  {
    name: "The Ritual",
    price: "$58",
    note: "AM + PM duo · save $14",
    desc: "The complete system: Daily Hydration for mornings, Night Repair for evenings.",
    features: [
      "250 ml Daily Hydration",
      "250 ml Night Repair",
      "Free priority shipping",
      "Travel-size refill included",
      "30-day results guarantee",
    ],
    cta: "Shop The Ritual — save $14",
    popular: true,
  },
  {
    name: "The Ritual Club",
    price: "$29",
    note: "per month · cancel anytime",
    desc: "The Ritual duo delivered every 60 days, at 20% below retail. Forever.",
    features: [
      "The Ritual duo every 60 days",
      "20% off, locked in",
      "Pause, skip, or cancel anytime",
      "Members-only early access",
    ],
    cta: "Join the Club",
    popular: false,
  },
];

const guarantees = [
  { icon: Truck, label: "Free shipping over $50" },
  { icon: ShieldCheck, label: "30-day money-back guarantee" },
  { icon: RefreshCw, label: "Pause or cancel anytime" },
  { icon: Lock, label: "Secure 256-bit checkout" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-cream/60 py-24 sm:py-32" aria-labelledby="pricing-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-10 h-[26rem] w-[26rem] rounded-full bg-gradient-to-b from-glow/40 to-transparent blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <span id="pricing-heading">
              Choose your <em className="bg-gradient-to-r from-copper to-bronze bg-clip-text font-medium text-transparent italic">ritual</em>
            </span>
          }
          sub="Start with one bottle or commit to the duo — either way, your skin gets the full clinical formula."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} variant="up" delay={i * 130} className="h-full">
              {plan.popular ? (
                <article className="relative h-full rounded-[2rem] bg-gradient-to-b from-bronze via-copper to-bronze p-[1.5px] shadow-[0_36px_80px_-28px_rgba(150,101,63,0.5)] transition-transform duration-500 hover:-translate-y-2 lg:scale-[1.045]">
                  <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-bronze to-copper px-5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-bronze/40">
                    Most popular
                  </span>
                  <PlanCard plan={plan} popular />
                </article>
              ) : (
                <article className="h-full rounded-[2rem] border border-espresso/8 bg-white/75 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-bronze/25 hover:shadow-[0_28px_60px_-24px_rgba(150,101,63,0.3)]">
                  <PlanCard plan={plan} />
                </article>
              )}
            </Reveal>
          ))}
        </div>

        {/* guarantees */}
        <Reveal variant="fade" delay={200}>
          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4">
            {guarantees.map((g) => (
              <li key={g.label} className="flex items-center justify-center gap-2.5 text-sm font-medium text-cocoa">
                <g.icon className="h-5 w-5 text-bronze" strokeWidth={1.8} />
                {g.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  popular = false,
}: {
  plan: (typeof plans)[number];
  popular?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-[1.9rem] p-8 sm:p-9 ${
        popular ? "bg-espresso text-porcelain" : "bg-transparent"
      }`}
    >
      <h3 className={`font-display text-2xl font-medium ${popular ? "text-porcelain" : "text-espresso"}`}>
        {plan.name}
      </h3>
      <div className="mt-5 flex items-end gap-2.5">
        <span className={`font-display text-5xl font-medium tracking-tight ${popular ? "text-glow" : "text-espresso"}`}>
          {plan.price}
        </span>
        <span className={`pb-1.5 text-sm ${popular ? "text-porcelain/55" : "text-drift"}`}>
          {plan.note}
        </span>
      </div>
      <p className={`mt-4 text-sm leading-relaxed ${popular ? "text-porcelain/65" : "text-cocoa/80"}`}>
        {plan.desc}
      </p>
      <ul className="mt-7 flex-1 space-y-3.5">
        {plan.features.map((f) => (
          <li key={f} className={`flex items-start gap-3 text-sm ${popular ? "text-porcelain/85" : "text-cocoa"}`}>
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${
                popular ? "bg-gradient-to-br from-glow to-bronze" : "bg-gradient-to-br from-bronze to-copper"
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#cta"
        className={`group btn-shine mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
          popular
            ? "bg-gradient-to-r from-bronze to-copper text-white shadow-xl shadow-bronze/30 hover:shadow-2xl hover:shadow-copper/40"
            : "border border-espresso/15 bg-white/60 text-espresso hover:border-bronze/40 hover:bg-white"
        }`}
      >
        {plan.cta}
        <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
