import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { AgentContactCta } from '@/components/cadence/agent-contact-cta'
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
  title: 'Life at Cadence Henderson | Community Guide 89011',
  description:
    'Daily life in Cadence Henderson NV 89011: 50-acre Central Park, pools, trails, builders, and commute times to Lake Mead, the airport, and the Strip.',
  alternates: { canonical: `${BASE}/realtors/life-at-cadence` },
  openGraph: {
    title: 'Life at Cadence Henderson | Community Guide 89011',
    description:
      'What daily life looks like in Cadence Henderson NV 89011 — amenities, location, and how Dr. Jan Duffy helps buyers tour the community.',
    url: `${BASE}/realtors/life-at-cadence`,
  },
}

const facts = [
  {
    title: 'Master-planned scale',
    body: 'Cadence is a large Henderson community with multiple builders, rental communities, and a 50-acre Central Park at the core. Villages sit on a grid of trails and pocket parks rather than a single amenity cluster.',
  },
  {
    title: 'Location',
    body: 'The community is in Henderson 89011. Typical drives: Lake Mead National Recreation Area to the east, Harry Reid International Airport and the Las Vegas Strip to the west. Confirm commute at the hour you actually travel.',
  },
  {
    title: 'Schools by name',
    body: 'Cadence Elementary School is inside the community. Nearby Clark County campuses include Henderson-area middle and high schools such as Green Valley High School. Attendance zones change — verify with CCSD for a specific address.',
  },
  {
    title: 'On-site recreation',
    body: 'Residents use pools, splash pads, fitness rooms, pickleball and sports courts, dog parks, clubhouses, and miles of walking paths. Amenity access and HOA dues vary by village.',
  },
]

export default function LifeAtCadencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Life at Cadence"
        subtitle="A working brief for buyers and cooperating agents: parks, pools, commute, and how Cadence Henderson actually lives day to day."
        imageSrc={cfImage(SITE_IMAGES.hero.lifeAtCadence, 'hero')}
        imageAlt="Daily life in Cadence Henderson NV 89011"
        icon={Sparkles}
      >
        <Link href="/realtors/realtor-toolkit">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Realtor toolkit
          </Button>
        </Link>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.lifestyle.community, 'hero')}
        alt="Daily life in Cadence Henderson NV 89011"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-10">
            {facts.map((item) => (
              <article key={item.title}>
                <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                  {item.title}
                </h2>
                <p className="font-light leading-relaxed text-neutral-600">
                  {item.body}
                </p>
              </article>
            ))}
            <p className="font-light leading-relaxed text-neutral-600">
              Dr. Jan Duffy, REALTOR® (license {CONTACT_INFO.licenseNumber}) with{' '}
              {CONTACT_INFO.brokerage}, tours Cadence with buyers at{' '}
              {CONTACT_INFO.welcomeCenter}. Call {CONTACT_INFO.phone}.
            </p>
          </div>
        </div>
      </section>

      <PageAeo
        path="/realtors/life-at-cadence"
        name="Life at Cadence Henderson | Community Guide 89011"
        description="How Cadence Henderson NV 89011 actually tours: villages, amenities, and commute. Briefing for cooperating Realtors from Dr. Jan Duffy."
        faqs={defaultPageFaqs('life at Cadence Henderson for buyer tours')}
        breadcrumbs={[
          { name: 'Realtors', path: '/realtors' },
          { name: 'Life at Cadence' },
        ]}
      />
      <AgentContactCta
        heading="Walk Cadence with a local agent"
        body="A 15-minute call sets a model-home route, village shortlist, and commute check from the address you care about."
      />
      <Footer />
    </div>
  )
}
