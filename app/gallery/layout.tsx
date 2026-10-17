import type { Metadata } from 'next'
import { PageGraphSchema } from '@/components/schema/page-graph'
import { defaultPageFaqs } from '@/lib/page-aeo'

const GALLERY_TITLE = 'Photo Gallery | Cadence Henderson 89011'
const GALLERY_DESCRIPTION =
  'Cadence Henderson gallery: Central Park, amenities, homes, community. Cadence master-planned community Henderson NV 89011.'

export const metadata: Metadata = {
  title: GALLERY_TITLE,
  description: GALLERY_DESCRIPTION,
  alternates: { canonical: 'https://www.cadencehenderson.com/gallery' },
  openGraph: {
    title: GALLERY_TITLE,
    description: GALLERY_DESCRIPTION,
    url: 'https://www.cadencehenderson.com/gallery',
  },
}

export default function GalleryLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <PageGraphSchema
        path="/gallery"
        name={GALLERY_TITLE}
        description={GALLERY_DESCRIPTION}
        faqs={defaultPageFaqs('Cadence Henderson photo gallery')}
        breadcrumbs={[{ name: 'Cadence Henderson gallery NV 89011' }]}
      />
      {children}
    </>
  )
}
