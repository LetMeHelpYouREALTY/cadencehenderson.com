import { PageHero } from '@/components/cadence/page-hero'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import {
  Users,
  Heart,
  Calendar,
  MessageSquare,
  Award,
  Smile,
} from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Cadence Henderson Community Life – Henderson NV 89011',
  description:
    'Community life in Cadence Henderson NV 89011: Central Park amenities, Association lifestyle programs, and how residents connect. Tour with Dr. Jan Duffy.',
  alternates: { canonical: `${BASE}/lifestyle/community` },
  openGraph: {
    title: 'Cadence Henderson Community Life – Henderson NV 89011',
    description:
      'Central Park amenities and Association lifestyle programs in Cadence Henderson NV 89011 — confirm schedules with the Master Association.',
    url: `${BASE}/lifestyle/community`,
  },
}

const communityHighlights = [
  {
    name: 'Central Park gatherings',
    description:
      'Concerts, car shows, and lifestyle programs when the Master Association schedules them.',
  },
  {
    name: 'Trails & outdoor recreation',
    description:
      'Walking, biking, Fitness Court, pickleball, and parks around Central Park.',
  },
  {
    name: 'Resident pool & splash pads',
    description:
      'Pool Complex amenities for residents with a Master Association Card (seasonal).',
  },
  {
    name: 'Neighborhood connections',
    description:
      'Villages, pocket parks, and dog park spaces where neighbors meet day to day.',
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Community Life"
        subtitle="Central Park amenities and Association lifestyle programs shape how neighbors connect in Cadence Henderson — tour villages with Dr. Jan Duffy."
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
        alt="Community living in Cadence Henderson NV 89011"
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
                <p className="text-gray-900">
                  Experience genuine connections with friendly neighbors who
                  care about building a strong, supportive community.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-4">
                  <Calendar size={40} className="text-amber-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community gatherings
                </h3>
                <p className="text-gray-900">
                  Concerts, car shows, and Association lifestyle programs happen when
                  scheduled — confirm current dates with the Master Association at 702-605-3111.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-4">
                  <Smile size={40} className="text-amber-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Association programs
                </h3>
                <p className="text-gray-900">
                  Resident programs and Central Park gatherings are scheduled by the
                  Cadence Master Association — call 702-605-3111 or email Lifestyle@CadenceHOA.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community highlights — no invented club schedules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Users size={48} className="mx-auto mb-4 text-amber-900" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How residents connect
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Cadence living centers on Central Park amenities and Association
                lifestyle programs. Confirm current clubs, classes, and volunteer
                postings with the Cadence Master Association at{' '}
                <a href="tel:7026053111" className="text-amber-900 font-medium hover:underline">
                  702-605-3111
                </a>
                — this site does not invent weekly meeting times.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityHighlights.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-900">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-amber-900 hover:bg-amber-800" asChild>
                <a href="/lifestyle/events">See community events</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Association + buyer paths */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Get involved
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 rounded-lg p-8">
                <Award size={40} className="text-amber-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Cadence Master Association
                </h3>
                <p className="text-gray-900 mb-4">
                  For resident programs, amenity cards, pool hours, and posted
                  volunteer or club opportunities, contact the Association
                  directly — not this Realtor site.
                </p>
                <p className="text-sm text-gray-900 mb-6">
                  Phone:{' '}
                  <a href="tel:7026053111" className="text-amber-900 font-medium hover:underline">
                    702-605-3111
                  </a>
                  <br />
                  Email:{' '}
                  <a href="mailto:Lifestyle@CadenceHOA.com" className="text-amber-900 font-medium hover:underline">
                    Lifestyle@CadenceHOA.com
                  </a>
                </p>
                <Button className="w-full bg-amber-900 hover:bg-amber-800" asChild>
                  <a href="/lifestyle/amenities">Cadence amenities overview</a>
                </Button>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <MessageSquare size={40} className="text-blue-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Tour Cadence with Dr. Jan
                </h3>
                <p className="text-gray-900 mb-6">
                  Looking to buy or relocate to Cadence Henderson? Dr. Jan Duffy
                  can walk villages, amenities, and new-home options with you —
                  without treating this site as the HOA calendar.
                </p>
                <Button className="w-full bg-blue-900 hover:bg-blue-800" asChild>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                    Call {CONTACT_INFO.phone}
                  </a>
                </Button>
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
              <Link href="/new-homes">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-900"
                >
                  View Available Homes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/community"
        name="Cadence Henderson Community Life – Henderson NV 89011"
        description="Community life in Cadence Henderson NV 89011: Central Park amenities, Association lifestyle programs when scheduled, and tours with Dr. Jan Duffy."
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
