import { getSitemapEntries, SITEMAP_BASE_URL } from '@/lib/sitemap-data'

const XML_NS = 'http://www.sitemaps.org/schemas/sitemap/0.9'

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toIso8601(d: Date): string {
  return d.toISOString()
}

export async function GET() {
  const entries = getSitemapEntries()
  const urlElements = entries
    .map(
      (e) =>
        `  <url>\n` +
        `    <loc>${escapeXml(e.url)}</loc>\n` +
        `    <lastmod>${escapeXml(toIso8601(e.lastModified))}</lastmod>\n` +
        `    <changefreq>${e.changeFrequency}</changefreq>\n` +
        `    <priority>${e.priority}</priority>\n` +
        `  </url>`,
    )
    .join('\n')

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<?xml-stylesheet type="text/xsl" href="' +
    SITEMAP_BASE_URL +
    '/sitemap.xsl"?>\n' +
    `<urlset xmlns="${XML_NS}">\n` +
    urlElements +
    '\n</urlset>'

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
