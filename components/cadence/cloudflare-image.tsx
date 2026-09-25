'use client'

import { SiteImage } from '@/components/cadence/site-image'

type CloudflareImageProps = {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
  loading?: 'lazy' | 'eager'
}

/**
 * Cloudflare Images primary, git public/images fallback.
 * Native img (not next/image optimizer) so a Cloudflare 404 actually swaps to git.
 */
export function CloudflareImage({
  src,
  alt,
  fill,
  className,
  width,
  height,
  priority,
  loading,
}: CloudflareImageProps) {
  return (
    <SiteImage
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      width={width}
      height={height}
      priority={priority}
      loading={loading}
    />
  )
}
