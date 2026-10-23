import Image from "next/image";
import { LOGO } from "@/lib/constants";

type LogoProps = { size?: number; className?: string; priority?: boolean };

/** Logo oficial do Núcleo X. O recorte circular tira o fundo branco das pontas da imagem. */
export function Logo({ size = 40, className = "", priority = false }: LogoProps) {
  return (
    <span
      className={`inline-block flex-none overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={LOGO}
        alt="Núcleo X"
        width={size * 2}
        height={size * 2}
        priority={priority}
        className="h-full w-full scale-[1.03] select-none object-cover"
      />
    </span>
  );
}
