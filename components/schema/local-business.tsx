import { CONTACT_INFO, SOCIAL_MEDIA, GEO_LINKS } from '@/components/cadence/contact-info'

export function LocalBusinessSchema() {
  const { address } = CONTACT_INFO
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.cadencehenderson.com/#realestateagent',
    name: CONTACT_INFO.siteName,
    description:
      "Free new home buyer representation at Cadence Henderson NV 89011. Dr. Jan Duffy represents buyers across Cadence builders. Builder pays the fee — free to buyers. Berkshire Hathaway HomeServices Nevada Properties.",
    image: 'https://www.cadencehenderson.com/og-image.jpg',
    url: 'https://www.cadencehenderson.com',
    telephone: `+1-${CONTACT_INFO.phone}`,
    email: CONTACT_INFO.email,
    priceRange: '$300,000-$700,000+',
    hasMap: GEO_LINKS.maps,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.0175',
      longitude: '-114.9607',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Free New Home Buyer Representation',
      description: 'Builder pays all fees — free to buyers',
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Cadence Henderson, Henderson NV 89011',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        containedInPlace: {
          '@type': 'State',
          name: 'Nevada',
        },
      },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      identifier: CONTACT_INFO.licenseNumber,
    },
    memberOf: {
      '@type': 'Organization',
      name: CONTACT_INFO.brokerage,
    },
    employee: {
      '@id': 'https://www.cadencehenderson.com/#dr-jan-duffy',
    },
    sameAs: [SOCIAL_MEDIA.facebook, SOCIAL_MEDIA.instagram, SOCIAL_MEDIA.twitter],
    knowsAbout: [
      'new home buyer representation',
      'new construction negotiation Henderson NV',
      'Cadence Henderson builders',
      "free buyer's agent new construction",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
