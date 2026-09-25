import { RealScoutWidget } from '@/components/idx/realscout-widget'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { SectionPhoto } from '@/components/cadence/section-photo'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { Search } from 'lucide-react'
import Link from 'next/link'

export function HomeFinder() {
  return (
    <section id="home-search" className="py-24 bg-neutral-50" aria-labelledby="homefinder-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="homefinder-heading" className="text-4xl font-extralight tracking-[0.06em] text-neutral-900 mb-6">
              Search Henderson Homes for Sale
            </h2>
            <p className="text-xl font-light text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              New homes Cadence Henderson NV 89011. Dr. Jan Duffy is your free buyer’s agent — builder pays her fee. Search above or open full search below.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={CONTACT_INFO.realScoutSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] uppercase text-primary hover:underline"
              >
                <Search size={16} />
                Open Home Search
              </a>
              <Link
                href="/communities"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] uppercase text-primary hover:underline"
              >
                Cadence neighborhoods
              </Link>
            </div>
          </div>
          <SectionPhoto
            src={cfImage(SITE_IMAGES.sections.homeSearch, 'hero')}
            alt="Search new homes for sale in Cadence Henderson NV 89011"
            className="mb-10"
          />
          <RealScoutWidget className="min-h-[400px] overflow-hidden bg-white border border-neutral-200" />
          <div className="text-center mt-12">
            <p className="text-lg font-light text-neutral-600 mb-6">
              Want a free 15-minute buyer call or in-person tour? Dr. Jan Duffy — Cadence Henderson NV 89011.
            </p>
            <Button size="lg" asChild>
              <CalendlyLink>Schedule your free 15-min call</CalendlyLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

