import { Logo } from "./Logo";

const STATS = [
  { label: "Padrão", value: "Elite" },
  { label: "Postura", value: "Dono" },
  { label: "Cultura", value: "Missão" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(175,146,86,0.16),transparent_65%)]" />

      <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="animate-fade-up lg:col-span-7">
          <div className="ui-label inline-flex items-center gap-2.5 rounded-md border border-line bg-gold/5 px-3 py-1.5 text-[11px] text-gold-light">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-gold-pale" />
            Grupo interno · Acesso restrito
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold uppercase leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]">
            Onde os melhores
            <span className="block bg-gradient-to-r from-gold-pale via-gold-light to-gold bg-clip-text pb-1 text-transparent">
              assumem a missão.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-ink-soft md:text-lg">
            Não esperam o problema crescer. Enxergam, assumem, resolvem e colocam o negócio para frente.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#missao" className="gold-button">
              Conheça a missão <span aria-hidden>→</span>
            </a>
            <a href="#pilares" className="ghost-button">
              Ver pilares
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="ui-label text-[10px] text-ink-muted">{stat.label}</dt>
                <dd className="mt-1.5 font-display text-xl font-bold uppercase text-gold-pale">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center lg:col-span-5">
          <div className="hud relative aspect-square w-full max-w-[400px] p-6 sm:p-8">
            <i /><i /><i /><i />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(175,146,86,0.2),transparent_68%)]" />
            <div className="animate-spin-slow absolute inset-3 rounded-full border border-dashed border-gold/35" />
            <div className="relative flex h-full w-full items-center justify-center">
              <Logo size={320} priority className="h-full w-full ring-2 ring-gold/70 shadow-[0_0_80px_rgba(175,146,86,0.25)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
