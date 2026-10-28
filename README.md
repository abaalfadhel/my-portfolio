# Digital Forge — Cinematic Portfolio

A bilingual Arabic/English portfolio starter built with Next.js App Router, TypeScript, CSS design tokens, static content modules, and a procedural 3D scene using React Three Fiber.

## Requirements
- Node.js 20.9+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. The root page provides links to `/ar/` and `/en/`.

## Quality checks
```bash
npm run typecheck
npm run lint
npm run build
```

## GitHub Pages deployment
This project is configured for Next.js static export. The GitHub Actions workflow builds the site into `out/` and deploys that folder to GitHub Pages. On GitHub Actions, `next.config.ts` detects the repository name and sets the required base path for project sites; repositories named `owner.github.io` use the root path.

In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. The workflow runs when changes are pushed to `main` or when manually triggered.

## Before publishing
1. Replace `YOUR_EMAIL@example.com` in `src/components/ContactForm.tsx` with the real contact address.
2. Replace sample projects and articles in `src/content/projects.ts` and `src/content/articles.ts` with verified content.
3. Set the production canonical/social metadata if you add a real domain.
4. Review the contact form and privacy disclosures. The current form uses `mailto:` and does not send data to a server.

## Structure
- `src/app/[locale]`: localized pages and static detail routes.
- `src/components`: reusable layout, project, article, 3D scene, and contact form.
- `src/content`: static portfolio data.
- `src/lib/i18n.ts`: bilingual copy and locale helpers.
- `.github/workflows/deploy.yml`: GitHub Pages deployment.
