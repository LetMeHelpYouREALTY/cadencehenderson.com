import type { Metadata } from 'next'
import { Percent, Paintbrush, Landmark, FileCheck } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { AgentContactCta } from '@/components/cadence/agent-contact-cta'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Button } from '@/components/ui/button'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Builder Incentives in Cadence Henderson NV 89011',
  description:
    'How Cadence Henderson builders may help with rate buydowns, closing costs, and included upgrades. Confirm current offers with Dr. Jan Duffy.',
  alternates: { canonical: `${BASE}/incentives` },
  openGraph: {
    title: 'Builder Incentives in Cadence Henderson NV 89011',
    description:
      'Rate buydowns, closing-cost credits, and included upgrades in Cadence Henderson NV 89011. Offers change — verify before you buy.',
    url: `${BASE}/incentives`,
  },
}

const incentiveTypes = [
  {
    icon: Paintbrush,
    title: 'Included design upgrades',
    body: 'Some Cadence builders temporarily include flooring, counters, fixtures, or appliance packages that would otherwise be paid as options. Ask which lots still carry the credit before you reserve.',
  },
  {
    icon: Percent,
    title: 'Interest-rate buydowns',
    body: 'A buydown uses prepaid points so the note rate — and the monthly principal and interest — is lower. Even a half-point change can shift the payment. Compare lender quotes with and without the builder credit.',
  },
  {
    icon: Landmark,
    title: 'Closing-cost help',
    body: 'Appraisal, title, recording, and prepaid items are due at closing. Builders sometimes contribute a limited credit toward those fees. Credits are not cash back and usually must be used at closing.',
  },
  {
    icon: FileCheck,
    title: 'What to verify in writing',
    body: 'Incentives are lot-specific, lender-specific, and time-limited. Get the amount, expiration date, and any required lender on the purchase agreement addendum — not only on a flyer.',
  },
]

export default function IncentivesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Builder incentives"
        subtitle="Cadence Henderson builders sometimes offset upgrades, rate, or closing costs. Offers change by community — confirm the current sheet before you write an offer."
        imageSrc={cfImage(SITE_IMAGES.hero.incentives, 'hero')}
        imageAlt="New home incentives in Cadence Henderson NV 89011"
        icon={Percent}
      >
        <CalendlyLink>
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Compare current offers
          </Button>
        </CalendlyLink>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.incentives, 'hero')}
        alt="New construction incentives in Cadence Henderson NV 89011"
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {incentiveTypes.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="rounded-sm border border-neutral-200 bg-white p-6"
                >
                  <Icon size={28} className="mb-4 text-primary" aria-hidden />
                  <h2 className="mb-3 text-xl font-medium text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="font-light leading-relaxed text-neutral-600">
                    {item.body}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-extralight tracking-[0.06em] text-neutral-900">
              Why a buyer’s agent still matters
            </h2>
            <p className="mb-4 font-light leading-relaxed text-neutral-600">
              Incentives look generous on a sign. Net cost is what you keep after
              rate, points, HOA, taxes, and option pricing. Dr. Jan Duffy
              compares Cadence builders side by side so you are not shopping
              credits in isolation.
            </p>
            <p className="font-light leading-relaxed text-neutral-600">
              Buyer representation on new construction in Cadence Henderson is
              typically paid by the builder. Call {CONTACT_INFO.phone} or
              schedule a 15-minute consult before you visit a model park.
            </p>
          </div>
        </div>
      </section>

      <PageAeo
        path="/incentives"
        name="Builder Incentives in Cadence Henderson NV 89011"
        description="How Cadence Henderson builders may help with rate buydowns, closing costs, and included upgrades. Confirm current offers with Dr. Jan Duffy."
        faqs={defaultPageFaqs('builder incentives in Cadence Henderson')}
        breadcrumbs={[
          { name: 'New homes in Cadence Henderson', path: '/new-homes' },
          { name: 'Builder incentives' },
        ]}
      />
      <AgentContactCta
        heading="Need the current incentive sheet?"
        body="Dr. Jan will check which Cadence lots still carry a buydown, closing credit, or included upgrade — then map the monthly payment."
      />
      <Footer />
    </div>
  )
}
