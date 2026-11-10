/**
 * Single source of truth for Cadence Master Association / developer amenities
 * and events messaging on this Realtor site.
 *
 * Sources:
 * - https://cadencenv.com/lifestyle/amenities/
 * - https://cadencenv.com/lifestyle/events/
 * - https://www.cadencecommunityassociation.com/ (ops: hours, cards, reservations)
 *
 * Do NOT invent weekly schedules, indoor fitness centers, clubhouses, hot tubs,
 * plural “pools,” or trail mileage. Keep visitors on-site (tel/mailto for Association).
 */

import { HOA_CONTACT } from '@/components/cadence/contact-info'

export const CADENCE_AMENITY_SOURCES = {
  developerAmenities: 'https://cadencenv.com/lifestyle/amenities/',
  developerEvents: 'https://cadencenv.com/lifestyle/events/',
  association: HOA_CONTACT.website,
} as const

/** Canonical amenity inventory (Cadence living / Central Park). */
export const CADENCE_AMENITIES = [
  {
    id: 'community-pool',
    name: 'Community Pool',
    imageKey: 'pool' as const,
    description:
      'The resident-only pool offers unobstructed, panoramic views of the Las Vegas Strip, providing a unique and scenic venue for Cadence residents.',
    features: [
      'Six-lane lap pool',
      'Resident access with Master Association Card',
      'Seasonal operation (typically May–October)',
      'Shaded picnic tables (reservable by residents)',
      'Turf area for relaxing',
      'Las Vegas Strip views',
    ],
  },
  {
    id: 'splash-pads',
    name: 'Splash Pads',
    imageKey: 'splashPad' as const,
    description:
      'Cadence is home to two splash pads — one near the children’s play area and one in the Pool Complex that’s about 2,000 square feet.',
    features: [
      'Pool Complex splash pad (~2,000 sq ft)',
      'Second splash pad near play areas',
      'Family-friendly water play',
      'Part of Central Park / pool complex',
    ],
  },
  {
    id: 'central-park',
    name: 'Central Park',
    imageKey: 'centralPark' as const,
    description:
      'Central Park is a 50-acre expanse of turf areas, amphitheater seating, pickleball courts, children’s play areas, a six-lane lap pool, a 2,000-square-foot splash pad, and free wifi and outlets to keep you connected.',
    features: [
      'About 50 acres of open space',
      'Amphitheater(s) and turf areas',
      'Adventure playground and play areas',
      'Fitness Court and pickleball courts',
      'Free wifi and charging outlets',
      'Open to the public dawn–10 p.m. daily (Association hours)',
    ],
  },
  {
    id: 'fitness-court',
    name: 'Fitness Court',
    imageKey: 'fitness' as const,
    description:
      'A fitness space with quality equipment is right around the corner in Central Park — an outdoor bodyweight training court for adults of all fitness levels.',
    features: [
      'Outdoor Fitness Court® in Central Park',
      'Bodyweight training stations',
      'Open during park hours',
      'No separate gym membership required for this court',
    ],
  },
  {
    id: 'pickleball',
    name: 'Pickleball Courts',
    imageKey: 'sportsCourts' as const,
    description:
      'Pickleball courts are located in Central Park and offer a great place for outdoor recreation.',
    features: [
      'Courts in Central Park',
      'Open during regular park hours',
      'Public access during park hours',
    ],
  },
  {
    id: 'linear-park',
    name: 'Sunset Road Linear Park',
    imageKey: 'playground' as const,
    description:
      'Enjoy the linear park along Sunset Road just north of Cadence Vista Drive — bounce pads, play structures, table tennis, corn hole, and more.',
    features: [
      'Bounce pads and play structures',
      'Table tennis',
      'Corn hole',
      'Gazebo / gathering spaces along Sunset Road',
    ],
  },
] as const

/** One-sentence / short paragraph used on hubs, homepage, FAQs. */
export const CADENCE_AMENITIES_SUMMARY =
  'Cadence Henderson NV 89011 amenities include a ~50-acre Central Park with free wifi, a resident-only community pool with Strip views, two splash pads (including ~2,000 sq ft in the Pool Complex), an adventure park/playground, outdoor Fitness Court, pickleball courts, trails, a dog park, and Sunset Road Linear Park with bounce pads, play structures, table tennis, and corn hole.'

export const CADENCE_AMENITIES_SUMMARY_SHORT =
  '~50-acre Central Park with free wifi, resident pool, splash pads, Fitness Court, pickleball, trails, dog park, and Sunset Road Linear Park'

export const CADENCE_EVENTS_GUIDANCE = {
  framing:
    'This site lists only two documented past events: the Cadence Car Show at Central Park (October 13, 2024, 10 a.m.–3 p.m.) and the Beazer Homes Cantata Point pet adoption event (November 9, 2024, 11 a.m.–2 p.m.).',
  noInventedCalendar:
    'No other event cards or weekly calendars are published here. Confirm current dates with the Cadence Master Association.',
  howToConfirm: `Call ${HOA_CONTACT.phone} or email ${HOA_CONTACT.lifestyleEmail} for Association programs.`,
  buyerCta: 'Tour Cadence homes with Dr. Jan Duffy — Association ops stay on the Association line.',
} as const

/** Claims that must never appear as Cadence Master Association amenities. */
export const CADENCE_AMENITY_DO_NOT_CLAIM = [
  'indoor fitness centers / gym memberships as Cadence master amenities',
  'clubhouses as Cadence master amenities',
  'hot tubs / spas as Cadence master amenities',
  'multiple resort pools (there is one resident pool + splash pads)',
  'invented weekly yoga / running club / farmers market calendars',
  'invented trail names or mileage',
  'sports park as a named master amenity',
] as const

export function amenitiesFaqAnswer(): string {
  return `${CADENCE_AMENITIES_SUMMARY} Confirm hours and access with the Cadence Master Association at ${HOA_CONTACT.phone}.`
}

export function eventsFaqAnswer(): string {
  return `${CADENCE_EVENTS_GUIDANCE.framing} ${CADENCE_EVENTS_GUIDANCE.noInventedCalendar} ${CADENCE_EVENTS_GUIDANCE.howToConfirm}`
}

export function centralParkAccessFaqAnswer(): string {
  return `Central Park (1125 E. Sunset Road) is owned and maintained by the Cadence Community Association and is open to the public year-round, typically dawn–10 p.m. daily. The Central Park Pool is resident-only and requires a Cadence Master Association Card. Call the Association at ${HOA_CONTACT.phone} for current rules.`
}

export function amenityReservationFaqAnswer(): string {
  return `Residents may reserve park picnic tables and poolside tables through the Cadence Master Association (call ${HOA_CONTACT.phone} or submit Association reservation forms). Only picnic tables are reservable — grass areas cannot be reserved, and weddings, professional parties, and company picnics are not permitted. Do not call the realtor line for Association reservations.`
}
