# Handoff Prompt — Good Vibrations Health Website Build

> **How to use this file:** Copy everything below the horizontal rule and paste it as your opening message into a new Claude Code chat. That chat has no prior context — this prompt is fully self-contained.

---

## COPY FROM HERE ↓

You are helping build a complete website for **Good Vibrations Health**, a holistic health practice run by **Fern Wolf** based in Toronto, Ontario. All sessions are virtual, serving clients across Canada.

This is a full build from scratch — not a modification of an existing site. The project files (content, architecture, and strategy) already exist in the working directory. Your job is to build the Astro site, using those files as your content source. Do not rewrite strategy, do not question decisions already made — just build.

---

## Project Context

**What this site needs to do:**
Turn first-time visitors (who arrive with a problem — chronic pain, anxiety, fears, life confusion) into booked appointments. Every page must speak to the visitor's problem first, build trust second, and make contacting Fern as frictionless as possible.

**Fern's audience:**
Primarily women 40–65 who have tried conventional medicine and found it incomplete. They are cautious but open. They respond to specific results ("pain from 8/10 to 0 in 2 minutes"), personal warmth, and clear credentials — not to hype or vague promises.

**Services offered (10 total):**
TFT Tapping, Hypnosis, Psych-K, NLP, Mindscaping, Life Coaching, Source Energy Medicine, HADO, WAVE, Bio-Well (referral only — Fern no longer does this directly)

**Booking:** Currently a `mailto:` link to `fernmwolf@gmail.com`. Calendly will be added later — the booking component must be structured for an easy swap (see spec below).

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 4.x |
| Styling | Tailwind CSS 3.x |
| Fonts | Google Fonts — Lora (headings) + Inter (body) |
| Deployment | Netlify (netlify.toml for redirects) |
| Forms | Netlify Forms (contact form on /book/) |
| Analytics | GA4 (script in BaseLayout — defer until after POC) |

---

## Where Everything Lives

All planning documents are in the working directory:

```
[working directory]/
├── TECH-SPEC.md          ← Full technical spec — READ THIS FIRST
├── REDESIGN-PLAN.md      ← Design direction, messaging strategy
├── SITE-ARCHITECTURE.md  ← URL map, nav structure, page templates
├── CONTENT-INVENTORY.md  ← Full audit of current site content
├── TASKS.md              ← Implementation checklist
├── PROJECT.md            ← Client info, pricing, decisions made
└── pages/
    ├── home.md                     ← Homepage content
    ├── about.md                    ← About page content
    ├── services-overview.md        ← Services index content
    ├── faq.md                      ← FAQ content
    ├── book-now.md                 ← Book Now page content
    ├── testimonials.md             ← Testimonials (curated, with notes)
    ├── training.md                 ← Training & Speaking page
    ├── help-hub.md                 ← /help/ index page
    ├── services/
    │   ├── tft.md
    │   ├── hypnosis.md
    │   ├── psych-k.md
    │   ├── nlp.md
    │   ├── mindscaping.md
    │   ├── life-coaching.md
    │   ├── bio-well.md             ← referral page, no booking CTA
    │   ├── source-energy-medicine.md
    │   ├── hado.md
    │   └── wave.md
    ├── conditions/
    │   ├── anxiety-stress.md
    │   ├── chronic-pain.md
    │   ├── sleep.md
    │   ├── fears-phobias.md
    │   ├── weight-habits.md
    │   └── life-direction.md
    ├── blog/
    │   └── post-ideas.md           ← Content calendar (no posts yet)
    └── legal/
        └── privacy-policy.md       ← Stub; legal text to be added later
```

**Start by reading TECH-SPEC.md in full before writing any code.** It contains the complete project structure, design tokens, component specs, content collection schemas, routing table, redirect list, and build order. Everything you need is in there.

---

## Astro Project Location

Create the Astro project at:
```
[working directory]/site/
```

