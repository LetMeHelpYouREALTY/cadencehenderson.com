'use client'

import { PageHero } from '@/components/cadence/page-hero'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { HomeSearchSection } from '@/components/cadence/home-search-section'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { RealScoutHomeValue } from '@/components/idx/realscout-home-value'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Contact Us"
        subtitle="Have questions about Cadence? We're here to help you find your perfect home in our community."
        imageSrc={cfImage(SITE_IMAGES.hero.contact, 'hero')}
        imageAlt="Contact Cadence Henderson real estate office in Henderson NV 89011"
      />

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.contact, 'hero')}
        alt="Dr. Jan Duffy office serving Cadence Henderson NV 89011"
      />


      <HomeSearchSection compact />

      {/* Home Value Widget for Sellers */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Selling a Cadence Henderson NV 89011 home?
            </h2>
            <p className="text-gray-700 mb-8">
              Get a free, instant estimate of your home's value in today's market.
            </p>
            <div className="flex justify-center">
              <RealScoutHomeValue />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-1">
                      Visit Our Office
                    </h3>
                    <address
                      className="text-gray-700 not-italic"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <span itemProp="streetAddress">{CONTACT_INFO.address.street}</span>
                      <br />
                      <span itemProp="addressLocality">{CONTACT_INFO.address.city}</span>,{' '}
                      <span itemProp="addressRegion">{CONTACT_INFO.address.state}</span>{' '}
                      <span itemProp="postalCode">{CONTACT_INFO.address.zip}</span>
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-1">Call Dr. Jan</h3>
                    <p className="text-gray-700">
                      <a
                        href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                        className="hover:text-blue-900 transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-700">
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="hover:text-blue-900 transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock size={24} className="text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-1">
                      Welcome Center Hours
                    </h3>
                    <p className="text-gray-700">
                      {CONTACT_INFO.hours}
                      <br />
                      Closed major holidays
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map embed */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.welcomeCenter)}&output=embed`}
                  width="100%"
                  height="300"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${CONTACT_INFO.siteName} Office Location – Henderson NV 89011`}
                />
              </div>
              <div className="mt-3 text-center">
                <a
                  href={`https://www.google.com/maps/dir//${encodeURIComponent(CONTACT_INFO.welcomeCenter)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>

            {/* Schedule a Consultation - Calendly (loads when in view) */}
            <CalendlyWhenVisible>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Schedule a Consultation
              </h2>
              <p className="text-gray-700 mb-6">
                Book a 15-minute call with Dr. Jan Duffy to discuss Cadence
                Henderson homes, schedule a tour, or get personalized guidance.
              </p>
              <CalendlyInlineWidget className="rounded-lg overflow-hidden" />
            </div>
            </CalendlyWhenVisible>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="contact-faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="contact-faq-heading" className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Contact Cadence Henderson FAQs
            </h2>
            <p className="text-center text-gray-700 mb-8">
              {CONTACT_INFO.siteName} – Henderson NV 89011
            </p>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'How do I schedule a Cadence Henderson home tour?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Schedule a Cadence Henderson home tour by calling ${CONTACT_INFO.phone} or booking online at calendly.com. The Welcome Center at ${CONTACT_INFO.welcomeCenter} is open 10AM–6PM daily.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What are the Cadence Henderson office hours?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `The Cadence Henderson real estate office at ${CONTACT_INFO.welcomeCenter} is open Monday through Sunday, 10:00 AM to 6:00 PM.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Where is the Cadence Henderson real estate office?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `The Cadence Henderson real estate office is at ${CONTACT_INFO.welcomeCenter}, near Bicentennial Pkwy and Paseo Verde.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How can I get a free home value estimate for my Cadence Henderson home?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Use the free home value widget on the contact page or call ${CONTACT_INFO.phone}. Get an instant estimate for your Cadence Henderson NV 89011 property.`,
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-4">
              {[
                { q: 'How do I schedule a Cadence Henderson home tour?', a: `Schedule by calling ${CONTACT_INFO.phone} or booking online. The Welcome Center at ${CONTACT_INFO.welcomeCenter} is open 10AM–6PM daily.` },
                { q: 'What are the Cadence Henderson office hours?', a: `Open Monday through Sunday, 10:00 AM to 6:00 PM at ${CONTACT_INFO.welcomeCenter}.` },
                { q: 'Where is the Cadence Henderson real estate office?', a: `${CONTACT_INFO.welcomeCenter}, near Bicentennial Pkwy and Paseo Verde.` },
                { q: 'How can I get a free home value estimate for my Cadence Henderson home?', a: `Use the home value widget on this page or call ${CONTACT_INFO.phone} for an instant estimate.` },
              ].map(({ q, a }) => (
                <details key={q} className="group border border-gray-200 rounded-lg p-5 cursor-pointer bg-white">
                  <summary className="font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                    {q}
                    <span className="text-blue-900 shrink-0 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="faq-answer mt-3 text-gray-700 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/contact"
        name={`Contact ${CONTACT_INFO.siteName} | ${CONTACT_INFO.phone}`}
        description={`Schedule a Cadence Henderson home tour. Call ${CONTACT_INFO.phone} or visit ${CONTACT_INFO.welcomeCenter}. Open 7 days 10AM–6PM. Licensed REALTOR® on-site.`}
        breadcrumbs={[{ name: 'Contact Dr. Jan Duffy in Cadence Henderson NV 89011' }]}
      />
      <Footer />
    </div>
  )
}
