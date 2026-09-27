import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { PageGraphSchema } from '@/components/schema/page-graph'

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
          text: 'Cadence is a master-planned community in Henderson, Nevada 89011, offering new homes from multiple builders, world-class amenities, and a vibrant lifestyle. Located just minutes from the Las Vegas Strip and Lake Mead, Cadence Henderson is one of the top 10 best-selling communities in the nation.',
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
          text: 'Cadence Henderson features a 50-acre Central Park, multiple pools and spas, fitness centers, pickleball and sports courts, dog parks, playgrounds, 30+ miles of walking trails, and clubhouses. Most amenities in Cadence Henderson 89011 are free for residents.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the HOA fees in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Cadence Henderson HOA fees vary by neighborhood and builder but typically range from $50–$150/month for the master association, with some sub-associations charging additional fees. Call ${CONTACT_INFO.phone} for current Cadence Henderson HOA fee schedules.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Can I reserve amenities for private events in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Cadence Henderson residents can reserve clubhouses and other amenity spaces for private events through the online resident portal. Some fees may apply.',
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
          text: 'Yes, pets are welcome in Cadence Henderson! The community has dedicated dog parks and pet-friendly trails throughout Cadence Henderson 89011. Individual HOAs may have breed or size restrictions.',
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
          text: 'Cadence Henderson NV 89011 is approximately 20 minutes from the Las Vegas Strip via I-515, giving you easy access to world-class entertainment and dining while enjoying the peace of a master-planned residential community.',
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
