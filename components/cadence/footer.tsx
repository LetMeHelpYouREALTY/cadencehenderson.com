import Link from 'next/link'
import { Mail, Calendar, Facebook, Instagram } from 'lucide-react'
import { CONTACT_INFO, SOCIAL_MEDIA } from './contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'

export function Footer() {
  const footerLinks = [
    { title: 'Search Henderson Homes for Sale', href: CONTACT_INFO.realScoutSearchUrl, external: true },
    { title: 'New Homes in Cadence Henderson 89011', href: '/new-homes' },
    { title: 'Find Your Home in Cadence Henderson', href: '/find-your-home' },
    { title: 'Cadence Henderson Neighborhoods', href: '/communities' },
    { title: 'Builder Incentives in Cadence Henderson', href: '/incentives' },
    { title: 'Rentals in Cadence Henderson', href: '/rentals' },
    { title: 'Apartments in Cadence Henderson', href: '/apartments' },
    { title: 'American Homes 4 Rent in Cadence', href: '/american-homes-4-rent' },
    { title: 'Adler Apartments in Cadence Henderson', href: '/adler' },
    { title: 'Element 12 in Cadence Henderson', href: '/element12' },
    { title: 'Cadence Henderson Amenities & Central Park', href: '/lifestyle/amenities' },
    { title: 'Community Events in Cadence Henderson', href: '/lifestyle/events' },
    { title: 'Parks & Trails in Cadence Henderson', href: '/lifestyle/parks-trails' },
    { title: 'Pocket Parks in Cadence Henderson', href: '/lifestyle/parks-trails/pocket-parks' },
    { title: 'Cadence Henderson Schools & Education', href: '/lifestyle/schools' },
    { title: 'Shopping Near Cadence Henderson', href: '/lifestyle/shopping' },
    { title: 'Restaurants Near Cadence Henderson', href: '/lifestyle/shopping/restaurants' },
    { title: 'Cadence Henderson Community Life', href: '/lifestyle/community' },
    { title: 'Cadence Henderson Location & Directions', href: '/maps' },
    { title: 'Cadence Henderson FAQ', href: '/faqs' },
    { title: 'Past Home Sales in Cadence Henderson', href: '/past-homesales' },
    { title: 'Cadence Henderson News', href: '/news' },
    { title: 'Contact Cadence Henderson Real Estate', href: '/contact' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Realtors', href: '/realtors' },
    { title: 'Media & Press', href: '/media' },
    { title: 'Disclaimer', href: '/disclaimer' },
  ]

  return (
    <footer className="bg-cadence-ink text-white py-24">
      <div className="container mx-auto px-4">
        {/* Schedule Consultation CTA */}
        <div className="text-center mb-16 pb-12 border-b border-white/15">
          <h3 className="text-lg font-light tracking-[0.16em] uppercase mb-4 text-white">Tour Cadence with Dr. Jan</h3>
          <p className="text-white/75 text-sm font-light mb-6 max-w-md mx-auto">
            Schedule a free 15-minute consultation with Dr. Jan Duffy — Cadence Henderson NV 89011.
          </p>
          <CalendlyLink>
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-sm border-2 border-white bg-white text-xs font-semibold tracking-[0.08em] uppercase text-primary hover:bg-blue-50 transition-colors">
              <Calendar size={16} />
              Schedule a Call
            </button>
          </CalendlyLink>
        </div>
        <div className="text-center mb-12">
          <div className="text-sm font-light tracking-[0.4em] mb-6">
            CADENCE HENDERSON
          </div>
          <div className="text-base text-gray-200 mb-1">
            {CONTACT_INFO.shortBrandName}
          </div>
          <div className="text-sm text-gray-200 mb-1">
            Dr. Jan Duffy, REALTOR® | License {CONTACT_INFO.licenseNumber}
          </div>
          <div className="text-xs text-gray-200 mb-1">
            Berkshire Hathaway HomeServices Nevada Properties
          </div>
          <div className="text-xs text-gray-200 mb-6">
            {CONTACT_INFO.welcomeCenter} | {CONTACT_INFO.phone}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-white/80 text-sm font-light">
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
              aria-label="Schedule a consultation with Dr. Jan Duffy"
            >
              <Calendar size={16} aria-hidden />
              Schedule a consultation
            </a>
            <span className="text-white/40" aria-hidden>|</span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} />
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6" aria-label="Social media">
            <a
              href={SOCIAL_MEDIA.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href={SOCIAL_MEDIA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={SOCIAL_MEDIA.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) =>
              (link as { external?: boolean }).external ? (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/70 hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="border-t border-white/15 pt-10 text-center text-white/60">
          <p className="text-sm">
            Copyright 2025 {CONTACT_INFO.siteName} | License {CONTACT_INFO.licenseNumber}
          </p>
          <p className="text-xs mt-2">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

