import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.cadencehenderson.com'

/**
 * robots.txt for crawlers. Points Google and others to the sitemap.
 * /api/ and /projects/ are app tooling — intentionally disallowed (GSC
 * “Blocked by robots.txt” for those paths is expected).
 * /admin is redirected home in next.config; keep disallow as belt-and-suspenders.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/projects/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}

