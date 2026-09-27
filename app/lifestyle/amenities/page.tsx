import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import {
  Waves,
  Dumbbell,
  Users,
  Wifi,
  Utensils,
  Music,
  Paintbrush,
  Heart,
} from 'lucide-react'
import { cfImage, SITE_IMAGES, getAmenityImage } from '@/lib/cloudflare-images'
import { PageAeo } from '@/components/cadence/page-aeo'

const amenities = [
  {
    name: 'Resort-Style Pools',
    icon: Waves,
    description:
      'Multiple community pools with lap lanes, splash pads, and heated spa areas. Perfect for year-round enjoyment.',
    features: [
      'Olympic-size lap pool',
      'Recreation pool',
      'About 2,000 sq ft splash pad',
      'Adults-only hot tubs',
      'Poolside cabanas',
      'Shaded seating areas',
    ],
    image: getAmenityImage('pool', 'card'),
  },
  {
    name: 'State-of-the-Art Fitness Centers',
    icon: Dumbbell,
    description:
      'Fully equipped fitness facilities with modern cardio equipment, free weights, and group exercise studios.',
    features: [
      'Cardio machines with TVs',
      'Free weights and strength equipment',
      'Yoga and spin studios',
      'Personal training available',
      'Locker rooms with showers',
      '24/7 access for residents',
    ],
    image: getAmenityImage('fitness', 'card'),
  },
  {
    name: 'Clubhouses',
    icon: Users,
    description:
      'Beautiful clubhouses available for private events, meetings, and community gatherings.',
    features: [
      'Full kitchen facilities',
      'Indoor/outdoor seating',
      'Reservation system',
      'WiFi and AV equipment',
      'Catering-friendly',
      'Party rooms',
    ],
    image: getAmenityImage('clubhouse', 'card'),
  },
  {
    name: 'Sports Courts',
    icon: Heart,
    description:
      'Tennis, basketball, and pickleball courts for active recreation and friendly competition.',
    features: [
      'Lighted tennis courts',
      'Full basketball court',
      'Pickleball courts',
      'Equipment available',
      'League play',
      'Private lessons',
    ],
    image: getAmenityImage('sportsCourts', 'card'),
  },
]

export const metadata: Metadata = {
  title: 'Cadence Henderson Amenities – Central Park, Pools & Trails',
  description:
    '50-acre Central Park, resort pools, splash pads, fitness centers, pickleball courts, dog parks & 30+ miles of trails in Cadence Henderson NV 89011.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/amenities' },
  openGraph: {
    title: 'Cadence Henderson Amenities – Central Park, Pools & Trails',
    description: '50-acre Central Park, resort pools, fitness centers, pickleball courts & trails in Cadence Henderson NV 89011.',
    url: 'https://www.cadencehenderson.com/lifestyle/amenities',
  },
}

