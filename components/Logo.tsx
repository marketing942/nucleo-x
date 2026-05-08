import Image from "next/image";
import { LOGO_URL } from "@/lib/constants";

type LogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function Logo({ size = 40, className = "", priority = false }: LogoProps) {
  return (
    <Image
      src={LOGO_URL}
      alt="Núcleo X"
      width={size}
      height={size}
      priority={priority}
      unoptimized
      className={`object-contain select-none ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
