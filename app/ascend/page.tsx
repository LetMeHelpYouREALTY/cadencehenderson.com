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
  title: 'Ascend Symmetry Apartments | Cadence Henderson NV',
  description:
    'Ascend Symmetry apartments in Cadence Henderson NV 89011. Plans from 647 to 1,387 sq ft (1–3 bedrooms). Leasing 702-444-7754. Buyer help from Dr. Jan Duffy.',
  alternates: { canonical: `${BASE}/ascend` },
  openGraph: {
    title: 'Ascend Symmetry Apartments | Cadence Henderson NV',
    description:
      'One- to three-bedroom apartments at Ascend Symmetry in Cadence Henderson NV 89011. Call leasing for current rents.',
    url: `${BASE}/ascend`,
  },
}

const plans = [
  { name: 'A1', sqft: '647', beds: 1, baths: 1 },
  { name: 'A2', sqft: '739', beds: 1, baths: 1 },
  { name: 'B1', sqft: '1,093', beds: 2, baths: 2 },
  { name: 'C1', sqft: '1,387', beds: 3, baths: 2 },
]

export default function AscendPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Ascend Symmetry"
        subtitle="Apartment residences inside Cadence Henderson NV 89011. One- to three-bedroom plans. Rents change — call the leasing office for today’s numbers."
        imageSrc={cfImage(SITE_IMAGES.hero.ascend, 'hero')}
        imageAlt="Ascend Symmetry apartments in Cadence Henderson NV 89011"
        icon={Building2}
      >
        <a href="tel:7024447754">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Ascend leasing 702-444-7754
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.hero.ascend, 'card')}
        alt="Ascend residences in Cadence Henderson NV 89011"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-extralight tracking-[0.06em] text-neutral-900">
              Published floor plans
            </h2>
            <p className="mb-8 font-light text-neutral-600">
              Square footage and bedroom counts below come from the Cadence
              community listing for Ascend Symmetry. Availability and rent are
              not listed here because they change. Call 702-444-7754 for leasing.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-3 font-medium">Plan</th>
                    <th className="py-3 font-medium">Beds</th>
                    <th className="py-3 font-medium">Baths</th>
                    <th className="py-3 font-medium">Sq ft</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan) => (
                    <tr key={plan.name} className="border-b border-neutral-100">
                      <td className="py-3">{plan.name}</td>
                      <td className="py-3">{plan.beds}</td>
                      <td className="py-3">{plan.baths}</td>
                      <td className="py-3">{plan.sqft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 font-light text-neutral-600">
              Looking to buy instead of lease? Dr. Jan Duffy represents Cadence
              buyers at {CONTACT_INFO.phone}.{' '}
              <Link href="/find-your-home" className="text-primary hover:underline">
                Search homes for sale
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <PageAeo
        path="/ascend"
        name="Ascend Symmetry Apartments | Cadence Henderson NV"
        description="Ascend Symmetry apartments in Cadence Henderson NV 89011. Plans from 647 to 1,387 sq ft (1–3 bedrooms). Leasing 702-444-7754. Buyer help from Dr. Jan Duffy."
        faqs={defaultPageFaqs('Ascend Symmetry apartments in Cadence Henderson')}
        breadcrumbs={[
          { name: 'Apartments in Cadence Henderson', path: '/apartments' },
          { name: 'Ascend Symmetry' },
        ]}
      />
      <AgentContactCta
        heading="Lease now, buy in Cadence later"
        body="Keep a relationship with a Cadence buyer’s agent while you rent at Ascend. When you are ready, the builder typically pays Dr. Jan’s fee."
      />
      <Footer />
    </div>
  )
}
