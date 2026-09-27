'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteImage } from '@/components/cadence/site-image'
import { getAmenityImage } from '@/lib/cloudflare-images'

export function AmenitiesSection() {
  return (
    <section className="py-24 bg-white" aria-labelledby="amenities-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="amenities-heading" className="text-4xl font-extralight tracking-[0.06em] text-neutral-900 mb-8">
              Amenities in Cadence Henderson NV 89011
            </h2>
            <p className="aeo-lead text-xl text-gray-700 mb-8 leading-relaxed" data-speakable>
              Cadence Henderson NV 89011 includes a ~50-acre Central Park, pools, a ~2,000 sq ft splash pad, pickleball, trails, and resident wifi at amenity areas. Confirm hours with the HOA; tour homes with Dr. Jan Duffy.
            </p>
            <Button
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/lifestyle/amenities">Cadence Henderson amenities and Central Park</Link>
            </Button>
          </div>
          <div className="relative h-[400px] overflow-hidden bg-neutral-200">
            <SiteImage
              src={getAmenityImage('centralPark', 'card')}
              alt="Cadence Henderson NV 89011 amenities and Central Park"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}

