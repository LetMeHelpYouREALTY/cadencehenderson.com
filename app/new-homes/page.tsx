import { PageHero } from '@/components/cadence/page-hero'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { BUILDER_LOGO_SRCS, BUILDER_PHOTO_KEYS } from '@/lib/builder-logos'
import { SiteImage } from '@/components/cadence/site-image'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { HowToBuySchema } from '@/components/schema/how-to-buy'
import { RealScoutAdvancedSearch } from '@/components/idx/realscout-advanced-search'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { RealScoutSimpleSearch } from '@/components/idx/realscout-simple-search'
import { RealScoutWidget } from '@/components/idx/realscout-widget'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import { Home, Bed, Bath, Ruler, Search } from 'lucide-react'
import Link from 'next/link'

const builders = [
  {
    name: 'Beazer Homes',
    slug: 'beazer-homes',
    description:
      'Quality craftsmanship and energy-efficient homes with flexible floor plans.',
    homes: 15,
    priceRange: '$350,000 - $550,000',
  },
  {
    name: 'Century Communities',
    slug: 'century-communities',
    description:
      'Innovative designs with modern amenities and smart home technology.',
    homes: 22,
    priceRange: '$320,000 - $480,000',
  },
  {
    name: 'D.R. Horton',
    slug: 'dr-horton',
    description:
      "America's Builder - offering exceptional value and quality homes.",
    homes: 35,
    priceRange: '$300,000 - $525,000',
  },
  {
    name: 'Lennar',
    slug: 'lennar',
    description:
      'Everything\'s Included® homes with the latest technology and features.',
    homes: 28,
    priceRange: '$380,000 - $600,000',
  },
  {
    name: 'Richmond American Homes',
    slug: 'richmond-american',
    description:
      'Personalized homes with flexible floor plans and premium upgrades.',
    homes: 18,
    priceRange: '$340,000 - $520,000',
  },
  {
    name: 'StoryBook Homes',
    slug: 'storybook-homes',
    description:
      'Locally built homes with attention to detail and community focus.',
    homes: 12,
    priceRange: '$330,000 - $490,000',
  },
  {
    name: 'Taylor Morrison',
    slug: 'taylor-morrison',
    description:
      'Luxury living with resort-style amenities and premium finishes.',
    homes: 16,
    priceRange: '$420,000 - $650,000',
  },
  {
    name: 'Woodside Homes',
    slug: 'woodside-homes',
    description:
      'Award-winning designs with energy efficiency and modern style.',
    homes: 20,
    priceRange: '$360,000 - $540,000',
  },
]

