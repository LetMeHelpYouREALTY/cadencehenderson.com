'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteImage } from '@/components/cadence/site-image'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

export function LifestyleSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-200">
            <SiteImage
              src={cfImage(SITE_IMAGES.lifestyle.families, 'card')}
              alt="Community gathering spaces in Cadence Henderson NV 89011"
              fill
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cadence Henderson Lifestyle
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Find out what makes Cadence the perfect place to live. Our master
              planned community, right here in Henderson, includes the finest
              amenities and so much to do, all right here!
            </p>
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
              asChild
            >
              <Link href="/lifestyle">Cadence Henderson lifestyle</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

