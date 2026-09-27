/**
 * Shared Cloudflare Images auth handling for Vercel builds.
 * Invalid/expired tokens must not fail `next build` — git public/images is the fallback.
 */

export function isCloudflareAuthError(message) {
  return /authenticat|unauthorized|invalid.*(token|api key)|forbidden|\b401\b|\b403\b/i.test(
    String(message ?? ''),
  )
}

export function warnGitFallback(context) {
  console.warn(
    `${context}: Cloudflare Images authentication failed. Continuing with git-tracked public/images fallback.`,
  )
}
