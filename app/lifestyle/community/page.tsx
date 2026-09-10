import { PageHero } from '@/components/cadence/page-hero'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import { Users, Heart, Calendar, MessageSquare, Award, Smile } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Cadence Henderson Community Life – Henderson NV 89011',
  description:
    'Resident clubs, volunteering & neighborhood events in Cadence Henderson NV 89011. Book Club, Running Club, Garden Club, Wine & Dine and more. Active community life.',
  alternates: { canonical: `${BASE}/lifestyle/community` },
  openGraph: {
    title: 'Cadence Henderson Community Life – Henderson NV 89011',
    description: 'Resident clubs, volunteering & neighborhood events in Cadence Henderson NV 89011. Active community life for residents.',
    url: `${BASE}/lifestyle/community`,
  },
}

const clubs = [
  {
    name: 'Book Club',
    description: 'Monthly book discussions and author meet-and-greets',
    icon: '📚',
    meetingTime: 'First Thursday, 7 PM',
  },
  {
    name: 'Running Club',
    description: 'Weekend group runs for all fitness levels',
    icon: '🏃',
    meetingTime: 'Saturday, 7 AM',
  },
  {
    name: 'Garden Club',
    description: 'Community gardening and sustainability initiatives',
    icon: '🌱',
    meetingTime: 'Second Saturday, 9 AM',
  },
  {
    name: 'Wine & Dine',
    description: 'Social gatherings featuring local wines and cuisine',
    icon: '🍷',
    meetingTime: 'Third Friday, 6 PM',
  },
  {
    name: 'Kids Activities',
    description: 'Organized activities and playdates for children',
    icon: '🎨',
    meetingTime: 'Various times',
  },
  {
    name: 'Fitness Group',
    description: 'Group workouts, yoga, and wellness activities',
    icon: '💪',
    meetingTime: 'Weekdays, 6 AM & 6 PM',
  },
  {
    name: 'Pet Owners Group',
    description: 'Dog park meetups and pet-friendly events',
    icon: '🐕',
    meetingTime: 'Sunday, 10 AM',
  },
  {
    name: 'Crafts & Hobbies',
    description: 'Knitting, painting, and various craft projects',
    icon: '✂️',
    meetingTime: 'Wednesday, 2 PM',
  },
]

const volunteerOpportunities = [
  {
    title: 'Welcome Committee',
    description: 'Greet new residents and help them settle into the community',
  },
  {
    title: 'Event Planning',
    description: 'Organize and coordinate community events and celebrations',
  },
  {
    title: 'Park Maintenance',
    description: 'Help maintain and beautify community parks and gardens',
  },
  {
    title: 'Resident groups',
    description: 'Join posted clubs and volunteer days on the resident calendar',
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Community Life"
        subtitle="At Cadence, community is more than just a place to live—it's a lifestyle. Connect with neighbors, join clubs, participate in events, and create lasting friendships in our vibrant community."
        imageSrc={cfImage(SITE_IMAGES.hero.community, 'hero')}
        imageAlt="Community life at Cadence Henderson NV 89011"
        icon={Users}
      >
        <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
          <Button
            size="lg"
            className="bg-white text-amber-900 hover:bg-gray-100"
          >
            Call: {CONTACT_INFO.phone}
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.community, 'hero')}
        alt="Community clubs in Cadence Henderson NV 89011"
      />


      {/* Why Cadence Community */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What Makes Our Community Special
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-4">
                  <Heart size={40} className="text-amber-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Neighborly Spirit
                </h3>
                <p className="text-gray-700">
                  Experience genuine connections with friendly neighbors who care
                  about building a strong, supportive community.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-4">
                  <Calendar size={40} className="text-amber-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Year-Round Events
                </h3>
                <p className="text-gray-700">
                  From concerts to movie nights, farmers markets to holiday
                  celebrations, there's always something happening.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-4">
                  <Smile size={40} className="text-amber-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Clubs and events
                </h3>
                <p className="text-gray-700">
                  Book club, running club, garden club, and Central Park events
                  run on a posted resident calendar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Groups */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Users size={48} className="mx-auto mb-4 text-amber-900" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Clubs & Interest Groups
              </h2>
              <p className="text-xl text-gray-600">
                Join like-minded neighbors and pursue your passions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clubs.map((club) => (
                <div
                  key={club.name}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-5xl mb-3">{club.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {club.name}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    {club.description}
                  </p>
                  <p className="text-xs text-amber-900 font-medium">
                    {club.meetingTime}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-amber-900 hover:bg-amber-800">
                Start a New Club
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Get Involved
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 rounded-lg p-8">
                <Award size={40} className="text-amber-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Volunteer Opportunities
                </h3>
                <ul className="space-y-3">
                  {volunteerOpportunities.map((opportunity) => (
                    <li key={opportunity.title} className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 mb-1">
                        {opportunity.title}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {opportunity.description}
                      </p>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-amber-900 hover:bg-amber-800">
                  Sign Up to Volunteer
                </Button>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <MessageSquare size={40} className="text-blue-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Online Community
                </h3>
                <p className="text-gray-700 mb-6">
                  Stay connected with neighbors through our private online
                  community forum. Share recommendations, organize activities,
                  and stay informed about community news.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-2 mt-2" />
                    <span className="text-gray-700">Private residents-only access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-2 mt-2" />
                    <span className="text-gray-700">Discussion forums and groups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-2 mt-2" />
                    <span className="text-gray-700">Event calendar and RSVPs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-2 mt-2" />
                    <span className="text-gray-700">Classified ads and marketplace</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Join the Forum
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Residents Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">👤</div>
                  <div>
                    <div className="font-bold text-gray-900">Sarah & Mike T.</div>
                    <div className="text-sm text-gray-600">Residents since 2022</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "We've lived in many neighborhoods, but Cadence truly feels like
                  home. The sense of community here is incredible—our neighbors
                  have become our best friends!"
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">👤</div>
                  <div>
                    <div className="font-bold text-gray-900">Jennifer M.</div>
                    <div className="text-sm text-gray-600">Resident since 2021</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The community events and clubs make it so easy to meet people
                  and stay active. My kids love living here, and so do we!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Become Part of Our Community
            </h2>
            <p className="text-xl mb-8">
              Experience the Cadence lifestyle. Schedule a tour and see why our
              residents love calling this place home.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Button
                  size="lg"
                  className="bg-white text-amber-900 hover:bg-gray-100"
                >
                  Call: {CONTACT_INFO.phone}
                </Button>
              </a>
              <a href="/new-homes">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-900"
                >
                  View Available Homes
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/community"
        name="Cadence Henderson Community Life – Henderson NV 89011"
        description="Resident clubs, volunteering & neighborhood events in Cadence Henderson NV 89011. Book Club, Running Club, Garden Club, Wine & Dine and more. Active community life."
        faqs={defaultPageFaqs('community life in Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Community life in Cadence Henderson NV 89011' },
        ]}
        faqHeading="Cadence Henderson community — questions"
      />
      <Footer />
    </div>
  )
}

