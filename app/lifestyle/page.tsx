import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { HomeSearchSection } from '@/components/cadence/home-search-section'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import {
  Calendar,
  Trees,
  ShoppingBag,
  GraduationCap,
  Heart,
  Users,
  Music,
  Sparkles,
  Phone,
  Mail,
} from 'lucide-react'
import Link from 'next/link'
import { cfImage, SITE_IMAGES, getAmenityImage } from '@/lib/cloudflare-images'

const lifestyleFeatures = [
  {
    icon: Calendar,
    title: 'Events',
    description:
      'Year-round community events including concerts, movie nights, and seasonal celebrations.',
    image: cfImage(SITE_IMAGES.lifestyle.events, 'card'),
    link: '/lifestyle/events',
  },
  {
    icon: Trees,
    title: 'Parks & Trails',
    description:
      "Nearly 50-acre Central Park, walking trails, and nature areas for outdoor recreation.",
    image: getAmenityImage('trails', 'card'),
    link: '/lifestyle/parks-trails',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping & Entertainment',
    description:
      'Nearby retail, dining, and entertainment options with more coming to the community.',
    image: cfImage(SITE_IMAGES.hero.shopping, 'card'),
    link: '/lifestyle/shopping',
  },
  {
    icon: GraduationCap,
    title: 'Schools',
    description:
      'Clark County campuses serving Cadence, including Cadence Elementary on-site. Confirm attendance zones by address.',
    image: cfImage(SITE_IMAGES.hero.schools, 'card'),
    link: '/lifestyle/schools',
  },
  {
    icon: Sparkles,
    title: 'Amenities',
    description:
      'Multiple pools, splash pads, fitness centers, and recreation facilities.',
    image: getAmenityImage('pool', 'card'),
    link: '/lifestyle/amenities',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Active resident community with clubs, activities, and neighborhood connections.',
    image: cfImage(SITE_IMAGES.lifestyle.community, 'card'),
    link: '/lifestyle/community',
  },
]

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Live the Cadence Lifestyle"
        subtitle="More than just a place to live, Cadence is a vibrant community where neighbors become friends and every day brings new opportunities for connection, recreation, and joy."
        imageSrc={cfImage(SITE_IMAGES.hero.lifestyle, 'hero')}
        imageAlt="Cadence Henderson lifestyle and community in Henderson NV 89011"
      >
        <Button
          size="lg"
          className="bg-white text-green-900 hover:bg-gray-100"
        >
          <Calendar className="mr-2" size={20} />
          View Community Calendar
        </Button>
      </PageHero>

      <RealScoutOfficeListings />

      <HomeSearchSection compact />

      {/* Lifestyle Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cadence Henderson lifestyle in Henderson NV 89011
            </h2>
            <p className="aeo-lead text-xl text-gray-600 max-w-3xl mx-auto" data-speakable>
              From Central Park amenities to community events, discover how
              Cadence Henderson NV 89011 is laid out for daily living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifestyleFeatures.map((feature) => (
              <Link
                key={feature.link}
                href={feature.link}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative h-56 overflow-hidden">
                    <SiteImage
                      src={feature.image}
                      alt={`${feature.title} at Cadence Henderson NV 89011`}
                      fill
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <feature.icon size={32} className="text-white mb-2" />
                      <h3 className="text-2xl font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{feature.description}</p>
                    <Button
                      className="w-full bg-green-900 hover:bg-green-800"
                      variant="default"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Central Park Feature */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Central Park: The Heart of Cadence
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our nearly 50-acre Central Park is the crown jewel of the
                community, offering residents a spectacular outdoor space for
                recreation, relaxation, and community gatherings.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Multiple playgrounds for all ages
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Walking and biking trails throughout
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Large event lawn for community gatherings
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Splash pads and water features
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Stunning mountain and desert views
                  </span>
                </li>
              </ul>
              <Button size="lg" className="bg-green-900 hover:bg-green-800">
                Explore Central Park
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <SiteImage
                src={getAmenityImage('centralPark', 'hero')}
                alt="Central Park at Cadence Henderson NV 89011"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resort-Style Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Live like you're on vacation every day
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🏊</div>
              <h3 className="font-bold text-gray-900 mb-2">Pools & Spas</h3>
              <p className="text-sm text-gray-600">
                Multiple community pools and hot tubs
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-bold text-gray-900 mb-2">Fitness Centers</h3>
              <p className="text-sm text-gray-600">
                State-of-the-art gym equipment
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🐕</div>
              <h3 className="font-bold text-gray-900 mb-2">Dog Parks</h3>
              <p className="text-sm text-gray-600">
                Dedicated spaces for your furry friends
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🎾</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Sports Courts
              </h3>
              <p className="text-sm text-gray-600">
                Basketball, tennis, and pickleball
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Tour Section */}
      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Calendar size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Experience the Lifestyle Firsthand
              </h2>
              <p className="text-xl text-white mb-6">
                Schedule a tour and see why Cadence is more than just a community
                - it's a lifestyle.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-green-900 transition-colors"
                >
                  <Phone size={20} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-green-900 transition-colors"
                >
                  <Mail size={20} />
                  Email Dr. Jan
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
      <section className="py-16 bg-white" aria-labelledby="lifestyle-faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="lifestyle-faq-heading" className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Cadence Henderson lifestyle FAQs
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Cadence Henderson community and lifestyle – Henderson NV 89011
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
                        text: 'Cadence Henderson NV 89011 has a 50-acre Central Park, resort pools, fitness centers, pickleball courts, dog parks, 30+ miles of trails, and clubhouses. Most amenities are free for residents.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What events happen in Cadence Henderson?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Cadence Henderson hosts summer concerts, farmers market, movie nights, food trucks, and yoga in the park. Events are held at Central Park and are free for residents.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What schools serve Cadence Henderson NV 89011?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Cadence Henderson is served by Cadence Elementary (on-site), Legacy Traditional, and Clark County schools. Green Valley High School and Henderson middle schools are nearby.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is there shopping near Cadence Henderson?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Galleria at Sunset, Cadence Marketplace, and Sunset Station are near Cadence Henderson NV 89011. Grocery, dining, and retail are 5–10 minutes away.',
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-4">
              {[
                { q: 'What amenities does Cadence Henderson have?', a: '50-acre Central Park, resort pools, fitness centers, pickleball courts, dog parks, 30+ miles of trails, and clubhouses. Most amenities are free for residents.' },
                { q: 'What events happen in Cadence Henderson?', a: 'Summer concerts, farmers market, movie nights, food trucks, and yoga in the park at Central Park. Free for residents.' },
                { q: 'What schools serve Cadence Henderson NV 89011?', a: 'Cadence Elementary (on-site), Legacy Traditional, and Clark County schools. Green Valley High School nearby.' },
                { q: 'Is there shopping near Cadence Henderson?', a: 'Yes. Galleria at Sunset, Cadence Marketplace, and Sunset Station are 5–10 minutes from Cadence Henderson NV 89011.' },
              ].map(({ q, a }) => (
                <details key={q} className="group border border-gray-200 rounded-lg p-5 cursor-pointer bg-gray-50">
                  <summary className="font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                    {q}
                    <span className="text-green-900 shrink-0 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="faq-answer mt-3 text-gray-700 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle"
        name="Cadence Henderson Community & Amenities | Henderson NV 89011"
        description="50-acre Central Park, resort pools, fitness centers, Cadence Elementary on-site & 30+ miles of trails. Discover the Cadence Henderson lifestyle in Henderson NV 89011."
        breadcrumbs={[{ name: 'Cadence Henderson lifestyle NV 89011' }]}
      />
      <Footer />
    </div>
  )
}

