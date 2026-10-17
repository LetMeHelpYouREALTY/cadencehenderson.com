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

## Remaining

- [ ] Optional: handle `?query=` on find-your-home for SearchAction URL template
- [ ] Production Cloudflare image sync token
