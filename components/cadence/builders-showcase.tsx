import Link from 'next/link'
import { SiteImage } from '@/components/cadence/site-image'
import { BUILDER_LOGO_SRCS } from '@/lib/builder-logos'

export function BuildersShowcase() {
  const builders: Array<{
    name: string
    logo: string
    href: string
    width: number
    height: number
    external?: boolean
  }> = [
    {
      name: 'American Homes 4 Rent',
      logo: BUILDER_LOGO_SRCS['american-homes'],
      href: '/american-homes-4-rent',
      width: 200,
      height: 80,
    },
    {
      name: 'Beazer Homes',
      logo: BUILDER_LOGO_SRCS['beazer-homes'],
      href: '/communities/beazer',
      width: 300,
      height: 80,
    },
    {
      name: 'Century Communities',
      logo: BUILDER_LOGO_SRCS['century-communities'],
      href: '/new-homes/century-communities',
      width: 300,
      height: 91,
    },
    {
      name: 'D.R. Horton',
      logo: BUILDER_LOGO_SRCS['dr-horton'],
      href: '/new-homes/dr-horton',
      width: 300,
      height: 100,
    },
    {
      name: 'Lennar',
      logo: BUILDER_LOGO_SRCS.lennar,
      href: '/new-homes/lennar',
      width: 200,
      height: 80,
    },
    {
      name: 'Richmond American',
      logo: BUILDER_LOGO_SRCS['richmond-american'],
      href: '/new-homes/richmond-american',
      width: 300,
      height: 82,
    },
    {
      name: 'StoryBook Homes',
      logo: BUILDER_LOGO_SRCS['storybook-homes'],
      href: '/new-homes/storybook-homes',
      width: 300,
      height: 146,
    },
    {
      name: 'Taylor Morrison',
      logo: BUILDER_LOGO_SRCS['taylor-morrison'],
      href: '/new-homes/taylor-morrison',
      width: 300,
      height: 75,
    },
    {
      name: 'Woodside Homes',
      logo: BUILDER_LOGO_SRCS['woodside-homes'],
      href: '/new-homes/woodside-homes',
      width: 200,
      height: 67,
    },
  ]

  return (
    <section className="py-24 bg-neutral-50" aria-labelledby="builders-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 id="builders-heading" className="text-4xl font-extralight tracking-[0.06em] text-center text-neutral-900 mb-16">
          New Home Builders in Cadence Henderson
        </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-neutral-200">
          {builders.map((builder) => {
            const className =
              'bg-white p-8 flex flex-col items-center justify-center text-center'
            const content = (
              <>
                <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                  <SiteImage
                    src={builder.logo}
                    alt={`Cadence Henderson NV 89011 new homes by ${builder.name}`}
                    width={builder.width}
                    height={builder.height}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-light tracking-[0.08em] uppercase text-neutral-700 text-xs">
                  {builder.name}
                </h3>
              </>
            )
            return builder.external ? (
              <a
                key={builder.name}
                href={builder.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link key={builder.name} href={builder.href} className={className}>
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

