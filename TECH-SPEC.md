# Technical Specification — Good Vibrations Health Website

## Stack

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | Astro | 4.x | Static-first, content collections, dynamic routes |
| Styling | Tailwind CSS | 3.x | Utility-first; custom design tokens via config |
| Fonts | Google Fonts | — | Lora (headings) + Inter (body) via `@astrojs/fonts` or manual link |
| Deployment | Netlify or Vercel | — | Zero-config Astro adapter; free tier |
| Booking | Calendly (placeholder) | — | Currently `mailto:` link; component structured for Calendly swap |
| Forms | Netlify Forms or Formspree | — | Contact form on Book Now page |
| Analytics | Google Analytics 4 | — | Via Partytown integration or simple script in BaseLayout |

### Key Astro integrations to install
```bash
npm create astro@latest
npx astro add tailwind
npx astro add sitemap
```

---

## Project Directory Structure

The Astro site lives at `/site/` within the project root:

```
goodvibrationshealth-revamp/
├── site/                          ← Astro project root
│   ├── public/
│   │   ├── images/
│   │   │   ├── fern-hero.jpg          (placeholder until real photo)
│   │   │   ├── fern-about.jpg         (placeholder)
│   │   │   ├── fern-candid.jpg        (placeholder)
│   │   │   └── og-default.jpg         (1200×630 OG image)
│   │   ├── favicon.svg
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── BaseLayout.astro   (head, header, footer, schema)
│   │   │   │   ├── Header.astro       (nav + persistent Book Now button)
│   │   │   │   └── Footer.astro       (links, contact, disclaimer, legal)
│   │   │   ├── ui/
│   │   │   │   ├── Button.astro
│   │   │   │   ├── BookingCTA.astro   ← CALENDLY PLACEHOLDER LIVES HERE
│   │   │   │   ├── PricingBlock.astro
│   │   │   │   ├── TestimonialCard.astro
│   │   │   │   ├── ServiceCard.astro
│   │   │   │   ├── ConditionCard.astro
│   │   │   │   ├── FAQAccordion.astro
│   │   │   │   ├── CredibilityBar.astro
│   │   │   │   └── Disclaimer.astro
│   │   │   └── sections/
│   │   │       ├── Hero.astro
│   │   │       ├── IsThisYou.astro
│   │   │       ├── HowItWorks.astro
│   │   │       ├── FeaturedTestimonials.astro
│   │   │       ├── MeetFern.astro
│   │   │       ├── ServiceCategories.astro
│   │   │       └── CTABanner.astro
│   │   ├── content/
│   │   │   ├── config.ts              (collection schemas)
│   │   │   ├── services/              (10 .md files — one per service)
│   │   │   ├── conditions/            (6 .md files — one per condition)
│   │   │   └── blog/                  (empty; posts added post-launch)
│   │   ├── data/
│   │   │   ├── site.ts                (global config: name, email, phone)
│   │   │   ├── testimonials.ts        (structured testimonial objects)
│   │   │   └── navigation.ts          (nav structure + dropdown config)
│   │   ├── pages/
│   │   │   ├── index.astro            (home)
│   │   │   ├── about.astro
│   │   │   ├── services/
│   │   │   │   ├── index.astro        (services overview)
│   │   │   │   └── [slug].astro       (dynamic — all 10 services)
│   │   │   ├── help/
│   │   │   │   ├── index.astro        (help hub)
│   │   │   │   └── [slug].astro       (dynamic — all 6 conditions)
│   │   │   ├── testimonials.astro
│   │   │   ├── faq.astro
│   │   │   ├── book.astro
│   │   │   ├── training.astro
│   │   │   ├── blog/
│   │   │   │   ├── index.astro
│   │   │   │   └── [slug].astro
│   │   │   ├── privacy-policy.astro
│   │   │   └── 404.astro
│   │   └── styles/
│   │       └── global.css
│   ├── astro.config.mjs
│   ├── tailwind.config.mjs
│   ├── tsconfig.json
│   ├── netlify.toml                   (redirects + headers)
│   └── package.json
├── pages/                         ← Content source files (planning)
├── TECH-SPEC.md
├── HANDOFF-PROMPT.md
└── ...
```

---

## Design System

### Colour Palette

