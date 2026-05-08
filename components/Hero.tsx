import { Logo } from "./Logo";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5"
    >
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:60px_60px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container-x relative grid grid-cols-1 items-center gap-16 py-24 md:py-32 lg:grid-cols-12 lg:gap-10">
        {/* Texto */}
        <div className="lg:col-span-7 animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
            {COMPANY} · Grupo interno exclusivo
          </div>

          <h1 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Núcleo X:{" "}
            <span className="block text-white/90">
              onde os melhores
            </span>
            <span className="block">
              assumem a <span className="text-accent">missão.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-balance text-base text-white/60 md:text-lg">
            Um grupo interno exclusivo, formado por pessoas que não esperam o
            problema crescer. Elas enxergam, assumem, resolvem e colocam o
            negócio para frente.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#sobre"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-white/90"
            >
              Conheça a missão
              <span
                aria-hidden
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#pilares"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Ver pilares
            </a>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/5 pt-6">
            <Stat label="Padrão" value="Elite" />
            <Stat label="Postura" value="Dono" />
            <Stat label="Cultura" value="Missão" />
          </div>
        </div>

        {/* Logo destaque */}
        <div className="relative flex items-center justify-center lg:col-span-5">
          <div className="relative aspect-square w-full max-w-[420px] animate-fade-in">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.25),transparent_60%)]" />
            <div className="absolute inset-6 rounded-full border border-white/10" />
            <div className="absolute inset-14 rounded-full border border-white/[0.06]" />
            <div className="relative flex h-full w-full items-center justify-center">
              <Logo
                size={320}
                priority
                className="drop-shadow-[0_30px_80px_rgba(200,16,46,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
        {label}
      </div>
      <div className="mt-2 font-display text-lg font-semibold text-white">
        {value}
      </div>
    </div>
  );
}
