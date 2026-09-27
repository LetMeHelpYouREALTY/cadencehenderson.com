import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import { Building2, DollarSign, Bed, Bath, Phone, Mail } from 'lucide-react'
import { notFound } from 'next/navigation'
import { cfImage, SITE_IMAGES, getHomeImage, getRentalHeroImage } from '@/lib/cloudflare-images'

const BASE = 'https://www.cadencehenderson.com'

const rentalData: Record<
  string,
  {
    name: string
    description: string
    longDescription: string
    contact: {
      phone: string
      email: string
      website: string
    }
    floorPlans: Array<{
      name: string
      rent: string
      beds: number
      baths: number
      sqft: string
      available: number
      image: string
      features: string[]
    }>
  }
> = {
  'american-homes': {
    name: 'American Homes 4 Rent (AMH)',
    description:
      'Single-family rental homes with modern amenities and professional property management.',
    longDescription:
      'American Homes 4 Rent offers quality single-family homes throughout Cadence with professional property management, 24/7 maintenance, and convenient online services. Enjoy the space and privacy of a single-family home with the flexibility of renting.',
    contact: {
      phone: '(702) 555-5001',
      email: 'cadence@ah4r.com',
      website: 'www.americanhomes4rent.com',
    },
    floorPlans: [
      {
        name: '3-Bedroom Single Family',
        rent: '$2,200',
        beds: 3,
        baths: 2,
        sqft: '1,650',
        available: 8,
        image: cfImage(SITE_IMAGES.rentals.americanHomes, 'card'),
        features: [
          'Private backyard',
          '2-car garage',
          'Modern kitchen',
          'Pet-friendly',
          'Washer/dryer included',
        ],
      },
      {
        name: '4-Bedroom Single Family',
        rent: '$2,650',
        beds: 4,
        baths: 2.5,
        sqft: '2,150',
        available: 5,
        image: getHomeImage('exterior1', 'card'),
        features: [
          'Two-story layout',
          'Large backyard',
          'Upgraded appliances',
          'Walk-in closets',
          'Covered patio',
        ],
      },
    ],
  },
  'element-12': {
    name: 'Element 12',
    description:
      'Luxury apartment living with resort-style amenities and modern design.',
    longDescription:
      'Element 12 offers sophisticated apartment living in the heart of Cadence. Enjoy resort-style amenities including a pool, spa, fitness center, and community spaces—all designed with modern luxury in mind.',
    contact: {
      phone: '(702) 555-5002',
      email: 'leasing@element12cadence.com',
      website: 'www.element12apartments.com',
    },
    floorPlans: [
      {
        name: 'Studio',
        rent: '$1,550',
        beds: 0,
        baths: 1,
        sqft: '625',
        available: 3,
        image: cfImage(SITE_IMAGES.rentals.element12, 'card'),
        features: [
          'Modern finishes',
          'Open layout',
          'Full kitchen',
          'Walk-in closet',
          'Balcony',
        ],
      },
      {
        name: '1-Bedroom',
        rent: '$1,850',
        beds: 1,
        baths: 1,
        sqft: '750',
        available: 12,
        image: getHomeImage('livingRoom', 'card'),
        features: [
          'Spacious bedroom',
          'Gourmet kitchen',
          'Walk-in closet',
          'Balcony/patio',
          'In-unit washer/dryer',
        ],
      },
      {
        name: '2-Bedroom',
        rent: '$2,350',
        beds: 2,
        baths: 2,
        sqft: '1,100',
        available: 7,
        image: getHomeImage('kitchen', 'card'),
        features: [
          'Split bedrooms',
          'Island kitchen',
          'Two bathrooms',
          'Large balcony',
          'Premium appliances',
        ],
      },
    ],
  },
  'adler': {
    name: 'Adler',
    description:
      'Contemporary apartments with high-end finishes and community spaces.',
    longDescription:
      'Adler brings contemporary luxury living to Cadence with high-end finishes, smart home features, and exceptional amenities. From rooftop lounges to co-working spaces, Adler is designed for modern lifestyles.',
    contact: {
      phone: '(702) 555-5003',
      email: 'leasing@adlercadence.com',
      website: 'www.adlerapartments.com',
    },
    floorPlans: [
      {
        name: 'The Metro',
        rent: '$1,650',
        beds: 1,
        baths: 1,
        sqft: '780',
        available: 15,
        image: cfImage(SITE_IMAGES.rentals.adler, 'card'),
        features: [
          'Smart home tech',
          'Quartz countertops',
          'Wood-style flooring',
          'Balcony',
          'Package lockers',
        ],
      },
      {
        name: 'The Urban',
        rent: '$2,200',
        beds: 2,
        baths: 2,
        sqft: '1,050',
        available: 10,
        image: getHomeImage('interior1', 'card'),
        features: [
          'Open concept',
          'Island seating',
          'Walk-in closets',
          'Washer/dryer',
          'Private patio',
        ],
      },
      {
        name: 'The Penthouse',
        rent: '$2,900',
        beds: 3,
        baths: 2.5,
        sqft: '1,450',
        available: 2,
        image: getHomeImage('interior2', 'card'),
        features: [
          'Top floor views',
          'Gourmet kitchen',
          'Rooftop access',
          'Premium finishes',
          'Two parking spaces',
        ],
      },
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ community: string }>
}): Promise<Metadata> {
  const { community: communitySlug } = await params
  const community = rentalData[communitySlug]
  if (!community) return {}
  const url = `${BASE}/rentals/${communitySlug}`
  return {
    title: `${community.name} Rentals | Cadence Henderson 89011`,
    description: `${community.description} Cadence Henderson rental homes in Henderson NV 89011. Dr. Jan Duffy, REALTOR®.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${community.name} Rentals | Cadence Henderson 89011`,
      description: `${community.description} Henderson NV 89011.`,
      url,
      type: 'website',
    },
  }
}

