# Task plan

Audit missing section images; keep Cloudflare Images as primary delivery and git `public/images/` as backup.

## Current plan

- [x] Restore Cloudflare-first `SiteImage` / `CloudflareImage` (CF → git → placeholder)
- [x] Generate unique git files for aliased CF IDs, hash duplicates, and missing sections
- [x] Register unique IDs, host builder logos in git, wire section photos
- [x] Typecheck, verify in browser, commit, push, open PR

## Review

**Done looks like:** Cloudflare URLs are in the HTML; git files exist as backup; unique catalog IDs match unique files; homepage Key Facts / Market Snapshot / Services / FAQ photos paint; inner pages have a body photo.

**Check:** `npx tsc --noEmit` passed. Local Next on :3011 returned 200. Computer-use confirmed photos on `/`, `/contact`, and `/new-homes`. Cloudflare IDs still 404 until production sync with `CLOUDFLARE_API_TOKEN`; native `onError` swaps to git so sections are not blank.

## Review

**Done looks like:** every public page section either paints a Cloudflare URL or falls back to a real git JPEG; unique catalog IDs map to unique files so `npm run cloudflare:images:upload` can populate Cloudflare; no cadencenv.com hotlinks for logos.
