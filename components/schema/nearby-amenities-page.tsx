import {
  COMMUNITY_PLACE,
  CURATED_NEARBY_PLACES,
  NEARBY_AMENITIES_PAGE_PATH,
} from '@/lib/nearby-amenities-config'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

const BASE = 'https://www.cadencehenderson.com'

type NearbyAmenitiesPageSchemaProps = {
  faq: Array<{ question: string; answer: string }>
}

export function NearbyAmenitiesPageSchema({ faq }: NearbyAmenitiesPageSchemaProps) {
  const pageUrl = `${BASE}${NEARBY_AMENITIES_PAGE_PATH}`

  const communityPlace = {
    '@type': 'Place',
    name: COMMUNITY_PLACE.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMMUNITY_PLACE.city,
      addressRegion: COMMUNITY_PLACE.state,
      postalCode: COMMUNITY_PLACE.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMMUNITY_PLACE.center.lat,
      longitude: COMMUNITY_PLACE.center.lng,
    },
  }

  const itemList = {
    '@type': 'ItemList',
    name: `Nearby amenities in ${COMMUNITY_PLACE.name}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => {
      const streetAddress = place.address?.split(',')[0]?.trim()
      const item: Record<string, unknown> = {
        '@type': place.schemaType,
        name: place.name,
        url: place.sourceUrl,
      }
      if (streetAddress) {
        item.address = {
          '@type': 'PostalAddress',
          streetAddress,
          addressLocality: COMMUNITY_PLACE.city,
          addressRegion: COMMUNITY_PLACE.state,
          addressCountry: 'US',
        }
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        item,
      }
    }),
  }

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const breadcrumbs = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Cadence Henderson',
        item: BASE,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: pageUrl,
      },
    ],
  }

  const agent = {
    '@type': 'RealEstateAgent',
    '@id': `${BASE}#real-estate-agent`,
    name: CONTACT_INFO.siteName,
    url: BASE,
    telephone: `+1-${CONTACT_INFO.phone}`,
    email: CONTACT_INFO.email,
    areaServed: {
      '@type': 'Place',
      name: `${COMMUNITY_PLACE.name}, ${COMMUNITY_PLACE.city} ${COMMUNITY_PLACE.postalCode}`,
      geo: communityPlace.geo,
    },
    memberOf: {
      '@type': 'Organization',
      name: CONTACT_INFO.brokerage,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      identifier: CONTACT_INFO.licenseNumber,
    },
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [communityPlace, itemList, faqPage, breadcrumbs, agent],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
