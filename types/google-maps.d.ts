/** Minimal Google Maps JS API typings for amenity map (Places API New). */
export {}

declare global {
  namespace google.maps {
    interface LatLngLiteral {
      lat: number
      lng: number
    }

    class LatLngBounds {
      constructor()
      extend(point: LatLngLiteral): LatLngBounds
    }

    class InfoWindow {
      setContent(content: string): void
      open(options: { map: Map; anchor?: unknown }): void
    }

    class Marker {
      constructor(options: {
        map?: Map
        position: LatLngLiteral
        title?: string
        zIndex?: number
      })
      addListener(event: string, handler: () => void): void
      setMap(map: Map | null): void
    }

    interface MapOptions {
      center: LatLngLiteral
      zoom: number
      mapId?: string
      mapTypeControl?: boolean
      streetViewControl?: boolean
      fullscreenControl?: boolean
    }

    class Map {
      constructor(el: HTMLElement, opts: MapOptions)
      fitBounds(bounds: LatLngBounds, padding?: number): void
    }

    interface MapsLibrary {
      Map: typeof Map
    }

    interface MarkerLibrary {
      AdvancedMarkerElement: new (options: {
        map?: Map
        position: LatLngLiteral
        title?: string
      }) => AdvancedMarkerElement
    }

    class AdvancedMarkerElement {
      map: Map | null
      addListener(event: string, handler: () => void): void
    }

    namespace places {
      interface SearchNearbyRequest {
        fields: string[]
        locationRestriction: {
          center: LatLngLiteral
          radius: number
        }
        includedPrimaryTypes: string[]
        maxResultCount: number
      }

      class Place {
        static searchNearby(
          request: SearchNearbyRequest,
        ): Promise<{ places: PlaceInstance[] }>
      }

      interface PlaceInstance {
        displayName?: string
        formattedAddress?: string
        rating?: number
        googleMapsURI?: string
        location?: { lat(): number; lng(): number }
      }
    }

    interface PlacesLibrary {
      Place: typeof places.Place
    }

    function importLibrary(
      name: 'maps' | 'places' | 'marker',
    ): Promise<MapsLibrary | PlacesLibrary | MarkerLibrary>
  }

  interface Window {
    google?: {
      maps: typeof google.maps
    }
  }
}
