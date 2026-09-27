#!/usr/bin/env node
/**
 * Upload git-tracked public/images files to Cloudflare Images with custom IDs.
 *
 * SOP (all domains / projects / global settings):
 *   Primary: Cloudflare hosted Images (imagedelivery.net)
 *   Fallback: git files in public/images/
 *
 * ID convention: {CLOUDFLARE_IMAGES_PREFIX}-{relative-path-dashes}
 *   public/images/hero/homepage.jpg → cadence-hero-homepage
 *
 * Requires: CLOUDFLARE_API_TOKEN (Account → Cloudflare Images → Edit)
 * Optional: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_IMAGES_ACCOUNT_HASH, CLOUDFLARE_IMAGES_PREFIX
 */

import { readdir, readFile } from 'node:fs/promises'
import { join, relative, extname } from 'node:path'
import { isCloudflareAuthError, warnGitFallback } from './lib/cloudflare-images-auth.mjs'

const args = new Set(process.argv.slice(2))
const skipExisting = args.has('--skip-existing')
const allowMissingToken = args.has('--allow-missing-token')
const dryRun = args.has('--dry-run')

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '2cc579c1ec9e426ed585e933ebf4753b'
const ACCOUNT_HASH = process.env.CLOUDFLARE_IMAGES_ACCOUNT_HASH || 'byE6BTe9lNqo21V57n4aPQ'
const PREFIX = process.env.CLOUDFLARE_IMAGES_PREFIX || 'cadence'
const BASE = `https://imagedelivery.net/${ACCOUNT_HASH}`
const IMAGES_ROOT = join(process.cwd(), 'public/images')

function deliveryUrl(imageId) {
  return `${BASE}/${imageId}/public`
}

function idFromRelativePath(rel) {
  const withoutExt = rel.replace(/\.[^.]+$/, '')
  return `${PREFIX}-${withoutExt.replace(/\//g, '-')}`
}

async function walk(dir) {
  const out = []
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) out.push(full)
  }
  return out
}

async function imageExistsOnCloudflare(imageId) {
  try {
    const response = await fetch(deliveryUrl(imageId), { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

async function uploadFromFile(id, filePath, token) {
  const fileBuffer = await readFile(filePath)
  const ext = extname(filePath).slice(1).toLowerCase()
  const mime = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg'
  const blob = new Blob([fileBuffer], { type: mime })
  const form = new FormData()
  form.append('file', blob, `${id}.${ext}`)
  form.append('id', id)
  form.append('requireSignedURLs', 'false')
  form.append(
    'metadata',
    JSON.stringify({
      project: PREFIX,
      gitFallback: true,
      source: relative(process.cwd(), filePath),
    }),
  )

  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  })

  const data = await response.json()
  if (!response.ok || !data.success) {
    const message = data.errors?.map((e) => e.message).join('; ') || response.statusText
    if (/already exists|duplicate/i.test(message)) return { skipped: true }
    throw new Error(message)
  }
  return { skipped: false }
}

async function main() {
  const token =
    process.env.CLOUDFLARE_API_TOKEN ||
    process.env.CF_API_TOKEN ||
    process.env.CLOUDFLARE_IMAGES_API_TOKEN

  const files = await walk(IMAGES_ROOT)
  console.log(`Cloudflare Images upload — prefix=${PREFIX}`)
  console.log(`Account: ${ACCOUNT_ID}`)
  console.log(`Git files: ${files.length}`)
  console.log(token ? 'CLOUDFLARE_API_TOKEN: set — upload enabled' : 'CLOUDFLARE_API_TOKEN: not set — git fallback only')

  if (dryRun) {
    for (const filePath of files) {
      const rel = relative(IMAGES_ROOT, filePath).replace(/\\/g, '/')
      const id = idFromRelativePath(rel)
      console.log(`[dry-run] ${id} ← public/images/${rel}`)
    }
    console.log('Dry run complete. No uploads.')
    process.exit(0)
  }

  if (!token) {
    if (allowMissingToken) {
      console.log('Skipping Cloudflare upload. Git-tracked public/images remain the fallback.')
      process.exit(0)
    }
    console.error('Set CLOUDFLARE_API_TOKEN (Account → Cloudflare Images → Edit)')
    process.exit(1)
  }

  let uploaded = 0
  let skipped = 0
  let failed = 0

  for (const filePath of files) {
    const rel = relative(IMAGES_ROOT, filePath).replace(/\\/g, '/')
    const id = idFromRelativePath(rel)
    try {
      if (skipExisting && (await imageExistsOnCloudflare(id))) {
        console.log(`Skip existing: ${id}`)
        skipped += 1
        continue
      }
      const result = await uploadFromFile(id, filePath, token)
      if (result.skipped) {
        console.log(`Skip duplicate: ${id}`)
        skipped += 1
      } else {
        console.log(`Uploaded: ${id} → ${deliveryUrl(id)}`)
        uploaded += 1
      }
    } catch (error) {
      failed += 1
      console.error(`Failed: ${id}: ${error.message}`)
      if (allowMissingToken && isCloudflareAuthError(error.message)) {
        warnGitFallback('upload-git-images-to-cloudflare')
        process.exit(0)
      }
    }
  }

  console.log(`Done. uploaded=${uploaded} skipped=${skipped} failed=${failed}`)
  if (failed > 0) process.exit(1)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
