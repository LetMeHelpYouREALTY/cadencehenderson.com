import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.cadencehenderson.com'

/**
 * robots.txt for crawlers. Points Google and others to the sitemap.
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

