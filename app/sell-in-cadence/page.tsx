import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Home, RefreshCw } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { RealScoutHomeValue } from '@/components/idx/realscout-home-value'
import { PageAeo } from '@/components/cadence/page-aeo'
import { AgentContactCta } from '@/components/cadence/agent-contact-cta'
import { Button } from '@/components/ui/button'
import { calendlyEventUrl } from '@/components/cadence/contact-info'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'
import { SELL_IN_CADENCE_FAQS } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'
const PAGE_PATH = '/sell-in-cadence'

const PAGE_TITLE = 'Sell to Buy in Cadence Henderson | Dr. Jan Duffy'
const PAGE_DESCRIPTION =
  'Sell your current home and buy new construction in Cadence Henderson NV 89011. Listing consult and equity planning with Dr. Jan Duffy.'

const LISTING_HERO = calendlyEventUrl('listing-consultation', 'sell-in-cadence-hero')
const LISTING_MID = calendlyEventUrl('listing-consultation', 'sell-in-cadence-mid')
const LISTING_VALUATION = calendlyEventUrl('listing-consultation', 'sell-in-cadence-valuation')

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${BASE}${PAGE_PATH}` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE}${PAGE_PATH}`,
  },
}

export default function SellInCadencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Sell Your Current Home to Buy in Cadence"
        subtitle="Plan your sale and your Cadence new build together — not as two separate projects. Dr. Jan Duffy helps Henderson-area sellers align equity, listing prep, and builder timelines."
        imageSrc={cfImage(SITE_IMAGES.hero.pastHomesales, 'hero')}
        imageAlt="Sell to buy new construction in Cadence Henderson NV 89011"
        icon={RefreshCw}
      >
        <a href={LISTING_HERO} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            <Calendar className="mr-2" size={18} aria-hidden />
            Book listing consultation
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.pastHomesales, 'hero')}
        alt="Cadence Henderson NV 89011 homes and resale context for sell-to-buy buyers"
      />

      <section className="py-16 border-b border-neutral-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-extralight tracking-[0.06em] text-neutral-900 mb-6 text-center">
            Why sell-to-buy in Cadence?
          </h2>
          <p className="aeo-lead text-center font-light text-neutral-600 mb-8" data-speakable>
            Cadence is a master-planned community in Henderson NV 89011 with multiple homebuilders and
            on-site amenities. If you already own elsewhere in the valley, selling first (or coordinating
            a close) lets you bring equity straight into a new build here — with one advisor tracking both
            sides. Dr. Jan Duffy focuses on Cadence new construction for the purchase; she can also
            discuss listing your current home.
          </p>
          <ul className="space-y-4 text-neutral-700 font-light">
            <li className="flex gap-3">
              <Home className="shrink-0 text-primary" size={22} aria-hidden />
              <span>
                <strong className="font-medium text-neutral-900">One plan for two moves.</strong> Align
                listing date, showings, and builder deposit deadlines before you write offers.
              </span>
            </li>
            <li className="flex gap-3">
              <RefreshCw className="shrink-0 text-primary" size={22} aria-hidden />
              <span>
                <strong className="font-medium text-neutral-900">Equity toward new construction.</strong>{' '}
                Know your estimated net from the sale before you pick a floor plan and lot in Cadence.
              </span>
            </li>
            <li className="flex gap-3">
              <Calendar className="shrink-0 text-primary" size={22} aria-hidden />
              <span>
                <strong className="font-medium text-neutral-900">Builder coordination.</strong> Dr. Jan
                Duffy represents you on the Cadence purchase; the builder typically pays her buyer-side fee
                on new homes.
              </span>
            </li>
          </ul>
          <p className="text-center mt-10">
            <a
              href={LISTING_MID}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.06em] text-primary hover:underline"
            >
              Schedule listing consultation with Dr. Jan Duffy
              <ArrowRight size={16} aria-hidden />
            </a>
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50" aria-labelledby="valuation-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="valuation-heading" className="text-3xl font-extralight tracking-[0.06em] text-neutral-900 mb-4">
              Start with your current home value
            </h2>
            <p className="text-neutral-600 font-light mb-8">
              Use the tool below for a quick estimate on the home you plan to sell. Then book a listing
              consultation so Dr. Jan Duffy can sanity-check net proceeds against Cadence builder pricing.
            </p>
            <div className="flex justify-center mb-8">
              <RealScoutHomeValue />
            </div>
            <Button size="lg" asChild>
              <a href={LISTING_VALUATION} target="_blank" rel="noopener noreferrer">
                Discuss my numbers with Dr. Jan Duffy
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-neutral-200">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-neutral-600 font-light mb-4">
            Shopping Cadence inventory while you plan your sale?
          </p>
          <Link
            href="/new-homes"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Browse new homes in Cadence Henderson
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>

      <PageAeo
        path={PAGE_PATH}
        name={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        faqs={SELL_IN_CADENCE_FAQS}
        breadcrumbs={[
          { name: 'Cadence Henderson home', path: '/' },
          { name: 'Sell to buy in Cadence Henderson' },
        ]}
        faqHeading="Sell to buy in Cadence — common questions"
      />

      <AgentContactCta
        heading="Ready to line up your sale and Cadence purchase?"
        body="Dr. Jan Duffy will walk through your timeline, equity, and builder options in one conversation."
      />

      <Footer />
    </div>
  )
}
