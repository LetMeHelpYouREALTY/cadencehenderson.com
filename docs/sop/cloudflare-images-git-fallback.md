# SOP: Cloudflare Images primary, Git fallback

**Applies to:** every Dr. Jan Duffy domain, Vercel project, and shared Cloudflare account setting.  
**Sources:** [Cloudflare Images hosted delivery](https://developers.cloudflare.com/images/optimization/features/), [custom IDs](https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/), [variants](https://developers.cloudflare.com/images/optimization/hosted-images/create-variants/), [Vercel env vars](https://vercel.com/docs/environment-variables).

Machine-readable copy: `docs/sop/cloudflare-images-global-settings.json`.

---

## Rule

1. **Primary storage and delivery:** Cloudflare hosted Images.  
   `https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>`
2. **Backup:** git-tracked files under `public/images/` (and `public/og-image.jpg` for crawlers).
3. **Runtime:** UI uses Cloudflare first. If the request 404s, `SiteImage` / `CloudflareImage` swap to the git path, then a local SVG placeholder.
4. **Never** hotlink a single master PNG for every heading. Never depend on Cloudflare IDs that are not uploaded.

Git is the source of truth for *bytes*. Cloudflare is the source of truth for *delivery*. Upload scripts keep them in sync.

---

## Global Cloudflare settings (all projects)

Use this **same Images account** on every domain unless a project is explicitly split:

| Setting | Value |
|--------|--------|
| Account ID | `2cc579c1ec9e426ed585e933ebf4753b` |
| Account hash | `byE6BTe9lNqo21V57n4aPQ` |
| Dashboard | https://dash.cloudflare.com/2cc579c1ec9e426ed585e933ebf4753b/images |
| Delivery | `https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<id>/<variant>` |

**Per-project isolation** is the ID prefix, not a second account:

| Project | `CLOUDFLARE_IMAGES_PREFIX` | Example ID |
|---------|----------------------------|------------|
| Cadence Henderson (this repo) | `cadence` | `cadence-hero-homepage` |
| Other domain | short slug (`heritage`, `summerlin`, …) | `heritage-hero-homepage` |

---

## Custom ID convention

From a git path under `public/images/`:

```
public/images/hero/homepage.jpg  →  cadence-hero-homepage
public/images/amenities/pool.jpg →  cadence-amenities-pool
```

Pattern: `{prefix}-{relative-path-with-dashes}` (no extension).  
Do not use UUIDs for site photos. UUIDs are fine only for one-off uploads that will never be git-backed.

---

## Standard variants (create once per account)

| ID | Size | Fit |
|----|------|-----|
| `public` | 1920w | scale-down |
| `hero` | 1920×1080 | cover |
| `card` | 800×600 | cover |
| `thumbnail` | 400×300 | cover |
| `avatar` | 200×200 | cover |
| `og` | 1200×630 | cover |
| `gallery` | 1200×800 | cover |

```bash
npm run cloudflare:image-variants
```

---

## Environment variables (every Vercel project)

Set on **Production** (Preview optional). Same names on every project:

| Name | Required | Notes |
|------|----------|--------|
| `CLOUDFLARE_API_TOKEN` | Upload only | Account → **Cloudflare Images → Edit**. Aliases: `CF_API_TOKEN`, `CLOUDFLARE_IMAGES_API_TOKEN` |
| `CLOUDFLARE_ACCOUNT_ID` | Optional | Defaults to the global account above |
| `CLOUDFLARE_IMAGES_ACCOUNT_HASH` | Optional | Defaults to `byE6BTe9lNqo21V57n4aPQ` |
| `CLOUDFLARE_IMAGES_PREFIX` | Optional | Defaults to `cadence` in this repo; **set this on other domains** |

Token is **build-time only**. The site still renders from git if the token is missing or invalid (`--allow-missing-token` on Vercel). An expired token must not fail `next build`.

After adding the token: **Redeploy production** (`vercel --prod` or Deployments → Redeploy). Pushes to `main` may not upload until a production deploy runs with the env var.

---

## Commands (this repo)

| Command | Purpose |
|---------|---------|
| `npm run cloudflare:images:sync` | Variants + git upload + condo clone (Vercel build) |
| `npm run cloudflare:images:upload` | Upload `public/images/**` with custom IDs |
| `npm run cloudflare:images:upload:dry` | Print IDs without uploading |
| `npm run cloudflare:image-variants` | Ensure standard variants |
| `npm run cloudflare:condo-images` | Condo tower photos (`lv-condo-*`) |

Local upload:

```bash
export CLOUDFLARE_API_TOKEN="…"
npm run cloudflare:images:upload -- --skip-existing
```

---

## New domain / new Vercel project checklist

1. Copy `lib/cloudflare-images-config.ts`, `components/cadence/site-image.tsx`, and the upload/variant/sync scripts.
2. Set `CLOUDFLARE_IMAGES_PREFIX` to a unique slug.
3. Put originals in `public/images/{hero,amenities,…}/`.
4. Catalog IDs in that project’s `lib/cloudflare-images.ts` using `img('prefix-folder-slug', '/images/folder/slug.jpg')`.
5. Add the four env vars on the Vercel project (Production).
6. Set build command: `npm run cloudflare:images:sync && npm run build`.
7. Allow `imagedelivery.net` in `images.remotePatterns` and CSP `img-src` (`https:` is enough).
8. Open Graph / JSON-LD: git-tracked `/og-image.jpg` (crawlers do not run the JS fallback).
9. On-page photos: `cfImage(id, variant)` + `SiteImage` or `CloudflareImage`.

---

## App usage

```tsx
import { SiteImage } from '@/components/cadence/site-image'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

<SiteImage
  src={cfImage(SITE_IMAGES.hero.homepage, 'hero')}
  alt="New homes at Cadence Henderson NV 89011"
  fill
  priority
/>
```

- H1: `PageHero` with a unique `SITE_IMAGES.hero.*` photo.
- H2/H3 cards: unique amenity / home / lifestyle IDs — not one shared placeholder.
- Condos: `SITE_IMAGES.condos.*` (`lv-condo-*`); not git-backed.

---

## Fair Housing

Alt text: square footage, amenities, school **names**, commute times. Never “family-friendly,” “safe neighborhood,” or other protected-class proxies.
