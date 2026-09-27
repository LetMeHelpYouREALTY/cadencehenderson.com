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
      { source: '/black-friday', destination: '/incentives', permanent: false },
      { source: '/lifestyle/shopping-entertainment', destination: '/lifestyle/shopping', permanent: false },
      {
        source: '/lifestyle/shopping-entertainment/:slug',
        destination: '/lifestyle/shopping/:slug',
        permanent: false,
      },
      { source: '/cadence-animal-hospital', destination: '/lifestyle/animal-hospital', permanent: false },
    ]
  },
  async rewrites() {
    return [
      { source: '/beazer', destination: '/communities/beazer' },
      { source: '/beazer/:community', destination: '/communities/beazer/:community' },
      { source: '/century-communities', destination: '/communities/century-communities' },
      {
        source: '/century-communities/:community',
        destination: '/communities/century-communities/:community',
      },
      { source: '/dr-horton', destination: '/communities/dr-horton' },
      { source: '/dr-horton/:community', destination: '/communities/dr-horton/:community' },
      { source: '/lennar', destination: '/communities/lennar' },
      { source: '/lennar/:community', destination: '/communities/lennar/:community' },
      { source: '/richmond-american-homes', destination: '/communities/richmond-american-homes' },
      {
        source: '/richmond-american-homes/:community',
        destination: '/communities/richmond-american-homes/:community',
      },
      { source: '/storybook-homes', destination: '/communities/storybook-homes' },
      { source: '/storybook-homes/:community', destination: '/communities/storybook-homes/:community' },
      { source: '/taylorm', destination: '/communities/taylorm' },
      { source: '/taylorm/:community', destination: '/communities/taylorm/:community' },
      { source: '/woodside-homes', destination: '/communities/woodside-homes' },
      { source: '/woodside-homes/:community', destination: '/communities/woodside-homes/:community' },
      { source: '/harmony-homes', destination: '/communities/harmony-homes' },
      { source: '/harmony-homes/:community', destination: '/communities/harmony-homes/:community' },
      { source: '/toll-brothers', destination: '/communities/toll-brothers' },
      { source: '/toll-brothers/:community', destination: '/communities/toll-brothers/:community' },
      {
        source: '/american-homes-4-rent/:community',
        destination: '/communities/american-homes-4-rent/:community',
      },
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com",
              "connect-src 'self' https: https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com",
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
