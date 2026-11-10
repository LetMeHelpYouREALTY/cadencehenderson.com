/**
 * RealScout Global Injector — Cloudflare Worker
 * Injects RealScout widget script into HTML responses for sites that can't add it in layout.
 * Add REALSCOUT_EMBED_ID as a Worker secret for the optional embed script.
 */

const REALSCOUT_WIDGET =
  '<script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module" defer></script>'

function getEmbedScript(embedId: string): string {
  return `<script src="https://em.realscout.com/embed/${embedId}.js" type="module" defer></script>`
}

function injectBefore(
  bodyOrHead: '</body>' | '</head>',
  html: string,
  snippet: string,
): string {
  const tag = bodyOrHead
  const idx = html.toLowerCase().indexOf(tag)
  if (idx === -1) return html
  return html.slice(0, idx) + snippet + '\n  ' + html.slice(idx)
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const response = await fetch(request)

    const contentType = response.headers.get('Content-Type') ?? ''
    if (!contentType.includes('text/html')) {
      return response
    }

    let html = await response.text()

    // Inject RealScout widget before </head>
    html = injectBefore('</head>', html, REALSCOUT_WIDGET)

    const embedId = (env as Env).REALSCOUT_EMBED_ID
    if (embedId && typeof embedId === 'string') {
      html = injectBefore('</head>', html, getEmbedScript(embedId))
    }

    const headers = new Headers(response.headers)
    headers.delete('Content-Length')
    headers.set('Content-Type', 'text/html; charset=utf-8')

    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  },
}

interface Env {
  REALSCOUT_EMBED_ID?: string
}
