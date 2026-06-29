#!/usr/bin/env node
/**
 * Clone Las Vegas high-rise condo photos from lasvegashighrisecondoliving.com
 * and upload them to Cloudflare Images (Cadence Henderson account).
 *
 * Requires:
 *   CLOUDFLARE_API_TOKEN — Account → Cloudflare Images → Edit
 *   CLOUDFLARE_ACCOUNT_ID — defaults to Cadence Henderson account
 *
 * Usage:
 *   node scripts/clone-condo-images-to-cloudflare.mjs
 *   node scripts/clone-condo-images-to-cloudflare.mjs --download-only
 *   node scripts/clone-condo-images-to-cloudflare.mjs --skip-existing
 *   node scripts/clone-condo-images-to-cloudflare.mjs --allow-missing-token
 */

import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { createWriteStream } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { pipeline } from 'node:stream/promises'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SOURCE_PAGE = 'https://lasvegashighrisecondoliving.com/condo/'
const DEFAULT_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b'
const ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ'
const DOWNLOAD_DIR = join(ROOT, 'scripts/.condo-image-cache')
const MANIFEST_PATH = join(ROOT, 'lib/condo-images-manifest.json')

/** Curated tower header images from the condo page (full-size originals). */
export const CONDO_IMAGE_SOURCES = [
  {
    id: 'lv-condo-allure',
    name: 'Allure',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Allure-Header-Image.jpg',
  },
  {
    id: 'lv-condo-juhl',
    name: 'Juhl',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Juhl-Header-Image-1.jpg',
  },
  {
    id: 'lv-condo-metropolis',
    name: 'Metropolis',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Metropolis-Header-Image.jpg',
  },
  {
    id: 'lv-condo-mgm-signature',
    name: 'MGM Signature',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-MGM-Signature-1.jpg',
  },
  {
    id: 'lv-condo-newport-lofts',
    name: 'Newport Lofts',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Newport-Lofts-Header-Image.jpg',
  },
  {
    id: 'lv-condo-one-queensridge',
    name: 'One Queensridge Place',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-One-Queensridge-Place-Header-Image.jpg',
  },
  {
    id: 'lv-condo-palms-place',
    name: 'Palms Place',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Palms-Place-Header-Image.jpg',
  },
  {
    id: 'lv-condo-panorama-towers',
    name: 'Panorama Towers',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Panorama-Towers-Header-Image.jpg',
  },
  {
    id: 'lv-condo-park-avenue',
    name: 'Park Avenue',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Park-Avenue-Header-Image.jpg',
  },
  {
    id: 'lv-condo-park-towers',
    name: 'Park Towers',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Park-Towers-Header-Image.jpg',
  },
  {
    id: 'lv-condo-sky',
    name: 'Sky Las Vegas',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Sky-Las-Vegas-Header-Image.jpg',
  },
  {
    id: 'lv-condo-soho-lofts',
    name: 'SoHo Lofts',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-SoHo-Lofts-Header-Image.jpg',
  },
  {
    id: 'lv-condo-cosmopolitan',
    name: 'The Cosmopolitan',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Reatly-The-Cosmopolitan-Header-Image.jpg',
  },
  {
    id: 'lv-condo-manhattan',
    name: 'The Manhattan',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-The-Manhattans-Header-Image.jpg',
  },
  {
    id: 'lv-condo-martin',
    name: 'The Martin',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-The-Martin-Header-Image.jpg',
  },
  {
    id: 'lv-condo-ogden',
    name: 'The Ogden',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-The-Ogden-Header-Image.jpg',
  },
  {
    id: 'lv-condo-platinum',
    name: 'The Platinum',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-The-Platinum-Hotel-Header-Image.jpg',
  },
  {
    id: 'lv-condo-waldorf-astoria',
    name: 'Waldorf Astoria',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Waldorf-Astoria-Header-Image.jpg',
  },
  {
    id: 'lv-condo-trump',
    name: 'Trump Tower',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Trump-Tower-Header-Image.jpg',
  },
  {
    id: 'lv-condo-turnberry-place',
    name: 'Turnberry Place',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Turnberry-Place-Header-Image.jpg',
  },
  {
    id: 'lv-condo-turnberry-towers',
    name: 'Turnberry Towers',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Turnberry-Towers-Header-Image.jpg',
  },
  {
    id: 'lv-condo-vdara',
    name: 'Vdara',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las_Vegas_High_Rise_Condo_Living_Savi_Realty_Vdara_Condos_Header_Image.jpg',
  },
  {
    id: 'lv-condo-veer-towers',
    name: 'Veer Towers',
    url: 'https://lasvegashighrisecondoliving.com/wp-content/uploads/2023/05/Las-Vegas-High-Rise-Condo-Living-Savi-Realty-Veer-Towers-2.jpg',
  },
]

const args = new Set(process.argv.slice(2))
const downloadOnly = args.has('--download-only')
const dryRun = args.has('--dry-run')
const skipExisting = args.has('--skip-existing')
const allowMissingToken = args.has('--allow-missing-token')

function deliveryUrl(imageId, variant = 'public') {
  return `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/${variant}`
}

