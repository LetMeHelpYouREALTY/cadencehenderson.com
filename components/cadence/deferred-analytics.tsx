'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

/**
 * Defer GTM + Facebook until after LCP: first user interaction or idle timeout.
 * Keeps third-party JS off the mobile LCP/TBT path measured by PageSpeed.
 */
export function DeferredAnalytics() {
  const [ready, setReady] = useState(false)
  const gtagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

  useEffect(() => {
    if (!gtagId && !pixelId) return
    let done = false
    const arm = () => {
      if (done) return
      done = true
      setReady(true)
      cleanup()
    }
    const onInteract = () => arm()
    const idleTimer = window.setTimeout(arm, 6000)
    const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const
    for (const ev of events) {
      window.addEventListener(ev, onInteract, { once: true, passive: true })
    }
    const cleanup = () => {
      window.clearTimeout(idleTimer)
      for (const ev of events) {
        window.removeEventListener(ev, onInteract)
      }
    }
    return cleanup
  }, [gtagId, pixelId])

  if (!ready) return null

  return (
    <>
      {gtagId ? (
        <>
          <Script
            id="google-tag"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            strategy="afterInteractive"
          />
          <Script id="google-tag-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtagId}');
            `}
          </Script>
        </>
      ) : null}
      {pixelId ? (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
    </>
  )
}
