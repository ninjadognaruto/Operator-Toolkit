# TurboTax Expert Assist — Copy & UX Analysis
**Date:** 2026-03-22
**Goal:** Improve conversion to "Start for free" on the Expert Assist product card
**Analyst:** Claude (product-opportunity-agent)

---

## Step 2a — Copy Opportunities

### Expert Assist Product Card

| # | Element | Current copy | Problem | Lens | Impact |
|---|---------|-------------|---------|------|--------|
| 1 | Card tagline | "File yourself with on-demand expert help" | Leads with the process (filing yourself), not the outcome. The user's fear is "what if I get this wrong?" — the headline doesn't address it. Contrast: "File with confidence — a real expert reviews everything before you submit" | WIIFM | High |
| 2 | "WE RECOMMEND" badge | "WE RECOMMEND" | Self-serving social proof. TurboTax recommending its own middle-tier product carries zero credibility. Should be grounded in user data: "Most chosen by people like you" or tied to the quiz result: "Recommended for your situation." | WIIFM | High |
| 3 | Price display | "$49–$199" | A $150 spread creates price uncertainty at exactly the wrong moment. Users don't know where they'll land — this triggers decision paralysis. No explanation of what drives the range. Full Service's "$150 all in" feels more concrete and confident by comparison. | Reassurance | High |
| 4 | Key feature (bullet 2) | "A tax expert performs a final, 100% accurate guaranteed review of your entire return before you file." | The strongest selling point on the card is buried as bullet 2. "Guaranteed review before you file" directly addresses the #1 fear (submitting a wrong return). This should be the headline or a bold callout above the bullets. | WIIFM + Brevity | High |
| 5 | Primary CTA | "Start for free" | Identical to both other cards — no differentiation. Doesn't tell the user what they're starting or why Expert Assist is the right path. "Start free — expert review included" or "Try Expert Assist free" would be more specific. | Clarity | High |
| 6 | Pricing caveat | "State additional" | Vague, muted, placed below the price — the worst combination. It implies a hidden cost without resolving it. How much? Under what conditions? This copy introduces doubt and leaves it open. | Reassurance | High |
| 7 | Feature bullet 1 | "As you go, get unlimited, on-demand advice from Intuit tax experts with an average of 12 years' experience." | Feature-forward, not outcome-forward. "12 years' experience" is a credential, not a benefit. Reframe: "Get instant answers from a real tax expert — anytime you're stuck." | WIIFM | Medium |
| 8 | Feature bullet 3 | "Import, upload, or snap a photo of your docs and we'll auto-fill your info." | This is a DIY-tier feature — it appears in all three cards. Takes up prime real estate on Expert Assist with a non-differentiating benefit. Replace with something Expert-Assist-specific (e.g. response time SLA, expert specialization, post-filing support). | Brevity | Medium |
| 9 | CTA subtext | "Pay only when you file" | Solid reassurance — strong. But "when you file" could be read as commitment once you submit. "Pay only when you're ready to submit" removes that ambiguity. | Reassurance | Low |

---

### Recommendation Quiz

| # | Element | Current copy | Problem | Lens | Impact |
|---|---------|-------------|---------|------|--------|
| 10 | Quiz headline | "Get a personalized recommendation" | Passive and feature-forward. Doesn't explain why you should take it or what you'll get out of it. "Which TurboTax is right for you? Answer 3 quick questions." is more direct. | WIIFM | Medium |
| 11 | Quiz sub-question | "How do you feel about filing your taxes this year? (1 of 3)" | "How do you feel" is vague relative to the product differentiation being measured. "How much expert help do you want this year?" maps directly to the three product tiers. | Clarity | Medium |
| 12 | Quiz result display | "Tax Profile: Expert help" | After completing the quiz, this micro-label appears in the corner with no explanation of what changed or why Expert Assist was recommended. No acknowledgment, no rationale, no warm handoff. | Reassurance | High |

---

### FAQ Section

