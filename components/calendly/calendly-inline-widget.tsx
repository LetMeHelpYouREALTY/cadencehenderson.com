'use client'

import { useEffect, useRef } from 'react'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

const DEFAULT_STYLE: React.CSSProperties = { minWidth: 320, height: 700 }

export type CalendlyInlineWidgetProps = {
  className?: string
  style?: React.CSSProperties
  /** Called when the Calendly iframe has been inited (so parent can hide loading state). */
  onReady?: () => void
}

/**
 * Renders the Calendly inline widget using the official embed pattern:
 * div.calendly-inline-widget with data-url. The script from layout
 * (assets.calendly.com/assets/external/widget.js) auto-inits these elements.
 */
export function CalendlyInlineWidget({
  className,
  style,
  onReady,
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const onReadyRef = useRef(onReady)
  onReadyRef.current = onReady
  const combinedStyle = style ? { ...DEFAULT_STYLE, ...style } : DEFAULT_STYLE

  useEffect(() => {
    const el = containerRef.current
    if (!el || !onReadyRef.current) return
    const observer = new MutationObserver(() => {
      if (el.querySelector('iframe')) {
        onReadyRef.current?.()
      }
    })
    observer.observe(el, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget bg-slate-50 border border-slate-200 rounded-lg overflow-hidden ${className ?? ''}`.trim()}
      data-url={CONTACT_INFO.calendlyUrl}
      style={combinedStyle}
      aria-label="Schedule a consultation – Calendly"
    />
  )
}
