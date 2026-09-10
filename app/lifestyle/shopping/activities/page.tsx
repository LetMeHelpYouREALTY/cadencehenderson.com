import type { Metadata } from 'next'
import Link from 'next/link'
import { Mountain } from 'lucide-react'
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
  title: 'Outdoor Activities Near Cadence Henderson NV',
  description:
    'Lake Mead, Lake Las Vegas, Clark County Wetlands, Henderson Bird Viewing Preserve, and golf near Cadence Henderson NV 89011. Hiking, boating, and cycling.',
  alternates: { canonical: `${BASE}/lifestyle/shopping/activities` },
  openGraph: {
    title: 'Outdoor Activities Near Cadence Henderson NV',
    description:
      'Lake Mead recreation, wetlands trails, bird preserve, and golf a short drive from Cadence Henderson NV 89011.',
    url: `${BASE}/lifestyle/shopping/activities`,
  },
}

const activities = [
  {
    name: 'Lake Mead National Recreation Area',
    note: 'About 1.5 million acres of lakes, canyons, and desert. Boating, hiking, and cycling access is a short drive east of Cadence via Lake Mead Parkway.',
  },
  {
    name: 'Henderson Bird Viewing Preserve',
    note: 'A 140-acre preserve with ponds used by migratory and desert birds. Trails and viewing platforms; hours and seasonal closures apply.',
  },
  {
    name: 'Clark County Wetlands Park',
    note: 'Trails through constructed wetlands that treat urban runoff and support desert plants and wildlife. Walk or bike; nature center programs vary by season.',
  },
  {
    name: 'Lake Las Vegas',
    note: 'A 320-acre reservoir with resort, spa, dining, and water recreation a few minutes from Cadence. Public access points and marina rules vary by venue.',
  },
  {
    name: 'Reflection Bay Golf Club',
    note: 'Golf along Lake Las Vegas with dining and event space. Book tee times and dress code directly with the club.',
  },
  {
    name: 'Chimera Golf Club',
    note: 'Desert course with mountain and Strip views. Confirm current public-play policies before you schedule a round.',
  },
]

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Activities near Cadence"
        subtitle="Lake Mead, wetlands trails, a bird preserve, and golf — outdoor recreation a short drive from Cadence Henderson NV 89011."
        imageSrc={cfImage(SITE_IMAGES.hero.activities, 'hero')}
        imageAlt="Outdoor recreation near Cadence Henderson NV 89011"
        icon={Mountain}
      >
        <Link href="/lifestyle/parks-trails">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Parks inside Cadence
          </Button>
        </Link>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.amenities.sportsCourts, 'hero')}
        alt="Recreation near Cadence Henderson NV 89011"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <p className="font-light leading-relaxed text-neutral-600">
              Cadence Henderson already has Central Park, pocket parks, and
              miles of internal trails. These destinations sit just outside the
              community gates. Distances below are typical drives from 89011 —
              traffic on Lake Mead Parkway and I-215 varies.
            </p>
            {activities.map((item) => (
              <article key={item.name}>
                <h2 className="mb-2 text-2xl font-medium text-neutral-900">
                  {item.name}
                </h2>
                <p className="font-light leading-relaxed text-neutral-600">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/shopping/activities"
        name="Outdoor Activities Near Cadence Henderson NV"
        description="Outdoor activities near Cadence Henderson NV 89011 — Lake Mead, trails, and parks. Tour with Dr. Jan Duffy."
        faqs={defaultPageFaqs('outdoor activities near Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Shopping and dining', path: '/lifestyle/shopping' },
          { name: 'Outdoor activities near Cadence Henderson' },
        ]}
      />
      <AgentContactCta
        heading="Match a lot to the trail you actually use"
        body="Tell Dr. Jan whether you boat at Lake Mead, walk the wetlands, or play golf — she will point you to Cadence villages with the shortest drive."
      />
      <Footer />
    </div>
  )
}
