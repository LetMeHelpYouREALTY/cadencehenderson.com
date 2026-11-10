/**
 * Fetch news from cadencenv.com WordPress REST API.
 * Articles are served on-site at /news/[slug] (no off-site deep links).
 * Featured images use original on-site WebP (from H1/H2/H3 + content), not WP media.
 * Next.js fetch cache revalidates hourly.
 */

import { CADENCE_NEWS_FALLBACK } from './cadence-news-fallback'
import {
  resolveNewsImage,
  stripContentImages,
} from './news-images'

const WORDPRESS_API = 'https://cadencenv.com/wp-json/wp/v2/posts'

export type NewsArticle = {
  id: number
  slug: string
  title: string
  excerpt: string
  /** On-site path, e.g. /news/expedition-park-plan-unveiled */
  link: string
  date: string
  dateIso: string
  category: string
  image?: string
  contentHtml?: string
}

const NEWS_FALLBACK = CADENCE_NEWS_FALLBACK as NewsArticle[]

type WpPost = {
  id: number
  date: string
  slug: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content?: { rendered: string }
  featured_media: number
  categories: number[]
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>
    'wp:term'?: Array<Array<{ name: string; slug: string }>>
  }
}

function decodeEntities(html: string): string {
  return html
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) =>
      String.fromCharCode(parseInt(h, 16))
    )
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&rsquo;/g, '\u2019')
    .replace(/&lsquo;/g, '\u2018')
    .replace(/&rdquo;/g, '\u201D')
    .replace(/&ldquo;/g, '\u201C')
    .replace(/&mdash;/g, '\u2014')
    .replace(/&ndash;/g, '\u2013')
    .replace(/&hellip;/g, '\u2026')
}

export function stripHtml(html: string): string {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]*>/g, '')
  )
    .replace(/\s+/g, ' ')
    .trim()
}

/** Light sanitize for trusted cadencenv.com WordPress HTML. */
export function sanitizeWpHtml(html: string): string {
  return stripContentImages(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*')/gi, '')
      .replace(/javascript:/gi, '')
      .trim()
  )
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Los_Angeles',
    })
  } catch {
    return iso.slice(0, 10)
  }
}

function parsePost(post: WpPost): NewsArticle {
  const rawCategory = post._embedded?.['wp:term']?.[0]?.[0]?.name ?? 'News'
  const category = rawCategory === 'Uncategorized' ? 'News' : rawCategory
  const remoteImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const contentHtml = post.content?.rendered
    ? sanitizeWpHtml(post.content.rendered)
    : undefined

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    link: `/news/${post.slug}`,
    date: formatDate(post.date),
    dateIso: post.date.slice(0, 10),
    category,
    image: resolveNewsImage(post.slug, remoteImage),
    contentHtml,
  }
}

/**
 * Fetch news articles from cadencenv.com.
 * Cached via Next.js fetch; revalidates every hour.
 * Falls back to captured official articles if the API is unavailable.
 */
export async function fetchNews(perPage = 12): Promise<NewsArticle[]> {
  try {
    const url = `${WORDPRESS_API}?per_page=${perPage}&_embed`
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'CadenceHenderson/1.0',
      },
    })

    if (!res.ok) {
      throw new Error(`WordPress API error: ${res.status}`)
    }

    const posts: WpPost[] = await res.json()
    return posts.map(parsePost)
  } catch {
    return NEWS_FALLBACK.slice(0, perPage)
  }
}

/**
 * Fetch a single article by slug (live API, then fallback).
 * Prefer fallback content when it has a local generated image + structured HTML.
 */
export async function fetchNewsBySlug(
  slug: string
): Promise<NewsArticle | null> {
  const fallback = NEWS_FALLBACK.find((a) => a.slug === slug) ?? null

  try {
    const url = `${WORDPRESS_API}?slug=${encodeURIComponent(slug)}&_embed`
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'CadenceHenderson/1.0',
      },
    })

    if (res.ok) {
      const posts: WpPost[] = await res.json()
      if (posts[0]) {
        const live = parsePost(posts[0])
        // Keep local generated image + cleaned fallback body when present
        if (fallback?.image?.startsWith('/images/news/')) {
          return {
            ...live,
            image: fallback.image,
            contentHtml: fallback.contentHtml ?? live.contentHtml,
          }
        }
        return live
      }
    }
  } catch {
    // use fallback below
  }

  return fallback
}

export function getNewsFallbackSlugs(): string[] {
  return NEWS_FALLBACK.map((a) => a.slug)
}
