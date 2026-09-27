import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import { Trees, MapPin, Bike, Dog, Users } from 'lucide-react'
import { cfImage, SITE_IMAGES, getAmenityImage, getGalleryImage } from '@/lib/cloudflare-images'
import Link from 'next/link'

const parks = [
  {
    name: 'Central Park',
    size: '50 acres',
    description:
      'The crown jewel of Cadence, Central Park features stunning mountain views, multiple playgrounds, walking trails, splash pads, and large event lawns perfect for community gatherings.',
    features: [
      'Multiple playgrounds for different age groups',
      'Splash pad and water features',
      'Walking and jogging trails',
      'Large event lawn',
      'Mountain and desert views',
      'Picnic areas with shade structures',
      'Open green spaces',
      'Dog-friendly areas',
    ],
    image: getGalleryImage('parkVista', 'card'),
  },
  {
    name: 'Neighborhood Parks',
    size: 'Throughout community',
    description:
      'Smaller neighborhood parks are strategically located throughout Cadence, providing convenient access to outdoor recreation for all residents.',
    features: [
      'Tot lots and playground equipment',
      'Playground equipment',
      'Benches and seating areas',
      'Shade structures',
      'Walking paths',
      'Pet waste stations',
    ],
    image: getAmenityImage('playground', 'card'),
  },
  {
    name: 'Dog Parks',
    size: '2 locations',
    description:
      'Dedicated off-leash dog parks with separate areas for small and large dogs, providing a safe space for your furry friends to play and socialize.',
    features: [
      'Separate small and large dog areas',
      'Double-gated entry for safety',
      'Water fountains for pets',
      'Agility equipment',
      'Benches and shade',
      'Pet waste stations and bags',
    ],
    image: getAmenityImage('dogPark', 'card'),
  },
]

export const metadata: Metadata = {
  title: 'Parks & Trails in Cadence Henderson 89011 | Henderson NV',
  description:
    '50-acre Central Park, 30+ miles of trails, dog parks & sports park in Cadence Henderson NV 89011. Walking, biking, jogging & outdoor recreation for residents.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/parks-trails' },
  openGraph: {
    title: 'Parks & Trails in Cadence Henderson 89011 | Henderson NV',
    description: '50-acre Central Park, 30+ miles of trails & dog parks in Cadence Henderson NV 89011.',
    url: 'https://www.cadencehenderson.com/lifestyle/parks-trails',
  },
}

const trails = [
  {
    name: 'Main Loop Trail',
    distance: '3.5 miles',
    difficulty: 'Easy',
    description:
      'A scenic paved trail that loops through the community, perfect for walking, jogging, or biking. Features mountain views and connects to Central Park.',
  },
  {
    name: 'Desert Discovery Trail',
    distance: '1.2 miles',
    difficulty: 'Easy',
    description:
      'Educational trail showcasing native desert plants and wildlife.',
  },
  {
    name: 'Fitness Trail',
    distance: '2 miles',
    difficulty: 'Moderate',
    description:
      'Trail with outdoor fitness stations along the route. Perfect for those looking to combine cardio with strength training.',
  },
  {
    name: 'Mountain View Path',
    distance: '1.8 miles',
    difficulty: 'Easy',
    description:
      'Peaceful walking path with stunning views of the surrounding mountains. Popular for sunrise and sunset walks.',
  },
]

export default function ParksTrailsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Parks & Trails in Cadence Henderson NV 89011"
        subtitle="Discover over 50 acres of parks and miles of scenic trails throughout Cadence. From Central Park to neighborhood green spaces, enjoy outdoor recreation right in your backyard."
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
              <p className="aeo-lead text-xl text-gray-600" data-speakable>
                About 50 acres of parkland in Cadence Henderson NV 89011 — playgrounds,
                splash pads, trails, and event lawns.
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
                  A Space for Everyone
                </h3>
                <p className="aeo-lead text-lg text-gray-700 mb-6" data-speakable>
                  Central Park is designed for daily use: jogging loops, picnic
                  lawns, playgrounds, splash pads, and event space in Cadence
                  Henderson NV 89011.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Three distinct playground areas for all ages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Splash pad with interactive water features
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Multi-purpose event lawn for concerts and gatherings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Panoramic mountain and valley views
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
                  <p className="text-gray-700 mb-4">{park.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {park.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-sm text-gray-700"
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
                Walking & Biking Trails
              </h2>
              <p className="text-xl text-gray-600">
                Over 8 miles of scenic trails connecting the entire community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {trails.map((trail) => (
                <div
                  key={trail.name}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-900 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {trail.name}
                    </h3>
                    <span className="text-sm font-medium text-green-900 bg-green-100 px-3 py-1 rounded-full">
                      {trail.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2 font-medium">
                    Distance: {trail.distance}
                  </p>
                  <p className="text-gray-700">{trail.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-lg p-8 text-center">
              <Dog size={48} className="mx-auto mb-4 text-green-900" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pet-Friendly Trails
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                All trails in Cadence are pet-friendly! Bring your furry friends
                along for the adventure. Please keep dogs on leashes and use
                provided waste stations.
              </p>
              <Button className="bg-green-900 hover:bg-green-800">
                View Dog Park Locations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activities & Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Running Club
                </h3>
                <p className="text-sm text-gray-600">
                  Saturday mornings at 7 AM
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">🚴</div>
                <h3 className="font-bold text-gray-900 mb-2">Bike Group</h3>
                <p className="text-sm text-gray-600">
                  Sunday mornings at 8 AM
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">🌅</div>
                <h3 className="font-bold text-gray-900 mb-2">Yoga in Park</h3>
                <p className="text-sm text-gray-600">
                  Tuesday & Thursday at 7 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/parks-trails"
        name="Parks & Trails in Cadence Henderson 89011 | Henderson NV"
        description="50-acre Central Park, 30+ miles of trails, dog parks & sports park in Cadence Henderson NV 89011. Walking, biking, jogging & outdoor recreation for residents."
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

