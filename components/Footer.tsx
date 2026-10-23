import { MOTTO } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <Logo size={32} className="ring-1 ring-gold/60" />
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-pale">Núcleo X</p>
            <p className="ui-label text-[10px] text-ink-muted">Uso interno · Confidencial</p>
          </div>
        </div>
        <p className="ui-label text-xs text-gold-light">{MOTTO.join(" · ")}</p>
        <p className="ui-label text-[10px] text-ink-muted">© {new Date().getFullYear()} CPPEM</p>
      </div>
    </footer>
  );
}
