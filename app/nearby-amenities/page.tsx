import type { Metadata } from 'next'
import Link from 'next/link'
import { NearbyAmenityMapLazy } from '@/components/cadence/nearby-amenity-map-lazy'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageHero } from '@/components/cadence/page-hero'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { NearbyAmenitiesPageSchema } from '@/components/schema/nearby-amenities-page'
import { BreadcrumbSchema } from '@/components/schema/breadcrumb'
import {
  COMMUNITY_PLACE,
  NEARBY_AMENITIES_PAGE_PATH,
} from '@/lib/nearby-amenities-config'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { MapPin, Phone, Calendar } from 'lucide-react'

const BASE = 'https://www.cadencehenderson.com'
const canonical = `${BASE}${NEARBY_AMENITIES_PAGE_PATH}`

export const metadata: Metadata = {
  title: `Nearby Amenities in Cadence Henderson, NV 89011 | Maps & Local Guide`,
  description: `Interactive map of restaurants, grocery, parks, schools, healthcare, and shopping near Cadence Henderson NV 89011. Hyperlocal guide from Dr. Jan Duffy, REALTOR®. Call ${CONTACT_INFO.phone}.`,
  alternates: { canonical },
  openGraph: {
    title: `Nearby Amenities in Cadence Henderson, NV 89011`,
    description: `Explore dining, parks, grocery, schools, and healthcare around Cadence Henderson with an interactive amenity map.`,
    url: canonical,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const NEARBY_FAQ = [
  {
    question: 'What grocery stores are near Cadence Henderson?',
    answer: `Smith's at Cadence Marketplace (835 E Lake Mead Pkwy, Henderson) serves daily shopping minutes from ${COMMUNITY_PLACE.name}. Additional grocers and big-box options are along Sunset Road and at Galleria at Sunset.`,
  },
  {
    question: 'How far is Cadence Henderson from the Las Vegas Strip?',
    answer:
      'Cadence is in southeast Henderson. Approximate drive time to the Las Vegas Strip is about 25–35 minutes depending on traffic and your route — not a fixed guarantee.',
  },
  {
    question: 'Are there hospitals near Cadence Henderson?',
    answer:
      'Yes. Henderson Hospital (1050 W Galleria Dr, Henderson NV 89011) and Dignity Health-St. Rose Dominican, Siena Campus (3001 St Rose Pkwy, Henderson NV 89052) are major medical campuses within a short drive of Cadence.',
  },
  {
    question: 'What parks are in Cadence?',
    answer:
      'Cadence Central Park is the signature nearly 50-acre community park with trails, splash areas, and event lawns. Additional Henderson parks and trail connections are nearby.',
  },
  {
    question: 'Where is the nearest major shopping from Cadence?',
    answer:
      'Galleria at Sunset (1300 W Sunset Rd, Henderson NV 89014) is about a 5-minute drive from Cadence for department stores and dining. The District at Green Valley Ranch offers open-air retail and restaurants farther west in Henderson.',
  },
  {
    question: 'What schools serve Cadence Henderson?',
    answer:
      'Cadence is in the Clark County School District. Green Valley High School (460 Arroyo Grande Blvd, Henderson NV 89014) is a well-known high school serving the broader Green Valley area. Confirm current attendance zones with CCSD before you buy.',
  },
  {
    question: 'How far is Harry Reid International Airport from Cadence?',
    answer:
      'Harry Reid International Airport is roughly 15–25 minutes from Cadence Henderson by car depending on time of day and route — approximate, not guaranteed.',
  },
  {
    question: 'Who can help me buy a new home in Cadence Henderson?',
    answer: `Dr. Jan Duffy, REALTOR® (${CONTACT_INFO.licenseNumber}) with ${CONTACT_INFO.brokerage} offers free buyer representation on new construction in Cadence. Call ${CONTACT_INFO.phone} or schedule online.`,
  },
] as const

export default function NearbyAmenitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NearbyAmenitiesPageSchema faq={[...NEARBY_FAQ]} />
      <BreadcrumbSchema items={[{ name: 'Nearby Amenities' }]} />
      <Navigation />

      <PageHero
        title="Nearby Amenities in Cadence Henderson"
        subtitle={
          <>
            <p className="text-xl font-semibold mb-3">
              Henderson, Nevada {COMMUNITY_PLACE.postalCode}
            </p>
            <p>
              Use the interactive map to explore restaurants, grocery, parks,
              schools, healthcare, and shopping around {COMMUNITY_PLACE.name}.
              Dr. Jan Duffy helps buyers navigate new construction and everyday
              life in this master-planned community.
            </p>
          </>
        }
        imageSrc={cfImage(SITE_IMAGES.hero.maps, 'hero')}
        imageAlt="Map and nearby amenities around Cadence Henderson NV 89011"
        icon={MapPin}
      />

      <RealScoutOfficeListings />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nearby Amenities in Cadence Henderson, Henderson
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-10">
            Map center: Cadence Central Park ({COMMUNITY_PLACE.coordinatesSource}
            ). Filter by category to see places Google Maps reports within about
            5 miles of the community heart.
          </p>
          <NearbyAmenityMapLazy showStaticList heightClassName="h-[480px]" />
        </div>
      </section>

      <section className="py-12 bg-slate-50" aria-labelledby="dining-near-cadence">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl prose prose-lg prose-gray">
          <h2 id="dining-near-cadence" className="text-2xl font-bold text-gray-900">
            Dining &amp; cafes near Cadence
          </h2>
          <p>
            Cadence Marketplace and Sunset Road corridors put coffee, fast casual,
            and sit-down restaurants within a few minutes of home. Galleria at Sunset
            adds national chains and local favorites. Use the map&apos;s Restaurants
            and Cafes filters for current nearby options.
          </p>

          <h2 id="parks-recreation" className="text-2xl font-bold text-gray-900 mt-10">
            Parks &amp; recreation
          </h2>
          <p>
            Cadence Central Park anchors outdoor life with trails, splash features,
            and community events. Henderson maintains additional parks and trail
            links throughout the 89011 area.
          </p>

          <h2 id="golf-nearby" className="text-2xl font-bold text-gray-900 mt-10">
            Golf
          </h2>
          <p>
            Reunion Golf Club (14401 Reunion Blvd, Henderson NV 89052) is a
            well-known public course a short drive from Cadence. Select Golf on
            the map for other courses in the area.
          </p>

          <h2 id="healthcare-nearby" className="text-2xl font-bold text-gray-900 mt-10">
            Healthcare &amp; pharmacies
          </h2>
          <p>
            Henderson Hospital and St. Rose Dominican Siena Campus provide
            emergency and specialty care near Cadence. Pharmacies and urgent care
            cluster along major retail corridors — filter Healthcare or Pharmacies
            on the map.
          </p>

          <h2 id="shopping-grocery" className="text-2xl font-bold text-gray-900 mt-10">
            Grocery &amp; shopping
          </h2>
          <p>
            Smith&apos;s at Cadence Marketplace covers weekly groceries. Galleria at
            Sunset and The District at Green Valley Ranch expand retail, dining,
            and services within Henderson.
          </p>

          <h2 id="schools-nearby" className="text-2xl font-bold text-gray-900 mt-10">
            Schools
          </h2>
          <p>
            Families in Cadence use Clark County School District schools. Green
            Valley High School is a major high school in the area. Always verify
            current zoning with CCSD and your builder before relying on school
            assignments.
          </p>

          <h2 id="commute-times" className="text-2xl font-bold text-gray-900 mt-10">
            Commute &amp; drive times (approximate)
          </h2>
          <ul>
            <li>
              <strong>Las Vegas Strip:</strong> about 25–35 minutes by car
              (approximate).
            </li>
            <li>
              <strong>Harry Reid International Airport:</strong> about 15–25
              minutes (approximate).
            </li>
            <li>
              <strong>Downtown Summerlin / Summerlin:</strong> about 25–40 minutes
              west depending on route (approximate).
            </li>
            <li>
              <strong>Galleria at Sunset:</strong> about 5 minutes from central
              Cadence (approximate).
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            Drive times vary with traffic and starting address within Cadence.
          </p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="nearby-faq-heading">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2
            id="nearby-faq-heading"
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {NEARBY_FAQ.map((item) => (
              <div key={item.question} className="border-b border-gray-200 pb-6">
                <dt className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </dt>
                <dd className="text-gray-700 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Your hyperlocal Cadence Henderson REALTOR®
          </h2>
          <p className="text-lg text-blue-100 mb-2">
            Dr. Jan Duffy, REALTOR® · License {CONTACT_INFO.licenseNumber}
          </p>
          <p className="text-blue-100 mb-6">{CONTACT_INFO.brokerage}</p>
          <p className="text-blue-50 mb-8">
            Free buyer representation on new homes in Cadence — the builder pays
            the fee. Office: {CONTACT_INFO.welcomeCenter}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Phone className="mr-2 h-5 w-5" aria-hidden />
                Call {CONTACT_INFO.phone}
              </a>
            </Button>
            <CalendlyLink>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Calendar className="mr-2 h-5 w-5" aria-hidden />
                Schedule a consultation
              </Button>
            </CalendlyLink>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/new-homes">Search new homes in Cadence</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
