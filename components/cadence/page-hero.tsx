import type { LucideIcon } from 'lucide-react'
import { SiteImage } from '@/components/cadence/site-image'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

type PageHeroProps = {
  title: React.ReactNode
  imageSrc: string
  imageAlt: string
  subtitle?: React.ReactNode
  icon?: LucideIcon
  children?: React.ReactNode
}

/**
 * H1 hero with Cloudflare Images photo (git fallback). Used on inner pages.
 * Geo kicker + `.aeo-lead` support AEO speakable selectors.
 */
export function PageHero({
  title,
  imageSrc,
  imageAlt,
  subtitle,
  icon: Icon,
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[420px] overflow-hidden bg-black py-28 md:py-36"
      aria-labelledby="page-hero-heading"
    >
      <SiteImage
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="opacity-80"
      />
      <div
        className="absolute inset-0 bg-black/35"
        aria-hidden
      />
      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          {Icon ? <Icon size={40} className="mx-auto mb-8 opacity-80" aria-hidden /> : null}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
            Cadence Henderson NV {CONTACT_INFO.address.zip} · {CONTACT_INFO.phone}
          </p>
          <h1 id="page-hero-heading" className="mb-6 text-4xl md:text-5xl font-extralight tracking-[0.08em]">
            {title}
          </h1>
          {subtitle ? (
            <div className="aeo-lead mb-10 text-lg font-light text-white/90" data-speakable>
              {subtitle}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  )
}
