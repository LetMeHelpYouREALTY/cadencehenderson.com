'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const RealScoutOfficeListings = dynamic(
  () =>
    import('@/components/idx/realscout-office-listings').then(
      (mod) => mod.RealScoutOfficeListings,
    ),
  {
    ssr: false,
    loading: () => (
      <section className="w-full bg-white py-12" aria-hidden>
        <div className="container mx-auto px-4">
          <div className="h-40 animate-pulse rounded-sm bg-neutral-100" />
        </div>
      </section>
    ),
  },
)

/**
 * Mounts RealScout office listings only after the section nears the viewport
 * so the ~600KB widget script stays off the LCP path.
 */
export function DeferredRealScoutListings() {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || show) return

    if (typeof IntersectionObserver === 'undefined') {
      setShow(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [show])

  return <div ref={ref}>{show ? <RealScoutOfficeListings /> : null}</div>
}
