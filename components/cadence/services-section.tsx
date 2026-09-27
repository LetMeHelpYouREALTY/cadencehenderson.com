import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { Home, Key, Building2, Calendar, MapPin } from 'lucide-react'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CloudflareImage } from '@/components/cadence/cloudflare-image'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

type ServiceItem = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  ariaLabel: string
  external?: boolean
}

const SERVICES: ServiceItem[] = [
  {
    title: 'Free Buyer Representation',
    description: 'New homes Cadence Henderson NV 89011. Dr. Jan Duffy represents buyers across all 9 builders — builder pays the fee.',
    href: '/new-homes',
    icon: Home,
    ariaLabel: 'View new homes and resale in Cadence Henderson',
    external: false,
  },
  {
    title: 'New Homes by Builder',
    description: 'Browse all 9 Cadence Henderson builders. New construction Henderson NV — free agent; builder pays.',
    href: '/new-homes',
    icon: Key,
    ariaLabel: 'New homes by builder in Cadence Henderson NV 89011',
    external: false,
  },
  {
    title: 'Rentals in Cadence',
    description: 'Rental homes and communities in Cadence, Henderson NV 89011.',
    href: '/apartments',
    icon: Building2,
    ariaLabel: 'Apartments and rentals in Cadence Henderson NV 89011',
    external: false,
  },
  {
    title: 'Free Consultation',
    description: '15-minute call with Dr. Jan Duffy. Get answers about buying, selling, or living in Cadence.',
    href: CONTACT_INFO.calendlyUrl,
    icon: Calendar,
    ariaLabel: 'Schedule a free real estate consultation in Cadence Henderson',
    external: true,
  },
]

export function ServicesSection() {
  return (
    <section
      className="py-24 bg-neutral-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative h-[200px] sm:h-[240px] overflow-hidden mb-16 bg-neutral-200">
          <CloudflareImage
            src={cfImage(SITE_IMAGES.gallery.newHome, 'hero')}
            alt="New homes for sale Cadence Henderson NV 89011 — Dr. Jan Duffy buyer's agent"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden />
        </div>
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-4xl font-extralight tracking-[0.06em] text-neutral-900 mb-6">
            What Buyers Get at Cadence Henderson — Free Expert Representation
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Dr. Jan Duffy represents new home buyers only at Cadence Henderson NV 89011. The builder pays her fee — free to buyers. Berkshire Hathaway HomeServices Nevada Properties. </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon
            const isExternal = service.href.startsWith('http')
            const content = (
              <>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white mb-6">
                  <Icon className="w-6 h-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </>
            )
            return (
              <div
                key={service.title}
                className="bg-white p-8 border border-neutral-200"
              >
                {isExternal ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={service.ariaLabel}
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={service.href} className="block" aria-label={service.ariaLabel}>
                    {content}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" aria-hidden />
            Serving Cadence, Henderson NV 89011 and the greater Henderson area
          </p>
          <p className="text-sm text-gray-600">
            {CONTACT_INFO.welcomeCenter} · {CONTACT_INFO.phone}
          </p>
        </div>
      </div>
    </section>
  )
}
