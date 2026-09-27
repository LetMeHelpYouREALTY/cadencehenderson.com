import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CONTACT_INFO, GEO_LINKS } from '@/components/cadence/contact-info'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

type AgentContactCtaProps = {
  heading: string
  body: string
}

/**
 * Closing CTA with visible NAP and Call / Directions / Reviews (GEO).
 */
export function AgentContactCta({ heading, body }: AgentContactCtaProps) {
  return (
    <section className="bg-cadence-ink py-16 text-white" aria-labelledby="agent-cta-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="agent-cta-heading" className="mb-4 text-3xl font-extralight tracking-[0.06em]">
            {heading}
          </h2>
          <p className="aeo-lead mb-4 text-lg font-light text-white/80" data-speakable>
            {body}
          </p>
          <p className="mb-4 text-sm font-light text-white/70">
            {CONTACT_INFO.siteName} · {CONTACT_INFO.welcomeCenter} · {CONTACT_INFO.phone}
          </p>
          <p className="mb-8 text-sm font-light text-white/60">{CONTACT_INFO.hours}</p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-light">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
            >
              Call {CONTACT_INFO.phone}
            </a>
            <a
              href={GEO_LINKS.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
            >
              Directions
            </a>
            <a
              href={GEO_LINKS.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
            >
              View Google Reviews
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <CalendlyLink>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50"
              >
                Schedule a call
              </Button>
            </CalendlyLink>
            <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="mr-2" size={20} />
                Call {CONTACT_INFO.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
