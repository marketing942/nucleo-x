import { Logo } from "./Logo";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-12">
      <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <div>
            <div className="font-display text-sm font-semibold text-white">
              Núcleo X
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              {COMPANY} · Unidade interna · Confidencial
            </div>
          </div>
        </div>

        <p className="max-w-md text-sm text-white/40">
          Documento institucional para uso interno. O Núcleo X representa o
          padrão. O padrão se mantém na ação.
        </p>

        <div className="text-[10px] uppercase tracking-[0.25em] text-white/30">
          © {new Date().getFullYear()} · Núcleo X · {COMPANY}
        </div>
      </div>
    </footer>
  );
}
