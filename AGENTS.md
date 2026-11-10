# Agent orientation — Cadence Henderson

This repo is a **Next.js 15** real estate site for Cadence Henderson (Dr. Jan Duffy, REALTOR®). Use the following to work consistently and avoid conflicts.

---

## When to use which skill

| Task area | Primary skill | Location |
|-----------|----------------|----------|
| React/Next components, hooks, TypeScript, a11y | **react-best-practices** | `.cursor/skills/react-best-practices/` |
| Metadata, schema (JSON-LD), NAP, GBP, sitemap, E-E-A-T, AEO | **seo-geo-aeo** | `.cursor/skills/seo-geo-aeo/` |
| RealScout widgets, Calendly, CSP for those domains, GSC | **realscout-calendly-gsc** | `.cursor/skills/realscout-calendly-gsc/` |
| Photos, Cloudflare Images, git fallback | **cloudflare-images-git-fallback** | `.cursor/rules/cloudflare-images-git-fallback.mdc` + `docs/sop/` |

Read the skill’s `SKILL.md` when the task matches; apply its rules. If multiple areas apply (e.g. a page that has both React and schema), use the relevant skills together.

---

## Rules (always or context-specific)

- **git-after-done** (always): When a task is complete, run `git add`, `git commit`, and `git push`. Exclude `.agents/` and large install trees from commits unless intended. Use descriptive commit messages.
- **vercel-production-only** (always): Deploy with `vercel --prod`; skip preview. Do not rely on preview environment.
- **cloudflare-images-git-fallback** (photos): Cloudflare hosted Images is primary; git `public/images/` is backup. SOP: `docs/sop/cloudflare-images-git-fallback.md`. Use `SiteImage` / `cfImage()`, never a single placeholder for every heading.
- **skills-workflow-check** (when touching skills): When the task involves `skills.json`, `skills-workflow.json`, or skills/consistency scripts, run `npm run skills:workflow` then `npm run consistency-lock-check` first.

---

## Single sources of truth

- **Contact/NAP/URLs:** `components/cadence/contact-info.tsx` (`CONTACT_INFO`). Do not hardcode address, phone, email, or Calendly/RealScout URLs.
- **Cadence Master Association:** `HOA_CONTACT` in the same file (702-605-3111). Do not use the realtor line for HOA ops.
- **Amenities & events facts:** `lib/cadence-amenities.ts`. SOP: `docs/sop/hoa-amenities-events-accuracy.md`. Do not invent schedules, fitness centers, clubhouses, or trail mileage.
- **Sitemap URLs:** `lib/sitemap-data.ts`. Sitemap route and any listing logic should use this.
- **Declared CLI skills:** `skills.json` (manifest). Workflow list: `skills-workflow.json` (`workflowRepos`). Keep in sync via `npm run skills:workflow`.
- **Images:** Cloudflare account `2cc579c1ec9e426ed585e933ebf4753b` / hash `byE6BTe9lNqo21V57n4aPQ`. Catalog: `lib/cloudflare-images.ts`. Global settings: `docs/sop/cloudflare-images-global-settings.json`.

---

## Commands

| Command | Purpose |
|--------|--------|
| `npm run skills:workflow` | Install workflow repos missing from `skills.json` and update manifest. |
| `npm run consistency-lock-check` | Full 5-step check: declared vs loaded, global CLI, optional hard clean, runtime repo. |
| `npm run consistency-lock-check:hard` | Same plus remove `node_modules` and lockfile, reinstall, then list. |
| `npm run cloudflare:images:sync` | Ensure variants, upload git photos, upload condo photos (Cloudflare primary). |
| `vercel build` / `vercel --prod` | Build and deploy (production only per rule). |

---

## Do not

- Modify `components/idx/*` without explicit approval (IDX/MLS compliance).
- Hardcode NAP or booking/search URLs; use `CONTACT_INFO`.
- Serve site photos only from Cloudflare without a git file under `public/images/`.
- Deploy to preview when production is intended; use `vercel --prod`.
- Skip git add/commit/push when a task is done (unless the user asks to skip).
