/**
 * Global Cloudflare Images settings — shared SOP for all domains/projects.
 *
 * Primary delivery: imagedelivery.net (hosted Images)
 * Fallback: git-tracked files under public/images/
 *
 * Account ID and hash are Cadence Henderson / Dr. Jan Duffy production defaults.
 * Override with env on other projects; do not hardcode per-page URLs.
 */

export const CLOUDFLARE_IMAGES_CONFIG = {
  accountId:
    process.env.CLOUDFLARE_ACCOUNT_ID || '2cc579c1ec9e426ed585e933ebf4753b',
  accountHash:
    process.env.CLOUDFLARE_IMAGES_ACCOUNT_HASH || 'byE6BTe9lNqo21V57n4aPQ',
  projectPrefix: process.env.CLOUDFLARE_IMAGES_PREFIX || 'cadence',
  dashboardImagesUrl:
    'https://dash.cloudflare.com/2cc579c1ec9e426ed585e933ebf4753b/images',
} as const

export const CLOUDFLARE_IMAGES_DELIVERY_BASE = `https://imagedelivery.net/${CLOUDFLARE_IMAGES_CONFIG.accountHash}`

/**
 * Hosted Images delivery is off until assets are uploaded and this flag is set.
 * Missing CF objects 404 and force SiteImage through a slow client fallback, which
 * destroys mobile LCP (PageSpeed: ~13s when imagedelivery.net returns 404).
 *
 * Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_LIVE=1 on Vercel after
 * `npm run cloudflare:images:sync` succeeds.
 */
export const CLOUDFLARE_IMAGES_LIVE =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_LIVE === '1'

/**
 * Standard variants for every project. Create via
 * `npm run cloudflare:image-variants` (Images API) or the dashboard.
 */
export const CLOUDFLARE_IMAGE_VARIANTS = {
  public: { width: 1920, fit: 'scale-down' as const },
  hero: { width: 1920, height: 1080, fit: 'cover' as const },
  card: { width: 800, height: 600, fit: 'cover' as const },
  thumbnail: { width: 400, height: 300, fit: 'cover' as const },
  avatar: { width: 200, height: 200, fit: 'cover' as const },
  og: { width: 1200, height: 630, fit: 'cover' as const },
  gallery: { width: 1200, height: 800, fit: 'cover' as const },
} as const

export type CloudflareImageVariant = keyof typeof CLOUDFLARE_IMAGE_VARIANTS

/**
 * public/images/hero/homepage.jpg → cadence-hero-homepage
 * /images/hero/homepage.jpg → cadence-hero-homepage
 */
export function cloudflareIdFromGitPath(
  relativePath: string,
  prefix: string = CLOUDFLARE_IMAGES_CONFIG.projectPrefix,
): string {
  const cleaned = relativePath
    .replace(/^\/?images\//, '')
    .replace(/^public\/images\//, '')
    .replace(/\.[^.]+$/, '')
    .replace(/\\/g, '/')
  return `${prefix}-${cleaned.replace(/\//g, '-')}`
}