async function imageExistsOnCloudflare(imageId) {
  try {
    const response = await fetch(deliveryUrl(imageId), { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

async function downloadImage(item) {
  await mkdir(DOWNLOAD_DIR, { recursive: true })
  const ext = item.url.match(/\.(jpe?g|png|webp|gif)(\?|$)/i)?.[1] ?? 'jpg'
  const filePath = join(DOWNLOAD_DIR, `${item.id}.${ext}`)
  const response = await fetch(item.url)
  if (!response.ok) {
    throw new Error(`Download failed for ${item.name}: ${response.status}`)
  }
  await pipeline(response.body, createWriteStream(filePath))
  return filePath
}

async function uploadFromUrl(item, accountId, token) {
  const form = new FormData()
  form.append('url', item.url)
  form.append('id', item.id)
  form.append('metadata', JSON.stringify({ name: item.name, source: SOURCE_PAGE }))

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    },
  )

  const data = await response.json()
  if (!response.ok || !data.success) {
    const message = data.errors?.map((e) => e.message).join('; ') || response.statusText
    throw new Error(`URL upload failed for ${item.id}: ${message}`)
  }

  return {
    id: data.result.id,
    variants: data.result.variants,
    deliveryUrl: deliveryUrl(data.result.id),
  }
}

async function uploadFromFile(item, filePath, accountId, token) {
  const fileBuffer = await readFile(filePath)
  const ext = filePath.split('.').pop() ?? 'jpg'
  const mime = ext === 'png' ? 'image/png' : 'image/jpeg'
  const blob = new Blob([fileBuffer], { type: mime })
  const form = new FormData()
  form.append('file', blob, `${item.id}.${ext}`)
  form.append('id', item.id)
  form.append('metadata', JSON.stringify({ name: item.name, source: SOURCE_PAGE }))

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    },
  )

  const data = await response.json()
  if (!response.ok || !data.success) {
    const message = data.errors?.map((e) => e.message).join('; ') || response.statusText
    throw new Error(`File upload failed for ${item.id}: ${message}`)
  }

  return {
    id: data.result.id,
    variants: data.result.variants,
    deliveryUrl: deliveryUrl(data.result.id),
  }
}

async function main() {
  const token =
    process.env.CLOUDFLARE_API_TOKEN ||
    process.env.CF_API_TOKEN ||
    process.env.CLOUDFLARE_IMAGES_API_TOKEN
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || DEFAULT_ACCOUNT_ID
  const results = []

  console.log(`Source: ${SOURCE_PAGE}`)
  console.log(`Images: ${CONDO_IMAGE_SOURCES.length}`)
  console.log(`Cloudflare account: ${accountId}`)

  for (const item of CONDO_IMAGE_SOURCES) {
    if (dryRun) {
      console.log(`[dry-run] ${item.id} ← ${item.url}`)
      results.push({
        id: item.id,
        name: item.name,
        sourceUrl: item.url,
        cloudflareId: item.id,
        deliveryUrl: deliveryUrl(item.id),
        status: 'dry-run',
      })
      continue
    }

    if (skipExisting && (await imageExistsOnCloudflare(item.id))) {
      console.log(`Skipped (already on Cloudflare): ${item.name}`)
      results.push({
        id: item.id,
        name: item.name,
        sourceUrl: item.url,
        cloudflareId: item.id,
        deliveryUrl: deliveryUrl(item.id),
        status: 'skipped-existing',
      })
      continue
    }

    if (!token && downloadOnly) {
      const filePath = await downloadImage(item)
      console.log(`Downloaded: ${item.name} → ${filePath}`)
      results.push({
        id: item.id,
        name: item.name,
        sourceUrl: item.url,
        localPath: filePath,
        status: 'downloaded',
      })
      continue
    }

    if (!token) {
      if (allowMissingToken) {
        console.log(`Skipping upload (no CLOUDFLARE_API_TOKEN): ${item.name}`)
        results.push({
          id: item.id,
          name: item.name,
          sourceUrl: item.url,
          cloudflareId: item.id,
          deliveryUrl: deliveryUrl(item.id),
          status: 'skipped-no-token',
        })
        continue
      }
      console.error('\nCLOUDFLARE_API_TOKEN is not set.')
      process.exitCode = 1
      break
    }

    const filePath = await downloadImage(item)
    console.log(`Downloaded: ${item.name} → ${filePath}`)

    if (downloadOnly) {
      results.push({
        id: item.id,
        name: item.name,
        sourceUrl: item.url,
        localPath: filePath,
        status: 'downloaded',
      })
      continue
    }

    let uploaded
    try {
      uploaded = await uploadFromUrl(item, accountId, token)
    } catch (urlError) {
      const duplicate =
        urlError instanceof Error &&
        /already exists|Resource already exists|duplicate/i.test(urlError.message)
      if (duplicate) {
        console.log(`Already exists on Cloudflare: ${item.name}`)
        results.push({
          id: item.id,
          name: item.name,
          sourceUrl: item.url,
          cloudflareId: item.id,
          deliveryUrl: deliveryUrl(item.id),
          status: 'skipped-existing',
        })
        continue
      }
      console.warn(`URL upload failed for ${item.id}, trying file upload…`)
      uploaded = await uploadFromFile(item, filePath, accountId, token)
    }
    console.log(`Uploaded: ${item.name} → ${uploaded.deliveryUrl}`)
    results.push({
      id: item.id,
      name: item.name,
      sourceUrl: item.url,
      cloudflareId: uploaded.id,
      deliveryUrl: uploaded.deliveryUrl,
      status: 'uploaded',
    })
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    sourcePage: SOURCE_PAGE,
    accountId,
    accountHash: ACCOUNT_HASH,
    images: results,
  }

  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`)
  console.log(`\nManifest written: ${MANIFEST_PATH}`)

  const uploadedCount = results.filter((r) => r.status === 'uploaded').length
  const skippedCount = results.filter((r) =>
    ['skipped-existing', 'skipped-no-token'].includes(r.status),
  ).length
  if (!token && !downloadOnly && !dryRun && !allowMissingToken) {
    process.exitCode = 1
  } else {
    console.log(
      `Done. Uploaded: ${uploadedCount}/${CONDO_IMAGE_SOURCES.length}, skipped: ${skippedCount}`,
    )
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
