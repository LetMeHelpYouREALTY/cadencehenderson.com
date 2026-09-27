import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { HomeSearchSection } from '@/components/cadence/home-search-section'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { Home, Bed, Bath, Ruler, DollarSign, MapPin, Phone, Search } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHomeImage, getBuilderImage, getBuilderHeroImage, cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { getVillagesByBuilder, NEW_HOMES_SLUG_TO_CATALOG } from '@/lib/cadence-nv-catalog'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const builderRealScoutUrls: Record<string, string | undefined> = {
  'beazer-homes': CONTACT_INFO.realScoutBeazerHomesUrl,
  'century-communities': CONTACT_INFO.realScoutCenturyCommunitiesUrl,
}

const builderData: Record<
  string,
  {
    name: string
    description: string
    longDescription: string
    logo: string
    contact: {
      phone: string
      email: string
      salesCenter: string
    }
    models: Array<{
      name: string
      price: string
      beds: number
      baths: number
      sqft: string
      image: string
      features: string[]
    }>
  }
> = {
  'beazer-homes': {
    name: 'Beazer Homes',
    description:
      'Quality craftsmanship and energy-efficient homes with flexible floor plans.',
    longDescription:
      'Beazer Homes has been building new homes for over 60 years. At Cadence Henderson NV 89011, floor plans include energy-efficient construction, modern amenities, and flexible living spaces.',
    logo: '🏠',
    contact: {
      phone: '(702) 555-0101',
      email: 'cadence@beazerhomes.com',
      salesCenter: 'Building 12, Cadence Welcome Center',
    },
    models: [
      {
        name: 'The Ashford',
        price: '$425,000',
        beds: 3,
        baths: 2.5,
        sqft: '2,150',
        image: getHomeImage('exterior1', 'card'),
        features: [
          'Open concept living',
          'Gourmet kitchen',
          'Master suite with walk-in closet',
          'Energy-efficient appliances',
          '2-car garage',
        ],
      },
      {
        name: 'The Bennett',
        price: '$385,000',
        beds: 4,
        baths: 3,
        sqft: '2,450',
        image: getHomeImage('exterior2', 'card'),
        features: [
          'Spacious family room',
          'Upstairs loft',
          'Dual master closets',
          'Smart home ready',
          'Covered patio',
        ],
      },
      {
        name: 'The Carlisle',
        price: '$550,000',
        beds: 5,
        baths: 4,
        sqft: '3,200',
        image: getHomeImage('interior1', 'card'),
        features: [
          'Premium finishes throughout',
          'Bonus room',
          'Gourmet kitchen with island',
          'Spa-like master bath',
          '3-car tandem garage',
        ],
      },
    ],
  },
  'century-communities': {
    name: 'Century Communities',
    description:
      'Innovative designs with modern amenities and smart home technology.',
    longDescription:
      'Century Communities is committed to building exceptional homes in desirable locations. Our homes at Cadence feature innovative designs, flexible floor plans, and the latest smart home technology to enhance your lifestyle.',
    logo: '🏘️',
    contact: {
      phone: '(702) 555-0102',
      email: 'cadence@centurycommunities.com',
      salesCenter: 'Building 15, Cadence Welcome Center',
    },
    models: [
      {
        name: 'Plan 1849',
        price: '$395,000',
        beds: 3,
        baths: 2,
        sqft: '1,849',
        image: getHomeImage('kitchen', 'card'),
        features: [
          'Modern open layout',
          'Smart home technology',
          'Quartz countertops',
          'Energy Star certified',
          'Desert landscaping',
        ],
      },
      {
        name: 'Plan 2247',
        price: '$445,000',
        beds: 4,
        baths: 2.5,
        sqft: '2,247',
        image: getHomeImage('exterior3', 'card'),
        features: [
          'Two-story design',
          'Tech package included',
          'Large kitchen island',
          'Walk-in pantry',
          'Upstairs laundry',
        ],
      },
    ],
  },
  'dr-horton': {
    name: 'D.R. Horton',
    description: "America's Builder - offering exceptional value and quality homes.",
    longDescription:
      "As America's largest homebuilder, D.R. Horton delivers exceptional value with quality construction. Our Express Homes and Freedom Series offer move-in ready options with great finishes at competitive prices.",
    logo: '🏗️',
    contact: {
      phone: '(702) 555-0103',
      email: 'cadence@drhorton.com',
      salesCenter: 'Building 8, Cadence Welcome Center',
    },
    models: [
      {
        name: 'Azalea',
        price: '$315,000',
        beds: 3,
        baths: 2,
        sqft: '1,632',
        image: getHomeImage('livingRoom', 'card'),
        features: [
          'Single-story living',
          'Open floor plan',
          'Granite countertops',
          'Tile flooring',
          'Covered patio',
        ],
      },
      {
        name: 'Birch',
        price: '$365,000',
        beds: 4,
        baths: 2,
        sqft: '2,015',
        image: getHomeImage('backyard', 'card'),
        features: [
          'Split bedroom layout',
          'Great room concept',
          'Kitchen island',
          'Stainless appliances',
          'Energy efficient',
        ],
      },
      {
        name: 'Cedar',
        price: '$425,000',
        beds: 4,
        baths: 3,
        sqft: '2,533',
        image: getHomeImage('interior2', 'card'),
        features: [
          'Two-story home',
          'Loft or 5th bedroom',
          'Game room',
          'Formal dining',
          'Premium lot',
        ],
      },
    ],
  },
  'lennar': {
    name: 'Lennar',
    description: 'Everything\'s Included® homes with the latest technology and features.',
    longDescription:
      'Lennar is one of the nation\'s leading homebuilders. At Cadence, our Everything\'s Included® homes come with premium features, smart home technology, and designer finishes as standard - no upgrades needed.',
    logo: '🏡',
    contact: {
      phone: '(702) 555-0104',
      email: 'cadence@lennar.com',
      salesCenter: 'Building 20, Cadence Welcome Center',
    },
    models: [
      {
        name: 'Residence One',
        price: '$410,000',
        beds: 3,
        baths: 2.5,
        sqft: '1,976',
        image: getHomeImage('exterior1', 'card'),
        features: [
          'Everything\'s Included®',
          'Smart home automation',
          'Stainless steel appliances',
          'Upgraded flooring',
          'Two-car garage',
        ],
      },
      {
        name: 'Residence Two',
        price: '$465,000',
        beds: 4,
        baths: 3,
        sqft: '2,344',
        image: getHomeImage('exterior2', 'card'),
        features: [
          'Open-concept living',
          'Gourmet kitchen',
          'Owner\'s suite with spa bath',
          'Loft space',
          'Smart home package',
        ],
      },
      {
        name: 'Residence Three',
        price: '$520,000',
        beds: 5,
        baths: 3.5,
        sqft: '2,890',
        image: getHomeImage('exterior3', 'card'),
        features: [
          'Spacious floor plan',
          'Premium kitchen island',
          'Bonus room',
          'Three-car garage',
          'Wi-Fi certified',
        ],
      },
    ],
  },
  'richmond-american': {
    name: 'Richmond American Homes',
    description: 'Personalized homes with flexible floor plans and premium upgrades.',
    longDescription:
      'Richmond American Homes offers exceptional personalization options at Cadence. Choose from our flexible floor plans and customize your home with our Personal Builder™ process to create a home that\'s uniquely yours.',
    logo: '🏠',
    contact: {
      phone: '(702) 555-0105',
      email: 'cadence@richmondamerican.com',
      salesCenter: 'Building 25, Cadence Welcome Center',
    },
    models: [
      {
        name: 'Jasper',
        price: '$375,000',
        beds: 3,
        baths: 2,
        sqft: '1,752',
        image: getHomeImage('exterior1', 'card'),
        features: [
          'Ranch-style living',
          'Flex room options',
          'Open kitchen',
          'Energy-efficient design',
          'Desert landscaping',
        ],
      },
      {
        name: 'Opal',
        price: '$430,000',
        beds: 4,
        baths: 2.5,
        sqft: '2,125',
        image: getHomeImage('kitchen', 'card'),
        features: [
          'Two-story design',
          'Loft or bedroom option',
          'Walk-in pantry',
          'Covered patio',
          'Smart home prep',
        ],
      },
      {
        name: 'Sapphire',
        price: '$495,000',
        beds: 4,
        baths: 3,
        sqft: '2,567',
        image: getHomeImage('interior1', 'card'),
        features: [
          'Spacious master suite',
          'Gourmet kitchen',
          'Game room',
          'Three-car garage',
          'Premium finishes',
        ],
      },
    ],
  },
  'storybook-homes': {
    name: 'StoryBook Homes',
    description: 'Locally built homes with attention to detail and community focus.',
    longDescription:
      'StoryBook Homes is a locally owned Nevada builder dedicated to quality craftsmanship and customer service. Our homes at Cadence feature thoughtful designs, energy-efficient construction, and the personal touch of a local builder.',
    logo: '📖',
    contact: {
      phone: '(702) 555-0106',
      email: 'cadence@storybookhomes.com',
      salesCenter: 'Building 18, Cadence Welcome Center',
    },
    models: [
      {
        name: 'Plan 1701',
        price: '$355,000',
        beds: 3,
        baths: 2,
        sqft: '1,701',
        image: getHomeImage('exterior2', 'card'),
        features: [
          'Single-story convenience',
          'Open living concept',
          'Walk-in closets',
          'Energy Star rated',
          'Desert-ready yard',
        ],
      },
      {
        name: 'Plan 2184',
        price: '$405,000',
        beds: 4,
        baths: 2.5,
        sqft: '2,184',
        image: getHomeImage('livingRoom', 'card'),
        features: [
          'Two-story layout',
          'Great room design',
          'Kitchen island',
          'Laundry upstairs',
          'Covered entry',
        ],
      },
    ],
  },
  'taylor-morrison': {
    name: 'Taylor Morrison',
    description: 'Luxury living with resort-style amenities and premium finishes.',
    longDescription:
      'Taylor Morrison brings over a century of homebuilding excellence to Cadence. Our luxury homes feature sophisticated designs, premium materials, and the attention to detail that has made us a leader in the industry.',
    logo: '🏛️',
    contact: {
      phone: '(702) 555-0107',
      email: 'cadence@taylormorrison.com',
      salesCenter: 'Building 30, Cadence Welcome Center',
    },
    models: [
      {
        name: 'Montecito',
        price: '$475,000',
        beds: 3,
        baths: 2.5,
        sqft: '2,156',
        image: getHomeImage('exterior3', 'card'),
        features: [
          'Luxury finishes throughout',
          'Chef\'s kitchen',
          'Spa-like master bath',
          'Outdoor living space',
          'Smart home ready',
        ],
      },
      {
        name: 'Sedona',
        price: '$540,000',
        beds: 4,
        baths: 3,
        sqft: '2,687',
        image: getHomeImage('interior2', 'card'),
        features: [
          'Open-concept design',
          'Gourmet kitchen',
          'Multi-gen suite option',
          'Premium appliances',
          'Three-car garage',
        ],
      },
      {
        name: 'Catalina',
        price: '$625,000',
        beds: 5,
        baths: 4,
        sqft: '3,245',
        image: getHomeImage('backyard', 'card'),
        features: [
          'Luxury estate home',
          'Designer kitchen',
          'Guest casita',
          'Resort-style backyard',
          'Premium upgrades',
        ],
      },
    ],
  },
  'woodside-homes': {
    name: 'Woodside Homes',
    description: 'Award-winning designs with energy efficiency and modern style.',
    longDescription:
      'Woodside Homes has been building quality homes in Nevada for decades. Our award-winning designs at Cadence combine contemporary style with energy-efficient features and flexible floor plans to fit your lifestyle.',
    logo: '🌲',
    contact: {
      phone: '(702) 555-0108',
      email: 'cadence@woodsidehomes.com',
      salesCenter: 'Building 22, Cadence Welcome Center',
    },
    models: [
      {
        name: 'Plan A',
        price: '$380,000',
        beds: 3,
        baths: 2,
        sqft: '1,845',
        image: getHomeImage('exterior1', 'card'),
        features: [
          'Modern design',
          'Energy-efficient',
          'Open floor plan',
          'Master suite',
          'Two-car garage',
        ],
      },
      {
        name: 'Plan B',
        price: '$435,000',
        beds: 4,
        baths: 2.5,
        sqft: '2,245',
        image: getHomeImage('exterior2', 'card'),
        features: [
          'Two-story home',
          'Flexible loft space',
          'Gourmet kitchen',
          'Walk-in closets',
          'Covered patio',
        ],
      },
      {
        name: 'Plan C',
        price: '$510,000',
        beds: 5,
        baths: 3,
        sqft: '2,845',
        image: getHomeImage('exterior3', 'card'),
        features: [
          'Spacious family home',
          'Bonus room',
          'Kitchen island',
          'Three-car garage',
          'Premium lot',
        ],
      },
    ],
  },
}

