/**
 * Hyperlocal amenity map — single source for community center, categories, and curated places.
 * Center: Cadence Central Park (OpenStreetMap leisure=park, verified 2026-03-27).
 */

export const COMMUNITY_PLACE = {
  name: 'Cadence Henderson',
  shortName: 'Cadence',
  city: 'Henderson',
  state: 'NV',
  postalCode: '89011',
  /** Cadence Central Park — community heart for nearby search radius */
  center: { lat: 36.0588542, lng: -114.9757734 },
  welcomeCenterAddress: '1170 E Sunset Rd, 2nd Floor, Henderson, NV 89011',
  coordinatesSource:
    'OpenStreetMap Nominatim: Cadence Central Park & welcome center at 1170 E Sunset Rd (Cadence, Henderson NV 89011)',
} as const

export type AmenityCategoryId =
  | 'parks'
  | 'grocery'
  | 'restaurants'
  | 'cafes'
  | 'schools'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'fitness'
  | 'golf'
  | 'parking'

export type AmenityCategory = {
  id: AmenityCategoryId
  label: string
  /** Google Places (New) primary types for searchNearby */
  primaryTypes: string[]
  ariaLabel: string
}

/** Family master-planned community — schools included; parks & grocery lead. */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park', 'playground'],
    ariaLabel: 'Show parks and recreation near Cadence Henderson',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['grocery_store', 'supermarket'],
    ariaLabel: 'Show grocery stores near Cadence Henderson',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Cadence Henderson',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe', 'coffee_shop'],
    ariaLabel: 'Show cafes near Cadence Henderson',
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
    ariaLabel: 'Show schools near Cadence Henderson',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
    ariaLabel: 'Show hospitals and doctors near Cadence Henderson',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy', 'drugstore'],
    ariaLabel: 'Show pharmacies near Cadence Henderson',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall', 'department_store'],
    ariaLabel: 'Show shopping near Cadence Henderson',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym', 'fitness_center'],
    ariaLabel: 'Show gyms and fitness near Cadence Henderson',
  },
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Cadence Henderson',
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
    ariaLabel: 'Show parking near Cadence Henderson',
  },
]

export type CuratedPlace = {
  name: string
  category: AmenityCategoryId
  address: string
  schemaType:
    | 'Park'
    | 'GroceryStore'
    | 'Restaurant'
    | 'CafeOrCoffeeShop'
    | 'School'
    | 'Hospital'
    | 'Pharmacy'
    | 'ShoppingCenter'
    | 'ExerciseGym'
    | 'GolfCourse'
    | 'Place'
  note?: string
}

/** Verified places for fallback list + ItemList schema (addresses from OSM / public listings). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: 'Cadence Central Park',
    category: 'parks',
    address: 'Cadence Central Park, Henderson, NV 89011',
    schemaType: 'Park',
    note: 'Nearly 50-acre community park with trails, splash pad, and events.',
  },
  {
    name: "Smith's",
    category: 'grocery',
    address: '835 E Lake Mead Pkwy, Henderson, NV 89015',
    schemaType: 'GroceryStore',
    note: 'Full-service grocery at Cadence Marketplace.',
  },
  {
    name: 'Galleria at Sunset',
    category: 'shopping',
    address: '1300 W Sunset Rd, Henderson, NV 89014',
    schemaType: 'ShoppingCenter',
  },
  {
    name: 'The District at Green Valley Ranch',
    category: 'shopping',
    address: '2240 Village Walk Dr, Henderson, NV 89052',
    schemaType: 'ShoppingCenter',
  },
  {
    name: 'Henderson Hospital',
    category: 'healthcare',
    address: '1050 W Galleria Dr, Henderson, NV 89011',
    schemaType: 'Hospital',
  },
  {
    name: 'Dignity Health-St. Rose Dominican, Siena Campus',
    category: 'healthcare',
    address: '3001 St Rose Pkwy, Henderson, NV 89052',
    schemaType: 'Hospital',
  },
  {
    name: 'Green Valley High School',
    category: 'schools',
    address: '460 Arroyo Grande Blvd, Henderson, NV 89014',
    schemaType: 'School',
  },
  {
    name: 'Reunion Golf Club',
    category: 'golf',
    address: '14401 Reunion Blvd, Henderson, NV 89052',
    schemaType: 'GolfCourse',
  },
]

export function getMapsEmbedUrl(): string {
  const { lat, lng } = COMMUNITY_PLACE.center
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`
}

export function getDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`
}

export function getStaticPlacesForCategory(
  categoryId: AmenityCategoryId,
): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.category === categoryId)
}

export function getCategoryById(id: AmenityCategoryId): AmenityCategory {
  const found = AMENITY_CATEGORIES.find((c) => c.id === id)
  if (!found) return AMENITY_CATEGORIES[0]
  return found
}

export const NEARBY_AMENITIES_PAGE_PATH = '/nearby-amenities'
