import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

/** Builder logos: Cloudflare primary, git `/images/logos/` backup. */
export const BUILDER_LOGO_SRCS: Record<string, string> = {
  'american-homes': cfImage(SITE_IMAGES.logos.americanHomes, 'public'),
  'beazer-homes': cfImage(SITE_IMAGES.logos.beazer, 'public'),
  'century-communities': cfImage(SITE_IMAGES.logos.century, 'public'),
  'dr-horton': cfImage(SITE_IMAGES.logos.drHorton, 'public'),
  lennar: cfImage(SITE_IMAGES.logos.lennar, 'public'),
  'richmond-american': cfImage(SITE_IMAGES.logos.richmond, 'public'),
  'storybook-homes': cfImage(SITE_IMAGES.logos.storybook, 'public'),
  'taylor-morrison': cfImage(SITE_IMAGES.logos.taylorMorrison, 'public'),
  'woodside-homes': cfImage(SITE_IMAGES.logos.woodside, 'public'),
}

export const BUILDER_PHOTO_KEYS: Record<string, keyof typeof SITE_IMAGES.builders> = {
  'beazer-homes': 'beazer',
  'century-communities': 'century',
  'dr-horton': 'drHorton',
  lennar: 'lennar',
  'richmond-american': 'richmond',
  'storybook-homes': 'storybook',
  'taylor-morrison': 'taylorMorrison',
  'woodside-homes': 'woodside',
}
