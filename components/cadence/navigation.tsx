'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from './contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

type NavItemBase = {
  title: string
  /** SEO: Descriptive anchor text for link equity */
  ariaLabel?: string
  /** GEO: Tooltip for accessibility and context */
  titleAttr?: string
}

type NavItemLink = NavItemBase & {
  href: string
  external?: boolean
  items?: never
}

type NavItemDropdown = NavItemBase & {
  href: string
  external?: never
  items: Array<{
    label: string
    href: string
    external?: boolean
  }>
}

type NavItem = NavItemLink | NavItemDropdown

const navigationItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    ariaLabel: 'Cadence Henderson home',
    titleAttr: 'Cadence Henderson real estate home page',
  },
  {
    title: 'New Homes',
    href: '/new-homes',
    ariaLabel: 'New homes for sale in Cadence Henderson',
    titleAttr: 'Browse new homes and builders in Cadence Henderson, NV',
    items: [
      {
        label: 'Start Your Search',
        href: CONTACT_INFO.realScoutSearchUrl,
        external: true,
      },
      { label: 'Rentals in Cadence Henderson', href: '/rentals' },
      {
        label: 'Search Available Rentals',
        href: CONTACT_INFO.realScoutRentalsUrl,
        external: true,
      },
      { label: 'Beazer Homes', href: CONTACT_INFO.realScoutBeazerHomesUrl, external: true },
      { label: 'Century Communities', href: '/new-homes/century-communities' },
      { label: 'D.R. Horton', href: '/new-homes/dr-horton' },
      { label: 'Lennar', href: '/new-homes/lennar' },
      { label: 'Richmond American Homes', href: '/new-homes/richmond-american' },
      { label: 'StoryBook Homes', href: '/new-homes/storybook-homes' },
      { label: 'Taylor Morrison', href: '/new-homes/taylor-morrison' },
      { label: 'Woodside Homes', href: '/new-homes/woodside-homes' },
    ],
  },
  {
    title: 'Lifestyle',
    href: '/lifestyle',
    ariaLabel: 'Cadence Henderson lifestyle and community',
    titleAttr: 'Events, amenities, schools and community life in Cadence Henderson',
    items: [
      { label: 'Nearby Amenities Map', href: '/nearby-amenities' },
      { label: 'Cadence Henderson Amenities', href: '/lifestyle/amenities' },
      { label: 'Community Events', href: '/lifestyle/events' },
      { label: 'Parks & Trails', href: '/lifestyle/parks-trails' },
      { label: 'Schools Near Cadence Henderson', href: '/lifestyle/schools' },
      { label: 'Shopping & Dining', href: '/lifestyle/shopping' },
      { label: 'Community Life', href: '/lifestyle/community' },
      { label: 'Cadence Animal Hospital', href: '/lifestyle/animal-hospital' },
    ],
  },
  {
    title: 'Community',
    href: '/news',
    ariaLabel: 'Cadence Henderson news and gallery',
    titleAttr: 'News, updates and photos of Cadence Henderson community',
    items: [
      { label: 'Cadence Henderson News', href: '/news' },
      { label: 'Gallery – Cadence Henderson Photos', href: '/gallery' },
    ],
  },
  {
    title: 'Resources',
    href: '/faqs',
    ariaLabel: 'Resources for Cadence Henderson',
    titleAttr: 'FAQ, realtor resources, past sales and resident information',
    items: [
      { label: 'Cadence Henderson FAQ', href: '/faqs' },
      { label: 'Realtors', href: '/realtors' },
      { label: 'Past Home Sales in Cadence Henderson', href: '/past-homesales' },
      { label: 'Residents', href: '/residents' },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
    ariaLabel: 'Contact Cadence Henderson real estate',
    titleAttr: 'Contact us, maps and directions – Henderson NV 89011',
    items: [
      { label: 'Contact Cadence Henderson Real Estate', href: '/contact' },
      { label: 'Maps & Directions', href: '/maps' },
    ],
  },
]

const linkBaseClasses =
  'text-gray-700 hover:text-blue-900 font-medium transition-colors py-2 block focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:ring-offset-2 rounded'
const dropdownItemClasses =
  'block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900/30 rounded'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-md"
      role="navigation"
      aria-label="Main site navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - GEO: Site identity */}
          <Link
            href="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:ring-offset-2 rounded"
            aria-label={`${CONTACT_INFO.siteName} - Home`}
            title={CONTACT_INFO.siteName}
          >
            <span className="text-2xl font-bold text-blue-900">CADENCE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.items && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBaseClasses}
                    aria-label={item.ariaLabel ?? item.title}
                    title={item.titleAttr ?? item.title}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={linkBaseClasses}
                    aria-label={item.ariaLabel ?? item.title}
                    title={item.titleAttr ?? item.title}
                  >
                    {item.title}
                  </Link>
                )}
                {item.items && activeDropdown === item.title && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-100"
                    aria-label={`${item.title} submenu`}
                  >
                    {item.items.map((subItem) =>
                      subItem.external ? (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={dropdownItemClasses}
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={dropdownItemClasses}
                        >
                          {subItem.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Button
            size="sm"
            className="hidden lg:inline-flex bg-blue-900 hover:bg-blue-800 text-white shrink-0 focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
            asChild
          >
            <CalendlyLink>Find a Realtor</CalendlyLink>
          </Button>

          <Link
            href="/#home-search"
            className="hidden lg:flex p-2 text-gray-700 hover:text-blue-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-900/30 items-center gap-1"
            aria-label="Search Henderson homes for sale"
          >
            <Search size={24} aria-hidden />
            <span className="text-sm font-medium">Open Home Search</span>
          </Link>

          <button
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-900/30"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            {isOpen ? <X size={28} aria-hidden /> : <Menu size={28} aria-hidden />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4" aria-label="Mobile navigation">
            <div className="px-4 pb-4 space-y-2">
              <Button
                className="w-full bg-blue-900 hover:bg-blue-800 text-white focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                asChild
              >
                <CalendlyLink>Find a Realtor</CalendlyLink>
              </Button>
              <Link
                href="/#home-search"
                className="flex items-center justify-center gap-2 w-full py-2 text-sm font-medium text-blue-900 hover:bg-blue-50 rounded"
                onClick={() => setIsOpen(false)}
                aria-label="Search Henderson homes for sale"
              >
                <Search size={18} aria-hidden />
                Open Home Search
              </Link>
            </div>
            {navigationItems.map((item) => (
              <div key={item.title} className="mb-2">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left px-4 py-2 text-gray-700 font-medium block rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900/30"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item.items ? '#' : item.href}
                    className="w-full text-left px-4 py-2 text-gray-700 font-medium block rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900/30"
                    onClick={(e) => {
                      if (item.items) {
                        e.preventDefault()
                        setActiveDropdown(activeDropdown === item.title ? null : item.title)
                      } else {
                        setIsOpen(false)
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                )}
                {item.items && activeDropdown === item.title && (
                  <div className="pl-4" role="group" aria-label={`${item.title} submenu`}>
                    {item.items.map((subItem) =>
                      subItem.external ? (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-gray-600 hover:text-blue-900 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900/30"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-900 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900/30"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
