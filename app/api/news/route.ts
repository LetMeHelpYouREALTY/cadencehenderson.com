import { NextResponse } from 'next/server'
import { fetchNews } from '@/lib/fetch-news'

export const revalidate = 3600

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const perPage = Math.min(
    parseInt(searchParams.get('per_page') || '6', 10),
    20,
  )

  try {
    const articles = await fetchNews(perPage)
    return NextResponse.json(articles)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}
