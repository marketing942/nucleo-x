export function CTA() {
  return (
    <section
      id="proposito"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.25),transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.15),transparent_70%)]"
          />

          <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/40">
                <span className="h-px w-8 bg-accent" />
                Propósito
              </div>
              <h2 className="font-display mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
                O Núcleo X representa os melhores. Aqueles que não apenas
                trabalham na empresa, mas{" "}
                <span className="text-accent">ajudam a construir o futuro dela.</span>
              </h2>
            </div>

            <a
              href="#top"
              className="group relative inline-flex shrink-0 items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink-950 transition-all hover:bg-accent hover:text-white"
            >
              Missão dada. Missão assumida.
              <span
                aria-hidden
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
