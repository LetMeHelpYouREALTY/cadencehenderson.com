# Task plan — PageSpeed mobile (6hnwbcclva) + prior SEO work

## Goals

- Fix mobile PageSpeed (Performance ~41 / LCP ~6s on report `6hnwbcclva`)
- Keep prior SEO/GEO/AEO + www GSC prep intact

## PageSpeed plan

- [x] Remove Calendly `loadOnMount` — load booking assets only when consultation section is near viewport
- [x] Remove eager RealScout UMD from `app/layout.tsx` — load via `RealScoutAutoLoader` + deferred listings
- [x] Defer GTM/Facebook via `DeferredAnalytics` (interaction or 6s)
- [x] Mobile hero srcSet (640/828/1280) + preload 828w
- [x] Verify with local Lighthouse / build (Perf 82, LCP 4.9s, no 3P on first load)
- [x] Commit, push, update PR
- [x] Deploy production (`dpl_WKK662…`, then `dpl_CSfzUg…` server-hero → www)
- [x] Production mobile Lighthouse: **98** / LCP **2.3s** (PSI API quota exhausted for UI recheck)
- [x] Server-render hero LCP `<img>` + drop unnecessary `use client` sections

## Review

- Report `6hnwbcclva` killers (Calendly on mount, RealScout layout Script, analytics, oversized hero) are fixed and live.
- Remaining PSI unused-JS (~250KB) is mostly the Next/React shared chunk — not worth invasive framework surgery at Perf 98.
- GSC sitemap submit still needs Google auth / service-account secrets.

## Prior SEO (done)

- [x] FAQ UI ↔ JSON-LD sync
- [x] NewsArticle / ItemList / HowTo / Place schemas
- [x] apex→www + GSC docs

## Review

(Fill after verify + deploy.)
