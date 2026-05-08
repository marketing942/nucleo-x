import { SectionHeading } from "./SectionHeading";

const TRAITS = [
  "Os que resolvem",
  "Os que puxam a fila",
  "Os que elevam o padrão",
  "Os que fazem acontecer",
  "Os que carregam a missão",
];

export function Profile() {
  return (
    <section id="perfil" className="relative border-b border-white/5 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:80px_80px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Quem faz parte"
          title="O Núcleo X não é para todos."
          description="É para quem assume responsabilidade, protege a cultura, entrega acima da média e coloca o negócio para frente."
        />

        <ul className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-2">
          {TRAITS.map((trait, i) => (
            <li
              key={trait}
              className="group flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.04]"
            >
              <span className="font-display text-xs font-medium text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-shrink-0 bg-white/10 transition-all duration-300 group-hover:bg-accent w-8 group-hover:w-12" />
              <span className="font-display text-lg font-medium tracking-tight text-white md:text-xl">
                {trait}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
