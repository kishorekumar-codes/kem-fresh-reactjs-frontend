# KEM FRESH — React + TypeScript Frontend

Organic farming, natural food and sustainable living website built with React, TypeScript and Vite.

## Setup

```bash
cd kem-fresh-reactjs-frontend
npm install
npm run dev        # http://localhost:5173
```

Other scripts: `npm run typecheck`, `npm run build`, `npm run preview`.

## Structure

- `src/components/common` — Button, Logo, SectionHeading, Container
- `src/components/layout` — Header, Navbar (desktop dropdowns), MobileMenu, Footer
- `src/components/home` — Hero, CategoryCards/Card, Market, Farm, Stories/StoryCard
- `src/data` — navigation, category and story content
- `src/config/imageAssets.ts` — **every image path lives here**
- `src/config/links.ts` — placeholder destinations (market URL, journal, etc.)
- `src/styles/style.css` — the only stylesheet (tokens, base, components, breakpoints)

## Replacing dummy images and the logo

All images are local SVG placeholders in `public/images/placeholders/`.
Either overwrite a file (keep the name, or update the extension in `imageAssets.ts`)
or point the entry in `src/config/imageAssets.ts` to a new path or URL.
The logo is `IMAGE_ASSETS.logo`, rendered by `src/components/common/Logo.tsx`.

## Responsive behaviour

Mobile-first with breakpoints at 577px (tablet), 992px (desktop) and 1200px (large desktop).
Mobile uses a hamburger menu, a compact hero, stacked horizontal category cards and a condensed market card.

## Placeholder links

Navigation items use in-page anchors and the Market button points to `https://market.kemfresh.com`.
Update `src/config/links.ts` and `src/data/navigationData.ts` when real pages exist.
