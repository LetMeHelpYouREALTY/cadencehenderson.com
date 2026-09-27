import { PageFaq } from '@/components/cadence/page-faq'
import { PageGraphSchema } from '@/components/schema/page-graph'
import type { FaqItem } from '@/lib/page-aeo'

type PageAeoProps = {
  path: string
  name: string
  description: string
  faqs?: FaqItem[]
  breadcrumbs?: Array<{ name: string; path?: string }>
  faqHeading?: string
}

/**
 * Per-page AEO: WebPage/speakable JSON-LD, plus visible Q&A when `faqs` is provided.
 * Omit `faqs` on routes that already publish a matching FAQPage (avoid duplicate FAQ schema).
 */
export function PageAeo({
  path,
  name,
  description,
  faqs,
  breadcrumbs,
  faqHeading,
}: PageAeoProps) {
  return (
    <>
      <PageGraphSchema
        path={path}
        name={name}
        description={description}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />
      {faqs && faqs.length > 0 ? <PageFaq items={faqs} heading={faqHeading} /> : null}
    </>
  )
}
