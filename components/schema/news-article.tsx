import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { WEBSITE_ID } from '@/components/schema/website-schema'

const BASE = 'https://www.cadencehenderson.com'
const PERSON_ID = `${BASE}/#dr-jan-duffy`
const AGENT_ID = `${BASE}/#realestateagent`

type NewsArticleSchemaProps = {
  slug: string
  title: string
  description: string
  dateIso: string
  image?: string
  dateModified?: string
}

/**
 * NewsArticle JSON-LD for /news/[slug] — headline, dates, author, image.
 */
export function NewsArticleSchema({
  slug,
  title,
  description,
  dateIso,
  image,
  dateModified,
}: NewsArticleSchemaProps) {
  const url = `${BASE}/news/${slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    isPartOf: { '@id': WEBSITE_ID },
    datePublished: dateIso,
    dateModified: dateModified ?? dateIso,
    inLanguage: 'en-US',
    author: {
      '@id': PERSON_ID,
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'REALTOR®',
      telephone: `+1-${CONTACT_INFO.phone}`,
    },
    publisher: {
      '@id': AGENT_ID,
      '@type': 'RealEstateAgent',
      name: CONTACT_INFO.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/og-image.jpg`,
      },
    },
    ...(image
      ? {
          image: {
            '@type': 'ImageObject',
            url: image.startsWith('http') ? image : `${BASE}${image}`,
          },
        }
      : {}),
    about: {
      '@type': 'Place',
      '@id': `${BASE}/#cadence-henderson-place`,
      name: 'Cadence Henderson',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Henderson',
        addressRegion: 'NV',
        postalCode: '89011',
        addressCountry: 'US',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