Run:
```bash
cd "[working directory]"
npm create astro@latest site -- --template empty --typescript strict --no-git
cd site
npx astro add tailwind
npx astro add sitemap
```

---

## Design System (Summary — Full Detail in TECH-SPEC.md)

### Colours
```js
// tailwind.config.mjs — key values
sage:    { 400: '#7b9e87', 500: '#5a826a' }   // primary
cream:   { 100: '#faf7f2', 200: '#f4ede0' }   // backgrounds
terra:   { 400: '#c47941', 500: '#a86335' }   // accent CTAs
charcoal:{ 900: '#1c1c1c', 500: '#6b6b6b', 200: '#d4d4d4' }  // text/dividers
```

### Fonts
```html
<!-- In BaseLayout.astro <head> -->
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
```js
// tailwind.config.mjs
fontFamily: {
  heading: ['Lora', 'Georgia', 'serif'],
  body:    ['Inter', 'system-ui', 'sans-serif'],
}
```

### Visual Tone
- Warm, grounded, personal — not clinical, not new-age sparkly
- Main background: `bg-cream-100` (`#faf7f2`)
- Section alternates: `bg-cream-200` for contrast
- Cards: `bg-white` or `bg-cream-200` with `rounded-xl shadow-sm`
- Generous whitespace — this audience needs room to breathe
- Real, warm photography (placeholder images are fine during build — mark them clearly)

---

## Critical Component: BookingCTA (Calendly Placeholder)

**This is the most important component in the site.** Every page ends with it. It currently renders a mailto link but MUST be structured so Calendly can be swapped in with minimal change.

```astro
---
// src/components/ui/BookingCTA.astro
//
// CALENDLY PLACEHOLDER
// Currently: mailto link to fernmwolf@gmail.com
// To add Calendly later:
//   1. Add Calendly popup CSS/JS to BaseLayout.astro head
//   2. Replace the <a> tag with Calendly popup trigger
//   3. Set event URLs per eventType in CALENDLY_URLS object

interface Props {
  eventType?: 'discovery' | 'paid-30' | 'paid-60'
  label?: string
  variant?: 'primary' | 'secondary'
}

const {
  eventType = 'discovery',
  label = 'Book a Free 30-Minute Discovery Call',
  variant = 'primary',
} = Astro.props

const EMAIL = 'fernmwolf@gmail.com'
const SUBJECTS = {
  discovery:  'Free 30-Minute Discovery Call Request',
  'paid-30':  'Appointment Request – 30-Minute Session',
  'paid-60':  'Appointment Request – 60-Minute Session',
}

const href = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECTS[eventType])}`

const baseClass = 'inline-block font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-center'
const variantClass = variant === 'primary'
  ? 'bg-sage-400 hover:bg-sage-500 text-white'
  : 'bg-terra-400 hover:bg-terra-500 text-white'
---
<!-- CALENDLY SWAP POINT -->
<a href={href} class={`${baseClass} ${variantClass}`}>
  {label}
</a>
```

---

## Global Site Data (`src/data/site.ts`)

```ts
export const SITE = {
  name: 'Good Vibrations Health',
  practitioner: 'Fern Wolf',
  tagline: 'Feel Better. Think Clearer. Live With Less Pain.',
  email: 'fernmwolf@gmail.com',
  phone: '1-905-702-4511',
  location: 'Toronto, Ontario',
  serviceArea: 'Virtual appointments across Canada',
  url: 'https://goodvibrationshealth.ca',
  social: {
    facebook: 'https://www.facebook.com/goodvibrationshealth4u',
    twitter: 'https://twitter.com/Good_vibra_hlth',
  },
  pricing: {
    discovery:  { duration: 30, price: 0,   label: 'Free Discovery Call' },
    short:      { duration: 30, price: 60,  label: '30-Minute Session' },
    standard:   { duration: 60, price: 110, label: '60-Minute Session' },
    firstBonus: 'First paid session includes a complimentary extra 15 minutes.',
    hardship:   'If cost is a concern, please reach out — nobody is turned away.',
  },
}
```

---

## Navigation Structure

```
Header (sticky):
[Good Vibrations Health logo/name]
Home | About | Services ▾ | I Need Help With... ▾ | Testimonials | Blog | [Book Now button]

