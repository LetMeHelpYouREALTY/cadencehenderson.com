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
import { Calendar, Mail, MapPin, Phone } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Events in Cadence Henderson NV | 89011',
  description:
    'Community events and gatherings around Central Park in Cadence Henderson NV 89011. Tour the lifestyle with Dr. Jan Duffy — confirm current dates with the Master Association.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/events' },
  openGraph: {
    title: 'Community Events in Cadence Henderson NV | 89011',
    description:
      'Cadence Henderson community events around Central Park. Tour homes and lifestyle with Dr. Jan Duffy.',
    url: 'https://www.cadencehenderson.com/lifestyle/events',
  },
}

/**
 * Content steered from cadencenv.com/lifestyle/events (no outbound links).
 * That page currently lists no upcoming events; recent past examples include
 * concerts, car shows, and builder-hosted gatherings at Central Park.
 */
const lifestyleHighlights = [
  {
    title: 'Concerts in Central Park',
    location: 'Central Park, 1015 E. Sunset Road',
    description:
      'Cadence has hosted evening concerts at Central Park. Dates and lineups change — ask the Cadence Master Association for what is on the calendar now.',
    image: cfImage(SITE_IMAGES.lifestyle.concert, 'card'),
  },
  {
    title: 'Community car shows',
    location: 'Sunset Road along Central Park',
    description:
      'Past Cadence car shows have lined Sunset Road beside Central Park with classic and custom vehicles. Confirm any upcoming show with the Association.',
    image: cfImage(SITE_IMAGES.lifestyle.events, 'card'),
  },
  {
    title: 'Builder & neighborhood gatherings',
    location: 'Villages across Cadence Henderson',
    description:
      'Builders occasionally host open houses and community gatherings in Cadence villages. Dr. Jan Duffy can help you tour those neighborhoods year-round.',
    image: cfImage(SITE_IMAGES.homes.exterior1, 'card'),
  },
]

const EVENTS_FAQS = [
  {
    q: 'Are there upcoming events in Cadence Henderson right now?',
    a: `Schedules change. There may be no publicly listed upcoming developer events at a given time. For current Association lifestyle programs, call the ${HOA_CONTACT.name} at ${HOA_CONTACT.phone} or email ${HOA_CONTACT.lifestyleEmail}. For home tours, call Dr. Jan Duffy at ${CONTACT_INFO.phone}.`,
  },
  {
    q: 'What kinds of events happen in Cadence Henderson?',
    a: 'Cadence Central Park has hosted concerts, car shows, and community gatherings. The Master Association also runs lifestyle programs such as food trucks near Central Park. Exact dates are set by the Association — this page describes the lifestyle, not a live calendar.',
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
        subtitle="Central Park gatherings, concerts, and neighborhood events are part of Cadence living — schedules come from the Master Association, not invented listings here."
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
              Wake up to events at Cadence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cadence Henderson is built around gathering spaces — especially the
              50-acre Central Park. Concerts, car shows, and village events have
              taken place here. We do not publish unofficial weekly calendars or
              “Add to Calendar” buttons that confuse residents. For today’s
              schedule, contact the Association; for a home tour, stay with Dr. Jan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {lifestyleHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <SiteImage
                    src={item.image}
                    alt={`${item.title} in Cadence Henderson NV 89011`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="flex items-start text-sm text-gray-600 mb-3">
                    <MapPin size={16} className="mr-2 mt-0.5 shrink-0" />
                    {item.location}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto border border-orange-200 bg-orange-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Current event schedules
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Date-specific times and registration are managed by the{' '}
              {HOA_CONTACT.name}. Call or email them for what is happening this
              week — then come back here to tour homes with Dr. Jan Duffy.
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
        description="Community events around Central Park in Cadence Henderson NV 89011. Tour with Dr. Jan Duffy."
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
