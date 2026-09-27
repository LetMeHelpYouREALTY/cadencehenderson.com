import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { HomeSearchSection } from '@/components/cadence/home-search-section'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { RealScoutSimpleSearch } from '@/components/idx/realscout-simple-search'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import { Building2, MapPin, DollarSign, Calendar, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

const rentalCommunities = [
  {
    name: 'American Homes 4 Rent (AMH)',
    slug: 'american-homes',
    description:
      'Single-family rental homes with modern amenities and professional property management.',
    properties: 45,
    priceRange: '$1,800 - $2,800/mo',
    features: [
      'Pet-friendly options',
      '24/7 maintenance',
      'Online portal',
      'Garage parking',
    ],
    image: cfImage(SITE_IMAGES.rentals.americanHomes, 'card'),
  },
  {
    name: 'Element 12',
    slug: 'element-12',
    description:
      'Luxury apartment living with resort-style amenities and modern design.',
    properties: 280,
    priceRange: '$1,500 - $2,400/mo',
    features: [
      'Pool & spa',
      'Fitness center',
      'Pet park',
      'Business center',
    ],
    image: cfImage(SITE_IMAGES.rentals.element12, 'card'),
  },
  {
    name: 'Adler',
    slug: 'adler',
    description:
      'Contemporary apartments with high-end finishes and community spaces.',
    properties: 350,
    priceRange: '$1,600 - $2,600/mo',
    features: [
      'Rooftop lounge',
      'Co-working spaces',
      'Dog spa',
      'Package lockers',
    ],
    image: cfImage(SITE_IMAGES.rentals.adler, 'card'),
  },
]

export default function RentalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Rentals in Cadence"
        subtitle="Experience the Cadence lifestyle with flexible rental options. From single-family homes to luxury apartments, find your perfect rental in our vibrant community."
        imageSrc={cfImage(SITE_IMAGES.hero.rentals, 'hero')}
        imageAlt="Rental homes and apartments in Cadence Henderson NV 89011"
      >
        <div className="flex justify-center mb-8">
          <RealScoutSimpleSearch />
        </div>
        <a
          href={CONTACT_INFO.realScoutRentalsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-white text-purple-900 hover:bg-gray-100"
          >
            <Building2 className="mr-2" size={20} />
            View Available Rentals
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <HomeSearchSection variant="rentals" compact />

      {/* Why Rent in Cadence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why rent in Cadence Henderson NV 89011
            </h2>
            <p className="aeo-lead text-xl text-gray-700" data-speakable>
              Rent single-family homes and apartments in Cadence Henderson NV 89011
              with access to Central Park, pools, and trails — without buying.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <MapPin size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prime Location
              </h3>
              <p className="text-gray-700">
                Minutes from the Strip, airport, and Lake Mead with easy
                freeway access.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Building2 size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Premium Amenities
              </h3>
              <p className="text-gray-700">
                Access to parks, pools, trails, and community events included
                with your rental.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <DollarSign size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Options
              </h3>
              <p className="text-gray-700">
                Various lease terms and property types to fit your lifestyle and
                budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Communities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rental Communities
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our trusted rental partners offering quality homes and
              apartments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rentalCommunities.map((community) => (
              <div
                key={community.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <SiteImage
                    src={community.image}
                    alt={`${community.name} rentals at Cadence Henderson NV 89011`}
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">
                      {community.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{community.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Building2 size={16} className="mr-1" />
                      {community.properties} Properties
                    </span>
                    <span className="font-semibold text-purple-900">
                      {community.priceRange}
                    </span>
                  </div>
                  <div className="border-t pt-4 mb-4">
                    <ul className="space-y-2">
                      {community.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <span className="w-2 h-2 bg-purple-900 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/rentals/${community.slug}`}>
                    <Button className="w-full bg-purple-900 hover:bg-purple-800">
                      View Properties
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Consultation Section */}
      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Calendar size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Interested in Renting in Cadence?
              </h2>
              <p className="text-xl text-white mb-6">
                Schedule a call with Dr. Jan Duffy for information about available
                rentals, community tours, and rental partner connections.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  <Phone size={20} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=Rental Information`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  <Mail size={20} />
                  Email for Info
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Cadence Henderson rental FAQs
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Rentals in Cadence Henderson, Henderson NV 89011
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
                      name: 'What rentals are available in Cadence Henderson?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Cadence Henderson NV 89011 offers single-family rental homes and apartment rentals through several operators. American Homes 4 Rent (AMH) offers single-family homes, Element 12 offers apartment-style rentals, and Adler provides additional options. Prices typically range from $1,500–$2,800/month. Call ${CONTACT_INFO.phone} for current Cadence Henderson rental availability.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How much is rent in Cadence Henderson 89011?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Rental prices in Cadence Henderson NV 89011 vary by property type and size. Apartment rentals start around $1,500/month; single-family rental homes typically range from $1,800–$2,800/month. Contact us at ${CONTACT_INFO.phone} for current Cadence Henderson rental listings and pricing.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Are there pet-friendly rentals in Cadence Henderson?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Yes, several Cadence Henderson NV 89011 rental communities are pet-friendly. American Homes 4 Rent (AMH) offers pet-friendly options, and the community features dedicated dog parks throughout Cadence Henderson. Contact ${CONTACT_INFO.phone} for specific pet policy details.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do rental homes in Cadence Henderson include community amenities?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes! All residents in Cadence Henderson 89011, including renters, have access to community amenities including the 50-acre Central Park, pools, fitness centers, trails, and dog parks, depending on your rental agreement and HOA access terms.',
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-4">
              {[
                {
                  q: 'What rentals are available in Cadence Henderson?',
                  a: `Cadence Henderson NV 89011 offers single-family rental homes and apartment rentals through AMH (American Homes 4 Rent), Element 12, and Adler. Prices typically range from $1,500–$2,800/month. Call ${CONTACT_INFO.phone} for current rental availability.`,
                },
                {
                  q: 'How much is rent in Cadence Henderson 89011?',
                  a: `Rental prices in Cadence Henderson NV 89011 range from about $1,500/month for apartments to $1,800–$2,800/month for single-family homes. Contact us at ${CONTACT_INFO.phone} for current listings.`,
                },
                {
                  q: 'Are there pet-friendly rentals in Cadence Henderson?',
                  a: `Yes, several Cadence Henderson NV 89011 rental communities are pet-friendly, including AMH options. The community has dedicated dog parks throughout. Contact ${CONTACT_INFO.phone} for specific pet policy details.`,
                },
                {
                  q: 'Do rental homes in Cadence Henderson include community amenities?',
                  a: 'Yes! All Cadence Henderson 89011 residents — including renters — have access to community amenities including the 50-acre Central Park, pools, fitness centers, trails, and dog parks, subject to rental agreement and HOA access terms.',
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-gray-200 rounded-lg p-5 cursor-pointer"
                >
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
        path="/rentals"
        name="Cadence Henderson Rentals | 89011"
        description="Cadence Henderson rental homes and communities. Find rentals in Henderson NV 89011. Dr. Jan Duffy, REALTOR®. American Homes, Element 12, Adler."
        breadcrumbs={[{ name: 'Rentals in Cadence Henderson NV 89011' }]}
      />
      <Footer />
    </div>
  )
}

