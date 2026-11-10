---
name: realscout-calendly-gsc
description: RealScout widgets, Calendly integration, and Google Search Console for Cadence Henderson. Use when working on listing widgets, IDX, scheduling/Calendly, CSP for these domains, or GSC/sitemap/indexing.
---

# RealScout, Calendly, and Google Search Console

## When to Use

Apply when the task involves: RealScout widgets or IDX, Calendly links/widgets/scheduling, Content-Security-Policy for RealScout or Calendly domains, or Google Search Console (sitemap, indexing, coverage, URL inspection).

---

## RealScout

- **Script loading:** Load once, globally, in root layout (`app/layout.tsx`). Use Next.js `<Script>` with `strategy="lazyOnload"` so widgets do not compete with LCP/TBT.
  - `https://em.realscout.com/widgets/realscout-web-components.umd.js` (type="module")
  - Optional embed: `https://em.realscout.com/embed/${NEXT_PUBLIC_REALSCOUT_EMBED_ID}.js`
- **Widgets:** Use `createElement()` for custom elements (e.g. `realscout-office-listings`) to avoid JSX intrinsic type errors. Do not use raw `<realscout-*>` in TSX unless typed.
- **CSP:** Both domains must be allowed:
  - **script-src:** `https://em.realscout.com` and `https://www.realscout.com` (script loads from em; API calls go to www).
  - **connect-src:** same two domains.
- **Data:** Use `CONTACT_INFO.realScoutSearchUrl` for “View Homes” or search links; do not hardcode.
- **IDX/MLS:** Do not modify `components/idx/*` without explicit approval. Always keep MLS disclaimer and listing attribution.

---

## Calendly

- **Script and badge:** Do not eagerly load Calendly in root layout. Use `CalendlyStyles` + `CalendlyProvider` in layout; load `widget.js` on demand via `loadCalendly()` / `CalendlyWhenVisible` / `CalendlyLink` click.
- **Components:** Use only from `@/components/calendly`:
  - **CalendlyLink** — opens popup; use with `Button asChild` for valid markup.
  - **CalendlyInlineWidget** — embedded scheduler; use inside a Client Component or with `CalendlyWhenVisible` for lazy load.
  - **CalendlyProvider** / **useCalendly** — from `calendly-loader`; required for CalendlyLink and inline widget.
- **URL:** Use `CONTACT_INFO.calendlyUrl`; do not hardcode. Load script once; do not load multiple times or tie widget render to React state in a way that re-injects script.
- **CSP:** Allow `https://calendly.com` and `https://assets.calendly.com` in script-src and connect-src (already in next.config if present).

---

## Google Search Console (GSC)

- **Sitemap:** Submit `https://www.cadencehenderson.com/sitemap.xml` in GSC (Sitemaps). Sitemap is generated from `lib/sitemap-data.ts` and served by `app/sitemap.xml/route.ts` (or the built-in sitemap). Ensure all public pages (including `/past-homesales`) are listed.
- **robots.txt:** Must declare `Sitemap:` and preferably `Host:` (see `app/robots.ts`). Allow `/`; disallow `/api/`, `/admin/`.
- **Indexing:** Use “Request indexing” for new or updated key URLs. Fix coverage issues (e.g. duplicate without user-selected canonical, soft 404, blocked by robots).
- **Consistency with SEO:** Metadata, canonicals, and schema must align with the **seo-geo-aeo** skill (NAP, LocalBusiness/RealEstateAgent, WebPage, FAQ where applicable). GSC reports reflect what’s in the sitemap and what’s crawlable; schema and meta affect how results look.
- **No duplicate content:** Canonical URLs set per page; avoid duplicate titles/descriptions across pages.

---

## Project Context

- **Site:** Cadence Henderson; Next.js 15 App Router.
- **Contact:** All NAP and URLs from `@/components/cadence/contact-info` (CONTACT_INFO).
- **Agent:** Dr. Jan Duffy, REALTOR®; license S.0197614.LLC; Berkshire Hathaway HomeServices Nevada Properties.

---

## Quick Checklist

- **RealScout:** Script once in layout; createElement for custom tags; CSP includes em.realscout.com and www.realscout.com; do not change idx/* without approval.
- **Calendly:** CalendlyLink / CalendlyInlineWidget from @/components/calendly; CalendlyProvider in layout; CONTACT_INFO.calendlyUrl; script loaded once.
- **GSC:** Sitemap submitted; robots.txt correct; canonicals and schema aligned with seo-geo-aeo; fix coverage issues when reported.