export default function NewHomesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HowToBuySchema />

      <PageHero
        title="New Homes in Cadence"
        subtitle="Discover your dream home from our collection of new builds by award-winning builders. From cozy townhomes to spacious estates, find the perfect fit for your lifestyle."
        imageSrc={cfImage(SITE_IMAGES.hero.newHomes, 'hero')}
        imageAlt="New homes for sale in Cadence Henderson NV 89011"
      >
            <div className="flex justify-center mb-8">
              <RealScoutSimpleSearch />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={CONTACT_INFO.realScoutSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                >
                  <Home className="mr-2" size={20} />
                  Start Your Search
                </Button>
              </a>
              <Link href="/find-your-home">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Find your home
                </Button>
              </Link>
              <Link href="/incentives">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Incentives
                </Button>
              </Link>
            </div>
      </PageHero>

      <RealScoutOfficeListings />

      {/* MLS Search Widget */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Search Henderson Homes for Sale
            </h2>
            <div className="flex justify-center mb-6">
              <a
                href={CONTACT_INFO.realScoutSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:underline"
              >
                <Search size={18} />
                Open Home Search
              </a>
            </div>
            <div className="flex justify-center mb-8">
              <RealScoutAdvancedSearch />
            </div>
            <RealScoutWidget className="min-h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-sm" />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="text-gray-700 font-medium">Filter by:</div>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900">
              <option>Price Range</option>
              <option>$300K - $400K</option>
              <option>$400K - $500K</option>
              <option>$500K+</option>
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900">
              <option>Bedrooms</option>
              <option>2-3 Beds</option>
              <option>3-4 Beds</option>
              <option>4+ Beds</option>
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900">
              <option>Home Type</option>
              <option>Single Family</option>
              <option>Townhome</option>
              <option>Estate</option>
            </select>
          </div>
        </div>
      </section>

      {/* Builders Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              New home builders in Cadence Henderson NV 89011
            </h2>
            <p className="text-xl text-gray-700">
              Choose from {builders.length} premier home builders offering over
              150 homes.{' '}
              <Link href="/communities" className="font-semibold text-blue-900 hover:underline">
                Browse every Cadence village
              </Link>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builders.map((builder) => (
              <Link
                key={builder.slug}
                href={
                  builder.slug === 'beazer-homes'
                    ? '/communities/beazer'
                    : `/new-homes/${builder.slug}`
                }
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden bg-neutral-200">
                    <SiteImage
                      src={cfImage(
                        SITE_IMAGES.builders[BUILDER_PHOTO_KEYS[builder.slug] ?? 'beazer'],
                        'card',
                      )}
                      alt={`${builder.name} new homes in Cadence Henderson NV 89011`}
                      fill
                    />
                  </div>
                  <div className="relative h-20 overflow-hidden bg-white flex items-center justify-center p-4 border-b border-neutral-100">
                    <SiteImage
                      src={BUILDER_LOGO_SRCS[builder.slug]}
                      alt={`${builder.name} - New homes at Cadence Henderson NV 89011`}
                      width={300}
                      height={100}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {builder.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{builder.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Home size={16} className="mr-1" />
                        {builder.homes} Homes
                      </span>
                      <span className="font-semibold text-blue-900">
                        {builder.priceRange}
                      </span>
                    </div>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">
                      View Homes
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact Dr. Jan Duffy to schedule a personalized tour of Cadence.
              I'll guide you through Cadence builders and help you compare
              floor plans, lot orientation, and net monthly cost.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CalendlyLink>
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                  Schedule with Cadence Expert
                </Button>
              </CalendlyLink>
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  Call: {CONTACT_INFO.phone}
                </Button>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}?subject=Schedule Cadence Tour`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  Email Dr. Jan
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Cadence Henderson new home FAQs
            </h2>
            <p className="text-center text-gray-700 mb-8">
              New homes in Cadence Henderson, Henderson NV 89011
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
                      name: 'What new homes are available in Cadence Henderson?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Cadence Henderson NV 89011 has 8 active homebuilders offering new construction ranging from townhomes to estate homes. Current builders include Beazer, Century Communities, D.R. Horton, Lennar, Richmond American, StoryBook, Taylor Morrison, and Woodside Homes. Call ${CONTACT_INFO.phone} for current availability.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which builders are in Cadence Henderson 89011?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Cadence Henderson 89011 features 8 award-winning builders: Beazer Homes, Century Communities, D.R. Horton, Lennar, Richmond American Homes, StoryBook Homes, Taylor Morrison, and Woodside Homes. Each offers unique floor plans, design options, and price ranges in Cadence Henderson NV.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the price range for new homes in Cadence Henderson NV?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `New home prices in Cadence Henderson range from approximately $300,000 for townhomes to $650,000+ for larger single-family and estate homes. Most new construction in Cadence Henderson 89011 prices between $380K and $550K. Visit the Welcome Center at ${CONTACT_INFO.welcomeCenter} to tour model homes.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can I tour model homes in Cadence Henderson 7 days a week?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Yes! New home model tours in Cadence Henderson are available every day from 10 AM to 6 PM. Our REALTOR® on-site can guide you through all 8 builders in one visit. Call ${CONTACT_INFO.phone} or schedule online.`,
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-4">
              {[
                {
                  q: 'What new homes are available in Cadence Henderson?',
                  a: `Cadence Henderson NV 89011 has 8 active homebuilders offering new construction ranging from townhomes to estate homes. Current builders include Beazer, Century Communities, D.R. Horton, Lennar, Richmond American, StoryBook, Taylor Morrison, and Woodside Homes. Call ${CONTACT_INFO.phone} for current availability.`,
                },
                {
                  q: 'Which builders are in Cadence Henderson 89011?',
                  a: 'Cadence Henderson 89011 features 8 award-winning builders: Beazer Homes, Century Communities, D.R. Horton, Lennar, Richmond American Homes, StoryBook Homes, Taylor Morrison, and Woodside Homes. Each offers unique floor plans, design options, and price ranges.',
                },
                {
                  q: 'What is the price range for new homes in Cadence Henderson NV?',
                  a: 'New home prices in Cadence Henderson range from approximately $300,000 for townhomes to $650,000+ for larger single-family and estate homes. Most new construction in Cadence Henderson 89011 prices between $380K and $550K.',
                },
                {
                  q: 'Can I tour model homes in Cadence Henderson 7 days a week?',
                  a: `Yes! New home model tours in Cadence Henderson are available every day from 10 AM to 6 PM. Our REALTOR® on-site can guide you through all 8 builders in one visit. Call ${CONTACT_INFO.phone} or schedule online.`,
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
        path="/new-homes"
        name="New Homes for Sale – Cadence Henderson NV 89011"
        description="8 builders, 150+ homes from $300K–$650K in Cadence Henderson 89011. Beazer, Lennar, Richmond American, Woodside & more. Browse floor plans, prices & availability. Tours 7 days."
        breadcrumbs={[{ name: 'New homes in Cadence Henderson NV 89011' }]}
      />
      <Footer />
    </div>
  )
}

