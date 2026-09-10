import type { Metadata } from 'next'
import Link from 'next/link'
import { Home } from 'lucide-react'
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
  title: 'Elysian Homes Rentals | Cadence Henderson NV',
  description:
    'Elysian Homes built-to-rent houses in Cadence Henderson NV 89011. Single-family style rentals by Elysian Living. Leasing 702-333-0619.',
  alternates: { canonical: `${BASE}/elysian` },
  openGraph: {
    title: 'Elysian Homes Rentals | Cadence Henderson NV',
    description:
      'Built-to-rent homes by Elysian Living inside Cadence Henderson NV 89011. Call 702-333-0619 for leasing.',
    url: `${BASE}/elysian`,
  },
}

export default function ElysianPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Elysian Homes"
        subtitle="Built-to-rent houses inside Cadence Henderson NV 89011 by Elysian Living. Detached-home layouts with the option to lease instead of buy."
        imageSrc={cfImage(SITE_IMAGES.hero.elysian, 'hero')}
        imageAlt="Elysian Homes built-to-rent community in Cadence Henderson NV 89011"
        icon={Home}
      >
        <a href="tel:7023330619">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Elysian leasing 702-333-0619
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.hero.elysian, 'card')}
        alt="Elysian homes in Cadence Henderson NV 89011"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6 font-light leading-relaxed text-neutral-600">
            <h2 className="text-3xl font-extralight tracking-[0.06em] text-neutral-900">
              Rent a house inside the master plan
            </h2>
            <p>
              Elysian Homes at Cadence is a built-to-rent collection: houses
              designed for leasing rather than for-sale inventory. Expect more
              interior square footage than a typical apartment, with Cadence
              amenities — Central Park, trails, and pools — still part of daily
              life.
            </p>
            <p>
              Finishes and lot availability change. The community leasing line
              published for Elysian is 702-333-0619. Do not treat that number as
              Dr. Jan Duffy’s direct line; her office is {CONTACT_INFO.phone}.
            </p>
            <p>
              If you want to purchase in the same zip,{' '}
              <Link href="/find-your-home" className="text-primary hover:underline">
                search Cadence homes for sale
              </Link>{' '}
              or compare{' '}
              <Link href="/incentives" className="text-primary hover:underline">
                builder incentive types
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <PageAeo
        path="/elysian"
        name="Elysian Homes Rentals | Cadence Henderson NV"
        description="Elysian built-to-rent homes in Cadence Henderson NV 89011. Single-family style leases. Confirm current rents with the leasing office. Dr. Jan Duffy for buyers."
        faqs={defaultPageFaqs('Elysian Homes rentals in Cadence Henderson')}
        breadcrumbs={[
          { name: 'Apartments in Cadence Henderson', path: '/apartments' },
          { name: 'Elysian Homes' },
        ]}
      />
      <AgentContactCta
        heading="Compare lease vs. buy in 89011"
        body="Dr. Jan will run a side-by-side of Elysian-style rent versus a new Cadence mortgage after incentives — using today’s rates, not a flyer."
      />
      <Footer />
    </div>
  )
}
