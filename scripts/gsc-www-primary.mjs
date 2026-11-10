#!/usr/bin/env node
/**
 * Submit the www sitemap in Google Search Console for sc-domain:cadencehenderson.com
 * and notify Google Indexing API for key URLs (best-effort).
 *
 * Auth (service account must be an Owner on the GSC property):
 *   GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL
 *   GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY  (PEM; \n escaped OK)
 *
 * Usage: node scripts/gsc-www-primary.mjs
 */

import crypto from 'node:crypto'

const SITE_URL = 'sc-domain:cadencehenderson.com'
const SITEMAP_URL = 'https://www.cadencehenderson.com/sitemap.xml'
const INDEX_URLS = [
  'https://www.cadencehenderson.com/',
  'https://www.cadencehenderson.com/new-homes',
  'https://www.cadencehenderson.com/rentals',
  'https://www.cadencehenderson.com/news',
  'https://www.cadencehenderson.com/faqs',
]

function b64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

function getCredentials() {
  const clientEmail = process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY?.replace(
    /\\n/g,
    '\n'
  )
  if (!clientEmail || !privateKey) {
    throw new Error(
      'Missing GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL / GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY'
    )
  }
  return { clientEmail, privateKey }
}

async function getAccessToken(scope) {
  const { clientEmail, privateKey } = getCredentials()
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claim = b64url(
    JSON.stringify({
      iss: clientEmail,
      scope,
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    })
  )
  const unsigned = `${header}.${claim}`
  const signer = crypto.createSign('RSA-SHA256')
  signer.update(unsigned)
  signer.end()
  const signature = signer
    .sign(privateKey)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
  const jwt = `${unsigned}.${signature}`

  const body = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: jwt,
  })
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  const json = await res.json()
  if (!res.ok) {
    throw new Error(`Token error: ${JSON.stringify(json)}`)
  }
  return json.access_token
}

async function gscFetch(path, { method = 'GET', token, body } = {}) {
  const res = await fetch(`https://www.googleapis.com/webmasters/v3${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  let json = null
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    json = { raw: text }
  }
  if (!res.ok) {
    throw new Error(`${method} ${path} -> ${res.status} ${text}`)
  }
  return json
}

async function indexingNotify(token, url) {
  const res = await fetch(
    'https://indexing.googleapis.com/v3/urlNotifications:publish',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, type: 'URL_UPDATED' }),
    }
  )
  const text = await res.text()
  if (!res.ok) {
    throw new Error(`${url} -> ${res.status} ${text}`)
  }
  return text
}

async function main() {
  const webmasterToken = await getAccessToken(
    'https://www.googleapis.com/auth/webmasters'
  )

  const siteEnc = encodeURIComponent(SITE_URL)
  const feedEnc = encodeURIComponent(SITEMAP_URL)

  console.log('Submitting sitemap', SITEMAP_URL)
  await gscFetch(`/sites/${siteEnc}/sitemaps/${feedEnc}`, {
    method: 'PUT',
    token: webmasterToken,
  })
  console.log('Sitemap submit OK')

  const listed = await gscFetch(`/sites/${siteEnc}/sitemaps`, {
    token: webmasterToken,
  })
  for (const row of listed?.sitemap ?? []) {
    console.log(
      '-',
      row.path,
      'lastSubmitted:',
      row.lastSubmitted,
      'errors:',
      row.errors ?? 0
    )
  }

  try {
    const indexingToken = await getAccessToken(
      'https://www.googleapis.com/auth/indexing'
    )
    for (const url of INDEX_URLS) {
      try {
        await indexingNotify(indexingToken, url)
        console.log('Indexing notify OK:', url)
      } catch (err) {
        console.warn('Indexing notify skipped:', url, String(err.message || err))
      }
    }
  } catch (err) {
    console.warn('Indexing API token skipped:', String(err.message || err))
  }

  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
