'use client'

import { useEffect } from 'react'

const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css'

/**
 * Loads Calendly widget CSS without blocking initial render.
 * Injects a link with media="print" into head, then sets media="all" after mount.
 */
export function CalendlyStyles() {
  useEffect(() => {
    const existing = document.querySelector(`link[href="${CALENDLY_CSS}"]`)
    if (existing) {
      ;(existing as HTMLLinkElement).media = 'all'
      return
    }
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = CALENDLY_CSS
    link.media = 'print'
    link.onload = () => {
      link.media = 'all'
    }
    document.head.appendChild(link)
  }, [])

  return null
}
