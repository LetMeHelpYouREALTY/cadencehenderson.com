'use client'

import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

/** Client island for Calendly — keeps the hero LCP image in the server HTML. */
export function HeroActions() {
  return (
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
        <a href="/find-your-home">Find your home</a>
      </Button>
    </div>
  )
}
