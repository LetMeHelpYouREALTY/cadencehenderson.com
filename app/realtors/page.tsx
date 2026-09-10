import { PageHero } from '@/components/cadence/page-hero'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { HomeSearchSection } from '@/components/cadence/home-search-section'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { RealScoutHomeValue } from '@/components/idx/realscout-home-value'
import { RealScoutSimpleSearch } from '@/components/idx/realscout-simple-search'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import {
  Building2,
  TrendingUp,
  Download,
  FileText,
  Users,
  Award,
  MapPin,
  DollarSign,
  Phone,
} from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'
import Link from 'next/link'

export default function RealtorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Work with Dr. Jan Duffy"
        subtitle={
          <>
            <p className="text-lg mb-4 font-medium">
              REALTOR® | Las Vegas Luxury Home Specialist
            </p>
            <p className="text-lg mb-2">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
            <p>
              Specializing in Cadence Henderson - one of the nation&apos;s top 10
              best-selling master-planned communities. Let&apos;s find your dream home
              together.
            </p>
          </>
        }
        imageSrc={cfImage(SITE_IMAGES.hero.realtors, 'hero')}
        imageAlt="Work with Dr. Jan Duffy, REALTOR® at Cadence Henderson NV 89011"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <CalendlyLink>
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100"
            >
              Schedule with Cadence Expert
            </Button>
          </CalendlyLink>
          <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900"
            >
              <Phone className="mr-2" size={20} />
              Call: {CONTACT_INFO.phone}
            </Button>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900"
            >
              <Download className="mr-2" size={20} />
              Email Dr. Jan
            </Button>
          </a>
        </div>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.realtors, 'hero')}
        alt="Buyer representation for new homes in Cadence Henderson NV 89011"
      />


      <HomeSearchSection compact />

      <section className="bg-neutral-50 py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-6 text-sm">
            <Link href="/realtors/life-at-cadence" className="font-medium text-primary hover:underline">
              Life at Cadence briefing
            </Link>
            <Link href="/realtors/realtor-toolkit" className="font-medium text-primary hover:underline">
              Realtor toolkit
            </Link>
          </div>
        </div>
      </section>

      {/* About Dr. Jan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              About Dr. Jan Duffy
            </h2>
            <div className="bg-purple-50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dr. Jan Duffy is a distinguished REALTOR® with Berkshire Hathaway
                HomeServices Nevada Properties, specializing in the Cadence
                Henderson community. With deep knowledge of the Las Vegas Valley
                real estate market and expertise in luxury homes, investment
                properties, and master-planned communities, Dr. Duffy provides
                exceptional service to buyers and sellers alike.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Areas of Expertise:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-900 rounded-full mr-3 mt-2" />
                      <span className="text-gray-700">
                        Luxury Homes in Las Vegas, Henderson & Summerlin
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-900 rounded-full mr-3 mt-2" />
                      <span className="text-gray-700">
                        Investment Properties with Strong ROI
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-900 rounded-full mr-3 mt-2" />
                      <span className="text-gray-700">
                        First-Time Homebuyers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-900 rounded-full mr-3 mt-2" />
                      <span className="text-gray-700">
                        Relocations to/from Las Vegas
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Contact Info:</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Phone:</p>
                      <a
                        href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                        className="text-purple-900 font-bold hover:underline"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email:</p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-purple-900 font-bold hover:underline"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Office:</p>
                      <p className="text-gray-700">
                        {CONTACT_INFO.address.street}
                        <br />
                        {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}{' '}
                        {CONTACT_INFO.address.zip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work with Dr. Jan */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work with Dr. Jan Duffy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining Berkshire Hathaway's prestigious brand with in-depth
              local expertise to deliver personalized guidance and exceptional
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Award size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Berkshire Hathaway
              </h3>
              <p className="text-gray-700">
                Backed by the prestigious Berkshire Hathaway HomeServices brand
                and network
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Client-Focused
              </h3>
              <p className="text-gray-700">
                Dedicated to putting clients' needs first with personalized
                attention and care
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <MapPin size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Local Expertise
              </h3>
              <p className="text-gray-700">
                Deep knowledge of Cadence, Henderson, Las Vegas, and Summerlin
                markets
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <TrendingUp size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Proven Results
              </h3>
              <p className="text-gray-700">
                Track record of successful transactions and satisfied clients
                throughout the valley
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 italic mb-6">
                  "Dr. Jan Duffy provided me with critical insights during my
                  separation that helped me make informed, strategic decisions
                  about selling and purchasing property. Her deep knowledge of the
                  divorce process gave me much-needed confidence and clarity. I
                  couldn't recommend her highly enough."
                </p>
                <p className="font-bold text-gray-900">Robin P.</p>
                <p className="text-sm text-gray-600">Boulder City</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 italic mb-6">
                  "Dr. Jan Duffy is hands down the best realtor in Nevada!
                  Searching for a home can be overwhelming, but her dedication and
                  genuine care made all the difference. She truly puts her clients'
                  needs first and is incredibly knowledgeable and reliable. I
                  couldn't recommend her enough to anyone looking for their dream
                  home!"
                </p>
                <p className="font-bold text-gray-900">Kelsey C.</p>
                <p className="text-sm text-gray-600">Las Vegas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Current Inventory & Pricing
            </h2>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-900 mb-2">
                    150+
                  </div>
                  <div className="text-gray-700">Available Homes</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-900 mb-2">
                    $300K-$650K
                  </div>
                  <div className="text-gray-700">Price Range</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-900 mb-2">
                    8
                  </div>
                  <div className="text-gray-700">Builders</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-bold text-gray-900">
                      Single-Family Homes
                    </div>
                    <div className="text-sm text-gray-600">
                      1,500 - 3,500 sq ft
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-900">
                      $350K - $650K
                    </div>
                    <div className="text-sm text-gray-600">85+ available</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-bold text-gray-900">Townhomes</div>
                    <div className="text-sm text-gray-600">
                      1,200 - 2,000 sq ft
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-900">
                      $300K - $420K
                    </div>
                    <div className="text-sm text-gray-600">45+ available</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-bold text-gray-900">Estate Homes</div>
                    <div className="text-sm text-gray-600">
                      3,500+ sq ft
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-900">
                      $550K - $650K
                    </div>
                    <div className="text-sm text-gray-600">20+ available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-purple-900 hover:bg-purple-800">
                <Download className="mr-2" size={20} />
                Download Full Price List
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Buyers & Sellers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Services for Buyers & Sellers
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <FileText size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Buyer Guides
                </h3>
                <p className="text-gray-700 mb-4">
                  Free comprehensive guides on buying in Cadence, including
                  floor plans, pricing, and step-by-step purchase process.
                </p>
                <a href={`mailto:${CONTACT_INFO.email}?subject=Request Buyer Guide`}>
                  <Button
                    variant="outline"
                    className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                  >
                    Request Guide
                  </Button>
                </a>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <DollarSign size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Free Home Valuation
                </h3>
                <p className="text-gray-700 mb-4">
                  Thinking of selling? Get an instant estimate of your home's
                  current value in today's market.
                </p>
                <RealScoutHomeValue />
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <MapPin size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Personalized Home Tour
                </h3>
                <p className="text-gray-700 mb-4">
                  Schedule a private tour of Cadence with Dr. Jan. Visit
                  multiple builders and find your perfect home.
                </p>
                <CalendlyLink>
                  <Button
                    variant="outline"
                    className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                  >
                    Schedule Tour
                  </Button>
                </CalendlyLink>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <TrendingUp size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Market Reports
                </h3>
                <p className="text-gray-700 mb-4">
                  Stay informed with monthly market updates, pricing trends, and
                  investment insights for Cadence and Henderson.
                </p>
                <a href={`mailto:${CONTACT_INFO.email}?subject=Subscribe to Market Reports`}>
                  <Button
                    variant="outline"
                    className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                  >
                    Subscribe
                  </Button>
                </a>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <Building2 size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Investment Properties
                </h3>
                <p className="text-gray-700 mb-4">
                  Looking for investment opportunities? Get expert guidance on
                  rental properties and ROI analysis.
                </p>
                <a href={`mailto:${CONTACT_INFO.email}?subject=Investment Properties`}>
                  <Button
                    variant="outline"
                    className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                  >
                    Learn More
                  </Button>
                </a>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <Users size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Relocation Assistance
                </h3>
                <p className="text-gray-700 mb-4">
                  Moving to Las Vegas? I will map Cadence villages to your beds,
                  budget, and commute — then register you with the builder before
                  the first model visit.
                </p>
                <a href={`mailto:${CONTACT_INFO.email}?subject=Relocation Assistance`}>
                  <Button
                    variant="outline"
                    className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find Your Dream Home in Cadence?
            </h2>
            <p className="text-xl mb-8">
              Let Dr. Jan Duffy guide you through every step of buying or
              selling your home. With Berkshire Hathaway's resources and local
              expertise, you're in the best hands.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CalendlyLink>
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                  Schedule with Cadence Expert
                </Button>
              </CalendlyLink>
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900"
                >
                  <Phone className="mr-2" size={20} />
                  Call: {CONTACT_INFO.phone}
                </Button>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900"
                >
                  Email Dr. Jan
                </Button>
              </a>
            </div>
            <p className="mt-6 text-sm text-white">
              Serving Cadence, Henderson, Las Vegas, and Summerlin
            </p>
          </div>
        </div>
      </section>

      <PageAeo
        path="/realtors"
        name="Realtors | Cadence Henderson NV Real Estate"
        description="Cadence Henderson NV real estate team. Dr. Jan Duffy, REALTOR®. Expert agents for homes for sale and new construction in Henderson 89011."
        faqs={defaultPageFaqs('working with Dr. Jan Duffy at Cadence Henderson')}
        breadcrumbs={[{ name: 'Realtors at Cadence Henderson NV 89011' }]}
        faqHeading="Cadence Henderson realtor — questions"
      />
      <Footer />
    </div>
  )
}

