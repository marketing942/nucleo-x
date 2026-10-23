import { TRAITS } from "@/lib/constants";

export function Mission() {
  return (
    <section id="missao" className="scroll-mt-16 border-b border-line py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">A missão</p>
          <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Não é um grupo.
            <span className="block text-gold-light">É uma seleção.</span>
          </h2>
        </div>

        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-ink-soft md:text-xl">
            O <strong className="font-semibold text-ink">Núcleo X</strong> reúne os especialistas e líderes práticos da
            empresa: quem se destaca pela entrega, pela postura e por fazer o negócio avançar. Gente com{" "}
            <strong className="font-semibold text-ink">visão de dono</strong> e{" "}
            <strong className="font-semibold text-ink">compromisso real com o resultado</strong>.
          </p>

          <p className="ui-label mt-10 text-xs text-ink-muted">Quem faz parte</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {TRAITS.map((trait) => (
              <li
                key={trait}
                className="ui-label rounded-md border border-line bg-surface px-4 py-2 text-sm text-gold-pale transition hover:border-line-active hover:bg-gold/10"
              >
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