```js
// tailwind.config.mjs — extend colors
colors: {
  sage: {
    50:  '#f4f7f5',
    100: '#e2ebe5',
    200: '#c5d7cb',
    300: '#9bbda6',
    400: '#7b9e87',   // PRIMARY — buttons, headings accent, nav active
    500: '#5a826a',   // hover states
    600: '#476856',
    700: '#395446',
    800: '#2f4339',
    900: '#27372f',
  },
  cream: {
    50:  '#fdfcf8',
    100: '#faf7f2',   // MAIN BACKGROUND
    200: '#f4ede0',   // section alternates, cards
    300: '#eaddca',
  },
  terra: {
    400: '#c47941',   // ACCENT — secondary CTAs, highlights
    500: '#a86335',   // hover
  },
  charcoal: {
    900: '#1c1c1c',   // primary text
    700: '#3d3d3d',
    500: '#6b6b6b',   // muted text, captions
    200: '#d4d4d4',   // borders, dividers
  },
}
```

### Typography

```js
// tailwind.config.mjs — extend fontFamily
fontFamily: {
  heading: ['Lora', 'Georgia', 'serif'],
  body:    ['Inter', 'system-ui', 'sans-serif'],
}
```

Load via `<link>` in BaseLayout.astro head:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Type Scale (add to tailwind config or use defaults)

| Use | Class | Size |
|---|---|---|
| H1 (hero) | `text-5xl lg:text-6xl font-heading font-bold` | 48–60px |
| H2 (section) | `text-3xl lg:text-4xl font-heading font-semibold` | 30–36px |
| H3 (card/sub) | `text-xl lg:text-2xl font-heading font-semibold` | 20–24px |
| Body | `text-base font-body` | 16px |
| Small/caption | `text-sm font-body` | 14px |
| Lead paragraph | `text-lg lg:text-xl font-body` | 18–20px |

### Spacing & Layout

```js
// Max content width
maxWidth: { content: '1200px', narrow: '760px' }

// Standard section padding
// py-16 lg:py-24 (64px / 96px)

// Standard container
// mx-auto px-6 lg:px-10 max-w-content
```

### Component Visual Rules

- **Border radius:** `rounded-xl` (12px) for cards; `rounded-lg` (8px) for buttons and inputs
- **Card style:** `bg-cream-200 rounded-xl p-6 lg:p-8 shadow-sm`
- **Shadows:** Use `shadow-sm` and `shadow-md` only — warm tint: `shadow-sage-900/5`
- **Dividers:** `border-charcoal-200` — use sparingly
- **Section alternates:** Odd sections on `bg-cream-100`, even on `bg-cream-200` or `bg-white`

---

## Component Specifications

### `BookingCTA.astro` — Calendly Placeholder

```astro
---
/**
 * CALENDLY PLACEHOLDER
 * Currently renders a mailto: link.
 * 
 * TO SWAP IN CALENDLY:
 * 1. Add Calendly CSS/JS to BaseLayout.astro
 * 2. Replace the <a> tag below with:
 *    <a href="" onclick="Calendly.initPopupWidget({url: CALENDLY_URLS[eventType]}); return false;">
 * 3. Set CALENDLY_URLS to Fern's actual Calendly event URLs
 */

interface Props {
  eventType?: 'discovery' | 'paid-30' | 'paid-60'
  label?: string
  variant?: 'primary' | 'secondary'
  class?: string
}

const {
  eventType = 'discovery',
  label = 'Book a Free 30-Minute Discovery Call',
  variant = 'primary',
} = Astro.props

const EMAIL = 'fernmwolf@gmail.com'

const SUBJECTS = {
  discovery: 'Free 30-Minute Discovery Call Request',
  'paid-30':  'Appointment Request – 30-Minute Session',
  'paid-60':  'Appointment Request – 60-Minute Session',
}

const href = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECTS[eventType])}`

const classes = variant === 'primary'
  ? 'inline-block bg-sage-400 hover:bg-sage-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
  : 'inline-block bg-terra-400 hover:bg-terra-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
---
<!-- CALENDLY SWAP POINT: replace <a> tag below when ready -->
<a href={href} class={classes}>
  {label}
</a>
```

### `Button.astro`

```astro
---
interface Props {
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit'
}
// primary: sage-400 bg / white text
// secondary: terra-400 bg / white text
// ghost: transparent / sage-400 border + text
---
```

### `PricingBlock.astro`

Reusable block used on every service and condition page.
```astro
---
// Default values — override per page if needed
const {
  showDiscovery = true,
  discoveryNote = 'Free 30-minute discovery call for new clients.'
} = Astro.props
---
<div class="bg-cream-200 rounded-xl p-6 border border-cream-300">
  <p>30 minutes: <strong>$60 CAD</strong> · 60 minutes: <strong>$110 CAD</strong></p>
  <p>Your first session includes a complimentary extra 15 minutes.</p>
  {showDiscovery && <p class="text-sm text-charcoal-500">{discoveryNote}</p>}
  <p class="text-sm text-charcoal-500 italic">
    If cost is a concern, please reach out — nobody is turned away.
  </p>
  <BookingCTA label="Book a Free 30-Minute Discovery Call" />
