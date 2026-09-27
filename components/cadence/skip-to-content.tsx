'use client'

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-16 border border-neutral-200 bg-white px-4 py-2 text-xs font-light tracking-[0.16em] uppercase text-neutral-900 transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}
