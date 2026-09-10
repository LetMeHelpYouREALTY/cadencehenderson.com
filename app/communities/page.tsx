import type { Metadata } from 'next'
import Link from 'next/link'
import { Landmark } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { AgentContactCta } from '@/components/cadence/agent-contact-cta'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'
import {
  CADENCE_BUILDER_HUBS,
  CADENCE_VILLAGES,
  ROOT_COMMUNITIES,
} from '@/lib/cadence-nv-catalog'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Cadence Henderson Neighborhoods | All Villages 89011',
  description:
    'Every Cadence Henderson village from the CadenceNV directory: Beazer, Century, D.R. Horton, Lennar, Richmond American, StoryBook, Taylor Morrison, Woodside, AMH, and more.',
  alternates: { canonical: `${BASE}/communities` },
  openGraph: {
    title: 'Cadence Henderson Neighborhoods | All Villages 89011',
    description:
      'Complete Cadence Henderson village directory matching the CadenceNV neighborhood list. Tour with Dr. Jan Duffy.',
    url: `${BASE}/communities`,
  },
}

export default function CommunitiesIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="Cadence neighborhoods"
        subtitle={`${CADENCE_VILLAGES.length} villages from the CadenceNV directory — for-sale, rental, and sold-out collections in Henderson NV 89011.`}
        imageSrc={cfImage(SITE_IMAGES.hero.newHomes, 'hero')}
        imageAlt="Cadence Henderson neighborhood directory NV 89011"
        icon={Landmark}
      />
      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.homeSearch, 'hero')}
        alt="Cadence Henderson NV 89011 villages and builders"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            {CADENCE_BUILDER_HUBS.map((hub) => {
              const villages = CADENCE_VILLAGES.filter(
                (item) => item.builderSlug === hub.slug,
              )
              if (villages.length === 0) return null
              return (
                <article key={hub.slug}>
                  <h2 className="mb-3 text-xl font-medium text-neutral-900">
                    <Link href={`/communities/${hub.slug}`} className="hover:text-primary">
                      {hub.name}
                    </Link>
                  </h2>
                  <ul className="space-y-1">
                    {villages.map((village) => (
                      <li key={village.cadencePath}>
                        <Link
                          href={village.cadencePath}
                          className="text-sm text-primary hover:underline"
                        >
                          {village.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="mb-4 text-2xl font-medium text-neutral-900">
              Apartments and rental communities in Cadence Henderson NV 89011
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {ROOT_COMMUNITIES.map((community) => (
                <li key={community.cadencePath}>
                  <Link
                    href={community.cadencePath}
                    className="text-sm text-primary hover:underline"
                  >
                    {community.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/american-homes-4-rent" className="text-sm text-primary hover:underline">
                  American Homes 4 Rent
                </Link>
              </li>
              <li>
                <Link href="/ascend" className="text-sm text-primary hover:underline">
                  Ascend Symmetry
                </Link>
              </li>
              <li>
                <Link href="/avela-luxury-apartments" className="text-sm text-primary hover:underline">
                  Avela Luxury Apartments
                </Link>
              </li>
              <li>
                <Link href="/elysian" className="text-sm text-primary hover:underline">
                  Elysian Homes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <PageAeo
        path="/communities"
        name="Cadence Henderson Neighborhoods | All Villages 89011"
        description="Every Cadence Henderson village from the CadenceNV directory: Beazer, Century, D.R. Horton, Lennar, Richmond American, StoryBook, Taylor Morrison, Woodside, AMH, and more."
        faqs={defaultPageFaqs('Cadence Henderson neighborhoods and builder villages')}
        breadcrumbs={[{ name: 'Cadence Henderson neighborhoods' }]}
        faqHeading="Cadence Henderson neighborhoods — questions"
      />
      <AgentContactCta
        heading="Need a village shortlist?"
        body="Tell Dr. Jan your beds and budget. She will map Cadence villages that still have matching plans."
      />
      <Footer />
    </div>
  )
}