| # | Element | Current copy | Problem | Lens | Impact |
|---|---------|-------------|---------|------|--------|
| 13 | FAQ tab: Expert Assist | Questions shown: "What if I have questions?", "What if I make a mistake?", "What tax situations can I report?", etc. | These FAQs are functionally identical to the DIY tab. Expert Assist's actual anxiety questions are absent: "What does the expert review cover?", "How do I contact my expert?", "How long does expert review take?", "Is the expert reviewing my actual numbers or just the form?" | Clarity + Reassurance | High |

---

### Testimonials

| # | Element | Current copy | Problem | Lens | Impact |
|---|---------|-------------|---------|------|--------|
| 14 | Marcus (Expert Assist) | "The biggest reason I would put off doing my taxes is because I feel like it's a burden that only I have to carry. When I remind myself that I can have assistance, I gain a sense of lightness and freedom." | Emotionally resonant and correctly product-aligned (anxiety relief). But no concrete outcome: no refund amount, no situation type, no time saved. Emotional + specific = more credible. | Iconic Copy | Medium |
| 15 | Star rating caveat | "Star ratings are from 2026" | Reads like a legal disclaimer. If the intent is to signal recency, "Verified reviews from this tax season" is cleaner. | Human Voice | Low |

---

### Copy Top 3 Priorities

1. **Rewrite the Expert Assist headline** to lead with the guaranteed expert review outcome, not the filing method. This directly addresses the conversion fear.
2. **Kill the vague "State additional" caveat** — replace with an honest range or a trigger condition ("State return: typically $X–$X").
3. **Swap "WE RECOMMEND" for credible social proof** — quiz-driven ("Recommended for your answers") or data-driven ("Most popular for first-time filers").

---

## Step 2b — UX Opportunities

### Layout

| # | Screen | Element | Observation | Gestalt Principle | Impact |
|---|--------|---------|-------------|-------------------|--------|
| 1 | Product cards | Recommended card treatment | Expert Assist has a dark header bar as a differentiation device — but card width, padding, and elevation are identical to the other two. The visual pull is weak. Squint at the three cards: they read as equal options. A truly differentiated card would be wider, elevated (shadow), or visually isolated. | Similarity | High |
| 2 | Product cards | Feature bullet density | All three cards have 3 bullets with identical visual weight and line length. No way to scan-differentiate Expert Assist's expert features from DIY's software features. The information architecture treats equal and unequal things equally. | Similarity | Medium |
| 3 | Comparison table | Feature rows | The table checks off "Unlimited expert help," "Final expert review," and "Year-round expert support" across both Expert Assist AND Full Service columns. The shared checkmarks flatten the distinction between the two products for users trying to decide between them. | Simplicity | High |
| 4 | Quiz → cards | Post-quiz transition | After completing the quiz, the Tax Profile updates in a small label below the quiz, but the product cards below don't visibly react (highlight, animate, or pull the recommended option forward). The quiz result doesn't connect to the decision. | Continuity | High |
| 5 | Hero section | Left image + right quiz | The left-side image (woman in front of laptop, waving) doesn't obviously connect to Expert Assist or the quiz. No copy, badge, or visual cue ties it to the recommendation mechanic. It reads as decorative. | Common Region | Medium |

---

### Emphasis

| # | Screen | Element | Observation | Dial | Impact |
|---|--------|---------|-------------|------|--------|
| 6 | Product cards | CTA buttons | All three "Start for free" buttons are identical: same size, same dark blue fill, same placement. Expert Assist's CTA should be louder (larger, distinct color, or isolated with white space). Squint test: three equal calls to action fight for attention — none wins. | Color + Space | High |
| 7 | Expert Assist card | Price display | "$49–$199" is the same font size and visual treatment as the adjacent prices. "$150 all in" (Full Service) actually reads as more confident and specific — it wins the visual competition it's not trying to have. Expert Assist's price needs visual framing that makes the range feel bounded and fair. | Size + Visualization | High |
| 8 | Expert Assist card | "Guaranteed review before you file" | The strongest benefit on the card is in bullet 2, same weight as the other two bullets. No bold treatment, no icon accent color, no visual callout. A badge or highlighted module for this one feature would transform the card's perceived value. | Color + Placement | High |
| 9 | Quiz | "Continue" button | The quiz's "Continue" button appears to be an outlined/ghost style — lower visual weight than a filled CTA. At a key decision moment (quiz completion), the action button should dominate. | Color + Size | Medium |
| 10 | Comparison table | Column headers | The table headers ("Do It Yourself," "Expert Assist," "Expert Full Service") don't stay visible when scrolling through 7+ feature rows. Users lose track of which column belongs to which product. | Placement | Medium |

