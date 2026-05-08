import { SectionHeading } from "./SectionHeading";

const PILLARS = [
  {
    code: "01",
    title: "Proatividade",
    text: "Não espera ordem. Enxerga o problema antes que ele vire crise e começa a resolver enquanto outros ainda estão percebendo.",
  },
  {
    code: "02",
    title: "Liderança e Colaboração",
    text: "Lidera sem precisar de palco. Ajuda o time, eleva o padrão ao redor e entende que o resultado coletivo é o que realmente importa.",
  },
  {
    code: "03",
    title: "Vontade de Vencer",
    text: "Não se contenta com o básico. Tem fome de resultado, busca evolução constante e joga para ganhar.",
  },
  {
    code: "04",
    title: "Capacidade de Resolver",
    text: "Não traz apenas problemas. Analisa, propõe caminhos, executa e entrega soluções reais.",
  },
];

export function Pillars() {
  return (
    <section
      id="pilares"
      className="relative border-b border-white/5 py-24 md:py-32"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Os pilares"
          title="Os quatro pilares do Núcleo X."
          description="Princípios que definem quem está dentro e o padrão que se mantém todos os dias."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.code}
              className="group relative bg-ink-900 p-8 transition-all duration-300 hover:bg-ink-800 md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-xs font-medium tracking-[0.3em] text-white/30">
                  {pillar.code}
                </span>
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full bg-white/20 transition-colors group-hover:bg-accent"
                />
              </div>

              <h3 className="font-display mt-10 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {pillar.title}
              </h3>

              <p className="mt-4 max-w-md text-base leading-relaxed text-white/55">
                {pillar.text}
              </p>

              <div
                aria-hidden
                className="mt-10 h-px w-12 bg-white/10 transition-all duration-300 group-hover:w-24 group-hover:bg-accent"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
