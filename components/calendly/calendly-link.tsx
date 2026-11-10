'use client'

import * as React from 'react'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { useCalendly } from './calendly-loader'
import { cn } from '@/lib/utils'

type CalendlyLinkProps = {
  children: React.ReactNode
  className?: string
  url?: string
}

/**
 * Anchor that opens the Calendly popup on click. Uses CONTACT_INFO.calendlyUrl
 * by default. Ensures script is loaded (via useCalendly) before opening.
 */
export const CalendlyLink = React.forwardRef<
  HTMLAnchorElement,
  CalendlyLinkProps
>(function CalendlyLink(
  { children, className, url = CONTACT_INFO.calendlyUrl },
  ref,
) {
  const { loadCalendly } = useCalendly()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const openFallback = () => {
      if (typeof window !== 'undefined') {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    }
    loadCalendly()
      .then(() => {
        if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
          window.Calendly.initPopupWidget({ url })
        } else {
          openFallback()
        }
      })
      .catch(openFallback)
  }

  return (
    <a
      ref={ref}
      href={url}
      onClick={handleClick}
      className={cn(className)}
      aria-label="Schedule a consultation with Dr. Jan Duffy"
    >
      {children}
    </a>
  )
})
