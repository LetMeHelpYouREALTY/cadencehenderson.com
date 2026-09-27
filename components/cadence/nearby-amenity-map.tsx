'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  AMENITY_CATEGORIES,
  COMMUNITY_PLACE,
  type AmenityCategoryId,
  getCategoryById,
  getDirectionsUrl,
  getMapsEmbedUrl,
  getStaticPlacesForCategory,
} from '@/lib/nearby-amenities-config'
import { cn } from '@/lib/utils'

type NearbyAmenityMapProps = {
  /** Tailwind height class — map container reserves this height to limit CLS */
  heightClassName?: string
  /** Show curated list beside/below map when API unavailable */
  showStaticList?: boolean
  initialCategory?: AmenityCategoryId
  className?: string
}

type MapLoadState = 'idle' | 'loading' | 'ready' | 'fallback'

let mapsScriptPromise: Promise<void> | null = null

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'))
  if (typeof window.google?.maps?.importLibrary === 'function') {
    return Promise.resolve()
  }
  if (mapsScriptPromise) return mapsScriptPromise

  mapsScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(
      'script[data-nearby-amenity-maps]',
    ) as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('maps script error')))
      return
    }

    const params = new URLSearchParams({
      key: apiKey,
      v: 'weekly',
      libraries: 'places,marker',
      loading: 'async',
    })

    const script = document.createElement('script')
    script.dataset.nearbyAmenityMaps = 'true'
    script.async = true
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`
    script.onload = () => resolve()
    script.onerror = () => {
      mapsScriptPromise = null
      reject(new Error('Failed to load Google Maps'))
    }
    document.head.appendChild(script)
  })

  return mapsScriptPromise
}

type PlaceResult = {
  name: string
  address: string
  rating?: number
  lat: number
  lng: number
  directionsQuery: string
}

function StaticAmenityList({ categoryId }: { categoryId: AmenityCategoryId }) {
  const places = getStaticPlacesForCategory(categoryId)
  if (places.length === 0) {
    return (
      <p className="text-sm text-gray-600">
        Explore dining, shopping, healthcare, and recreation around Cadence Henderson
        using the map filters when the interactive map is available.
      </p>
    )
  }
  return (
    <ul className="space-y-3" aria-label={`Featured ${getCategoryById(categoryId).label} near Cadence`}>
      {places.map((place) => (
        <li key={place.name} className="rounded-md border border-gray-200 bg-gray-50 p-3">
          <p className="font-medium text-gray-900">{place.name}</p>
          <p className="text-sm text-gray-600">{place.address}</p>
          {place.note ? (
            <p className="text-sm text-gray-700 mt-1">{place.note}</p>
          ) : null}
          <a
            href={getDirectionsUrl(place.address)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-800 hover:underline mt-2 inline-block"
          >
            Directions
          </a>
        </li>
      ))}
    </ul>
  )
}

export function NearbyAmenityMap({
  heightClassName = 'h-[420px] md:h-[480px]',
  showStaticList = true,
  initialCategory = 'parks',
  className,
}: NearbyAmenityMapProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [loadState, setLoadState] = useState<MapLoadState>('idle')
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(initialCategory)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim()
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim()

  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<Array<google.maps.Marker | google.maps.AdvancedMarkerElement>>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const communityMarkerAddedRef = useRef(false)

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => {
      if ('map' in m && m.map) m.map = null
      else if ('setMap' in m && typeof m.setMap === 'function') m.setMap(null)
    })
    markersRef.current = []
  }, [])

  const searchNearby = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const map = mapInstanceRef.current
      if (!map || !window.google?.maps) return

      const category = getCategoryById(categoryId)
      clearMarkers()
      setStatusMessage(`Loading ${category.label.toLowerCase()}…`)

      try {
        const placesLib = (await google.maps.importLibrary(
          'places',
        )) as google.maps.PlacesLibrary
        const { Place } = placesLib

        const request: google.maps.places.SearchNearbyRequest = {
          fields: [
            'displayName',
            'location',
            'formattedAddress',
            'rating',
            'googleMapsURI',
          ],
          locationRestriction: {
            center: COMMUNITY_PLACE.center,
            radius: 8000,
          },
          includedPrimaryTypes: category.primaryTypes,
          maxResultCount: 18,
        }

        const { places } = await Place.searchNearby(request)
        const results: PlaceResult[] = []
        for (const place of places) {
          const loc = place.location
          if (!loc) continue
          const rawName = place.displayName as string | { text?: string } | undefined
          const name =
            typeof rawName === 'string'
              ? rawName
              : rawName?.text ?? 'Place'
          const address = place.formattedAddress ?? name
          results.push({
            name,
            address,
            rating: place.rating ?? undefined,
            lat: loc.lat(),
            lng: loc.lng(),
            directionsQuery: address,
          })
        }

        if (!infoWindowRef.current) {
          infoWindowRef.current = new google.maps.InfoWindow()
        }
        const infoWindow = infoWindowRef.current

        const bounds = new google.maps.LatLngBounds()
        bounds.extend(COMMUNITY_PLACE.center)

        let useAdvanced = Boolean(mapId)
        if (useAdvanced) {
          try {
            const markerLib = (await google.maps.importLibrary(
              'marker',
            )) as google.maps.MarkerLibrary
            const { AdvancedMarkerElement } = markerLib

            for (const item of results) {
              const position = { lat: item.lat, lng: item.lng }
              bounds.extend(position)
              const marker = new AdvancedMarkerElement({
                map,
                position,
                title: item.name,
              })
              marker.addListener('click', () => {
                infoWindow.setContent(buildInfoContent(item))
                infoWindow.open({ map, anchor: marker })
              })
              markersRef.current.push(marker)
            }
          } catch {
            useAdvanced = false
            clearMarkers()
          }
        }

        if (!useAdvanced) {
          for (const item of results) {
            const position = { lat: item.lat, lng: item.lng }
            bounds.extend(position)
            const marker = new google.maps.Marker({
              map,
              position,
              title: item.name,
            })
            marker.addListener('click', () => {
              infoWindow.setContent(buildInfoContent(item))
              infoWindow.open({ map, anchor: marker })
            })
            markersRef.current.push(marker)
          }
        }

        if (!communityMarkerAddedRef.current) {
          await addCommunityMarker(map, infoWindow, useAdvanced, mapId)
          communityMarkerAddedRef.current = true
        }

        if (results.length > 0) {
          map.fitBounds(bounds, 48)
        }
        setStatusMessage(
          results.length > 0
            ? `${results.length} ${category.label.toLowerCase()} near Cadence`
            : `No ${category.label.toLowerCase()} found in this radius — try another filter.`,
        )
      } catch {
        setStatusMessage(null)
        setLoadState('fallback')
      }
    },
    [clearMarkers, mapId],
  )

  useEffect(() => {
    if (loadState !== 'idle') return
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        if (!apiKey) {
          setLoadState('fallback')
          return
        }
        setLoadState('loading')
      },
      { rootMargin: '120px', threshold: 0.01 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [apiKey, loadState])

  useEffect(() => {
    if (loadState !== 'loading' || !apiKey) return
    let cancelled = false

    async function initMap() {
      try {
        await loadGoogleMapsScript(apiKey!)
        if (cancelled || !mapContainerRef.current) return

        const { Map } = (await google.maps.importLibrary(
          'maps',
        )) as google.maps.MapsLibrary

        const map = new Map(mapContainerRef.current, {
          center: COMMUNITY_PLACE.center,
          zoom: 14,
          mapId: mapId || undefined,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        })
        mapInstanceRef.current = map
        if (!cancelled) setLoadState('ready')
      } catch {
        if (!cancelled) setLoadState('fallback')
      }
    }

    void initMap()
    return () => {
      cancelled = true
    }
  }, [loadState, apiKey, mapId])

  useEffect(() => {
    if (loadState !== 'ready') return
    void searchNearby(activeCategory)
  }, [activeCategory, loadState, searchNearby])

  const embedUrl = getMapsEmbedUrl()

  return (
    <div ref={sectionRef} className={cn('space-y-4', className)}>
      <div
        role="tablist"
        aria-label="Filter nearby amenities around Cadence Henderson"
        className="flex flex-wrap gap-2"
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = cat.id === activeCategory
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={cat.ariaLabel}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'rounded-full px-3 py-1.5 text-sm font-medium border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800',
                selected
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-white text-gray-800 border-gray-300 hover:border-blue-700',
              )}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {statusMessage && loadState === 'ready' ? (
        <p className="text-sm text-gray-600" aria-live="polite">
          {statusMessage}
        </p>
      ) : null}

      <div
        className={cn(
          'relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm',
          heightClassName,
        )}
      >
        {loadState === 'fallback' ? (
          <iframe
            title="Map of Cadence Henderson Nevada and nearby amenities"
            src={embedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div
            ref={mapContainerRef}
            className="absolute inset-0 h-full w-full"
            aria-label="Interactive Google Map of amenities near Cadence Henderson"
            role="application"
          />
        )}
        {loadState === 'loading' ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/90 text-gray-700 text-sm">
            Loading map…
          </div>
        ) : null}
      </div>

      {loadState === 'fallback' && showStaticList ? (
        <div className="rounded-lg border border-gray-200 p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Featured {getCategoryById(activeCategory).label} near Cadence
          </h3>
          <StaticAmenityList categoryId={activeCategory} />
          <p className="text-xs text-gray-500 mt-4">
            Set{' '}
            <code className="text-gray-700">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code>{' '}
            in Vercel for the full interactive amenity map with live Places results.
          </p>
        </div>
      ) : null}
    </div>
  )
}

function buildInfoContent(item: PlaceResult): string {
  const ratingLine =
    item.rating !== undefined
      ? `<p style="margin:4px 0;font-size:13px;">Rating: ${item.rating.toFixed(1)}</p>`
      : ''
  const directions = getDirectionsUrl(item.directionsQuery)
  return `<div style="max-width:240px;font-family:system-ui,sans-serif;">
    <strong>${escapeHtml(item.name)}</strong>
    ${ratingLine}
    <p style="margin:4px 0;font-size:13px;color:#444;">${escapeHtml(item.address)}</p>
    <a href="${directions}" target="_blank" rel="noopener" style="font-size:13px;color:#1e3a8a;">Directions</a>
  </div>`
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function addCommunityMarker(
  map: google.maps.Map,
  infoWindow: google.maps.InfoWindow,
  useAdvanced: boolean,
  mapId?: string,
): Promise<void> {
  const content = `<div style="max-width:220px;font-family:system-ui,sans-serif;">
    <strong>${escapeHtml(COMMUNITY_PLACE.name)}</strong>
    <p style="margin:4px 0;font-size:13px;">${escapeHtml(COMMUNITY_PLACE.welcomeCenterAddress)}</p>
    <a href="${getDirectionsUrl(COMMUNITY_PLACE.welcomeCenterAddress)}" target="_blank" rel="noopener" style="font-size:13px;color:#1e3a8a;">Directions</a>
  </div>`

  if (useAdvanced && mapId) {
    try {
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary
      const marker = new AdvancedMarkerElement({
        map,
        position: COMMUNITY_PLACE.center,
        title: COMMUNITY_PLACE.name,
      })
      marker.addListener('click', () => {
        infoWindow.setContent(content)
        infoWindow.open({ map, anchor: marker })
      })
      return
    } catch {
      /* fall through */
    }
  }

  const marker = new google.maps.Marker({
    map,
    position: COMMUNITY_PLACE.center,
    title: COMMUNITY_PLACE.name,
    zIndex: 1000,
  })
  marker.addListener('click', () => {
    infoWindow.setContent(content)
    infoWindow.open({ map, anchor: marker })
  })
}
