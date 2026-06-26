# Implementation Tasks

Ordered by impact on client acquisition. Complete Phase 1 before moving to Phase 2, etc.

---

## Phase 1 — Quick Wins (Do First, Highest ROI)

### 1.1 Set up online booking
- [ ] ~~Choose booking platform~~ — ✅ **Calendly (free tier)** confirmed. Upgrade to Jane App if/when volume warrants.
- [ ] Create Calendly account and configure Fern's availability
- [ ] Set up 3 event types: Free 30-min discovery call | 30-min session ($60) | 60-min session ($110)
- [ ] Add payment note to paid session types (payment at time of session — Calendly free tier doesn't process payments)
- [ ] **Embed Calendly widget on Fern's current Contact page immediately** — this is the fastest win possible, before the new site is built
- [ ] Add "Book Now" button to current site navigation linking to Calendly

### 1.2 Add pricing to all service pages
- [ ] Thought Field Therapy — add $60/$110 pricing block + Book Now link
- [ ] Bio-Well — add pricing block + Book Now link
- [ ] HADO — add pricing block + Book Now link
- [ ] Hypnosis — add pricing block + Book Now link
- [ ] Life Coaching — add pricing block + Book Now link
- [ ] NLP — add pricing block + Book Now link
- [ ] Mindscaping — add pricing block + Book Now link
- [ ] Psych-K — add pricing block + Book Now link
- [ ] Source Energy Medicine — add pricing block + Book Now link
- [ ] WAVE — add pricing block + Book Now link

### 1.3 Remove Gratitude from navigation
- [ ] Remove "Gratitude" from the top navigation menu
- [ ] Confirm page still exists at its URL (for any direct links) or set up redirect to /about/

---

## Phase 2 — Architecture & Content Structure

### 2.1 Plan and confirm new URL structure
- [ ] Review URL map in SITE-ARCHITECTURE.md
- [ ] Confirm with web developer which URLs will change
- [ ] Plan 301 redirects for all changed URLs
- [ ] Document redirect map in a spreadsheet

### 2.2 Set up Google Business Profile
- [ ] Check if goodvibrationshealth.ca already has a Google Business Profile
- [ ] Claim/create profile if not done
- [ ] Add: business category, hours, services, photos, phone, website
- [ ] Request reviews from existing clients (Stella Eyers, Diana B, Camera Layden-Tapp, Mandie Crawford would be strong)

### 2.3 Install/verify Google Analytics 4
- [ ] Confirm GA4 is installed on the site
- [ ] Set up conversion events: booking page visits, contact form submissions, call button clicks
- [ ] Record current baseline metrics before redesign launch

---

## Phase 3 — New Page Content (Write First, Build Second)

### 3.1 Homepage rewrite
- [ ] Write new hero headline and subhead (see REDESIGN-PLAN.md)
- [ ] Write "Is this you?" problem list (8–10 bullet points)
- [ ] Write "How it works" 3-step section
- [ ] Select 3 strongest testimonials for homepage (Stella Eyers, Louise Todd, Camera Layden-Tapp recommended)
- [ ] Write "Meet Fern" snippet (2 sentences)
- [ ] Write final CTA banner copy

### 3.2 About page rewrite
- [ ] Write "Who I help" opener paragraph — needs input from Fern
- [ ] Write "My approach" section (plain-language philosophy)
- [ ] Write/gather Fern's personal story: what led her to this work?
- [ ] Write credentials section intro text
- [ ] Write training & speaking blurb
- [ ] Write short gratitude acknowledgment (replacing full Gratitude page)
- [ ] Source certification logos/images for credential grid
- [ ] Plan and film video introduction (60–90 seconds)

### 3.3 Services overview page
- [ ] Write 4 category descriptions (Mind & Belief Change, Body & Energy, Coaching & Life, Vibrational Wellness)
- [ ] Write "Not sure where to start?" guidance copy
- [ ] Write pricing block copy

### 3.4 Individual service pages (rewrite each)
> Use template: Headline → What is it → Who it's for → What to expect → Testimonial → Pricing → Book Now → FAQ
- [ ] TFT page
- [ ] Bio-Well page
- [ ] Hypnosis page
- [ ] Life Coaching page
- [ ] Psych-K page
- [ ] NLP page
- [ ] Mindscaping page
- [ ] Source Energy Medicine page (careful positioning — see REDESIGN-PLAN.md notes)
- [ ] HADO page (careful positioning — see REDESIGN-PLAN.md notes)
- [ ] WAVE page

### 3.5 Condition landing pages (new — 6 pages)
- [ ] Anxiety & Stress (/help/anxiety-stress/)
- [ ] Chronic Pain (/help/chronic-pain/)
- [ ] Sleep Problems (/help/sleep/)
- [ ] Fears & Phobias (/help/fears-phobias/)
- [ ] Weight & Habits (/help/weight-habits/)
- [ ] Life Direction & Purpose (/help/life-direction/)

### 3.6 FAQ page (new)
- [ ] Write full FAQ content (see question list in REDESIGN-PLAN.md)
- [ ] Confirm: insurance coverage details for Ontario practitioners
- [ ] Confirm: cancellation policy (write one if not yet defined)

### 3.7 Book Now page rewrite
- [ ] Write page intro copy
- [ ] Embed booking calendar (from Phase 1.1)
- [ ] Write "What to expect after booking" section
- [ ] Write page-specific FAQ (insurance, cancellation, first session)
- [ ] Replace math CAPTCHA with modern spam protection

### 3.8 Testimonials page restructure
- [ ] Organize all 14 testimonials into 4 categories (Pain Relief | Mental/Emotional | Habit Change | Training)
- [ ] Write category section headers
- [ ] Format each testimonial with: name, location, result summary (bold), full quote
- [ ] Request permission to use full names and add photos for top testimonials
- [ ] Reach out to top 3–5 clients for video testimonials
- [ ] Set up Google Reviews embed once GBP is active (Phase 2.2)

---

## Phase 4 — Visual Design & Photography

### 4.1 Photography
- [ ] Book professional photography session for Fern
- [ ] Shoot list: portrait (warm/approachable), session context (laptop/virtual), outdoors/nature, candid
- [ ] Collect lifestyle stock photography for service/condition pages (calm spaces, water, nature)

### 4.2 Brand identity
- [ ] Select final colour palette (see REDESIGN-PLAN.md direction)
- [ ] Select typography pair (heading serif + body sans-serif)
- [ ] Update logo if needed (or confirm current logo is retained)
- [ ] Create style guide document for designer

### 4.3 Video
- [ ] Film welcome video with Fern (60–90 seconds for homepage/About)
- [ ] Edit and add subtitles
- [ ] Upload to Vimeo or YouTube (unlisted) for website embed

---

## Phase 5 — Build

### 5.1 Development
- [ ] Set up staging environment
- [ ] Implement new navigation structure
- [ ] Build all page templates (see Template list in SITE-ARCHITECTURE.md)
- [ ] Populate all pages with new content
- [ ] Implement online booking embeds
- [ ] Implement Google Reviews embed (testimonials page)
- [ ] Test all forms and booking flows
- [ ] Replace math CAPTCHA with modern spam protection
- [ ] Test mobile responsiveness on multiple devices
- [ ] Run PageSpeed Insights — resolve any Core Web Vitals failures

### 5.2 SEO Setup
- [ ] Set unique meta title and description for every page
- [ ] Add LocalBusiness schema markup to homepage
- [ ] Add HealthAndBeautyBusiness schema to homepage
- [ ] Add FAQ schema to FAQ page and service pages with FAQ sections
- [ ] Verify all images have descriptive alt text
- [ ] Submit updated sitemap to Google Search Console after launch

### 5.3 Redirects
- [ ] Implement all 301 redirects from old URLs to new URLs
- [ ] Test each redirect with a redirect checker tool
- [ ] Verify in Google Search Console after launch

---

## Phase 6 — Blog Revival

### 6.1 Immediate (before launch)
- [ ] Write and publish 3 backlogged posts so blog doesn't look sparse at launch
  - Recommended: TFT Tapping explainer, Hypnosis for anxiety, Virtual holistic therapy guide

### 6.2 Ongoing (post-launch)
- [ ] Establish a publishing calendar: 1 post per month minimum
- [ ] Write remaining 7 priority posts (see list in REDESIGN-PLAN.md)
- [ ] Add CTA to bottom of every blog post

---

## Phase 7 — Launch & Post-Launch

- [ ] Final review of all pages on staging environment
- [ ] Client (Fern) approval of all content and design
- [ ] Deploy to production
- [ ] Verify all 301 redirects are live
- [ ] Submit sitemap to Google Search Console
- [ ] Announce to existing client list via email newsletter
- [ ] Post launch announcement on Facebook and X
- [ ] Monitor GA4 for 2 weeks post-launch — watch for traffic drops or form submission issues
- [ ] Check Google Search Console for crawl errors after 2 weeks

---

---

## Phase 0 — Pre-Work Blockers (Resolve Before Anything Else)

These are not design or content tasks — they are decisions that gate all downstream work.

- [x] **Free consultation offer** — ✅ RESOLVED: 30-minute free discovery call (confirmed by Fern). All pages updated.
- [ ] **Choose booking platform** — Jane App / Acuity / Calendly (see SITE-ARCHITECTURE.md). Set a decision date.
- [x] **Bio-Well virtual delivery** — ✅ RESOLVED: Fern no longer offers Bio-Well directly. Page kept for referral traffic + to connect clients with a colleague. bio-well.md rewritten as referral page with no booking CTA.
- [ ] **Decide WAVE product model** — E-commerce product page or enquiry-only? Determines whether a shop is needed.
- [ ] **Confirm CMS / site platform** — What is the current site built on? Is the rebuild on the same platform?
- [x] **High-risk testimonials** — ✅ RESOLVED: Removed Mary Chiummiento (suicidal depression), Dawn Frail (parasites), Camera Layden-Tapp neck mass quote. Kept skin rash testimonial from Camera Layden-Tapp. Remaining testimonials reviewed for acceptable risk level.
- [ ] **Obtain written consent** from every named testimonial client (Stella Eyers, Louise Todd, Camera Layden-Tapp, Diana B, Dawn Frail, Mandie Crawford, etc.) before publishing names publicly.
- [ ] **Verify Mandie Crawford quote** — Current draft quote doesn't match CONTENT-INVENTORY record. Confirm exact wording with Mandie Crawford directly.
- [x] **TFT course dates** — ✅ RESOLVED: Made evergreen — "contact for next available date." Updated training.md, about.md, and tft.md.

---

## Phase 1.5 — Legal & Compliance (Add Before Build)

- [ ] **Write privacy policy** (PIPEDA-compliant) — see pages/legal/privacy-policy.md stub
- [ ] **Write terms of service** — covering booking cancellations, payment, and scope of services
- [ ] **Add "results not typical / not medical treatment" disclaimer** to every service page, every condition page, and testimonials page
- [ ] **Cookie consent banner** — required if using GA4, Meta Pixel, or any third-party tracking in Canada
- [ ] **AODA accessibility check** — Ontario businesses have Accessibility for Ontarians with Disabilities Act obligations; confirm requirements with the web developer

---

## Phase 2.4 — Lead Capture Infrastructure (Promote from Backlog)

This was originally in the backlog but is a high-conversion priority — move to Phase 2.

- [ ] **Create lead magnet** — "5 TFT Tapping Sequences for Instant Calm" PDF (or similar). Simple to produce; high perceived value.
- [ ] **Add lead-capture form** to homepage, all 6 condition landing pages, and TFT/hypnosis service pages. Offer: free PDF download.
- [ ] **Set up email welcome sequence** (minimum 3 emails): Welcome → What to expect from Fern → Book your first session. Use Mailchimp, ConvertKit, or email feature of booking platform.
- [ ] **Add an online intake form** to booking platform (can be part of Jane App) — collects client context before first session

---

## Phase 2.5 — Paid Acquisition (Optional Fast-Track)

Organic SEO takes 6–12 months. For faster client acquisition while SEO matures:

- [ ] **Evaluate Google Ads** on bottom-funnel virtual keywords: "online hypnotherapy Canada," "TFT tapping practitioner virtual," "virtual life coach Canada"
- [ ] **Set a test budget** (e.g., $200–$300/month) to validate which keywords convert to discovery calls
- [ ] **Evaluate Meta Ads** retargeting for visitors who landed on condition pages but didn't book

---

## Phase 3.9 — Training Page (Missing Page)

- [ ] **Create /training/ page** — see pages/training.md (now created)
- [ ] Make TFT monthly intro class sign-up evergreen (not date-specific)
- [ ] Add /training/ to navigation (under About dropdown or standalone)

---

## Phase 3.10 — Help Hub Page (Missing Page)

- [ ] **Create /help/ index page** — see pages/help-hub.md (now created)
- [ ] Wire up /help/ link on homepage, services-overview, and FAQ pages (currently broken — points to a non-existent page)

---

## Phase 5.3 — Enhanced Schema Markup

Replace the original schema task with this expanded list:

- [ ] `LocalBusiness` schema on homepage — use `areaServed: Canada` (not a storefront address); omit physical address
- [ ] `Person` schema for Fern Wolf (E-E-A-T signal — credentials, certifications, years in practice)
- [ ] `Service` schema on each service page
- [ ] `FAQ` schema on FAQ page and service pages with FAQ sections
- [ ] `Review` / `AggregateRating` schema on testimonials page (requires Google Reviews or structured data)
- [ ] `Article` / `BlogPosting` schema on all blog posts
- [ ] `BreadcrumbList` schema on all pages
- [ ] Remove `HealthAndBeautyBusiness` schema type (inappropriate for non-medical services; use `LocalBusiness` + `ProfessionalService`)

---

## Phase 5.4 — Analytics Cross-Domain Tracking

- [ ] If booking platform (Calendly/Acuity/Jane) is on a separate domain, configure **cross-domain tracking** in GA4 so booking completions are attributed correctly
- [ ] Set up **GA4 conversion events**: booking page visit, discovery call booked, paid session booked, lead magnet download, contact form submission
- [ ] Set up **phone click tracking** (click-to-call events) for mobile visitors

---

## Phase 7 — Referral & Reactivation (New)

- [ ] **Design referral mechanism** — e.g., "Refer a friend and each of you receives a complimentary 15-minute add-on"
- [ ] **Email existing client list** at launch with: new site announcement, updated booking link, and referral offer
- [ ] **Past-client reactivation campaign** — 1–2 emails to lapsed clients who haven't booked in 12+ months

---

## Backlog / Nice to Have

- [ ] Explore Instagram as an additional social channel (more visual than X/Twitter for wellness content — reels, client tips, short TFT demos)
- [ ] Create a "Work With Me" packages page if Fern offers multi-session bundles
- [ ] Add live chat widget (Tidio, Crisp) for quick visitor questions
- [ ] Light competitor analysis — what do other virtual holistic practitioners in Canada offer, price, and rank for? (Validates positioning and keyword assumptions)
- [ ] Add an online intake form (can be part of Jane App)
