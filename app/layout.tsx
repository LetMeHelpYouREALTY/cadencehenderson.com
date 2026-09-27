import type { Metadata } from 'next'
import Script from 'next/script'
import { CalendlyProvider } from '../components/calendly/calendly-loader'
import { CalendlyScriptLoader } from '../components/calendly/calendly-script-loader'
import { CalendlyStyles } from '../components/calendly/calendly-styles'
import { SkipToContent } from '../components/cadence/skip-to-content'
import { Geist, Geist_Mono } from 'next/font/google'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import { ScrollToTop } from '../components/cadence/scroll-to-top'
import { LocalBusinessSchema } from '../components/schema/local-business'
import { FAQPageSchema } from '../components/schema/faq-page'
import { GeoMeta } from '../components/schema/geo-meta'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import './globals.css'

const HERO_IMAGE = cfImage(SITE_IMAGES.hero.homepage, 'hero')
/** Crawlers do not run the JS git fallback — keep a stable git URL for OG/schema. */
const OG_IMAGE = '/og-image.jpg'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
        <FAQPageSchema />
        <GeoMeta />
        {/* Preconnect to critical LCP and third-party origins (max 4) */}
        <link rel="preconnect" href="https://imagedelivery.net" />
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://cadencenv.com" />
        {/* LCP image preload so browser discovers it from initial HTML */}
        <link rel="preload" as="image" href={HERO_IMAGE} />
        {/* Calendly CSS: load for screen to avoid whited-out widget appearance */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
          media="all"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CalendlyScriptLoader />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
        />
        {process.env.NEXT_PUBLIC_REALSCOUT_EMBED_ID && (
          <Script
            src={`https://em.realscout.com/embed/${process.env.NEXT_PUBLIC_REALSCOUT_EMBED_ID}.js`}
            strategy="lazyOnload"
          />
        )}
        <CalendlyStyles />
        <CalendlyProvider>
        <SkipToContent />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <DeployBanner />
          {children}
          <ScrollToTop />
        </ThemeProvider>
        </CalendlyProvider>
      </body>
    </html>
  )
}
