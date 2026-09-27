import { CONTACT_INFO, SOCIAL_MEDIA } from '@/components/cadence/contact-info'
import type { FaqItem } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'
const AGENT_ID = `${BASE}/#realestateagent`
const PERSON_ID = `${BASE}/#dr-jan-duffy`
const WEBSITE_ID = `${BASE}/#website`

type Breadcrumb = {
  name: string
  path?: string
}

type PageGraphSchemaProps = {
  path: string
  name: string
  description: string
  faqs?: FaqItem[]
  breadcrumbs?: Breadcrumb[]
}

function abs(path: string) {
  if (path.startsWith('http')) return path
  return `${BASE}${path === '/' ? '' : path}`
}

/**
 * Single @graph JSON-LD for AEO: WebPage + speakable, optional FAQPage, BreadcrumbList.
 * LocalBusiness/RealEstateAgent remains in root layout as the shared entity.
 */
export function PageGraphSchema({
  path,
  name,
  description,
  faqs,
  breadcrumbs = [],
}: PageGraphSchemaProps) {
  const url = abs(path)
  const webpageId = `${url}#webpage`
  const faqId = `${url}#faq`

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: CONTACT_INFO.siteName,
      url: BASE,
      publisher: { '@id': AGENT_ID },
    },
    {
      '@type': 'WebPage',
      '@id': webpageId,
      url,
      name,
      description,
      isPartOf: { '@id': WEBSITE_ID },
      about: {
        '@type': 'Place',
        name: 'Cadence Henderson',
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONTACT_INFO.address.street,
          addressLocality: CONTACT_INFO.address.city,
          addressRegion: CONTACT_INFO.address.state,
          postalCode: CONTACT_INFO.address.zip,
          addressCountry: 'US',
        },
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${BASE}/og-image.jpg`,
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.aeo-lead', '[data-speakable]', '.faq-answer'],
      },
      inLanguage: 'en-US',
      author: { '@id': PERSON_ID },
      mainEntity: faqs && faqs.length > 0 ? { '@id': faqId } : { '@id': AGENT_ID },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Dr. Jan Duffy',
      jobTitle: 'REALTOR®',
      telephone: `+1-${CONTACT_INFO.phone}`,
      email: CONTACT_INFO.email,
      worksFor: { '@id': AGENT_ID },
      sameAs: [SOCIAL_MEDIA.facebook, SOCIAL_MEDIA.instagram, SOCIAL_MEDIA.twitter],
    },
  ]

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': faqId,
      url,
      isPartOf: { '@id': webpageId },
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    })
  }

  const crumbItems = [{ name: 'Cadence Henderson NV 89011', path: '/' }, ...breadcrumbs]
  graph.push({
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: crumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: abs(item.path) } : {}),
    })),
  })

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
