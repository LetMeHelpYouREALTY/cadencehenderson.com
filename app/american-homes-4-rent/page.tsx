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
import { getVillagesByBuilder } from '@/lib/cadence-nv-catalog'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'
const villages = getVillagesByBuilder('american-homes-4-rent')

export const metadata: Metadata = {
  title: 'American Homes 4 Rent | Cadence Henderson NV',
  description:
    'AMH rental villages in Cadence Henderson NV 89011: Pine Landing and Vista del Mar. Detached-home leases. Confirm current rents. Dr. Jan Duffy for buyers.',
  alternates: { canonical: `${BASE}/american-homes-4-rent` },
  openGraph: {
    title: 'American Homes 4 Rent | Cadence Henderson NV',
    description:
      'Pine Landing and Vista del Mar rental homes inside Cadence Henderson NV 89011.',
    url: `${BASE}/american-homes-4-rent`,
  },
}

export default function AmericanHomesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="American Homes 4 Rent"
        subtitle="Detached rental homes in Cadence Henderson NV 89011 — Pine Landing and Vista del Mar. Rents change; this is not a rate sheet."
        imageSrc={cfImage(SITE_IMAGES.hero.rentalAmericanHomes, 'hero')}
        imageAlt="American Homes 4 Rent in Cadence Henderson NV 89011"
        icon={Building2}
      >
        <a
          href={CONTACT_INFO.realScoutRentalsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Search rental listings
          </Button>
        </a>
      </PageHero>
      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.rentals.americanHomes, 'hero')}
        alt="Build-to-rent homes in Cadence Henderson NV 89011"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ul className="mx-auto max-w-3xl space-y-8">
            {villages.map((village) => (
              <li key={village.cadencePath}>
                <h2 className="text-2xl font-medium text-neutral-900">
                  <Link href={village.cadencePath} className="hover:text-primary">
                    {village.name}
                  </Link>
                </h2>
                <p className="mt-2 font-light text-neutral-600">{village.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <PageAeo
        path="/american-homes-4-rent"
        name="American Homes 4 Rent | Cadence Henderson NV"
        description="AMH rental villages in Cadence Henderson NV 89011: Pine Landing and Vista del Mar. Detached-home leases. Confirm current rents. Dr. Jan Duffy for buyers."
        faqs={defaultPageFaqs('American Homes 4 Rent in Cadence Henderson')}
        breadcrumbs={[
          { name: 'Apartments in Cadence Henderson', path: '/apartments' },
          { name: 'American Homes 4 Rent' },
        ]}
      />
      <AgentContactCta
        heading="Leasing now, buying later?"
        body="Dr. Jan can keep you on a Cadence new-home shortlist while you rent an AMH house in 89011."
      />
      <Footer />
    </div>
  )
}
