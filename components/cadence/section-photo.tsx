'use client'

import { SiteImage } from '@/components/cadence/site-image'

type SectionPhotoProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/**
 * Content-section photo band. Cloudflare primary via SiteImage; git backup.
 */
export function SectionPhoto({ src, alt, className, priority }: SectionPhotoProps) {
  return (
    <div
      className={[
        'relative h-[220px] sm:h-[300px] overflow-hidden bg-neutral-200',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <SiteImage src={src} alt={alt} fill priority={priority} />
    </div>
  )
}

type PageBodyPhotoProps = {
  src: string
  alt: string
}

/** Unique photo under the hero on inner pages that otherwise have no section image. */
export function PageBodyPhoto({ src, alt }: PageBodyPhotoProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 pt-12">
      <SectionPhoto src={src} alt={alt} className="mx-auto max-w-6xl" />
    </div>
  )
}
