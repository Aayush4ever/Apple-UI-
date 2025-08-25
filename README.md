
# iPhone · Apple (Clone) — React + Vite + Tailwind (@tailwindcss/vite)

A pixel‑perfect, responsive recreation of Apple's iPhone landing page aesthetic. This is **UI‑only** (no functionality).

## Tech
- React + Vite
- Tailwind CSS v4 runtime via `@tailwindcss/vite` (no `tailwind.config.js` needed)
- Pure, reusable components

## Get started
```bash
pnpm i   # or: npm i  OR  yarn
pnpm dev # or: npm run dev
```

> If Tailwind init doesn't work on your system, this setup doesn't need it. We import Tailwind directly in `src/index.css` and use the Vite plugin.

## Install (as requested)
```bash
npm install tailwindcss @tailwindcss/vite
```

## Build
```bash
npm run build
npm run preview
```

## Deploy
- **Vercel**: Import this repo, framework = Vite, build = `npm run build`, output dir = `dist`.
- **Netlify**: Build command = `npm run build`, publish directory = `dist`.

## Notes
- Fonts use the Apple‑like system stack (`-apple-system`, etc.) for legal + visual fidelity.
- All imagery is generative/placeholder; swap with product assets as needed.
