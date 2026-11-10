/**
 * Markdown for AI Agents — Cloudflare Worker
 * Serves markdown to clients that send Accept: text/markdown by converting
 * origin HTML via Workers AI env.AI.toMarkdown(). All other requests are proxied.
 */

interface ConversionResult {
  format: 'markdown' | 'error'
  name: string
  data?: string
  error?: string
  tokens?: number
  mimetype?: string
}

interface Env {
  AI: {
    toMarkdown(
      files: { name: string; blob: Blob } | Array<{ name: string; blob: Blob }>,
    ): Promise<ConversionResult | ConversionResult[]>
  }
  /** Optional: use env.ASSETS.fetch(request) for Workers Sites / static assets instead of fetch(request). */
  ASSETS?: {
    fetch(request: Request | string, init?: RequestInit): Promise<Response>
  }
}

/**
 * Fetch the origin response. Change this to use a custom origin or ASSETS:
 * - Current: fetch(request) — request URL is the origin (same host when Worker is routed).
 * - Alternative: return env.ASSETS?.fetch(request) ?? fetch(request) for Workers Sites.
 * - Alternative: fetch(new Request('https://your-origin.com' + new URL(request.url).pathname, request)) for a fixed origin.
 */
async function getOriginResponse(
  request: Request,
  _env: Env,
): Promise<Response> {
  return fetch(request)
}

function htmlFallbackResponse(html: string): Response {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const accept = request.headers.get('Accept') ?? ''
    if (!/text\/markdown/i.test(accept)) {
      return fetch(request)
    }

    const originResponse = await getOriginResponse(request, env)
    if (!originResponse.ok) {
      return originResponse
    }

    const html = await originResponse.text()

    // Cache key: same URL + Accept so only markdown requests hit this cache.
    // Adjust or remove caching by skipping match/put below and omitting Cache-Control.
    const cacheKey = new Request(request.url, {
      method: 'GET',
      headers: { Accept: 'text/markdown' },
    })
    const cache = caches.default
    const cached = await cache.match(cacheKey)
    if (cached) return cached

    try {
      const blob = new Blob([html], { type: 'text/html' })
      const results = await env.AI.toMarkdown([{ name: 'page.html', blob }])
      const result = Array.isArray(results) ? results[0] : results
      if (!result || result.format === 'error') {
        return htmlFallbackResponse(html)
      }
      const markdown = result.data ?? ''

      // Safety/usage: conservative Cache-Control (few minutes) to avoid hammering Workers AI.
      // Monitor Workers AI usage in Cloudflare Dashboard; adjust max-age or disable cache if needed.
      const response = new Response(markdown, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          Vary: 'Accept',
          'Cache-Control': 'public, max-age=300',
        },
      })
      ctx.waitUntil(cache.put(cacheKey, response.clone()))
      return response
    } catch (err) {
      console.error(err)
      return htmlFallbackResponse(html)
    }
  },
}
