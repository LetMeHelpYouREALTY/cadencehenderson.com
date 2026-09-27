import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import Image from 'next/image'
import Link from 'next/link'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { Newspaper, Calendar, Image as ImageIcon, Phone, Mail } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { fetchNews, type NewsArticle } from '@/lib/fetch-news'

const FALLBACK_ARTICLES: NewsArticle[] = [
  {
    id: 0,
    title: 'Cadence Named Top 10 Best-Selling Community in the Nation',
    date: 'October 5, 2025',
    category: 'Awards',
    excerpt:
      'Cadence has been recognized as one of the top 10 best-selling master-planned communities in the United States for the third consecutive year.',
    link: 'https://cadencenv.com/',
    image: cfImage(SITE_IMAGES.homes.exterior1, 'card'),
  },
  {
    id: 1,
    link: 'https://cadencenv.com/',
    title: 'New Central Park Expansion Opens This Fall',
    date: 'September 28, 2025',
    category: 'Community',
    excerpt:
      'Experience even more outdoor recreation with the opening of the new Central Park expansion featuring additional trails, picnic areas, and a new adventure playground.',
    image: cfImage(SITE_IMAGES.gallery.parkVista, 'card'),
  },
  {
    id: 2,
    link: 'https://cadencenv.com/',
    title: 'Summer Concert Series Returns to Cadence',
    date: 'September 15, 2025',
    category: 'Events',
    excerpt:
      'Join us for live music every Friday evening in Central Park. This year\'s lineup features local and regional artists across multiple genres.',
    image: cfImage(SITE_IMAGES.lifestyle.concert, 'card'),
  },
  {
    id: 3,
    link: 'https://cadencenv.com/',
    title: 'Cadence Schools Receive High Academic Ratings',
    date: 'August 22, 2025',
    category: 'Education',
    excerpt:
      'Clark County School District announces that schools serving Cadence residents have achieved outstanding academic ratings for the 2024-2025 school year.',
    image: cfImage(SITE_IMAGES.hero.schools, 'card'),
  },
  {
    id: 4,
    link: 'https://cadencenv.com/',
    title: 'New Home Builders Join Cadence Community',
    date: 'August 10, 2025',
    category: 'New Homes',
    excerpt:
      'We\'re excited to welcome two new home builders to Cadence, expanding our selection of quality homes and architectural styles.',
    image: cfImage(SITE_IMAGES.homes.exterior2, 'card'),
  },
  {
    id: 5,
    link: 'https://cadencenv.com/',
    title: 'Cadence Residents Celebrate Community Garden Harvest',
    date: 'July 28, 2025',
    category: 'Community',
    excerpt:
      'The Cadence Community Garden celebrates its first successful harvest, bringing residents together to share fresh produce and gardening tips.',
    image: cfImage(SITE_IMAGES.lifestyle.farmersMarket, 'card'),
  },
]

export default async function NewsPage() {
  let articles: NewsArticle[]
  try {
    articles = await fetchNews(6)
  } catch {
    articles = FALLBACK_ARTICLES
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Cadence News"
        subtitle="Stay up to date with the latest news, events, and announcements from the Cadence community. From new home openings to community celebrations, there's always something happening here."
        imageSrc={cfImage(SITE_IMAGES.hero.news, 'hero')}
        imageAlt="Cadence Henderson community news in Henderson NV 89011"
      />

      <RealScoutOfficeListings />

      {/* Filter/Category Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button variant="default" className="bg-indigo-900 hover:bg-indigo-800">
              All News
            </Button>
            <Button variant="outline">Awards</Button>
            <Button variant="outline">Community</Button>
            <Button variant="outline">Events</Button>
            <Button variant="outline">Education</Button>
            <Button variant="outline">New Homes</Button>
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt=""
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
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white"
                    asChild
                  >
                    <Link href={article.link} target="_blank" rel="noopener noreferrer">
                      Read More
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
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
            {Object.values(SITE_IMAGES.gallery).slice(0, 8).map((imageId, i) => (
              <div
                key={i}
                className="relative h-48 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
              >
                <SiteImage
                  src={cfImage(imageId, 'thumbnail')}
                  alt={`Cadence Henderson NV 89011 community gallery photo ${i + 1}`}
                  fill
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800">
              <ImageIcon className="mr-2" size={20} />
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Consultation Section */}
      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Newspaper size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Stay in the Loop
              </h2>
              <p className="text-xl text-white mb-6">
                Schedule a call with Dr. Jan Duffy for the latest news, events,
                and exclusive Cadence updates—personalized to your interests.
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

      <PageAeo
        path="/news"
        name="News | Cadence Henderson NV 89011"
        description="Cadence Henderson news, community updates, and market trends. Henderson NV 89011. Dr. Jan Duffy, REALTOR®."
        faqs={defaultPageFaqs('Cadence Henderson news and market updates')}
        breadcrumbs={[{ name: 'Cadence Henderson news NV 89011' }]}
        faqHeading="Cadence Henderson news — questions"
      />
      <Footer />
    </div>
  )
}

