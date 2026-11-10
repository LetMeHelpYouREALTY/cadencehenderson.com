'use client'

import { useEffect } from 'react'

const REALSCOUT_SRC =
  'https://em.realscout.com/widgets/realscout-web-components.umd.js'

let loadPromise: Promise<void> | null = null

/** Inject RealScout UMD once — call only when a widget is about to mount. */
export function loadRealScoutScript(): Promise<void> {
  if (typeof document === 'undefined') return Promise.resolve()
  if (loadPromise) return loadPromise

  const existing = document.querySelector(`script[src="${REALSCOUT_SRC}"]`)
  if (existing) {
    loadPromise = Promise.resolve()
    return loadPromise
  }

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = REALSCOUT_SRC
    script.type = 'module'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('RealScout script failed to load'))
    document.body.appendChild(script)
  })
  return loadPromise
}

/** Client hook: ensure RealScout script before rendering widgets. */
export function useRealScoutScript() {
  useEffect(() => {
    void loadRealScoutScript()
  }, [])
}
