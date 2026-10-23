import { MOTTO } from "@/lib/constants";

/** Faixa contínua com o lema da logo. */
export function Motto() {
  const items = Array.from({ length: 8 }, (_, i) => MOTTO[i % 2]);
  return (
    <div className="overflow-hidden border-b border-line bg-surface py-3" aria-label={MOTTO.join(", ")}>
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap" aria-hidden>
        {[...items, ...items].map((text, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="ui-label text-sm text-gold-light">{text}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