</div>
```

### `FAQAccordion.astro`

Pure CSS accordion (no JS required — uses `<details>`/`<summary>`):
```astro
---
interface FAQItem { question: string; answer: string }
interface Props { items: FAQItem[] }
---
{items.map(item => (
  <details class="border-b border-charcoal-200 py-4">
    <summary class="font-semibold cursor-pointer list-none flex justify-between">
      {item.question}
      <span class="text-sage-400">+</span>
    </summary>
    <p class="mt-3 text-charcoal-700">{item.answer}</p>
  </details>
))}
```

### `TestimonialCard.astro`

```astro
---
interface Props {
  quote: string
  name: string
  location?: string
  result?: string   // bold summary line above quote
}
---
<blockquote class="bg-white rounded-xl p-6 shadow-sm">
  {result && <p class="font-semibold text-sage-500 mb-2">{result}</p>}
  <p class="italic text-charcoal-700">"{quote}"</p>
  <footer class="mt-4 text-sm text-charcoal-500">
    — {name}{location ? `, ${location}` : ''}
  </footer>
</blockquote>
```

### `CredibilityBar.astro`

Appears directly below the hero headline on the homepage.
```astro
<!-- Four credibility signals in a horizontal rule -->
<div class="flex flex-wrap justify-center gap-6 text-sm text-charcoal-500 border-y border-cream-300 py-4">
  <span>25+ years in practice</span>
  <span>·</span>
  <span>15 certifications</span>
  <span>·</span>
  <span>Trained by founders of TFT, HADO & Psych-K</span>
  <span>·</span>
  <span>Virtual sessions · Canada-wide</span>
</div>
```

### `Header.astro` — Navigation

Desktop nav with dropdowns; mobile hamburger. The "Book Now" button is always visible:

```
[Logo/Name]    Home  About  Services▾  I Need Help With▾  Testimonials  Blog    [Book Now]
```

Services dropdown:
- All Services
- — Mind & Belief Change —
- Psych-K / NLP / Mindscaping / Hypnosis
- — Body & Energy —
- TFT / Bio-Well
- — Coaching & Life —
- Life Coaching
- — Vibrational Wellness —
- Source Energy Medicine / HADO / WAVE

"I Need Help With" dropdown:
- Anxiety & Stress
- Chronic Pain
- Sleep Problems
- Fears & Phobias
- Weight & Habits
- Life Direction & Purpose

Mobile: Hamburger → full-screen or slide-in drawer.

### `Footer.astro`

Three columns + disclaimer strip:
```
Col 1: Logo, tagline, contact (phone, email, location)
Col 2: Quick links (Home, About, Services, Testimonials, Blog, Book Now)
Col 3: Services list (all 10, linked)

Bottom strip:
© 2025 Good Vibrations Health · Privacy Policy · Terms · Disclaimer
"Services are not a substitute for professional medical, psychological, or counselling care."
```

---

## Content Collections Schema (`src/content/config.ts`)

```ts
import { defineCollection, z } from 'astro:content'

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['mind-belief', 'body-energy', 'coaching', 'vibrational']),
    headline: z.string(),
    description: z.string(),          // short, for service cards
    isBookable: z.boolean().default(true),
    conditions: z.array(z.string()).optional(),  // related condition slugs
    order: z.number().optional(),     // display order within category
  }),
})

const conditions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    headline: z.string(),
    description: z.string(),          // short, for condition cards on help hub
    primaryServices: z.array(z.string()),   // service slugs
    secondaryServices: z.array(z.string()).optional(),
    featuredTestimonial: z.string().optional(),  // testimonial key from data/testimonials.ts
    targetKeyword: z.string().optional(),
  }),
})

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    targetKeyword: z.string().optional(),
    relatedServices: z.array(z.string()).optional(),
  }),
})

export const collections = { services, conditions, blog }
```

---

## `src/data/site.ts` — Global Config

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
    discovery: { duration: 30, price: 0, label: 'Free Discovery Call' },
    short:     { duration: 30, price: 60, label: '30-Minute Session' },
    standard:  { duration: 60, price: 110, label: '60-Minute Session' },
    bonus:     'First paid session includes a complimentary extra 15 minutes.',
    hardship:  'If cost is a concern, reach out — nobody is turned away.',
  },
}
```

