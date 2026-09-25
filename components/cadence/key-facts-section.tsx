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
      className="py-8 bg-white border-b border-gray-100"
      aria-labelledby="key-facts-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative h-[140px] sm:h-[160px] rounded-lg overflow-hidden mb-6 max-w-4xl mx-auto bg-gray-200">
          <CloudflareImage
            src={cfImage(SITE_IMAGES.location.welcomeCenter, 'card')}
            alt="Cadence Henderson NV 89011 welcome center"
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <h2 id="key-facts-heading" className="sr-only">
          Key Facts — Cadence Henderson NV 89011
        </h2>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-900 list-disc list-inside max-w-4xl mx-auto">
          <li>9 active builders in Cadence Henderson</li>
          <li>Homes from $300Ks to $700K+</li>
          <li>Buyer representation 100% free — builder pays</li>
          <li>Located at Henderson NV 89011</li>
        </ul>
        <p className="text-center mt-4">
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
            className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:underline"
            aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}
          >
            <Phone size={18} aria-hidden />
            Book a free 15-min call — {CONTACT_INFO.phone}
          </a>
          {' · '}
          <Link href="/contact" className="text-blue-900 font-semibold hover:underline">
            Contact Dr. Jan
          </Link>
        </p>
      </div>
    </section>
  )
}
