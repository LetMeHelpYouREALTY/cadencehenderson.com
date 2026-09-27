import type { Metadata } from 'next'
import Link from 'next/link'
import { Newspaper } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { PageBodyPhoto } from '@/components/cadence/section-photo'
import { AgentContactCta } from '@/components/cadence/agent-contact-cta'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Media & Press | Cadence Henderson Homes',
  description:
    'Press contact for Cadence Henderson Homes by Dr. Jan Duffy, plus developer-side Cadence community news. Henderson NV 89011.',
  alternates: { canonical: `${BASE}/media` },
  openGraph: {
    title: 'Media & Press | Cadence Henderson Homes',
    description:
      'Brokerage press contact for Cadence Henderson NV 89011 and a summary of public Cadence community announcements.',
    url: `${BASE}/media`,
  },
}

const headlines = [
  'Cadence has ranked among the nation’s top-selling master-planned communities.',
  'Additional parks have been built in phases, including Central Park expansions.',
  'StoryBook Homes opened models in the Libretto village.',
  'Richmond American Homes opened Esperando and Bel Canto for sales.',
  'Retail at Cadence Marketplace has added grocers and other services, including a Smith’s that created hundreds of local jobs at opening.',
  'The community has run food-truck programs and public events in Central Park.',
]

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="Media"
        subtitle="Brokerage press for Cadence Henderson Homes, and a factual recap of public Cadence community announcements."
        imageSrc={cfImage(SITE_IMAGES.hero.news, 'hero')}
        imageAlt="Cadence Henderson media and press NV 89011"
        icon={Newspaper}
      />
      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.lifestyle.events, 'hero')}
        alt="Cadence Henderson NV 89011 community news"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 font-light leading-relaxed text-neutral-700">
            <article>
              <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                Brokerage media contact
              </h2>
              <p>
                For interviews with Dr. Jan Duffy about Cadence Henderson real
                estate, new-home buying, or 89011 market questions: {CONTACT_INFO.email}{' '}
                or {CONTACT_INFO.phone}. Office: {CONTACT_INFO.welcomeCenter}.{' '}
                {CONTACT_INFO.brokerage}. License {CONTACT_INFO.licenseNumber}.
              </p>
            </article>
            <article>
              <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                Developer / community press
              </h2>
              <p>
                Cadence the master-planned community is developed by Landwell.
                The developer site lists community media at{' '}
                <a
                  href="https://cadencenv.com/media/"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  cadencenv.com/media
                </a>
                . That office is not this brokerage.
              </p>
            </article>
            <article>
              <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                Public announcements (summary)
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                {headlines.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6">
                Related pages:{' '}
                <Link href="/news" className="text-primary hover:underline">
                  Cadence Henderson news
                </Link>
                {', '}
                <Link href="/lifestyle/events" className="text-primary hover:underline">
                  community events
                </Link>
                {', '}
                <Link href="/communities" className="text-primary hover:underline">
                  village directory
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
      <PageAeo
        path="/media"
        name="Media & Press | Cadence Henderson Homes"
        description="Press contact for Cadence Henderson Homes by Dr. Jan Duffy, plus developer-side Cadence community news. Henderson NV 89011."
        faqs={defaultPageFaqs('media and press inquiries about Cadence Henderson')}
        breadcrumbs={[{ name: 'Media and press' }]}
      />
      <AgentContactCta
        heading="Need a Cadence expert on camera or for a story?"
        body="Dr. Jan Duffy can speak to 89011 new construction, buyer representation, and how Cadence villages actually tour."
      />
      <Footer />
    </div>
  )
}