export default async function RentalCommunityPage({
  params,
}: {
  params: Promise<{ community: string }>
}) {
  const { community: communitySlug } = await params
  const community = rentalData[communitySlug]

  if (!community) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title={community.name}
        subtitle={community.description}
        imageSrc={getRentalHeroImage(communitySlug)}
        imageAlt={`${community.name} rentals at Cadence Henderson NV 89011`}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <CalendlyLink>
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100"
            >
              Schedule a Tour
            </Button>
          </CalendlyLink>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-900"
          >
            Check Availability
          </Button>
        </div>
      </PageHero>

      <RealScoutOfficeListings />

      {/* About */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              About {community.name}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {community.longDescription}
            </p>
            <div className="grid md:grid-cols-3 gap-6 bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <Phone className="mx-auto mb-3 text-purple-900" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <a
                  href={`tel:${community.contact.phone.replace(/[^0-9]/g, '')}`}
                  className="text-purple-900 hover:underline"
                >
                  {community.contact.phone}
                </a>
              </div>
              <div className="text-center">
                <Mail className="mx-auto mb-3 text-purple-900" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${community.contact.email}`}
                  className="text-purple-900 hover:underline text-sm"
                >
                  {community.contact.email}
                </a>
              </div>
              <div className="text-center">
                <Building2 className="mx-auto mb-3 text-purple-900" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Floor Plans</h3>
                <p className="text-gray-700">{community.floorPlans.length} Options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Available Floor Plans
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {community.floorPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <SiteImage
                    src={plan.image}
                    alt={`${plan.name} floor plan at Cadence Henderson NV 89011`}
                    fill
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  {plan.available > 0 && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {plan.available} Available
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign size={20} className="text-green-600" />
                    <span className="text-2xl font-bold text-purple-900">
                      {plan.rent}/mo
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
                    <div className="text-center">
                      <Bed size={20} className="mx-auto mb-1 text-gray-600" />
                      <div className="font-bold text-gray-900">
                        {plan.beds || 'Studio'}
                      </div>
                      <div className="text-xs text-gray-600">Beds</div>
                    </div>
                    <div className="text-center">
                      <Bath size={20} className="mx-auto mb-1 text-gray-600" />
                      <div className="font-bold text-gray-900">
                        {plan.baths}
                      </div>
                      <div className="text-xs text-gray-600">Baths</div>
                    </div>
                    <div className="text-center">
                      <Building2
                        size={20}
                        className="mx-auto mb-1 text-gray-600"
                      />
                      <div className="font-bold text-gray-900">{plan.sqft}</div>
                      <div className="text-xs text-gray-600">Sq Ft</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="w-2 h-2 bg-purple-900 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-purple-900 hover:bg-purple-800">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Call {community.name} Home?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact Dr. Jan Duffy today to tour {community.name} and check
              availability. I can connect you directly with their leasing team and
              help you find the perfect rental.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CalendlyLink>
                <Button size="lg" className="bg-purple-900 hover:bg-purple-800">
                  Schedule a Tour
                </Button>
              </CalendlyLink>
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                >
                  Call: {CONTACT_INFO.phone}
                </Button>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}?subject=${community.name} Rental Inquiry`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                >
                  Email Dr. Jan
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path={`/rentals/${communitySlug}`}
        name={`${community.name} Rentals | Cadence Henderson 89011`}
        description={`${community.description} Cadence Henderson rental homes in Henderson NV 89011. Dr. Jan Duffy, REALTOR®.`}
        faqs={defaultPageFaqs(`${community.name} rentals in Cadence Henderson`)}
        breadcrumbs={[
          { name: 'Rentals', path: '/rentals' },
          { name: `${community.name} in Cadence Henderson NV 89011` },
        ]}
        faqHeading={`${community.name} at Cadence Henderson — questions`}
      />
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(rentalData).map((community) => ({
    community,
  }))
}

