# Copilot Instructions for AstroPaper Blog

## Project Overview
- **Framework:** Astro (static site generator)
- **Language:** TypeScript (with .astro, .ts, .js, .md files)
- **Styling:** TailwindCSS
- **Content:** Markdown posts in `src/data/blog/`
- **Components:** Reusable UI in `src/components/` (Astro components)
- **Pages & Routing:** All routes/pages in `src/pages/` (Astro/Markdown)
- **Utilities:** Shared logic in `src/utils/`
- **Config:** Site-wide settings in `src/config.ts`, `src/constants.ts`, `src/content.config.ts`

## Key Workflows
- **Local Development:**
  - Install: `pnpm install`
  - Start: `pnpm run dev` (default port: 4321)
  - Build: `pnpm run build` (output: `./dist/`)
  - Preview: `pnpm run preview`
- **Formatting & Linting:**
  - Format: `pnpm run format` (Prettier)
  - Lint: `pnpm run lint` (ESLint)
- **Type Generation:**
  - Sync Astro types: `pnpm run sync`
- **Docker:**
  - Build: `docker build -t astropaper .`
  - Run: `docker run -p 4321:80 astropaper`
  - Compose: `docker compose up -d`

## Patterns & Conventions
- **Posts:**
  - Markdown files in `src/data/blog/` (use frontmatter for metadata)
  - Drafts supported via frontmatter
- **Components:**
  - Astro components in `src/components/` (PascalCase)
  - Layouts in `src/layouts/`
- **Pages:**
  - Route structure mirrors file structure in `src/pages/`
  - Dynamic routes: `[...slug]`, `[tag]`, etc.
- **Assets:**
  - Static assets in `public/` (images, icons, JS)
- **Config:**
  - Site config in `src/config.ts`, constants in `src/constants.ts`
- **SEO & OG Images:**
  - Dynamic OG image generation via `src/pages/og.png.ts` and `src/utils/generateOgImages.ts`
- **Search:**
  - Fuzzy search via FuseJS (see `public/pagefind/`)

## External Integrations
- **Icons:** Tabler Icons
- **Deployment:** Cloudflare Pages
- **Google Site Verification:** Set `PUBLIC_GOOGLE_SITE_VERIFICATION` in `.env` for meta tag

## Examples
- Add a post: Place markdown in `src/data/blog/`, see `adding-new-post.md`
- Custom color schemes: See `customizing-astropaper-theme-color-schemes.md`
- Dynamic OG images: See `src/pages/og.png.ts`, `src/utils/generateOgImages.ts`

## References
- [Astro Documentation](https://docs.astro.build/)
- [Theme Blog](https://astro-paper.pages.dev/posts/)

---
**Update this file if project structure or workflows change.**
