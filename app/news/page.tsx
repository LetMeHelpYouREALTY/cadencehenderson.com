import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import Image from 'next/image'
import Link from 'next/link'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO, HOA_CONTACT } from '@/components/cadence/contact-info'
import { Newspaper, Calendar, Image as ImageIcon, Phone, Mail } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { fetchNews } from '@/lib/fetch-news'
import { ItemListSchema } from '@/components/schema/item-list'

const NEWS_FAQS = [
  {
    question: 'Where does Cadence Henderson news on this site come from?',
    answer:
      'Articles are sourced from official Cadence master-planned community news (cadencenv.com) and shown on cadencehenderson.com so you can read updates without leaving this site.',
  },
  {
    question: 'Does this news page list weekly HOA events?',
    answer: `No. News covers community announcements and updates. For current Association lifestyle dates, contact Cadence Master Association at ${HOA_CONTACT.phone} or ${HOA_CONTACT.email}. Past documented events are listed on the Events page.`,
  },
  {
    question: 'Who can help me tour Cadence after reading the news?',
    answer: `Dr. Jan Duffy, REALTOR®, helps buyers and sellers in Cadence Henderson NV 89011. Call ${CONTACT_INFO.phone} or book a consultation.`,
  },
]

export default async function NewsPage() {
  const articles = await fetchNews(12)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Cadence News"
        subtitle="Official Cadence Henderson community news and updates — parks, builders, and master-plan milestones. Read every article on this site."
        imageSrc={cfImage(SITE_IMAGES.hero.news, 'hero')}
        imageAlt="Cadence Henderson community news in Henderson NV 89011"
      />

      <RealScoutOfficeListings />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Latest from Cadence
            </h2>
            <p className="text-lg text-gray-600">
              Community news mirrored from the official Cadence feed. Association
              operations and new lifestyle dates:{' '}
              <a
                href={`tel:${HOA_CONTACT.phone.replace(/-/g, '')}`}
                className="text-indigo-900 underline"
              >
                {HOA_CONTACT.phone}
              </a>
              {' · '}
              <a
                href={`mailto:${HOA_CONTACT.email}`}
                className="text-indigo-900 underline"
              >
                {HOA_CONTACT.email}
              </a>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={article.link} className="block">
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={`${article.title} — Cadence Henderson NV 89011`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <SiteImage
                        src={cfImage(SITE_IMAGES.hero.news, 'card')}
                        alt={`${article.title} - Cadence Henderson NV 89011`}
                        fill
                      />
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="inline-flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link href={article.link} className="hover:text-indigo-900">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white"
                    asChild
                  >
                    <Link href={article.link}>Read More</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Explore life in Cadence through our community photo gallery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {Object.values(SITE_IMAGES.gallery)
              .slice(0, 8)
              .map((imageId, i) => (
                <Link
                  key={imageId}
                  href="/gallery"
                  className="relative h-48 bg-gray-200 rounded-lg overflow-hidden group"
                >
                  <SiteImage
                    src={cfImage(imageId, 'thumbnail')}
                    alt={`Cadence Henderson NV 89011 community gallery photo ${i + 1}`}
                    fill
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </Link>
              ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800" asChild>
              <Link href="/gallery">
                <ImageIcon className="mr-2" size={20} />
                View Full Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Newspaper size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Tour Cadence with a local guide</h2>
              <p className="text-xl text-white mb-6">
                Schedule a call with Dr. Jan Duffy for new homes, resale, and
                village tours in Cadence Henderson NV 89011.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-indigo-900 transition-colors"
                >
                  <Phone size={20} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-indigo-900 transition-colors"
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

      <ItemListSchema
        path="/news"
        name="Cadence Henderson news articles"
        description="Official Cadence master-planned community news mirrored on cadencehenderson.com."
        itemType="NewsArticle"
        items={articles.map((article) => ({
          name: article.title,
          url: article.link,
          description: article.excerpt.slice(0, 160),
          image: article.image,
        }))}
      />
      <PageAeo
        path="/news"
        name="News | Cadence Henderson NV 89011"
        description="Official Cadence Henderson news and community updates. Henderson NV 89011. Dr. Jan Duffy, REALTOR®."
        faqs={NEWS_FAQS}
        breadcrumbs={[{ name: 'Cadence Henderson news NV 89011' }]}
        faqHeading="Cadence Henderson news — questions"
      />
      <Footer />
    </div>
  )
}
