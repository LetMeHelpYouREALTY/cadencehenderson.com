# Lessons learned

Update this file after user corrections or recurring mistakes. Review at the start of relevant sessions.

## Patterns to avoid

- CadenceNV.com brand colors: sky `#4da9d8`, ink `#212934`, green `#65bc7b`. Do not remap the site to grayscale; match cadencenv.com chrome.
- Serving git `public/images/` first for site photos. Cloudflare Images (`imagedelivery.net`) is primary; git is backup only. Unique catalog IDs must have matching unique files or they never upload and 404.
- Eager third-party scripts (`afterInteractive` GTM/Facebook/Calendly) on every page — they inflate TBT/TTI on PageSpeed mobile. Prefer `lazyOnload` or on-demand loaders.
- Preloading Cloudflare Images URLs when IDs are not uploaded (404) — delays LCP. Priority heroes must preload the git WebP that actually paints.
- Blanket rewriting all git paths to `.webp` when siblings may not exist — causes double 404s. Only catalog paths that have committed WebP.

## Patterns to prefer

- Priority `SiteImage`: paint from optimized git WebP first when CF may 404; lazy images stay Cloudflare-first.
- Defer Calendly to `CalendlyLink` / `CalendlyWhenVisible` (`loadCalendly()`), not a root-layout script.
- Keep `sizes` on every `fill` image; compress homepage band photos to WebP (`npm run images:optimize-webp`).
- Add Google Ads / Facebook hosts to CSP `script-src` when those pixels are enabled, or console CSP errors tank Best Practices.
