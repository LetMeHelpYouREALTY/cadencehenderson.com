'use client'

import { PageHero } from '@/components/cadence/page-hero'
import { useState } from 'react'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { ChevronDown, ChevronUp, HelpCircle, Calendar, Phone, Mail } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { PageBodyPhoto } from '@/components/cadence/section-photo'

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Cadence?',
        a: 'Cadence is a master-planned community in Henderson, Nevada, offering new homes from multiple builders, world-class amenities, and a vibrant lifestyle. Located just minutes from the Las Vegas Strip and Lake Mead, Cadence is one of the top 10 best-selling communities in the nation.',
      },
      {
        q: 'Where is Cadence located?',
        a: 'Cadence is located in Henderson, Nevada, at 2450 Paseo Verde Parkway. We are approximately 20 minutes from the Las Vegas Strip, 15 minutes from Harry Reid International Airport, and just minutes from Lake Mead.',
      },
      {
        q: 'What is the price range for homes in Cadence?',
        a: 'Home prices in Cadence range from approximately $300,000 to $650,000, depending on the builder, floor plan, and lot selection. Townhomes, single-family plans, and larger estates are all listed in that spread.',
      },
    ],
  },
  {
    category: 'Homes & Builders',
    questions: [
      {
        q: 'How many builders are in Cadence?',
        a: 'Cadence features 8 award-winning homebuilders: Beazer Homes, Century Communities, D.R. Horton, Lennar, Richmond American Homes, StoryBook Homes, Taylor Morrison, and Woodside Homes. Each builder offers unique floor plans and design options.',
      },
      {
        q: 'Can I tour model homes?',
        a: 'Yes! Model homes are open daily from 10 AM to 6 PM. You can tour multiple builders in one visit to compare floor plans and features. Contact us to schedule a personal tour or visit our Welcome Center.',
      },
      {
        q: 'Are there move-in ready homes available?',
        a: 'Yes, many builders have quick move-in homes available. These homes are either completed or nearing completion and can close in 30-60 days. Check with individual builders for current inventory.',
      },
      {
        q: 'What types of homes are available?',
        a: 'Cadence offers single-family homes, townhomes, and estate homes ranging from 1,500 to 3,500+ square feet with 2-5 bedrooms. Many homes include smart home technology, energy-efficient features, and modern designs.',
      },
    ],
  },
  {
    category: 'Amenities',
    questions: [
      {
        q: 'What amenities are included?',
        a: 'Cadence features a 50-acre Central Park, multiple pools and spas, fitness centers, sports courts, dog parks, playgrounds, walking trails, and clubhouses. Many amenities are free for residents.',
      },
      {
        q: 'Are there HOA fees?',
        a: 'Yes, Cadence has HOA fees that cover maintenance of common areas, amenities, landscaping, and community services. Fees vary by neighborhood. Contact us for specific HOA information.',
      },
      {
        q: 'Can I reserve amenities for private events?',
        a: 'Yes, residents can reserve clubhouses and other amenity spaces for private events through the online resident portal. Some fees may apply.',
      },
    ],
  },
  {
    category: 'Schools',
    questions: [
      {
        q: 'What schools serve Cadence?',
        a: 'Cadence Henderson NV 89011 is served by Clark County School District campuses including Cadence Elementary School (on-site), Henderson-area middle schools, and Green Valley High School. Confirm the attendance zone for a specific address before you buy. Nearby private campuses include The Henderson International School, Faith Lutheran, and The Meadows School.',
      },
      {
        q: 'Is there a school within the community?',
        a: 'Yes. Cadence Elementary School (K–5) sits inside Cadence Henderson NV 89011, so many streets are a short walk or drive to campus. Confirm the zone for your lot.',
      },
    ],
  },
  {
    category: 'Living in Cadence',
    questions: [
      {
        q: 'Are pets allowed?',
        a: 'Yes, pets are welcome in Cadence! We have dedicated dog parks and pet-friendly trails throughout the community. Individual HOAs may have breed or size restrictions.',
      },
      {
        q: 'What internet providers serve Cadence?',
        a: 'Cadence has access to high-speed fiber internet and multiple providers including Cox Communications and CenturyLink. Many homes are smart-home ready.',
      },
      {
        q: 'Is there shopping and dining nearby?',
        a: 'Yes! Cadence Marketplace is within the community, and the Galleria at Sunset mall is just 5 minutes away. You\'ll find grocery stores, restaurants, retail shops, and entertainment options all nearby.',
      },
      {
        q: 'How far is Cadence from the Las Vegas Strip?',
        a: 'Cadence is approximately 20 minutes from the Las Vegas Strip, giving you easy access to world-class entertainment, dining, and shows while enjoying the peace of a residential community.',
      },
    ],
  },
]

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about living in Cadence, our homes, amenities, and community."
        imageSrc={cfImage(SITE_IMAGES.hero.faqs, 'hero')}
        imageAlt="Frequently asked questions about Cadence Henderson NV 89011"
        icon={HelpCircle}
      />

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.faqs, 'hero')}
        alt="Answers about buying new homes in Cadence Henderson NV 89011"
      />


      {/* FAQs Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <div key={category.category} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-purple-900 pb-3">
                  {category.category === 'General'
                    ? 'Cadence Henderson NV 89011 basics'
                    : category.category === 'Homes & Builders'
                      ? 'Cadence Henderson homes and builders'
                      : category.category === 'Amenities'
                        ? 'Cadence Henderson amenities'
                        : category.category === 'Schools'
                          ? 'Campuses serving Cadence Henderson'
                          : 'Living in Cadence Henderson NV 89011'}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const key = `${catIndex}-${qIndex}`
                    const isOpen = openIndex === key
                    return (
                      <div
                        key={qIndex}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:border-purple-900 transition-colors"
                      >
                        <button
                          onClick={() => toggleQuestion(catIndex, qIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {faq.q}
                          </span>
                          {isOpen ? (
                            <ChevronUp
                              size={24}
                              className="text-purple-900 flex-shrink-0"
                            />
                          ) : (
                            <ChevronDown
                              size={24}
                              className="text-purple-900 flex-shrink-0"
                            />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="faq-answer text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
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
                Still Have Questions?
              </h2>
              <p className="text-xl text-white mb-6">
                Schedule a free consultation with Dr. Jan Duffy for personalized answers
                and to schedule a tour of Cadence.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  <Phone size={20} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
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

      <Footer />
    </div>
  )
}

