import type { ReactNode } from 'react'

type SeoSectionProps = {
  id: string
  heading: string
  lead?: string
  children?: ReactNode
  className?: string
}

/**
 * Content section with a localized H2 and an optional AEO lead paragraph.
 * Speakable CSS targets `.aeo-lead` and `[data-speakable]`.
 */
export function SeoSection({
  id,
  heading,
  lead,
  children,
  className = 'py-16 bg-white',
}: SeoSectionProps) {
  const headingId = `${id}-heading`

  return (
    <section id={id} className={className} aria-labelledby={headingId}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2
            id={headingId}
            className="mb-4 text-3xl font-extralight tracking-[0.06em] text-neutral-900"
          >
            {heading}
          </h2>
          {lead ? (
            <p className="aeo-lead mb-8 font-light leading-relaxed text-neutral-700" data-speakable>
              {lead}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  )
}
