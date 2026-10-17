import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadence Henderson Community & Amenities | Henderson NV 89011',
  description:
    'Central Park, pools, fitness centers, trails, and community events in Cadence Henderson NV 89011. Explore the Cadence lifestyle with Dr. Jan Duffy.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle' },
  openGraph: {
    title: 'Cadence Henderson Community & Amenities | Henderson NV 89011',
    description: '50-acre Central Park, resort pools, fitness centers, Cadence Elementary on-site & trails in Cadence Henderson NV 89011.',
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
