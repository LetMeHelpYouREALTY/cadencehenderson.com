import { CONTACT_INFO } from '@/components/cadence/contact-info'

const BASE = 'https://www.cadencehenderson.com'
const AGENT_ID = `${BASE}/#realestateagent`
export const WEBSITE_ID = `${BASE}/#website`

/**
 * Site-wide WebSite JSON-LD with SearchAction (find-your-home entry).
 * Mounted once in root layout; PageGraphSchema references WEBSITE_ID.
 */
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: CONTACT_INFO.siteName,
    url: BASE,
    publisher: { '@id': AGENT_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE}/find-your-home?query={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
