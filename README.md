# GPEW Policy Website

A simple, accessible, and maintainable site for sharing Green Party policy content, motions to conference, key dates, and working group info.

## 🌱 Tech Stack

- Next.js 14+ (App Router)
- Tailwind CSS
- MDX (native) for policy content
- Bebas Neue and Manrope fonts
- Accessible, AA contrast-compliant design using Green Party branding
- pnpm for package management
- ESLint (flat config) with Prettier integration
- Jest + React Testing Library
- Husky + lint-staged for pre-commit automation
- GitHub Actions for CI (lint + test)

---

## 📁 Project Structure (Overview)

- `src/app/layout.tsx` – App shell with global layout and font setup
- `src/app/globals.css` – Tailwind base styles
- `src/app/policies/page.tsx` – Lists all policies
- `src/app/policies/[slug]/page.tsx` – Renders individual MDX policy
- `src/app/policies/data/*.mdx` – Motion content (editable Markdown/JSX)
- `src/app/policies/data/*.mdx.d.ts` – Autogenerated TypeScript module declarations
- `src/components/` – Header, Footer, MDXRenderer, etc.
- `scripts/generate-mdx-types.ts` – Script to create `.mdx.d.ts` files
- `types/mdx.d.ts` – Fallback type for MDX modules
- `.github/workflows/ci.yml` – GitHub Actions workflow (lint + test)

---

## 🧪 Commands

pnpm dev – Start local dev server  
pnpm build – Build for production  
pnpm lint – Run ESLint  
pnpm lint:fix – Fix lint issues automatically  
pnpm format – Check Prettier formatting  
pnpm format:fix – Auto-format files with Prettier  
pnpm test – Run tests  
pnpm generate:mdx-types – Generate TypeScript defs for `.mdx` imports

---

## 📦 MDX Type Generation

When you add a new `.mdx` file to `src/app/policies/data/`, run:

pnpm generate:mdx-types

This script generates `.d.ts` files that make MDX components importable with type safety

---

## ✅ Linting & Formatting

- ESLint (flat config) with TypeScript, Tailwind, and Prettier support
- Pre-commit hook via Husky runs `eslint` and `prettier` on staged files
- You can also run `pnpm lint` and `pnpm format` manually

---

## 🔄 Continuous Integration

GitHub Actions runs on every push or pull request to `main`:

- `pnpm lint`
- `pnpm test`

See `.github/workflows/ci.yml` for details.

---

## ✨ In Progress / Planned

- MDX metadata parsing (`export const title`, `summary`)
- Dynamic generation of the policy index page from MDX files
- Optional custom domain + Vercel deployment
- Optional `.editorconfig` for cross-IDE formatting consistency
