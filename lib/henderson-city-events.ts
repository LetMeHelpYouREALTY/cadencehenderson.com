/**
 * City of Henderson Parks & Recreation special events.
 * Sourced from the official Next 30 Days calendar listing (not Cadence HOA).
 * https://www.cityofhenderson.com/government/departments/parks-and-recreation/special-events/-toggle-next30days-1283
 *
 * Past events are filtered out at read time — do not invent HOA/Cadence calendars here.
 */

export const HENDERSON_SPECIAL_EVENTS_SOURCE_URL =
  'https://www.cityofhenderson.com/government/departments/parks-and-recreation/special-events/-toggle-next30days-1283'

export type HendersonCityEvent = {
  id: string
  title: string
  /** YYYY-MM-DD start (America/Los_Angeles calendar date) */
  dateIso: string
  /** YYYY-MM-DD end when multi-day; omit for single-day */
  endDateIso?: string
  dateLabel: string
  timeLabel?: string
  monthShort: string
  day: string
  year: string
  location?: string
  sourceNote: string
}

/**
 * Captured from City of Henderson Special Events → Next 30 Days (incl. page 2).
 * Refresh periodically from the official calendar; filterPast drops expired rows.
 */
const HENDERSON_CITY_EVENTS: HendersonCityEvent[] = [
  {
    id: 'pecos-legacy-mural-2026-11-12',
    title: 'Pecos Legacy Mural Celebration',
    dateIso: '2026-11-12',
    dateLabel: 'November 12, 2026',
    timeLabel: '9:00 AM – 10:00 AM',
    monthShort: 'Nov',
    day: '12',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'pool-tournament-50-2026-11-13',
    title: 'Pool Tournament (50+)',
    dateIso: '2026-11-13',
    dateLabel: 'November 13, 2026',
    timeLabel: '9:00 AM – 3:00 PM',
    monthShort: 'Nov',
    day: '13',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'farmers-market-cornerstone-2026-11-14',
    title: 'Henderson Farmers Market (Cornerstone Park)',
    dateIso: '2026-11-14',
    dateLabel: 'November 14, 2026',
    timeLabel: '9:00 AM – 2:00 PM',
    monthShort: 'Nov',
    day: '14',
    year: '2026',
    location: 'Cornerstone Park, Henderson',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'station-87-open-house-2026-11-14',
    title: 'Station 87 Open House',
    dateIso: '2026-11-14',
    dateLabel: 'November 14, 2026',
    timeLabel: '10:00 AM – 1:00 PM',
    monthShort: 'Nov',
    day: '14',
    year: '2026',
    location: 'Henderson Fire Station 87 (Cadence area)',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'pipo-romero-concert-2026-11-15',
    title: 'Pipo Romero in Concert',
    dateIso: '2026-11-15',
    dateLabel: 'November 15, 2026',
    timeLabel: '2:00 PM',
    monthShort: 'Nov',
    day: '15',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: '50plus-southpoint-movie-2026-11-16',
    title: '50+ Day Trip Destinations: Southpoint Senior Movie Day',
    dateIso: '2026-11-16',
    dateLabel: 'November 16, 2026',
    timeLabel: '11:00 AM – 4:00 PM',
    monthShort: 'Nov',
    day: '16',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'city-council-redev-2026-11-17',
    title: 'City Council & Redevelopment Agency Meeting',
    dateIso: '2026-11-17',
    dateLabel: 'November 17, 2026',
    timeLabel: '3:45 PM – 5:30 PM',
    monthShort: 'Nov',
    day: '17',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'vegas-thrill-youth-2026-11-18',
    title: 'Vegas Thrill Youth Camp',
    dateIso: '2026-11-18',
    dateLabel: 'November 18, 2026',
    timeLabel: '6:00 PM – 8:00 PM',
    monthShort: 'Nov',
    day: '18',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'farmers-market-fox-ridge-2026-11-20',
    title: 'Henderson Farmers Market (Fox Ridge Park)',
    dateIso: '2026-11-20',
    dateLabel: 'November 20, 2026',
    timeLabel: '3:00 PM – 7:00 PM',
    monthShort: 'Nov',
    day: '20',
    year: '2026',
    location: 'Fox Ridge Park, Henderson',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'farmers-market-army-st-2026-11-20',
    title: 'Henderson Farmers Market (Army St.)',
    dateIso: '2026-11-20',
    dateLabel: 'November 20, 2026',
    timeLabel: '4:00 PM – 8:00 PM',
    monthShort: 'Nov',
    day: '20',
    year: '2026',
    location: 'Army Street, Henderson',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'birding-after-hours-2026-11-20',
    title: 'Birding After Hours',
    dateIso: '2026-11-20',
    dateLabel: 'November 20, 2026',
    timeLabel: '4:00 PM – 6:00 PM',
    monthShort: 'Nov',
    day: '20',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'kids-night-out-rock-wall-2026-11-20',
    title: 'Kids Night Out: Rock Wall',
    dateIso: '2026-11-20',
    dateLabel: 'November 20, 2026',
    timeLabel: '6:00 PM – 8:00 PM',
    monthShort: 'Nov',
    day: '20',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'farmers-market-cornerstone-2026-11-21',
    title: 'Henderson Farmers Market (Cornerstone Park)',
    dateIso: '2026-11-21',
    dateLabel: 'November 21, 2026',
    timeLabel: '9:00 AM – 2:00 PM',
    monthShort: 'Nov',
    day: '21',
    year: '2026',
    location: 'Cornerstone Park, Henderson',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'thanksgiving-market-2026-11-21',
    title: 'Thanksgiving Market',
    dateIso: '2026-11-21',
    dateLabel: 'November 21, 2026',
    timeLabel: '9:00 AM – 12:00 PM',
    monthShort: 'Nov',
    day: '21',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'ice-skating-america-first-2026-11-21',
    title: 'Free Ice Skating at America First Center',
    dateIso: '2026-11-21',
    dateLabel: 'November 21, 2026',
    timeLabel: '7:00 PM – 9:00 PM',
    monthShort: 'Nov',
    day: '21',
    year: '2026',
    location: 'America First Center, Henderson',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'f1-watch-party-2026-11-21',
    title: 'Official F1 Watch Party',
    dateIso: '2026-11-21',
    dateLabel: 'November 21, 2026',
    timeLabel: '7:00 PM',
    monthShort: 'Nov',
    day: '21',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: '50plus-sunset-bowling-2026-11-24',
    title: '50+ Day Trip Destinations: Sunset Station “Strike Zone” Bowling',
    dateIso: '2026-11-24',
    dateLabel: 'November 24, 2026',
    timeLabel: '9:30 AM – 1:30 PM',
    monthShort: 'Nov',
    day: '24',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'migratory-elf-hunt-2026-11-28',
    title: 'The Great Migratory Elf Hunt',
    dateIso: '2026-11-28',
    dateLabel: 'November 28, 2026',
    monthShort: 'Nov',
    day: '28',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'shop-small-2026-11-28',
    title: 'Shop Small Business Saturday',
    dateIso: '2026-11-28',
    dateLabel: 'November 28, 2026',
    timeLabel: '10:00 AM – 3:00 PM',
    monthShort: 'Nov',
    day: '28',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'city-council-2026-12-01',
    title: 'City Council Meeting',
    dateIso: '2026-12-01',
    dateLabel: 'December 1, 2026',
    timeLabel: '4:00 PM – 5:30 PM',
    monthShort: 'Dec',
    day: '1',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'vegas-thrill-youth-2026-12-02',
    title: 'Vegas Thrill Youth Camp',
    dateIso: '2026-12-02',
    dateLabel: 'December 2, 2026',
    timeLabel: '6:00 PM – 8:00 PM',
    monthShort: 'Dec',
    day: '2',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'winterfest-2026-12-03',
    title: 'WinterFest',
    dateIso: '2026-12-03',
    endDateIso: '2026-12-04',
    dateLabel: 'December 3–4, 2026',
    timeLabel: 'Dec 3, 5:00 PM – Dec 4, 8:30 PM',
    monthShort: 'Dec',
    day: '3',
    year: '2026',
    location: 'Water Street area, Henderson',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'farmers-market-fox-ridge-2026-12-04',
    title: 'Henderson Farmers Market (Fox Ridge Park)',
    dateIso: '2026-12-04',
    dateLabel: 'December 4, 2026',
    timeLabel: '3:00 PM – 7:00 PM',
    monthShort: 'Dec',
    day: '4',
    year: '2026',
    location: 'Fox Ridge Park, Henderson',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'nerf-war-2026-12-04',
    title: 'Glow-in-the Dark Nerf War',
    dateIso: '2026-12-04',
    dateLabel: 'December 4, 2026',
    timeLabel: '6:00 PM – 7:30 PM',
    monthShort: 'Dec',
    day: '4',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'farmers-market-cornerstone-2026-12-05',
    title: 'Henderson Farmers Market (Cornerstone Park)',
    dateIso: '2026-12-05',
    dateLabel: 'December 5, 2026',
    timeLabel: '9:00 AM – 2:00 PM',
    monthShort: 'Dec',
    day: '5',
    year: '2026',
    location: 'Cornerstone Park, Henderson',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'upscale-craft-yard-2026-12-05',
    title: 'Upscale Craft & Yard Sale',
    dateIso: '2026-12-05',
    dateLabel: 'December 5, 2026',
    timeLabel: '9:00 AM – 12:00 PM',
    monthShort: 'Dec',
    day: '5',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'pictures-with-santa-2026-12-05',
    title: 'Pictures with Santa',
    dateIso: '2026-12-05',
    dateLabel: 'December 5, 2026',
    timeLabel: '9:00 AM – 11:00 AM',
    monthShort: 'Dec',
    day: '5',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
  {
    id: 'illumination-paint-neon-2026-12-05',
    title: 'Illumination Series: Paint in Neon',
    dateIso: '2026-12-05',
    dateLabel: 'December 5, 2026',
    timeLabel: '9:00 AM – 2:00 PM',
    monthShort: 'Dec',
    day: '5',
    year: '2026',
    sourceNote: 'City of Henderson Parks & Recreation special events',
  },
]

function todayIsoInLosAngeles(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

/** Upcoming City of Henderson events only (drops anything whose end date is before today PT). */
export function getUpcomingHendersonCityEvents(
  now = new Date(),
): HendersonCityEvent[] {
  const today = todayIsoInLosAngeles(now)
  return HENDERSON_CITY_EVENTS.filter((event) => {
    const lastDay = event.endDateIso ?? event.dateIso
    return lastDay >= today
  })
}