---

## `src/data/testimonials.ts`

```ts
export const TESTIMONIALS = [
  {
    key: 'stella-eyers',
    name: 'Stella Eyers',
    location: 'Innisfil, ON',
    result: 'Pain from 10/10 to 2/10 · Best sleep in 15 years',
    quote: 'Best sleep in 15 years. I woke up completely pain-free. The pain in my arm and body went from a 10 to a 2.',
    services: ['tft', 'source-energy-medicine'],
    conditions: ['chronic-pain', 'sleep'],
    featured: true,
  },
  {
    key: 'louise-todd',
    name: 'Louise Todd',
    location: 'Barrie, ON',
    result: 'Chronic lower back pain resolved — pain-free for 4 years',
    quote: 'My chronic lower back pain that I had for years was completely resolved. I've been pain-free for four years.',
    services: ['tft'],
    conditions: ['chronic-pain'],
    featured: true,
  },
  {
    key: 'louise-t',
    name: 'Louise T.',
    location: '',
    result: 'Back pain: 8/10 → 0 in under 2 minutes',
    quote: 'My lower back pain went from 8 out of 10 to 0 within 2 minutes of the tapping sequence.',
    services: ['tft'],
    conditions: ['chronic-pain'],
    featured: true,
  },
  {
    key: 'diana-b',
    name: 'Diana B.',
    location: '',
    result: 'Pain reduced within one hour',
    quote: 'Pain went from 10 to 2 within the first hour. Sleep quality improved significantly.',
    services: ['source-energy-medicine'],
    conditions: ['chronic-pain', 'sleep'],
    featured: false,
  },
  {
    key: 'f-donohoe',
    name: 'F Donohoe',
    location: '',
    result: 'Deep emotional release',
    quote: 'I felt a powerful emotional release — like attending a Dr. Joe Dispenza advanced retreat.',
    services: ['hypnosis'],
    conditions: ['anxiety-stress'],
    featured: false,
  },
  {
    key: 'linda-m',
    name: 'Linda M.',
    location: '',
    result: 'Allergies resolved through belief work',
    quote: 'I cancelled the belief that I was allergic — and my allergies went away. Confirmed with kinesiology testing afterwards.',
    services: ['psych-k'],
    conditions: ['weight-habits'],
    featured: false,
  },
  {
    key: 'camera-layden-tapp',
    name: 'Camera Layden-Tapp',
    location: '',
    result: 'Severe chronic skin condition eliminated in 2 months',
    quote: 'A severe flaking red rash was nearly eliminated within a month and completely gone within two months. My energy increased, my sleep improved, and my husband\'s joint pain reduced as well.',
    services: ['tft', 'source-energy-medicine'],
    conditions: ['chronic-pain'],
    featured: false,
  },
  {
    key: 'michele-m',
    name: 'Michele M.',
    location: '',
    result: 'Regained life direction',
    quote: 'Fern helped me regain my life direction.',
    services: ['life-coaching'],
    conditions: ['life-direction'],
    featured: false,
  },
  {
    key: 'lynda',
    name: 'Lynda',
    location: 'Ontario',
    result: 'TFT Tapping Course',
    quote: 'An amazing experience with incredible results.',
    services: ['tft'],
    conditions: [],
    featured: false,
  },
  {
    key: 'meaghan-s',
    name: 'Meaghan S.',
    location: '',
    result: 'Pre-workshop anxiety eliminated',
    quote: 'She eliminated my pre-workshop anxiety completely. The workshop was relaxed and fun.',
    services: ['tft'],
    conditions: ['anxiety-stress', 'fears-phobias'],
    featured: false,
  },
  {
    key: 'mandie-crawford',
    name: 'Mandie Crawford',
    location: 'Calgary, AB',
    result: 'Business Woman of the Year 2010 — professional endorsement',
    quote: 'Fern\'s work has had a profound impact on my clients and my community.',
    services: [],
    conditions: [],
    featured: false,
  },
]

export type Testimonial = typeof TESTIMONIALS[0]
```

---

## Routing & URL Map

