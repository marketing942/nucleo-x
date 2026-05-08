import { Logo } from "./Logo";

export function Mindset() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-32 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.12),transparent_60%)]"
      />

      <div className="container-x relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Logo size={64} className="opacity-90" />

          <div className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/40">
            <span className="h-px w-8 bg-white/30" />
            Mentalidade Núcleo X
            <span className="h-px w-8 bg-white/30" />
          </div>

          <p className="font-display mt-10 text-balance text-3xl font-medium leading-[1.2] tracking-tight text-white md:text-5xl">
            Fazer parte do Núcleo X é entender que{" "}
            <span className="text-white/60">excelência não é discurso</span>.
            <br className="hidden md:block" /> É postura. É ação. É constância.
          </p>

          <p className="mt-8 max-w-2xl text-balance text-lg text-white/60 md:text-xl">
            É estar disposto a fazer o que precisa ser feito, mesmo quando
            ninguém está olhando.
          </p>
        </div>
      </div>
    </section>
  );
}
