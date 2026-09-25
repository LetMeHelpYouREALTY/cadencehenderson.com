import { PageHero } from '@/components/cadence/page-hero'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Home,
  Building2,
  Trees,
  GraduationCap,
  ShoppingBag,
  Plane,
} from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

export const metadata: Metadata = {
  title: 'Cadence Henderson Location & Directions | Henderson NV 89011',
  description:
    `Find Cadence Henderson real estate at Bicentennial Pkwy & Paseo Verde, Henderson NV 89011. ${CONTACT_INFO.address.street}. Maps, directions & nearby landmarks.`,
  alternates: { canonical: 'https://www.cadencehenderson.com/maps' },
  openGraph: {
    title: 'Cadence Henderson Location & Directions | Henderson NV 89011',
    description: `Cadence Henderson real estate office at ${CONTACT_INFO.address.street}, Henderson NV 89011. Open 7 days 10AM–6PM.`,
    url: 'https://www.cadencehenderson.com/maps',
  },
}

export default function MapsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Find Us in Henderson"
        subtitle={
          <>
            <p className="text-2xl font-bold mb-4">{CONTACT_INFO.siteName}</p>
            <p>
              Visit our office to learn about Cadence Henderson homes, schedule
              tours, and get expert guidance from Dr. Jan Duffy, REALTOR® with
              Berkshire Hathaway HomeServices.
            </p>
          </>
        }
        imageSrc={cfImage(SITE_IMAGES.hero.maps, 'hero')}
        imageAlt="Cadence Henderson location and directions in Henderson NV 89011"
        icon={MapPin}
      />

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.maps, 'hero')}
        alt="Maps and trail access in Cadence Henderson NV 89011"
      />


      {/* Embedded Google Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            {CONTACT_INFO.siteName} office map
          </h2>
          <p className="aeo-lead text-xl text-gray-600 mb-8 text-center" data-speakable>
            {CONTACT_INFO.welcomeCenter} · {CONTACT_INFO.phone} · {CONTACT_INFO.hours}
          </p>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.welcomeCenter)}&output=embed`}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Jan Duffy Office Location"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href={`https://www.google.com/maps/dir//${encodeURIComponent(CONTACT_INFO.welcomeCenter)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-teal-900 hover:bg-teal-800">
                <MapPin className="mr-2" size={20} />
                Get Directions in Google Maps
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Convenient Locations Nearby
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Plane size={48} className="mx-auto mb-4 text-teal-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Las Vegas Airport
              </h3>
              <p className="text-gray-600 mb-2">15 minutes</p>
              <p className="text-sm text-gray-600">
                Easy access to Harry Reid International
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎰</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Las Vegas Strip
              </h3>
              <p className="text-gray-600 mb-2">20 minutes</p>
              <p className="text-sm text-gray-600">
                World-class entertainment nearby
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏞️</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Lake Mead
              </h3>
              <p className="text-gray-600 mb-2">15 minutes</p>
              <p className="text-sm text-gray-600">
                Recreation and natural beauty
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <ShoppingBag size={48} className="mx-auto mb-4 text-teal-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Shopping Centers
              </h3>
              <p className="text-gray-600 mb-2">5-10 minutes</p>
              <p className="text-sm text-gray-600">
                Galleria Mall and local retail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Address & Directions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {CONTACT_INFO.siteName}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Dr. Jan Duffy, REALTOR® | License {CONTACT_INFO.licenseNumber}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Office Address
                    </h4>
                    <p className="text-gray-700">
                      {CONTACT_INFO.address.street}
                      <br />
                      {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}{' '}
                      {CONTACT_INFO.address.zip}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Hours</h4>
                    <p className="text-gray-700">
                      Monday - Sunday: 10:00 AM - 6:00 PM
                      <br />
                      Closed major holidays
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Contact</h4>
                    <p className="text-gray-700">
                      Phone: {CONTACT_INFO.phone}
                      <br />
                      Email: {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href={`https://www.google.com/maps/dir//${encodeURIComponent(CONTACT_INFO.welcomeCenter)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-teal-900 hover:bg-teal-800">
                      Get Directions
                    </Button>
                  </a>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                    <Button
                      variant="outline"
                      className="w-full border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white"
                    >
                      Call for Directions
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-full min-h-[400px]">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.welcomeCenter)}&output=embed`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Jan Duffy Office Map"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="maps-faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="maps-faq-heading" className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Cadence Henderson maps FAQs
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Cadence Henderson location and directions – Henderson NV 89011
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
                      name: 'Where is Cadence Henderson located?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Cadence Henderson is at Bicentennial Pkwy & Paseo Verde, Henderson NV 89011. The real estate office is at ${CONTACT_INFO.welcomeCenter}.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do I get directions to Cadence Henderson?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Get directions by clicking Get Directions on this page or searching ${CONTACT_INFO.welcomeCenter} in Google Maps. About 20 minutes from the Las Vegas Strip.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What landmarks are near Cadence Henderson NV 89011?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Cadence Henderson NV 89011 is 15 minutes from Harry Reid Airport, 20 minutes from the Las Vegas Strip, and 15 minutes from Lake Mead. Galleria at Sunset mall is 5 minutes away.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What are the Cadence Henderson office hours?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `The Cadence Henderson real estate office at ${CONTACT_INFO.welcomeCenter} is open 10AM–6PM daily. Call ${CONTACT_INFO.phone} before visiting.`,
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-4">
              {[
                { q: 'Where is Cadence Henderson located?', a: `Cadence Henderson is at Bicentennial Pkwy & Paseo Verde, Henderson NV 89011. The office is at ${CONTACT_INFO.welcomeCenter}.` },
                { q: 'How do I get directions to Cadence Henderson?', a: `Click Get Directions above or search ${CONTACT_INFO.welcomeCenter} in Google Maps. About 20 minutes from the Las Vegas Strip.` },
                { q: 'What landmarks are near Cadence Henderson NV 89011?', a: '15 min from Harry Reid Airport, 20 min from the Strip, 15 min from Lake Mead. Galleria at Sunset mall is 5 minutes away.' },
                { q: 'What are the Cadence Henderson office hours?', a: `Open 10AM–6PM daily at ${CONTACT_INFO.welcomeCenter}. Call ${CONTACT_INFO.phone} before visiting.` },
              ].map(({ q, a }) => (
                <details key={q} className="group border border-gray-200 rounded-lg p-5 cursor-pointer bg-white">
                  <summary className="font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                    {q}
                    <span className="text-teal-900 shrink-0 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="faq-answer mt-3 text-gray-700 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/maps"
        name="Cadence Henderson Location & Directions | Henderson NV 89011"
        description={`Find Cadence Henderson real estate at Bicentennial Pkwy & Paseo Verde, Henderson NV 89011. ${CONTACT_INFO.address.street}. Maps, directions & nearby landmarks.`}
        breadcrumbs={[{ name: 'Maps and directions to Cadence Henderson NV 89011' }]}
      />
      <Footer />
    </div>
  )
}