---

### Accessibility

| # | Screen | Element | Observation | Mistake Type | Impact |
|---|--------|---------|-------------|--------------|--------|
| 11 | Product cards | "State additional" link | Small muted text directly below price — likely below 4.5:1 contrast ratio. Important pricing caveat (potential extra cost) is in the lowest-visibility position on the card. | Low contrast text | High |
| 12 | Comparison table | Feature checkmarks | Checkmarks (☑) used alone in the table to indicate included/not included. The distinction between a checked and empty cell relies entirely on presence/absence of an icon — no text label, no color difference. Screen readers and low-vision users may miss empty cells. | Color-only meaning | Medium |
| 13 | Quiz | Answer option buttons | Pill-shaped answer buttons with only border outlines. On touch devices with larger fingers, closely spaced options may result in mis-taps. Minimal padding between options. | Tiny & close targets | Medium |
| 14 | FAQ section | Tab navigation | Active/inactive tabs distinguished only by underline. On mobile or for users with color impairment, the selected tab may not be clearly identifiable without secondary indicator (bold, icon, background fill). | Color-only meaning | Medium |
| 15 | Comparison table | Scrolling table structure | No sticky header row for product columns when user scrolls through feature rows. After 3–4 rows, users have lost track of which column is which product. | Assumed knowledge | High |

---

### Reward

| # | Screen | Moment | Missing reward | Subcategory | Impact |
|---|--------|--------|----------------|-------------|--------|
| 16 | Quiz completion | User answers all 3 questions | "Tax Profile: Expert help" appears in small text — no animation, no acknowledgment, no "Here's why Expert Assist fits you." The quiz result doesn't feel earned. Users whose input was just processed deserve a moment of confirmation. | Competence – Completion | High |
| 17 | Expert Assist card | Pre-click trust moment | No SLA or trust signal specific to the on-demand expert model. "An expert reviews your return in X hours" or "Experts available 7am–11pm" would give users certainty before a $49–$199 commitment involving a human. | Control – Safety | High |
| 18 | Expert Assist card | Value framing | "$49–$199" with a small discount is a static, uncertain number. No social momentum: "X people chose Expert Assist this week," no deadline urgency beyond a soft date, no "you're getting the best available rate." The card feels inert. | Control – Certainty | High |
| 19 | Comparison table | End of table | After reading all feature rows, a user who has concluded Expert Assist fits them has no CTA in context. They must scroll back up to click. A "Choose Expert Assist" CTA anchored at the bottom of the Expert Assist column would capture this decision moment. | Control – Agency | Medium |
| 20 | Marcus testimonial | Expert Assist social proof | Emotionally resonant but no concrete outcome. "Lightness and freedom" is the right emotional register, but an outcome like "saved 2 hours and got $400 back I didn't expect" would make the story credible and specific. | Competence – Mastery | Medium |

---

### UX Top 3 Priorities

1. **Differentiate the Expert Assist CTA visually** — it must win the squint test. All three identical blue buttons neutralize the "WE RECOMMEND" signal entirely.
2. **Elevate "Guaranteed review before you file"** as a visual callout, not a bullet — it's the product's single strongest anxiety-reducer.
3. **Connect the quiz result to the product cards** — after completing the quiz, the Expert Assist card should visually activate/highlight, making the recommendation feel real and earned.
