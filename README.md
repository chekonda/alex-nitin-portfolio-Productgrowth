# Chekonda Alex Nitin — Portfolio

A modern, single-page portfolio built with React, TypeScript, Vite and Tailwind CSS.

Live reference (previous version): https://alex-nitin-portfolio.vercel.app/

## Stack

- **React 19 + TypeScript** — component architecture, strict typing
- **Vite** — dev server and build
- **Tailwind CSS v4** — design tokens defined in `src/index.css` via `@theme`
- **Motion** (`motion/react`) — entrance and scroll-reveal animations, respecting `prefers-reduced-motion`
- **Lucide React** — UI icons (brand marks for GitHub/LinkedIn are small local SVGs — see `src/components/UI/BrandIcons.tsx` — since Lucide no longer ships trademarked logos)
- **ESLint + Prettier** — linting and formatting
- **Vitest + Testing Library** — unit/integration tests

## Project structure

```
src/
  components/
    Navbar/ Hero/ About/ Experience/ Projects/ Skills/ Education/ Contact/ Footer/
    UI/            reusable primitives (Button, Badge, Container, SectionHeading, Reveal, ...)
  data/
    portfolio.ts   all site content — profile, experience, projects, skills, education
  hooks/           useActiveSection, useScrolled
  lib/             small utilities (cn)
  assets/images/   optimized local images
  test/            Vitest setup
App.tsx            page composition
main.tsx           entry point
```

**To update content** (a new job, a new project, a skill), edit `src/data/portfolio.ts` — every
section renders from that file, so nothing else needs to change.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production into dist/
npm run preview  # preview the production build locally
npm run lint      # ESLint
npm run format    # Prettier — write
npm run format:check
npm run typecheck # tsc --noEmit
npm run test      # Vitest
```

## Deployment (Vercel)

This is a standard Vite app — no special configuration is required:

1. Push this repository to GitHub.
2. In Vercel, "Add New Project" → import the repository.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist`.
4. Deploy.

## Content policy

Everything in `src/data/portfolio.ts` is transcribed from the original repository and deployed
site — no jobs, projects, skills or metrics were invented. See the code comment at the top of that
file.
