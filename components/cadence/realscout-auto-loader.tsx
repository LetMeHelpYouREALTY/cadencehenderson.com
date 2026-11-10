'use client'

import { useEffect } from 'react'
import { loadRealScoutScript } from '@/components/cadence/realscout-script'

const SELECTOR =
  'realscout-office-listings, realscout-simple-search, realscout-advanced-search, realscout-home-value, realscout-your-listings'

/**
 * Loads RealScout UMD only after a widget custom element is present in the DOM.
 * Keeps the ~600KB script off the homepage LCP path until listings mount.
 */
export function RealScoutAutoLoader() {
  useEffect(() => {
    let loading = false
    const ensure = () => {
      if (loading) return
      if (!document.querySelector(SELECTOR)) return
      loading = true
      void loadRealScoutScript()
      observer.disconnect()
    }
    const observer = new MutationObserver(ensure)
    ensure()
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    })
    return () => observer.disconnect()
  }, [])

  return null
}
