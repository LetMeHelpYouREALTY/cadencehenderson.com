'use client'

import dynamic from 'next/dynamic'
import type { ComponentProps } from 'react'

const NearbyAmenityMap = dynamic(
  () =>
    import('@/components/cadence/nearby-amenity-map').then(
      (m) => m.NearbyAmenityMap,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-[420px] md:h-[480px] w-full rounded-lg border border-gray-200 bg-gray-100 animate-pulse"
        aria-label="Loading amenity map"
      />
    ),
  },
)

export function NearbyAmenityMapLazy(
  props: ComponentProps<typeof NearbyAmenityMap>,
) {
  return <NearbyAmenityMap {...props} />
}
