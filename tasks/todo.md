# Task plan — SEO / GEO / AEO (2026-10-17)

## Completed

- [x] Remove site-wide FAQPage schema from root layout (FAQ only where visible on page)
- [x] Contact: single `CONTACT_FAQS` source for visible FAQ + `PageGraphSchema` in layout
- [x] Gallery: server-rendered `PageGraphSchema` in layout; visible FAQ matches JSON-LD
- [x] Crawl: `noindex` + robots disallow for `/projects/`
- [x] Internal link: homepage services card → `/sell-in-cadence`

## Review

Build: `npm run build` passed after changes.

## Remaining (future)

- [ ] Align `components/schema/faq-page.tsx` copy with `HOME_FAQS` or delete if unused
- [ ] Audit title/meta length on long-tail lifestyle pages
- [ ] Production `CLOUDFLARE_API_TOKEN` for image CDN sync
