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
import { loadGoogleMaps, mapsAuthFailed } from '@/lib/google-maps-loader'
import { searchCategory } from '@/lib/nearby-amenities-places-search'
import { cn } from '@/lib/utils'

type NearbyAmenityMapProps = {
  heightClassName?: string
  showStaticList?: boolean
  initialCategory?: AmenityCategoryId
  className?: string
}

type MapLoadState = 'idle' | 'loading' | 'ready' | 'fallback'

type PlaceResult = {
  name: string
  address: string
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
          {place.address ? (
            <p className="text-sm text-gray-600">{place.address}</p>
          ) : null}
          {place.note ? (
            <p className="text-sm text-gray-700 mt-1">{place.note}</p>
          ) : null}
          {place.address ? (
            <a
              href={getDirectionsUrl(place.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-800 hover:underline mt-2 inline-block"
            >
              Directions
            </a>
          ) : (
            <a
              href={place.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-800 hover:underline mt-2 inline-block"
            >
              Official site
            </a>
          )}
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
  const [showCuratedForCategory, setShowCuratedForCategory] = useState(false)
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(initialCategory)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim()
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim()

  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<Array<{ map?: google.maps.Map | null; setMap?: (map: google.maps.Map | null) => void }>>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const communityMarkerAddedRef = useRef(false)

  const enterFallback = useCallback(() => {
    mapInstanceRef.current = null
    communityMarkerAddedRef.current = false
    markersRef.current.forEach((m) => {
      if ('map' in m && m.map) m.map = null
      else if ('setMap' in m && typeof m.setMap === 'function') m.setMap(null)
    })
    markersRef.current = []
    setStatusMessage(null)
    setShowCuratedForCategory(true)
    setLoadState('fallback')
  }, [])

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
      setShowCuratedForCategory(false)
      setStatusMessage(`Loading ${category.label.toLowerCase()}…`)

      try {
        const places = await searchCategory(
          COMMUNITY_PLACE.center,
          categoryId,
          category.primaryTypes,
        )

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
          const { lat, lng } = loc.toJSON()
          results.push({
            name,
            address,
            lat,
            lng,
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
                infoWindow.setContent(buildInfoContentNode(item))
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
              infoWindow.setContent(buildInfoContentNode(item))
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
          setStatusMessage(
            `${results.length} ${category.label.toLowerCase()} near Cadence`,
          )
        } else {
          setShowCuratedForCategory(true)
          setStatusMessage(
            `Showing featured ${category.label.toLowerCase()} near Cadence`,
          )
        }
      } catch {
        setShowCuratedForCategory(true)
        setStatusMessage(
          `Showing featured ${getCategoryById(categoryId).label.toLowerCase()} near Cadence`,
        )
      }
    },
    [clearMarkers, mapId],
  )

  useEffect(() => {
    const onAuthFailure = () => enterFallback()
    window.addEventListener('gmaps:auth-failure', onAuthFailure)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
  }, [enterFallback])

  useEffect(() => {
    if (loadState !== 'idle') return
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        if (!apiKey || mapsAuthFailed) {
          setShowCuratedForCategory(true)
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
        if (mapsAuthFailed) {
          if (!cancelled) enterFallback()
          return
        }
        await loadGoogleMaps(apiKey!)
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
        if (!cancelled) enterFallback()
      }
    }

    void initMap()
    return () => {
      cancelled = true
    }
  }, [loadState, apiKey, mapId, enterFallback])

  useEffect(() => {
    if (loadState !== 'ready') return
    void searchNearby(activeCategory)
  }, [activeCategory, loadState, searchNearby])

  const embedUrl = getMapsEmbedUrl()
  const showList =
    showStaticList &&
    (loadState === 'fallback' || (loadState === 'ready' && showCuratedForCategory))

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

      {statusMessage && (loadState === 'ready' || loadState === 'fallback') ? (
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

      {showList ? (
        <div className="rounded-lg border border-gray-200 p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Featured {getCategoryById(activeCategory).label} near Cadence
          </h3>
          <StaticAmenityList categoryId={activeCategory} />
        </div>
      ) : null}
    </div>
  )
}

function buildInfoContentNode(item: PlaceResult): HTMLElement {
  const wrap = document.createElement('div')
  wrap.style.maxWidth = '240px'
  wrap.style.fontFamily = 'system-ui, sans-serif'

  const title = document.createElement('strong')
  title.textContent = item.name
  wrap.appendChild(title)

  const addr = document.createElement('p')
  addr.style.margin = '4px 0'
  addr.style.fontSize = '13px'
  addr.style.color = '#444'
  addr.textContent = item.address
  wrap.appendChild(addr)

  const link = document.createElement('a')
  link.href = getDirectionsUrl(item.directionsQuery)
  link.target = '_blank'
  link.rel = 'noopener'
  link.style.fontSize = '13px'
  link.style.color = '#1e3a8a'
  link.textContent = 'Directions'
  wrap.appendChild(link)

  return wrap
}

async function addCommunityMarker(
  map: google.maps.Map,
  infoWindow: google.maps.InfoWindow,
  useAdvanced: boolean,
  mapId?: string,
): Promise<void> {
  const content = buildCommunityInfoNode()

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

function buildCommunityInfoNode(): HTMLElement {
  const wrap = document.createElement('div')
  wrap.style.maxWidth = '220px'
  wrap.style.fontFamily = 'system-ui, sans-serif'

  const title = document.createElement('strong')
  title.textContent = COMMUNITY_PLACE.name
  wrap.appendChild(title)

  const addr = document.createElement('p')
  addr.style.margin = '4px 0'
  addr.style.fontSize = '13px'
  addr.textContent = COMMUNITY_PLACE.welcomeCenterAddress
  wrap.appendChild(addr)

  const link = document.createElement('a')
  link.href = getDirectionsUrl(COMMUNITY_PLACE.welcomeCenterAddress)
  link.target = '_blank'
  link.rel = 'noopener'
  link.style.fontSize = '13px'
  link.style.color = '#1e3a8a'
  link.textContent = 'Directions'
  wrap.appendChild(link)

  return wrap
}
