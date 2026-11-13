import type { Metadata } from 'next'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageHero } from '@/components/cadence/page-hero'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO, HOA_CONTACT } from '@/components/cadence/contact-info'
import { Calendar, Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import {
  getUpcomingHendersonCityEvents,
  HENDERSON_SPECIAL_EVENTS_SOURCE_URL,
} from '@/lib/henderson-city-events'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Events in Cadence Henderson NV | 89011',
  description:
    'Upcoming City of Henderson special events near Cadence NV 89011. Cadence Association lifestyle dates: call 702-605-3111. Tour with Dr. Jan Duffy.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/events' },
  openGraph: {
    title: 'Community Events in Cadence Henderson NV | 89011',
    description:
      'Upcoming City of Henderson Parks & Recreation special events. Confirm Cadence Association dates with the Master Association; tour homes with Dr. Jan Duffy.',
    url: 'https://www.cadencehenderson.com/lifestyle/events',
  },
}

const EVENTS_FAQS = [
  {
    q: 'What events are listed on this page?',
    a: 'Upcoming City of Henderson Parks & Recreation special events from the official city calendar (Next 30 Days). Past events are not listed. This is not a Cadence HOA calendar.',
  },
  {
    q: 'Where do these Henderson event dates come from?',
    a: 'Titles, dates, and times are taken from the City of Henderson special events calendar. Confirm details and locations on the city site before you go — schedules can change.',
  },
  {
    q: 'Are there Cadence Association lifestyle events?',
    a: `For Cadence Master Association lifestyle programs and new dates, call ${HOA_CONTACT.name} at ${HOA_CONTACT.phone} or email ${HOA_CONTACT.lifestyleEmail}. We do not invent weekly HOA calendars on this site.`,
  },
  {
    q: 'Who helps with Cadence home tours?',
    a: `Dr. Jan Duffy, REALTOR®, at ${CONTACT_INFO.phone} — new homes and resale in Cadence Henderson NV 89011.`,
  },
]

export default function EventsPage() {
  const upcoming = getUpcomingHendersonCityEvents()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Community events in Cadence Henderson NV 89011"
        subtitle="Upcoming City of Henderson special events — past dates removed. Cadence Association schedules: call the Master Association."
        imageSrc={cfImage(SITE_IMAGES.hero.events, 'hero')}
        imageAlt="Community events at Cadence Henderson NV 89011"
        icon={Calendar}
      >
        <CalendlyLink>
          <Button
            size="lg"
            className="bg-white text-orange-900 hover:bg-gray-100"
          >
            Tour Cadence with Dr. Jan
          </Button>
        </CalendlyLink>
      </PageHero>

      <RealScoutOfficeListings />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Henderson special events
            </h2>
            <p className="text-lg text-gray-900 leading-relaxed">
              From the City of Henderson Parks &amp; Recreation special events
              calendar (Next 30 Days). Only upcoming dates are shown — past
              events are filtered out. Confirm times and locations on the city
              calendar before attending.
            </p>
            <p className="mt-4">
              <a
                href={HENDERSON_SPECIAL_EVENTS_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-900 font-medium hover:underline"
              >
                Official City of Henderson calendar
                <ExternalLink size={16} />
              </a>
            </p>
          </div>

          {upcoming.length === 0 ? (
            <div className="max-w-3xl mx-auto border border-gray-200 rounded-lg p-8 text-center mb-12">
              <p className="text-gray-900 leading-relaxed">
                No upcoming City of Henderson special events are listed here
                right now. Check the{' '}
                <a
                  href={HENDERSON_SPECIAL_EVENTS_SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-900 underline"
                >
                  official city calendar
                </a>{' '}
                for the latest dates.
              </p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              {upcoming.map((event) => (
                <article
                  key={event.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="md:flex">
                    <div className="relative h-40 md:h-auto md:w-40 shrink-0 bg-orange-900 text-white flex flex-col items-center justify-center p-6">
                      <span className="text-sm uppercase tracking-widest opacity-90">
                        {event.monthShort}
                      </span>
                      <span className="text-5xl font-bold leading-none my-1">
                        {event.day}
                      </span>
                      <span className="text-sm opacity-90">{event.year}</span>
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange-900 mb-2">
                        City of Henderson · Upcoming
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="flex items-start text-sm text-gray-900 mb-2">
                        <Clock
                          size={16}
                          className="mr-2 mt-0.5 shrink-0 text-orange-900"
                        />
                        <span>
                          {event.dateLabel}
                          {event.timeLabel ? ` · ${event.timeLabel}` : ''}
                        </span>
                      </p>
                      {event.location ? (
                        <p className="flex items-start text-sm text-gray-900 mb-3">
                          <MapPin
                            size={16}
                            className="mr-2 mt-0.5 shrink-0 text-orange-900"
                          />
                          {event.location}
                        </p>
                      ) : (
                        <p className="text-sm text-gray-800 mb-3">
                          Confirm location on the City of Henderson calendar.
                        </p>
                      )}
                      <p className="text-xs text-gray-500">{event.sourceNote}</p>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="max-w-3xl mx-auto border border-orange-200 bg-orange-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Cadence Association schedules
            </h3>
            <p className="text-gray-900 mb-4 leading-relaxed">
              City events above are not Cadence HOA programs. For Master
              Association lifestyle dates, contact the {HOA_CONTACT.name}. Tour
              Cadence homes with Dr. Jan Duffy.
            </p>
            <ul className="space-y-2 text-gray-900 mb-6 text-sm">
              <li>
                <strong>Association phone:</strong>{' '}
                <a
                  href={`tel:${HOA_CONTACT.phone.replace(/-/g, '')}`}
                  className="text-orange-900 hover:underline"
                >
                  {HOA_CONTACT.phone}
                </a>
              </li>
              <li>
                <strong>Events email:</strong>{' '}
                <a
                  href={`mailto:${HOA_CONTACT.lifestyleEmail}`}
                  className="text-orange-900 hover:underline"
                >
                  {HOA_CONTACT.lifestyleEmail}
                </a>
              </li>
              <li>
                <strong>Office:</strong> {HOA_CONTACT.address} ·{' '}
                {HOA_CONTACT.hours}
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <CalendlyLink>
                <Button className="bg-orange-900 text-white hover:bg-orange-800">
                  Schedule a Cadence home tour
                </Button>
              </CalendlyLink>
              <Button
                variant="outline"
                className="border-orange-900 text-orange-900"
                asChild
              >
                <Link href="/lifestyle/amenities">See Cadence amenities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Calendar size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Tour Cadence Henderson with Dr. Jan Duffy
              </h2>
              <p className="text-xl text-white mb-6">
                Walk Central Park and nearby villages — then decide which builder
                village fits your lifestyle.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-orange-900 transition-colors"
                >
                  <Phone size={20} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-orange-900 transition-colors"
                >
                  <Mail size={20} />
                  Email Dr. Jan
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <CalendlyWhenVisible>
                <CalendlyInlineWidget
                  className="w-full"
                  style={{ minWidth: 320, height: 650 }}
                />
              </CalendlyWhenVisible>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/events"
        name="Community Events in Cadence Henderson NV | 89011"
        description="Upcoming City of Henderson special events near Cadence NV 89011. Association dates via Master Association; tours with Dr. Jan Duffy."
        faqs={EVENTS_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Events in Cadence Henderson NV 89011' },
        ]}
        faqHeading="Cadence Henderson events — questions"
      />
      <Footer />
    </div>
  )
}
