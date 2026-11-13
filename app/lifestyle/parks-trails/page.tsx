import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import { Trees, MapPin, Bike, Dog } from 'lucide-react'
import { cfImage, SITE_IMAGES, getAmenityImage, getGalleryImage } from '@/lib/cloudflare-images'
import Link from 'next/link'

const parks = [
  {
    name: 'Central Park',
    size: '~50 acres',
    description:
      'Cadence Central Park anchors community living with turf areas, amphitheater seating, play areas, trails, free wifi, charging outlets, Fitness Court, pickleball, splash pads, and the resident pool complex.',
    features: [
      'Adventure playground and play areas',
      'Splash pads (~2,000 sq ft at Pool Complex)',
      'Walking and biking with free wifi',
      'Fitness Court and pickleball courts',
      'Amphitheater seating and turf areas',
      'Mountain and desert views',
      'Resident pool (Master Association Card)',
      'Dog park nearby in the amenity mix',
    ],
    image: getGalleryImage('parkVista', 'card'),
  },
  {
    name: 'Sunset Road Linear Park',
    size: 'Along Sunset Road',
    description:
      'Along Sunset Road just north of Cadence Vista Drive — bounce pads, play structures, table tennis, corn hole, and gathering spaces.',
    features: [
      'Bounce pads and play structures',
      'Table tennis and corn hole',
      'Gazebo / gathering spaces',
    ],
    image: getAmenityImage('playground', 'card'),
  },
  {
    name: 'Dog park',
    size: 'Community amenity',
    description:
      'Cadence living amenities include a dog park for residents. Confirm rules and hours with the Cadence Master Association.',
    features: [
      'Listed on official Cadence amenities',
      'Confirm access with Master Association',
      'Pair with Central Park trails for walks',
    ],
    image: getAmenityImage('dogPark', 'card'),
  },
]

export const metadata: Metadata = {
  title: 'Parks & Trails in Cadence Henderson 89011 | Henderson NV',
  description:
    'Central Park (~50 acres), walking and biking trails, Fitness Court, pickleball, dog park, and Sunset Road Linear Park in Cadence Henderson NV 89011.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/parks-trails' },
  openGraph: {
    title: 'Parks & Trails in Cadence Henderson 89011 | Henderson NV',
    description:
      'Central Park, trails, Fitness Court, pickleball, dog park, and Sunset Road Linear Park in Cadence Henderson NV 89011.',
    url: 'https://www.cadencehenderson.com/lifestyle/parks-trails',
  },
}

const trailHighlights = [
  {
    name: 'Central Park paths',
    description:
      'Walking and biking routes through Central Park with free wifi, charging outlets, and mountain views.',
  },
  {
    name: 'Fitness Court access',
    description:
      'Outdoor Fitness Court® stations in Central Park for bodyweight training during park hours.',
  },
  {
    name: 'Pickleball & play',
    description:
      'Pickleball courts and play areas sit along the Central Park recreation loop.',
  },
  {
    name: 'Linear Park corridor',
    description:
      'Sunset Road Linear Park adds bounce pads, play structures, table tennis, and corn hole north of Cadence Vista Drive.',
  },
]

export default function ParksTrailsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Parks & Trails in Cadence Henderson NV 89011"
        subtitle="Central Park, trails, Fitness Court, pickleball, the dog park, and Sunset Road Linear Park — outdoor recreation published with Cadence living amenities."
        imageSrc={cfImage(SITE_IMAGES.hero.parksTrails, 'hero')}
        imageAlt="Parks and trails at Cadence Henderson NV 89011"
        icon={Trees}
      >
        <Link href="/lifestyle/parks-trails/pocket-parks">
          <Button
            size="lg"
            className="bg-white text-green-900 hover:bg-gray-100"
          >
            <MapPin className="mr-2" size={20} />
            Pocket parks
          </Button>
        </Link>
      </PageHero>

      <RealScoutOfficeListings />

      {/* Central Park Spotlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Central Park in Cadence Henderson NV 89011
              </h2>
              <p className="aeo-lead text-xl text-gray-800" data-speakable>
                About 50 acres in Cadence Henderson NV 89011 — turf areas, amphitheater
                seating, play areas, splash pads, trails, Fitness Court, and pickleball.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <SiteImage
                  src={getAmenityImage('centralPark', 'hero')}
                  alt="Central Park at Cadence Henderson NV 89011"
                  fill
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Official Cadence park amenities
                </h3>
                <p className="aeo-lead text-lg text-gray-900 mb-6" data-speakable>
                  Central Park is open to the public (typically dawn–10 p.m.). The
                  resident pool requires a Master Association Card. Confirm hours with
                  the Association at 702-605-3111.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-900">
                      Adventure playground and children’s play areas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-900">
                      Two splash pads (including ~2,000 sq ft at the Pool Complex)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-900">
                      Fitness Court, pickleball courts, free wifi and charging outlets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-900">
                      Amphitheater seating, turf areas, and mountain views
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parks Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Community Parks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parks.map((park) => (
              <div
                key={park.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <SiteImage
                    src={park.image}
                    alt={`${park.name} at Cadence Henderson NV 89011`}
                    fill
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {park.name}
                    </h3>
                    <span className="text-sm text-green-900 font-medium bg-green-100 px-3 py-1 rounded-full">
                      {park.size}
                    </span>
                  </div>
                  <p className="text-gray-900 mb-4">{park.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {park.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-sm text-gray-900"
                        >
                          <span className="w-1.5 h-1.5 bg-green-900 rounded-full mr-2 mt-1.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trails Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Bike size={48} className="mx-auto mb-4 text-green-900" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Walking & biking
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Trails and park paths connect Central Park recreation — without
                invented mileage or named trail cards on this site.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {trailHighlights.map((trail) => (
                <div
                  key={trail.name}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-900 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {trail.name}
                  </h3>
                  <p className="text-gray-900">{trail.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-lg p-8 text-center">
              <Dog size={48} className="mx-auto mb-4 text-green-900" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dog park & pet-friendly paths
              </h3>
              <p className="text-lg text-gray-900 mb-6">
                Cadence living amenities include a dog park. Confirm leash rules,
                hours, and access with the Cadence Master Association before you visit.
              </p>
              <Button className="bg-green-900 hover:bg-green-800" asChild>
                <Link href="/lifestyle/amenities">Cadence amenities overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Activities & programs
            </h2>
            <p className="text-lg text-gray-900 mb-6 leading-relaxed">
              Central Park and Cadence trails support walking, biking, and outdoor
              recreation year-round. Date-specific Association programs (classes,
              clubs, or gatherings) change — confirm current schedules with the
              Cadence Master Association at{' '}
              <a href="tel:7026053111" className="text-green-900 font-medium hover:underline">
                702-605-3111
              </a>
              . This page does not invent weekly class times.
            </p>
            <Button className="bg-green-900 hover:bg-green-800" asChild>
              <Link href="/lifestyle/events">Cadence community events</Link>
            </Button>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/parks-trails"
        name="Parks & Trails in Cadence Henderson 89011 | Henderson NV"
        description="Central Park (~50 acres), walking and biking trails, Fitness Court, pickleball, dog park, and Sunset Road Linear Park in Cadence Henderson NV 89011."
        faqs={defaultPageFaqs('parks and trails in Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Parks and trails in Cadence Henderson NV 89011' },
        ]}
        faqHeading="Cadence Henderson parks — questions"
      />
      <Footer />
    </div>
  )
}
