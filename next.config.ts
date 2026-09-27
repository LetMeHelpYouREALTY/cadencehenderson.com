import type { NextConfig } from 'next'

const CLOUDFLARE_IMAGES_HASH =
  process.env.CLOUDFLARE_IMAGES_ACCOUNT_HASH || 'byE6BTe9lNqo21V57n4aPQ'

const REALSCOUT_RENTALS_URL =
  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xODM5Nw=='
const REALSCOUT_BEAZER_HOMES_URL =
  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xODM5OA=='

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: `/${CLOUDFLARE_IMAGES_HASH}/**`,
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cadencenv.com',
        pathname: '/wp-content/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/rentals', destination: REALSCOUT_RENTALS_URL, permanent: false },
      { source: '/rentals/:path*', destination: REALSCOUT_RENTALS_URL, permanent: false },
      { source: '/new-homes/beazer-homes', destination: REALSCOUT_BEAZER_HOMES_URL, permanent: false },
      { source: '/amenities', destination: '/nearby-amenities', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://maps.googleapis.com",
              "connect-src 'self' https: https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://maps.googleapis.com https://places.googleapis.com",
              "frame-src 'self' https: https://calendly.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
              "img-src 'self' data: blob: https:",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
