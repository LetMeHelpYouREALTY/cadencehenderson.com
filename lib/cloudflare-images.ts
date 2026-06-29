/**
 * Cloudflare Images utility functions
 * Account: Cadence Henderson
 * Account ID: 2cc579c1ec9e426ed585e933ebf4753b
 * Account hash: byE6BTe9lNqo21V57n4aPQ
 * Image Delivery URL: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/<variant_name>
 *
 * Dashboard: https://dash.cloudflare.com/2cc579c1ec9e426ed585e933ebf4753b/images
 * Image IDs in SITE_IMAGES must match exactly what appears in the dashboard.
 */

const CLOUDFLARE_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ'
const BASE_URL = `https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}`

/** Known-working Cadence images (cadencenv.com) so photos appear until Cloudflare IDs are set. */
const CADENCE_PHOTOS = {
  hero:
    'https://cadencenv.com/wp-content/uploads/2021/01/news-home-box-288x300.png',
  community:
    'https://cadencenv.com/wp-content/uploads/2021/01/news-home-box-288x300.png',
} as const

/**
 * Image variants - configure these in Cloudflare Dashboard > Images > Variants
 * Recommended settings:
 * - public: Fit=scale-down, Width=1920 (default, full quality)
 * - hero: Fit=cover, Width=1920, Height=1080 (hero sections)
 * - card: Fit=cover, Width=600, Height=400 (cards/grids)
 * - thumbnail: Fit=cover, Width=300, Height=200 (small thumbnails)
 * - avatar: Fit=cover, Width=200, Height=200 (profile images)
 * - og: Fit=cover, Width=1200, Height=630 (social sharing)
 * - gallery: Fit=cover, Width=1200, Height=800 (gallery lightbox)
 */
export type ImageVariant = 'public' | 'hero' | 'card' | 'thumbnail' | 'avatar' | 'og' | 'gallery'

/**
 * Placeholder image for missing/unset images (e.g. Cloudflare 404).
 * Use in img onError: e.currentTarget.src = PLACEHOLDER_IMAGE
 */
export const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3C/svg%3E'

/**
 * Resolve image URL: Cloudflare delivery URL or full URL (e.g. cadencenv.com) as-is.
 * Use full URLs in SITE_IMAGES when Cloudflare IDs are not set up so photos still appear.
 */
export function cfImage(imageId: string, _variant: ImageVariant = 'public'): string {
  if (!imageId) return PLACEHOLDER_IMAGE
  if (imageId.startsWith('http://') || imageId.startsWith('https://')) return imageId
  return `${BASE_URL}/${imageId}/public`
}

/**
 * Check if a URL is a Cloudflare Images URL
 */
export function isCloudflareImage(url: string): boolean {
  return url.startsWith(BASE_URL)
}

// ============================================================================
// SITE IMAGES CATALOG — Cadence Henderson
// Image IDs must match exactly what appears in Cloudflare Dashboard > Images.
// URL format: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<imageId>/public
// If photos don't appear: open docs/cloudflare-images-setup.md and follow the
// steps to get the correct IDs from the dashboard and update the values below.
// ============================================================================

