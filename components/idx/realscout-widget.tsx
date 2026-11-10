'use client'

import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * RealScout MLS widget.
 * Requires NEXT_PUBLIC_REALSCOUT_EMBED_ID and script loaded globally in layout.
 * Do not modify without explicit approval (IDX/MLS compliance).
 */
export function RealScoutWidget({
  className,
  embedHtml,
}: {
  className?: string
  embedHtml?: string
}) {
  const embedId = process.env.NEXT_PUBLIC_REALSCOUT_EMBED_ID

  if (!embedId && !embedHtml) {
    return (
      <div
        className={`rounded-lg border border-gray-200 bg-gray-50 p-8 text-center text-gray-600 ${className ?? ''}`}
      >
        <p className="mb-4">Search Henderson homes for sale.</p>
        <a
          href={CONTACT_INFO.realScoutSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-900 px-6 py-3 font-medium text-white hover:bg-blue-800 transition-colors"
        >
          Open Home Search
        </a>
      </div>
    )
  }

  // Use provided embed HTML (from RealScout Customize & Preview) or render default container
  if (embedHtml) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: embedHtml }}
      />
    )
  }

  // Default container; script will hydrate when it loads
  return (
    <div className={className}>
      <div id={`rs-embed-${embedId}`} data-rs-embed-id={embedId} />
      <p className="mt-4 text-xs text-gray-500">
        Listings displayed via MLS. All information deemed reliable but not
        guaranteed. © {new Date().getFullYear()} MLS. Listing attribution
        provided by participating MLS.
      </p>
    </div>
  )
}
