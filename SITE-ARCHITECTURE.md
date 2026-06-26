# Site Architecture — Proposed Redesign

## Navigation Structure

```
HOME
ABOUT
SERVICES  (dropdown)
  ├── All Services Overview
  ├── ─── Mind & Belief Change ───
  ├── Psych-K
  ├── NLP (Neuro-Linguistic Programming)
  ├── Mindscaping
  ├── Hypnosis
  ├── ─── Body & Energy ───
  ├── Thought Field Therapy (TFT)
  ├── Bio-Well
  ├── ─── Coaching & Life ───
  ├── Holistic Life Coaching
  └── ─── Vibrational Wellness ───
      ├── Source Energy Medicine
      ├── HADO
      └── WAVE Quantum Hydration
I NEED HELP WITH...  (dropdown)
  ├── Anxiety & Stress
  ├── Chronic Pain
  ├── Sleep Problems
  ├── Fears & Phobias
  ├── Weight & Habits
  └── Life Direction & Purpose
TESTIMONIALS
BLOG
[ BOOK NOW ]  ← always-visible CTA button, highlighted colour
```

> **Navigation note (post-review):** Training & Speaking should be accessible via About page link and its own /training/ URL, but does not need a top-nav slot. The "I Need Help With..." dropdown resolves to /help/ as its index page (now created at pages/help-hub.md).

---

## Legal Pages (Required — not in nav, in footer)

| Page | URL | Notes |
|---|---|---|
| Privacy Policy | /privacy-policy/ | PIPEDA required; stub at pages/legal/privacy-policy.md |
| Terms of Service | /terms-of-service/ | Covers booking, cancellation, scope, liability |
| Disclaimer | /disclaimer/ OR in footer | Non-medical services disclaimer |

---

## URL Map

