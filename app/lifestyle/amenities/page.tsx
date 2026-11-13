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
import {
  CADENCE_AMENITIES,
  amenitiesFaqAnswer,
  amenityReservationFaqAnswer,
  centralParkAccessFaqAnswer,
} from '@/lib/cadence-amenities'
import type { LucideIcon } from 'lucide-react'

/** Icons stay in the page; facts come from lib/cadence-amenities.ts */
const AMENITY_ICONS: Record<
  (typeof CADENCE_AMENITIES)[number]['id'],
  LucideIcon
> = {
  'community-pool': Waves,
  'splash-pads': Droplets,
  'central-park': Trees,
  'fitness-court': Dumbbell,
  pickleball: CircleDot,
  'linear-park': MapPinned,
}

const amenities = CADENCE_AMENITIES.map((item) => ({
  ...item,
  icon: AMENITY_ICONS[item.id],
  image: getAmenityImage(item.imageKey, 'card'),
}))

const AMENITIES_FAQS = [
  {
    q: 'What amenities does Cadence Henderson have?',
    a: amenitiesFaqAnswer(),
  },
  {
    q: 'Is Cadence Henderson Central Park open to residents?',
    a: centralParkAccessFaqAnswer(),
  },
  {
    q: 'How do HOA fees work in Cadence Henderson?',
    a: `Master Association assessments and any sub-association dues vary by neighborhood and change over time. This real estate site does not publish fee schedules. Contact the Cadence Master Association at ${HOA_CONTACT.phone} or ${HOA_CONTACT.email}, or your sub-association manager, for current amounts. Call ${CONTACT_INFO.phone} for Cadence home-buying questions with Dr. Jan Duffy.`,
  },
  {
    q: 'Can I reserve Cadence Henderson amenities for private events?',
    a: amenityReservationFaqAnswer(),
  },
]

export const metadata: Metadata = {
  title: 'Cadence Henderson Amenities – Central Park, Pool & Trails',
  description:
    '50-acre Central Park, resident pool, splash pads, Fitness Court, pickleball & Sunset Road Linear Park in Cadence Henderson NV 89011. Tour with Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.cadencehenderson.com/lifestyle/amenities',
  },
  openGraph: {
    title: 'Cadence Henderson Amenities – Central Park, Pool & Trails',
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
          <p className="text-lg text-gray-800 text-center max-w-3xl mx-auto mb-12">
            Cadence amenities speak for themselves: the 50-acre Central Park is
            perfect for walking and biking and offers free wifi so you can stay
            connected. For more outdoor fun, check out the splash pads, resident
            pool, adventure park, Fitness Court, and trails — plus a dog park
            for Fido. Hours, cards, and table reservations are handled by the
            Cadence Master Association — not this real estate office.
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
                    <p className="text-gray-900 mb-4">{amenity.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">
                        Features include
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {amenity.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start text-sm text-gray-900"
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
                <h3 className="font-bold text-gray-900 mb-2">
                  Central Park Pool
                </h3>
                <p className="text-sm text-gray-800">
                  Residents only · Master Association Card required
                  <br />
                  Typically 6 a.m.–9 p.m. (May–October; dates subject to change)
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Trees size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">Central Park</h3>
                <p className="text-sm text-gray-800">
                  Open to the public year-round
                  <br />
                  Dawn–10 p.m. daily (Association hours)
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Phone size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">
                  Table reservations
                </h3>
                <p className="text-sm text-gray-800">
                  Picnic / poolside tables via Association only
                  <br />
                  Call {HOA_CONTACT.phone} — not the realtor line
                </p>
              </div>
            </div>
            <div className="border border-cyan-200 bg-white rounded-lg p-6 text-center">
              <p className="text-gray-900 mb-4">
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
                  <Button
                    variant="outline"
                    className="border-cyan-900 text-cyan-900"
                  >
                    Email {HOA_CONTACT.email}
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="border-cyan-900 text-cyan-900"
                  asChild
                >
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
              See villages near Central Park and the pool — Association staff
              handle amenity cards and reservations.
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
            <p className="text-center text-gray-800 mb-8">
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
                  <p className="faq-answer mt-3 text-gray-900 leading-relaxed">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/amenities"
        name="Cadence Henderson Amenities – Central Park, Pool & Trails"
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
