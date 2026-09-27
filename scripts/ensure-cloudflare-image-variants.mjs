#!/usr/bin/env node
/**
 * Ensure standard Cloudflare Images variants exist (global SOP for all projects).
 *
 * public, hero, card, thumbnail, avatar, og, gallery
 */

import { isCloudflareAuthError, warnGitFallback } from './lib/cloudflare-images-auth.mjs'

const allowMissingToken = process.argv.includes('--allow-missing-token')
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '2cc579c1ec9e426ed585e933ebf4753b'

const VARIANTS = {
  public: { width: 1920, fit: 'scale-down' },
  hero: { width: 1920, height: 1080, fit: 'cover' },
  card: { width: 800, height: 600, fit: 'cover' },
  thumbnail: { width: 400, height: 300, fit: 'cover' },
  avatar: { width: 200, height: 200, fit: 'cover' },
  og: { width: 1200, height: 630, fit: 'cover' },
  gallery: { width: 1200, height: 800, fit: 'cover' },
}

async function main() {
  const token =
    process.env.CLOUDFLARE_API_TOKEN ||
    process.env.CF_API_TOKEN ||
    process.env.CLOUDFLARE_IMAGES_API_TOKEN

  if (!token) {
    if (allowMissingToken) {
      console.log('CLOUDFLARE_API_TOKEN not set — skipping variant ensure (git fallback still works).')
      process.exit(0)
    }
    console.error('Set CLOUDFLARE_API_TOKEN (Account → Cloudflare Images → Edit)')
    process.exit(1)
  }

  const base = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1/variants`

  for (const [id, options] of Object.entries(VARIANTS)) {
    const response = await fetch(base, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        options: { ...options, metadata: 'none' },
        neverRequireSignedURLs: true,
      }),
    })
    const data = await response.json()
    if (data.success) {
      console.log(`Created variant: ${id}`)
      continue
    }
    const message = data.errors?.map((e) => e.message).join('; ') || response.statusText
    if (/already exists|duplicate/i.test(message)) {
      console.log(`Variant exists: ${id}`)
      continue
    }
    console.error(`Variant ${id} failed: ${message}`)
    if (isCloudflareAuthError(message)) {
      if (allowMissingToken) {
        warnGitFallback('ensure-cloudflare-image-variants')
        process.exit(0)
      }
      process.exit(1)
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