const additionalAmenities = [
  {
    category: 'Recreation',
    items: [
      'Dog parks with agility equipment',
      'Playground areas for all ages',
      'BBQ and picnic areas',
      'Fire pits and lounge seating',
      'Walking and biking trails',
      'Community garden plots',
      'Sunset Road Linear Park with bounce pads, play structures, table tennis, and corn hole',
      'Resident pool with Las Vegas Strip views',
      'Pickleball courts in Central Park',
    ],
  },
  {
    category: 'Technology',
    items: [
      'High-speed fiber internet',
      'Free wifi at amenity areas',
      'Smart community features',
      'Mobile app for amenity booking',
      'Online portal access',
      'Security cameras',
      'Smart home ready',
    ],
  },
  {
    category: 'Services',
    items: [
      'On-site management team',
      'Concierge services',
      'Package delivery lockers',
      'Car wash station',
      'EV charging stations',
      'Maintenance request system',
    ],
  },
  {
    category: 'Events & Programs',
    items: [
      'Fitness classes',
      'Social events',
      'Holiday celebrations',
      'Kids activities',
      'Movie nights',
      'Food truck events',
    ],
  },
]

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="World-Class Amenities"
        subtitle="Experience resort-style living every day at Cadence. From multiple pools and fitness centers to sports courts and clubhouses, our amenities are designed to enhance your lifestyle."
        imageSrc={cfImage(SITE_IMAGES.hero.amenities, 'hero')}
        imageAlt="Resort-style amenities at Cadence Henderson NV 89011"
        icon={Waves}
      >
        <CalendlyLink>
          <Button
            size="lg"
            className="bg-white text-cyan-900 hover:bg-gray-100"
          >
            Schedule a Tour
          </Button>
        </CalendlyLink>
      </PageHero>

      <RealScoutOfficeListings />

      {/* Main Amenities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Cadence Henderson amenities in NV 89011
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {amenities.map((amenity) => {
              const IconComponent = amenity.icon
              return (
                <div
                  key={amenity.name}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <SiteImage
                      src={amenity.image}
                      alt={`${amenity.name} at Cadence Henderson NV 89011`}
                      fill
                      className="hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white mb-2">
                        <IconComponent size={32} className="mr-3" />
                        <h3 className="text-2xl font-bold">
                          {amenity.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{amenity.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">
                        Features Include:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {amenity.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start text-sm text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 bg-cyan-900 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Even More to Enjoy
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalAmenities.map((category) => (
                <div
                  key={category.category}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-cyan-900 mb-4 text-center border-b pb-3">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-900 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Central Park Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <SiteImage
                  src={getAmenityImage('centralPark', 'hero')}
                  alt="Central Park at Cadence Henderson NV 89011"
                  fill
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  50-Acre Central Park
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  The crown jewel of Cadence amenities, Central Park offers
                  nearly 50 acres of open space with stunning mountain views,
                  multiple playgrounds, walking trails, and event spaces.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Multi-age playgrounds with modern equipment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      About 2,000 sq ft splash pad with water features
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Large event lawn for community gatherings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Pickleball courts plus scenic walking and biking trails
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Sunset Road Linear Park: bounce pads, play structures,
                      table tennis, and corn hole
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Resident pool with Las Vegas Strip views and free wifi at
                      amenity areas
                    </span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="bg-cyan-900 hover:bg-cyan-800"
                >
                  Explore Central Park
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenity Hours */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Amenity Hours & Access
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Waves size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">Pools</h3>
                <p className="text-sm text-gray-600">
                  Daily: 6 AM - 10 PM
                  <br />
                  Seasonal hours vary
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Dumbbell size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">
                  Fitness Centers
                </h3>
                <p className="text-sm text-gray-600">
                  24/7 Access
                  <br />
                  with resident key card
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Users size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">Clubhouses</h3>
                <p className="text-sm text-gray-600">
                  Daily: 8 AM - 10 PM
                  <br />
                  Reservations required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Reserve Amenities Online
            </h2>
            <p className="text-xl mb-8">
              Residents can easily book clubhouses, sports courts, and other
              amenities through our online portal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Button
                  size="lg"
                  className="bg-white text-cyan-900 hover:bg-gray-100"
                >
                  Call: {CONTACT_INFO.phone}
                </Button>
              </a>
              <CalendlyLink>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-cyan-900"
                >
                  Schedule Tour
                </Button>
              </CalendlyLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Cadence Henderson amenities FAQs
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Amenities at Cadence Henderson, Henderson NV 89011
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
                      name: 'What amenities does Cadence Henderson have?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Cadence Henderson NV 89011 features a 50-acre Central Park, multiple resort-style pools and heated spas, fully equipped fitness centers, pickleball and sports courts, dog parks, playgrounds, 30+ miles of walking and biking trails, and resident clubhouses. Most amenities in Cadence Henderson are free for all residents.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is Cadence Henderson Central Park open to residents?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: "Yes! Cadence Henderson's 50-acre Central Park is open daily to all Cadence Henderson NV 89011 residents and their guests. It features event lawns, splash pads, playgrounds, picnic areas, mountain views, and trails. No admission fee for residents.",
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What are the HOA fees in Cadence Henderson?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Cadence Henderson HOA fees vary by neighborhood and builder but typically range from $50–$150/month for the master association, which covers access to community amenities. Some sub-associations within Cadence Henderson 89011 may charge additional fees. Call ${CONTACT_INFO.phone} for current fee information.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can I reserve Cadence Henderson amenities for private events?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Yes, Cadence Henderson NV 89011 residents can reserve clubhouses and other amenity spaces for private events through the resident online portal. Reservation fees may apply for private use. Contact the Cadence HOA or call ${CONTACT_INFO.phone} for booking details.`,
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-4">
              {[
                {
                  q: 'What amenities does Cadence Henderson have?',
                  a: 'Cadence Henderson NV 89011 features a 50-acre Central Park, resort-style pools and spas, fitness centers, pickleball and sports courts, dog parks, playgrounds, 30+ miles of trails, and resident clubhouses. Most amenities are free for all residents.',
                },
                {
                  q: 'Is Cadence Henderson Central Park open to residents?',
                  a: "Yes! Cadence Henderson's 50-acre Central Park is open daily to all residents and guests. It features event lawns, splash pads, playgrounds, picnic areas, mountain views, and trails — at no admission fee for residents.",
                },
                {
                  q: 'What are the HOA fees in Cadence Henderson?',
                  a: `Cadence Henderson HOA fees typically range from $50–$150/month for the master association, covering access to community amenities. Some sub-associations may charge additional fees. Call ${CONTACT_INFO.phone} for current fee information.`,
                },
                {
                  q: 'Can I reserve Cadence Henderson amenities for private events?',
                  a: `Yes, Cadence Henderson NV 89011 residents can reserve clubhouses and amenity spaces for private events through the resident online portal. Reservation fees may apply. Call ${CONTACT_INFO.phone} for booking details.`,
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
        path="/lifestyle/amenities"
        name="Cadence Henderson Amenities – Central Park, Pools & Trails"
        description="50-acre Central Park, resort pools, splash pads, fitness centers, pickleball courts, dog parks & 30+ miles of trails in Cadence Henderson NV 89011."
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Amenities in Cadence Henderson NV 89011' },
        ]}
      />
      <Footer />
    </div>
  )
}

