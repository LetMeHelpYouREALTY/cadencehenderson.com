'use client'

import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import { useState } from 'react'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { HomeSearchSection } from '@/components/cadence/home-search-section'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import { Image as ImageIcon, X, Calendar, Phone, Mail } from 'lucide-react'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { getGalleryImage, cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

const galleryCategories = [
  'All',
  'Central Park',
  'Amenities',
  'Homes',
  'Events',
  'Community',
]

const galleryImages = [
  {
    url: getGalleryImage('parkVista'),
    title: 'Central Park Vista',
    category: 'Central Park',
  },
  {
    url: getGalleryImage('newHome'),
    title: 'Beautiful New Home',
    category: 'Homes',
  },
  {
    url: getGalleryImage('resortPool'),
    title: 'Resort-Style Pool',
    category: 'Amenities',
  },
  {
    url: getGalleryImage('concert'),
    title: 'Concert in the Park',
    category: 'Events',
  },
  {
    url: getGalleryImage('communityGathering'),
    title: 'Community Gathering',
    category: 'Community',
  },
  {
    url: getGalleryImage('playground'),
    title: 'Park Playground',
    category: 'Central Park',
  },
  {
    url: getGalleryImage('fitnessCenter'),
    title: 'Fitness Center',
    category: 'Amenities',
  },
  {
    url: getGalleryImage('modernExterior'),
    title: 'Modern Home Exterior',
    category: 'Homes',
  },
  {
    url: getGalleryImage('walkingTrails'),
    title: 'Walking Trails',
    category: 'Central Park',
  },
  {
    url: getGalleryImage('communityEvent'),
    title: 'Community Event',
    category: 'Events',
  },
  {
    url: getGalleryImage('luxuryInterior'),
    title: 'Luxury Home Interior',
    category: 'Homes',
  },
  {
    url: getGalleryImage('dogPark'),
    title: 'Dog Park Fun',
    category: 'Amenities',
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<{
    url: string
    title: string
  } | null>(null)

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Photo Gallery"
        subtitle="Explore life in Cadence through stunning photos of our community, homes, amenities, and events. See what makes Cadence special."
        imageSrc={cfImage(SITE_IMAGES.hero.gallery, 'hero')}
        imageAlt="Photo gallery of Cadence Henderson NV 89011"
        icon={ImageIcon}
      />

      <RealScoutOfficeListings />

      <HomeSearchSection compact />

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-pink-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setLightboxImage({ url: image.url, title: image.title })}
              >
                <SiteImage
                  src={image.url}
                  alt={`${image.title} - Cadence Henderson NV 89011`}
                  fill
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <SiteImage
            src={lightboxImage.url}
            alt={`${lightboxImage.title} - Cadence Henderson NV 89011 community gallery`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}

      {/* Schedule Tour Section */}
      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Calendar size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Experience Cadence in Person
              </h2>
              <p className="text-xl text-white mb-6">
                Photos can only tell part of the story. Schedule a tour and see
                the beauty of Cadence for yourself.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-pink-900 transition-colors"
                >
                  <Phone size={20} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-pink-900 transition-colors"
                >
                  <Mail size={20} />
                  Email Dr. Jan
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <CalendlyWhenVisible>
                <CalendlyInlineWidget
                  className="w-full"
                  style={{ minWidth: 320, height: 650 }}
                />
              </CalendlyWhenVisible>
            </div>
          </div>
        </div>
      </section>

      <PageAeo
        path="/gallery"
        name="Photo Gallery | Cadence Henderson 89011"
        description="Cadence Henderson gallery: Central Park, amenities, homes, community. Cadence master-planned community Henderson NV 89011."
        faqs={defaultPageFaqs('Cadence Henderson photo gallery')}
        breadcrumbs={[{ name: 'Cadence Henderson gallery NV 89011' }]}
        faqHeading="Cadence Henderson gallery — questions"
      />
      <Footer />
    </div>
  )
}