Services dropdown:
  All Services
  ── Mind & Belief Change ──
  Psych-K · NLP · Mindscaping · Hypnosis
  ── Body & Energy ──
  Thought Field Therapy · Bio-Well
  ── Coaching & Life ──
  Life Coaching
  ── Vibrational Wellness ──
  Source Energy Medicine · HADO · WAVE

"I Need Help With..." dropdown:
  Anxiety & Stress → /help/anxiety-stress/
  Chronic Pain → /help/chronic-pain/
  Sleep Problems → /help/sleep/
  Fears & Phobias → /help/fears-phobias/
  Weight & Habits → /help/weight-habits/
  Life Direction & Purpose → /help/life-direction/

Footer (3-col + disclaimer strip):
  Col 1: Name, tagline, phone, email, location note
  Col 2: Quick links
  Col 3: All services linked
  Strip: © · Privacy Policy · Terms · Disclaimer text
```

---

## Homepage Structure

Read `pages/home.md` for full copy. Page sections in order:

1. **Hero** — Headline + subhead + credibility bar + 2 CTAs + Fern photo (placeholder)
2. **"Is This You?"** — Problem recognition section linking to /help/
3. **How It Works** — 3-step visual
4. **Featured Testimonials** — 3 cards (stella-eyers, louise-todd, louise-t)
5. **Meet Fern** — Photo + 2 sentences + link to /about/
6. **Services at a Glance** — 4 category cards
7. **Blog Preview** — 2–3 posts (hide section if no posts exist yet)
8. **Final CTA Banner** — Full-width, sage background, BookingCTA

Credibility bar content (between headline and CTAs):
```
25+ years in practice · 15 certifications · Trained by founders of TFT, HADO & Psych-K · Virtual sessions · Canada-wide
```

---

## Service Pages — Dynamic Route Pattern

`src/content/services/[slug].astro` renders all 10 service pages.

**Standard template sections:**
1. Problem-focused H1 headline (from frontmatter)
2. "What Is [Service]?" — from markdown body
3. "Who Is This For?" — bullet list
4. "What to Expect in a Session" — numbered steps
5. Testimonial (pull from `TESTIMONIALS` array by matching `services` field)
6. `<PricingBlock />` — unless `isBookable: false` (bio-well)
7. `<BookingCTA />` — unless `isBookable: false`
8. FAQ accordion — from markdown body

**Bio-Well exception:** `isBookable: false` in frontmatter. Hide PricingBlock and BookingCTA. Show referral contact instead.

---

## Condition Pages — Dynamic Route Pattern

`src/content/conditions/[slug].astro` renders all 6 condition pages.

**Template sections:**
1. Empathetic H1 headline
2. Empathetic opening paragraph
3. "Here's How I Can Help" — list primary services (linked) with one-sentence descriptions
4. Secondary services (linked, lighter treatment)
5. Testimonial (pull by matching `conditions` field)
6. `<PricingBlock />`
7. `<BookingCTA />`

---

## Key Pages — Special Notes

**`/book/`**
- Lead with BookingCTA component prominently (this is the whole point of the page)
- Below it: session types with prices, "what to expect after booking" steps
- Contact form (Netlify Forms) for people who prefer email
- No Calendly yet — mailto link is the CTA

**`/services/bio-well/`**
- `isBookable: false` — no pricing block, no book now CTA
- Has a referral section instead: "Fern no longer offers Bio-Well directly but can connect you with a colleague"
- Ends with: "reach out" → mailto link, and links to other relevant services

**Testimonials page**
- Pull all testimonials from `src/data/testimonials.ts`
- Group by outcome: Physical Pain | Mental & Emotional | Beliefs & Healing | Training | Professional
- Add disclaimer above testimonials: "Individual results vary and are not guaranteed..."
- IMPORTANT: Remove internal dev notes before rendering (notes are in `pages/testimonials.md` for reference only)

---

## Redirects (`netlify.toml` in `/site/`)

All old URLs must 301 redirect to new ones. Full list in `TECH-SPEC.md` under "301 Redirects". Key ones:

```toml
[[redirects]]
  from = "/hypnotist/"
  to = "/about/"
  status = 301

