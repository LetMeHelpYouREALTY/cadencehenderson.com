'use client'

import Script from 'next/script'

/**
 * Loads Calendly widget.js, polls for window.Calendly, then dispatches
 * calendly-loaded so inline widgets and click-to-open popups work.
 * No floating badge — quiet luxury UI does not use aggressive pop-ups.
 */
export function CalendlyScriptLoader() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window === 'undefined') return
        const fire = () => window.dispatchEvent(new CustomEvent('calendly-loaded'))
        if (window.Calendly) {
          fire()
          return
        }
        let attempts = 0
        const maxAttempts = 50
        const interval = setInterval(() => {
          attempts++
          if (window.Calendly) {
            clearInterval(interval)
            fire()
            return
          }
          if (attempts >= maxAttempts) {
            clearInterval(interval)
            fire()
          }
        }, 150)
      }}
    />
  )
}
