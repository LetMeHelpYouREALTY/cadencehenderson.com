/**
 * On-site news featured images generated from each article’s H1 / H2 / H3 + content.
 * Prefer these over cadencenv.com WordPress media.
 */

export const NEWS_GENERATED_IMAGE_SLUGS = [
  'expedition-park-plan-unveiled',
  'cadence-ranks-among-the-nations-top-master-planned-communities',
  'angel-face-preschool-open-house-march-14',
  'cadence-ranked-3rd-in-nation',
  'cadence-black-friday-sales-event',
  'more-parks-open-in-cadence',
  'beazer-homes-cantata-point-hosts-pet-adoption-event',
  'two-new-parks-under-construction',
  'fire-station-87-opens',
  'construction-begins-on-citrine-sky-park-in-cadence',
  'models-open-for-storybook-homes-libretto-neighborhood',
  'esperando-by-richmond-american-homes-begins-sales',
] as const

const GENERATED = new Set<string>(NEWS_GENERATED_IMAGE_SLUGS)

/** Local WebP path for a slug when an original generated image exists. */
export function newsImagePath(slug: string): string | undefined {
  if (!GENERATED.has(slug)) return undefined
  return `/images/news/${slug}.webp`
}

/** Prefer local generated image; never return cadencenv.com / remote WP media. */
export function resolveNewsImage(
  slug: string,
  remoteImage?: string
): string | undefined {
  const local = newsImagePath(slug)
  if (local) return local
  if (!remoteImage) return undefined
  if (/cadencenv\.com/i.test(remoteImage)) return undefined
  if (/^https?:\/\//i.test(remoteImage)) return undefined
  return remoteImage
}

/** Remove WordPress / remote <img> tags from article HTML (featured image is separate). */
export function stripContentImages(html: string): string {
  let out = html.replace(/<img\b[^>]*>/gi, '')
  // Repair words split by an inline image, e.g. Th<img...>e -> The (already removed img)
  out = out.replace(/<p>(?:\s|&nbsp;)*<\/p>/gi, '')
  out = out.replace(/(?:\n\s*){3,}/g, '\n\n')
  return out.trim()
}