| Route file | URL | Content source |
|---|---|---|
| `pages/index.astro` | `/` | Inline + data files |
| `pages/about.astro` | `/about/` | `pages/about.md` (planning file) |
| `pages/services/index.astro` | `/services/` | `pages/services-overview.md` |
| `pages/services/[slug].astro` | `/services/tft/` etc. | `src/content/services/*.md` |
| `pages/help/index.astro` | `/help/` | `pages/help-hub.md` |
| `pages/help/[slug].astro` | `/help/anxiety-stress/` etc. | `src/content/conditions/*.md` |
| `pages/testimonials.astro` | `/testimonials/` | `src/data/testimonials.ts` |
| `pages/faq.astro` | `/faq/` | `pages/faq.md` |
| `pages/book.astro` | `/book/` | `pages/book-now.md` |
| `pages/training.astro` | `/training/` | `pages/training.md` |
| `pages/blog/index.astro` | `/blog/` | `src/content/blog/` |
| `pages/blog/[slug].astro` | `/blog/[slug]/` | `src/content/blog/*.md` |
| `pages/privacy-policy.astro` | `/privacy-policy/` | `pages/legal/privacy-policy.md` |
| `pages/404.astro` | `/404` | Custom |

---

## 301 Redirects (`netlify.toml`)

```toml
[[redirects]]
  from = "/hypnotist/"
  to = "/about/"
  status = 301

[[redirects]]
  from = "/holistic-therapy-services/"
  to = "/services/"
  status = 301

[[redirects]]
  from = "/natural-wellness-speaker/"
  to = "/training/"
  status = 301

[[redirects]]
  from = "/fern-wolf-reviews/"
  to = "/testimonials/"
  status = 301

[[redirects]]
  from = "/gratitude-2/"
  to = "/about/"
  status = 301

[[redirects]]
  from = "/contact-fern-wolf/"
  to = "/book/"
  status = 301

[[redirects]]
  from = "/hypnosis-therapy/"
  to = "/services/hypnosis/"
  status = 301

[[redirects]]
  from = "/holistic-life-coaching/"
  to = "/services/life-coaching/"
  status = 301

[[redirects]]
  from = "/neuro-linguistic-programming/"
  to = "/services/nlp/"
  status = 301

[[redirects]]
  from = "/wave-quantum-hydration/"
  to = "/services/wave/"
  status = 301

[[redirects]]
  from = "/bio-well/"
  to = "/services/bio-well/"
  status = 301

[[redirects]]
  from = "/thought-field-therapy/"
  to = "/services/thought-field-therapy/"
  status = 301

[[redirects]]
  from = "/hado/"
  to = "/services/hado/"
  status = 301

[[redirects]]
  from = "/mindscaping/"
  to = "/services/mindscaping/"
  status = 301

[[redirects]]
  from = "/psych-k/"
  to = "/services/psych-k/"
  status = 301

[[redirects]]
  from = "/source-energy-medicine/"
  to = "/services/source-energy-medicine/"
  status = 301
```

---

## SEO Implementation

### BaseLayout.astro — Meta Tags

```astro
---
interface Props {
  title: string
  description: string
  ogImage?: string
  canonical?: string
  noindex?: boolean
}
const {
  title,
  description,
  ogImage = '/images/og-default.jpg',
  canonical = Astro.url.href,
  noindex = false,
} = Astro.props
const fullTitle = `${title} | Good Vibrations Health`
---
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  {noindex && <meta name="robots" content="noindex" />}

  <!-- Open Graph -->
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={new URL(ogImage, Astro.site)} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />

  <!-- Schema: LocalBusiness -->
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Good Vibrations Health",
    "description": "Virtual holistic health services across Canada — TFT tapping, hypnosis, life coaching, NLP, Psych-K, and more.",
    "url": "https://goodvibrationshealth.ca",
    "telephone": "+19057024511",
    "email": "fernmwolf@gmail.com",
    "areaServed": "Canada",
    "priceRange": "$$",
    "founder": {
      "@type": "Person",
      "name": "Fern Wolf",
      "jobTitle": "Holistic Health Practitioner",
      "hasCredential": [
        "Certified Hypnotist — National Guild of Hypnotists",
        "TFT Advanced Tapping Facilitator & Instructor",
        "Psych-K Advanced Practitioner",
        "Certified NLP Practitioner"
      ]
    }
  })} />
</head>
```

### Per-Page Meta (target values)

