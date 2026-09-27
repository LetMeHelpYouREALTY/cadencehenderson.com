/**
 * CadenceNV.com neighborhood catalog.
 * Facts (village names, plan names, sq ft, beds/baths) come from the
 * developer site as of 2026-09-09. Copy is original. No asking prices —
 * those change. Confirm inventory with Dr. Jan before writing an offer.
 */

export type VillageKind = 'for-sale' | 'rental' | 'sold-out'

export type VillagePlan = {
  name: string
  sqft: string
  beds: number
  baths: number
}

export type Village = {
  builderSlug: string
  builderName: string
  communitySlug: string
  name: string
  /** Public URL matching CadenceNV IA (via rewrite). */
  cadencePath: string
  kind: VillageKind
  summary: string
  plans: VillagePlan[]
}

function v(
  builderSlug: string,
  builderName: string,
  communitySlug: string,
  name: string,
  kind: VillageKind,
  summary: string,
  plans: VillagePlan[] = [],
): Village {
  return {
    builderSlug,
    builderName,
    communitySlug,
    name,
    cadencePath: `/${builderSlug}/${communitySlug}`,
    kind,
    summary,
    plans,
  }
}

export const CADENCE_VILLAGES: Village[] = [
  v('beazer', 'Beazer Homes', 'aria-crossing', 'Aria Crossing', 'for-sale',
    'Beazer Homes village in Cadence Henderson NV 89011 with one- and two-story plans. Quick move-in lots rotate — confirm the current sheet before you reserve.',
    [
      { name: 'Vision', sqft: '1,769', beds: 3, baths: 2 },
      { name: 'Nexus', sqft: '2,191', beds: 3, baths: 2.5 },
      { name: 'Aurora', sqft: '2,735', beds: 4, baths: 3 },
    ]),
  v('beazer', 'Beazer Homes', 'cantata', 'Cantata Point', 'for-sale',
    'Beazer’s Cantata Point collection sits in Cadence Henderson with compact and mid-size single-family plans. Tour with a buyer’s agent so option pricing is on the contract, not only the model.',
    [
      { name: 'Griffin', sqft: '1,330', beds: 3, baths: 2 },
      { name: 'Bedford', sqft: '1,480', beds: 3, baths: 2 },
      { name: 'Barclay', sqft: '2,256', beds: 4, baths: 3.5 },
    ]),

  v('century-communities', 'Century Communities', 'alderidge', 'Alderidge', 'for-sale',
    'Alderidge is a Century Communities village in Cadence Henderson. Live floor-plan cards change; use Find Your Home or call Dr. Jan for what is actually released.'),
  v('century-communities', 'Century Communities', 'glenmore', 'Glenmore I', 'for-sale',
    'Glenmore I is a Century Communities neighborhood inside Cadence Henderson NV 89011. Inventory is builder-controlled — verify lot status on a current release list.'),
  v('century-communities', 'Century Communities', 'glenmore-ii', 'Glenmore II', 'for-sale',
    'Glenmore II continues the Century Communities presence in Cadence. Compare it with Modena and Alderidge on the same tour loop.'),
  v('century-communities', 'Century Communities', 'modena_1', 'Modena I', 'for-sale',
    'Modena I by Century Communities offers numbered plans in Cadence Henderson. Square footage below is from the developer listing; prices are omitted because they move.',
    [
      { name: 'Plan 1675', sqft: '1,675', beds: 3, baths: 2.5 },
      { name: 'Plan 1859', sqft: '1,859', beds: 3, baths: 2.5 },
      { name: 'Plan 2001', sqft: '2,001', beds: 4, baths: 2.5 },
      { name: 'Plan 2114', sqft: '2,114', beds: 4, baths: 3 },
    ]),
  v('century-communities', 'Century Communities', 'modena-ii', 'Modena II', 'for-sale',
    'Modena II is the later Century Communities phase in Cadence with three published numbered plans.',
    [
      { name: 'Plan 1792', sqft: '1,792', beds: 4, baths: 2.5 },
      { name: 'Plan 1943', sqft: '1,943', beds: 3, baths: 2.5 },
      { name: 'Plan 2119', sqft: '2,119', beds: 4, baths: 3 },
    ]),
  v('century-communities', 'Century Communities', 'somerville', 'Somerville', 'for-sale',
    'Somerville is listed on the Cadence developer site as a Century Communities village. Confirm whether it is still selling before you drive out.'),

  v('dr-horton', 'D.R. Horton', 'symmetry-bay', 'Symmetry Bay', 'for-sale',
    'D.R. Horton Symmetry Bay in Cadence Henderson. Published plans cluster around 1,700–1,900 square feet.',
    [
      { name: 'Plan 1715', sqft: '1,715', beds: 4, baths: 2.5 },
      { name: 'Plan 1802', sqft: '1,802', beds: 4, baths: 2.5 },
      { name: 'Plan 1865', sqft: '1,865', beds: 5, baths: 2.5 },
    ]),
  v('dr-horton', 'D.R. Horton', 'symmetry-bay-ii', 'Symmetry Bay II', 'for-sale',
    'Symmetry Bay II is the follow-on D.R. Horton village with the same plan family as Bay I. Compare lots, not just the model interior.',
    [
      { name: 'Plan 1715', sqft: '1,715', beds: 4, baths: 2.5 },
      { name: 'Plan 1802', sqft: '1,802', beds: 4, baths: 2.5 },
      { name: 'Plan 1865', sqft: '1,865', beds: 5, baths: 2.5 },
    ]),
  v('dr-horton', 'D.R. Horton', 'symmetry-falls', 'Symmetry Falls', 'for-sale',
    'Symmetry Falls is a larger D.R. Horton collection in Cadence, with plans above 2,400 square feet.',
    [
      { name: 'Plan 2436', sqft: '2,436', beds: 5, baths: 2.5 },
      { name: 'Plan 2660', sqft: '2,660', beds: 6, baths: 3 },
      { name: 'Plan 3000', sqft: '3,000', beds: 5, baths: 3 },
    ]),
  v('dr-horton', 'D.R. Horton', 'symmetry-manor', 'Symmetry Manor', 'for-sale',
    'Symmetry Manor is a D.R. Horton village with mid-2,000s square footage plans in Cadence Henderson.',
    [
      { name: 'Plan 2300', sqft: '2,300', beds: 4, baths: 3 },
      { name: 'Plan 2538', sqft: '2,538', beds: 4, baths: 3 },
      { name: 'Plan 2754', sqft: '2,754', beds: 4, baths: 3 },
    ]),
  v('dr-horton', 'D.R. Horton', 'symmetry-meadows', 'Symmetry Meadows', 'for-sale',
    'Symmetry Meadows appears on the Cadence developer sitemap as a D.R. Horton neighborhood. Live cards were empty when last checked — ask Dr. Jan for current release status.'),
  v('dr-horton', 'D.R. Horton', 'symmetry-summit', 'Symmetry Summit', 'for-sale',
    'Symmetry Summit is among the largest D.R. Horton plans in Cadence, with published sizes from about 3,765 to 4,425 square feet.',
    [
      { name: 'Plan 3765', sqft: '3,765', beds: 6, baths: 3.5 },
      { name: 'Plan 3825', sqft: '3,825', beds: 5, baths: 3.5 },
      { name: 'Plan 4425', sqft: '4,425', beds: 6, baths: 4 },
    ]),
  v('dr-horton', 'D.R. Horton', 'symmetry-summit-ii', 'Symmetry Summit II', 'for-sale',
    'Symmetry Summit II continues the large-plan D.R. Horton series in Cadence Henderson.',
    [
      { name: 'Plan 3765', sqft: '3,765', beds: 6, baths: 3.5 },
      { name: 'Plan 4425', sqft: '4,425', beds: 6, baths: 4 },
    ]),
  v('dr-horton', 'D.R. Horton', 'symmetry-trails', 'Symmetry Trails', 'for-sale',
    'Symmetry Trails is a D.R. Horton Cadence village. The developer page had no live cards when last checked; Trails II still lists townhome-scale plans.'),
  v('dr-horton', 'D.R. Horton', 'symmetry-trails-ii', 'Symmetry Trails II', 'for-sale',
    'Symmetry Trails II publishes compact D.R. Horton plans — a smaller-square-footage entry in Cadence Henderson.',
    [
      { name: 'Plan 1309', sqft: '1,309', beds: 3, baths: 2.5 },
      { name: 'Plan 1410', sqft: '1,410', beds: 3, baths: 2.5 },
    ]),

  v('lennar', 'Lennar', 'brighton', 'Brighton', 'for-sale',
    'Lennar Brighton is a Cadence Henderson village. The developer inventory widget was empty when last checked — search live listings or tour with Dr. Jan.'),
  v('lennar', 'Lennar', 'carlton', 'Carlton', 'for-sale',
    'Lennar Carlton in Cadence lists five named plans in the 1,200–1,700 square-foot range.',
    [
      { name: 'Aspen', sqft: '1,248', beds: 3, baths: 2 },
      { name: 'Harper', sqft: '1,481', beds: 3, baths: 2.5 },
      { name: 'Bennett', sqft: '1,536', beds: 3, baths: 2.5 },
      { name: 'Cooper', sqft: '1,561', beds: 3, baths: 2.5 },
      { name: 'Finn', sqft: '1,724', beds: 3, baths: 2.5 },
    ]),
  v('lennar', 'Lennar', 'hampton', 'Hampton', 'for-sale',
    'Lennar Hampton is listed as a Cadence village. Confirm current selling status before you schedule a model stop.'),
  v('lennar', 'Lennar', 'heritage', 'Heritage', 'for-sale',
    'Lennar Heritage is a Cadence Henderson collection. Live plan cards were not displaying when last reviewed.'),
  v('lennar', 'Lennar', 'midtown', 'Midtown', 'for-sale',
    'Lennar Midtown publishes five named plans from about 1,445 to 2,218 square feet in Cadence Henderson.',
    [
      { name: 'Murray', sqft: '1,445', beds: 3, baths: 2.5 },
      { name: 'Hudson', sqft: '1,486', beds: 3, baths: 2.5 },
      { name: 'Astor', sqft: '1,972', beds: 4, baths: 3.5 },
      { name: 'Sutton', sqft: '2,153', beds: 5, baths: 4 },
      { name: 'Bryant', sqft: '2,218', beds: 5, baths: 3.5 },
    ]),
  v('lennar', 'Lennar', 'monroe', 'Monroe', 'for-sale',
    'Lennar Monroe is on the Cadence developer sitemap. Ask for a current lot list — the public widget was empty at last check.'),
  v('lennar', 'Lennar', 'preston-crest', 'Preston Crest', 'for-sale',
    'Preston Crest is a Lennar village in Cadence Henderson. NextGen-style plans have been marketed here; verify which elevations are still released.'),
  v('lennar', 'Lennar', 'preston-enclave', 'Preston Enclave', 'for-sale',
    'Preston Enclave is part of Lennar’s Preston series in Cadence. Inventory rotates by lot.'),
  v('lennar', 'Lennar', 'preston-pointe', 'Preston Pointe', 'for-sale',
    'Preston Pointe is a Lennar Cadence neighborhood. Some plans have been shown with RV-garage options — confirm on the specific lot.'),
  v('lennar', 'Lennar', 'preston-terrace', 'Preston Terrace', 'for-sale',
    'Preston Terrace continues Lennar’s Preston collection in Cadence Henderson NV 89011.'),
  v('lennar', 'Lennar', 'preston-village', 'Preston Village', 'for-sale',
    'Preston Village is a Lennar Cadence village. Drive the street grid with Dr. Jan to compare lot orientation and HOA line.'),
  v('lennar', 'Lennar', 'quail-crossings', 'Quail Crossings', 'for-sale',
    'Lennar Quail Crossings lists four named plans in the 1,270–1,711 square-foot band.',
    [
      { name: 'Alma', sqft: '1,270', beds: 3, baths: 2.5 },
      { name: 'Caden', sqft: '1,311', beds: 3, baths: 2.5 },
      { name: 'Eden', sqft: '1,435', beds: 3, baths: 2.5 },
      { name: 'Dylan', sqft: '1,711', beds: 3, baths: 2.5 },
    ]),
  v('lennar', 'Lennar', 'serenity-place', 'Serenity Place', 'for-sale',
    'Lennar Serenity Place is a Cadence Henderson village. Confirm selling status; the public inventory card was empty when last checked.'),

  v('richmond-american-homes', 'Richmond American Homes', 'andante', 'Andante', 'for-sale',
    'Andante is a Richmond American village in Cadence. Live plan cards were not listed on the developer page at last check.'),
  v('richmond-american-homes', 'Richmond American Homes', 'bel-canto', 'Bel Canto', 'for-sale',
    'Bel Canto by Richmond American Homes opened for sales in Cadence Henderson. Ask Dr. Jan which plans remain.'),
  v('richmond-american-homes', 'Richmond American Homes', 'cabaret', 'Cabaret', 'for-sale',
    'Cabaret is a Richmond American Cadence neighborhood. Confirm whether it is still taking new reservations.'),
  v('richmond-american-homes', 'Richmond American Homes', 'esperando', 'Esperando', 'for-sale',
    'Esperando by Richmond American Homes began sales in Cadence. Treat any cross-posted inventory widgets as unverified — walk the model with current lot cards.'),
  v('richmond-american-homes', 'Richmond American Homes', 'interlude', 'Interlude', 'for-sale',
    'Interlude is an active Richmond American village in Cadence Henderson with four named plans in the mid-2,000s to low-3,000s square feet.',
    [
      { name: 'Hemingway', sqft: '2,620', beds: 4, baths: 2.5 },
      { name: 'Coronado', sqft: '2,730', beds: 4, baths: 3 },
      { name: 'Seth', sqft: '2,940', beds: 5, baths: 3 },
      { name: 'Sage', sqft: '3,270', beds: 4, baths: 3.5 },
    ]),
  v('richmond-american-homes', 'Richmond American Homes', 'overture', 'Overture', 'for-sale',
    'Overture is listed as a Richmond American Cadence village. Verify current sales status before you tour.'),

  v('storybook-homes', 'StoryBook Homes', 'libretto', 'Libretto', 'for-sale',
    'Libretto is a StoryBook Homes neighborhood in Cadence Henderson. Models have been announced as open; confirm hours and remaining lots.'),
  v('storybook-homes', 'StoryBook Homes', 'serenade', 'Serenade', 'for-sale',
    'Serenade is StoryBook Homes’ other Cadence village. Compare it with Libretto on the same visit.'),

  v('taylorm', 'Taylor Morrison', 'opus', 'Opus', 'for-sale',
    'Taylor Morrison Opus in Cadence Henderson publishes several named plans around 1,850–2,100 square feet.',
    [
      { name: 'Aspen', sqft: '1,856', beds: 3, baths: 2.5 },
      { name: 'Cypress', sqft: '1,868', beds: 3, baths: 2.5 },
      { name: 'Elm', sqft: '1,998', beds: 3, baths: 2.5 },
      { name: 'Redwood', sqft: '2,081', beds: 3, baths: 2.5 },
      { name: 'Mahogany', sqft: '2,081', beds: 3, baths: 2.5 },
      { name: 'Pine', sqft: '2,081', beds: 3, baths: 2.5 },
    ]),

  v('toll-brothers', 'Toll Brothers', 'concord', 'Concord', 'sold-out',
    'Toll Brothers Concord at Cadence is listed as a completed village. Ask Dr. Jan about resale homes on those streets rather than a new-construction sales office.'),
  v('toll-brothers', 'Toll Brothers', 'everleigh', 'Everleigh', 'sold-out',
    'Toll Brothers Everleigh at Cadence is sold out on the developer site. Resale inventory, if any, shows on MLS — not as a builder model park.'),

  v('woodside-homes', 'Woodside Homes', 'acacia', 'Acacia', 'for-sale',
    'Woodside Acacia in Cadence lists Bailey, Sienna, and Willow plans in the high 1,700s to low 2,100s square feet.',
    [
      { name: 'Willow', sqft: '1,732', beds: 3, baths: 2.5 },
      { name: 'Bailey', sqft: '1,954', beds: 3, baths: 2.5 },
      { name: 'Sienna', sqft: '2,153', beds: 4, baths: 2.5 },
    ]),
  v('woodside-homes', 'Woodside Homes', 'adair', 'Adair', 'for-sale',
    'Woodside Adair is a larger-plan Cadence village, with published sizes near 2,800–2,900 square feet.',
    [
      { name: 'Nolan', sqft: '2,769', beds: 4, baths: 3 },
      { name: 'Marlowe', sqft: '2,829', beds: 5, baths: 4 },
      { name: 'Emery', sqft: '2,935', beds: 4, baths: 3.5 },
    ]),
  v('woodside-homes', 'Woodside Homes', 'ambridge', 'Ambridge', 'for-sale',
    'Woodside Ambridge in Cadence publishes four named plans from about 1,597 to 2,192 square feet.',
    [
      { name: 'Bolton', sqft: '1,597', beds: 2, baths: 2 },
      { name: 'Chester', sqft: '1,834', beds: 2, baths: 2.5 },
      { name: 'Hawthorn', sqft: '2,080', beds: 4, baths: 3 },
      { name: 'Melrose', sqft: '2,192', beds: 3, baths: 3.5 },
    ]),
  v('woodside-homes', 'Woodside Homes', 'ashwood', 'Ashwood', 'for-sale',
    'Woodside Ashwood lists Aster, Cedar, Oakley, and Sienna plans in Cadence Henderson.',
    [
      { name: 'Oakley', sqft: '2,153', beds: 4, baths: 2.5 },
      { name: 'Sienna', sqft: '2,153', beds: 3, baths: 2.5 },
      { name: 'Aster', sqft: '2,441', beds: 3, baths: 2.5 },
      { name: 'Cedar', sqft: '2,567', beds: 4, baths: 4 },
    ]),
  v('woodside-homes', 'Woodside Homes', 'cadence-at-the-park', 'Cadence at the Park', 'for-sale',
    'Cadence at the Park is a Woodside Homes village adjacent to community park space in Cadence Henderson. Confirm remaining lots.'),
  v('woodside-homes', 'Woodside Homes', 'madison-square', 'Madison Square', 'for-sale',
    'Madison Square is listed as a Woodside Cadence neighborhood. Ignore any unrelated widgets that bleed onto the developer page — verify plans on Woodside’s current sheet.'),
  v('woodside-homes', 'Woodside Homes', 'meridian', 'Meridian', 'for-sale',
    'Woodside Meridian is a smaller-plan Cadence village with two- and three-bedroom published designs.',
    [
      { name: 'Charleston', sqft: '1,284', beds: 2, baths: 2.5 },
      { name: 'Jefferson', sqft: '1,418', beds: 2, baths: 2.5 },
      { name: 'Moriah', sqft: '1,598', beds: 3, baths: 2.5 },
    ]),
  v('woodside-homes', 'Woodside Homes', 'piermont', 'Piermont', 'for-sale',
    'Piermont is a Woodside Homes Cadence village. Live plan cards were empty at last check.'),
  v('woodside-homes', 'Woodside Homes', 'serenata', 'Serenata', 'for-sale',
    'Woodside Serenata in Cadence lists Henley, Linden, Lucca, and Mateo plans in the mid-2,500s square feet.',
    [
      { name: 'Lucca', sqft: '2,559', beds: 4, baths: 3 },
      { name: 'Mateo', sqft: '2,631', beds: 4, baths: 3.5 },
      { name: 'Henley', sqft: '2,725', beds: 4, baths: 3 },
      { name: 'Linden', sqft: '2,752', beds: 5, baths: 3 },
    ]),

  v('harmony-homes', 'Harmony Homes', 'avery-place', 'Avery Place', 'for-sale',
    'Harmony Homes Avery Place is on the Cadence developer sitemap. Confirm whether Harmony is still taking new sales in 89011.'),
  v('harmony-homes', 'Harmony Homes', 'melody', 'Melody', 'for-sale',
    'Harmony Homes Melody lists Plan 1, Plan 2, and Plan 3 on the developer site without published square footage. Verify sizes at the sales office.',
    [
      { name: 'Plan 1', sqft: '—', beds: 0, baths: 0 },
      { name: 'Plan 2', sqft: '—', beds: 0, baths: 0 },
      { name: 'Plan 3', sqft: '—', beds: 0, baths: 0 },
    ]),

  v('american-homes-4-rent', 'American Homes 4 Rent', 'pine-landing', 'Pine Landing', 'rental',
    'Pine Landing is an American Homes 4 Rent village of detached houses inside Cadence Henderson. Published plans below; rents change — do not treat this as a rate sheet.',
    [
      { name: 'American Samoa III', sqft: '1,807', beds: 3, baths: 2.5 },
      { name: 'Arches III', sqft: '2,047', beds: 3, baths: 2.5 },
      { name: 'Badlands IV', sqft: '2,130', beds: 4, baths: 3.5 },
      { name: 'Big Bend IV', sqft: '2,211', beds: 4, baths: 3 },
    ]),
  v('american-homes-4-rent', 'American Homes 4 Rent', 'vista-del-mar', 'Vista del Mar', 'rental',
    'Vista del Mar is an AMH rental village in Cadence with two- and three-bedroom published plans.',
    [
      { name: 'Chimney Rock', sqft: '1,360', beds: 2, baths: 2 },
      { name: 'Gold Butte', sqft: '1,556', beds: 3, baths: 2 },
      { name: 'Jewel Cave', sqft: '1,718', beds: 3, baths: 2 },
    ]),
]

