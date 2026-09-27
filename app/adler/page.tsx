import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { VillagePageView, villageMetadata } from '@/components/cadence/village-page'
import { getCommunityByPath } from '@/lib/cadence-nv-catalog'

const village = getCommunityByPath('/adler')

export const metadata: Metadata = village
  ? villageMetadata(village)
  : { title: 'Adler Apartments | Cadence Henderson' }

export default function AdlerPage() {
  if (!village) notFound()
  return <VillagePageView village={village} />
}
