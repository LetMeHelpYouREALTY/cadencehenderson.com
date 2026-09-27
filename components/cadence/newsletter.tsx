'use client'

import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { Calendar } from 'lucide-react'

const NEWSLETTER_WIDGET_STYLE: React.CSSProperties = {
  minWidth: 320,
  height: 600,
}

export function Newsletter() {
  return (
    <section className="py-24 bg-cadence-ink text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-white/30 mb-8">
              <Calendar size={28} className="text-white" />
            </div>
            <h2 className="text-4xl font-extralight tracking-[0.06em] mb-6">
              Schedule Your Cadence Consultation
            </h2>
            <p className="text-lg font-light text-white/85 mb-8">
              Book a 15-minute call with Dr. Jan Duffy. Get personalized
              guidance, schedule a tour, or learn about available homes in
              Cadence Henderson.
            </p>
          </div>
          <div className="bg-white border border-white/20 p-4 min-h-[600px]">
            <CalendlyWhenVisible>
              <CalendlyInlineWidget
                style={NEWSLETTER_WIDGET_STYLE}
                className="w-full"
              />
            </CalendlyWhenVisible>
          </div>
        </div>
      </div>
    </section>
  )
}
