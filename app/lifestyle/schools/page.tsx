import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { GraduationCap, Award, Users, BookOpen, Bus } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { BreadcrumbSchema } from '@/components/schema/breadcrumb'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

const schools = [
  {
    name: 'Cadence Elementary School',
    level: 'Elementary (K-5)',
    rating: '9/10',
    description:
      'A state-of-the-art elementary school located within the community, offering innovative programs and experienced teachers dedicated to student success.',
    features: [
      'STEM-focused curriculum',
      'Small class sizes',
      'After-school programs',
      'Music and arts programs',
      'Walking distance from most homes',
    ],
    image: cfImage(SITE_IMAGES.schools.elementary, 'card'),
  },
  {
    name: 'Henderson Middle School',
    level: 'Middle School (6-8)',
    rating: '8/10',
    description:
      'Comprehensive middle school program preparing students for high school with advanced courses and extracurricular activities.',
    features: [
      'Advanced placement courses',
      'Athletics programs',
      'Technology integration',
      'Student clubs and organizations',
      'Dedicated counseling staff',
    ],
    image: cfImage(SITE_IMAGES.schools.middle, 'card'),
  },
  {
    name: 'Green Valley High School',
    level: 'High School (9-12)',
    rating: '9/10',
    description:
      'Top-rated high school offering college preparatory programs, AP courses, and diverse extracurricular activities.',
    features: [
      'AP and honors courses',
      'College counseling',
      'Championship athletics',
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
    'Top-rated schools serving Cadence Henderson 89011: Cadence Elementary, Legacy Traditional, Henderson middle & high schools. On-site school within the community.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/schools' },
  openGraph: {
    title: 'Schools Near Cadence Henderson | Henderson NV 89011',
    description: 'Top-rated schools serving Cadence Henderson 89011: Cadence Elementary, Legacy Traditional & Henderson schools.',
    url: 'https://www.cadencehenderson.com/lifestyle/schools',
  },
}

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BreadcrumbSchema
        items={[
          { name: 'Cadence Henderson Lifestyle & Community', href: 'https://www.cadencehenderson.com/lifestyle' },
          { name: 'Schools Near Cadence Henderson NV 89011' },
        ]}
      />

      <PageHero
        title="Schools in Cadence"
        subtitle="Access to top-rated Clark County schools and excellent educational opportunities for students of all ages. From elementary through high school, Cadence students thrive."
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

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.schools, 'hero')}
        alt="Cadence Elementary campus serving Cadence Henderson NV 89011"
      />

      <RealScoutOfficeListings />

      {/* School Rating Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-indigo-900 mb-2">
                  A+
                </div>
                <div className="text-gray-700">School Ratings</div>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-indigo-900 mb-2">
                  95%
                </div>
                <div className="text-gray-700">Graduation Rate</div>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-indigo-900 mb-2">
                  3
                </div>
                <div className="text-gray-700">Schools Nearby</div>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-indigo-900 mb-2">
                  20+
                </div>
                <div className="text-gray-700">AP Courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Schools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Clark County Public Schools
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
                  <div className="absolute top-4 right-4 bg-indigo-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {school.rating}
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

      {/* Why Schools Excel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Cadence Schools Excel
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Award size={32} className="text-indigo-900 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Award-Winning Programs
                  </h3>
                  <p className="text-gray-700">
                    Cadence-area schools have received state and national
                    recognition for academic excellence, innovative teaching, and
                    student achievement.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users size={32} className="text-indigo-900 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Small Class Sizes
                  </h3>
                  <p className="text-gray-700">
                    Lower student-to-teacher ratios ensure personalized
                    attention and better learning outcomes for every student.
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
                    Advanced Curriculum
                  </h3>
                  <p className="text-gray-700">
                    AP courses, STEM programs, and college preparatory tracks
                    prepare students for higher education success.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Bus size={32} className="text-indigo-900 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Convenient Access
                  </h3>
                  <p className="text-gray-700">
                    Schools are located within the community or a short bus ride
                    away, making drop-off and pick-up easy for families.
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
              Private School Options
            </h2>
            <p className="text-center text-gray-700 mb-8">
              In addition to excellent public schools, several highly-regarded
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
              Higher Education Nearby
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Las Vegas and Henderson are home to several colleges and
              universities, providing excellent options for higher education.
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

      <Footer />
    </div>
  )
}

