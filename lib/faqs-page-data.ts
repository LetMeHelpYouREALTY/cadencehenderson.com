/**
 * Single source of truth for /faqs visible Q&A and FAQPage JSON-LD.
 * Keep question/answer strings identical in UI and schema.
 */

import { CONTACT_INFO } from '@/components/cadence/contact-info'
import type { FaqItem } from '@/lib/page-aeo'

const PHONE = CONTACT_INFO.phone
const OFFICE = CONTACT_INFO.welcomeCenter

export type FaqCategory = {
  category: string
  heading: string
  questions: FaqItem[]
}

export const FAQS_PAGE_CATEGORIES: FaqCategory[] = [
  {
    category: 'General',
    heading: 'Cadence Henderson NV 89011 basics',
    questions: [
      {
        question: 'What is Cadence?',
        answer:
          'Cadence is a master-planned community in Henderson, Nevada, offering new homes from multiple builders, world-class amenities, and a vibrant lifestyle. Located just minutes from the Las Vegas Strip and Lake Mead, Cadence is one of the top 10 best-selling communities in the nation.',
      },
      {
        question: 'Where is Cadence located?',
        answer: `Cadence is a master-planned community in Henderson, Nevada 89011 (near Bicentennial Pkwy / Paseo Verde). The Cadence sales and real estate office for tours with Dr. Jan Duffy is at ${OFFICE}. The community is approximately 20 minutes from the Las Vegas Strip, 15 minutes from Harry Reid International Airport, and minutes from Lake Mead.`,
      },
      {
        question: 'What is the price range for homes in Cadence?',
        answer:
          'Home prices in Cadence range from approximately $300,000 to $650,000, depending on the builder, floor plan, and lot selection. Townhomes, single-family plans, and larger estates are all listed in that spread.',
      },
    ],
  },
  {
    category: 'Homes & Builders',
    heading: 'Cadence Henderson homes and builders',
    questions: [
      {
        question: 'How many builders are in Cadence?',
        answer:
          'Cadence features 8 award-winning homebuilders: Beazer Homes, Century Communities, D.R. Horton, Lennar, Richmond American Homes, StoryBook Homes, Taylor Morrison, and Woodside Homes. Each builder offers unique floor plans and design options.',
      },
      {
        question: 'Can I tour model homes?',
        answer: `Yes! Model homes are open daily from 10 AM to 6 PM. You can tour multiple builders in one visit to compare floor plans and features. Call ${PHONE} to schedule a personal tour or visit the Welcome Center at ${OFFICE}.`,
      },
      {
        question: 'Are there move-in ready homes available?',
        answer: `Yes, many builders have quick move-in homes available. These homes are either completed or nearing completion and can close in 30-60 days. Call ${PHONE} for current Cadence inventory.`,
      },
      {
        question: 'What types of homes are available?',
        answer:
          'Cadence offers single-family homes, townhomes, and estate homes ranging from 1,500 to 3,500+ square feet with 2-5 bedrooms. Many homes include smart home technology, energy-efficient features, and modern designs.',
      },
    ],
  },
  {
    category: 'Amenities',
    heading: 'Cadence Henderson amenities',
    questions: [
      {
        question: 'What amenities are included?',
        answer:
          'Cadence features a 50-acre Central Park, multiple pools and spas, fitness centers, sports courts, dog parks, playgrounds, walking trails, and clubhouses. Many amenities are free for residents.',
      },
      {
        question: 'Are there HOA fees?',
        answer: `Yes, Cadence has HOA fees that cover maintenance of common areas, amenities, landscaping, and community services. Fees vary by neighborhood. Call ${PHONE} for specific HOA information.`,
      },
      {
        question: 'Can I reserve amenities for private events?',
        answer:
          'Yes, residents can reserve clubhouses and other amenity spaces for private events through the online resident portal. Some fees may apply.',
      },
    ],
  },
  {
    category: 'Schools',
    heading: 'Campuses serving Cadence Henderson',
    questions: [
      {
        question: 'What schools serve Cadence?',
        answer:
          'Cadence Henderson NV 89011 is served by Clark County School District campuses including Cadence Elementary School (on-site), Henderson-area middle schools, and Green Valley High School. Confirm the attendance zone for a specific address before you buy. Nearby private campuses include The Henderson International School, Faith Lutheran, and The Meadows School.',
      },
      {
        question: 'Is there a school within the community?',
        answer:
          'Yes. Cadence Elementary School (K–5) sits inside Cadence Henderson NV 89011, so many streets are a short walk or drive to campus. Confirm the zone for your lot.',
      },
    ],
  },
  {
    category: 'Living in Cadence',
    heading: 'Living in Cadence Henderson NV 89011',
    questions: [
      {
        question: 'Are pets allowed?',
        answer:
          'Yes, pets are welcome in Cadence! We have dedicated dog parks and pet-friendly trails throughout the community. Individual HOAs may have breed or size restrictions.',
      },
      {
        question: 'What internet providers serve Cadence?',
        answer:
          'Cadence has access to high-speed fiber internet and multiple providers including Cox Communications and CenturyLink. Many homes are smart-home ready.',
      },
      {
        question: 'Is there shopping and dining nearby?',
        answer:
          "Yes! Cadence Marketplace is within the community, and the Galleria at Sunset mall is just 5 minutes away. You'll find grocery stores, restaurants, retail shops, and entertainment options all nearby.",
      },
      {
        question: 'How far is Cadence from the Las Vegas Strip?',
        answer:
          'Cadence is approximately 20 minutes from the Las Vegas Strip, giving you easy access to world-class entertainment, dining, and shows while enjoying the peace of a residential community.',
      },
    ],
  },
]

/** Flat list for FAQPage JSON-LD — must match visible accordion answers. */
export function getFaqsPageItems(): FaqItem[] {
  return FAQS_PAGE_CATEGORIES.flatMap((cat) => cat.questions)
}
