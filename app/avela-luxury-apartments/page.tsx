import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2 } from 'lucide-react'
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
  title: 'Avela Luxury Apartments | Cadence Henderson NV',
  description:
    'Avela Luxury Apartments coming soon in Cadence Henderson NV 89011. Studios to two bedrooms, pool, spa, pickleball, fitness. Leasing 888-340-3450.',
  alternates: { canonical: `${BASE}/avela-luxury-apartments` },
  openGraph: {
    title: 'Avela Luxury Apartments | Cadence Henderson NV',
    description:
      'Coming-soon apartments in Cadence Henderson NV 89011 with pool, pickleball, fitness, and in-unit laundry. Join the interest list.',
    url: `${BASE}/avela-luxury-apartments`,
  },
}

const amenities = [
  'Heated pool and spa',
  'Pickleball court',
  'Putting green',
  'Fitness center',
  'Game room',
  'Poolside cinema',
  'Dog parks',
  'Private garages on select homes',
  'Quartz counters and stainless appliances',
  'In-unit washer and dryer',
]

export default function AvelaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Avela Luxury Apartments"
        subtitle="Coming soon in Cadence Henderson NV 89011. Studio, one-, and two-bedroom residences. Join the interest list with the leasing office."
        imageSrc={cfImage(SITE_IMAGES.hero.avela, 'hero')}
        imageAlt="Avela Luxury Apartments coming soon in Cadence Henderson NV 89011"
        icon={Building2}
      >
        <a href="tel:8883403450">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Avela leasing 888-340-3450
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.hero.avela, 'card')}
        alt="Avela apartments in Cadence Henderson NV 89011"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-extralight tracking-[0.06em] text-neutral-900">
              Planned finishes and amenities
            </h2>
            <p className="mb-8 font-light leading-relaxed text-neutral-600">
              Avela is listed as coming soon on the Cadence community site.
              Planned interiors include quartz counters, stainless appliances,
              and in-unit laundry. Outdoor and recreation spaces listed by the
              community include:
            </p>
            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {amenities.map((item) => (
                <li key={item} className="font-light text-neutral-700">
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-light text-neutral-600">
              Leasing contact published by Avela: 888-340-3450 or{' '}
              <a
                href="mailto:leasing@avelaapts.com"
                className="text-primary hover:underline"
              >
                leasing@avelaapts.com
              </a>
              . For Cadence homes for sale, call Dr. Jan Duffy at{' '}
              {CONTACT_INFO.phone}.
            </p>
          </div>
        </div>
      </section>

      <PageAeo
        path="/avela-luxury-apartments"
        name="Avela Luxury Apartments | Cadence Henderson NV"
        description="Avela luxury apartments coming to Cadence Henderson NV 89011. Studio to two-bedroom plans. Confirm leasing with the community office. Dr. Jan Duffy for buyers."
        faqs={defaultPageFaqs('Avela luxury apartments in Cadence Henderson')}
        breadcrumbs={[
          { name: 'Apartments in Cadence Henderson', path: '/apartments' },
          { name: 'Avela Luxury Apartments' },
        ]}
      />
      <AgentContactCta
        heading="Need a Cadence home while Avela is under construction?"
        body="Dr. Jan can show current apartments, built-to-rent homes, and new-construction inventory in 89011."
      />
      <Footer />
    </div>
  )
}
