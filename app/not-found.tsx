import Link from 'next/link'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { Home, Search, Phone, Calendar, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-9xl font-bold text-blue-900 mb-6">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Sorry, we couldn't find the page you're looking for. The page may
              have been moved or doesn't exist.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link href="/">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                  <Home className="mr-2" size={20} />
                  Back to Homepage
                </Button>
              </Link>
              <Link
                href={CONTACT_INFO.realScoutSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  <Search className="mr-2" size={20} />
                  Search Homes
                </Button>
              </Link>
            </div>

            <RealScoutOfficeListings />

            <div className="bg-cadence-ink rounded-lg p-8 text-white">
              <Calendar size={40} className="mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Need Help Finding Something?
              </h2>
              <p className="text-white mb-6">
                Schedule a call with Dr. Jan Duffy for assistance with Cadence Henderson
                homes and information.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-sm"
                >
                  <Phone size={18} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-sm"
                >
                  <Mail size={18} />
                  Email Dr. Jan
                </a>
              </div>
              <div className="bg-white rounded-lg overflow-hidden">
                <CalendlyWhenVisible>
                  <CalendlyInlineWidget
                    className="w-full"
                    style={{ minWidth: 280, height: 550 }}
                  />
                </CalendlyWhenVisible>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Popular Pages
              </h3>
              <div className="grid md:grid-cols-4 gap-4 text-left">
                <Link
                  href="/new-homes"
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-blue-900 mb-2">New Homes</h4>
                  <p className="text-sm text-gray-600">
                    Browse all 8 builders
                  </p>
                </Link>
                <Link
                  href="/lifestyle"
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-blue-900 mb-2">Lifestyle</h4>
                  <p className="text-sm text-gray-600">
                    Community amenities
                  </p>
                </Link>
                <Link
                  href="/contact"
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-blue-900 mb-2">Contact</h4>
                  <p className="text-sm text-gray-600">Get in touch</p>
                </Link>
                <Link
                  href="/faqs"
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-blue-900 mb-2">FAQs</h4>
                  <p className="text-sm text-gray-600">
                    Common questions
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

