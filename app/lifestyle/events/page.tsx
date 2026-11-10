import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO, HOA_CONTACT } from '@/components/cadence/contact-info'
import { Calendar, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Events in Cadence Henderson NV | 89011',
  description:
    'Past Cadence Henderson community events: Beazer Cantata Point pet adoption (Nov 9, 2024) and Cadence Car Show at Central Park (Oct 13, 2024). Tour with Dr. Jan Duffy.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/events' },
  openGraph: {
    title: 'Community Events in Cadence Henderson NV | 89011',
    description:
      'Documented past Cadence Henderson events at Cantata Point and Central Park. Confirm current dates with the Master Association; tour homes with Dr. Jan Duffy.',
    url: 'https://www.cadencehenderson.com/lifestyle/events',
  },
}

/**
 * Only dated events confirmed for this page — no invented weekly calendars.
 * Sources: Cadence / Beazer community event announcements (2024).
 */
const PAST_EVENTS = [
  {
    id: 'pet-adoption-2024-11-09',
    title: 'Beazer Homes’ Cantata Point Hosts Pet Adoption Event',
    dateLabel: 'November 9, 2024',
    timeLabel: '11:00 am – 2:00 pm',
    monthShort: 'Nov',
    day: '9',
    year: '2024',
    location: 'Cantata Point, 334 Ukelele Place, Henderson',
    description:
      'Join us at Cantata Point by Beazer Homes this Saturday, Nov. 9, from 11 a.m. to 2 p.m. for a pet adoption event. The Nevada SPCA will be on site for community residents and visitors.',
    image: cfImage(SITE_IMAGES.lifestyle.events, 'card'),
  },
  {
    id: 'car-show-2024-10-13',
    title: 'Cadence Car Show',
    dateLabel: 'October 13, 2024',
    timeLabel: '10:00 am – 3:00 pm',
    monthShort: 'Oct',
    day: '13',
    year: '2024',
    location: 'Central Park, 1015 E. Sunset Road, Henderson',
    description:
      'Save the date: Cadence Car Show on Sunday, Oct. 13, from 10 a.m. to 3 p.m. on Sunset Road along Central Park, with classic and custom vehicles on display.',
    image: cfImage(SITE_IMAGES.lifestyle.concert, 'card'),
  },
] as const

const EVENTS_FAQS = [
  {
    q: 'What events are listed on this page?',
    a: 'This page lists only two documented past Cadence community events: the Beazer Homes Cantata Point pet adoption event (November 9, 2024, 11 a.m.–2 p.m.) and the Cadence Car Show at Central Park (October 13, 2024, 10 a.m.–3 p.m.). We do not invent weekly calendars.',
  },
  {
    q: 'Are there upcoming Cadence events right now?',
    a: `For current Association lifestyle programs and new dates, call the ${HOA_CONTACT.name} at ${HOA_CONTACT.phone} or email ${HOA_CONTACT.lifestyleEmail}. For Cadence home tours, call Dr. Jan Duffy at ${CONTACT_INFO.phone}.`,
  },
  {
    q: 'Who should I call about Cadence community events?',
    a: `Event and lifestyle program questions: ${HOA_CONTACT.name} at ${HOA_CONTACT.phone} (${HOA_CONTACT.lifestyleEmail}). Buying or selling a Cadence home: Dr. Jan Duffy at ${CONTACT_INFO.phone}.`,
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Community events in Cadence Henderson NV 89011"
        subtitle="Documented past Cadence gatherings only — confirm any new dates with the Master Association."
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
              Past community events
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              These are the only events listed on this site. They are past,
              dated gatherings — not a live Association calendar.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            {PAST_EVENTS.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="md:flex">
                  <div className="relative h-56 md:h-auto md:w-56 shrink-0 bg-orange-900 text-white flex flex-col items-center justify-center p-6">
                    <span className="text-sm uppercase tracking-widest opacity-90">
                      {event.monthShort}
                    </span>
                    <span className="text-5xl font-bold leading-none my-1">
                      {event.day}
                    </span>
                    <span className="text-sm opacity-90">{event.year}</span>
                  </div>
                  <div className="relative hidden md:block md:w-48 shrink-0">
                    <SiteImage
                      src={event.image}
                      alt={`${event.title} in Cadence Henderson NV 89011`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-orange-900 mb-2">
                      Past event
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="flex items-start text-sm text-gray-700 mb-2">
                      <Clock size={16} className="mr-2 mt-0.5 shrink-0 text-orange-900" />
                      <span>
                        {event.dateLabel} @ {event.timeLabel}
                      </span>
                    </p>
                    <p className="flex items-start text-sm text-gray-700 mb-4">
                      <MapPin size={16} className="mr-2 mt-0.5 shrink-0 text-orange-900" />
                      {event.location}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="max-w-3xl mx-auto border border-orange-200 bg-orange-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Current schedules
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For new or upcoming Association lifestyle programs, contact the{' '}
              {HOA_CONTACT.name}. Then tour Cadence homes with Dr. Jan Duffy.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6 text-sm">
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
                <strong>Office:</strong> {HOA_CONTACT.address} · {HOA_CONTACT.hours}
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <CalendlyLink>
                <Button className="bg-orange-900 text-white hover:bg-orange-800">
                  Schedule a Cadence home tour
                </Button>
              </CalendlyLink>
              <Button variant="outline" className="border-orange-900 text-orange-900" asChild>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Cadence Henderson events — questions
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Community lifestyle in Cadence Henderson NV 89011
            </p>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: EVENTS_FAQS.map(({ q, a }) => ({
                    '@type': 'Question',
                    name: q,
                    acceptedAnswer: { '@type': 'Answer', text: a },
                  })),
                }),
              }}
            />
            <div className="space-y-4">
              {EVENTS_FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-gray-200 rounded-lg p-5 cursor-pointer"
                >
                  <summary className="font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                    {q}
                    <span className="text-orange-900 shrink-0 group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <p className="faq-answer mt-3 text-gray-700 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/events"
        name="Community Events in Cadence Henderson NV | 89011"
        description="Past Cadence Henderson events: Cantata Point pet adoption (Nov 9, 2024) and Cadence Car Show (Oct 13, 2024). Tour with Dr. Jan Duffy."
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
