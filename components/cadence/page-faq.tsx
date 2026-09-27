import type { FaqItem } from '@/lib/page-aeo'

type PageFaqProps = {
  items: FaqItem[]
  heading?: string
}

/**
 * Visible FAQ for AEO. JSON-LD is emitted by PageGraphSchema — keep questions in sync.
 */
export function PageFaq({
  items,
  heading = 'Cadence Henderson NV 89011 — common questions',
}: PageFaqProps) {
  if (items.length === 0) return null

  return (
    <section id="page-faq" className="bg-neutral-50 py-16" aria-labelledby="page-faq-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2
            id="page-faq-heading"
            className="mb-10 text-center text-3xl font-extralight tracking-[0.06em] text-neutral-900"
          >
            {heading}
          </h2>
          <dl className="space-y-8">
            {items.map((item) => (
              <div key={item.question} className="border-b border-neutral-200 pb-8 last:border-0 last:pb-0">
                <dt className="mb-3 text-lg font-medium text-neutral-900">{item.question}</dt>
                <dd className="faq-answer font-light leading-relaxed text-neutral-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
