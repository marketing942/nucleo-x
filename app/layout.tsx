import type { Metadata } from "next";
import { Inter, Oxanium, Rajdhani } from "next/font/google";
import { Crosshair } from "@/components/crosshair";
import "./globals.css";

// Mesmas três fontes do site novo da CPPEM: Inter (corpo), Oxanium (títulos), Rajdhani (rótulos).
const inter = Inter({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const oxanium = Oxanium({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const rajdhani = Rajdhani({ variable: "--font-ui", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Núcleo X — Onde os melhores assumem a missão",
  description: "Grupo interno da CPPEM formado pelos especialistas e destaques da empresa. Si vis pacem, para bellum.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Núcleo X",
    description: "Onde os melhores assumem a missão.",
    images: ["/logo-nucleo-x.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oxanium.variable} ${rajdhani.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">
        {children}
        <Crosshair />
      </body>
    </html>
  );
}
