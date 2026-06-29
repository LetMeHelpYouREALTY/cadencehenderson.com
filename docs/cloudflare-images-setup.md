# Cloudflare Images – Fix photos not appearing

If Cloudflare photos don’t show on the site (grey placeholders or broken images), the **image IDs in code don’t match** the IDs in your Cloudflare Images account.

## 1. Test the URLs

Open these in your browser. If you get **404**, the ID is wrong.

| Image ID used in code | Test URL |
|------------------------|----------|
| `CendenceDrJanDuffy` | https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/CendenceDrJanDuffy/public |
| `cadence_008_resized` | https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/cadence_008_resized/public |
| `Workout-Area-at-Cadence-CentralPark` | https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/Workout-Area-at-Cadence-CentralPark/public |

- If a URL **loads** → that ID is correct; keep it.
- If a URL **404s** → get the correct ID from the dashboard (step 2) and update the code (step 3).

## 2. Get the correct Image IDs from Cloudflare

1. Open **Dashboard**: https://dash.cloudflare.com/2cc579c1ec9e426ed585e933ebf4753b/images  
2. Go to **Images**.
3. For each image you use on the site, click it and copy the **Image ID** (or the value shown as the image identifier).  
   - It might look like `CendenceDrJanDuffy`, `cadence_008_resized`, or a UUID.  
   - Use the **exact** string (case-sensitive).

## 3. Update the code

Edit **`lib/cloudflare-images.ts`** and update the `SITE_IMAGES` object so every value is an Image ID that exists in your dashboard.

- The catalog uses only **three** image IDs for the whole site:  
  `CendenceDrJanDuffy`, `cadence_008_resized`, `Workout-Area-at-Cadence-CentralPark`.  
- Replace each of these with the **exact** ID from the dashboard for the image you want (e.g. hero, amenities, lifestyle).  
- If you only have one image uploaded, use that ID for every entry in `SITE_IMAGES` until you upload more.

## 4. Redeploy

After saving `lib/cloudflare-images.ts`, commit, push, and deploy to production (e.g. `vercel --prod`).  
Photos will appear once the IDs in code match the dashboard.

## 5. Las Vegas high-rise condo photos (cloned source)

23 tower header images from [lasvegashighrisecondoliving.com/condo/](https://lasvegashighrisecondoliving.com/condo/) are cataloged in `lib/cloudflare-images.ts` under `SITE_IMAGES.condos` with IDs like `lv-condo-allure`, `lv-condo-panorama-towers`, etc.

### Upload to Cloudflare Images

1. Create an API token with **Account → Cloudflare Images → Edit**.
2. Run:

```bash
export CLOUDFLARE_API_TOKEN="your_token"
export CLOUDFLARE_ACCOUNT_ID="2cc579c1ec9e426ed585e933ebf4753b"  # optional; this is the default
npm run cloudflare:condo-images
```

3. Verify a sample URL loads, e.g.  
   https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/lv-condo-panorama-towers/public

Manifest output: `lib/condo-images-manifest.json` (updated after each run).

Download only (no upload):

```bash
npm run cloudflare:condo-images:download
```
