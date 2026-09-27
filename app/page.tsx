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
import { WebPageSchema } from '@/components/schema/web-page'

const BASE = 'https://www.cadencehenderson.com'

// ISR: fresh builder/data hourly for GEO and indexing
export const revalidate = 3600

export const metadata: Metadata = {
  title: "New Home Buyer's Agent Cadence Henderson NV 89011 | Free — Dr. Jan Duffy",
  description:
    `Free buyer representation for new homes in Cadence Henderson NV 89011. 9 builders, $300K–$700K+. Builder pays the fee. Call Dr. Jan Duffy ${CONTACT_INFO.phone}.`,
  alternates: { canonical: BASE },
  openGraph: {
    title: "New Home Buyer's Agent Cadence Henderson NV 89011 | Free — Dr. Jan Duffy",
    description:
      `Free buyer representation for new homes in Cadence Henderson NV 89011. 9 builders, $300K–$700K+. Builder pays the fee. Call Dr. Jan Duffy ${CONTACT_INFO.phone}.`,
    url: BASE,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  return (
    <div id="main-content" className="min-h-screen bg-white" tabIndex={-1}>
      <WebPageSchema />
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
