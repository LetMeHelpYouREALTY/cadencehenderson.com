'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteImage } from '@/components/cadence/site-image'
import { getAmenityImage } from '@/lib/cloudflare-images'
import { CADENCE_AMENITIES_SUMMARY } from '@/lib/cadence-amenities'
import { HOA_CONTACT } from '@/components/cadence/contact-info'

export function AmenitiesSection() {
  return (
    <section className="py-24 bg-white" aria-labelledby="amenities-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="amenities-heading"
              className="text-4xl font-semibold tracking-[0.06em] text-neutral-900 mb-8"
            >
              Amenities in Cadence Henderson NV 89011
            </h2>
            <p className="aeo-lead text-xl text-gray-900 mb-8 leading-relaxed" data-speakable>
              {CADENCE_AMENITIES_SUMMARY} Confirm hours with the Cadence Master
              Association at {HOA_CONTACT.phone}; tour homes with Dr. Jan Duffy.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/lifestyle/amenities">
                Cadence Henderson amenities and Central Park
              </Link>
            </Button>
          </div>
          <div className="relative h-[400px] overflow-hidden bg-neutral-200">
            <SiteImage
              src={getAmenityImage('centralPark', 'card')}
              alt="Cadence Henderson NV 89011 amenities and Central Park"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
