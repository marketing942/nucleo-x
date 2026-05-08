import Link from "next/link";
import { Logo } from "./Logo";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-ink-950/70 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-3">
          <Logo size={36} priority />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight text-white">
              Núcleo X
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-white/40">
              {COMPANY} · Unidade interna
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#proposito"
          className="hidden rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 transition-all hover:border-accent hover:text-white md:inline-flex"
        >
          Missão
        </a>
      </div>
    </header>
  );
}
