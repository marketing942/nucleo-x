import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="relative border-b border-white/5 py-24 md:py-32">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="O que é"
            title="Não é apenas um grupo. É uma seleção."
          />
        </div>

        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-white/70 md:text-xl">
            O <span className="text-white">Núcleo X</span> é um grupo interno da
            empresa formado por especialistas, líderes práticos e pessoas que
            se destacam pela entrega, postura e capacidade de fazer o negócio
            avançar.
          </p>
          <div className="my-8 h-px hairline" />
          <p className="text-lg leading-relaxed text-white/60 md:text-xl">
            Não é apenas um grupo. É uma seleção de pessoas que carregam
            <span className="text-white"> responsabilidade</span>,
            <span className="text-white"> visão de dono</span> e
            <span className="text-white"> compromisso real com o resultado</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
