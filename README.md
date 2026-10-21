# Invokyr Fan Guide

Unofficial English wiki for [Invokyr](https://store.steampowered.com/app/3883570/Invokyr/) (Steam AppID **3883570**), aimed at **invokyrguide.wiki**.

Not affiliated with Ludogram or Shochiku. The site is a short set of skimmable guides for the Early Access board: the first night, monsters, dice, idols, the shop, boards, events, players, co-op, achievements, patch notes, Henry’s puzzles, and an FAQ.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/invokyrguide/site.config.ts` | Domain, Steam AppID, analytics, nav |
| Ads | `sites/invokyrguide/ads.config.ts` | Adsterra slot after Quick Answer, still a placeholder |
| Active site | `sites/active` → `invokyrguide` | What the build actually reads |
| Framework | `framework/` | Layout, Quick Answer, ad slot, SEO |
| Content | `content/invokyr/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so pages do not load Google Analytics. The only ad slot is `afterQuickAnswer`, and its id still starts with `ADSTERRA_`, so no ad script loads. The 404 page does not render a slot. See [ADS.md](ADS.md).

## Scripts

```bash
npm install
npm run dev      # http://localhost:4327
npm run build
npm run preview
```

## Routes

- `/` — home (Steam library hero, six image doors, screenshot strip, guide cards)
- `/beginner-guide`
- `/monsters`
- `/dice`
- `/idols`
- `/items`
- `/boards`
- `/events`
- `/players`
- `/co-op`
- `/achievements`
- `/updates`
- `/secrets`
- `/faq`
- `/sitemap.xml` and `/robots.txt`

## Vercel and the custom domain

Do this in the Vercel dashboard when you are ready. Nothing here buys a domain or edits DNS.

1. Import this GitHub repo as a Vercel project. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
2. Deploy. The `*.vercel.app` URL should show the homepage hero before you attach a domain.
3. In the project, open **Settings → Domains** and add `invokyrguide.wiki` (and `www` if you want it).
4. Vercel will show the records to create at the registrar you already use. Add only those records. This repository does not contain them, and setup should not purchase the name.
5. Wait until Vercel marks the domain valid, then confirm `https://invokyrguide.wiki` serves this build.

Steam art on the homepage is stored under `public/images/official/steam/` with `ATTRIBUTION.txt`.
