# Task plan — SEO / GEO / AEO + www GSC prep (2026-11-10)

## Goals

- Optimize for SEO, GEO, AEO with updated schemas so major sections on every page can rank
- Audit and fix code/schema errors
- Prepare site for Google Search Console with **www** as primary
- Commit, push, deploy production

## Plan

- [x] P0: Sync `/faqs` visible Q&A with FAQPage JSON-LD (single source)
- [x] P0: Confirm `/gallery` FAQ schema matches visible FAQ (already matched)
- [x] P0: Add Article schema on `/news/[slug]`
- [x] P1: ItemList schema on hub pages (new-homes, rentals, news, communities)
- [x] P1: Harden apex→www in vercel.json (+ keep middleware)
- [x] P1: SearchAction already honored via FindYourHomeQuerySync
- [x] P1: HowTo sell schema on `/sell-in-cadence`; Place `@id` on WebPage + RealEstateAgent
- [x] Audit: `tsc --noEmit` clean on touched tree
- [x] Commit, push, production deploy, update PR

## Review

- FAQ schema/UI now share `lib/faqs-page-data.ts` (removed mismatched “Cadence Henderson…” schema-only questions and community-only address confusion).
- News articles emit `NewsArticle` + local WebP heroes; hubs emit `ItemList`.
- www primary: middleware + vercel.json host redirect + metadataBase/canonicals/sitemap/robots host.
- GSC ops: add URL-prefix property `https://www.cadencehenderson.com`, submit sitemap, confirm apex 301s (see `GOOGLE_SEO_SETUP.md`).
