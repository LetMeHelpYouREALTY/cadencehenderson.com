'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteImage } from '@/components/cadence/site-image'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

export function LifestyleSection() {
  return (
    <section className="py-24 bg-neutral-50" aria-labelledby="lifestyle-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[400px] overflow-hidden bg-neutral-200">
            <SiteImage
              src={cfImage(SITE_IMAGES.lifestyle.community, 'card')}
              alt="Cadence Henderson NV 89011 lifestyle and community"
              fill
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 id="lifestyle-heading" className="text-4xl font-extralight tracking-[0.06em] text-neutral-900 mb-8">
              Lifestyle in Cadence Henderson NV 89011
            </h2>
            <p className="aeo-lead text-xl text-gray-700 mb-8 leading-relaxed" data-speakable>
              Cadence Henderson NV 89011 combines new-home villages with Central Park, trails, Cadence Marketplace, and events. Compare floor plans with Dr. Jan Duffy, then walk the amenity loop on the same visit.
            </p>
            <Button
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/lifestyle">Cadence Henderson lifestyle and events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

