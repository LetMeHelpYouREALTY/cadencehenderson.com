// Centralized contact information for the Cadence Henderson website

// Cloudflare Images configuration
export const CLOUDFLARE_IMAGES = {
  accountId: '2cc579c1ec9e426ed585e933ebf4753b',
  accountHash: 'byE6BTe9lNqo21V57n4aPQ',
  baseUrl: 'https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ',
}

/**
 * Generate Cloudflare Image URL
 * @param imageId - The Cloudflare Image ID
 * @param variant - The variant name (e.g., 'public', 'thumbnail', 'hero', 'card')
 * @returns Full Cloudflare Image delivery URL
 */
export function getCloudflareImageUrl(imageId: string, variant: string = 'public'): string {
  return `${CLOUDFLARE_IMAGES.baseUrl}/${imageId}/${variant}`
}

export const CONTACT_INFO = {
  email: 'DrJanSells@CadenceHenderson.com',
  phone: '702-930-8672',
  licenseNumber: 'S.0197614.LLC',
  address: {
    street: '1170 E Sunset Rd, 2nd Floor',
    city: 'Henderson',
    state: 'NV',
    zip: '89011',
  },
  hours: 'Monday - Sunday: 10:00 AM - 6:00 PM',
  welcomeCenter: '1170 E Sunset Rd, 2nd Floor, Henderson, NV 89011',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  mainOffice: '8850 W Sunset Road Suite 200, Las Vegas, NV 89148',
  /** Canonical site name for SEO, GEO, AEO — must match GBP. */
  siteName: 'Cadence Henderson Homes By Dr. Jan Duffy',
  brandName: 'Cadence Henderson Homes By Dr. Jan Duffy',
  shortBrandName: 'Homes By Dr. Jan Duffy',
  realScoutSearchUrl:
    'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xODM0Mw==',
  realScoutRentalsUrl:
    'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xODM5Nw==',
  realScoutBeazerHomesUrl:
    'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xODM5OA==',
  realScoutCenturyCommunitiesUrl:
    'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xODM5OA==',
  calendlyUrl: 'https://calendly.com/drjanduffy/15min',
}

export const SOCIAL_MEDIA = {
  facebook: 'https://www.facebook.com/CadenceHendersonHomes',
  instagram: 'https://www.instagram.com/cadencehendersonhomes/',
  twitter: 'https://x.com/DrJanDuffy',
}

/** Maps / directions / reviews links derived from GBP-matching NAP. */
export const GEO_LINKS = {
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.welcomeCenter)}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT_INFO.welcomeCenter)}`,
  reviews: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${CONTACT_INFO.siteName} ${CONTACT_INFO.welcomeCenter}`)}`,
} as const

export const HOA_CONTACT = {
  name: 'Cadence Master Association',
  phone: '(702) 555-3000',
  email: 'DrJanSells@CadenceHenderson.com',
  hours: 'Mon-Fri, 9AM-5PM',
  emergency: '(702) 555-3001',
}

