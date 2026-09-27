'use client'

import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutSimpleSearch } from '@/components/idx/realscout-simple-search'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import { SiteImage } from '@/components/cadence/site-image'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

const HERO_IMAGE = cfImage(SITE_IMAGES.hero.homepage, 'hero')

export function Hero() {
  return (
    <section
      className="relative min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[740px] flex flex-col bg-black overflow-hidden"
      aria-label="Hero"
    >
      <SiteImage
        src={HERO_IMAGE}
        alt="New homes for sale Cadence Henderson NV 89011 — Dr. Jan Duffy buyer's agent"
        fill
        priority
        className="object-center opacity-80"
      />
      <div
        className="absolute inset-0 bg-black/35"
        aria-hidden
      />

      <div className="relative container mx-auto px-4 sm:px-6 flex-1 flex items-center py-24 sm:py-32">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.06em] mb-6 leading-[1.2]">
            New Home Buyer&apos;s Agent in Cadence Henderson NV 89011
          </h1>
          <p className="text-base md:text-lg font-light text-white/90 mb-10 max-w-xl">
            New homes Cadence Henderson NV 89011 — your buyer&apos;s agent. Free representation; builder pays the fee.
          </p>
          <div className="mb-10 w-full max-w-full text-neutral-900 [&_input]:text-neutral-900 [&_input::placeholder]:text-neutral-500 [&_realscout-simple-search]:max-w-full">
            <RealScoutSimpleSearch />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              size="default"
              className="bg-white text-primary hover:bg-blue-50"
              asChild
            >
              <CalendlyLink>
                <Calendar className="mr-2" size={16} aria-hidden />
                Schedule a 15-min call
              </CalendlyLink>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}
              >
                Call {CONTACT_INFO.phone}
              </a>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a
                href={CONTACT_INFO.realScoutSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Homes for sale
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
