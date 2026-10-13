import { Droplet } from "lucide-react";

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const columns = [
  {
    title: "Shop",
    links: ["Daily Hydration", "Night Repair", "The Body Duo", "Ritual Club", "Gift cards"],
  },
  {
    title: "Company",
    links: ["Our story", "Ingredients", "Sustainability", "Clinical results", "Careers"],
  },
  {
    title: "Support",
    links: ["FAQ", "Shipping", "Returns", "Contact us", "Accessibility"],
  },
];

const socials = [
  { icon: InstagramIcon, label: "MENAZ on Instagram" },
  { icon: XIcon, label: "MENAZ on X" },
  { icon: YoutubeIcon, label: "MENAZ on YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-espresso text-porcelain" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="MENAZ home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-bronze to-copper text-white shadow-lg shadow-bronze/20">
                <Droplet className="h-4.5 w-4.5" fill="currentColor" />
              </span>
              <span className="font-display text-xl font-semibold tracking-[0.14em]">MENAZ</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-porcelain/55">
              Clinical-grade hydration for adult skin. Fragrance-free,
              dermatologist tested, and guaranteed to work — or your money back.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-porcelain/70 transition-all duration-300 hover:-translate-y-1 hover:border-glow/40 hover:text-glow"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-porcelain/40">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="group relative text-sm text-porcelain/70 transition-colors duration-300 hover:text-glow"
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-glow transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-porcelain/40">
            © {new Date().getFullYear()} MENAZ Skincare Inc. All rights reserved.
          </p>
          <p className="font-display text-xs tracking-[0.28em] text-porcelain/35 uppercase">
            Designed for adult skin
          </p>
          <ul className="flex gap-6 text-xs text-porcelain/40">
            <li>
              <a href="#top" className="transition-colors hover:text-porcelain">Privacy</a>
            </li>
            <li>
              <a href="#top" className="transition-colors hover:text-porcelain">Terms</a>
            </li>
            <li>
              <a href="#top" className="transition-colors hover:text-porcelain">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
