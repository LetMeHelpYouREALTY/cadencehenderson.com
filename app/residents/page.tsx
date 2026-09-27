import { PageHero } from '@/components/cadence/page-hero'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import {
  Users,
  FileText,
  Calendar,
  Shield,
  Phone,
  Mail,
  MapPin,
  Home,
  DollarSign,
  TrendingUp,
  HelpCircle,
} from 'lucide-react'
import Link from 'next/link'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

export default function ResidentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Living in Cadence"
        subtitle="Welcome home! Your guide to community resources, HOA information, and how I can help you as a current Cadence resident."
        imageSrc={cfImage(SITE_IMAGES.hero.residents, 'hero')}
        imageAlt="Cadence Henderson resident resources in Henderson NV 89011"
        icon={Users}
      >
        <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
          <Button
            size="lg"
            className="bg-white text-emerald-900 hover:bg-gray-100"
          >
            Contact Dr. Jan
          </Button>
        </a>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.residents, 'hero')}
        alt="Resident clubhouse in Cadence Henderson NV 89011"
      />


      {/* Services for Current Residents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            How Dr. Jan Can Help Current Residents
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Already living in Cadence? I'm here to help with your real estate needs
            and questions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <DollarSign size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Home Value Update
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Curious what your home is worth? Get a free market analysis
              </p>
              <a href={`mailto:${CONTACT_INFO.email}?subject=Home Value Request`}>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Get Valuation
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <Users size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Referral Rewards
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Know someone looking in Cadence? Earn rewards for referrals
              </p>
              <a href={`mailto:${CONTACT_INFO.email}?subject=Referral`}>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Refer a Friend
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <Home size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Thinking of Selling?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Ready to upgrade or relocate? Let's discuss your options
              </p>
              <a href={`mailto:${CONTACT_INFO.email}?subject=Selling My Home`}>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Start Conversation
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <TrendingUp size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Investment Properties
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Looking to invest in more Cadence properties? I can help
              </p>
              <a href={`mailto:${CONTACT_INFO.email}?subject=Investment Inquiry`}>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Explore Options
                </Button>
              </a>
            </div>

            <Link
              href="/lifestyle/events"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Calendar size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Community Events
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                See what's happening in your neighborhood
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
              >
                View Calendar
              </Button>
            </Link>

            <Link
              href="/faqs"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <HelpCircle size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                FAQs
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Common questions about living in Cadence
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
              >
                Get Answers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* HOA & Community Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cadence Henderson resident contacts NV 89011
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  HOA Management
                </h3>
                <p className="text-gray-700 mb-4">
                  For HOA dues, documents, maintenance requests, and amenity
                  reservations, contact the Cadence Master Association:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    Current HOA phone numbers are posted in the resident portal
                    and in closing documents — they change with the management
                    company.
                  </p>
                  <p className="text-gray-700">
                    <strong>Realtor line:</strong>{' '}
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                      className="text-emerald-900 hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    💡 <strong>Note:</strong> For HOA portal access and official
                    documents, contact the management company directly.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg shadow-lg p-8 border-2 border-emerald-900">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Your Real Estate Agent
                </h3>
                <p className="text-gray-700 mb-4">
                  For real estate questions, home valuations, or if you're
                  thinking of selling, contact Dr. Jan Duffy:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone size={18} className="mr-2 text-emerald-900" />
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                      className="text-emerald-900 font-bold hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-2 text-emerald-900" />
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-emerald-900 font-bold hover:underline text-sm"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-2 text-emerald-900 mt-1" />
                    <p className="text-gray-700 text-sm">
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
      </section>

      {/* Emergency Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Emergency Contacts
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Shield size={40} className="mx-auto mb-3 text-red-600" />
                  <h3 className="font-bold text-gray-900 mb-2">Emergency</h3>
                  <a
                    href="tel:911"
                    className="text-2xl font-bold text-red-600 hover:underline"
                  >
                    911
                  </a>
                </div>
                <div>
                  <Shield size={40} className="mx-auto mb-3 text-blue-600" />
                  <h3 className="font-bold text-gray-900 mb-2">
                    Non-Emergency Police
                  </h3>
                  <a
                    href="tel:702-267-4911"
                    className="text-xl font-bold text-blue-600 hover:underline"
                  >
                    (702) 267-4911
                  </a>
                </div>
                <div>
                  <Phone size={40} className="mx-auto mb-3 text-orange-600" />
                  <h3 className="font-bold text-gray-900 mb-2">
                    After-hours HOA
                  </h3>
                  <p className="text-sm text-gray-700">
                    Use the number in your resident portal. For Cadence home
                    questions, call {CONTACT_INFO.phone}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Community Resources
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Helpful links and information for Cadence residents
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <FileText className="mr-4 text-emerald-900" size={32} />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        HOA Documents
                      </h3>
                      <p className="text-sm text-gray-600">
                        CC&Rs, bylaws, and guidelines - Contact HOA management
                      </p>
                    </div>
                  </div>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                    <Button
                      variant="outline"
                      className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                    >
                      Call Dr. Jan
                    </Button>
                  </a>
                </div>
              </div>

              <Link href="/maps">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <MapPin className="mr-4 text-emerald-900" size={32} />
                      <div>
                        <h3 className="font-bold text-gray-900">
                          Community Map
                        </h3>
                        <p className="text-sm text-gray-600">
                          Explore amenities, trails, and neighborhood layout
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                    >
                      View Map
                    </Button>
                  </div>
                </div>
              </Link>

              <Link href="/lifestyle/events">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <Calendar className="mr-4 text-emerald-900" size={32} />
                      <div>
                        <h3 className="font-bold text-gray-900">
                          Events Calendar
                        </h3>
                        <p className="text-sm text-gray-600">
                          View upcoming community events and activities
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                    >
                      See Events
                    </Button>
                  </div>
                </div>
              </Link>

              <Link href="/lifestyle/amenities">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <Users className="mr-4 text-emerald-900" size={32} />
                      <div>
                        <h3 className="font-bold text-gray-900">
                          Amenities Guide
                        </h3>
                        <p className="text-sm text-gray-600">
                          Hours, rules, and details for all community amenities
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/residents"
        name="Residents | Cadence Henderson Community 89011"
        description="Cadence Henderson resident resources. Community info, HOA, amenities for Cadence master-planned community Henderson NV 89011."
        faqs={defaultPageFaqs('Cadence Henderson resident resources')}
        breadcrumbs={[{ name: 'Cadence Henderson residents NV 89011' }]}
        faqHeading="Cadence Henderson residents — questions"
      />
      <Footer />
    </div>
  )
}