| Page | Current URL | Proposed URL | Action |
|---|---|---|---|
| Home | / | / | Rewrite |
| About | /hypnotist/ | /about/ | Redirect + Rewrite |
| Services Overview | /holistic-therapy-services/ | /services/ | Redirect + Restructure |
| TFT | /thought-field-therapy/ | /services/thought-field-therapy/ | Keep slug, move path |
| Bio-Well | /bio-well/ | /services/bio-well/ | Keep slug, move path |
| HADO | /hado/ | /services/hado/ | Keep slug, move path |
| Hypnosis | /hypnosis-therapy/ | /services/hypnosis/ | Redirect + Keep |
| Life Coaching | /holistic-life-coaching/ | /services/life-coaching/ | Redirect + Keep |
| NLP | /neuro-linguistic-programming/ | /services/nlp/ | Redirect + Keep |
| Mindscaping | /mindscaping/ | /services/mindscaping/ | Keep slug |
| Psych-K | /psych-k/ | /services/psych-k/ | Keep slug |
| Source Energy Medicine | /source-energy-medicine/ | /services/source-energy-medicine/ | Keep slug |
| WAVE | /wave-quantum-hydration/ | /services/wave/ | Redirect + Keep |
| Training & Speaking | /natural-wellness-speaker/ | /training/ | Redirect + Rewrite |
| Testimonials | /fern-wolf-reviews/ | /testimonials/ | Redirect + Restructure |
| Gratitude | /gratitude-2/ | Removed from nav | Redirect → /about/ |
| Blog | /blog/ | /blog/ | Keep + Revive |
| Contact/Book | /contact-fern-wolf/ | /book/ | Redirect + Overhaul |
| **NEW** Anxiety & Stress | (doesn't exist) | /help/anxiety-stress/ | Create |
| **NEW** Chronic Pain | (doesn't exist) | /help/chronic-pain/ | Create |
| **NEW** Sleep Problems | (doesn't exist) | /help/sleep/ | Create |
| **NEW** Fears & Phobias | (doesn't exist) | /help/fears-phobias/ | Create |
| **NEW** Weight & Habits | (doesn't exist) | /help/weight-habits/ | Create |
| **NEW** Life Direction | (doesn't exist) | /help/life-direction/ | Create |
| **NEW** Help Hub | (doesn't exist) | /help/ | Create — index page for all condition pages; fixes broken /help/ links |
| **NEW** FAQ | (doesn't exist) | /faq/ | Create |
| **NEW** Training | /natural-wellness-speaker/ | /training/ | Redirect + full page (was a blurb only) |
| **NEW** Privacy Policy | (doesn't exist) | /privacy-policy/ | Create — PIPEDA required |
| **NEW** Terms of Service | (doesn't exist) | /terms-of-service/ | Create before launch |
| Old blog posts (2018) | /the-science-behind-source-energy-medicine/ | TBD — rewrite or redirect | Rewrite as fresh content or 301 to updated post |
| Old blog posts (2018) | /power-to-create-abundance/ | TBD | Same — rewrite or 301 |

---

## Page Templates Required

### Template A: Homepage
- Hero (headline + subhead + 2 CTAs + photo)
- "Is this you?" problem list
- How it works (3-step visual)
- Featured testimonials (3)
- Meet Fern snippet
- Services at a glance (4 category cards)
- Blog preview (2–3 posts)
- Final CTA banner

### Template B: About Page
- Who I help (opener)
- My approach / philosophy
- Biography and personal story
- Credentials grid
- Speaking & training mention
- Teacher acknowledgments (brief)
- Video embed (if filmed)
- CTA

### Template C: Services Overview
- Intro paragraph
- 4 category cards with modalities listed
- Pricing block
- "Not sure where to start?" → condition pages
- CTA

### Template D: Individual Service Page
- Problem-focused headline
- "What is [service]?" (plain language)
- "Who is this for?" bullet list
- "What to expect in a session" (step-by-step)
- Relevant testimonial(s)
- Pricing block
- Book Now CTA button
- FAQ accordion (3–5 questions)

### Template E: Condition Landing Page (NEW)
- Empathetic headline targeting the condition
- Empathetic opening paragraph
- "Here's how I can help" with relevant services listed
- Relevant testimonial
- How sessions work (brief)
- Pricing
- Book Now CTA

### Template F: Testimonials Page
- Intro
- Organized sections by outcome (Pain Relief | Mental/Emotional | Habit Change | Training)
- Each testimonial: name, location, result summary, quote
- Google Reviews embed (if available)
- CTA

### Template G: Blog Post
- Title (SEO-targeted)
- Author + date
- Featured image
- Body content
- Related services sidebar/callout
- CTA at bottom: "Ready to experience this? Book a free discovery call."

### Template H: Book Now Page
- Intro: "Let's get started"
- Embedded booking calendar (Calendly / Jane / Acuity) — primary element
- Session options with prices
- FAQ: insurance, what to expect, cancellation
- Alternative: phone + email for those who prefer it

---

## Service Categories & Grouping Logic

### Mind & Belief Change
*For clients who want to break patterns, rewire beliefs, and change behaviour.*
- Psych-K — subconscious belief rewriting
- NLP — language and behaviour reprogramming
- Mindscaping — metaphor-based unconscious work
- Hypnosis — Simpson Protocol, superconscious access

### Body & Energy
*For clients dealing with physical pain, fatigue, or wanting a health baseline measurement.*
- Thought Field Therapy (TFT) — meridian tapping for physical + emotional pain
- Bio-Well — energy field assessment and chakra mapping

### Coaching & Life Transformation
*For clients navigating life transitions, seeking purpose, or wanting ongoing support.*
- Holistic Life Coaching — goal-setting, inner transformation, purpose work

### Vibrational Wellness
*Complementary practices for clients who are open to energy-based approaches.*
- Source Energy Medicine — intention-coded water
- HADO — consciousness-charged water
- WAVE Quantum Hydration — frequency-encoded water products

> Note: Vibrational Wellness services should be positioned as complementary — not as primary entry points for new clients unfamiliar with energy medicine.

---

## Condition-to-Service Mapping (for condition landing pages)

| Condition | Primary Services | Secondary Services |
|---|---|---|
| Anxiety & Stress | TFT, Hypnosis, NLP | Mindscaping, Psych-K, Life Coaching |
| Chronic Pain | TFT, Bio-Well | HADO, SEM, Life Coaching |
| Sleep Problems | Hypnosis, TFT | NLP, SEM |
| Fears & Phobias | TFT, Hypnosis, NLP | Mindscaping, Psych-K |
| Weight & Habits | Hypnosis (Virtual Gastric Band), NLP | Psych-K, Life Coaching, TFT |
| Life Direction & Purpose | Life Coaching, Psych-K | NLP, Mindscaping |

---

## Booking Platform Options

| Platform | Best For | Canadian Payments | Price |
|---|---|---|---|
| **Jane App** | Health practitioners in Canada — HIPAA/PIPEDA compliant, intake forms, reminders | Yes (Stripe) | ~$39+/mo |
| **Acuity Scheduling** | Simple, clean UX; easy embed | Yes | ~$20/mo |
| **Calendly** | Lightest weight; easiest to set up | Yes (Stripe/PayPal) | Free tier available |

**Recommendation:** Jane App if Fern wants a full practice management tool; Calendly if she just wants a quick, frictionless booking link to start.
