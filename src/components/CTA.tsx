import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Check, Lock, ShieldCheck, Truck } from "lucide-react";
import { Reveal } from "../lib/reveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("done");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="cta" className="relative pb-24 pt-4 sm:pb-32" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-20 text-center text-porcelain sm:px-12 sm:py-24">
            {/* ambient orbs + halo */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-bronze/25 blur-[110px] animate-pulse-soft" />
              <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-glow/15 blur-[120px] animate-pulse-soft-2" />
              <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-glow/60 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <Reveal variant="fade">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-glow" />
                  Join 40,000+ adults who upgraded their lotion
                </span>
              </Reveal>

              <Reveal variant="up" delay={120}>
                <h2
                  id="cta-heading"
                  className="mt-6 font-display text-4xl leading-[1.06] font-medium tracking-tight text-balance sm:text-6xl"
                >
                  Skin that feels like{" "}
                  <em className="bg-gradient-to-r from-glow via-bronze to-glow bg-clip-text font-medium text-transparent italic">
                    yours
                  </em>{" "}
                  again.
                </h2>
              </Reveal>

              <Reveal variant="up" delay={240}>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-porcelain/65 sm:text-lg">
                  Get 15% off your first order, plus early access to new formulas.
                  One email a month — no spam, ever.
                </p>
              </Reveal>

              <Reveal variant="up" delay={360}>
                {status === "done" ? (
                  <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-full border border-glow/30 bg-glow/10 px-6 py-4 text-sm font-semibold text-glow backdrop-blur-md">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-glow/20">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    Welcome to the club — your 15% code is on its way.
                  </div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    noValidate
                    className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
                  >
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="you@example.com"
                      aria-invalid={status === "error"}
                      aria-describedby={status === "error" ? "cta-error" : undefined}
                      className={`h-14 flex-1 rounded-full border bg-white/8 px-6 text-sm text-porcelain placeholder:text-porcelain/40 backdrop-blur-md transition-all duration-300 focus:bg-white/12 focus:outline-none focus:ring-2 focus:ring-glow/50 ${
                        status === "error" ? "border-red-400/60" : "border-white/15"
                      }`}
                    />
                    <button
                      type="submit"
                      className="btn-shine group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-bronze to-copper px-8 text-sm font-bold text-white shadow-xl shadow-bronze/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-copper/40"
                    >
                      Get 15% off
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
                {status === "error" && (
                  <p id="cta-error" role="alert" className="mt-3 text-sm text-red-300">
                    Please enter a valid email address.
                  </p>
                )}
              </Reveal>

              <Reveal variant="fade" delay={480}>
                <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-porcelain/50">
                  <li className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-glow/70" /> Free shipping over $50
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-glow/70" /> 30-day guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-glow/70" /> Secure checkout
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
