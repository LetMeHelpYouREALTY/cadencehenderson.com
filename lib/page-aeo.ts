import { CONTACT_INFO } from '@/components/cadence/contact-info'
import type { Village } from '@/lib/cadence-nv-catalog'

export type FaqItem = {
  question: string
  answer: string
}

const PHONE = CONTACT_INFO.phone
const NAP = CONTACT_INFO.welcomeCenter
const HOURS = CONTACT_INFO.hours
const BRAND = CONTACT_INFO.siteName

export const HOME_FAQS: FaqItem[] = [
  {
    question: 'Do I need a realtor to buy a new home in Cadence Henderson?',
    answer: `Yes — and it costs you nothing. Dr. Jan Duffy represents new home buyers at Cadence Henderson and her fee is paid entirely by the builder. She negotiates upgrades, lot premiums, and closing costs on your behalf across Cadence builders. Call ${PHONE} before your first model home visit. Office: ${NAP}.`,
  },
  {
    question: 'Which builders are in Cadence Henderson NV?',
    answer: `Cadence Henderson NV 89011 includes Beazer Homes, Century Communities, D.R. Horton, Lennar, Richmond American, Taylor Morrison, Woodside Homes, StoryBook Homes, Harmony Homes, and American Homes 4 Rent villages. Inventory and incentives change — call Dr. Jan at ${PHONE} for the current list.`,
  },
  {
    question: 'How much do new homes cost in Cadence Henderson NV?',
    answer: `New homes in Cadence Henderson range from the $300Ks to $700K+, depending on the builder, floor plan, and lot. Rate buydown incentives and closing cost contributions are often available. Call Dr. Jan Duffy at ${PHONE} for this week's pricing. Office: ${NAP}.`,
  },
  {
    question: "Can a buyer's agent negotiate with new home builders in Henderson NV?",
    answer: `Yes. Dr. Jan Duffy negotiates upgrades, lot premiums, closing costs, and rate buydowns with Cadence builders on behalf of buyers — at zero cost to the buyer. The builder pays her commission. Call ${PHONE} before touring models.`,
  },
  {
    question: 'Is there a state income tax in Henderson Nevada?',
    answer:
      'No. Nevada has no state income tax. Combined with Cadence Henderson new-home pricing and builder incentives, many California and Washington buyers compare the net monthly cost before they tour. Confirm current incentives with Dr. Jan Duffy.',
  },
]

export function defaultPageFaqs(topic: string): FaqItem[] {
  return [
    {
      question: `Who can help with ${topic} in Cadence Henderson NV 89011?`,
      answer: `${BRAND} — Dr. Jan Duffy, REALTOR®, license ${CONTACT_INFO.licenseNumber}. She represents Cadence buyers at no extra cost on new construction; the builder typically pays her fee. Call ${PHONE}. Office: ${NAP}. Hours: ${HOURS}.`,
    },
    {
      question: 'Where is the Cadence Henderson real estate office?',
      answer: `The office is at ${NAP}, matching the Google Business Profile. Hours are ${HOURS}. Call ${PHONE} or use the maps page for directions to Cadence Henderson NV ${CONTACT_INFO.address.zip}.`,
    },
    {
      question: 'Does a buyer’s agent cost extra on new homes in Cadence Henderson?',
      answer: `No. On Cadence new construction the builder typically pays Dr. Jan Duffy’s fee, so buyer representation does not add a line item to your contract. Call ${PHONE} before the first model-home visit so the sales office registers her as your agent.`,
    },
  ]
}

export function villageFaqs(village: Village): FaqItem[] {
  const published = village.plans.filter((plan) => plan.sqft !== '—')
  const planLine =
    published.length > 0
      ? published
          .slice(0, 4)
          .map((plan) => `${plan.name} (${plan.sqft} sq ft)`)
          .join(', ')
      : 'Live plan cards change; confirm current releases before you tour.'
  const status =
    village.kind === 'sold-out'
      ? 'It is sold out as new construction — ask about resales on those streets.'
      : village.kind === 'rental'
        ? 'It is a rental community; confirm current rates with the leasing office.'
        : 'It is an active for-sale village; lot releases rotate.'

  return [
    {
      question: `What is ${village.name} in Cadence Henderson NV 89011?`,
      answer: `${village.name} is a ${village.builderName} neighborhood inside Cadence Henderson NV 89011. ${status} ${village.summary} Dr. Jan Duffy: ${PHONE}. Office: ${NAP}.`,
    },
    {
      question: `Which floor plans are published at ${village.name}?`,
      answer: `Published plans for ${village.name}: ${planLine}. Asking prices are omitted because they change. Call ${PHONE} for what is actually released this week in Cadence Henderson NV 89011.`,
    },
    {
      question: `How do I tour ${village.name} with a buyer’s agent?`,
      answer: `Call Dr. Jan Duffy at ${PHONE} before the model visit so ${village.builderName} registers her as your agent. Office: ${NAP}. Hours: ${HOURS}. Buyer representation on Cadence new construction is typically paid by the builder.`,
    },
  ]
}
