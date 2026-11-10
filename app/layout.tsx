import type { Metadata } from 'next'
import Script from 'next/script'
import { CalendlyProvider } from '../components/calendly/calendly-loader'
import { SkipToContent } from '../components/cadence/skip-to-content'
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
  const heroType = HERO_IMAGE.endsWith('.webp')
    ? 'image/webp'
    : HERO_IMAGE.endsWith('.jpg') || HERO_IMAGE.endsWith('.jpeg')
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
        {/* LCP image preload — git WebP until NEXT_PUBLIC_CLOUDFLARE_IMAGES_LIVE=1 */}
        <link
          rel="preload"
          as="image"
          href={HERO_IMAGE}
          {...(heroType ? { type: heroType } : {})}
        />
      </head>
      <body className={`${sora.variable} antialiased font-sans`}>
        {/* RealScout UMD stays lazy; hero no longer mounts the widget above the fold */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
        />
        {process.env.NEXT_PUBLIC_REALSCOUT_EMBED_ID ? (
          <Script
            src={`https://em.realscout.com/embed/${process.env.NEXT_PUBLIC_REALSCOUT_EMBED_ID}.js`}
            strategy="lazyOnload"
          />
        ) : null}
        {process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ? (
          <>
            <Script
              id="google-tag"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-tag-config" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}');
              `}
            </Script>
          </>
        ) : null}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ? (
          <Script id="facebook-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        ) : null}
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
