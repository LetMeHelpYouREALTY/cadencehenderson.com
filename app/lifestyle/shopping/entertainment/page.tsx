import type { Metadata } from 'next'
import Link from 'next/link'
import { Film } from 'lucide-react'
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
  title: 'Entertainment Near Cadence Henderson | Henderson NV',
  description:
    'Movies, bowling, and a water park near Cadence Henderson NV 89011: Regal at Sunset Station, Strike Zone, and Cowabunga Bay. Minutes from 89011.',
  alternates: { canonical: `${BASE}/lifestyle/shopping/entertainment` },
  openGraph: {
    title: 'Entertainment Near Cadence Henderson | Henderson NV',
    description:
      'Regal Cinemas, Strike Zone bowling, and Cowabunga Bay water park near Cadence Henderson NV 89011.',
    url: `${BASE}/lifestyle/shopping/entertainment`,
  },
}

const venues = [
  {
    name: 'Cowabunga Bay Water Park',
    type: 'Water park',
    note: 'Seasonal water park with slides, a wave pool, a kids’ cove, and a lazy river. Check seasonal hours and ticket rules before you go.',
  },
  {
    name: 'Regal Cinemas at Sunset Station',
    type: 'Movie theater',
    note: 'Stadium seating and current releases at Sunset Station, a short drive west of Cadence along Sunset Road.',
  },
  {
    name: 'Strike Zone at Sunset Station',
    type: 'Bowling',
    note: 'Large bowling center (72 lanes) with typical arcade and food-service options inside the Sunset Station complex.',
  },
]

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Entertainment near Cadence"
        subtitle="Water slides, first-run movies, and bowling a short drive from Cadence Henderson NV 89011 — plus the Las Vegas Strip about 20 minutes west."
        imageSrc={cfImage(SITE_IMAGES.hero.entertainment, 'hero')}
        imageAlt="Entertainment near Cadence Henderson NV 89011"
        icon={Film}
      >
        <Link href="/lifestyle/shopping/activities">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Outdoor activities
          </Button>
        </Link>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.lifestyle.concert, 'hero')}
        alt="Entertainment near Cadence Henderson NV 89011"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl gap-6">
            {venues.map((venue) => (
              <article
                key={venue.name}
                className="rounded-sm border border-neutral-200 p-6"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {venue.type}
                </p>
                <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                  {venue.name}
                </h2>
                <p className="font-light leading-relaxed text-neutral-600">
                  {venue.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/shopping/entertainment"
        name="Entertainment Near Cadence Henderson | Henderson NV"
        description="Entertainment near Cadence Henderson NV 89011 — theaters, venues, and events. Tour with Dr. Jan Duffy."
        faqs={defaultPageFaqs('entertainment near Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Shopping and dining', path: '/lifestyle/shopping' },
          { name: 'Entertainment near Cadence Henderson' },
        ]}
      />
      <AgentContactCta
        heading="See Cadence, then see a show"
        body="Dr. Jan Duffy maps commute times from specific Cadence villages to Sunset Station, Cowabunga Bay, and the Strip."
      />
      <Footer />
    </div>
  )
}