[[redirects]]
  from = "/contact-fern-wolf/"
  to = "/book/"
  status = 301

[[redirects]]
  from = "/fern-wolf-reviews/"
  to = "/testimonials/"
  status = 301

# ... (see TECH-SPEC.md for complete list)
```

---

## SEO Requirements

Every page needs:
- Unique `<title>` — format: `[Page Title] | Good Vibrations Health`
- Unique `<meta name="description">` — 150–160 chars
- `<link rel="canonical" />` — self-referencing
- Open Graph tags (title, description, image, url, type)

BaseLayout.astro accepts `title`, `description`, `ogImage`, `canonical` props.

Homepage schema (LocalBusiness + Person) is in TECH-SPEC.md — copy it exactly.
Service pages: add `Service` schema with `serviceType` and `areaServed: "Canada"`.
FAQ page + service pages with FAQs: add `FAQPage` schema.

---

## Build Order

Do not skip ahead. Each step must be working before proceeding:

1. Astro project scaffold + Tailwind config + fonts
2. `src/data/site.ts` and `src/data/testimonials.ts`
3. `BaseLayout.astro` (head, meta, schema, font links, body wrapper)
4. `Header.astro` + `Footer.astro`
5. UI components: `Button`, `BookingCTA`, `PricingBlock`, `TestimonialCard`, `FAQAccordion`, `CredibilityBar`, `Disclaimer`
6. Section components: `Hero`, `IsThisYou`, `HowItWorks`, `FeaturedTestimonials`, `MeetFern`, `ServiceCategories`, `CTABanner`
7. **Homepage (`pages/index.astro`)** — build and review before continuing. This validates the entire design system.
8. Content collections config (`src/content/config.ts`)
9. Populate `src/content/services/` from planning files in `pages/services/`
10. `pages/services/[slug].astro` — dynamic service template
11. Populate `src/content/conditions/` from planning files in `pages/conditions/`
12. `pages/help/[slug].astro` + `pages/help/index.astro`
13. `pages/about.astro`
14. `pages/services/index.astro`
15. `pages/testimonials.astro`
16. `pages/faq.astro`
17. `pages/book.astro`
18. `pages/training.astro`
19. `pages/blog/index.astro` (empty state — "posts coming soon")
20. `pages/privacy-policy.astro`
21. `pages/404.astro`
22. `netlify.toml` with all redirects
23. Final SEO pass — meta/OG on every page
24. `npm run build` — fix any build errors
25. Deploy to Netlify/Vercel staging URL

---

## What "Done" Looks Like for the POC

- All pages render at correct URLs with no broken links
- Navigation works on desktop (dropdowns) and mobile (hamburger)
- Every "Book" CTA opens a mailto to `fernmwolf@gmail.com` with the correct subject line
- All 10 service pages render from the dynamic route
- All 6 condition pages render from the dynamic route
- 301 redirects work (test old URLs on the deployed Netlify domain)
- Site scores 90+ on Google PageSpeed Insights (mobile)
- No console errors in the browser
- Placeholder images are visible and correctly proportioned (no broken image icons)

---

## What to Ask If Unsure

If you encounter an ambiguity not covered here or in TECH-SPEC.md, check the relevant planning file in `pages/`. If the answer isn't there, leave a clearly marked `<!-- TODO: [question] -->` comment in the code rather than guessing, and flag it in your response. Do not invent content — use what's in the planning files.

## END OF HANDOFF PROMPT ↑
