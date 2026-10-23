import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-lg">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Núcleo X — início">
          <Logo size={36} className="ring-1 ring-gold/60" />
          <span className="font-display text-lg font-bold uppercase tracking-[0.18em] text-gold-pale">
            Núcleo <span className="text-gold">X</span>
          </span>
        </a>
        <nav className="hidden items-center gap-2 sm:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="ui-label rounded-md border border-line bg-gold/5 px-4 py-1.5 text-sm text-gold-light transition hover:border-line-active hover:bg-gold/15 hover:text-gold-pale"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
