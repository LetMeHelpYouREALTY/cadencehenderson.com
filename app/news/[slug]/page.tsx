import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { Calendar, ArrowLeft, Phone } from 'lucide-react'
import {
  fetchNews,
  fetchNewsBySlug,
  getNewsFallbackSlugs,
} from '@/lib/fetch-news'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const fromFallback = getNewsFallbackSlugs().map((slug) => ({ slug }))
  try {
    const live = await fetchNews(12)
    const slugs = new Set(fromFallback.map((p) => p.slug))
    for (const article of live) slugs.add(article.slug)
    return [...slugs].map((slug) => ({ slug }))
  } catch {
    return fromFallback
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await fetchNewsBySlug(slug)
  if (!article) {
    return { title: 'News | Cadence Henderson NV 89011' }
  }

  return {
    title: `${article.title} | Cadence Henderson News`,
    description: article.excerpt.slice(0, 160),
    alternates: {
      canonical: `https://www.cadencehenderson.com/news/${article.slug}`,
    },
  }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await fetchNewsBySlug(slug)
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button variant="ghost" className="mb-6 -ml-2 text-indigo-900" asChild>
            <Link href="/news">
              <ArrowLeft size={16} className="mr-2" />
              All Cadence news
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-800 mb-4">
            <span className="inline-flex items-center">
              <Calendar size={14} className="mr-1" />
              {article.date}
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-xs font-medium">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          {article.image ? (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={article.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          {article.contentHtml ? (
            <div
              className="news-article-body text-lg text-gray-800 leading-relaxed [&_p]:mb-4 [&_a]:text-indigo-900 [&_a]:underline [&_img]:my-4 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-md [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          ) : (
            <p className="text-lg text-gray-900">{article.excerpt}</p>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-900 mb-4">
              Tour Cadence Henderson with Dr. Jan Duffy, REALTOR® — new homes and
              resale in NV 89011.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-indigo-900 hover:bg-indigo-800" asChild>
                <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                  <Phone size={16} className="mr-2" />
                  {CONTACT_INFO.phone}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/news">More Cadence news</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/new-homes">Browse new homes</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <PageAeo
        path={`/news/${article.slug}`}
        name={`${article.title} | Cadence Henderson NV 89011`}
        description={article.excerpt.slice(0, 160)}
        faqs={[
          {
            question: `What is “${article.title}” about?`,
            answer: article.excerpt,
          },
          {
            question: 'Where can I read more Cadence news?',
            answer:
              'Browse all Cadence community news on the News page at cadencehenderson.com/news.',
          },
        ]}
        breadcrumbs={[
          { name: 'News', path: '/news' },
          { name: article.title },
        ]}
        faqHeading="About this Cadence news article"
      />
      <Footer />
    </div>
  )
}
