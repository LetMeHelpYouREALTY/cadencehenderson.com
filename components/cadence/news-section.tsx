import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NewsPlaceholderImage } from '@/components/cadence/news-placeholder-image'
import { SiteImage } from '@/components/cadence/site-image'
import { fetchNews } from '@/lib/fetch-news'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { Calendar } from 'lucide-react'

export async function NewsSection() {
  let articles: Awaited<ReturnType<typeof fetchNews>>
  try {
    articles = await fetchNews(3)
  } catch {
    articles = []
  }

  return (
    <section className="py-24 bg-white" aria-labelledby="news-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <SiteImage
              src={cfImage(SITE_IMAGES.icons.newsBox, 'public')}
              width={96}
              height={100}
              alt="Cadence Henderson NV 89011 news and community updates"
              className="h-24 w-24 object-contain"
            />
          </div>
          <h2 id="news-heading" className="text-4xl font-extralight tracking-[0.06em] text-neutral-900 mb-6">
            Cadence Henderson News
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            For announcements, updates, offers and tips, check out our newsroom.
          </p>
          {articles.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-neutral-200 overflow-hidden bg-white"
                >
                  <div className="relative h-40 bg-gray-200">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <NewsPlaceholderImage src={cfImage(SITE_IMAGES.hero.news, 'card')} />
                    )}
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mt-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/news">Read Latest News</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-900 text-neutral-900 hover:bg-neutral-50 text-lg px-8"
              asChild
            >
              <Link href="/gallery">Photos of Cadence Henderson</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

