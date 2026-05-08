# Núcleo X — Landing Page

Landing page institucional do **Núcleo X**, grupo interno exclusivo formado pelos especialistas e destaques da empresa.

Construída com **Next.js 14 (App Router)**, **Tailwind CSS** e **TypeScript**. Pronta para deploy na Vercel.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS 3
- Fontes: Inter + Space Grotesk (via `next/font`)

## Estrutura

```
nucleo-x/
├── app/
│   ├── globals.css        # Tailwind + utilitários globais
│   ├── layout.tsx         # Layout raiz, metadata, favicon
│   └── page.tsx           # Composição da landing
├── components/
│   ├── About.tsx          # Seção "O que é"
│   ├── CTA.tsx            # Fechamento + missão dada
│   ├── Footer.tsx
│   ├── Header.tsx         # Header sticky com nav âncora
│   ├── Hero.tsx           # Hero com logo em destaque
│   ├── Logo.tsx           # Wrapper da imagem oficial (object-contain)
│   ├── Mindset.tsx        # Mentalidade Núcleo X
│   ├── Pillars.tsx        # 4 pilares
│   ├── Profile.tsx        # Quem faz parte
│   └── SectionHeading.tsx
├── lib/
│   └── constants.ts       # URL da logo + links de navegação
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Modo dev (http://localhost:3000)
npm run dev

# 3. Build de produção
npm run build && npm start
```

## Deploy na Vercel

1. Faça push do repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Next.js automaticamente — sem variáveis de ambiente necessárias.
4. Clique em **Deploy**.

Alternativa via CLI:

```bash
npm i -g vercel
vercel
```

## Identidade visual

- A logo oficial é carregada via URL RAW do GitHub (mantida em `lib/constants.ts`).
- A logo é exibida com `object-contain` e **sem filtros** (sem `grayscale`, `invert`, `opacity`, `brightness` ou `mix-blend-mode`).
- Paleta: preto, branco, cinza grafite e detalhes em vermelho (`accent`).
- Tipografia: Space Grotesk (display) + Inter (texto).

## Seções

1. **Header** — logo, nome e navegação âncora (`O que é`, `Pilares`, `Perfil`, `Propósito`).
2. **Hero** — título impactante, subtítulo, CTA "Conheça a missão" e logo em destaque.
3. **O que é** — descrição institucional do Núcleo X.
4. **Os pilares** — Proatividade, Liderança e Colaboração, Vontade de Vencer, Capacidade de Resolver.
5. **Quem faz parte** — frases curtas reforçando exclusividade.
6. **Mentalidade Núcleo X** — bloco emocional/inspiracional.
7. **CTA final** — "Missão dada. Missão assumida."
8. **Footer** — institucional discreto.
