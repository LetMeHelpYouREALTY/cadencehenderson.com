'use client'

import Script from 'next/script'

/**
 * Alternate Calendly script loader. Does not initialize a floating badge.
 */
export function CalendlyScripts() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
    />
  )
}
