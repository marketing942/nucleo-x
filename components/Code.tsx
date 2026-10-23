import { Logo } from "./Logo";

export function Code() {
  return (
    <section id="codigo" className="relative scroll-mt-16 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(175,146,86,0.12),transparent_60%)]" />
      <div className="container-x relative">
        <div className="hud mx-auto max-w-4xl rounded-2xl border border-line bg-surface px-6 py-14 text-center sm:px-12 md:py-20">
          <i /><i /><i /><i />
          <Logo size={64} className="mx-auto ring-1 ring-gold/60" />
          <p className="eyebrow mt-6 justify-center before:hidden">O código</p>
          <p className="mt-8 text-balance font-display text-2xl font-bold uppercase leading-[1.2] tracking-tight sm:text-4xl">
            Excelência não é discurso.{" "}
            <span className="text-gold-light">É postura. É ação. É constância.</span>
          </p>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-ink-soft md:text-lg">
            É fazer o que precisa ser feito, mesmo quando ninguém está olhando. O Núcleo X representa os melhores:
            quem ajuda a construir o futuro da empresa.
          </p>
          <a href="#top" className="gold-button mt-10">
            Missão dada. Missão assumida. <span aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </section>
  );
}
