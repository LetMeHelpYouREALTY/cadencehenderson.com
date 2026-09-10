import { PageHero } from '@/components/cadence/page-hero'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import { Heart, Phone, Clock, MapPin, Stethoscope, Syringe } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

const services = [
  {
    name: 'Wellness Exams',
    description: 'Comprehensive health checkups for your pets',
    icon: Stethoscope,
  },
  {
    name: 'Vaccinations',
    description: 'Keep your pets protected with up-to-date immunizations',
    icon: Syringe,
  },
  {
    name: 'Dental Care',
    description: 'Professional dental cleaning and oral health services',
    icon: Heart,
  },
  {
    name: 'Surgery',
    description: 'Safe surgical procedures with experienced veterinarians',
    icon: Heart,
  },
  {
    name: 'Emergency Care',
    description: 'Urgent care services for your pet emergencies',
    icon: Heart,
  },
  {
    name: 'Grooming',
    description: 'Professional grooming services to keep pets looking great',
    icon: Heart,
  },
]

export const metadata: Metadata = {
  title: 'Cadence Animal Hospital – Henderson NV 89011 | Pet Care',
  description:
    'Full-service veterinary care in Cadence Henderson NV 89011. Wellness exams, vaccines, dental, surgery & emergency services. On-site animal hospital for Cadence residents.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/animal-hospital' },
  openGraph: {
    title: 'Cadence Animal Hospital – Henderson NV 89011 | Pet Care',
    description: 'Full-service veterinary care in Cadence Henderson NV 89011. Wellness, vaccines, dental, surgery & emergency services.',
    url: 'https://www.cadencehenderson.com/lifestyle/animal-hospital',
  },
}

export default function AnimalHospitalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Cadence Animal Hospital"
        subtitle="Providing compassionate, quality veterinary care right in your community. Your pet's health and happiness are our top priorities."
        imageSrc={cfImage(SITE_IMAGES.hero.animalHospital, 'hero')}
        imageAlt="Cadence Animal Hospital in Henderson NV 89011"
        icon={Heart}
      >
        <Button
          size="lg"
          className="bg-white text-teal-900 hover:bg-gray-100"
        >
          Schedule Appointment
        </Button>
      </PageHero>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.animalHospital, 'hero')}
        alt="Veterinary clinic near Cadence Henderson NV 89011"
      />


      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Welcome to Your Neighborhood Animal Hospital
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Cadence Animal Hospital is dedicated to providing exceptional
              veterinary care for dogs, cats, and other small animals. Our
              experienced team combines advanced medical knowledge with genuine
              compassion to ensure your pets receive the best possible care.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Conveniently located within the Cadence community, we offer a full
              range of veterinary services from routine wellness exams to
              advanced surgical procedures. We're here to be your partner in
              keeping pets healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.name}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <IconComponent
                    size={48}
                    className="text-teal-900 mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Veterinary care near Cadence Henderson NV 89011
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-teal-900 mr-3 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-gray-900">Location</p>
                      <p className="text-gray-700">
                        Cadence Marketplace
                        <br />
                        Henderson, NV 89052
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-teal-900 mr-3 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-gray-900">Realtor line</p>
                      <a
                        href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                        className="text-teal-900 hover:underline"
                      >
                        {CONTACT_INFO.phone} — Dr. Jan Duffy for Cadence homes
                      </a>
                      <p className="mt-1 text-sm text-gray-600">
                        Confirm current veterinary hours at the hospital. Do not
                        use placeholder numbers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-teal-900 mr-3 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-gray-900">Hours</p>
                      <p className="text-gray-700">
                        Monday - Friday: 8 AM - 6 PM
                        <br />
                        Saturday: 9 AM - 4 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  New Patient?
                </h3>
                <p className="text-gray-700 mb-6">
                  We welcome new patients! Schedule your first appointment and
                  let us become your trusted partner in pet care.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Bring previous medical records
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      List of current medications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Arrive 10 minutes early
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Questions or concerns ready
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-teal-900 hover:bg-teal-800">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Cadence Animal Hospital?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  🏘️ Convenient Location
                </h3>
                <p className="text-gray-700">
                  Right in your neighborhood - no need to travel far for quality
                  pet care.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  👨‍⚕️ Experienced Team
                </h3>
                <p className="text-gray-700">
                  Board-certified veterinarians with years of experience caring
                  for pets.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  💚 Compassionate Care
                </h3>
                <p className="text-gray-700">
                  We treat pets with gentle, consistent attention.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  🔬 Modern Facility
                </h3>
                <p className="text-gray-700">
                  State-of-the-art equipment and technology for accurate
                  diagnosis and treatment.
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
              Ready to Care for Your Pet?
            </h2>
            <p className="text-xl mb-8">
              Schedule an appointment today and experience the difference of
              personalized, compassionate veterinary care.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Button
                  size="lg"
                  className="bg-white text-teal-900 hover:bg-gray-100"
                >
                  <Phone className="mr-2" size={20} />
                  Call Dr. Jan: {CONTACT_INFO.phone}
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-900"
              >
                Request Appointment Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/animal-hospital"
        name="Cadence Animal Hospital – Henderson NV 89011 | Pet Care"
        description="Veterinary care near Cadence Henderson NV 89011. Wellness exams, vaccines, dental, and surgery. Confirm current hospital hours on-site. Dr. Jan Duffy for Cadence homes."
        faqs={defaultPageFaqs('veterinary care near Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Animal hospital near Cadence Henderson NV 89011' },
        ]}
        faqHeading="Cadence Henderson pet care — questions"
      />
      <Footer />
    </div>
  )
}
