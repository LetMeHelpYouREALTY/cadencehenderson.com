const BASE_URL = 'https://www.cadencehenderson.com'

type BreadcrumbItem = {
  name: string
  href?: string
}

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[]
}

/**
 * BreadcrumbList JSON-LD schema for structured navigation signals.
 * Always starts with Home > Cadence Henderson.
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const listItems = [{ name: 'Cadence Henderson', href: BASE_URL }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: listItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: item.href } : {}),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
