# Task plan — PageSpeed mobile performance

Source: https://pagespeed.web.dev/analysis/https-cadencehenderson-com/6hnwbcclva?hl=en&form_factor=mobile  
Local Lighthouse mobile (lab): Performance **82**, LCP **3.9s**, TBT **310ms**, TTI **13.4s**, CLS **0**.

## Findings → fixes

- [x] Diagnose: unused JS (~540KiB) from RealScout + GTM + Facebook; oversized git images (~372KiB); CF Images 404 so LCP uses heavy git webp; Calendly CSS render-blocking in `<head>`; analytics `afterInteractive`
- [x] Defer GTM + Facebook Pixel to `lazyOnload`; remove eager Calendly script (on-demand via provider)
- [x] Remove blocking Calendly CSS from root layout (keep non-blocking `CalendlyStyles`)
- [x] Fix SiteImage: honor `sizes`, sync decode for priority, git-first for priority LCP, jpg sibling fallback
- [x] Generate optimized WebP for hero + top section photos; correct `sizes` on homepage sections
- [x] Preload actual LCP git WebP (matches what paints while CF IDs are missing)
- [x] Cache-Control for `/images/*`; CSP allow Google Ads / Facebook / Stripe script hosts
- [x] Dynamic-import below-fold client homepage sections
- [x] Reduce Sora font weights loaded (200/400/600)
- [x] Verify with `next build`; commit; push; open PR

## Review

- Hero LCP now SSR/preloads `/images/hero/homepage.webp` (~88KB vs ~133–436KB before).
- Third-party Calendly no longer loads on initial paint; GTM/FB deferred to `lazyOnload`.
- Follow-up (ops): add `CLOUDFLARE_API_TOKEN` to the Vercel project and run `npm run cloudflare:images:sync` so CF Images stop 404ing for lazy sections.
# Task plan — Implement accuracy recommendations

## Goal

Ship recommendation follow-ups: shared amenity/events module, quarterly SOP, GSC redirect cleanup, soft marketing tighten, Regency inbound note.

## Plan

- [x] `lib/cadence-amenities.ts` single source of truth; wire amenities page, homepage section, FAQs, lifestyle FAQs
- [x] `docs/sop/hoa-amenities-events-accuracy.md` (quarterly check + events workflow)
- [x] Remove off-site RealScout redirects for `/rentals` and `/new-homes/beazer-homes`; keep on-site pages
- [x] Soft marketing: FAQs / realtor “world-class” / “top 10”
- [x] Regency inbound: verified footer-only Cadence link (no inventons) — documented in SOP
- [x] Typecheck, commit, push, update PR #20

## Review

Shared facts module + SOP prevent re-invention. GSC redirect count should drop after deploy when `/rentals` and Beazer hub serve on-site again.

## Follow-up — Audit + news (cadencenv.com/news)

- [x] Audit residual invented HOA calendars / amenity inventons (clean; rental fitness scoped OK)
- [x] On-site `/news` listing from official Cadence WP feed + fallback capture
- [x] On-site `/news/[slug]` article pages (no off-site deep links)
- [x] Sitemap includes news article URLs

## Follow-up — Henderson city events

- [x] Remove past Cadence event cards from `/lifestyle/events`
- [x] Add upcoming City of Henderson special events (`lib/henderson-city-events.ts`, past filtered)
