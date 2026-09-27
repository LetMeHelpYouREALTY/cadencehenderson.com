import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { Navigation } from '@/components/cadence/navigation'
import { Hero } from '@/components/cadence/hero'
import { KeyFactsSection } from '@/components/cadence/key-facts-section'
import { MarketSnapshotSection } from '@/components/cadence/market-snapshot-section'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { HomeFinder } from '@/components/cadence/home-finder'
import { AmenitiesSection } from '@/components/cadence/amenities-section'
import { NearbyAmenitiesMapSection } from '@/components/cadence/nearby-amenities-map-section'
import { LifestyleSection } from '@/components/cadence/lifestyle-section'
import { ServicesSection } from '@/components/cadence/services-section'
import { RealtorsSection } from '@/components/cadence/realtors-section'
import { NewsSection } from '@/components/cadence/news-section'
import { BuildersShowcase } from '@/components/cadence/builders-showcase'
import { HomepageFAQSection } from '@/components/cadence/homepage-faq-section'
import { ScheduleConsultationSection } from '@/components/cadence/schedule-consultation-section'
import { Footer } from '@/components/cadence/footer'
import { PageGraphSchema } from '@/components/schema/page-graph'
import { HOME_FAQS } from '@/lib/page-aeo'

const BASE = 'https://www.cadencehenderson.com'
/** Crawlers need a stable git URL; metadataBase resolves to absolute og:image. */
const OG_IMAGE = '/og-image.jpg'

const HOME_TITLE = 'Cadence Henderson New Homes | Dr. Jan Duffy'
const HOME_DESCRIPTION =
  `Free buyer representation for new homes in Cadence Henderson NV 89011. 9 builders, $300K–$700K+. Builder pays the fee. Call Dr. Jan Duffy ${CONTACT_INFO.phone}.`

// ISR: fresh builder/data hourly for GEO and indexing
export const revalidate = 3600

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: BASE },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: BASE,
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'New homes for sale in Cadence Henderson 89011 Henderson NV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  return (
    <div id="main-content" className="min-h-screen bg-white" tabIndex={-1}>
      <PageGraphSchema
        path="/"
        name={HOME_TITLE}
        description={HOME_DESCRIPTION}
        faqs={HOME_FAQS}
      />
      <Navigation />
      <Hero />
      <KeyFactsSection />
      <RealScoutOfficeListings />

      <main id="homepage-content" className="scroll-mt-20" role="main">
        <MarketSnapshotSection />
        <ServicesSection />
        <HomeFinder />
        <AmenitiesSection />
        <NearbyAmenitiesMapSection compact />
        <LifestyleSection />
        <RealtorsSection />
        <BuildersShowcase />
        <NewsSection />
        <HomepageFAQSection />
        <ScheduleConsultationSection />
      </main>

      <Footer />
    </div>
  )
}
