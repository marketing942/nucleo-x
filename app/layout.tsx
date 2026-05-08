import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const LOGO_URL =
  "https://raw.githubusercontent.com/marketing942/fotos-dos-bots/main/Design%20sem%20nome.png";

export const metadata: Metadata = {
  title: "Núcleo X — Onde os melhores assumem a missão.",
  description:
    "Grupo interno exclusivo formado por especialistas e destaques da empresa. Alta performance, disciplina, liderança silenciosa e mentalidade de vitória.",
  keywords: [
    "Núcleo X",
    "Elite",
    "Alta performance",
    "Liderança",
    "Cultura",
    "Time",
  ],
  openGraph: {
    title: "Núcleo X",
    description:
      "Onde os melhores assumem a missão. Um grupo interno exclusivo formado pelos especialistas e destaques da empresa.",
    images: [LOGO_URL],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Núcleo X",
    description: "Onde os melhores assumem a missão.",
    images: [LOGO_URL],
  },
  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-ink-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
