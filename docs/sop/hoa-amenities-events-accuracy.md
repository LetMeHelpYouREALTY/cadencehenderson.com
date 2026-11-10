# SOP: Cadence amenities & events accuracy

**Applies to:** cadencehenderson.com lifestyle, FAQs, news, residents, rentals (Cadence-wide copy), gallery, realtor briefs.  
**Code source of truth:** `lib/cadence-amenities.ts` + `HOA_CONTACT` in `components/cadence/contact-info.tsx`.

---

## Rule

1. **Amenities** come from the developer list (cadencenv.com/lifestyle/amenities) — Central Park, resident pool, splash pads, Fitness Court (outdoor), pickleball, dog park, Sunset Road Linear Park, trails.
2. **Events** never invent weekly schedules. Describe lifestyle types (concerts, car shows, Association programs) and send ops to the Association phone/email.
3. **Keep visitors on-site.** Use `tel:` / `mailto:` for Association. Do not deep-link Association calendars from lifestyle pages. Do not redirect `/rentals` or builder hubs off-site to RealScout.
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

## Events workflow (optional dated posts)

If Dr. Jan wants “what’s happening” content:

1. Confirm the date with the Cadence Master Association (`702-605-3111` / `Lifestyle@CadenceHOA.com`) or a dated official announcement.
2. Publish only that dated item on `/news` or `/lifestyle/events` — never a recurring invented card.
3. Primary buyer CTA remains tour/consult with Dr. Jan; Association ops stay on the Association line.

---

## Related GSC notes

- Legacy on-site redirects (`/black-friday` → `/incentives`, shopping-entertainment → shopping, animal-hospital slug) stay permanent; keep them out of the sitemap.
- `/api/` and `/projects/` remain disallowed in `app/robots.ts` (tooling, not marketing pages).
- Inbound sample links from regencyvegas.com only footer-link Cadence; they do not invent Cadence amenity schedules (checked 2026-11-09). Regency edits live in the Regency repo if needed later.
