import type { Metadata } from 'next'
import Link from 'next/link'
import { Trees, MapPin } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import { AgentContactCta } from '@/components/cadence/agent-contact-cta'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Button } from '@/components/ui/button'
import { cfImage, SITE_IMAGES, getAmenityImage } from '@/lib/cloudflare-images'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Pocket Parks in Cadence Henderson | Neighborhood Parks',
  description:
    'Neighborhood pocket parks in Cadence Henderson NV 89011: tot lots, benches, turf, and short walks to Central Park and trails. Tour the green spaces with Dr. Jan Duffy.',
  alternates: { canonical: `${BASE}/lifestyle/parks-trails/pocket-parks` },
  openGraph: {
    title: 'Pocket Parks in Cadence Henderson | Neighborhood Parks',
    description:
      'Small neighborhood parks throughout Cadence Henderson NV 89011 with playgrounds, seating, and trail connections.',
    url: `${BASE}/lifestyle/parks-trails/pocket-parks`,
  },
}

const features = [
  {
    title: 'Play structures',
    body: 'Tot lots and playground equipment sit inside many Cadence villages so a short walk covers daily outdoor time without driving to Central Park.',
  },
  {
    title: 'Seating and shade',
    body: 'Benches, turf, and shade structures give neighbors a place to pause between errands, dog walks, and evening strolls.',
  },
  {
    title: 'Trail connections',
    body: 'Pocket parks typically link to sidewalks and community paths that continue toward Central Park, Desert Pulse Park, and the wider trail network.',
  },
  {
    title: 'Pet stations',
    body: 'Waste stations and nearby dog parks keep the smaller greens usable. Confirm HOA pet rules for your specific village before you move in.',
  },
]

export default function PocketParksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Pocket parks"
        subtitle="Small neighborhood greens tucked into Cadence villages — playgrounds, benches, and walking links to the 50-acre Central Park."
        imageSrc={cfImage(SITE_IMAGES.hero.pocketParks, 'hero')}
        imageAlt="Neighborhood pocket parks in Cadence Henderson NV 89011"
        icon={Trees}
      >
        <Link href="/lifestyle/parks-trails">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            <MapPin className="mr-2" size={20} />
            See parks and trails
          </Button>
        </Link>
      </PageHero>

      <RealScoutOfficeListings />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div className="relative h-[360px] overflow-hidden rounded-sm">
              <SiteImage
                src={getAmenityImage('playground', 'card')}
                alt="Playground in a Cadence Henderson neighborhood park"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-extralight tracking-[0.06em] text-neutral-900">
                Parks scaled to the block
              </h2>
              <p className="mb-4 font-light leading-relaxed text-neutral-600">
                Cadence Henderson is not only the large Central Park. The master
                plan sprinkles pocket parks through residential villages so most
                homes sit a short walk from a green. These spaces are smaller
                than the 50-acre park: a playground, turf, and seating rather
                than event lawns and splash pads.
              </p>
              <p className="font-light leading-relaxed text-neutral-600">
                When you tour lots, note which pocket park is nearest the
                driveway and how the sidewalk connects to the main loop trail.
                That walk is part of daily life here — not a weekend outing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-sm bg-white p-6">
                <h3 className="mb-3 text-lg font-medium text-neutral-900">
                  {feature.title}
                </h3>
                <p className="font-light leading-relaxed text-neutral-600">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/parks-trails/pocket-parks"
        name="Pocket Parks in Cadence Henderson | Neighborhood Parks"
        description="Pocket parks and trail connections inside Cadence Henderson NV 89011. Square footage of play areas varies by village. Tour with Dr. Jan Duffy."
        faqs={defaultPageFaqs('pocket parks in Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Parks and trails', path: '/lifestyle/parks-trails' },
          { name: 'Pocket parks' },
        ]}
      />
      <AgentContactCta
        heading="Want homes near a pocket park?"
        body="Dr. Jan can filter Cadence inventory by village and walk time to the nearest playground, trail, or Central Park gate."
      />
      <Footer />
    </div>
  )
}
