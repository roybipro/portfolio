# Roy Bipro — Portfolio

A responsive, interactive portfolio built with Next.js, React, TypeScript, and CSS. It features a persistent light/dark theme, mobile navigation, filtered recent projects, expandable project details, scroll progress, and a one-click email copy action.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
```

Next.js exports a static site to `out/`. GitHub Actions builds and deploys that folder to GitHub Pages. The workflow configures `/portfolio` as the base path for the repository site.

## Recent work

- [CareerLab](https://github.com/roybipro/careerlab) — career and research tracking workspace. [Live demo](https://careerlab-opal.vercel.app).
- [DaamKhoj](https://github.com/roybipro/daamkhoj-price-comparison) — Bangladeshi online shop comparison prototype. The repository labels its current prices and trust values as sample data.
- [FluentUp](https://github.com/roybipro/fluentup) — English-learning mobile app and API for structured practice and AI tutoring.

Update project details in `app/page.tsx`, visual styles in `app/globals.css`, and portfolio images in `public/images/`.
