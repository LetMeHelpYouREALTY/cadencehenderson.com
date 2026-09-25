import type { Metadata } from 'next'
import Link from 'next/link'
import { Utensils } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { AgentContactCta } from '@/components/cadence/agent-contact-cta'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Button } from '@/components/ui/button'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Restaurants Near Cadence Henderson NV 89011',
  description:
    'Dining near Cadence Henderson NV 89011: Downtown Henderson, The District at Green Valley Ranch, and Sunset Station. Coffee, Mexican, sushi, BBQ, and seafood.',
  alternates: { canonical: `${BASE}/lifestyle/shopping/restaurants` },
  openGraph: {
    title: 'Restaurants Near Cadence Henderson NV 89011',
    description:
      'Restaurants a short drive from Cadence Henderson NV 89011, from Water Street coffee to The District and Sunset Station.',
    url: `${BASE}/lifestyle/shopping/restaurants`,
  },
}

const restaurants = [
  {
    name: 'Public Works Coffee Bar',
    area: 'Historic Water Street, Downtown Henderson',
    note: 'Independent coffee and tea bar with espresso drinks, pastries, and lunch items from local vendors.',
  },
  {
    name: 'Juan’s Flaming Fajitas',
    area: 'Downtown Henderson',
    note: 'Mexican plates including chile rellenos, carnitas, mole enchiladas, and sizzling fajitas.',
  },
  {
    name: 'Chinitas Tapas & Sushi',
    area: 'Henderson',
    note: 'Menu that mixes Mexican and Asian dishes, including tapas and sushi.',
  },
  {
    name: 'Borracha Mexican Cantina',
    area: 'Near Cadence',
    note: 'Mexican kitchen with beer, wine, margaritas, mezcal, and a long tequila list.',
  },
  {
    name: 'King’s Fish House',
    area: 'The District at Green Valley Ranch',
    note: 'Seafood counter with sushi, oysters, and cooked fish in an open-air shopping district.',
  },
  {
    name: 'Lucille’s Smokehouse Bar-B-Que',
    area: 'Henderson / Green Valley',
    note: 'Slow-smoked Southern-style barbecue a short drive from Cadence.',
  },
  {
    name: 'The Cheesecake Factory',
    area: 'Galleria at Sunset area',
    note: 'Large scratch-menu restaurant with extensive dessert case.',
  },
  {
    name: 'P.F. Chang’s',
    area: 'Henderson',
    note: 'Chinese-American bistro known for lettuce wraps and shareable plates.',
  },
]

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Restaurants near Cadence"
        subtitle="From Water Street coffee to The District and Sunset Station — dining a short drive from Cadence Henderson NV 89011."
        imageSrc={cfImage(SITE_IMAGES.hero.restaurants, 'hero')}
        imageAlt="Dining near Cadence Henderson NV 89011"
        icon={Utensils}
      >
        <Link href="/lifestyle/shopping">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Shopping and dining map
          </Button>
        </Link>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.shopping.district, 'hero')}
        alt="Dining near Cadence Henderson NV 89011"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="mb-10 font-light leading-relaxed text-neutral-600">
              Cadence Henderson sits between Downtown Henderson, the Galleria at
              Sunset, and The District at Green Valley Ranch. Hours and menus
              change — confirm before you go. This list is a starting point, not
              a ranking.
            </p>
            <ul className="space-y-6">
              {restaurants.map((place) => (
                <li
                  key={place.name}
                  className="border-b border-neutral-200 pb-6 last:border-0"
                >
                  <h2 className="text-xl font-medium text-neutral-900">
                    {place.name}
                  </h2>
                  <p className="mb-2 text-sm text-primary">{place.area}</p>
                  <p className="font-light text-neutral-600">{place.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/shopping/restaurants"
        name="Restaurants Near Cadence Henderson NV 89011"
        description="Dining near Cadence Henderson NV 89011 — Cadence Marketplace and nearby Henderson corridors. Tour homes with Dr. Jan Duffy."
        faqs={defaultPageFaqs('restaurants near Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Shopping and dining', path: '/lifestyle/shopping' },
          { name: 'Restaurants near Cadence Henderson' },
        ]}
      />
      <AgentContactCta
        heading="Tour Cadence, then stay for dinner"
        body="Schedule a model-home loop with Dr. Jan Duffy, then pick a table on Water Street or at The District."
      />
      <Footer />
    </div>
  )
}
