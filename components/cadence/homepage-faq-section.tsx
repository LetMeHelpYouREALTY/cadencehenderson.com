import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { SectionPhoto } from '@/components/cadence/section-photo'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

const FAQ_ITEMS = [
  {
    question: 'Do I need a realtor to buy a new home in Cadence Henderson?',
    answer: `Yes — and it costs you nothing. Dr. Jan Duffy represents new home buyers at Cadence Henderson and her fee is paid entirely by the builder. She negotiates upgrades, lot premiums, and closing costs on your behalf across all 9 builders. Call ${CONTACT_INFO.phone} before your first model home visit.`,
  },
  {
    question: 'Which builders are in Cadence Henderson NV?',
    answer: `Cadence Henderson has 9 active builders: Century Communities, D.R. Horton, Lennar, Richmond American, Taylor Morrison, Beazer Homes, Woodside Homes, StoryBook Homes, and American Homes 4 Rent. Availability and incentives change weekly — call Dr. Jan at ${CONTACT_INFO.phone} for current inventory.`,
  },
  {
    question: 'How much do new homes cost in Cadence Henderson NV?',
    answer: `New homes in Cadence Henderson range from the $300Ks to $700K+, depending on the builder, floor plan, and lot. Rate buydown incentives and closing cost contributions are often available. Call Dr. Jan Duffy at ${CONTACT_INFO.phone} for this week's pricing.`,
  },
  {
    question: "Can a buyer's agent negotiate with new home builders in Henderson NV?",
    answer:
      "Absolutely. Dr. Jan Duffy negotiates upgrades, lot premiums, closing costs, and rate buydowns with all 9 Cadence builders on behalf of buyers — at zero cost to the buyer. The builder pays her full commission.",
  },
  {
    question: 'Is there a state income tax in Henderson Nevada?',
    answer:
      'No. Nevada has no state income tax, which is a major reason CA and WA buyers choose Cadence Henderson. Combined with lower home prices and builder incentives, the financial advantage is significant.',
  },
]

/**
 * On-page FAQ section for AEO. Visible, not hidden — Google reads this.
 * Mirrors FAQPage JSON-LD schema for consistency.
 */
export function HomepageFAQSection() {
  return (
    <section
      className="py-16 bg-white"
      aria-labelledby="homepage-faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionPhoto
            src={cfImage(SITE_IMAGES.sections.homepageFaq, 'hero')}
            alt="Frequently asked questions about new homes in Cadence Henderson NV 89011"
            className="mb-10 rounded-lg"
          />
          <h2 id="homepage-faq-heading" className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Frequently Asked Questions — New Homes in Cadence Henderson NV
          </h2>
          <dl className="space-y-8">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <dt className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </dt>
                <dd className="text-gray-800 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
