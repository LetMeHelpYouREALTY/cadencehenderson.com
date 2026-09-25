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
  title: 'Apartments in Cadence Henderson NV | Rentals 89011',
  description:
    'Apartment and built-to-rent communities in Cadence Henderson NV 89011: Ascend Symmetry, Avela, Elysian Homes, Element 12, Adler, and AMH. Call Dr. Jan Duffy.',
  alternates: { canonical: `${BASE}/apartments` },
  openGraph: {
    title: 'Apartments in Cadence Henderson NV | Rentals 89011',
    description:
      'Compare Cadence Henderson apartment communities: Ascend, Avela, Elysian, Element 12, Adler, and American Homes 4 Rent.',
    url: `${BASE}/apartments`,
  },
}

const communities = [
  {
    name: 'Ascend Symmetry',
    href: '/ascend',
    status: 'Leasing',
    summary:
      'Apartment residences with one- to three-bedroom plans from about 647 to 1,387 square feet.',
  },
  {
    name: 'Avela Luxury Apartments',
    href: '/avela-luxury-apartments',
    status: 'Coming soon',
    summary:
      'Studio to two-bedroom apartments with pool, spa, pickleball, fitness, and in-unit laundry planned.',
  },
  {
    name: 'Elysian Homes',
    href: '/elysian',
    status: 'Built-to-rent',
    summary:
      'Single-family style rental homes by Elysian Living inside Cadence, with leasing through the community office.',
  },
  {
    name: 'Element 12',
    href: '/element12',
    status: 'Apartments',
    summary: 'Apartment living with resort-style amenities inside Cadence.',
  },
  {
    name: 'Adler',
    href: '/adler',
    status: 'Apartments',
    summary: 'Contemporary apartments with community spaces in Cadence.',
  },
  {
    name: 'American Homes 4 Rent',
    href: '/american-homes-4-rent',
    status: 'Single-family rentals',
    summary: 'Detached rental homes with professional management in Cadence villages.',
  },
]

export default function ApartmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Apartments & rentals"
        subtitle="Lease inside Cadence Henderson NV 89011 — apartments, coming-soon luxury flats, and built-to-rent homes. Confirm current rates with each leasing office."
        imageSrc={cfImage(SITE_IMAGES.hero.apartments, 'hero')}
        imageAlt="Apartments and rentals in Cadence Henderson NV 89011"
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
        src={cfImage(SITE_IMAGES.rentals.element12, 'hero')}
        alt="Apartments in Cadence Henderson NV 89011"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {communities.map((community) => (
              <article
                key={community.href}
                className="rounded-sm border border-neutral-200 p-6"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {community.status}
                </p>
                <h2 className="mb-3 text-xl font-medium text-neutral-900">
                  <Link href={community.href} className="hover:text-primary">
                    {community.name}
                  </Link>
                </h2>
                <p className="font-light text-neutral-600">{community.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageAeo
        path="/apartments"
        name="Apartments in Cadence Henderson NV | Rentals 89011"
        description="Apartment and built-to-rent communities in Cadence Henderson NV 89011: Ascend Symmetry, Avela, Elysian Homes, Element 12, Adler, and AMH. Call Dr. Jan Duffy."
        faqs={defaultPageFaqs('apartments and rentals in Cadence Henderson')}
        breadcrumbs={[
          { name: 'Apartments in Cadence Henderson' },
        ]}
      />
      <AgentContactCta
        heading="Buying later, leasing now?"
        body="Dr. Jan can match a Cadence rental for this year and keep you on a new-home shortlist when you are ready to purchase."
      />
      <Footer />
    </div>
  )
}
