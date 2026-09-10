import type { Metadata } from 'next'
import { Scale } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Website Disclaimer | Cadence Henderson Homes',
  description:
    'Legal, Fair Housing, MLS, and accuracy disclaimer for CadenceHenderson.com. Homes by Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.',
  alternates: { canonical: `${BASE}/disclaimer` },
  openGraph: {
    title: 'Website Disclaimer | Cadence Henderson Homes',
    description:
      'Disclaimer for CadenceHenderson.com: not the master-plan developer, Fair Housing, MLS accuracy, and license information.',
    url: `${BASE}/disclaimer`,
  },
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Disclaimer"
        subtitle="CadenceHenderson.com is a real estate brokerage site, not the official Cadence master-plan developer website."
        imageSrc={cfImage(SITE_IMAGES.hero.disclaimer, 'hero')}
        imageAlt="Legal disclaimer for Cadence Henderson Homes by Dr. Jan Duffy"
        icon={Scale}
      />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.hero.disclaimer, 'card')}
        alt="Cadence Henderson Homes website disclaimer"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 font-light leading-relaxed text-neutral-700">
            <article>
              <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                Independent brokerage site
              </h2>
              <p>
                This website is operated by Dr. Jan Duffy, REALTOR®, license{' '}
                {CONTACT_INFO.licenseNumber}, with {CONTACT_INFO.brokerage}.
                Office: {CONTACT_INFO.welcomeCenter}. Phone: {CONTACT_INFO.phone}.
                Cadence is a master-planned community in Henderson, Nevada. This
                site is not affiliated with the community developer except as a
                licensed real estate professional serving buyers and sellers.
              </p>
            </article>
            <article>
              <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                Accuracy of information
              </h2>
              <p>
                Builder names, floor plans, prices, rents, incentives, school
                attendance zones, HOA dues, and amenity rules change. Do not
                rely on this site as a substitute for a purchase agreement,
                lease, CC&Rs, or a current MLS listing. Confirm every figure
                with Dr. Jan, the builder, the leasing office, or the
                association before you act.
              </p>
            </article>
            <article>
              <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                Fair Housing
              </h2>
              <p>
                We do business in accordance with the Fair Housing Act. We do
                not discriminate on the basis of race, color, religion, sex,
                handicap, familial status, national origin, or other protected
                characteristics under federal, Nevada, or local law.
              </p>
            </article>
            <article>
              <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                Listings and IDX
              </h2>
              <p>
                Listing information is provided for consumers’ personal,
                non-commercial use and may not be used for any purpose other
                than to identify prospective properties. MLS data is deemed
                reliable but not guaranteed. Broker reciprocal listings include
                required attribution and disclaimers on listing displays.
              </p>
            </article>
            <article>
              <h2 className="mb-3 text-2xl font-medium text-neutral-900">
                Third-party sites
              </h2>
              <p>
                Links to RealScout, Calendly, builder sites, and leasing offices
                open third-party services with their own terms. CadenceNV.com is
                the developer’s community site; content there is not copied onto
                this site except as independently written local-market
                information.
              </p>
            </article>
          </div>
        </div>
      </section>
      <PageAeo
        path="/disclaimer"
        name="Website Disclaimer | Cadence Henderson Homes"
        description="Legal, Fair Housing, MLS, and accuracy disclaimer for CadenceHenderson.com. Homes by Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties."
        faqs={defaultPageFaqs('Cadence Henderson website disclaimer and Fair Housing')}
        breadcrumbs={[{ name: 'Website disclaimer' }]}
        faqHeading="Cadence Henderson disclaimer — questions"
      />
      <Footer />
    </div>
  )
}
