import { NextRequest, NextResponse } from 'next/server'

/**
 * Newsletter signup endpoint.
 * TODO: Wire to Follow Up Boss or email provider when ready.
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const email = formData.get('email')?.toString()?.trim()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Placeholder: log or send to CRM when integrated
    if (process.env.NODE_ENV === 'development') {
      console.info('[Newsletter] Signup:', email)
    }

    return NextResponse.redirect(
      new URL('/?newsletter=subscribed', request.url),
      302,
    )
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
