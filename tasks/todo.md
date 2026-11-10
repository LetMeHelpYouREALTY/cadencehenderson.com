# Task plan — PageSpeed mobile + GSC coverage (2026-11-10)

## Sources

- PageSpeed mobile: https://pagespeed.web.dev/analysis/https-cadencehenderson-com/c1132q0lv5
- Local Lighthouse (mobile simulate): Performance **70**, LCP **13.0s**, CLS 0, TBT 60ms
- GSC exports (2026-11-09): Coverage, Coverage Drilldown, Latest links, More sample links

## Findings

### PageSpeed / LCP

- [x] LCP element = homepage hero; load delay ~66% of LCP
- [x] `imagedelivery.net/.../cadence-hero-homepage/hero` returns **404** → SiteImage falls back to 436KB JPEG
- [x] Oversized git JPEGs (hero, central-park, exterior-1, market-snapshot)
- [x] Render-blocking Calendly CSS in `<head>`
- [x] Calendly + RealScout third-party weight; Calendly script was `afterInteractive`
- [x] No `CLOUDFLARE_API_TOKEN` on Vercel project; hosted Images never uploaded

### Search Console coverage

- Indexed ~79 / Not indexed ~46 (as of 2026-11-05)
- Critical: Discovered–not indexed **32**, Crawled–not indexed **9**, redirect **3**, 404 **1**, robots **1**
- Drilldown URLs are mostly village/rental/lifestyle hubs already in sitemap
- External links: only **regencyvegas.com** samples (thin referring domains)

### Deploy note

- Production Vercel target was last deployed from `cursor/remove-inaccurate-hoa-events-099b`, not `main`

## Fixes in this branch

- [x] Compress critical images + add WebP siblings
- [x] Gate CF delivery behind `NEXT_PUBLIC_CLOUDFLARE_IMAGES_LIVE` (git WebP until live)
- [x] Remove head Calendly CSS; Calendly script → `lazyOnload`
- [x] Drop off-site RealScout redirects for `/rentals*` and `/new-homes/beazer-homes`
- [x] Sitemap excludes only permanent on-site redirect aliases
- [x] Homepage key-facts internal links to discovered hubs

## Ops follow-up (needs secrets / GSC)

- [ ] Add Cloudflare Images token + account ID; run `npm run cloudflare:images:sync`
- [ ] Set `NEXT_PUBLIC_CLOUDFLARE_IMAGES_LIVE=1` after upload
- [ ] Point Vercel production deployments at `main`
- [ ] GSC: Inspect + Request indexing for the 32 discovered URLs after deploy
- [ ] Earn/add more referring domains beyond regencyvegas.com

## Review

Mobile LCP should drop from ~13s to a few seconds once the hero loads from local WebP without waiting on CF 404. Indexing improves by keeping rental/Beazer hubs on-site and linking them from the homepage; Google still decides crawl/index — request indexing after production ships on `main`.