export const ROOT_COMMUNITIES: Village[] = [
  {
    builderSlug: 'adler',
    builderName: 'Adler',
    communitySlug: 'apartments',
    name: 'Adler Apartments',
    cadencePath: '/adler',
    kind: 'rental',
    summary:
      'Adler is an apartment community inside Cadence Henderson NV 89011. Published plans run from about 680 to 1,172 square feet. Call the leasing office for current rents; Dr. Jan Duffy represents buyers when you are ready to purchase.',
    plans: [
      { name: 'A1', sqft: '680', beds: 1, baths: 1 },
      { name: 'A2', sqft: '803', beds: 1, baths: 1 },
      { name: 'A4', sqft: '822', beds: 1, baths: 1 },
      { name: 'B1', sqft: '985', beds: 2, baths: 2 },
      { name: 'B2', sqft: '1,049', beds: 2, baths: 2 },
      { name: 'B3', sqft: '1,172', beds: 2, baths: 2 },
    ],
  },
  {
    builderSlug: 'element12',
    builderName: 'Element 12',
    communitySlug: 'apartments',
    name: 'Element 12',
    cadencePath: '/element12',
    kind: 'rental',
    summary:
      'Element 12 is an apartment community in Cadence Henderson with published plans from about 617 to 1,251 square feet.',
    plans: [
      { name: 'A1', sqft: '617', beds: 1, baths: 1 },
      { name: 'A2', sqft: '621', beds: 1, baths: 1 },
      { name: 'A3', sqft: '756', beds: 1, baths: 1 },
      { name: 'B1', sqft: '1,058', beds: 2, baths: 2 },
      { name: 'B2', sqft: '1,192', beds: 2, baths: 2 },
      { name: 'C1', sqft: '1,251', beds: 3, baths: 2 },
    ],
  },
]

