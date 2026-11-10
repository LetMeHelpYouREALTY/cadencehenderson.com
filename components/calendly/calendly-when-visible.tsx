'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { useCalendly } from './calendly-loader'

type CalendlyWhenVisibleProps = {
  children: ReactNode
  /** When true, load script on mount (for below-fold sections so widget is ready when user scrolls). */
  loadOnMount?: boolean
}

/**
 * Loads Calendly script when the wrapped content enters the viewport (or on mount if loadOnMount).
 * Use around the inline widget so the script loads before initInlineWidget runs.
 */
export function CalendlyWhenVisible({
  children,
  loadOnMount,
}: CalendlyWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { loadCalendly, isLoaded } = useCalendly()

  useEffect(() => {
    if (isLoaded) return
    if (loadOnMount) {
      loadCalendly()
      return
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadCalendly()
      },
      { rootMargin: '100px', threshold: 0 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [loadCalendly, isLoaded, loadOnMount])

  return <div ref={ref}>{children}</div>
}
