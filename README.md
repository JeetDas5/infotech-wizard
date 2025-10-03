# Infotech Wizard

A small React + Vite + TypeScript starter project for the Infotech Services marketing landing/demo site.

This repository contains a lightweight front-end built with Vite, React 19, TypeScript and Tailwind CSS. It is intended as a simple landing or demo site with a few UI components under `components/` and static assets in `src/assets` and `public/`.

## Live Link
[https://infotech-wizard.vercel.app](https://infotech-wizard.vercel.app)

## Quickstart

Prerequisites:
- Node.js 18+ (or an active Node release compatible with the project's dependencies)
- pnpm (recommended since a `pnpm-lock.yaml` is present). npm or yarn will also work but commands below use `pnpm`.

Install dependencies:

```powershell
pnpm install
```

Run a local dev server:

```powershell
pnpm run dev
```

Build for production:

```powershell
pnpm run build
```

## Project structure

Top-level files of interest:

- `index.html` — Vite HTML entry
- `vite.config.ts` — Vite configuration
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — TypeScript configs
- `tailwind.config.js`, `postcss.config.js` — Tailwind / PostCSS config
- `package.json` — scripts & dependencies
- `pnpm-lock.yaml` — lockfile (pnpm)

Source code:

- `src/main.tsx` — app bootstrap and hydration
- `src/App.tsx` — main App component
- `src/index.css` — global styles (Tailwind)
- `src/components/` — presentational components (`Hero.tsx`, `Navbar.tsx`, `Details.tsx`)
- `src/assets/` — SVGs and images used in the UI
- `public/` — static files served by Vite

## Tech stack

- Vite (dev server, build)
- React 19 + TypeScript
- Tailwind CSS (V3) + PostCSS
- ESLint for linting

## Scripts

The following npm scripts are defined in `package.json` (run via `pnpm run <script>`):

- `dev` — start Vite dev server
- `build` — TypeScript build (`tsc -b`) then Vite build
- `preview` — locally preview the production build
- `lint` — run ESLint over the repository

If you prefer npm or yarn, replace `pnpm` with `npm` or `yarn` (for example, `npm run dev`).

Made with ♥ by [Jeet Das](https://github.com/JeetDas5)