export const ALL_CADENCE_COMMUNITIES: Village[] = [
  ...CADENCE_VILLAGES,
  ...ROOT_COMMUNITIES,
]

export function getVillage(builder: string, community: string): Village | undefined {
  return CADENCE_VILLAGES.find(
    (item) => item.builderSlug === builder && item.communitySlug === community,
  )
}

export function getVillagesByBuilder(builder: string): Village[] {
  return CADENCE_VILLAGES.filter((item) => item.builderSlug === builder)
}

export function getCommunityByPath(path: string): Village | undefined {
  const normalized = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
  return ALL_CADENCE_COMMUNITIES.find((item) => item.cadencePath === normalized)
}

/** Maps /new-homes/[builder] slugs to CadenceNV catalog builder slugs. */
export const NEW_HOMES_SLUG_TO_CATALOG: Record<string, string> = {
  'beazer-homes': 'beazer',
  'century-communities': 'century-communities',
  'dr-horton': 'dr-horton',
  lennar: 'lennar',
  'richmond-american': 'richmond-american-homes',
  'storybook-homes': 'storybook-homes',
  'taylor-morrison': 'taylorm',
  'woodside-homes': 'woodside-homes',
}

export const CADENCE_BUILDER_HUBS = [
  { slug: 'beazer', name: 'Beazer Homes', href: '/communities/beazer' },
  { slug: 'century-communities', name: 'Century Communities', href: '/new-homes/century-communities' },
  { slug: 'dr-horton', name: 'D.R. Horton', href: '/new-homes/dr-horton' },
  { slug: 'lennar', name: 'Lennar', href: '/new-homes/lennar' },
  { slug: 'richmond-american-homes', name: 'Richmond American Homes', href: '/new-homes/richmond-american' },
  { slug: 'storybook-homes', name: 'StoryBook Homes', href: '/new-homes/storybook-homes' },
  { slug: 'taylorm', name: 'Taylor Morrison', href: '/new-homes/taylor-morrison' },
  { slug: 'woodside-homes', name: 'Woodside Homes', href: '/new-homes/woodside-homes' },
  { slug: 'harmony-homes', name: 'Harmony Homes', href: '/communities/harmony-homes' },
  { slug: 'toll-brothers', name: 'Toll Brothers', href: '/communities/toll-brothers' },
  { slug: 'american-homes-4-rent', name: 'American Homes 4 Rent', href: '/american-homes-4-rent' },
] as const
