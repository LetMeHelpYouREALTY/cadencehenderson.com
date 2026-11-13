# SOP: Cadence amenities & events accuracy

**Applies to:** cadencehenderson.com lifestyle, FAQs, news, residents, rentals (Cadence-wide copy), gallery, realtor briefs.  
**Code source of truth:** `lib/cadence-amenities.ts`, `lib/henderson-city-events.ts`, + `HOA_CONTACT` in `components/cadence/contact-info.tsx`.

---

## Rule

1. **Amenities** come from the developer list (cadencenv.com/lifestyle/amenities) — Central Park, resident pool, splash pads, Fitness Court (outdoor), pickleball, dog park, Sunset Road Linear Park, trails.
2. **Events:** Never invent Cadence HOA weekly schedules. City of Henderson Parks & Recreation special events may be listed from the official city calendar (`lib/henderson-city-events.ts`) with past dates filtered out. Label them as city events, not Association programs. Association ops stay on phone/email.
3. **Keep visitors on-site** for Cadence amenity/tour content. Use `tel:` / `mailto:` for Association. Do not deep-link Association calendars from lifestyle pages. City calendar attribution link is OK. Do not redirect `/rentals` or builder hubs off-site to RealScout.
4. **Rental-private amenities** (Element 12 / Avela pool, spa, fitness) are OK only when clearly scoped to that community.

---

## Do not claim (Cadence Master Association)

- Indoor fitness centers / gyms as master amenities  
- Clubhouses as master amenities  
- Hot tubs / spas as master amenities  
- Multiple resort pools (one resident pool + splash pads)  
- Invented yoga / running / farmers-market calendars or trail mileage  

Full list: `CADENCE_AMENITY_DO_NOT_CLAIM` in `lib/cadence-amenities.ts`.

---

## Quarterly accuracy check

Run every quarter (or after Association/developer site changes):

1. Open https://cadencenv.com/lifestyle/amenities/ and https://cadencenv.com/lifestyle/events/.
2. Diff against `lib/cadence-amenities.ts` (`CADENCE_AMENITIES`, summaries, FAQ helpers).
3. Confirm `HOA_CONTACT` still matches https://www.cadencecommunityassociation.com/community-contacts/ (phone, emails).
4. Grep the repo for banned inventons: `fitness center`, `clubhouse`, `hot tub`, `movie night`, `farmers market`, `30+ miles`, `sports park`, `View Community Calendar`.
5. Spot-check `/lifestyle`, `/lifestyle/amenities`, `/lifestyle/events`, `/lifestyle/parks-trails`, `/lifestyle/community`, `/faqs`, `/news`, `/residents`, `/rentals`, `/gallery`.
6. In Google Search Console: validate “Page with redirect”, 404, and robots issues; request indexing for cleaned lifestyle URLs after deploy.

---

## Events workflow

1. **City of Henderson:** Refresh `lib/henderson-city-events.ts` from https://www.cityofhenderson.com/government/departments/parks-and-recreation/special-events/-toggle-next30days-1283. Rely on `getUpcomingHendersonCityEvents()` so past dates drop automatically.
2. **Cadence Association:** Confirm any Cadence-specific date with the Master Association (`702-605-3111` / `Lifestyle@CadenceHOA.com`) or a dated official announcement before publishing.
3. Never invent recurring HOA cards. Primary buyer CTA remains tour/consult with Dr. Jan; Association ops stay on the Association line.

---

## Related GSC notes

- Legacy on-site redirects (`/black-friday` → `/incentives`, shopping-entertainment → shopping, animal-hospital slug) stay permanent; keep them out of the sitemap.
- `/api/` and `/projects/` remain disallowed in `app/robots.ts` (tooling, not marketing pages).
- Inbound sample links from regencyvegas.com only footer-link Cadence; they do not invent Cadence amenity schedules (checked 2026-11-09). Regency edits live in the Regency repo if needed later.
