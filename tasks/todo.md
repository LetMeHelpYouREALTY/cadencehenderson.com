# Task plan

Audit missing section images; keep Cloudflare Images as primary delivery and git `public/images/` as backup.

## Current plan

- [x] Restore Cloudflare-first `SiteImage` / `CloudflareImage` (CF → git → placeholder)
- [x] Generate unique git files for aliased CF IDs, hash duplicates, and missing sections
- [x] Register unique IDs, host builder logos in git, wire section photos
- [x] Typecheck, verify in browser, commit, push, open PR

## Review

**Done looks like:** Cloudflare URLs are in the HTML; git files exist as backup; unique catalog IDs match unique files; homepage Key Facts / Market Snapshot / Services / FAQ photos paint; inner pages have a body photo.

**Check:** `npx tsc --noEmit` passed. Unique catalog IDs map to unique files. Remaining leftover sections (schedule CTA, disclaimer, village/builder hubs, Elysian/Ascend/Avela) now have dedicated git-backed IDs. Cloudflare IDs still 404 until production sync with `CLOUDFLARE_API_TOKEN`; native `onError` swaps to git so sections are not blank.

## Remaining

- [ ] Replay unique catalog + files onto a branch from `main` so they can ship without the stacked draft chain
- [ ] Production `CLOUDFLARE_API_TOKEN` upload (`npm run cloudflare:images:sync` on Vercel)

## Review

**Done looks like:** every public page section either paints a Cloudflare URL or falls back to a real git JPEG; unique catalog IDs map to unique files so `npm run cloudflare:images:upload` can populate Cloudflare; no cadencenv.com hotlinks for logos.
