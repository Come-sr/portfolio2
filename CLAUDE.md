# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # TypeScript type-check (no emit)
npm run clean     # Remove dist/
```

**Environment:** Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY`.

## Architecture

Personal portfolio for Côme Servy (IT apprentice/student, French content). Single-page app with React Router nested layout.

**Routing** (`src/App.tsx`):
- `Layout` wraps all pages (fixed top nav, dark theme, footer)
- `/` → `Home`, `/projets` → `Projects`, `/experiences` → `Experience`, `/a-propos` → `About`

**Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v4 (via `@tailwindcss/vite`), Framer Motion, React Router 7.

**Styling conventions:**
- Dark theme: `bg-[#111111]` / `text-[#f4f4f5]`
- Accent: lime `#c4f042` (selection, highlights), purple `#a78bfa`
- `.bento-card` utility class for cards (defined in `index.css`)
- Path alias `@/` resolves to project root

**Pages** are self-contained with all data hardcoded inline — no separate data files or API calls. Content is in French.

**`public/` folder** contains static assets served at root (e.g. `CV.pdf` referenced in About page).
