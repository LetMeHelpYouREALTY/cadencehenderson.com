import { HOME_FAQS } from '@/lib/page-aeo'
import { SectionPhoto } from '@/components/cadence/section-photo'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

/**
 * On-page FAQ section for AEO. Visible, not hidden — Google and answer engines read this.
 * JSON-LD is emitted by PageGraphSchema on the homepage.
 */
export function HomepageFAQSection() {
  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="homepage-faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionPhoto
            src={cfImage(SITE_IMAGES.sections.faqs, 'hero')}
            alt="Frequently asked questions about new homes in Cadence Henderson NV 89011"
            className="mb-12"
          />
          <h2 id="homepage-faq-heading" className="text-4xl font-extralight tracking-[0.06em] text-neutral-900 mb-16 text-center">
            Frequently Asked Questions — New Homes in Cadence Henderson NV
          </h2>
          <dl className="space-y-10">
            {HOME_FAQS.map((item) => (
              <div key={item.question} className="border-b border-neutral-200 pb-8 last:border-0 last:pb-0">
                <dt className="text-lg font-light tracking-[0.04em] text-neutral-900 mb-4">
                  {item.question}
                </dt>
                <dd className="faq-answer text-gray-800 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
