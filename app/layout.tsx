import type { Metadata } from 'next'
import { CalendlyProvider } from '../components/calendly/calendly-loader'
import { SkipToContent } from '../components/cadence/skip-to-content'
import { DeferredAnalytics } from '../components/cadence/deferred-analytics'
import { RealScoutAutoLoader } from '../components/cadence/realscout-auto-loader'
import { Sora } from 'next/font/google'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { ThemeProvider } from 'next-themes'
import { ScrollToTop } from '../components/cadence/scroll-to-top'
import { LocalBusinessSchema } from '../components/schema/local-business'
import { WebsiteSchema } from '../components/schema/website-schema'
import { GeoMeta } from '../components/schema/geo-meta'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import './globals.css'

const HERO_IMAGE = cfImage(SITE_IMAGES.hero.homepage, 'hero')
/** Prefer mobile-sized LCP preload when serving git WebP (PageSpeed mobile). */
const HERO_PRELOAD =
  HERO_IMAGE.startsWith('/images/')
    ? '/images/hero/homepage-828.webp'
    : HERO_IMAGE
/** Crawlers do not run the JS git fallback — keep a stable git URL for OG/schema. */
const OG_IMAGE = '/og-image.jpg'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  display: 'swap',
})

const DEFAULT_TITLE = 'Cadence Henderson New Homes | Dr. Jan Duffy'
const DEFAULT_DESCRIPTION =
  `Free buyer representation for new homes in Cadence Henderson NV 89011. 9 builders, $300K–$700K+. Builder pays the fee. Call Dr. Jan Duffy ${CONTACT_INFO.phone}.`

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL('https://www.cadencehenderson.com'),
  openGraph: {
    siteName: CONTACT_INFO.siteName,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: 'https://www.cadencehenderson.com',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'New homes for sale in Cadence Henderson 89011 Henderson NV',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
    creator: '@DrJanDuffy',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const heroType = HERO_PRELOAD.endsWith('.webp')
    ? 'image/webp'
    : HERO_PRELOAD.endsWith('.jpg') || HERO_PRELOAD.endsWith('.jpeg')
      ? 'image/jpeg'
      : undefined

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
        <WebsiteSchema />
        <GeoMeta />
        {/* Preconnect only when Cloudflare Images are live; otherwise LCP is git/static */}
        {process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_LIVE === '1' ? (
          <link rel="preconnect" href="https://imagedelivery.net" />
        ) : null}
        {/* LCP image preload — mobile-sized git WebP until CF Images LIVE */}
        <link
          rel="preload"
          as="image"
          href={HERO_PRELOAD}
          {...(heroType ? { type: heroType } : {})}
          {...(HERO_IMAGE.startsWith('/images/')
            ? {
                imageSrcSet:
                  '/images/hero/homepage-640.webp 640w, /images/hero/homepage-828.webp 828w, /images/hero/homepage.webp 1280w',
                imageSizes: '100vw',
              }
            : {})}
        />
      </head>
      <body className={`${sora.variable} antialiased font-sans`}>
        <DeferredAnalytics />
        <RealScoutAutoLoader />
        <CalendlyProvider>
          <SkipToContent />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            storageKey="theme"
          >
            {children}
            <ScrollToTop />
          </ThemeProvider>
        </CalendlyProvider>
      </body>
    </html>
  )
}
