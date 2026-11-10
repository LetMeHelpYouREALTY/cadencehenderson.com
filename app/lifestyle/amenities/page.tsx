import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { CONTACT_INFO, HOA_CONTACT } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import {
  Waves,
  Dumbbell,
  Trees,
  Droplets,
  CircleDot,
  MapPinned,
  Phone,
} from 'lucide-react'
import Link from 'next/link'
import { cfImage, SITE_IMAGES, getAmenityImage } from '@/lib/cloudflare-images'
import { PageAeo } from '@/components/cadence/page-aeo'

/**
 * Amenity copy aligned to the developer page:
 * https://cadencenv.com/lifestyle/amenities/
 * plus Association access/reservation rules from
 * https://www.cadencecommunityassociation.com/
 */
const amenities = [
  {
    name: 'Community Pool',
    icon: Waves,
    description:
      'The resident-only pool offers unobstructed, panoramic views of the Las Vegas Strip, providing a unique and scenic venue for Cadence residents.',
    features: [
      'Six-lane lap pool',
      'Resident access with Master Association Card',
      'Seasonal operation (typically May–October)',
      'Shaded picnic tables (reservable by residents)',
      'Turf area for relaxing',
      'Las Vegas Strip views',
    ],
    image: getAmenityImage('pool', 'card'),
  },
  {
    name: 'Splash Pads',
    icon: Droplets,
    description:
      'Cadence is home to two splash pads — one near the children’s play area and one in the Pool Complex that’s about 2,000 square feet.',
    features: [
      'Pool Complex splash pad (~2,000 sq ft)',
      'Second splash pad near play areas',
      'Family-friendly water play',
      'Part of Central Park / pool complex',
    ],
    image: getAmenityImage('splashPad', 'card'),
  },
  {
    name: 'Central Park',
    icon: Trees,
    description:
      'Central Park is a 50-acre expanse of turf areas, amphitheater seating, pickleball courts, children’s play areas, a six-lane lap pool, a 2,000-square-foot splash pad, and free wifi and outlets to keep you connected.',
    features: [
      'About 50 acres of open space',
      'Amphitheater(s) and turf areas',
      'Adventure playground and play areas',
      'Fitness Court and pickleball courts',
      'Free wifi and charging outlets',
      'Open to the public dawn–10 p.m. daily (Association hours)',
    ],
    image: getAmenityImage('centralPark', 'card'),
  },
  {
    name: 'Fitness Court',
    icon: Dumbbell,
    description:
      'A fitness space with quality equipment is right around the corner in Central Park — an outdoor bodyweight training court for adults of all fitness levels.',
    features: [
      'Outdoor Fitness Court® in Central Park',
      'Bodyweight training stations',
      'Open during park hours',
      'No separate gym membership required for this court',
    ],
    image: getAmenityImage('fitness', 'card'),
  },
  {
    name: 'Pickleball Courts',
    icon: CircleDot,
    description:
      'Pickleball courts are located in Central Park and offer a great place for outdoor recreation.',
    features: [
      'Courts in Central Park',
      'Open during regular park hours',
      'Public access during park hours',
    ],
    image: getAmenityImage('sportsCourts', 'card'),
  },
  {
    name: 'Sunset Road Linear Park',
    icon: MapPinned,
    description:
      'Enjoy the linear park along Sunset Road just north of Cadence Vista Drive — bounce pads, play structures, table tennis, corn hole, and more.',
    features: [
      'Bounce pads and play structures',
      'Table tennis',
      'Corn hole',
      'Gazebo / gathering spaces along Sunset Road',
    ],
    image: getAmenityImage('playground', 'card'),
  },
]

const AMENITIES_FAQS = [
  {
    q: 'What amenities does Cadence Henderson have?',
    a: 'Cadence Henderson amenities include a 50-acre Central Park with free wifi, a resident-only community pool with Strip views, two splash pads (including a ~2,000 sq ft pad in the Pool Complex), an adventure park/playground, Fitness Court, pickleball courts, trails, a dog park, and Sunset Road Linear Park with bounce pads, play structures, table tennis, and corn hole. Confirm hours and access with the Cadence Master Association.',
  },
  {
    q: 'Is Cadence Henderson Central Park open to residents?',
    a: `Central Park (1125 E. Sunset Road) is owned and maintained by the Cadence Community Association and is open to the public year-round, typically dawn–10 p.m. daily. The Central Park Pool is resident-only and requires a Cadence Master Association Card. Call the Association at ${HOA_CONTACT.phone} for current rules.`,
  },
  {
    q: 'How do HOA fees work in Cadence Henderson?',
    a: `Master Association assessments and any sub-association dues vary by neighborhood and change over time. This real estate site does not publish fee schedules. Contact the Cadence Master Association at ${HOA_CONTACT.phone} or ${HOA_CONTACT.email}, or your sub-association manager, for current amounts. Call ${CONTACT_INFO.phone} for Cadence home-buying questions with Dr. Jan Duffy.`,
  },
  {
    q: 'Can I reserve Cadence Henderson amenities for private events?',
    a: `Residents may reserve park picnic tables and poolside tables through the Cadence Master Association (call ${HOA_CONTACT.phone} or submit Association reservation forms). Only picnic tables are reservable — grass areas cannot be reserved, and weddings, professional parties, and company picnics are not permitted. Do not call the realtor line for Association reservations.`,
  },
]

