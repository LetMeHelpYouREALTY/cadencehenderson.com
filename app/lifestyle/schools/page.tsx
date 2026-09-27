import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { GraduationCap, Award, Users, BookOpen, Bus } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'

const schools = [
  {
    name: 'Cadence Elementary School',
    level: 'Elementary (K-5)',
    commute: 'On-site in Cadence Henderson NV 89011',
    description:
      'Clark County School District K–5 campus inside Cadence Henderson. Confirm the attendance zone for a specific street before you write an offer.',
    features: [
      'STEM-focused curriculum',
      'After-school programs',
      'Music and arts programs',
      'Short walk or drive from many Cadence streets',
    ],
    image: cfImage(SITE_IMAGES.schools.elementary, 'card'),
  },
  {
    name: 'Henderson Middle School',
    level: 'Middle School (6-8)',
    commute: 'Henderson campus — confirm zone by address',
    description:
      'Clark County middle-school campus serving parts of Henderson. Programs include athletics, clubs, and counseling. Zone maps change — verify before you buy.',
    features: [
      'Advanced courses where offered',
      'Athletics programs',
      'Technology integration',
      'Student clubs and organizations',
    ],
    image: cfImage(SITE_IMAGES.schools.middle, 'card'),
  },
  {
    name: 'Green Valley High School',
    level: 'High School (9-12)',
    commute: 'Green Valley — typically a short Henderson drive',
    description:
      'Clark County high school campus with AP and honors courses, athletics, fine arts, and career/technical education. Confirm assignment for the lot you are touring.',
    features: [
      'AP and honors courses',
      'College counseling',
      'Athletics programs',
      'Fine arts programs',
      'Career and technical education',
    ],
    image: cfImage(SITE_IMAGES.schools.high, 'card'),
  },
]

const privateSchools = [
  {
    name: 'The Henderson International School',
    type: 'Private (K-8)',
    specialty: 'International Baccalaureate',
  },
  {
    name: 'Faith Lutheran Schools',
    type: 'Private (Pre-K - 12)',
    specialty: 'Christian Education',
  },
  {
    name: 'The Meadows School',
    type: 'Private (Pre-K - 12)',
    specialty: 'College Preparatory',
  },
]

export const metadata: Metadata = {
  title: 'Schools Near Cadence Henderson | Henderson NV 89011',
  description:
    'Campuses serving Cadence Henderson 89011: Cadence Elementary on-site, Henderson-area middle schools, Green Valley High School, plus nearby private campuses. Confirm CCSD zones by address.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/schools' },
  openGraph: {
    title: 'Schools Near Cadence Henderson | Henderson NV 89011',
    description: 'Cadence Elementary, Henderson-area middle schools, and Green Valley High School near Cadence Henderson NV 89011. Confirm attendance zones by address.',
    url: 'https://www.cadencehenderson.com/lifestyle/schools',
  },
}

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Schools in Cadence Henderson NV 89011"
        subtitle="Name the campus, then confirm the Clark County School District attendance zone for the lot you are touring. Cadence Elementary sits on-site; middle and high school assignments vary by street."
        imageSrc={cfImage(SITE_IMAGES.hero.schools, 'hero')}
        imageAlt="Schools serving Cadence Henderson NV 89011"
        icon={GraduationCap}
      >
        <Button
          size="lg"
          className="bg-white text-indigo-900 hover:bg-gray-100"
        >
          View School District Map
        </Button>
      </PageHero>

      <RealScoutOfficeListings />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Campuses serving Cadence Henderson NV 89011
            </h2>
            <p className="aeo-lead mx-auto mb-12 max-w-3xl text-center text-gray-700" data-speakable>
              Cadence Elementary School is on-site. Henderson-area middle schools and Green Valley High School serve many Cadence streets. Always verify the CCSD zone for a specific address.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-900 mb-2">
                  On-site
                </div>
                <div className="text-gray-700">Cadence Elementary (K–5)</div>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-900 mb-2">
                  By address
                </div>
                <div className="text-gray-700">Middle and high school zones</div>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-900 mb-2">
                  Nearby
                </div>
                <div className="text-gray-700">Private K–12 campuses in Henderson</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Schools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Clark County campuses near Cadence Henderson
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {schools.map((school) => (
              <div
                key={school.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <SiteImage
                    src={school.image}
                    alt={`${school.name} near Cadence Henderson NV 89011`}
                    fill
                  />
                  <div className="absolute top-4 right-4 bg-indigo-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {school.commute}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {school.name}
                  </h3>
                  <p className="text-indigo-900 font-medium mb-3">
                    {school.level}
                  </p>
                  <p className="text-gray-700 mb-4">{school.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                      Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {school.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-indigo-900 rounded-full mr-2 mt-1.5" />
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How to confirm a Cadence Henderson attendance zone
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Award size={32} className="text-indigo-900 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Name the campus
                  </h3>
                  <p className="text-gray-700">
                    Cadence Elementary is inside the master plan. Middle and high
                    school campuses serving Henderson include Green Valley High
                    School. Ask Dr. Jan for the current CCSD map for a lot.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users size={32} className="text-indigo-900 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Programs on campus
                  </h3>
                  <p className="text-gray-700">
                    Area campuses list STEM, arts, athletics, and after-school
                    programs. Confirm offerings with the school, not a listing
                    flyer.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen
                  size={32}
                  className="text-indigo-900 mr-4 flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    AP and honors courses
                  </h3>
                  <p className="text-gray-700">
                    Green Valley High School publishes AP, honors, and career
                    and technical education options. Check the current course
                    catalog.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Bus size={32} className="text-indigo-900 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Commute from Cadence
                  </h3>
                  <p className="text-gray-700">
                    Cadence Elementary is on-site. Other campuses are a short
                    Henderson drive or CCSD bus ride depending on the assigned
                    zone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Schools */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Private campuses near Cadence Henderson NV 89011
            </h2>
            <p className="text-center text-gray-700 mb-8">
              In addition to CCSD campuses, several Henderson-area
              private schools serve the Henderson area.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {privateSchools.map((school) => (
                <div
                  key={school.name}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-gray-900 mb-2">
                    {school.name}
                  </h3>
                  <p className="text-sm text-indigo-900 mb-2">{school.type}</p>
                  <p className="text-sm text-gray-600">{school.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Higher Education */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Colleges near Cadence Henderson NV 89011
            </h2>
            <p className="aeo-lead text-lg text-gray-700 mb-8" data-speakable>
              Nevada State University, CSN Henderson, UNLV, and Roseman University
              are a short drive from Cadence Henderson NV 89011.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  University of Nevada, Las Vegas (UNLV)
                </h3>
                <p className="text-gray-600 text-sm">
                  Major research university - 20 minutes
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  College of Southern Nevada
                </h3>
                <p className="text-gray-600 text-sm">
                  Community college - 15 minutes
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Nevada State College
                </h3>
                <p className="text-gray-600 text-sm">
                  Four-year institution - 10 minutes
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Roseman University
                </h3>
                <p className="text-gray-600 text-sm">
                  Health sciences - 12 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/schools"
        name="Schools Near Cadence Henderson | Henderson NV 89011"
        description="Campuses serving Cadence Henderson 89011: Cadence Elementary on-site, Henderson-area middle schools, Green Valley High School. Confirm CCSD zones by address."
        faqs={defaultPageFaqs('Clark County campuses serving Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Schools near Cadence Henderson NV 89011' },
        ]}
        faqHeading="Cadence Henderson schools — questions"
      />
      <Footer />
    </div>
  )
}

