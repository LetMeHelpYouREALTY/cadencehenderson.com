import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Home, Building2, Landmark } from 'lucide-react'
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
  title: 'Find Your Home in Cadence Henderson NV | Floor Plans',
  description:
    'Search new homes, rentals, and floor plans in Cadence Henderson NV 89011. Compare builders with Dr. Jan Duffy. Live inventory via RealScout.',
  alternates: { canonical: `${BASE}/find-your-home` },
  openGraph: {
    title: 'Find Your Home in Cadence Henderson NV | Floor Plans',
    description:
      'Search new homes and rentals in Cadence Henderson NV 89011. Compare builders with Dr. Jan Duffy.',
    url: `${BASE}/find-your-home`,
  },
}

const builders = [
  { name: 'Beazer Homes', href: '/communities/beazer' },
  { name: 'Century Communities', href: '/new-homes/century-communities' },
  { name: 'D.R. Horton', href: '/new-homes/dr-horton' },
  { name: 'Lennar', href: '/new-homes/lennar' },
  { name: 'Richmond American Homes', href: '/new-homes/richmond-american' },
  { name: 'StoryBook Homes', href: '/new-homes/storybook-homes' },
  { name: 'Taylor Morrison', href: '/new-homes/taylor-morrison' },
  { name: 'Woodside Homes', href: '/new-homes/woodside-homes' },
  { name: 'Harmony Homes', href: '/communities/harmony-homes' },
  { name: 'Toll Brothers', href: '/communities/toll-brothers' },
]

const rentals = [
  { name: 'American Homes 4 Rent', href: '/american-homes-4-rent' },
  { name: 'Element 12', href: '/element12' },
  { name: 'Adler', href: '/adler' },
  { name: 'Ascend Symmetry', href: '/ascend' },
  { name: 'Avela Luxury Apartments', href: '/avela-luxury-apartments' },
  { name: 'Elysian Homes', href: '/elysian' },
]

export default function FindYourHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Find Your Home"
        subtitle="Filter Cadence Henderson inventory by beds, baths, square footage, and builder — then tour with a local buyer’s agent."
        imageSrc={cfImage(SITE_IMAGES.hero.findYourHome, 'hero')}
        imageAlt="New homes and floor plans in Cadence Henderson NV 89011"
        icon={Search}
      >
        <a
          href={CONTACT_INFO.realScoutSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Open live home search
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.homeSearch, 'hero')}
        alt="Search new homes in Cadence Henderson NV 89011"
      />

      <HomeSearchSection />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-extralight tracking-[0.06em] text-neutral-900">
              Search Cadence Henderson NV 89011 by builder
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center font-light text-neutral-600">
              Cadence Henderson includes single-family and townhome collections
              from national and local builders. Dr. Jan Duffy represents buyers
              at no extra cost — the builder pays the fee.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {builders.map((builder) => (
                <li key={builder.href}>
                  <Link
                    href={builder.href}
                    className="flex h-full items-center gap-3 rounded-sm border border-neutral-200 bg-white p-4 text-sm font-medium text-neutral-900 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Home size={18} className="shrink-0 text-primary" aria-hidden />
                    {builder.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-sm font-light text-neutral-500">
              Toll Brothers Concord and Everleigh at Cadence are sold out. Ask
              Dr. Jan about resale homes on those streets.{' '}
              <Link href="/communities" className="font-medium text-primary hover:underline">
                Browse every Cadence village
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-extralight tracking-[0.06em] text-neutral-900">
              Apartments and rental homes in Cadence Henderson NV 89011
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center font-light text-neutral-600">
              Prefer to lease? Cadence also has apartment communities and
              built-to-rent homes. Rates change — confirm current availability
              before you tour.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rentals.map((community) => (
                <li key={community.href}>
                  <Link
                    href={community.href}
                    className="flex h-full items-center gap-3 rounded-sm border border-neutral-200 bg-white p-4 text-sm font-medium text-neutral-900 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Building2 size={18} className="shrink-0 text-primary" aria-hidden />
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link
                href="/apartments"
                className="text-sm font-medium text-primary hover:underline"
              >
                View all Cadence apartment communities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Landmark size={36} className="mb-4 text-primary" aria-hidden />
            <h2 className="mb-4 text-3xl font-extralight tracking-[0.06em] text-neutral-900">
              Compare Cadence Henderson builder incentives before you write an offer
            </h2>
            <p className="mb-8 font-light text-neutral-600">
              Rate buydowns, closing-cost credits, and included upgrades vary by
              builder and lender. Review current options, then tour with a
              buyer’s agent who can compare net monthly cost.
            </p>
            <Link href="/incentives">
              <Button size="lg">See builder incentive types</Button>
            </Link>
          </div>
        </div>
      </section>

      <PageAeo
        path="/find-your-home"
        name="Find Your Home in Cadence Henderson NV | Floor Plans"
        description="Search new homes, rentals, and floor plans in Cadence Henderson NV 89011. Compare builders with Dr. Jan Duffy. Live inventory via RealScout."
        faqs={defaultPageFaqs('finding a new home or rental in Cadence Henderson')}
        breadcrumbs={[
          { name: 'New homes in Cadence Henderson', path: '/new-homes' },
          { name: 'Find your home in Cadence Henderson' },
        ]}
      />
      <AgentContactCta
        heading="Want a shortlist, not a spreadsheet?"
        body="Tell Dr. Jan your beds, budget, and move-in window. You will get matching Cadence floor plans and a tour plan."
      />
      <Footer />
    </div>
  )
}
