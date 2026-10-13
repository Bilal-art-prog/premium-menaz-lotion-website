import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "../lib/reveal";

const faqs = [
  {
    q: "Is MENAZ suitable for sensitive skin?",
    a: "Yes. MENAZ is fragrance-free, non-comedogenic, and dermatologist-tested on sensitive skin. In our 14-day consumer study, 87% of participants with self-reported sensitive skin experienced less dryness and irritation — not more. As with any new product, we recommend a small patch test on your inner arm for the first 24 hours.",
  },
  {
    q: "When will I see results?",
    a: "Hydration is immediate — skin feels softer and more supple from the very first application. Measurable barrier improvement builds over 2 weeks, and in our consumer study, 96% saw visibly smoother skin by day 14. Fine lines and texture continue to improve with consistent use over 4–8 weeks.",
  },
  {
    q: "What does MENAZ smell like?",
    a: "Nothing, and that's intentional. We formulate completely fragrance-free — no masking scents, no essential oils. This makes MENAZ safe for sensitive skin and means it never competes with your perfume.",
  },
  {
    q: "Can I use it on my face?",
    a: "MENAZ is formulated for body and hands, where adult skin tends to be driest. It's non-comedogenic, so it won't clog pores if some reaches your face — but our actives are tuned for body skin thickness. A dedicated facial formula is in development.",
  },
  {
    q: "What is your return policy?",
    a: "Every order comes with our 30-day results guarantee. Use the full bottle, and if you don't love your skin, email us within 30 days for a full refund — even if the bottle is empty. No returns, no hassle, no questions.",
  },
  {
    q: "Do you ship internationally?",
    a: "We currently ship to the US, Canada, the UK, and the EU. Orders over $50 ship free everywhere we serve. Subscribers always ship free, and Ritual Club members get priority processing.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <span id="faq-heading">
              Questions, <em className="bg-gradient-to-r from-copper to-bronze bg-clip-text font-medium text-transparent italic">answered</em>
            </span>
          }
          sub="Everything people ask before their first bottle. Something else on your mind?"
        />

        <div className="mt-14 space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} variant="up" delay={i * 70}>
                <div
                  className={`overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                    isOpen
                      ? "border-bronze/30 bg-white shadow-[0_20px_50px_-24px_rgba(150,101,63,0.35)]"
                      : "border-espresso/8 bg-white/60 hover:border-bronze/25 hover:bg-white/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="font-display text-lg font-medium text-espresso sm:text-xl">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                        isOpen
                          ? "rotate-180 bg-gradient-to-br from-bronze to-copper text-white"
                          : "bg-espresso/5 text-cocoa"
                      }`}
                    >
                      <ChevronDown className="h-4.5 w-4.5" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`acc-panel ${isOpen ? "open" : ""}`}
                  >
                    <div>
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-cocoa/85 sm:px-7">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade" delay={200}>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-drift">
            Still curious?
            <a
              href="mailto:hello@menaz.skin"
              className="group inline-flex items-center gap-1.5 font-semibold text-copper transition-colors hover:text-espresso"
            >
              <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              hello@menaz.skin
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
