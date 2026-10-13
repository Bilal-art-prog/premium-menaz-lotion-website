import type { ReactNode } from "react";
import { Reveal } from "../lib/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      <Reveal variant="up">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
            dark
              ? "border-white/15 bg-white/5 text-glow"
              : "border-bronze/25 bg-bronze/5 text-copper"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-glow" : "bg-bronze"}`} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal variant="up" delay={100}>
        <h2
          className={`mt-6 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl ${
            dark ? "text-porcelain" : "text-espresso"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal variant="up" delay={200}>
          <p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${
              dark ? "text-porcelain/60" : "text-cocoa/75"
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
