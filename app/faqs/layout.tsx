import type { Metadata } from 'next'
import { PageGraphSchema } from '@/components/schema/page-graph'
import { getFaqsPageItems } from '@/lib/faqs-page-data'

export const metadata: Metadata = {
  title: 'Cadence Henderson FAQ – Homes, Prices & Community | 89011',
  description:
    'Common questions about buying, renting and living in Cadence Henderson NV 89011. Prices, builders, amenities, schools, HOA fees and more answered.',
  alternates: { canonical: 'https://www.cadencehenderson.com/faqs' },
  openGraph: {
    title: 'Cadence Henderson FAQ – Homes, Prices & Community | 89011',
    description:
      'Common questions about buying, renting and living in Cadence Henderson NV 89011. Prices, builders, amenities, schools and HOA fees answered.',
    url: 'https://www.cadencehenderson.com/faqs',
  },
}

/** FAQPage schema — identical Q&A to visible accordion on /faqs. */
function FaqsPageSchema() {
  const items = getFaqsPageItems()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.cadencehenderson.com/faqs#faq',
    url: 'https://www.cadencehenderson.com/faqs',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageGraphSchema
        path="/faqs"
        name="Cadence Henderson FAQ – Homes, Prices & Community | 89011"
        description="Common questions about buying, renting and living in Cadence Henderson NV 89011. Prices, builders, amenities, schools, HOA fees and more answered."
        breadcrumbs={[{ name: 'Cadence Henderson FAQs NV 89011' }]}
      />
      <FaqsPageSchema />
      {children}
    </>
  )
}
