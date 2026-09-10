import { PageHero } from '@/components/cadence/page-hero'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { RealScoutAdvancedSearch } from '@/components/idx/realscout-advanced-search'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { RealScoutYourListings } from '@/components/idx/realscout-your-listings'
import { Button } from '@/components/ui/button'
import { Calendar, Home, Phone, Mail } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

export const metadata = {
  title: 'Past Home Sales | Cadence Henderson 89011',
  description:
    'Cadence Henderson market report. Dr. Jan Duffy past home sales, sold listings, market trends. Henderson NV 89011. Berkshire Hathaway.',
}

export default function PastHomesalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Dr. Jan Duffy Past Home Sales"
        subtitle="Browse sold homes, properties in contract, and current listings. See recent Cadence Henderson NV 89011 results from Dr. Jan Duffy."
        imageSrc={cfImage(SITE_IMAGES.hero.pastHomesales, 'hero')}
        imageAlt="Past home sales by Dr. Jan Duffy at Cadence Henderson NV 89011"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <CalendlyLink>
            <Button
              size="lg"
              className="bg-white text-slate-800 hover:bg-gray-100"
            >
              <Calendar className="mr-2" size={20} />
              Schedule with Cadence Expert
            </Button>
          </CalendlyLink>
          <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800"
            >
              <Phone className="mr-2" size={20} />
              Call: {CONTACT_INFO.phone}
            </Button>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800"
            >
              <Mail className="mr-2" size={20} />
              Email Dr. Jan
            </Button>
          </a>
        </div>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.pastHomesales, 'hero')}
        alt="Closed new homes in Cadence Henderson NV 89011"
      />


      {/* Advanced Search + Your Listings Widget */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <RealScoutAdvancedSearch />
          </div>
          <RealScoutYourListings />
          <p className="mt-4 text-xs text-gray-600">
            Listings displayed via MLS. All information deemed reliable but not
            guaranteed. © {new Date().getFullYear()} MLS.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Buy or Sell?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Let Dr. Jan Duffy guide you through your next real estate
              transaction. From listing to closing, experience personalized
              service backed by Berkshire Hathaway HomeServices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CalendlyLink>
                <Button size="lg" className="bg-primary hover:bg-blue-600">
                  Schedule with Cadence Expert
                </Button>
              </CalendlyLink>
              <a
                href={CONTACT_INFO.realScoutSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Home className="mr-2" size={20} />
                  Search Homes
                </Button>
              </a>
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Call Dr. Jan
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/past-homesales"
        name="Past Home Sales | Cadence Henderson 89011"
        description="Cadence Henderson market report. Dr. Jan Duffy past home sales, sold listings, market trends. Henderson NV 89011. Berkshire Hathaway."
        faqs={defaultPageFaqs('past home sales in Cadence Henderson')}
        breadcrumbs={[{ name: 'Past home sales in Cadence Henderson NV 89011' }]}
        faqHeading="Cadence Henderson sold homes — questions"
      />
      <Footer />
    </div>
  )
}
