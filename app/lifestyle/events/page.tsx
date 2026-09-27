import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { Calendar, Clock, MapPin, Music, Users, Phone, Mail, Film } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

export const metadata: Metadata = {
  title: 'Community Events in Cadence Henderson NV | 89011',
  description:
    'Summer concerts, farmers market, movie nights, food trucks & yoga at Cadence Henderson Central Park, Henderson NV 89011. Free events for residents.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/events' },
  openGraph: {
    title: 'Community Events in Cadence Henderson NV | 89011',
    description: 'Summer concerts, farmers market, movie nights & food trucks at Cadence Henderson Central Park, Henderson NV 89011.',
    url: 'https://www.cadencehenderson.com/lifestyle/events',
  },
}

const upcomingEvents = [
  {
    title: 'Summer Concert Series - Friday Nights',
    date: 'Every Friday, 7:00 PM - 9:00 PM',
    location: 'Central Park Event Lawn',
    category: 'Music',
    description:
      'Join us for live music under the stars every Friday evening throughout the summer. Bring blankets and lawn chairs to the Central Park event lawn.',
    image: cfImage(SITE_IMAGES.lifestyle.concert, 'card'),
  },
  {
    title: 'Cadence Farmers Market',
    date: 'Every Saturday, 8:00 AM - 12:00 PM',
    location: 'Welcome Center Plaza',
    category: 'Community',
    description:
      'Shop local produce, artisan goods, and handmade crafts from local vendors. Fresh, organic products delivered straight to your neighborhood.',
    image: cfImage(SITE_IMAGES.lifestyle.farmersMarket, 'card'),
  },
  {
    title: 'Halloween Spooktacular',
    date: 'October 31, 5:00 PM - 8:00 PM',
    location: 'Central Park',
    category: 'Holiday',
    description:
      'Trick-or-treating, costume contests, and haunted houses at Central Park. Event hours and route maps are posted on the resident calendar.',
    image: cfImage(SITE_IMAGES.lifestyle.events, 'card'),
  },
  {
    title: 'Food Truck Friday',
    date: 'Last Friday of Month, 5:00 PM - 9:00 PM',
    location: 'Community Pool Area',
    category: 'Food',
    description:
      'Enjoy diverse culinary offerings from local food trucks. Different vendors each month featuring everything from BBQ to international cuisine.',
    image: cfImage(SITE_IMAGES.lifestyle.foodTruck, 'card'),
  },
  {
    title: 'Movie Night in the Park',
    date: 'Second Saturday, 7:30 PM',
    location: 'Central Park',
    category: 'Movies',
    description:
      'Outdoor movies on a giant screen at Central Park. Bring blankets and enjoy popcorn and refreshments under the stars.',
    image: cfImage(SITE_IMAGES.lifestyle.movieNight, 'card'),
  },
  {
    title: 'Yoga in the Park',
    date: 'Tuesdays & Thursdays, 7:00 AM',
    location: 'Central Park Lawn',
    category: 'Wellness',
    description:
      'Free community yoga sessions for all skill levels. Bring your mat and start your day with mindfulness and movement.',
    image: cfImage(SITE_IMAGES.lifestyle.yoga, 'card'),
  },
]

const categoryIcons: Record<string, any> = {
  Music: Music,
  Community: Users,
  Holiday: Calendar,
  Food: Clock,
  Movies: Film,
  Wellness: Users,
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Community events in Cadence Henderson NV 89011"
        subtitle="Experience the vibrant community spirit at Cadence with year-round events, activities, and celebrations that bring neighbors together."
        imageSrc={cfImage(SITE_IMAGES.hero.events, 'hero')}
        imageAlt="Community events at Cadence Henderson NV 89011"
        icon={Calendar}
      >
        <Button
          size="lg"
          className="bg-white text-orange-900 hover:bg-gray-100"
        >
          Download Calendar
        </Button>
      </PageHero>

      <RealScoutOfficeListings />

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us for exciting community activities and celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => {
              const IconComponent = categoryIcons[event.category] || Calendar
              return (
                <div
                  key={event.title}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-56 overflow-hidden">
                    <SiteImage
                      src={event.image}
                      alt={`${event.title} at Cadence Henderson NV 89011`}
                      fill
                      className="hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-orange-900 text-white rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start text-sm text-gray-700">
                        <Clock size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-start text-sm text-gray-700">
                        <MapPin
                          size={16}
                          className="mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-orange-900 text-orange-900 hover:bg-orange-900 hover:text-white"
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Event categories in Cadence Henderson NV 89011
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Music', 'Food', 'Movies', 'Wellness', 'Holiday', 'Community', 'Sports', 'Education'].map(
                (category) => (
                  <div
                    key={category}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="text-4xl mb-2">
                      {category === 'Music' && '🎵'}
                      {category === 'Food' && '🍔'}
                      {category === 'Movies' && '🎬'}
                      {category === 'Wellness' && '🧘'}
                      {category === 'Holiday' && '🎉'}
                      {category === 'Community' && '🤝'}
                      {category === 'Sports' && '⚽'}
                      {category === 'Education' && '📚'}
                    </div>
                    <h3 className="font-bold text-gray-900">{category}</h3>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Consultation Section */}
      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Calendar size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Never Miss an Event
              </h2>
              <p className="text-xl text-white mb-6">
                Schedule a call with Dr. Jan Duffy to get personalized updates on
                upcoming activities and community happenings in Cadence.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-orange-900 transition-colors"
                >
                  <Phone size={20} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-orange-900 transition-colors"
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

      <PageAeo
        path="/lifestyle/events"
        name="Community Events in Cadence Henderson NV | 89011"
        description="Summer concerts, farmers market, movie nights & food trucks at Cadence Henderson Central Park, Henderson NV 89011."
        faqs={defaultPageFaqs('community events in Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Events in Cadence Henderson NV 89011' },
        ]}
        faqHeading="Cadence Henderson events — questions"
      />
      <Footer />
    </div>
  )
}

