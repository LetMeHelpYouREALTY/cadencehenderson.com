import Link from 'next/link'
import { CONTACT_INFO, GEO_LINKS } from '@/components/cadence/contact-info'
import { MapPin, Phone } from 'lucide-react'

/**
 * Compact visible NAP for GEO on high-traffic pages (matches GBP / LocalBusiness schema).
 */
export function NapStrip() {
  return (
    <section
      className="border-y border-neutral-200 bg-neutral-50 py-8"
      aria-label="Cadence Henderson office contact information"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-medium text-neutral-900">
          Dr. Jan Duffy, REALTOR® · {CONTACT_INFO.brokerage}
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-light text-neutral-700">
          <MapPin size={16} className="shrink-0 text-primary" aria-hidden />
          <span>{CONTACT_INFO.welcomeCenter}</span>
        </p>
        <p className="mt-1 text-sm font-light text-neutral-600">{CONTACT_INFO.hours}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Phone size={16} aria-hidden />
            {CONTACT_INFO.phone}
          </a>
          <Link href="/maps" className="text-primary hover:underline">
            Maps &amp; directions
          </Link>
          <a
            href={GEO_LINKS.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Maps
          </a>
          <a
            href={GEO_LINKS.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
