import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CloudflareImage } from '@/components/cadence/cloudflare-image'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

export function RealtorsSection() {
  return (
    <section className="py-24 bg-neutral-50" aria-labelledby="realtors-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[400px] overflow-hidden bg-neutral-200">
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
            <h2 id="realtors-heading" className="text-4xl font-extralight tracking-[0.06em] text-neutral-900 mb-8">
              Why Use a Buyer&apos;s Agent for New Construction in Henderson NV
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden border border-neutral-300">
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
                <p className="text-lg font-light tracking-[0.04em] text-neutral-900">Dr. Jan Duffy</p>
              </div>
            </div>
            <p className="aeo-lead text-xl text-gray-700 mb-8 leading-relaxed" data-speakable>
              Dr. Jan Duffy provides free new home buyer representation at Cadence Henderson NV 89011. She negotiates upgrades, lot premiums, and closing costs with Cadence builders — at zero cost to you. The builder pays her full commission. Call {CONTACT_INFO.phone} before your first model home visit. Office: {CONTACT_INFO.welcomeCenter}.</p>
            <Button
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <CalendlyLink>Schedule your free 15-min call</CalendlyLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="ml-4 border-neutral-900 text-neutral-900 hover:bg-neutral-50 text-lg px-8"
              asChild
            >
              <Link href="/contact" aria-label="Contact Dr. Jan Duffy – Cadence Henderson real estate">
                Contact Dr. Jan
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="ml-4 border-neutral-900 text-neutral-900 hover:bg-neutral-50 text-lg px-8"
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

