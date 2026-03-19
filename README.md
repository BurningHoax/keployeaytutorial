# Keploy Go Quickstart — Tutorial Site

A single-page documentation website built with **Next.js** and **MDX** for the [Keploy](https://keploy.io) DevRel candidate assignment. The tutorial walks a Go developer through recording and replaying integration tests using the Echo + PostgreSQL sample app.

## Live Demo

> Add your Vercel deployment URL here

## Stack

- [Next.js 16](https://nextjs.org/) with Turbopack
- [MDX](https://mdxjs.com/) for content
- [shadcn/ui](https://ui.shadcn.com/) components
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── layout.tsx          # Root layout — Navbar + prose wrapper
├── page.mdx            # Tutorial content
└── globals.css         # Design tokens (shadcn CSS variables)

components/
├── Navbar.tsx          # Sticky header with theme toggle + GitHub link
├── Callout.tsx         # Info / tip / warning / danger callout boxes
├── theme-toggle.tsx    # Light/dark toggle button
└── ui/                 # shadcn/ui primitives

mdx-components.tsx      # MDX element styles (h1, p, code, table…)
next.config.ts          # Next.js + MDX configuration
```

## MDX Components

The `<Callout>` component is available anywhere in MDX:

```mdx
<Callout type="tip" title="Optional title">
  Your message here.
</Callout>
```

Supported types: `info` · `tip` · `warning` · `danger`

## Deployment

Push to GitHub and import the repo on [Vercel](https://vercel.com). No extra configuration needed — Vercel detects Next.js automatically.

```bash
git add .
git commit -m "initial commit"
git push origin main
```
