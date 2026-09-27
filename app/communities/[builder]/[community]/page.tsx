import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { VillagePageView, villageMetadata } from '@/components/cadence/village-page'
import { CADENCE_VILLAGES, getVillage } from '@/lib/cadence-nv-catalog'

type PageProps = {
  params: Promise<{ builder: string; community: string }>
}

export async function generateStaticParams() {
  return CADENCE_VILLAGES.map((village) => ({
    builder: village.builderSlug,
    community: village.communitySlug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { builder, community } = await params
  const village = getVillage(builder, community)
  if (!village) return { title: 'Community not found' }
  return villageMetadata(village)
}

export default async function CommunityVillagePage({ params }: PageProps) {
  const { builder, community } = await params
  const village = getVillage(builder, community)
  if (!village) notFound()
  return <VillagePageView village={village} />
}
