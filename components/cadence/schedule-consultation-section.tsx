'use client'

import { useState, useEffect } from 'react'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { SectionPhoto } from '@/components/cadence/section-photo'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { Calendar, Mail, Phone } from 'lucide-react'

/** If the JS widget does not load within this time, show iframe fallback. */
const IFRAME_FALLBACK_MS = 5000

/**
 * Consultation CTA: high-contrast layout, primary "book a call" for home buyers.
 * Calendly on white card for readability; section copy for SEO/AEO/GEO.
 * Uses iframe fallback so the scheduler (https://calendly.com/drjanduffy/15min) always appears.
 */
export function ScheduleConsultationSection() {
  const [calendarReady, setCalendarReady] = useState(false)
  const [showLoadingFallback, setShowLoadingFallback] = useState(true)
  const [showIframeFallback, setShowIframeFallback] = useState(false)

  useEffect(() => {
    const hideLoading = setTimeout(() => setShowLoadingFallback(false), 8000)
    return () => clearTimeout(hideLoading)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => {
      setShowIframeFallback(true)
    }, IFRAME_FALLBACK_MS)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white"
      aria-labelledby="schedule-consultation-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-8 max-w-4xl">
          <SectionPhoto
            src={cfImage(SITE_IMAGES.sections.schedule, 'hero')}
            alt="Schedule a buyer consultation for new homes in Cadence Henderson NV 89011"
            className="rounded-lg"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="schedule-consultation-heading" className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Ready to Buy New Homes at Cadence Henderson?
          </h2>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto">
            Schedule your free 15-minute buyer consultation with Dr. Jan Duffy. New homes Cadence Henderson NV 89011 — builder pays her fee; free to you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 font-semibold shadow-lg"
              asChild
            >
              <CalendlyLink>
                <Calendar className="mr-2" size={20} aria-hidden />
                Schedule your free 15-min call
              </CalendlyLink>
            </Button>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-slate-900 transition-colors"
              aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}
            >
              <Phone size={20} aria-hidden />
              Call {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-slate-900 transition-colors"
              aria-label="Email Dr. Jan Duffy"
            >
              <Mail size={20} aria-hidden />
              Email Dr. Jan
            </a>
          </div>
        </div>
        {/* Calendly on white card so text is readable (no white-on-blue) */}
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden bg-white shadow-xl p-4 md:p-6">
          {showLoadingFallback && !calendarReady && !showIframeFallback && (
            <p className="text-center text-gray-500 py-4 text-sm" aria-live="polite">
              Loading calendar…
            </p>
          )}
          {showIframeFallback && !calendarReady ? (
            <iframe
              title="Schedule a 15-minute call with Dr. Jan Duffy"
              src={`${CONTACT_INFO.calendlyUrl}?embed_domain=www.cadencehenderson.com`}
              width="100%"
              height={630}
              style={{ minWidth: 280, border: 0 }}
              className="rounded-lg overflow-hidden w-full"
            />
          ) : (
            <CalendlyWhenVisible loadOnMount>
              <CalendlyInlineWidget
                className="rounded-lg overflow-hidden w-full"
                style={{ minWidth: 280, height: 630 }}
                onReady={() => setCalendarReady(true)}
              />
            </CalendlyWhenVisible>
          )}
          <p className="text-center text-sm text-gray-600 mt-4">
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline text-blue-900"
            >
              Open scheduler in a new tab
            </a>
            {' '}if the calendar doesn’t load.
          </p>
        </div>
        <p className="text-center text-sm text-white mt-6">
          Dr. Jan Duffy, REALTOR® — Cadence Henderson new home buyer’s agent. License {CONTACT_INFO.licenseNumber}.
        </p>
      </div>
    </section>
  )
}
