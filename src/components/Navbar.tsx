import { useEffect, useState } from "react";
import { ArrowRight, Droplet, Menu, X } from "lucide-react";

const links = [
  { label: "Science", href: "#science" },
  { label: "Collection", href: "#collection" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setScrolled(window.scrollY > 24);
      setProgress(total > 0 ? Math.min(window.scrollY / total, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-espresso/5 bg-porcelain/75 shadow-[0_8px_40px_-16px_rgba(30,24,17,0.18)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* scroll progress */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-bronze via-glow to-copper transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          {/* logo */}
          <a href="#top" className="group flex items-center gap-2.5" aria-label="MENAZ home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-bronze to-copper text-white shadow-lg shadow-bronze/30 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Droplet className="h-4.5 w-4.5" strokeWidth={2.2} fill="currentColor" />
            </span>
            <span className="font-display text-xl font-semibold tracking-[0.14em] text-espresso">
              MENAZ
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-cocoa transition-colors duration-300 hover:text-espresso"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-bronze to-copper transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <span className="text-sm text-drift">$34 · free shipping over $50</span>
            <a
              href="#pricing"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-porcelain shadow-lg shadow-espresso/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper hover:shadow-xl hover:shadow-copper/30"
            >
              Shop now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/10 bg-white/60 text-espresso backdrop-blur-md transition-colors hover:bg-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-porcelain/95 px-6 pb-10 pt-28 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="space-y-2">
          {links.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-espresso/8 py-4 font-display text-3xl font-medium text-espresso transition-colors hover:text-copper"
              >
                {link.label}
                <ArrowRight className="h-6 w-6 text-bronze" />
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`transition-all delay-500 duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="btn-shine flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-bronze to-copper py-4 text-base font-semibold text-white shadow-xl shadow-bronze/30"
          >
            Shop now — from $34
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-center text-sm text-drift">
            Free shipping over $50 · 30-day guarantee
          </p>
        </div>
      </div>
    </>
  );
}
