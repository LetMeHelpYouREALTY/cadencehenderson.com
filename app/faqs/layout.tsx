import type { Metadata } from 'next'
import { CONTACT_INFO, HOA_CONTACT } from '@/components/cadence/contact-info'
import { PageGraphSchema } from '@/components/schema/page-graph'
import {
  amenitiesFaqAnswer,
  amenityReservationFaqAnswer,
} from '@/lib/cadence-amenities'

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

/** Full FAQPage schema matching all questions on the /faqs page */
function FaqsPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence is a master-planned community in Henderson, Nevada 89011, with new homes from multiple builders, Central Park amenities, and neighborhoods near the Las Vegas Strip and Lake Mead. Tour with Dr. Jan Duffy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Cadence Henderson located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence Henderson is located at 2450 Paseo Verde Parkway, Henderson, Nevada 89011. The community sits near Bicentennial Pkwy and is approximately 20 minutes from the Las Vegas Strip, 15 minutes from Harry Reid International Airport, and just minutes from Lake Mead.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the price range for homes in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Home prices in Cadence Henderson 89011 range from approximately $300,000 to $650,000, depending on the builder, floor plan, and lot selection. New construction townhomes start in the mid-$300s; single-family homes and estates range from $380K to $650K+.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many builders are in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence Henderson features 8 award-winning homebuilders: Beazer Homes, Century Communities, D.R. Horton, Lennar, Richmond American Homes, StoryBook Homes, Taylor Morrison, and Woodside Homes. Each builder offers unique floor plans and design options in Henderson NV 89011.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I tour model homes in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes! Cadence Henderson model homes are open daily from 10 AM to 6 PM. You can tour multiple builders in one visit to compare floor plans and features. Call ${CONTACT_INFO.phone} to schedule a personal tour or visit our Welcome Center at ${CONTACT_INFO.welcomeCenter}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Are there move-in ready homes available in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, many builders in Cadence Henderson 89011 have quick move-in homes available. These homes are either completed or nearing completion and can close in 30–60 days. Check with individual builders or call ${CONTACT_INFO.phone} for current Cadence Henderson inventory.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What types of homes are available in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence Henderson offers single-family homes, townhomes, and estate homes ranging from 1,500 to 3,500+ square feet with 2–5 bedrooms. Many homes in Cadence Henderson NV 89011 include smart home technology, energy-efficient features, and modern designs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities does Cadence Henderson have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: amenitiesFaqAnswer(),
        },
      },
      {
        '@type': 'Question',
        name: 'What are the HOA fees in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Cadence Henderson Master Association assessments and any sub-association dues vary by neighborhood and change over time. This site does not publish fee ranges. Call the Cadence Master Association at ${HOA_CONTACT.phone} or email ${HOA_CONTACT.email} for current amounts. Call ${CONTACT_INFO.phone} for Cadence home-buying questions with Dr. Jan Duffy.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Can I reserve amenities for private events in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: amenityReservationFaqAnswer(),
        },
      },
      {
        '@type': 'Question',
        name: 'What schools serve Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence Henderson NV 89011 is served by Clark County School District campuses including Cadence Elementary School (on-site), Henderson-area middle schools, and Green Valley High School. Confirm the attendance zone for a specific address. Nearby private campuses include The Henderson International School, Faith Lutheran, and The Meadows School.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a school within Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Cadence Elementary School (K–5) is located inside Cadence Henderson NV 89011. Confirm the attendance zone for the lot you are touring.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are pets allowed in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, pets are welcome in Cadence Henderson. Official amenities include a dog park and park trails — confirm leash rules with the Master Association at 702-605-3111. Individual village HOAs may have breed or size restrictions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there shopping and dining near Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Cadence Marketplace is within the Cadence Henderson community, and the Galleria at Sunset mall is just 5 minutes away on Stephanie St in Henderson NV 89014. You\'ll find grocery stores, restaurants, retail shops, and entertainment all nearby.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is Cadence Henderson from the Las Vegas Strip?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence Henderson NV 89011 is approximately 20 minutes from the Las Vegas Strip via I-515, with access to entertainment and dining while living in a residential master-planned community.',
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
