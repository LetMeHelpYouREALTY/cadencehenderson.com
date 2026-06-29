import { NextResponse } from 'next/server'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID ?? '2cc579c1ec9e426ed585e933ebf4753b'
const ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ'
const SOURCE_PAGE = 'https://lasvegashighrisecondoliving.com/condo/'

type CondoSource = {
  id: string
  name: string
  url: string
}

type UploadResult = {
  id: string
  name: string
  status: 'uploaded' | 'skipped-existing' | 'failed'
  deliveryUrl: string
  error?: string
}

function deliveryUrl(imageId: string) {
  return `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/public`
}

async function imageExists(imageId: string) {
  try {
    const response = await fetch(deliveryUrl(imageId), { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

async function uploadFromUrl(item: CondoSource, token: string) {
  const form = new FormData()
  form.append('url', item.url)
  form.append('id', item.id)
  form.append('metadata', JSON.stringify({ name: item.name, source: SOURCE_PAGE }))

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    },
  )

  const data = await response.json()
  if (!response.ok || !data.success) {
    const message = data.errors?.map((e: { message: string }) => e.message).join('; ')
    if (message && /already exists|duplicate/i.test(message)) {
      return { id: item.id, skipped: true as const }
    }
    throw new Error(message || response.statusText)
  }

  return { id: data.result.id as string, skipped: false as const }
}

async function loadSources(): Promise<CondoSource[]> {
  const manifestPath = join(process.cwd(), 'lib/condo-images-manifest.json')
  const raw = await readFile(manifestPath, 'utf8')
  const manifest = JSON.parse(raw) as {
    images: Array<{ id: string; name: string; sourceUrl: string }>
  }
  return manifest.images.map((image) => ({
    id: image.id,
    name: image.name,
    url: image.sourceUrl,
  }))
}

/**
 * One-time admin endpoint to push condo images to Cloudflare Images using
 * CLOUDFLARE_API_TOKEN from Vercel env. Protect with CRON_SECRET header.
 */
export async function POST(request: Request) {
  const cronSecret = process.env.CRON_SECRET
  const authHeader = request.headers.get('authorization')
  const bearer = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null

  if (!cronSecret || bearer !== cronSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const token = process.env.CLOUDFLARE_API_TOKEN
  if (!token) {
    return NextResponse.json(
      { error: 'CLOUDFLARE_API_TOKEN is not configured in Vercel' },
      { status: 500 },
    )
  }

  const sources = await loadSources()
  const results: UploadResult[] = []

  for (const item of sources) {
    if (await imageExists(item.id)) {
      results.push({
        id: item.id,
        name: item.name,
        status: 'skipped-existing',
        deliveryUrl: deliveryUrl(item.id),
      })
      continue
    }

    try {
      const uploaded = await uploadFromUrl(item, token)
      results.push({
        id: item.id,
        name: item.name,
        status: uploaded.skipped ? 'skipped-existing' : 'uploaded',
        deliveryUrl: deliveryUrl(uploaded.id),
      })
    } catch (error) {
      results.push({
        id: item.id,
        name: item.name,
        status: 'failed',
        deliveryUrl: deliveryUrl(item.id),
        error: error instanceof Error ? error.message : 'Upload failed',
      })
    }
  }

  const uploaded = results.filter((r) => r.status === 'uploaded').length
  const skipped = results.filter((r) => r.status === 'skipped-existing').length
  const failed = results.filter((r) => r.status === 'failed').length

  return NextResponse.json({
    ok: failed === 0,
    summary: { total: results.length, uploaded, skipped, failed },
    results,
  })
}
