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
  srcSet?: string
  loading?: 'lazy' | 'eager'
}

type LoadStage = 'cloudflare' | 'git' | 'git-alt' | 'placeholder'

function initialStage(src: string): LoadStage {
  if (!src || src.startsWith('data:')) return 'placeholder'
  if (src.startsWith('/') && !src.startsWith('//')) return 'git'
  return 'cloudflare'
}

/** Prefer WebP git assets; fall back to JPEG/PNG sibling if WebP 404s. */
function gitAltSrc(gitSrc: string): string | null {
  if (!gitSrc.startsWith('/')) return null
  if (/\.webp$/i.test(gitSrc)) return gitSrc.replace(/\.webp$/i, '.jpg')
  if (/\.jpe?g$/i.test(gitSrc)) return gitSrc.replace(/\.(jpe?g)$/i, '.webp')
  return null
}

function resolveSrc(src: string, gitSrc: string, stage: LoadStage): string {
  if (stage === 'placeholder') return PLACEHOLDER_IMAGE
  if (stage === 'git') {
    return gitSrc.startsWith('/') ? gitSrc : PLACEHOLDER_IMAGE
  }
  if (stage === 'git-alt') {
    return gitAltSrc(gitSrc) ?? PLACEHOLDER_IMAGE
  }
  return src || PLACEHOLDER_IMAGE
}

/**
 * Cloudflare Images is primary (`imagedelivery.net`). Git `public/images/` is backup.
 * One swap per failure: Cloudflare 404 → git path → SVG placeholder. No retry loops.
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
  srcSet,
  loading,
}: SiteImageProps) {
  const gitSrc = gitFallbackFromSrc(src)
  const canGitFallback = gitSrc.startsWith('/') && gitSrc !== src
  const [stage, setStage] = useState<LoadStage>(() => initialStage(src))
  const imgRef = useRef<HTMLImageElement>(null)
  const resolved = resolveSrc(src, gitSrc, stage)
  const fillClass = fill ? 'absolute inset-0 h-full w-full object-cover' : ''

  useEffect(() => {
    setStage(initialStage(src))
  }, [src])

  useEffect(() => {
    const el = imgRef.current
    if (!el || stage === 'placeholder') return
    if (el.complete && el.naturalWidth === 0) {
      setStage((current) => {
        if (current === 'cloudflare' && canGitFallback) return 'git'
        if ((current === 'git' || current === 'git-alt') && gitAltSrc(gitSrc)) {
          return current === 'git' ? 'git-alt' : 'placeholder'
        }
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
      sizes={sizes ?? (fill ? '100vw' : undefined)}
      srcSet={srcSet}
      className={[fillClass, className].filter(Boolean).join(' ')}
      fetchPriority={priority ? 'high' : undefined}
      loading={priority ? 'eager' : loading ?? 'lazy'}
      decoding={priority ? 'async' : 'async'}
      onError={() => {
        setStage((current) => {
          if (current === 'cloudflare' && canGitFallback) return 'git'
          if (current === 'git' && gitAltSrc(gitSrc)) return 'git-alt'
          return 'placeholder'
        })
      }}
    />
  )
}
