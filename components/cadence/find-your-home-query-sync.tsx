'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * Honors WebSite SearchAction URLs: /find-your-home?query=...
 * Scrolls to the home search widget and surfaces the query for users and crawlers.
 */
export function FindYourHomeQuerySync() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')?.trim()

  useEffect(() => {
    if (!query) return
    const el = document.getElementById('home-search')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [query])

  if (!query) return null

  return (
    <div className="border-b border-primary/20 bg-blue-50 py-4">
      <div className="container mx-auto px-4 text-center text-sm font-light text-neutral-800">
        <p>
          Search term: <span className="font-medium text-neutral-900">{query}</span>
          {' — '}
          use the MLS search below or{' '}
          <a
            href={CONTACT_INFO.realScoutSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            open the full home search
          </a>
          .
        </p>
      </div>
    </div>
  )
}
