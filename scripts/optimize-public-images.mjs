#!/usr/bin/env node
/**
 * Generate optimized WebP siblings for heavy public/images assets.
 * Keeps original JPG/PNG for Cloudflare upload + git raster fallback.
 *
 * Usage: node scripts/optimize-public-images.mjs
 */
import { mkdirSync, existsSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const jobs = [
  { src: 'public/images/hero/homepage.jpg', out: 'public/images/hero/homepage.webp', width: 1080, quality: 68 },
  { src: 'public/images/amenities/central-park.jpg', out: 'public/images/amenities/central-park.webp', width: 960, quality: 72 },
  { src: 'public/images/homes/exterior-1.jpg', out: 'public/images/homes/exterior-1.webp', width: 960, quality: 72 },
  { src: 'public/images/sections/market-snapshot.jpg', out: 'public/images/sections/market-snapshot.webp', width: 960, quality: 72 },
  { src: 'public/images/lifestyle/community.jpg', out: 'public/images/lifestyle/community.webp', width: 960, quality: 72 },
  { src: 'public/images/sections/realtors.jpg', out: 'public/images/sections/realtors.webp', width: 800, quality: 72 },
  { src: 'public/images/sections/home-search.jpg', out: 'public/images/sections/home-search.webp', width: 960, quality: 72 },
  { src: 'public/images/sections/faqs.jpg', out: 'public/images/sections/faqs.webp', width: 960, quality: 72 },
  { src: 'public/images/sections/schedule.jpg', out: 'public/images/sections/schedule.webp', width: 960, quality: 72 },
]

const sharp = (await import('sharp')).default

for (const job of jobs) {
  const src = join(root, job.src)
  const out = join(root, job.out)
  if (!existsSync(src)) {
    console.warn('skip missing', job.src)
    continue
  }
  mkdirSync(dirname(out), { recursive: true })
  await sharp(src)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 6 })
    .toFile(out)
  console.log(
    `${job.out}: ${statSync(src).size} → ${statSync(out).size}`,
  )
}
