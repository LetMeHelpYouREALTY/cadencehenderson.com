# Task plan — PageSpeed mobile (6hnwbcclva) + prior SEO work

## Goals

- Fix mobile PageSpeed (Performance ~41 / LCP ~6s on report `6hnwbcclva`)
- Keep prior SEO/GEO/AEO + www GSC prep intact

## PageSpeed plan

- [x] Remove Calendly `loadOnMount` — load booking assets only when consultation section is near viewport
- [x] Remove eager RealScout UMD from `app/layout.tsx` — load via `RealScoutAutoLoader` + deferred listings
- [x] Defer GTM/Facebook via `DeferredAnalytics` (interaction or 6s)
- [x] Mobile hero srcSet (640/828/1280) + preload 828w
- [ ] Verify with local Lighthouse / build
- [ ] Commit, push, update PR, deploy production

## Prior SEO (done)

- [x] FAQ UI ↔ JSON-LD sync
- [x] NewsArticle / ItemList / HowTo / Place schemas
- [x] apex→www + GSC docs

## Review

(Fill after verify + deploy.)
