# Good Vibrations Health — Website Revamp Project

## Client
**Practitioner:** Fern Wolf
**Business:** Good Vibrations Health
**Current site:** https://goodvibrationshealth.ca
**Location:** Toronto, Ontario (virtual appointments only)
**In practice since:** 1999

## Contact Info
- Phone: 1-905-702-4511
- Email: fernmwolf@gmail.com
- Facebook: https://www.facebook.com/goodvibrationshealth4u
- Twitter/X: https://twitter.com/Good_vibra_hlth
- Current web designer: freshchallenge.ca (being replaced — we are taking over)
- Booking platform: mailto placeholder (fernmwolf@gmail.com) — Calendly free tier when Fern is ready

## POC / Staging
- **Netlify staging URL:** https://good-vibrations.netlify.app/
- **Status:** Live — sent to Fern for review on 2026-06-26
- **Repo:** https://github.com/julian-sookhoo/goodvibrationshealth-revamp
- **Astro project root:** `/site/`

## Project Goal
A massive overhaul to bring in significantly more clients. Not minor fixes — a full strategic redesign of messaging, structure, and conversion mechanics. The site must shift from an esoteric information brochure into a client-acquisition tool.

## Ownership & Maintenance Model
Fern's current setup uses a third-party company (freshchallenge.ca) where even simple changes take days to weeks. **We are taking over full ownership** — designing, building, and maintaining the site going forward. Fern will direct changes to us and we iterate quickly. This is a full stack replacement, not a modification of the existing site.

## Core Objective
Turn first-time visitors (who arrive with a problem) into booked appointments — by speaking to their pain first, building trust second, and making booking frictionless.

## Services Offered (10 total)
| Service | Category |
|---|---|
| Thought Field Therapy (TFT) | Body & Energy |
| Bio-Well | Body & Energy |
| HADO | Vibrational Wellness |
| Hypnosis | Mind & Belief Change |
| Holistic Life Coaching | Coaching & Life |
| Neuro-Linguistic Programming (NLP) | Mind & Belief Change |
| Mindscaping | Mind & Belief Change |
| Psych-K | Mind & Belief Change |
| Source Energy Medicine | Vibrational Wellness |
| WAVE Quantum Hydration | Vibrational Wellness |

## Pricing
| Session | Rate |
|---|---|
| 30 minutes | $60 CAD |
| 60 minutes | $110 CAD |
| Free discovery call | 30 min · $0 (confirmed) |
| First paid session bonus | +15 min complimentary |
| Financial hardship | Donation/exchange accepted |

## Key Decisions — BLOCKING (must resolve before build can start)

These are critical-path blockers. Nothing downstream can be finalized until each is answered.

| Decision | Options | Owner | Date Needed |
|---|---|---|---|
| ~~**Free consultation offer**~~ | ✅ **RESOLVED — 30-minute free discovery call** (confirmed by Fern) | Fern | Done |
| ~~**Booking platform**~~ | ✅ **RESOLVED** — mailto placeholder live; Calendly when Fern is ready | Done | Done |
| ~~**Bio-Well virtual delivery**~~ | ✅ **RESOLVED** — Fern no longer offers Bio-Well. Page kept for referral traffic only. Rewritten as referral page. | Fern | Done |
| **WAVE product model** | Is this sold as a product (needs e-commerce) or an enquiry-only offering? | Fern | Before Phase 3 |
| ~~**Tech stack**~~ | ✅ **RESOLVED — Astro + Tailwind CSS + Netlify/Vercel** | Done | Done |
| ~~**CMS / platform**~~ | ✅ **RESOLVED** — Astro 4.x + Tailwind CSS + Netlify (full replacement) | Done | Done |
| ~~**Legal review of testimonials**~~ | ✅ **RESOLVED** — High-risk entries removed (suicidal depression, parasites, tumour) | Done | Done |
| **Testimonial consent** | Obtain written consent from every named client before publishing | Fern | Before launch |
| **AODA compliance** | What level of accessibility is required? Budget for audit? | Fern + dev | Before launch |

## Key Decisions — NON-BLOCKING (needed before launch)
- [x] Confirm new URL structure / URL redirects — ✅ done, 301s live in netlify.toml
- [x] Confirm whether to retain current web designer — ✅ we are taking over
- [x] Confirm TFT course dates — ✅ evergreen ("contact for next date")
- [x] Coaching structure — ✅ as-needed, no set schedule
- [ ] Decide on final brand colour palette (current: sage/cream/terracotta — pending Fern approval)
- [ ] Commission professional photography session (3 placeholder images in use)
- [ ] Confirm insurance body registrations (affects FAQ answer)
- [ ] Confirm cancellation policy (placeholder on FAQ + Book Now pages)
- [ ] WAVE: enquiry-only confirmed or e-commerce needed?
- [ ] Fern's personal story for About page (placeholder comment in code)

## Project Files
| File | Purpose |
|---|---|
| [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md) | Full audit of the current site |
| [SITE-ARCHITECTURE.md](SITE-ARCHITECTURE.md) | Proposed new site structure |
| [REDESIGN-PLAN.md](REDESIGN-PLAN.md) | Full strategy and recommendations |
| [TECH-SPEC.md](TECH-SPEC.md) | Full technical specification for the Astro build |
| [HANDOFF-PROMPT.md](HANDOFF-PROMPT.md) | Self-contained prompt for new Claude Code build sessions |
| [TASKS.md](TASKS.md) | Prioritized implementation checklist |
| [pages/](pages/) | Page content source files (used during build) |
| [site/](site/) | Astro project — the actual website code |

## Timeline
| Phase | Scope | Status |
|---|---|---|
| Phase 1 — Analysis | Full site audit & strategy | ✅ Complete |
| Phase 2 — Architecture | Site map, URL plan, tech stack | ✅ Complete |
| Phase 3 — Content | All page copy written | ✅ Complete |
| Phase 4 — Design | Visual design, photography | 🔄 In progress — design live, photography pending |
| Phase 5 — Build | Development, POC deployed | ✅ Complete — live at https://good-vibrations.netlify.app/ |
| Phase 6 — Fern Review | POC sent to Fern, awaiting feedback | 🔄 In progress |
| Phase 7 — Refinement | Address Fern's feedback, fill placeholders | Not started |
| Phase 8 — Launch | DNS cutover, SEO setup, sitemap | Not started |

## Known Technical Debt (pre-launch)
- `@astrojs/sitemap` removed — crashes on v3.1.x; re-add when stable version released
- OG image is SVG placeholder — needs real JPG (1200×630) before launch
- 3 placeholder images in use — needs photography session
- Privacy policy and Terms pages are stubs (noindex) — need legal text
- Calendly not yet integrated — mailto placeholder in `BookingCTA.astro`
