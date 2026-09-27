import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadence Henderson Community & Amenities | Henderson NV 89011',
  description:
    '50-acre Central Park, resort pools, fitness centers, Cadence Elementary on-site & 30+ miles of trails. Discover the Cadence Henderson lifestyle in Henderson NV 89011.',
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
