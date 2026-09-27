import { RealScoutWidget } from '@/components/idx/realscout-widget'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { Search } from 'lucide-react'

type HomeSearchSectionProps = {
  /** Variant for context-specific copy (e.g. rentals page) */
  variant?: 'default' | 'rentals'
  /** Optional compact layout (no Calendly CTA) */
  compact?: boolean
}

export function HomeSearchSection({ variant = 'default', compact = false }: HomeSearchSectionProps) {
  const isRentals = variant === 'rentals'
  const heading = isRentals
    ? 'Looking to Buy? Search Henderson Homes for Sale'
    : 'Search Henderson Homes for Sale'
  const description = isRentals
    ? 'Ready to own instead of rent? Search new homes and resale listings in Henderson.'
    : 'Browse new homes and resale listings in Cadence Henderson NV 89011. Dr. Jan Duffy represents buyers at no cost — builder pays the fee.'

  return (
    <section className="py-24 bg-neutral-50" aria-labelledby="home-search-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="home-search-heading" className="text-3xl md:text-4xl font-extralight tracking-[0.06em] text-neutral-900 mb-6">
              {heading}
            </h2>
            <p className="text-lg font-light text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-6">
              {description}
            </p>
            <a
              href={CONTACT_INFO.realScoutSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-light tracking-[0.12em] uppercase text-neutral-900 hover:underline"
            >
              <Search size={16} />
              Open Home Search
            </a>
          </div>
          <RealScoutWidget className="min-h-[400px] overflow-hidden bg-white border border-neutral-200" />
          {!compact && (
            <div className="text-center mt-12">
              <p className="text-neutral-600 font-light mb-6">
                Want a personalized tour or buyer consultation?
              </p>
              <Button size="lg" asChild>
                <CalendlyLink>Schedule a call with Dr. Jan</CalendlyLink>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
