import { PageHero } from '@/components/cadence/page-hero'
import type { Metadata } from 'next'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO, HOA_CONTACT } from '@/components/cadence/contact-info'
import { Calendar, ExternalLink, Mail, Phone } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

export const metadata: Metadata = {
  title: 'Community Events in Cadence Henderson NV | 89011',
  description:
    'Find official Cadence Henderson community events on the Master Association calendar. Tour homes and lifestyle with Dr. Jan Duffy in Henderson NV 89011.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/events' },
  openGraph: {
    title: 'Community Events in Cadence Henderson NV | 89011',
    description:
      'Official Cadence Henderson events are posted by the Master Association. Tour the community with Dr. Jan Duffy.',
    url: 'https://www.cadencehenderson.com/lifestyle/events',
  },
}

const EVENTS_FAQS = [
  {
    q: 'Where can I find official Cadence Henderson events?',
    a: `Check https://cadencenv.com/lifestyle/events/ for developer-listed events (it may show no upcoming events) and the ${HOA_CONTACT.name} community calendar at cadencecommunityassociation.com for resident lifestyle programs. This real estate site does not invent event times or Add-to-Calendar listings.`,
  },
  {
    q: 'Who should I contact about Cadence community events?',
    a: `For Association event questions, sponsorships, or lifestyle programs, contact the ${HOA_CONTACT.name} at ${HOA_CONTACT.phone} or ${HOA_CONTACT.lifestyleEmail}. Call ${CONTACT_INFO.phone} for Cadence home tours and buying or selling questions with Dr. Jan Duffy.`,
  },
  {
    q: 'Does Cadence Henderson host community activities?',
    a: 'Yes. Cadence publishes events when scheduled on cadencenv.com, and the Master Association runs lifestyle programs (including Truckin’ Through Cadence food trucks). Always confirm current dates on those official calendars before attending.',
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Community events in Cadence Henderson NV 89011"
        subtitle="Official event dates, times, and locations are published by the Cadence Master Association — not this real estate site."
        imageSrc={cfImage(SITE_IMAGES.hero.events, 'hero')}
        imageAlt="Community events at Cadence Henderson NV 89011"
        icon={Calendar}
      >
        <a
          href={HOA_CONTACT.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-white text-orange-900 hover:bg-gray-100"
          >
            View official Association calendar
            <ExternalLink size={16} className="ml-2" />
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Official Cadence event calendar
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The developer events page at{' '}
              <a
                href="https://cadencenv.com/lifestyle/events/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-900 font-medium hover:underline"
              >
                cadencenv.com/lifestyle/events
              </a>{' '}
              currently lists no upcoming events. Resident lifestyle programs (food
              trucks, festivals, movies, and more) are posted by the Cadence Master
              Association. This real estate site does not invent event dates or
              “Add to Calendar” listings.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="border border-orange-200 bg-orange-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Developer event listings
                </h3>
                <p className="text-gray-700 mb-4">
                  Cadence NV publishes community/marketing events when scheduled.
                  Check that page before assuming anything is upcoming.
                </p>
                <a
                  href="https://cadencenv.com/lifestyle/events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="outline" className="border-orange-900 text-orange-900">
                    Open cadencenv.com events
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>
              </div>

              <div className="border border-orange-200 bg-orange-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {HOA_CONTACT.name}
                </h3>
                <p className="text-gray-700 mb-2">{HOA_CONTACT.address}</p>
                <ul className="space-y-2 text-gray-700 mb-4 text-sm">
                  <li>
                    <strong>Phone:</strong>{' '}
                    <a
                      href={`tel:${HOA_CONTACT.phone.replace(/-/g, '')}`}
                      className="text-orange-900 hover:underline"
                    >
                      {HOA_CONTACT.phone}
                    </a>
                  </li>
                  <li>
                    <strong>Events:</strong>{' '}
                    <a
                      href={`mailto:${HOA_CONTACT.lifestyleEmail}`}
                      className="text-orange-900 hover:underline"
                    >
                      {HOA_CONTACT.lifestyleEmail}
                    </a>
                  </li>
                  <li>
                    <strong>Hours:</strong> {HOA_CONTACT.hours}
                  </li>
                </ul>
                <a
                  href={HOA_CONTACT.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button className="bg-orange-900 text-white hover:bg-orange-800">
                    Association community calendar
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>

            <p className="text-center text-gray-600">
              Looking for a home in Cadence Henderson? Dr. Jan Duffy helps buyers
              and sellers tour villages and understand lifestyle trade-offs — while
              the Association remains the source for resident events and amenity
              operations.
            </p>
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
                Schedule a home search consultation — not Association event booking.
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
              Association events vs. real estate help in Cadence Henderson NV 89011
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
        description="Official Cadence Henderson events are published by the Master Association. Tour homes with Dr. Jan Duffy in Henderson NV 89011."
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
