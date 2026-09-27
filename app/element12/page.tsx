import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { VillagePageView, villageMetadata } from '@/components/cadence/village-page'
import { getCommunityByPath } from '@/lib/cadence-nv-catalog'

const village = getCommunityByPath('/element12')

export const metadata: Metadata = village
  ? villageMetadata(village)
  : { title: 'Element 12 | Cadence Henderson' }

export default function Element12Page() {
  if (!village) notFound()
  return <VillagePageView village={village} />
}
