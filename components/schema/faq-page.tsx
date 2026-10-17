import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * Legacy standalone FAQPage JSON-LD (homepage buyer FAQs).
 * Prefer PageGraphSchema on `/` with HOME_FAQS — do not mount this site-wide in root layout.
 */
export function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a realtor to buy a new home in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes — and it costs you nothing. Dr. Jan Duffy represents new home buyers at Cadence Henderson and her fee is paid entirely by the builder. She negotiates upgrades, lot premiums, and closing costs on your behalf across all 9 builders. Call ${CONTACT_INFO.phone} before your first model home visit.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Which builders are in Cadence Henderson NV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Cadence Henderson has 9 active builders: Century Communities, D.R. Horton, Lennar, Richmond American, Taylor Morrison, Beazer Homes, Woodside Homes, StoryBook Homes, and American Homes 4 Rent. Availability and incentives change weekly — call Dr. Jan at ${CONTACT_INFO.phone} for current inventory.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How much do new homes cost in Cadence Henderson NV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `New homes in Cadence Henderson range from the $300Ks to $700K+, depending on the builder, floor plan, and lot. Rate buydown incentives and closing cost contributions are often available. Call Dr. Jan Duffy at ${CONTACT_INFO.phone} for this week's pricing.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Can a buyer\'s agent negotiate with new home builders in Henderson NV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Dr. Jan Duffy negotiates upgrades, lot premiums, closing costs, and rate buydowns with all 9 Cadence builders on behalf of buyers — at zero cost to the buyer. The builder pays her full commission.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a state income tax in Henderson Nevada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Nevada has no state income tax, which is a major reason CA and WA buyers choose Cadence Henderson. Combined with lower home prices and builder incentives, the financial advantage is significant.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