| Page | Title | Description |
|---|---|---|
| Home | Feel Better. Think Clearer. Live With Less Pain. | Virtual holistic health services across Canada. TFT tapping, hypnosis, life coaching, NLP & more with Fern Wolf — 25+ years, 15 certifications. |
| About | About Fern Wolf — Holistic Health Practitioner | Fern Wolf has helped clients across Canada reclaim their health since 1999. 15 certifications, trained by the founders of TFT, HADO & Psych-K. |
| Services | Holistic Health Services — Virtual Across Canada | 10 natural healing modalities including TFT tapping, hypnosis, Psych-K, NLP, mindscaping & life coaching. Book a free 30-minute discovery call. |
| TFT | Thought Field Therapy (TFT) Online — Canada | TFT tapping practitioner Fern Wolf offers virtual sessions across Canada. Rapid relief for anxiety, pain, trauma & phobias. |
| Hypnosis | Online Hypnotherapy Canada — Anxiety, Weight & More | Virtual hypnosis sessions with certified hypnotist Fern Wolf. Simpson Protocol. Weight, sleep, anxiety, phobias & more. |
| Psych-K | Psych-K Practitioner Online — Canada | Advanced Psych-K sessions with Fern Wolf. Rewrite limiting beliefs at the subconscious level. Virtual, Canada-wide. |
| Anxiety | Natural Anxiety Relief Online — Canada | Holistic, drug-free approaches to anxiety and stress. TFT, hypnosis, NLP & more. Virtual sessions across Canada with Fern Wolf. |
| Chronic Pain | Natural Chronic Pain Relief — Virtual Canada | TFT tapping and holistic approaches for chronic pain. Specific, measurable results. Virtual sessions with Fern Wolf. |
| Testimonials | Client Results — Good Vibrations Health | Real client outcomes: chronic pain resolved, sleep restored, fears eliminated. See what's possible with holistic therapy. |
| Book | Book a Session — Good Vibrations Health | Book a free 30-minute discovery call or paid session with Fern Wolf. Virtual sessions available across Canada. |
| FAQ | FAQ — Good Vibrations Health | Common questions about virtual holistic therapy sessions, pricing, insurance, and what to expect. |

---

## Image Placeholders (until real photos arrive)

Use these dimensions so layout is accurate from day one:

| Image | Dimensions | Usage |
|---|---|---|
| `fern-hero.jpg` | 800×900px (portrait) | Homepage hero |
| `fern-about.jpg` | 700×800px (portrait) | About page |
| `fern-candid.jpg` | 600×600px (square) | Meet Fern section |
| `og-default.jpg` | 1200×630px (landscape) | OG share image |

Use a warm solid fill (`#e2ebe5`) or a stock Unsplash wellness photo as placeholder. Keep an obvious "PHOTO PLACEHOLDER" label visible during development so it's never accidentally shipped.

---

## Build Order

Build in this sequence so each stage is independently reviewable:

1. `npm create astro@latest` in `/site/` — choose "Empty" template
2. Install + configure Tailwind, add design tokens to `tailwind.config.mjs`
3. Load Google Fonts + set up `global.css`
4. Create `src/data/site.ts` and `src/data/testimonials.ts`
5. Build `BaseLayout.astro` (head, meta, schema, font links)
6. Build `Header.astro` and `Footer.astro`
7. Build all UI components: `Button`, `BookingCTA`, `PricingBlock`, `TestimonialCard`, `FAQAccordion`, `CredibilityBar`, `Disclaimer`
8. **Build homepage** (`pages/index.astro`) — all sections. This is the design validation step.
9. Configure content collections (`src/content/config.ts`)
10. Populate `src/content/services/` from planning files
11. Build `pages/services/[slug].astro` — dynamic service template
12. Populate `src/content/conditions/` from planning files
13. Build `pages/help/[slug].astro` + `pages/help/index.astro`
14. Build remaining static pages: about, services index, testimonials, faq, book, training, privacy-policy, 404
15. Set up `netlify.toml` with all 301 redirects
16. Add sitemap integration
17. Final pass: all meta titles + descriptions, OG tags, schema on dynamic pages
18. Deploy to Netlify/Vercel staging URL — share with Fern for review

---

## Deployment

### Netlify (preferred)
```bash
# Build command
npm run build

# Publish directory
dist

# Environment: Node 20.x
```

Push to GitHub → Connect repo to Netlify → Auto-deploys on every push. The `netlify.toml` file handles redirects automatically.

### DNS Cutover (when ready to go live)
1. In Netlify: add custom domain `goodvibrationshealth.ca`
2. Netlify provides nameservers (or A/CNAME records)
3. Update DNS at registrar to point to Netlify
4. Netlify provisions SSL automatically via Let's Encrypt
5. Confirm all 301 redirects are working on the live domain
6. Submit new sitemap to Google Search Console
