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
