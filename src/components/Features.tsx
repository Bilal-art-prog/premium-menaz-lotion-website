import {
  Clock,
  Droplets,
  Feather,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "../lib/reveal";

const features = [
  {
    icon: Droplets,
    title: "48-hour deep hydration",
    desc: "A triple-weight hyaluronic acid complex draws water into every layer of the skin — and keeps it there through two full days.",
  },
  {
    icon: ShieldCheck,
    title: "Barrier repair complex",
    desc: "Ceramides and fatty acids rebuild the moisture barrier that adult skin naturally loses from its 30s onward.",
  },
  {
    icon: Feather,
    title: "Zero greasy residue",
    desc: "Our dry-touch formula absorbs in under 60 seconds. No film on your skin, no stains on your clothes or sheets.",
  },
  {
    icon: Sparkles,
    title: "Visibly smoother skin",
    desc: "Niacinamide refines texture and softens fine lines — 96% of testers saw smoother skin in just two weeks.",
  },
  {
    icon: Leaf,
    title: "Clean by design",
    desc: "Vegan, fragrance-free, and free from parabens, sulfates, and dyes. Every ingredient earns its place.",
  },
  {
    icon: Clock,
    title: "Made for 30+ skin",
    desc: "Not a repackaged teen product. MENAZ targets the dryness, dullness, and crepiness that come with grown-up skin.",
  },
];

export default function Features() {
  return (
    <section id="science" className="relative py-24 sm:py-32" aria-labelledby="science-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-sand/40 to-transparent blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The science"
          title={
            <span id="science-heading">
              Built for the skin <em className="bg-gradient-to-r from-copper to-bronze bg-clip-text font-medium text-transparent italic">you have now</em>
            </span>
          }
          sub="Skin changes after 30 — drier, slower to recover, quicker to dull. MENAZ is formulated around those exact shifts, with clinical actives at concentrations that actually deliver."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} variant="up" delay={(i % 3) * 110}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-espresso/5 bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-bronze/25 hover:bg-white hover:shadow-[0_28px_60px_-24px_rgba(150,101,63,0.35)]">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-glow/40 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-bronze to-copper text-white shadow-lg shadow-bronze/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <feature.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="relative mt-6 font-display text-xl font-medium text-espresso">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-cocoa/80">
                  {feature.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