export const metadata: Metadata = {
  title: 'Cadence Henderson Amenities – Central Park, Pools & Trails',
  description:
    '50-acre Central Park, resident pool, splash pads, Fitness Court, pickleball & Sunset Road Linear Park in Cadence Henderson NV 89011. Tour with Dr. Jan Duffy.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/amenities' },
  openGraph: {
    title: 'Cadence Henderson Amenities – Central Park, Pools & Trails',
    description:
      'Central Park, resident pool, splash pads, Fitness Court, pickleball and trails in Cadence Henderson NV 89011.',
    url: 'https://www.cadencehenderson.com/lifestyle/amenities',
  },
}

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Cadence Henderson amenities NV 89011"
        subtitle="Aligned with Cadence’s published lifestyle amenities: Central Park, resident pool, splash pads, Fitness Court, pickleball, trails, and Sunset Road Linear Park."
        imageSrc={cfImage(SITE_IMAGES.hero.amenities, 'hero')}
        imageAlt="Amenities at Cadence Henderson NV 89011"
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Wake up to amenities
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Cadence amenities speak for themselves: the 50-acre Central Park is perfect
            for walking and biking and offers free wifi so you can stay connected. For
            more outdoor fun, check out the splash pads, resident pool, adventure park,
            Fitness Court, and trails — plus a dog park for Fido. Hours, cards, and
            table reservations are handled by the Cadence Master Association — not this
            real estate office.
          </p>
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
                        <h3 className="text-2xl font-bold">{amenity.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{amenity.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">
                        Features include
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Access, hours & reservations
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Waves size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">Central Park Pool</h3>
                <p className="text-sm text-gray-600">
                  Residents only · Master Association Card required
                  <br />
                  Typically 6 a.m.–9 p.m. (May–October; dates subject to change)
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Trees size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">Central Park</h3>
                <p className="text-sm text-gray-600">
                  Open to the public year-round
                  <br />
                  Dawn–10 p.m. daily (Association hours)
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Phone size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">Table reservations</h3>
                <p className="text-sm text-gray-600">
                  Picnic / poolside tables via Association only
                  <br />
                  Call {HOA_CONTACT.phone} — not the realtor line
                </p>
              </div>
            </div>
            <div className="border border-cyan-200 bg-white rounded-lg p-6 text-center">
              <p className="text-gray-700 mb-4">
                <strong>{HOA_CONTACT.name}</strong> · {HOA_CONTACT.address}
                <br />
                {HOA_CONTACT.hours}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href={`tel:${HOA_CONTACT.phone.replace(/-/g, '')}`}>
                  <Button className="bg-cyan-900 hover:bg-cyan-800 text-white">
                    Call Association {HOA_CONTACT.phone}
                  </Button>
                </a>
                <a href={`mailto:${HOA_CONTACT.email}`}>
                  <Button variant="outline" className="border-cyan-900 text-cyan-900">
                    Email {HOA_CONTACT.email}
                  </Button>
                </a>
                <Button variant="outline" className="border-cyan-900 text-cyan-900" asChild>
                  <Link href="/lifestyle/events">Cadence community events</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Tour Cadence homes with Dr. Jan Duffy
            </h2>
            <p className="text-xl mb-8">
              See villages near Central Park and the pool — Association staff handle
              amenity cards and reservations.
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
                  mainEntity: AMENITIES_FAQS.map(({ q, a }) => ({
                    '@type': 'Question',
                    name: q,
                    acceptedAnswer: { '@type': 'Answer', text: a },
                  })),
                }),
              }}
            />
            <div className="space-y-4">
              {AMENITIES_FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-gray-200 rounded-lg p-5 cursor-pointer"
                >
                  <summary className="font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                    {q}
                    <span className="text-blue-900 shrink-0 group-open:rotate-180 transition-transform">
                      ▾
                    </span>
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
        description="50-acre Central Park, resident pool, splash pads, Fitness Court, pickleball & Sunset Road Linear Park in Cadence Henderson NV 89011."
        faqs={AMENITIES_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Amenities in Cadence Henderson NV 89011' },
        ]}
      />
      <Footer />
    </div>
  )
}
