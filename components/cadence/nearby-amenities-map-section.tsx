import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NearbyAmenityMapLazy } from '@/components/cadence/nearby-amenity-map-lazy'
import {
  COMMUNITY_PLACE,
  NEARBY_AMENITIES_PAGE_PATH,
} from '@/lib/nearby-amenities-config'

type NearbyAmenitiesMapSectionProps = {
  /** Homepage uses a shorter heading; inner pages can override */
  heading?: string
  description?: string
  compact?: boolean
}

export function NearbyAmenitiesMapSection({
  heading = `Life Near ${COMMUNITY_PLACE.name}`,
  description = `Explore restaurants, grocery, parks, schools, healthcare, and shopping around ${COMMUNITY_PLACE.name} in ${COMMUNITY_PLACE.city}, ${COMMUNITY_PLACE.state} ${COMMUNITY_PLACE.postalCode}. Filter the map by category or view the full guide.`,
  compact = false,
}: NearbyAmenitiesMapSectionProps) {
  return (
    <section
      className="py-16 md:py-20 bg-slate-50"
      aria-labelledby="nearby-amenities-map-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2
            id="nearby-amenities-map-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {heading}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>

        <NearbyAmenityMapLazy
          heightClassName={
            compact ? 'h-[360px] md:h-[420px]' : 'h-[420px] md:h-[480px]'
          }
          showStaticList={!compact}
        />

        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-blue-900 hover:bg-blue-800"
            asChild
          >
            <Link href={NEARBY_AMENITIES_PAGE_PATH}>
              Nearby amenities in {COMMUNITY_PLACE.shortName}, Henderson
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
