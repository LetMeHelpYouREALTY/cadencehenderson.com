'use client'

import { useEffect, useRef, useState } from 'react'
import { gitFallbackFromSrc, PLACEHOLDER_IMAGE } from '@/lib/cloudflare-images'

type SiteImageProps = {
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

type LoadStage = 'cloudflare' | 'git' | 'git-raster' | 'placeholder'

function initialStage(
  src: string,
  priority: boolean | undefined,
  gitSrc: string,
): LoadStage {
  if (!src || src.startsWith('data:')) return 'placeholder'
  if (src.startsWith('/') && !src.startsWith('//')) return 'git'
  // Priority/LCP: start on git WebP so a Cloudflare Images 404 cannot delay paint.
  // Non-priority keeps Cloudflare-first (SOP primary delivery).
  if (priority && gitSrc.startsWith('/') && gitSrc !== src) return 'git'
  return 'cloudflare'
}

function rasterSibling(gitSrc: string): string | null {
  if (!gitSrc.startsWith('/') || !/\.webp$/i.test(gitSrc)) return null
  // Prefer .jpg sibling; SiteImage only needs one raster retry path.
  return gitSrc.replace(/\.webp$/i, '.jpg')
}

function resolveSrc(src: string, gitSrc: string, stage: LoadStage): string {
  if (stage === 'placeholder') return PLACEHOLDER_IMAGE
  if (stage === 'git') {
    return gitSrc.startsWith('/') ? gitSrc : PLACEHOLDER_IMAGE
  }
  if (stage === 'git-raster') {
    return rasterSibling(gitSrc) ?? PLACEHOLDER_IMAGE
  }
  return src || PLACEHOLDER_IMAGE
}

/**
 * Cloudflare Images is primary (`imagedelivery.net`). Git `public/images/` is backup.
 * Priority images paint from git first (avoids CF 404 on LCP), then stay on git.
 * One swap per failure for lazy images: Cloudflare 404 → git → jpg sibling → SVG placeholder.
 */
export function SiteImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  priority,
  sizes,
  loading,
}: SiteImageProps) {
  const gitSrc = gitFallbackFromSrc(src)
  const canGitFallback = gitSrc.startsWith('/') && gitSrc !== src
  const [stage, setStage] = useState<LoadStage>(() =>
    initialStage(src, priority, gitSrc),
  )
  const imgRef = useRef<HTMLImageElement>(null)
  const resolved = resolveSrc(src, gitSrc, stage)
  const fillClass = fill ? 'absolute inset-0 h-full w-full object-cover' : ''
  const resolvedSizes = sizes ?? (fill ? '100vw' : undefined)

  useEffect(() => {
    setStage(initialStage(src, priority, gitSrc))
  }, [src, priority, gitSrc])

  useEffect(() => {
    const el = imgRef.current
    if (!el || stage === 'placeholder') return
    if (el.complete && el.naturalWidth === 0) {
      setStage((current) => {
        if (current === 'cloudflare' && canGitFallback) return 'git'
        if (current === 'git' && rasterSibling(gitSrc)) return 'git-raster'
        return 'placeholder'
      })
    }
  }, [resolved, stage, canGitFallback, gitSrc])

  return (
    <img
      ref={imgRef}
      src={resolved || PLACEHOLDER_IMAGE}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={resolvedSizes}
      className={[fillClass, className].filter(Boolean).join(' ')}
      fetchPriority={priority ? 'high' : undefined}
      loading={priority ? 'eager' : (loading ?? 'lazy')}
      decoding={priority ? 'sync' : 'async'}
      onError={() => {
        setStage((current) => {
          if (current === 'cloudflare' && canGitFallback) return 'git'
          if (current === 'git' && rasterSibling(gitSrc)) return 'git-raster'
          return 'placeholder'
        })
      }}
    />
  )
}
