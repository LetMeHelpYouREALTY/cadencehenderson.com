import Link from 'next/link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CloudflareImage } from '@/components/cadence/cloudflare-image'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { Phone } from 'lucide-react'

/**
 * Key Facts block for AEO extraction. Short, scannable bullets + CTA for appointments.
 */
export function KeyFactsSection() {
  return (
    <section
      className="py-16 bg-white border-b border-neutral-200"
      aria-labelledby="key-facts-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative h-[140px] sm:h-[160px] overflow-hidden mb-10 max-w-4xl mx-auto bg-neutral-200">
          <CloudflareImage
            src={cfImage(SITE_IMAGES.gallery.parkVista, 'card')}
            alt="Cadence Henderson NV 89011 community and homes"
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <h2 id="key-facts-heading" className="mb-6 text-center text-2xl font-extralight tracking-[0.06em] text-neutral-900">
          Key facts — Cadence Henderson NV 89011
        </h2>
        <p className="aeo-lead mx-auto mb-6 max-w-2xl text-center font-light text-neutral-600" data-speakable>
          Cadence Henderson is a master-planned community in Henderson NV 89011. Dr. Jan Duffy represents buyers at no extra cost on new construction — the builder typically pays her fee. Call {CONTACT_INFO.phone}.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-900 list-disc list-inside max-w-4xl mx-auto">
          <li>9 active builders in Cadence Henderson</li>
          <li>Homes from $300Ks to $700K+</li>
          <li>Buyer representation 100% free — builder pays</li>
          <li>Located at Henderson NV 89011</li>
        </ul>
        <p className="text-center mt-4">
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
            className="inline-flex items-center gap-2 text-sm font-light tracking-[0.08em] text-neutral-900 hover:underline"
            aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}
          >
            <Phone size={18} aria-hidden />
            Book a free 15-min call — {CONTACT_INFO.phone}
          </a>
          {' · '}
          <Link href="/contact" className="text-sm font-light tracking-[0.08em] text-neutral-900 hover:underline">
            Contact Dr. Jan
          </Link>
        </p>
      </div>
    </section>
  )
}
