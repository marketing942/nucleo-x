import { PILLARS } from "@/lib/constants";

export function Pillars() {
  return (
    <section id="pilares" className="scroll-mt-16 border-b border-line py-20 md:py-28">
      <div className="container-x">
        <p className="eyebrow">Os pilares</p>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl">
          Quatro princípios. <span className="text-gold-light">Todo dia.</span>
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.code}
              className="hud group rounded-xl border border-line bg-surface p-7 transition hover:border-line-active hover:bg-surface-2 md:p-9"
            >
              <i /><i /><i /><i />
              <div className="flex items-center justify-between">
                <span className="ui-label text-xs text-gold">Pilar {pillar.code}</span>
                <span className="font-display text-5xl font-extrabold leading-none text-gold/15 transition group-hover:text-gold/30">
                  {pillar.code}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-ink">{pillar.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
