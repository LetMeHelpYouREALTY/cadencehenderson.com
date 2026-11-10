# Task plan — Association events/amenities accuracy (option A)

## Goal

Remove or correct website copy that presents unofficial Cadence event schedules and amenity/HOA operations as fact, so residents stop contacting the wrong office. Keep visitors on-site (tel/mailto OK; no calendar deep-links off-site).

## Plan

- [x] Replace fabricated `/lifestyle/events` calendar with Association contact + lifestyle highlights
- [x] Rewrite `/lifestyle/amenities` to match https://cadencenv.com/lifestyle/amenities/
- [x] Correct amenities / lifestyle / FAQs copy (fees, free access, reservations via realtor phone)
- [x] Update `HOA_CONTACT` to verified Cadence Master Association details
- [x] Soften related news/community claims that invent specific Association events
- [x] Point residents page HOA block at Association phone 702-605-3111
- [x] Option A residual: `/lifestyle` hub (no fake calendar CTA; accurate amenity strip)
- [x] Option A residual: `/lifestyle/parks-trails` (remove invented Yoga/Running/Bike times)
- [x] Option A residual: `/lifestyle/community` (remove invented club schedules; Association contact)
- [x] Option A residual: `/realtors/life-at-cadence` recreation blurb
- [x] Option A residual: `/news` FALLBACK_ARTICLES (on-site accurate lifestyle links)
- [x] Option A residual: `/rentals` fitness-centers FAQ wording
- [x] Commit, push, update PR #20

## GSC exports reviewed (2026-11-09)

- **Coverage**: Critical issues include redirects (3), 404 (1), robots.txt (1), Discovered not indexed (32), Crawled not indexed (9). Drilldown “Discovered - currently not indexed” includes `/lifestyle/community`, `/rentals`, builder/village URLs.
- **Latest / More sample links**: All inbound sample links are from `regencyvegas.com` (nearby-amenities, collections, about, FAQ, home) — backlink sources, not Cadence page content to rewrite.

## Sources used (Parallel)

- https://cadencenv.com/lifestyle/events/ (0 upcoming events)
- https://cadencenv.com/lifestyle/amenities/
- https://www.cadencecommunityassociation.com/community-calendar
- https://www.cadencecommunityassociation.com/amenity-information
- https://www.cadencecommunityassociation.com/cadence-parks
- https://www.cadencecommunityassociation.com/community-contacts/

## Review

Removed invented weekly concert/farmers market/yoga cards, club meeting times, parks activity schedules, and realtor-as-HOA booking FAQs. Amenities and lifestyle copy now mirror developer list; ops cite Master Association only. News fallbacks stay on-site.
