import { RealScoutWidget } from '@/components/idx/realscout-widget'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { SectionPhoto } from '@/components/cadence/section-photo'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { Search } from 'lucide-react'

export function HomeFinder() {
  return (
    <section id="home-search" className="py-20 bg-gray-50" aria-labelledby="homefinder-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="homefinder-heading" className="text-4xl font-bold text-gray-900 mb-6">
              Search Henderson Homes for Sale
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              New homes Cadence Henderson NV 89011. Dr. Jan Duffy is your free buyer’s agent — builder pays her fee. Search above or open full search below.
            </p>
            <a
              href={CONTACT_INFO.realScoutSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-blue-900 font-semibold hover:underline"
            >
              <Search size={18} />
              Open Home Search
            </a>
          </div>
          <SectionPhoto
            src={cfImage(SITE_IMAGES.sections.homeSearch, 'hero')}
            alt="Search new homes for sale in Cadence Henderson NV 89011"
            className="mb-8 rounded-lg"
          />
          <RealScoutWidget className="min-h-[400px] rounded-lg overflow-hidden bg-white shadow-sm" />
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              Want a free 15-minute buyer call or in-person tour? Dr. Jan Duffy — Cadence Henderson NV 89011.
            </p>
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800" asChild>
              <CalendlyLink>Schedule your free 15-min call</CalendlyLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

