# Task plan

Replace placeholder images with unique, heading-appropriate photos for H1, H2, and H3 on each public page. Standardize Cloudflare Images as primary storage with git as backup for all domains and projects.

## Current plan

- [x] Inventory pages, heading levels, and current placeholder slots
- [x] Generate unique photorealistic images (Cadence Henderson / desert Southwest)
- [x] Store images under `public/images/` and map them in `SITE_IMAGES`
- [x] Add `PageHero` so every inner-page H1 has a unique photo
- [x] Wire unique H2 section photos and H3 card photos (no shared placeholder)
- [x] SOP: Cloudflare Images primary, git fallback, global settings, Vercel sync
- [x] Verify pages render images (dev server / curl)
- [x] Commit, push, open PR
- [x] Unique gallery, icon, and leftover section photos on the landable `main` branch

## Review

- **Summary:** Cloudflare Images is primary (`imagedelivery.net` / hash `byE6BTe9lNqo21V57n4aPQ`). Git `public/images/` is the backup. Custom IDs `{prefix}-{folder}-{slug}`. Vercel build runs `npm run cloudflare:images:sync`. SOP: `docs/sop/cloudflare-images-git-fallback.md`. Global settings JSON for reuse on other domains. Landable unique catalog lives on `cursor/unique-cf-images-82d1` (PR vs `main`): 139 unique CF IDs, 139 unique git files, 0 hash-dupes. Gallery, icons, and leftover inner-page H2s no longer alias shared amenity/home IDs.
- **Verification:** Dev server HTML emits unique `cadence-*` delivery URLs per heading. Git files return 200. Cloudflare HEAD for new IDs is 404 until `CLOUDFLARE_API_TOKEN` is set on the Vercel project and production deploys. `SiteImage` / `CloudflareImage` swap to git on 404.
- **Notes:** Set token on every Vercel project (Production), then `vercel --prod`. Prefix other domains with a unique `CLOUDFLARE_IMAGES_PREFIX`.
