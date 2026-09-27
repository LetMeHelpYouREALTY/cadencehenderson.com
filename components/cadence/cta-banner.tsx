import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Button } from '@/components/ui/button'
import { Calendar, Mail, Phone } from 'lucide-react'
import { CONTACT_INFO } from './contact-info'

export function CTABanner() {
  return (
    <section className="py-28 bg-cadence-ink text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-[0.08em] mb-6">
            Ready to Buy or Sell at Cadence?
          </h2>
          <p className="text-lg font-light text-white/85 mb-12">
            Whether you&apos;re looking for your next home or ready to sell, Dr. Jan Duffy is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 w-full sm:w-auto"
              asChild
            >
              <CalendlyLink>I Want To Buy</CalendlyLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              asChild
            >
              <CalendlyLink>I Want To Sell</CalendlyLink>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white hover:text-primary"
              asChild
            >
              <CalendlyLink>
                <Calendar className="mr-2" size={16} aria-hidden />
                Schedule a Call
              </CalendlyLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                aria-label="Email Dr. Jan Duffy"
              >
                <Mail className="mr-2" size={16} aria-hidden />
                Email Dr. Jan
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}
              >
                <Phone className="mr-2" size={16} aria-hidden />
                {CONTACT_INFO.phone}
              </a>
            </Button>
          </div>
          <p className="mt-12 text-xs font-light tracking-[0.16em] uppercase text-white/70">
            Licensed real estate professional — Cadence Henderson
          </p>
        </div>
      </div>
    </section>
  )
}
