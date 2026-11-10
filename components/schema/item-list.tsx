type ItemListEntry = {
  name: string
  url: string
  description?: string
  image?: string
}

type ItemListSchemaProps = {
  /** Absolute or site path used for @id */
  path: string
  name: string
  description?: string
  items: ItemListEntry[]
  /** schema.org item type hint for list elements (e.g. Place, NewsArticle) */
  itemType?: string
}

const BASE = 'https://www.cadencehenderson.com'

function abs(url: string) {
  if (url.startsWith('http')) return url
  return `${BASE}${url.startsWith('/') ? url : `/${url}`}`
}

/**
 * ItemList JSON-LD for hub pages (builders, rentals, news, communities).
 * Helps search engines understand section inventories that should rank.
 */
export function ItemListSchema({
  path,
  name,
  description,
  items,
  itemType = 'Thing',
}: ItemListSchemaProps) {
  if (items.length === 0) return null

  const listId = `${abs(path)}#itemlist`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': listId,
    name,
    ...(description ? { description } : {}),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: abs(item.url),
      item: {
        '@type': itemType,
        name: item.name,
        url: abs(item.url),
        ...(item.description ? { description: item.description } : {}),
        ...(item.image ? { image: abs(item.image) } : {}),
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
