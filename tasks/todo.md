# Task plan — SEO / GEO / AEO

## Completed (2026-10-17 pass 1)

- [x] Page-matched FAQ schema; contact/gallery graphs; noindex `/projects/`
- [x] Homepage services link → `/sell-in-cadence`

## Completed (2026-10-17 pass 2)

- [x] Remove unused `faq-page.tsx` (homepage uses `HOME_FAQS` + `PageGraphSchema`)
- [x] Site-wide `WebSite` + `SearchAction` in `WebsiteSchema` (once in root layout)
- [x] Deduplicate `WebSite` node from per-page `PageGraphSchema`; `containedInPlace` on Cadence Place
- [x] Trim meta descriptions >160 chars on key lifestyle/communities/realtor pages
- [x] `NapStrip` on `/new-homes`, `/lifestyle`, `/rentals`

## Completed (2026-10-17 pass 3)

- [x] `?query=` on `/find-your-home` — scroll + banner (`FindYourHomeQuerySync`) for WebSite SearchAction
- [x] `id="home-search"` on `HomeSearchSection` (aligns with nav `/#home-search` via `HomeFinder` on homepage)
- [x] Trim schools page meta description to ≤160 chars
- [x] `NapStrip` on `/find-your-home`, `/communities`, `/sell-in-cadence`

## Completed (2026-10-17 pass 4)

- [x] `npm run seo:metadata-audit` + GitHub Actions CI (audit, format, lint, build)
- [x] `NapStrip` on contact, maps, realtors, incentives, apartments, past-homesales, gallery, faqs, residents; new-homes strip moved below hero
- [x] Extra `data-speakable` / `.aeo-lead` blocks on communities, find-your-home, new-homes, gallery, faqs, apartments, incentives, contact

## Remaining

- [ ] Production Cloudflare image sync token (ops / env — not code)
