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
