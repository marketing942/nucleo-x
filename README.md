# Núcleo X

Página interna do **Núcleo X**, o grupo dos melhores da CPPEM. Identidade visual CPPEM (preto + dourado), estilo operacional, com a logo oficial "Si vis pacem, para bellum".

Next.js (App Router), React, TypeScript e Tailwind CSS 3. Sem variáveis de ambiente.

## Estrutura

- `app/` — layout (fontes Inter, Oxanium e Rajdhani), página, estilos globais e favicon (`icon.svg`)
- `components/` — `Header`, `Hero`, `Motto` (faixa com o lema), `Mission`, `Pillars`, `Code`, `Footer`, `Logo` e `crosshair` (mira no lugar do mouse)
- `lib/constants.ts` — textos dos pilares, perfil, lema e navegação
- `public/logo-nucleo-x.png` — logo oficial

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```
