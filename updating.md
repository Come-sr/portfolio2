# Updating the Portfolio

## Data files — edit these to update content

| What | File |
|---|---|
| Projects | `src/data/projects.tsx` |
| Experience / Formation | `src/data/experiences.ts` |
| Certifications & Education | `src/data/about.ts` |
| Bio text & Passions | `src/pages/About.tsx` (inline) |

## Common tasks

**Add a project** → copy an existing entry in `src/data/projects.tsx`, change the fields. Use `image: "/path/to/screenshot.png"` to show a preview (file goes in `public/`).

**Add an experience** → copy an entry in `src/data/experiences.ts`. `link` is optional.

**Update CV** → replace `public/CV.pdf` with your new file (keep the same filename).

**Update favicon** → replace `public/favicon.jpg` (must be in `public/`, not the project root).

## Build & deploy

```bash
npm run build   # outputs to dist/
```

Push `dist/` to your GitHub Pages branch (or configure GitHub Actions to do it on push).

> The `public/404.html` handles page reloads on routes like `/projets` — don't delete it.
