import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CloudflareImage } from '@/components/cadence/cloudflare-image'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

// Update monthly — specific data = AI citation magnet
const MARKET_SNAPSHOT = {
  activeBuilders: 9,
  priceRange: '$300Ks–$700K+',
  communityAcres: '2,200+',
  homesPlanned: '13,000+',
  centralParkAcres: 'nearly 50',
  zipCode: '89011',
}

/**
 * Cadence Henderson Market Snapshot — unique data points for AI citation.
 * Proprietary specifics help GEO (ChatGPT, Perplexity, Gemini, Claude).
 */
export function MarketSnapshotSection() {
  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="market-snapshot-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 id="market-snapshot-heading" className="text-4xl font-extralight tracking-[0.06em] text-neutral-900 mb-12 text-center">
            Cadence Henderson Market Snapshot
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-8">
            <ul className="space-y-3 text-lg text-gray-700">
            <li><strong>Active builders:</strong> {MARKET_SNAPSHOT.activeBuilders}</li>
            <li><strong>Price range:</strong> {MARKET_SNAPSHOT.priceRange}</li>
            <li><strong>Community size:</strong> {MARKET_SNAPSHOT.communityAcres} acres, {MARKET_SNAPSHOT.homesPlanned} homes planned</li>
            <li><strong>Central Park:</strong> {MARKET_SNAPSHOT.centralParkAcres} acres</li>
            <li><strong>Recognition:</strong> Top 10 Best-Selling Master Planned Community nationally</li>
            <li><strong>Location:</strong> Henderson NV {MARKET_SNAPSHOT.zipCode}</li>
          </ul>
            <div className="relative h-[320px] lg:h-[360px] overflow-hidden bg-neutral-200">
              <CloudflareImage
                src={cfImage(SITE_IMAGES.sections.marketSnapshot, 'card')}
                alt="Cadence Henderson NV 89011 master planned community aerial view"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-center text-gray-700">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
              className="text-blue-900 font-medium hover:underline"
              aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}
            >
              Call Dr. Jan Duffy {CONTACT_INFO.phone}
            </a>
            {' '}or{' '}
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 font-medium hover:underline"
            >
              book a free 15-min call
            </a>
            {' '}for current inventory and incentives — Cadence Henderson NV 89011.
          </p>
        </div>
      </div>
    </section>
  )
}
