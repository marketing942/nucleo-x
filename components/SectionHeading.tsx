type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} gap-5`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/40">
          <span className="h-px w-8 bg-white/30" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-balance text-base text-white/60 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
