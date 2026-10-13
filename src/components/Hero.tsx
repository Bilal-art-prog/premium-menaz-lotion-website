import { useRef } from "react";
import type { MouseEvent } from "react";
import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Sparkles,
  Star,
} from "lucide-react";
import { Reveal } from "../lib/reveal";

const avatars = [
  { initials: "MK", cls: "from-bronze to-copper" },
  { initials: "JR", cls: "from-copper to-espresso" },
  { initials: "PS", cls: "from-glow to-bronze" },
  { initials: "AW", cls: "from-sage to-copper" },
];

export default function Hero() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
  };

  const onLeave = () => {
    const el = tiltRef.current;
    if (el) el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24">
      {/* ambient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-glow/50 via-sand/40 to-transparent blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-sage/25 via-sand/30 to-transparent blur-3xl animate-pulse-soft-2" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ---------- copy ---------- */}
        <div className="max-w-xl">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-bronze/20 bg-white/60 py-1.5 pl-1.5 pr-4 text-xs font-semibold tracking-wide text-cocoa shadow-sm backdrop-blur-md">
              <span className="rounded-full bg-gradient-to-r from-bronze to-copper px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                New formula
              </span>
              Clinically tested on skin 30+
            </span>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <h1 className="mt-7 font-display text-5xl leading-[1.04] font-medium tracking-tight text-balance text-espresso sm:text-6xl lg:text-[4.4rem]">
              Deep hydration, engineered for{" "}
              <em className="bg-gradient-to-r from-copper via-bronze to-copper bg-clip-text pr-1 font-medium text-transparent italic">
                adult skin
              </em>
              .
            </h1>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <p className="mt-6 text-lg leading-relaxed text-cocoa/85 sm:text-xl">
              MENAZ is a ceramide-rich lotion that restores your moisture barrier
              for 48 hours — softening fine lines, calming rough patches, and
              bringing back the glow that stress took.
            </p>
          </Reveal>

          <Reveal variant="up" delay={360}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-bronze to-copper px-8 py-4 text-base font-semibold text-white shadow-xl shadow-bronze/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-copper/40"
              >
                Shop MENAZ — from $34
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#science"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-espresso/10 bg-white/60 px-8 py-4 text-base font-semibold text-espresso backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze/40 hover:bg-white"
              >
                See the science
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-espresso/5 transition-colors duration-300 group-hover:bg-bronze/15">
                  <ArrowRight className="h-3.5 w-3.5 rotate-90" />
                </span>
              </a>
            </div>
          </Reveal>

          {/* trust row */}
          <Reveal variant="up" delay={480}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex -space-x-2.5">
                {avatars.map((a) => (
                  <span
                    key={a.initials}
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${a.cls} text-[10px] font-bold text-white ring-2 ring-porcelain`}
                  >
                    {a.initials}
                  </span>
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso text-[10px] font-bold text-porcelain ring-2 ring-porcelain">
                  12k
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1" aria-label="Rated 4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-bronze text-bronze" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-espresso">4.9</span>
                </div>
                <p className="mt-0.5 text-sm text-drift">
                  12,000+ verified reviews · Dermatologist tested
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- visual ---------- */}
        <Reveal variant="scale" delay={200} className="relative">
          <div
            className="group relative mx-auto max-w-md lg:max-w-none"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            <div
              ref={tiltRef}
              className="relative transition-transform duration-300 ease-out will-change-transform"
              style={{ transform: "perspective(1100px)" }}
            >
              {/* offset outline halo */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-t-[999px] rounded-b-[2.75rem] border border-bronze/20 sm:-inset-7"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-12 hidden rounded-t-[999px] rounded-b-[3.5rem] border border-dashed border-bronze/15 sm:block"
              />
              {/* arch image */}
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] border border-white/70 bg-cream shadow-[0_40px_90px_-30px_rgba(30,24,17,0.35)]">
                <img
                  src="/images/hero-product.png"
                  alt="MENAZ deep hydration lotion — amber glass pump bottle"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/15 via-transparent to-white/10" />
              </div>

              {/* floating chip — hydration */}
              <div className="absolute -right-3 top-16 animate-float rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-xl shadow-espresso/10 backdrop-blur-xl sm:-right-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-bronze to-copper text-white">
                    <Droplets className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-espresso">48h hydration</p>
                    <p className="text-xs text-drift">clinically measured</p>
                  </div>
                </div>
              </div>

              {/* floating chip — smoothness */}
              <div className="absolute -left-3 top-1/2 animate-float-slow rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-xl shadow-espresso/10 backdrop-blur-xl sm:-left-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-glow to-bronze text-white">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-espresso">96% smoother</p>
                    <p className="text-xs text-drift">skin in 14 days</p>
                  </div>
                </div>
              </div>

              {/* floating chip — actives */}
              <div className="absolute -right-2 bottom-10 animate-float-slower rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-xl shadow-espresso/10 backdrop-blur-xl sm:-right-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-espresso text-glow">
                    <FlaskConical className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-espresso">5 clinical actives</p>
                    <p className="text-xs text-drift">fragrance-free</p>
                  </div>
                </div>
              </div>

              {/* rotating badge */}
              <div className="absolute -bottom-8 left-2 hidden h-28 w-28 sm:block lg:-left-10">
                <div className="relative h-full w-full">
                  <svg viewBox="0 0 100 100" className="h-full w-full animate-rotate-slower">
                    <defs>
                      <path id="badge-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="fill-cocoa text-[9.5px] font-semibold uppercase tracking-[0.24em]">
                      <textPath href="#badge-circle">
                        Dermatologist tested · Clean formula ·
                      </textPath>
                    </text>
                  </svg>
                  <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-bronze to-copper text-white shadow-lg shadow-bronze/40">
                    <Droplets className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
