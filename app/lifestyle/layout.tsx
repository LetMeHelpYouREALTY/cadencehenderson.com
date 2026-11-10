import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadence Henderson Community & Amenities | Henderson NV 89011',
  description:
    'Central Park, resident pool, splash pads, Fitness Court, pickleball, trails, and community gatherings in Cadence Henderson NV 89011. Explore with Dr. Jan Duffy.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle' },
  openGraph: {
    title: 'Cadence Henderson Community & Amenities | Henderson NV 89011',
    description:
      '50-acre Central Park, resident pool, splash pads, Fitness Court, Cadence Elementary on-site & trails in Cadence Henderson NV 89011.',
    url: 'https://www.cadencehenderson.com/lifestyle',
  },
}

export default function LifestyleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
