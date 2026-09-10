/**
 * Cloudflare Images catalog — Cadence Henderson
 *
 * SOP: Cloudflare hosted Images is primary; git files under public/images/ are fallback.
 * Custom IDs: cadence-{group}-{slug}
 * Delivery: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/<variant>
 *
 * Dashboard: https://dash.cloudflare.com/2cc579c1ec9e426ed585e933ebf4753b/images
 */

import {
  CLOUDFLARE_IMAGES_DELIVERY_BASE,
  type CloudflareImageVariant,
} from '@/lib/cloudflare-images-config'

export type ImageVariant = CloudflareImageVariant

const BASE_URL = CLOUDFLARE_IMAGES_DELIVERY_BASE

export const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"%3E%3C/rect%3E%3C/svg%3E'

/** Custom Cloudflare Image ID → git-tracked public path */
export const LOCAL_IMAGES: Record<string, string> = {}

function img(id: string, local: string): string {
  LOCAL_IMAGES[id] = local
  return id
}

export const SITE_IMAGES = {
  hero: {
    homepage: img('cadence-hero-homepage', '/images/hero/homepage.jpg'),
    newHomes: img('cadence-hero-new-homes', '/images/hero/new-homes.jpg'),
    lifestyle: img('cadence-hero-lifestyle', '/images/hero/lifestyle.jpg'),
    contact: img('cadence-hero-contact', '/images/hero/contact.jpg'),
    rentals: img('cadence-hero-rentals', '/images/hero/rentals.jpg'),
    gallery: img('cadence-hero-gallery', '/images/hero/gallery.jpg'),
    news: img('cadence-hero-news', '/images/hero/news.jpg'),
    faqs: img('cadence-hero-faqs', '/images/hero/faqs.jpg'),
    realtors: img('cadence-hero-realtors', '/images/hero/realtors.jpg'),
    events: img('cadence-hero-events', '/images/hero/events.jpg'),
    amenities: img('cadence-hero-amenities', '/images/hero/amenities.jpg'),
    schools: img('cadence-hero-schools', '/images/hero/schools.jpg'),
    parksTrails: img('cadence-hero-parks-trails', '/images/hero/parks-trails.jpg'),
    shopping: img('cadence-hero-shopping', '/images/hero/shopping.jpg'),
    maps: img('cadence-hero-maps', '/images/hero/maps.jpg'),
    residents: img('cadence-hero-residents', '/images/hero/residents.jpg'),
    pastHomesales: img('cadence-hero-past-homesales', '/images/hero/past-homesales.jpg'),
    animalHospital: img('cadence-hero-animal-hospital', '/images/hero/animal-hospital.jpg'),
    community: img('cadence-hero-community', '/images/hero/community.jpg'),
    beazerHomes: img('cadence-hero-beazer-homes', '/images/hero/beazer-homes.jpg'),
    centuryCommunities: img('cadence-hero-century-communities', '/images/hero/century-communities.jpg'),
    drHorton: img('cadence-hero-dr-horton', '/images/hero/dr-horton.jpg'),
    lennar: img('cadence-hero-lennar', '/images/hero/lennar.jpg'),
    richmondAmerican: img('cadence-hero-richmond-american', '/images/hero/richmond-american.jpg'),
    storybookHomes: img('cadence-hero-storybook-homes', '/images/hero/storybook-homes.jpg'),
    taylorMorrison: img('cadence-hero-taylor-morrison', '/images/hero/taylor-morrison.jpg'),
    woodsideHomes: img('cadence-hero-woodside-homes', '/images/hero/woodside-homes.jpg'),
    rentalAmericanHomes: img('cadence-hero-american-homes', '/images/hero/american-homes.jpg'),
    rentalElement12: img('cadence-hero-element-12', '/images/hero/element-12.jpg'),
    rentalAdler: img('cadence-hero-adler', '/images/hero/adler.jpg'),
    findYourHome: img('cadence-hero-find-your-home', '/images/hero/find-your-home.jpg'),
    incentives: img('cadence-hero-incentives', '/images/hero/incentives.jpg'),
    pocketParks: img('cadence-hero-pocket-parks', '/images/hero/pocket-parks.jpg'),
    restaurants: img('cadence-hero-restaurants', '/images/hero/restaurants.jpg'),
    entertainment: img('cadence-hero-entertainment', '/images/hero/entertainment.jpg'),
    activities: img('cadence-hero-activities', '/images/hero/activities.jpg'),
    lifeAtCadence: img('cadence-hero-life-at-cadence', '/images/hero/life-at-cadence.jpg'),
    realtorToolkit: img('cadence-hero-realtor-toolkit', '/images/hero/realtor-toolkit.jpg'),
    disclaimer: img('cadence-hero-disclaimer', '/images/hero/disclaimer.jpg'),
    apartments: img('cadence-hero-apartments', '/images/hero/apartments.jpg'),
    ascend: img('cadence-hero-ascend', '/images/hero/ascend.jpg'),
    avela: img('cadence-hero-avela', '/images/hero/avela.jpg'),
    elysian: img('cadence-hero-elysian', '/images/hero/elysian.jpg'),
  },

  builders: {
    beazer: img('cadence-builders-beazer', '/images/builders/beazer.jpg'),
    century: img('cadence-builders-century', '/images/builders/century.jpg'),
    drHorton: img('cadence-builders-dr-horton', '/images/builders/dr-horton.jpg'),
    lennar: img('cadence-builders-lennar', '/images/builders/lennar.jpg'),
    richmond: img('cadence-builders-richmond', '/images/builders/richmond.jpg'),
    storybook: img('cadence-builders-storybook', '/images/builders/storybook.jpg'),
    taylorMorrison: img('cadence-builders-taylor-morrison', '/images/builders/taylor-morrison.jpg'),
    woodside: img('cadence-builders-woodside', '/images/builders/woodside.jpg'),
  },

  amenities: {
    centralPark: img('cadence-amenities-central-park', '/images/amenities/central-park.jpg'),
    pool: img('cadence-amenities-pool', '/images/amenities/pool.jpg'),
    splashPad: img('cadence-amenities-splash-pad', '/images/amenities/splash-pad.jpg'),
    fitness: img('cadence-amenities-fitness', '/images/amenities/fitness.jpg'),
    dogPark: img('cadence-amenities-dog-park', '/images/amenities/dog-park.jpg'),
    playground: img('cadence-amenities-playground', '/images/amenities/playground.jpg'),
    trails: img('cadence-amenities-trails', '/images/amenities/trails.jpg'),
    sportsCourts: img('cadence-amenities-sports-courts', '/images/amenities/sports-courts.jpg'),
    clubhouse: img('cadence-amenities-clubhouse', '/images/amenities/clubhouse.jpg'),
  },

  lifestyle: {
    community: img('cadence-lifestyle-community', '/images/lifestyle/community.jpg'),
    families: img('cadence-lifestyle-families', '/images/lifestyle/families.jpg'),
    events: img('cadence-lifestyle-events', '/images/lifestyle/events.jpg'),
    concert: img('cadence-lifestyle-concert', '/images/lifestyle/concert.jpg'),
    farmersMarket: img('cadence-lifestyle-farmers-market', '/images/lifestyle/farmers-market.jpg'),
    movieNight: img('cadence-lifestyle-movie-night', '/images/lifestyle/movie-night.jpg'),
    yoga: img('cadence-lifestyle-yoga', '/images/lifestyle/yoga.jpg'),
    foodTruck: img('cadence-lifestyle-food-truck', '/images/lifestyle/food-truck.jpg'),
  },

  homes: {
    exterior1: img('cadence-homes-exterior-1', '/images/homes/exterior-1.jpg'),
    exterior2: img('cadence-homes-exterior-2', '/images/homes/exterior-2.jpg'),
    exterior3: img('cadence-homes-exterior-3', '/images/homes/exterior-3.jpg'),
    interior1: img('cadence-homes-interior-1', '/images/homes/interior-1.jpg'),
    interior2: img('cadence-homes-interior-2', '/images/homes/interior-2.jpg'),
    kitchen: img('cadence-homes-kitchen', '/images/homes/kitchen.jpg'),
    livingRoom: img('cadence-homes-living-room', '/images/homes/living-room.jpg'),
    backyard: img('cadence-homes-backyard', '/images/homes/backyard.jpg'),
  },

  rentals: {
    americanHomes: img('cadence-rentals-american-homes', '/images/rentals/american-homes.jpg'),
    element12: img('cadence-rentals-element-12', '/images/rentals/element-12.jpg'),
    adler: img('cadence-rentals-adler', '/images/rentals/adler.jpg'),
  },

  gallery: {
    parkVista: img('cadence-amenities-central-park', '/images/amenities/central-park.jpg'),
    newHome: img('cadence-homes-exterior-1', '/images/homes/exterior-1.jpg'),
    resortPool: img('cadence-amenities-pool', '/images/amenities/pool.jpg'),
    concert: img('cadence-lifestyle-concert', '/images/lifestyle/concert.jpg'),
    communityGathering: img('cadence-lifestyle-community', '/images/lifestyle/community.jpg'),
    playground: img('cadence-amenities-playground', '/images/amenities/playground.jpg'),
    fitnessCenter: img('cadence-amenities-fitness', '/images/amenities/fitness.jpg'),
    modernExterior: img('cadence-homes-exterior-2', '/images/homes/exterior-2.jpg'),
    walkingTrails: img('cadence-amenities-trails', '/images/amenities/trails.jpg'),
    communityEvent: img('cadence-lifestyle-events', '/images/lifestyle/events.jpg'),
    luxuryInterior: img('cadence-homes-living-room', '/images/homes/living-room.jpg'),
    dogPark: img('cadence-amenities-dog-park', '/images/amenities/dog-park.jpg'),
  },

  location: {
    mapOverview: img('cadence-location-map-overview', '/images/location/map-overview.jpg'),
    welcomeCenter: img('cadence-location-welcome-center', '/images/location/welcome-center.jpg'),
    aerialView: img('cadence-location-aerial', '/images/location/aerial.jpg'),
  },

  agent: {
    headshot: img('cadence-agent-headshot', '/images/agent/headshot.png'),
    logo: img('cadence-og-share', '/images/og/share.jpg'),
    bhhs: img('cadence-hero-realtors', '/images/hero/realtors.jpg'),
  },

  icons: {
    amenitiesBox: img('cadence-amenities-pool', '/images/amenities/pool.jpg'),
    lifestyleBox: img('cadence-lifestyle-community', '/images/lifestyle/community.jpg'),
    homesBox: img('cadence-homes-exterior-1', '/images/homes/exterior-1.jpg'),
    newsBox: img('cadence-icons-news-box', '/images/icons/news-box.png'),
  },

  /** Unique photos for content sections that previously had no git-backed CF ID. */
  sections: {
    marketSnapshot: img('cadence-sections-market-snapshot', '/images/sections/market-snapshot.jpg'),
    homeSearch: img('cadence-sections-home-search', '/images/sections/home-search.jpg'),
    contact: img('cadence-sections-contact', '/images/sections/contact.jpg'),
    faqs: img('cadence-sections-faqs', '/images/sections/faqs.jpg'),
    animalHospital: img('cadence-sections-animal-hospital', '/images/sections/animal-hospital.jpg'),
    community: img('cadence-sections-community', '/images/sections/community.jpg'),
    pastHomesales: img('cadence-sections-past-homesales', '/images/sections/past-homesales.jpg'),
    maps: img('cadence-sections-maps', '/images/sections/maps.jpg'),
    residents: img('cadence-sections-residents', '/images/sections/residents.jpg'),
    incentives: img('cadence-sections-incentives', '/images/sections/incentives.jpg'),
    realtors: img('cadence-sections-realtors', '/images/sections/realtors.jpg'),
  },

  logos: {
    americanHomes: img('cadence-logos-american-homes', '/images/logos/american-homes.jpg'),
    beazer: img('cadence-logos-beazer', '/images/logos/beazer.jpg'),
    century: img('cadence-logos-century', '/images/logos/century.jpg'),
    drHorton: img('cadence-logos-dr-horton', '/images/logos/dr-horton.png'),
    lennar: img('cadence-logos-lennar', '/images/logos/lennar.png'),
    richmond: img('cadence-logos-richmond', '/images/logos/richmond.png'),
    storybook: img('cadence-logos-storybook', '/images/logos/storybook.png'),
    taylorMorrison: img('cadence-logos-taylor-morrison', '/images/logos/taylor-morrison.jpg'),
    woodside: img('cadence-logos-woodside', '/images/logos/woodside.png'),
  },

  schools: {
    elementary: img('cadence-schools-elementary', '/images/schools/elementary.jpg'),
    middle: img('cadence-schools-middle', '/images/schools/middle.jpg'),
    high: img('cadence-schools-high', '/images/schools/high.jpg'),
  },

  shopping: {
    galleria: img('cadence-shopping-galleria', '/images/shopping/galleria.jpg'),
    district: img('cadence-shopping-district', '/images/shopping/district.jpg'),
    marketplace: img('cadence-shopping-marketplace', '/images/shopping/marketplace.jpg'),
  },

  /**
   * Las Vegas high-rise condo towers — cloned from lasvegashighrisecondoliving.com/condo/
   * Upload via: npm run cloudflare:condo-images
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

export function cfImage(imageId: string, variant: ImageVariant = 'public'): string {
  if (!imageId) return PLACEHOLDER_IMAGE
  if (imageId.startsWith('/') || imageId.startsWith('http://') || imageId.startsWith('https://')) {
    return imageId
  }
  return `${BASE_URL}/${imageId}/${variant}`
}

export function gitFallback(imageId: string): string {
  if (!imageId) return PLACEHOLDER_IMAGE
  if (imageId.startsWith('/') && !imageId.startsWith('//')) return imageId
  if (imageId.startsWith('data:')) return PLACEHOLDER_IMAGE
  return LOCAL_IMAGES[imageId] ?? PLACEHOLDER_IMAGE
}

/** Resolve git fallback from a Cloudflare delivery URL or custom ID. */
export function gitFallbackFromSrc(src: string): string {
  if (!src) return PLACEHOLDER_IMAGE
  if (src.startsWith('data:')) return PLACEHOLDER_IMAGE
  if (src.startsWith('/') && !src.startsWith('//')) return src
  if (src.includes('imagedelivery.net')) {
    const parts = src.split('/').filter(Boolean)
    const id = parts[3] ? decodeURIComponent(parts[3]) : ''
    return gitFallback(id)
  }
  return gitFallback(src)
}

export function isCloudflareImage(url: string): boolean {
  return url.startsWith(BASE_URL)
}

export function getHeroImage(page: keyof typeof SITE_IMAGES.hero, variant: ImageVariant = 'hero'): string {
  return cfImage(SITE_IMAGES.hero[page], variant)
}

const BUILDER_HERO_KEYS: Record<string, keyof typeof SITE_IMAGES.hero> = {
  'beazer-homes': 'beazerHomes',
  'century-communities': 'centuryCommunities',
  'dr-horton': 'drHorton',
  lennar: 'lennar',
  'richmond-american': 'richmondAmerican',
  'storybook-homes': 'storybookHomes',
  'taylor-morrison': 'taylorMorrison',
  'woodside-homes': 'woodsideHomes',
}

const RENTAL_HERO_KEYS: Record<string, keyof typeof SITE_IMAGES.hero> = {
  'american-homes': 'rentalAmericanHomes',
  'element-12': 'rentalElement12',
  adler: 'rentalAdler',
}

/** Unique luxury hero per builder route; falls back to the new-homes hero. */
export function getBuilderHeroImage(builderSlug: string, variant: ImageVariant = 'hero'): string {
  const key = BUILDER_HERO_KEYS[builderSlug] ?? 'newHomes'
  return cfImage(SITE_IMAGES.hero[key], variant)
}

/** Unique luxury hero per rental community; falls back to the rentals hero. */
export function getRentalHeroImage(communitySlug: string, variant: ImageVariant = 'hero'): string {
  const key = RENTAL_HERO_KEYS[communitySlug] ?? 'rentals'
  return cfImage(SITE_IMAGES.hero[key], variant)
}

export function getBuilderImage(builder: keyof typeof SITE_IMAGES.builders, variant: ImageVariant = 'card'): string {
  return cfImage(SITE_IMAGES.builders[builder], variant)
}

export function getAmenityImage(amenity: keyof typeof SITE_IMAGES.amenities, variant: ImageVariant = 'card'): string {
  return cfImage(SITE_IMAGES.amenities[amenity], variant)
}

export function getGalleryImage(image: keyof typeof SITE_IMAGES.gallery, variant: ImageVariant = 'gallery'): string {
  return cfImage(SITE_IMAGES.gallery[image], variant)
}

export function getHomeImage(image: keyof typeof SITE_IMAGES.homes, variant: ImageVariant = 'card'): string {
  return cfImage(SITE_IMAGES.homes[image], variant)
}

export function getCondoImage(
  tower: keyof typeof SITE_IMAGES.condos,
  variant: ImageVariant = 'card',
): string {
  return cfImage(SITE_IMAGES.condos[tower], variant)
}

/** Flat list of git-backed images for upload scripts (excludes condos). */
export function listGitBackedImages(): Array<{ id: string; local: string }> {
  return Object.entries(LOCAL_IMAGES).map(([id, local]) => ({ id, local }))
}