export const SITE_IMAGES = {
  // Hero/Banner — use cadencenv.com URLs so photos appear; replace with Cloudflare IDs when set up
  hero: {
    homepage: CADENCE_PHOTOS.hero,
    newHomes: CADENCE_PHOTOS.community,
    lifestyle: CADENCE_PHOTOS.community,
    contact: CADENCE_PHOTOS.hero,
    rentals: CADENCE_PHOTOS.community,
    gallery: CADENCE_PHOTOS.community,
    news: CADENCE_PHOTOS.hero,
    faqs: CADENCE_PHOTOS.community,
    realtors: CADENCE_PHOTOS.hero,
    events: CADENCE_PHOTOS.community,
    amenities: CADENCE_PHOTOS.community,
    schools: CADENCE_PHOTOS.community,
    parksTrails: CADENCE_PHOTOS.community,
    shopping: CADENCE_PHOTOS.community,
  },

  // Builder Images (8 builders)
  builders: {
    beazer: CADENCE_PHOTOS.community,
    century: CADENCE_PHOTOS.community,
    drHorton: CADENCE_PHOTOS.community,
    lennar: CADENCE_PHOTOS.community,
    richmond: CADENCE_PHOTOS.community,
    storybook: CADENCE_PHOTOS.community,
    taylorMorrison: CADENCE_PHOTOS.community,
    woodside: CADENCE_PHOTOS.community,
  },

  // Amenities Images
  amenities: {
    centralPark: CADENCE_PHOTOS.community,
    pool: CADENCE_PHOTOS.community,
    splashPad: CADENCE_PHOTOS.community,
    fitness: CADENCE_PHOTOS.community,
    dogPark: CADENCE_PHOTOS.community,
    playground: CADENCE_PHOTOS.community,
    trails: CADENCE_PHOTOS.community,
    sportsCourts: CADENCE_PHOTOS.community,
    clubhouse: CADENCE_PHOTOS.community,
  },

  // Lifestyle/Community Images
  lifestyle: {
    community: CADENCE_PHOTOS.community,
    families: CADENCE_PHOTOS.community,
    events: CADENCE_PHOTOS.community,
    concert: CADENCE_PHOTOS.community,
    farmersMarket: CADENCE_PHOTOS.community,
    movieNight: CADENCE_PHOTOS.community,
    yoga: CADENCE_PHOTOS.community,
    foodTruck: CADENCE_PHOTOS.community,
  },

  // Home Exterior/Interior Images
  homes: {
    exterior1: CADENCE_PHOTOS.community,
    exterior2: CADENCE_PHOTOS.community,
    exterior3: CADENCE_PHOTOS.community,
    interior1: CADENCE_PHOTOS.community,
    interior2: CADENCE_PHOTOS.community,
    kitchen: CADENCE_PHOTOS.community,
    livingRoom: CADENCE_PHOTOS.community,
    backyard: CADENCE_PHOTOS.community,
  },

  // Rental Communities
  rentals: {
    americanHomes: CADENCE_PHOTOS.community,
    element12: CADENCE_PHOTOS.community,
    adler: CADENCE_PHOTOS.community,
  },

  // Gallery Images
  gallery: {
    parkVista: CADENCE_PHOTOS.community,
    newHome: CADENCE_PHOTOS.hero,
    resortPool: CADENCE_PHOTOS.community,
    concert: CADENCE_PHOTOS.community,
    communityGathering: CADENCE_PHOTOS.community,
    playground: CADENCE_PHOTOS.community,
    fitnessCenter: CADENCE_PHOTOS.community,
    modernExterior: CADENCE_PHOTOS.community,
    walkingTrails: CADENCE_PHOTOS.community,
    communityEvent: CADENCE_PHOTOS.community,
    luxuryInterior: CADENCE_PHOTOS.community,
    dogPark: CADENCE_PHOTOS.community,
  },

  // Location/Map Images
  location: {
    mapOverview: CADENCE_PHOTOS.community,
    welcomeCenter: CADENCE_PHOTOS.community,
    aerialView: CADENCE_PHOTOS.community,
  },

  // Agent/Branding — Dr. Jan Duffy
  agent: {
    headshot: CADENCE_PHOTOS.hero,
    logo: CADENCE_PHOTOS.community,
    bhhs: CADENCE_PHOTOS.community,
  },

  // Icons/Graphics
  icons: {
    amenitiesBox: CADENCE_PHOTOS.community,
    lifestyleBox: CADENCE_PHOTOS.community,
    homesBox: CADENCE_PHOTOS.community,
  },

  /**
   * Las Vegas high-rise condo towers — cloned from lasvegashighrisecondoliving.com/condo/
   * Upload via: npm run cloudflare:condo-images
   * Dashboard: https://dash.cloudflare.com/2cc579c1ec9e426ed585e933ebf4753b/images
   */
  condos: {
    allure: 'lv-condo-allure',
    juhl: 'lv-condo-juhl',
    metropolis: 'lv-condo-metropolis',
    mgmSignature: 'lv-condo-mgm-signature',
    newportLofts: 'lv-condo-newport-lofts',
    oneQueensridge: 'lv-condo-one-queensridge',
    palmsPlace: 'lv-condo-palms-place',
    panoramaTowers: 'lv-condo-panorama-towers',
    parkAvenue: 'lv-condo-park-avenue',
    parkTowers: 'lv-condo-park-towers',
    sky: 'lv-condo-sky',
    sohoLofts: 'lv-condo-soho-lofts',
    cosmopolitan: 'lv-condo-cosmopolitan',
    manhattan: 'lv-condo-manhattan',
    martin: 'lv-condo-martin',
    ogden: 'lv-condo-ogden',
    platinum: 'lv-condo-platinum',
    waldorfAstoria: 'lv-condo-waldorf-astoria',
    trump: 'lv-condo-trump',
    turnberryPlace: 'lv-condo-turnberry-place',
    turnberryTowers: 'lv-condo-turnberry-towers',
    vdara: 'lv-condo-vdara',
    veerTowers: 'lv-condo-veer-towers',
  },
} as const

// ============================================================================
// HELPER FUNCTIONS FOR COMMON USE CASES
// ============================================================================

/**
 * Get hero image URL for a specific page
 */
export function getHeroImage(page: keyof typeof SITE_IMAGES.hero, variant: ImageVariant = 'hero'): string {
  return cfImage(SITE_IMAGES.hero[page], variant)
}

/**
 * Get builder image URL
 */
export function getBuilderImage(builder: keyof typeof SITE_IMAGES.builders, variant: ImageVariant = 'card'): string {
  return cfImage(SITE_IMAGES.builders[builder], variant)
}

/**
 * Get amenity image URL
 */
export function getAmenityImage(amenity: keyof typeof SITE_IMAGES.amenities, variant: ImageVariant = 'card'): string {
  return cfImage(SITE_IMAGES.amenities[amenity], variant)
}

/**
 * Get gallery image URL
 */
export function getGalleryImage(image: keyof typeof SITE_IMAGES.gallery, variant: ImageVariant = 'gallery'): string {
  return cfImage(SITE_IMAGES.gallery[image], variant)
}

/**
 * Get home image URL
 */
export function getHomeImage(image: keyof typeof SITE_IMAGES.homes, variant: ImageVariant = 'card'): string {
  return cfImage(SITE_IMAGES.homes[image], variant)
}

/**
 * Get Las Vegas high-rise condo tower image URL (Cloudflare Images).
 */
export function getCondoImage(
  tower: keyof typeof SITE_IMAGES.condos,
  variant: ImageVariant = 'card',
): string {
  return cfImage(SITE_IMAGES.condos[tower], variant)
}
