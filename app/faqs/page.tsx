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
import { NapStrip } from '@/components/cadence/nap-strip'
import { FAQS_PAGE_CATEGORIES } from '@/lib/faqs-page-data'

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

      <NapStrip />

      <section className="border-b border-neutral-100 py-8">
        <p
          className="aeo-lead container mx-auto max-w-3xl px-4 text-center font-light text-neutral-600"
          data-speakable
        >
          Answers about Cadence Henderson builders, schools, amenities, and buying new construction in
          Henderson NV 89011. For a personal answer, call Dr. Jan Duffy at {CONTACT_INFO.phone}.
        </p>
      </section>

      <RealScoutOfficeListings />

      <PageBodyPhoto
        src={cfImage(SITE_IMAGES.sections.faqs, 'hero')}
        alt="Answers about buying new homes in Cadence Henderson NV 89011"
      />


      {/* FAQs Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {FAQS_PAGE_CATEGORIES.map((category, catIndex) => (
              <div key={category.category} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-purple-900 pb-3">
                  {category.heading}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const key = `${catIndex}-${qIndex}`
                    const isOpen = openIndex === key
                    return (
                      <div
                        key={faq.question}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:border-purple-900 transition-colors"
                      >
                        <button
                          onClick={() => toggleQuestion(catIndex, qIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {faq.question}
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
                              {faq.answer}
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

