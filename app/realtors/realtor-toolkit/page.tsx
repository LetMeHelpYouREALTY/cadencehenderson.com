import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { AgentContactCta } from '@/components/cadence/agent-contact-cta'
import { HomeSearchSection } from '@/components/cadence/home-search-section'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Cadence Henderson Realtor Toolkit | Agent Resources',
  description:
    'Co-broke resources for Cadence Henderson NV 89011: maps, amenities, builder list, live search, and how to tour with Dr. Jan Duffy. Fair Housing reminder included.',
  alternates: { canonical: `${BASE}/realtors/realtor-toolkit` },
  openGraph: {
    title: 'Cadence Henderson Realtor Toolkit | Agent Resources',
    description:
      'Maps, builder list, amenity facts, and live inventory links for agents showing Cadence Henderson NV 89011.',
    url: `${BASE}/realtors/realtor-toolkit`,
  },
}

const resources = [
  { label: 'Community maps and directions', href: '/maps' },
  { label: 'Amenities and Central Park', href: '/lifestyle/amenities' },
  { label: 'Parks, trails, and pocket parks', href: '/lifestyle/parks-trails' },
  { label: 'Schools by campus name', href: '/lifestyle/schools' },
  { label: 'Find a home / live inventory', href: '/find-your-home' },
  { label: 'Builder incentive types', href: '/incentives' },
  { label: 'Life at Cadence briefing', href: '/realtors/life-at-cadence' },
  { label: 'FAQs buyers actually ask', href: '/faqs' },
]

const talkingPoints = [
  'Cadence Henderson is in ZIP 89011, east Henderson, with Lake Mead recreation to the east and I-215 / the Strip to the west.',
  'Central Park is nearly 50 acres. Pocket parks and trails fill the villages; amenity keys and HOA dues vary by sub-association.',
  'Active new-home builders include Beazer, Century Communities, D.R. Horton, Lennar, Richmond American, StoryBook, Taylor Morrison, and Woodside. Toll Brothers Everleigh is sold out.',
  'Rental options include American Homes 4 Rent, Element 12, Adler, Ascend Symmetry, Avela (coming soon), and Elysian Homes (built-to-rent).',
  'Name schools (Cadence Elementary, Green Valley High, and other CCSD campuses). Do not describe neighborhoods with school ratings or protected-class proxies.',
]

export default function RealtorToolkitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Realtor toolkit"
        subtitle="Links and talking points for agents showing Cadence Henderson. Co-broke with Dr. Jan Duffy when you need a local new-construction specialist."
        imageSrc={cfImage(SITE_IMAGES.hero.realtorToolkit, 'hero')}
        imageAlt="Realtor resources for Cadence Henderson NV 89011"
        icon={Briefcase}
      >
        <a href={`mailto:${CONTACT_INFO.email}?subject=Cadence co-broke`}>
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Email Dr. Jan
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.homes.kitchen, 'hero')}
        alt="Cadence Henderson NV 89011 new home interior"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-medium text-neutral-900">
                Quick links
              </h2>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-medium text-primary hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-medium text-neutral-900">
                Talking points
              </h2>
              <ul className="space-y-4">
                {talkingPoints.map((point) => (
                  <li
                    key={point}
                    className="font-light leading-relaxed text-neutral-600"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-3 text-xl font-medium text-neutral-900">
              Fair Housing
            </h2>
            <p className="font-light leading-relaxed text-neutral-600">
              Marketing for Cadence Henderson must follow the Fair Housing Act.
              Describe square footage, amenities, campus names, and commute
              times. Do not use protected-class language or proxies such as
              “family-friendly,” “safe neighborhood,” or school-quality claims.
            </p>
          </div>
        </div>
      </section>

      <HomeSearchSection compact />

      <PageAeo
        path="/realtors/realtor-toolkit"
        name="Cadence Henderson Realtor Toolkit | Agent Resources"
        description="Cadence Henderson talking points, village links, and Fair Housing reminders for cooperating agents. Dr. Jan Duffy, Henderson NV 89011."
        faqs={defaultPageFaqs('showing Cadence Henderson as a cooperating realtor')}
        breadcrumbs={[
          { name: 'Realtors', path: '/realtors' },
          { name: 'Realtor toolkit' },
        ]}
      />
      <AgentContactCta
        heading="Need a Cadence co-broke?"
        body={`${CONTACT_INFO.brokerage} · License ${CONTACT_INFO.licenseNumber} · ${CONTACT_INFO.welcomeCenter}`}
      />
      <Footer />
    </div>
  )
}