const BASE = 'https://www.cadencehenderson.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ builder: string }>
}): Promise<import('next').Metadata> {
  const { builder: builderSlug } = await params
  const builder = builderData[builderSlug]
  if (!builder) return {}
  const url = `${BASE}/new-homes/${builderSlug}`
  const description =
    builder.longDescription.slice(0, 155) +
    (builder.longDescription.length > 155 ? '…' : '')
  return {
    title: `${builder.name} New Homes – Cadence Henderson NV 89011`,
    description: `${builder.name} new homes for sale in Cadence Henderson NV 89011. ${description}`,
    alternates: { canonical: url },
    openGraph: {
      title: `${builder.name} New Homes – Cadence Henderson NV 89011`,
      description: `${builder.name} new homes for sale in Cadence Henderson NV 89011. ${description}`,
      url,
      type: 'website',
    },
  }
}

export default async function BuilderPage({
  params,
}: {
  params: Promise<{ builder: string }>
}) {
  const { builder: builderSlug } = await params
  const builder = builderData[builderSlug]
  const builderRealScoutUrl = builderRealScoutUrls[builderSlug]
  const catalogSlug = NEW_HOMES_SLUG_TO_CATALOG[builderSlug]
  const villages = catalogSlug ? getVillagesByBuilder(catalogSlug) : []

  if (!builder) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title={builder.name}
        subtitle={builder.description}
        imageSrc={getBuilderHeroImage(builderSlug)}
        imageAlt={`${builder.name} new homes at Cadence Henderson NV 89011`}
      >
        <div className="text-6xl mb-4">{builder.logo}</div>
        <div className="flex flex-wrap gap-4 justify-center">
          {builderRealScoutUrl && (
            <a
              href={builderRealScoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700"
              >
                <Search className="mr-2 h-5 w-5" />
                View {builder.name} Homes for Sale
              </Button>
            </a>
          )}
          <CalendlyLink>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Schedule with Cadence Expert
            </Button>
          </CalendlyLink>
          <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              Call: {CONTACT_INFO.phone}
            </Button>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}?subject=${builder.name} Information`}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              Email Dr. Jan
            </Button>
          </a>
        </div>
      </PageHero>

      <RealScoutOfficeListings />

      <HomeSearchSection compact />

      {villages.length > 0 ? (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
                {builder.name} villages in Cadence
              </h2>
              <p className="mb-8 text-center text-gray-700">
                Neighborhood names and published plans from the Cadence developer
                directory. Asking prices change — confirm current inventory with
                Dr. Jan.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {villages.map((village) => (
                  <li key={village.cadencePath}>
                    <Link
                      href={village.cadencePath}
                      className="font-medium text-blue-900 hover:underline"
                    >
                      {village.name}
                    </Link>
                    <span className="text-sm text-gray-600">
                      {village.kind === 'sold-out'
                        ? ' — sold out'
                        : village.plans.length > 0
                          ? ` — ${village.plans.length} published plans`
                          : ''}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center">
                <Link
                  href="/communities"
                  className="text-sm font-medium text-blue-900 hover:underline"
                >
                  All Cadence Henderson neighborhoods
                </Link>
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {/* About Builder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {builder.name} in Cadence Henderson NV 89011
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {builder.longDescription}
            </p>
            <div className="bg-blue-50 rounded-lg shadow-lg p-8 border-2 border-blue-900">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Interested in {builder.name}?
                </h3>
                <p className="text-gray-700">
                  Contact Dr. Jan Duffy to schedule a tour and get expert guidance
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="mx-auto mb-3 text-blue-900" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Call Dr. Jan</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                    className="text-blue-900 hover:underline font-bold"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 text-blue-900" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Office</h3>
                  <p className="text-gray-700 text-sm">
                    {CONTACT_INFO.address.street}
                    <br />
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}{' '}
                    {CONTACT_INFO.address.zip}
                  </p>
                </div>
                <div className="text-center">
                  <Home className="mx-auto mb-3 text-blue-900" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Available</h3>
                  <p className="text-gray-700">{builder.models.length} Floor Plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Models */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Available Home Models
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builder.models.map((model) => (
              <div
                key={model.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <SiteImage
                    src={model.image}
                    alt={`${model.name} by ${builder.name} at Cadence Henderson NV 89011`}
                    fill
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {model.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign size={20} className="text-green-600" />
                    <span className="text-2xl font-bold text-blue-900">
                      {model.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
                    <div className="text-center">
                      <Bed size={20} className="mx-auto mb-1 text-gray-600" />
                      <div className="font-bold text-gray-900">
                        {model.beds}
                      </div>
                      <div className="text-xs text-gray-600">Beds</div>
                    </div>
                    <div className="text-center">
                      <Bath size={20} className="mx-auto mb-1 text-gray-600" />
                      <div className="font-bold text-gray-900">
                        {model.baths}
                      </div>
                      <div className="text-xs text-gray-600">Baths</div>
                    </div>
                    <div className="text-center">
                      <Ruler
                        size={20}
                        className="mx-auto mb-1 text-gray-600"
                      />
                      <div className="font-bold text-gray-900">
                        {model.sqft}
                      </div>
                      <div className="text-xs text-gray-600">Sq Ft</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {model.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="w-2 h-2 bg-blue-900 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Make {builder.name} Your Home?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact Dr. Jan Duffy to tour {builder.name} model homes and explore
              available floor plans. I'll arrange builder meetings and guide you
              through the entire process.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CalendlyLink>
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                  Schedule {builder.name} Tour
                </Button>
              </CalendlyLink>
              <CalendlyLink>
                <Button
                  size="lg"
                  className="bg-blue-900 text-white hover:bg-blue-800"
                >
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
              <a href={`mailto:${CONTACT_INFO.email}?subject=${builder.name} Tour Request`}>
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

      <PageAeo
        path={`/new-homes/${builderSlug}`}
        name={`${builder.name} New Homes – Cadence Henderson NV 89011`}
        description={`${builder.name} new homes for sale in Cadence Henderson NV 89011. ${builder.description}`}
        faqs={defaultPageFaqs(`${builder.name} new homes in Cadence Henderson`)}
        breadcrumbs={[
          { name: 'New homes', path: '/new-homes' },
          { name: `${builder.name} in Cadence Henderson NV 89011` },
        ]}
        faqHeading={`${builder.name} at Cadence Henderson — questions`}
      />
      <Footer />
    </div>
  )
}

// Generate static params for all builders
export async function generateStaticParams() {
  return Object.keys(builderData).map((builder) => ({
    builder,
  }))
}

