import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
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
  getVillagesByBuilder,
} from '@/lib/cadence-nv-catalog'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'

type PageProps = {
  params: Promise<{ builder: string }>
}

export async function generateStaticParams() {
  const slugs = new Set(CADENCE_BUILDER_HUBS.map((hub) => hub.slug))
  return [...slugs].map((builder) => ({ builder }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { builder } = await params
  const hub = CADENCE_BUILDER_HUBS.find((item) => item.slug === builder)
  const name = hub?.name ?? builder
  const title = `${name} in Cadence Henderson NV | Villages`
  const description = `${name} neighborhoods inside Cadence Henderson NV 89011. Village list, plan names, and square footage. Tour with Dr. Jan Duffy.`
  return {
    title,
    description,
    alternates: { canonical: `${BASE}/communities/${builder}` },
    openGraph: { title, description, url: `${BASE}/communities/${builder}` },
  }
}

export default async function BuilderCommunitiesPage({ params }: PageProps) {
  const { builder } = await params
  const hub = CADENCE_BUILDER_HUBS.find((item) => item.slug === builder)
  const villages = getVillagesByBuilder(builder)
  if (!hub || villages.length === 0) notFound()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title={hub.name}
        subtitle={`${villages.length} Cadence Henderson villages. Plan names and sizes from the developer listing — prices omitted because they change.`}
        imageSrc={cfImage(SITE_IMAGES.hero.newHomes, 'hero')}
        imageAlt={`${hub.name} villages in Cadence Henderson NV 89011`}
        icon={Landmark}
      />
      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.hero.newHomes, 'card')}
        alt="Cadence Henderson NV 89011 builder villages"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ul className="mx-auto grid max-w-4xl gap-4">
            {villages.map((village) => (
              <li key={village.cadencePath} className="border-b border-neutral-200 pb-4">
                <Link
                  href={village.cadencePath}
                  className="text-xl font-medium text-primary hover:underline"
                >
                  {village.name}
                </Link>
                <p className="mt-1 text-sm font-light text-neutral-600">
                  {village.kind === 'sold-out'
                    ? 'Sold out'
                    : village.kind === 'rental'
                      ? 'Rental'
                      : 'For sale'}
                  {village.plans.length > 0
                    ? ` · ${village.plans.length} published plans`
                    : ''}
                </p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-4xl">
            <Link href={hub.href} className="text-sm font-medium text-primary hover:underline">
              {hub.name} overview
            </Link>
          </p>
        </div>
      </section>
      <PageAeo
        path={`/communities/${builder}`}
        name={`${hub.name} in Cadence Henderson NV | Villages`}
        description={`${hub.name} neighborhoods inside Cadence Henderson NV 89011. Village list, plan names, and square footage. Tour with Dr. Jan Duffy.`}
        faqs={defaultPageFaqs(`${hub.name} villages in Cadence Henderson`)}
        breadcrumbs={[
          { name: 'Cadence Henderson neighborhoods', path: '/communities' },
          { name: hub.name },
        ]}
      />
      <AgentContactCta
        heading={`Compare ${hub.name} villages`}
        body="Dr. Jan will sequence a model-home loop so you are not driving Cadence twice for the same floor plan."
      />
      <Footer />
    </div>
  )
}
