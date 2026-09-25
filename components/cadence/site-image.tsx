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

type LoadStage = 'cloudflare' | 'git' | 'placeholder'

function initialStage(src: string): LoadStage {
  if (!src || src.startsWith('data:')) return 'placeholder'
  if (src.startsWith('/') && !src.startsWith('//')) return 'git'
  return 'cloudflare'
}

function resolveSrc(src: string, gitSrc: string, stage: LoadStage): string {
  if (stage === 'placeholder') return PLACEHOLDER_IMAGE
  if (stage === 'git') {
    return gitSrc.startsWith('/') ? gitSrc : PLACEHOLDER_IMAGE
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
        return 'placeholder'
      })
    }
  }, [resolved, stage, canGitFallback])

  return (
    <img
      ref={imgRef}
      src={resolved || PLACEHOLDER_IMAGE}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={[fillClass, className].filter(Boolean).join(' ')}
      fetchPriority={priority ? 'high' : undefined}
      loading={priority ? 'eager' : loading ?? 'lazy'}
      decoding="async"
      onError={() => {
        setStage((current) => {
          if (current === 'cloudflare' && canGitFallback) return 'git'
          return 'placeholder'
        })
      }}
    />
  )
}
