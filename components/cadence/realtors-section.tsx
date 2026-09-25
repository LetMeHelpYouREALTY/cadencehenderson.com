import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CloudflareImage } from '@/components/cadence/cloudflare-image'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

export function RealtorsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-200">
            <CloudflareImage
              src={cfImage(SITE_IMAGES.sections.realtors, 'card')}
              alt="New homes for sale Cadence Henderson NV 89011"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Use a Buyer&apos;s Agent for New Construction in Henderson NV
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-20 w-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-blue-900/20 shadow-md">
                <CloudflareImage
                  src={cfImage(SITE_IMAGES.agent.headshot, 'avatar')}
                  alt="Dr. Jan Duffy, REALTOR® — Cadence Henderson new home buyer's agent"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Your buyer&apos;s agent</p>
                <p className="text-lg font-bold text-gray-900">Dr. Jan Duffy</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Dr. Jan Duffy provides free new home buyer representation at Cadence Henderson NV 89011. She negotiates upgrades, lot premiums, and closing costs with all 9 builders — at zero cost to you. The builder pays her full commission. Call {CONTACT_INFO.phone} before your first model home visit.</p>
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
              asChild
            >
              <CalendlyLink>Schedule your free 15-min call</CalendlyLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="ml-4 border-blue-900 text-blue-900 hover:bg-blue-50 text-lg px-8"
              asChild
            >
              <Link href="/contact" aria-label="Contact Dr. Jan Duffy – Cadence Henderson real estate">
                Contact Dr. Jan
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="ml-4 border-blue-900 text-blue-900 hover:bg-blue-50 text-lg px-8"
              asChild
            >
              <Link href="/realtors">Realtor Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

