---
name: designer-audit
description: Run a structured visual design audit on any product screen, prototype, or UI flow. Produces a dual-score report (Design Score + AI Slop Score) with ranked findings and prioritized recommendations. Use when someone shares a screenshot, prototype, or mockup and asks "review this design", "is this good", "what's wrong with this UI", "audit this screen", "rate this design", "does this look AI-generated", "visual QA", or any request to assess the quality of a built interface. Supports full mode (9-phase deep audit with UX copy review) and light mode (3-phase quick check for iterations). Always use this skill for design quality assessment — even if the request is framed as general feedback.
---

# designer-audit

**Skill Name:** designer-audit

**Purpose:** Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, weak interactions — then proposes fixes. Works on any URL (use Claude in Chrome) or HTML prototype files directly.

**Use when:** "audit the design", "visual QA", "check if it looks good", "design polish", "find problems", "make this look better"

**Output:** Structured report with dual scores (Design Score + AI Slop Score), ranked findings, specific fix recommendations, and a UX/copy sub-agent second opinion.

---

## Workflow

### Phase 0: Setup

**DESIGN.md Calibration**
- Check for `DESIGN.md (in the project directory)` (project design system)
- If found: calibrate all findings against documented system. Deviations are higher severity, tagged `[design-drift]`
- If not found: proceed with universal design principles (Tailwind CSS, shadcn/ui patterns, industry standards)
- Save design system reference for Phase 2 extraction

**Input Detection**
- URL → use Claude in Chrome to navigate, inspect, take screenshot
- HTML file (local prototype) → read the HTML source directly. Analyze Tailwind classes, CSS variables, and DOM structure from source. For visual verification, open via `python3 -m http.server` and screenshot with Chrome tools. Do NOT rely solely on JS extraction for local files — source analysis is faster and more reliable.
- Screenshot provided → visual inspection only (skip programmatic extraction)

**Review Scope — Full vs. Light**
- **Full review (9 phases):** For new prototypes, major redesigns, pre-launch audits, or first review of a screen. This is the default.
- **Light review (3 phases):** For iterations, small fixes, and incremental changes. Run Phase 0 (setup), Phase 3 categories 1-5 only (hierarchy, typography, color, spacing, interactions), and Phase 7 (triage). Skip Phases 1, 2, 4, 5, 8, 9. The 2-pass compliance check in CLAUDE.md already covers mechanical issues; the light review adds visual judgment on top.
- **When to use light:** DESIGN.md exists AND a design-baseline.json exists AND the change is scoped (e.g., "added empty state," "fixed spacing," "new loading skeleton"). If in doubt, ask.

**Scope Definition**
- If on feature branch (check git): scope to affected pages/components only
- If full site: flag all pages, but triage by traffic/importance

---

### Phase 1: First Impression

**Navigate or open target, take screenshot**

Structure your impression like this:
- "The site communicates [primary message/purpose]"
- "I notice [initial observation that stood out]"
- "First 3 things my eye goes to: [1], [2], [3]"
- "One word to describe it: [adjective]"

**Be opinionated.** Designers don't hedge. Examples:
- "This looks like AI-generated landing page templates" (bad)
- "The hierarchy is confusing—my eye bounces around instead of flowing top to action" (good)
- "The color palette feels dated" (good)

---

### Phase 2: Design System Extraction

#### If Programmatic (URL or HTML file):

Extract fonts, colors, heading hierarchy, touch targets, spacing via JavaScript:

```javascript
// Fonts
const fonts = new Set();
document.querySelectorAll('*').forEach(el => {
  const font = window.getComputedStyle(el).fontFamily;
  if (font && font !== 'serif' && font !== 'sans-serif') fonts.add(font);
});
console.log('Fonts:', [...fonts]);

// Colors (text and background)
const colors = new Set();
document.querySelectorAll('*').forEach(el => {
  const bg = window.getComputedStyle(el).backgroundColor;
  const text = window.getComputedStyle(el).color;
  if (bg && bg !== 'rgba(0, 0, 0, 0)') colors.add(bg);
  if (text && text !== 'rgba(0, 0, 0, 0)') colors.add(text);
});
console.log('Colors:', [...colors].slice(0, 20));

// Heading hierarchy (h1-h6 computed font sizes)
const headings = {};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
  const el = document.querySelector(tag);
  if (el) {
    const size = window.getComputedStyle(el).fontSize;
    const weight = window.getComputedStyle(el).fontWeight;
    headings[tag] = `${size} @ ${weight}`;
  }
});
console.log('Headings:', headings);

// Touch targets (buttons, links, inputs)
const targets = [];
document.querySelectorAll('button, a, input, [role="button"]').forEach(el => {
  const rect = el.getBoundingClientRect();
  targets.push({ tag: el.tagName, w: rect.width, h: rect.height });
});
console.log('Touch targets (sample):', targets.slice(0, 10));

// Spacing (gap, padding, margin on grid/flex containers)
const spacing = {};
document.querySelectorAll('[style*="gap"], [class*="gap"]').forEach(el => {
  const gap = window.getComputedStyle(el).gap;
  spacing[gap] = (spacing[gap] || 0) + 1;
});
console.log('Spacing (gap distribution):', spacing);
```

#### Inferred Design System Template:

```
**Fonts**
- Primary: [font name] @ [weights, e.g. 400, 600, 700]
- Secondary: [font name] (if used)
- Monospace: [font name] (if used)
- Count: [n] (should be <=3)

**Colors**
- Primary: #[hex]
- Secondary: #[hex]
- Accent: #[hex]
- Neutrals: [grays 50-900, count]
- Semantic: success #[hex], error #[hex], warning #[hex]
- Dark mode surfaces: [count], darkest: #[hex]
- Count: [n] (should be <=12)

**Heading Scale**
- h1: [size] @ [weight]
- h2: [size] @ [weight]
- h3: [size] @ [weight]
- h4/h5/h6: [size] @ [weight]
- Ratio: [e.g. 1.5:1, 1.25:1]
- Hierarchy confidence: [estimated|confirmed]

**Spacing Patterns** (from Tailwind config or inspected)
- Base unit: [e.g. 4px, 8px]
- Detected scale: [e.g. 8, 12, 16, 24, 32, 48, 64]
- Most common gaps: [top 3]

**Touch Targets**
- Button min: [w x h]px
- Link min: [w x h]px
- Target-rich areas: [count <44px issues]

**Tailwind/shadcn-specific**
- shadcn CSS variables found: [yes|no], palette: [list color variables]
- Tailwind config present: [yes|no], extend/override: [list custom values]
- Components: [shadcn|hand-rolled|mixed], consistency: [consistent|drift detected]
```

#### DESIGN.md Comparison:

If DESIGN.md found, create a comparison table:

| System | DESIGN.md | Extracted | Status |
|--------|-----------|-----------|--------|
| Primary Font | [X] | [Y] | [Match/Drift] |
| Heading Scale | [X] | [Y] | [Match/Drift] |
| Color Palette | [X] | [Y] | [Match/Drift] |
| Spacing Base | [X] | [Y] | [Match/Drift] |
| Components | [X] | [Y] | [Match/Drift] |

For each drift, tag as `[design-drift]` and escalate severity in Phase 6.

---

### Phase 3: Page-by-Page Visual Audit

Walk each page (or top 3 pages if site is large). For each page, score these 10 categories:

#### 1. Visual Hierarchy & Composition (8 items)

- [ ] Clear focal point (primary action/message immediately visible)
- [ ] Eye flow: top-left → CTA (vs bouncy/random)
- [ ] Visual noise (excessive elements competing for attention)
- [ ] Information density (appropriate for page type: landing vs app)
- [ ] Z-index intentional (layering makes sense)
- [ ] Above-fold value (critical info visible without scroll)
- [ ] Squint test (blur the page — hierarchy still apparent)
- [ ] Whitespace breathing (not cramped, elements separated)

**Scoring:** If 7-8 pass = A, 6 = B, 5 = C, 4 = D, <4 = F

#### 2. Typography (15 items)

- [ ] Font count <=3 (including monospace)
- [ ] Scale ratio consistent (1.25:1 or 1.5:1, not random jumps)
- [ ] Line-height adequate (>=1.5 for body, >=1.2 for headings)
- [ ] Measure 45-75 characters (readability sweet spot)
- [ ] Heading hierarchy logical (h1 largest, descending)
- [ ] Weight contrast present (heavy headings vs regular body)
- [ ] No blacklisted fonts (Comic Sans, Papyrus, etc.)
- [ ] No generic fallback font visible (system font should be intentional)
- [ ] Proper typographic characters (curly quotes ", not straight ", em-dash —)
- [ ] Ellipsis character … (not ...)
- [ ] tabular-nums used for tables/numbers (or intentional override)
- [ ] Body text >=16px mobile (accessibility)
- [ ] Caption/label >=12px (readability)
- [ ] No letter-spacing on lowercase (only headings/ALL CAPS)
- [ ] text-wrap: balance or text-wrap: pretty on headings (visual polish)

**Scoring:** If 13-15 pass = A, 11-12 = B, 9-10 = C, 7-8 = D, <7 = F

#### 3. Color & Contrast (10 items)

- [ ] Palette coherence: <=12 colors total (includes semantic + dark mode)
- [ ] WCAG AA contrast >=4.5:1 for text (check text on bg, link on bg)
- [ ] Semantic colors mapped (green = success, red = error, yellow = warning)
- [ ] No color-only encoding (icon + color, not color alone)
- [ ] Dark mode surfaces distinct (darkest != black, ~#1a1a1a or #111)
- [ ] Dark mode text off-white (not pure white, ~#f5f5f5 or #e5e5e5)
- [ ] Desaturated accent in dark mode (pure saturation looks harsh)
- [ ] No red/green only pair (colorblind-accessible pairs)
- [ ] Consistent neutral temperature (grays warm vs cool, not mixed)
- [ ] color-scheme meta tag present (tells browser light/dark preference)

**Scoring:** If 9-10 pass = A, 7-8 = B, 6 = C, 4-5 = D, <4 = F

#### 4. Spacing & Layout (12 items)

- [ ] Grid consistency (4px, 8px, or project base unit)
- [ ] Spacing scale respected (gap/padding from defined scale)
- [ ] Alignment (grid, flex, or visual grid respected)
- [ ] Rhythm consistency (repeated spacing creates visual tempo)
- [ ] Border-radius hierarchy (subtle vs prominent, not all same)
- [ ] Inner radius rule (inner radius = outer radius - border-width, where applicable)
- [ ] No horizontal scroll mobile (all content visible, no overflow-x)
- [ ] Max content width sensible (readable line length, not full-bleed on ultra-wide)
- [ ] flex/grid used for layout (not floats or margin hacks)
- [ ] Breakpoints logical (mobile/tablet/desktop, not arbitrary pixel values)
- [ ] safe-area-inset respected mobile (notch/rounded corner aware)
- [ ] URL state reflected in layout (active nav item highlighted, etc.)

**Scoring:** If 11-12 pass = A, 9-10 = B, 7-8 = C, 5-6 = D, <5 = F

#### 5. Interaction States (10 items)

- [ ] Hover state (distinct visual feedback for all interactive elements)
- [ ] Focus-visible (keyboard navigation visible, not invisible outline)
- [ ] Active/pressed state (toggle/radio/button shows selected)
- [ ] Disabled state (visually distinct, cursor: not-allowed)
- [ ] Loading skeletons (pulsing gray boxes, matches layout)
- [ ] Empty states (friendly copy + icon, not blank)
- [ ] Error messages (specific, actionable, not generic "Error")
- [ ] Success confirmation (brief toast or inline validation)
- [ ] Touch targets >=44px (mobile friendly)
- [ ] Cursor changes (pointer on clickables, default elsewhere)

**Scoring:** If 9-10 pass = A, 7-8 = B, 6 = C, 4-5 = D, <4 = F

#### 6. Responsive Design (8 items)

- [ ] Mobile layout intentional (not just scaled-down desktop)
- [ ] Touch targets >=44px (no teeny buttons on mobile)
- [ ] No horizontal scroll (content reflows, not fixed width)
- [ ] Responsive images (srcset or object-fit, not stretched)
- [ ] Readable text mobile (enough contrast, enough size)
- [ ] Nav collapse (hamburger or stacked, not horizontal on mobile)
- [ ] Mobile form input (proper input types: email, tel, number)
- [ ] No scalable restriction (viewport-fit=cover, not user-scalable=no)

**Scoring:** If 8 pass = A, 7 = B, 6 = C, 4-5 = D, <4 = F

#### 7. Motion & Animation (6 items)

- [ ] Easing correct (ease-out for entrance, ease-in for exit)
- [ ] Duration 50-700ms (not instant, not glacial)
- [ ] Motion purposeful (not decorative, aids comprehension or delight)
- [ ] prefers-reduced-motion respected (no forced animation)
- [ ] No transition: all (only animate transform/opacity)
- [ ] Only transform/opacity animated (most performant properties)

**Scoring:** If 6 pass = A, 5 = B, 4 = C, 3 = D, <3 = F

#### 8. Content & Microcopy (8 items)

- [ ] Empty states with warmth (friendly tone, not blank or "No data")
- [ ] Specific error messages ("Email must be valid format" not "Invalid input")
- [ ] Specific button labels ("Save changes" not "Submit")
- [ ] No lorem ipsum (all copy is real)
- [ ] Truncation handled (ellipsis or line-clamp, readable on truncate)
- [ ] Active voice ("We'll send you a confirmation" not "A confirmation will be sent")
- [ ] Loading with ellipsis ("Loading..." with animating dots)
- [ ] Destructive action confirmation ("Are you sure? This cannot be undone.")

**Scoring:** If 7-8 pass = A, 6 = B, 5 = C, 3-4 = D, <3 = F

#### 9. AI Slop Detection (10 anti-patterns)

Flag if site exhibits:

- [ ] Purple gradients (overused, screams AI training data)
- [ ] 3-column feature grid (generic, no layout personality)
- [ ] Icons in colored circles (rounded backgrounds, monotonous)
- [ ] Centered everything (centered text blocks in hero, centered CTAs)
- [ ] Uniform bubbly radius (border-radius: 999px on everything)
- [ ] Decorative blobs (organic SVG shapes, no purpose)
- [ ] Emoji as design (emoji replacing icons/illustrations)
- [ ] Colored left-border cards (pattern from shadcn/ui overused)
- [ ] Generic hero copy ("Unlock the power of...", "Seamless integration...")
- [ ] Cookie-cutter section rhythm (identical spacing/layout repeats)

**Scoring:** If 0-1 present = A, 2-3 = B, 4-5 = C, 6-7 = D, 8+ = F

#### 10. Performance as Design (6 items)

- [ ] LCP (<2.5s, measured real devices)
- [ ] CLS (<0.1, layout stability)
- [ ] Skeleton quality (matches final layout, pulsing not jarring)
- [ ] Lazy images (below-fold images load on scroll)
- [ ] font-display: swap (fallback visible immediately, FOUT acceptable)
- [ ] No font swap flash (custom fonts preload, not delayed)

**Scoring:** If 6 pass = A, 5 = B, 4 = C, 3 = D, <3 = F

---

### Phase 4: Interaction Flow Review

Pick 2-3 key flows (e.g., Sign Up, Checkout, Search). Walk them:

1. Evaluate **response feel** — does interaction feel snappy or laggy?
2. Evaluate **transition quality** — do elements fade/slide smoothly?
3. Evaluate **feedback clarity** — does user know action was registered?
4. Evaluate **form polish** — labels, errors, success states, autofill hints

Document findings in triage format.

---

### Phase 5: Cross-Page Consistency

- Navigation (header/footer consistent across pages)
- Component reuse (buttons, cards, inputs use same styles)
- Tone (copy voice consistent)
- Spacing rhythm (gap/padding scale respected across pages)
- Color mapping (semantic colors used consistently)

Flag if component looks different on different pages (likely CSS scoping issue or override).

---

### Phase 6: Compile Report

#### Design Score (A-F)

**Calculation:**
- Weight each category: Hierarchy 15%, Typography 15%, Spacing 15%, Color 10%, Interaction 10%, Responsive 10%, Content 10%, AI Slop 5%, Motion 5%, Performance 5%
- Convert letter grades to points: A=1.0, B=0.8, C=0.6, D=0.4, F=0
- Weighted average = Final Score
- A: 0.9-1.0 | B: 0.8-0.89 | C: 0.6-0.79 | D: 0.4-0.59 | F: <0.4

**Penalties for design-drift:** Each `[design-drift]` finding downgrades one letter grade in that category (e.g., if Color was B due to drift from DESIGN.md, becomes C).

#### AI Slop Score (A-F)

- Count anti-patterns found in Phase 3.9
- A: 0 detected | B: 1-2 | C: 3-4 | D: 5-6 | F: 7+

#### Design Hard Rules

**Classify page type:**
- Landing Page (marketing, CTA-driven, one goal)
- App UI (tool, multiple flows, recurring users)
- Hybrid (both behaviors)

**Hard Rejection Criteria (7):** If ANY are true, Design Score capped at C:
1. WCAG AAA text contrast <4.5:1 (text unreadable)
2. Touch targets <30px on mobile (unusable)
3. Horizontal scroll on mobile (broken layout)
4. Page loads >5s on 4G (unusable)
5. No focus indicator (keyboard navigation invisible)
6. No error message (user lost)
7. Semantic colors inverted (success red, error green)

**Litmus Checks (7 YES/NO questions):**
1. Would I scroll to see the CTA?
2. Do I know what to click?
3. Do I know what happens after I click?
4. Can I read this on a phone?
5. Would I use this again (if app) or believe this (if landing)?
6. Does the design match the copy tone?
7. Would a friend describe this as "modern"?

**Landing Page Rules** (if classified as landing/hybrid):
- Hero: image + headline + CTA, above fold
- Headline: specific benefit, not generic
- CTA: 1 primary action, 1 secondary max
- Social proof: testimonials, numbers, or logos
- Problem/solution: problem stated, solution shown
- Closing CTA: same headline + action as top
- Footer: not navigation dumping ground

**App UI Rules** (if classified as app/hybrid):
- Nav: persistent or hamburger, location clear
- Back button: always returns to prev state
- Error recovery: form data preserved on error
- Loading: skeleton or spinner, not blank
- Onboarding: <3 steps, teaches as you go
- Density: appropriate whitespace, not cramped
- Color: primary for CTA, semantic for state

**Universal Rules:**
1. No more than 3 font families
2. Heading hierarchy unambiguous (h1 biggest)
3. Line-height >= 1.5 (readability)
4. Text line length 45-75 characters (readability)
5. Spacing scale-based (4px/8px units)
6. Color palette <=12 colors
7. Interactive elements have :hover/:focus/:active

#### Critique Format

For each finding, use one of these frames:

- **"I notice..."** — neutral observation ("I notice the spacing between cards is inconsistent")
- **"I wonder..."** — probing question ("I wonder if the primary button should be higher contrast")
- **"What if..."** — design direction ("What if we centered the hero and added a gradient?")
- **"I think... because..."** — opinion with reasoning ("I think the sidebar is too dark because it reads as inactive")

#### Report Structure

```
# Design Review Report

## First Impression
[From Phase 1]

## Scores & Findings

### Dual Scores
- **Design Score: [A-F]** ([w]% across 10 categories)
- **AI Slop Score: [A-F]** ([n] anti-patterns detected)
- **Classification:** [Landing|App|Hybrid]

### Score Summary

**User Experience**

Evaluate using the C.L.E.A.R. framework (C = Copywriting is covered in the Copy Deep Dive section below). Full framework reference: `references/clear-framework.md`.

| Dimension | Status | Grade | One-line |
|-----------|--------|-------|----------|
| Layout | 🟢/🟡/🔴 | [A-F] | [Gestalt principles: proximity, similarity, alignment, common region, continuity. F-reading pattern. Mistakes: sloppy spacing, border bloat, content cramming?] |
| Emphasis | 🟢/🟡/🔴 | [A-F] | [Foggy Glasses Test: blur the screen — is the most important element still obvious? 6 levers: size, color, space, placement, visualization, motion. Mistakes: wrong dial, weak dial, screaming dial?] |
| Accessibility | 🟢/🟡/🔴 | [A-F] | [3 principles: visible without searching, operable without precision, actionable without guessing. Consider permanent, temporary, and situational disabilities. 7 common mistakes check.] |
| Reward | 🟢/🟡/🔴 | [A-F] | [30-Second Reward Test: does the UI answer "Am I safe?" (Control), "Am I improving?" (Competence), or "Am I recognized?" (Recognition)? Mistakes: wrong reward, shy reward, over-reward?] |
| Emotional Context | 🟢/🟡/🔴 | [A-F] | [What is the user's likely state of mind? Does the design respect that state? Does it feel appropriate for the emotional context of the task?] |
| Uncommon Care | 🟢/🟡/🔴 | [A-F] | [Where did the design go further than expected? What would surprise with thoughtfulness? Micro-interactions, edge cases, empty states, transitions — where does "uncommon care" live?] |

**Copy Deep Dive (6 lenses)**

| Lens | Status | Grade | One-line |
|------|--------|-------|----------|
| WIIFM | 🟢/🟡/🔴 | [A-F] | [Does the user understand the benefit immediately across key elements?] |
| Reassurance | 🟢/🟡/🔴 | [A-F] | [Is there social proof, safety language, confidence-building where needed?] |
| Clarity | 🟢/🟡/🔴 | [A-F] | [Is language simple, jargon-free, specific across headlines, CTAs, errors?] |
| Brevity | 🟢/🟡/🔴 | [A-F] | [Is every word earning its place? No filler?] |
| Human Voice | 🟢/🟡/🔴 | [A-F] | [Does it sound like a person, not a system message?] |
| Iconic Copy | 🟢/🟡/🔴 | [A-F] | [Is any phrase memorable or quotable?] |

**Visual System Evaluation**

| Category | Status | Grade | One-line |
|----------|--------|-------|----------|
| Hierarchy | 🟢/🟡/🔴 | [A-F] | [one-line insight] |
| Typography | 🟢/🟡/🔴 | [A-F] | [one-line insight] |
| Color & Depth | 🟢/🟡/🔴 | [A-F] | [Palette + shadow/stroke quality + elevation treatment] |
| Spacing | 🟢/🟡/🔴 | [A-F] | [one-line insight] |
| Interaction | 🟢/🟡/🔴 | [A-F] | [one-line insight] |
| Information Design | 🟢/🟡/🔴 | [A-F] | [Progressive disclosure, redundancy, density appropriate for context?] |
| Responsive | 🟢/🟡/🔴 | [A-F] | [one-line insight] |
| AI Slop | 🟢/🟡/🔴 | [A-F] | [one-line insight] |
| Motion | 🟢/🟡/🔴 | [A-F] | [one-line insight] |
| Performance | 🟢/🟡/🔴 | [A-F] | [one-line insight] |

**DESIGN.md Compliance**

| Status | Result |
|--------|--------|
| 🟢/🟡/🔴 | [N] design-drift findings — [summary] |

Traffic light key: 🟢 A-B (solid) · 🟡 C (needs work) · 🔴 D-F (broken)

### Integrated Findings (Ranked by Impact)

#### High
1. [Source: Primary/Sub-agent] **Finding** — Description. Fix: [specific fix]. Effort: [time].
2. ...

#### Medium
3. ...

#### Polish
4. ...

### Quick Wins
1. **[Fix]** — [time]. [Impact].
2. ...

---

## Deep Dive

Everything below supports the findings above. Refer here for methodology, raw scores, and detailed analysis.

### Design System Extracted
[From Phase 2]

#### DESIGN.md Compliance
[Comparison table, if file found]

### Per-Category Detail
[Full Phase 3 scoring: all 10 categories with item-by-item pass/fail]

### Litmus Checks
| Question | Yes/No | Notes |
|----------|--------|-------|
| Would I scroll to see the CTA? | ✓/✗ | — |
| Do I know what to click? | ✓/✗ | — |
| Do I know what happens after I click? | ✓/✗ | — |
| Can I read this on a phone? | ✓/✗ | — |
| Would I use/believe this? | ✓/✗ | — |
| Does design match copy tone? | ✓/✗ | — |
| Would a friend say "modern"? | ✓/✗ | — |

### Interaction Flow Review
[From Phase 4]

### Cross-Page Consistency
[From Phase 5]

### Sub-Agent Review: UX + Copy
[C.L.E.A.R. scores, copy audit, rewrites, friction points from Phase 8]
```

---

### Phase 7: Triage & Ranking

Sort findings by impact:

**High:** Breaks usability, violates hard rules, extreme visual clash, WCAG failure
**Medium:** Hierarchy problems, spacing inconsistency, design-drift, UX friction
**Polish:** Microcopy, animation smoothness, subtle contrast, edge cases

Within each tier, rank by:
1. Effort to fix (quick wins first)
2. Visual impact (seen often, seen first)

---

### Phase 8: UX + Copy Review

Run `ux-copy-review.md` on the same target (URL, HTML file, or screenshot).

This is a separate skill file — see `ux-copy-review.md` for the full C.L.E.A.R. framework, 6 copy lenses, scoring rubric, and output format. It can also be run standalone outside of this review.

**How to run:** If using a sub-agent, pass the target and any context from Phases 1-7. If running inline, switch to the UX + Copy reviewer persona and follow the skill's workflow.

**Output:** C.L.E.A.R. scores (A-F), copy audit on 3-5 key elements, up to 3 rewrites, up to 3 UX friction points. The output gets merged into Phase 9.

---

### Phase 9: Final Synthesis

Merge findings from primary review (Phase 6) + sub-agent (Phase 8):

1. De-duplicate (if both flagged same issue, keep primary + sub-agent insight)
2. Tag new findings from sub-agent
3. Re-rank triage by combined impact

Output final ranked list:

```
## Integrated Findings

### High Impact
1. [Primary] Heading hierarchy inverted → Fix: adjust H2/H3 sizes
2. [Sub-agent] Headline vague → Fix: rewrite to lead with benefit
3. [Primary] Footer contrast fails WCAG → Fix: lighten text
4. [Sub-agent] CTA label generic → Fix: "Unlock my 7-day trial"

### Medium Impact
[...]

### Polish
[...]
```

---

## Regression Tracking

Save results to `design-baseline.json` in project root:

```json
{
  "date": "2026-04-12",
  "url": "https://example.com",
  "design_score": "B",
  "ai_slop_score": "A",
  "findings_count": {
    "high": 3,
    "medium": 5,
    "polish": 4
  },
  "litmus_passing": 5,
  "wcag_failures": 1,
  "design_drift_count": 2,
  "notes": "Heading hierarchy needs attention; otherwise solid"
}
```

On next review, compare current state vs baseline. Flag regressions (score drops, new findings reappear).

---

## Integration with Other Skills

**Pairs well with:**
- **`plan-design-review.md`** — Run before build to avoid costly fixes later
- **`design-shotgun.md`** — Before committing direction, generate alternatives
- **`design-html-prototype.md`** — After direction chosen, build high-fidelity prototype
- **`design-system.md`** — If no DESIGN.md yet, create one based on this audit

**One-off audit?** Use this skill standalone.

**Ongoing polish?** Schedule weekly reviews via `/schedule`.

---

## Checklist for You (The Designer Running This)

- [ ] Opened target (URL in Chrome, or HTML file)
- [ ] Took screenshot for Phase 1
- [ ] Ran JS extraction (if programmatic) for Phase 2
- [ ] Scored all 10 categories in Phase 3
- [ ] Walked 2-3 key flows (Phase 4)
- [ ] Checked cross-page consistency (Phase 5)
- [ ] Compiled report with dual scores (Phase 6)
- [ ] Ran sub-agent (Phase 8)
- [ ] Merged findings (Phase 9)
- [ ] Saved baseline (regression tracking)
- [ ] Triage sorted by impact
- [ ] Quick wins identified and estimated (effort + effect)

---

## Example Output (Abbreviated)

```
# Design Review: https://example.com

## First Impression
The site communicates a productivity tool for remote teams. I notice the color palette is muted, which feels safe but not exciting. First three things my eye goes to: 1) The purple hero section, 2) The "Get Started" button (though it's hard to spot), 3) The testimonials below. One word: staid.

## Design System Inferred
**Fonts:** Inter 400/600/700, consistent with DESIGN.md ✓
**Colors:** 9 colors detected, mostly grays + one accent. Within budget. ✓
**Heading Scale:** H1: 32px, H2: 24px, H3: 20px. Ratio 1.33:1, slightly tight. Consider 1.5:1.
**Spacing:** Detected 8px, 16px, 24px, 32px gaps. Mostly consistent, two outliers (12px gap in one card). Scale-based ✓
**Touch Targets:** Buttons 44x44px on mobile ✓. One icon link at 32x32px (edge case, likely OK).

## DESIGN.md Compliance
| Element | DESIGN.md | Extracted | Status |
|---------|-----------|-----------|--------|
| Primary Font | Inter | Inter | ✓ |
| Heading Ratio | 1.5:1 | 1.33:1 | ⚠ Design-drift |
| Accent Color | #5b21b6 | #6d28d9 | ⚠ Design-drift |
| Spacing Base | 8px | 8px, (12px outlier) | ⚠ Consistency issue |

## Dual Scores
- **Design Score: B** (81% weighted)
- **AI Slop Score: A** (0 anti-patterns)
- **Classification:** SaaS App UI

## Litmus Checks
| Question | Yes/No | Notes |
|----------|--------|-------|
| Would I scroll to see the CTA? | Yes ✓ | CTA at top + mid-page |
| Do I know what to click? | Yes ✓ | Purple button clear |
| Know what happens after? | No ✗ | No hint, no copy about trial start |
| Can I read this on mobile? | Yes ✓ | Text >=16px, contrast good |
| Use/believe this? | Yes ✓ | Looks professional, trustworthy |
| Design matches tone? | Yes ✓ | Minimal + functional |
| Modern? | Somewhat — | Safe, not contemporary |

## Per-Category Grades
| Category | Grade | Key Finding |
|----------|-------|-------------|
| Hierarchy | B | Hero focal point weak; eye bounces |
| Typography | A | Excellent scale, one H3 size tight |
| Color | B | Palette cohesive, accent underused |
| Spacing | B | Mostly 8/16/24 scale, one 12px outlier |
| Interaction | A | Hover states smooth, loading skeleton clear |
| Responsive | A | Mobile-first, touches >=44px |
| Content | B | Copy OK, one CTA label generic |
| AI Slop | A | No slop detected |
| Motion | A | Easing smooth, duration intentional |
| Performance | A | LCP 1.8s, CLS 0.05 |

## High-Impact Findings

**[design-drift] Heading Scale**
H2 (24px) to H3 (20px) is 1.2:1, not 1.5:1 per DESIGN.md. Causes hierarchy confusion.
Fix: H3 → 18px (1.33:1 step), or H2 → 28px (1.4:1). Recommend former.
Effort: 10 min. Impact: Visual clarity.

**[design-drift] Accent Color**
Extracted #6d28d9, DESIGN.md specifies #5b21b6. 
Fix: Update CSS variable `--primary` and re-export components.
Effort: 5 min. Impact: Brand consistency.

**Hierarchy: Weak focal point**
Logo and nav compete with hero. Consider: fade nav on scroll, or reduce logo prominence.
Effort: 20 min. Impact: User focuses on CTA, not nav.

**Content: Vague CTA**
Button says "Get Started" (what am I starting?). Rewrite: "Start Free 7-Day Trial"
Effort: 2 min. Impact: Clarity, conversion likely lifts.

## Medium-Impact Findings
- Spacing: One card has gap: 12px instead of 16px. Likely CSS override. Audit component.
- Color: Accent color appears only once (primary button). Consider secondary accent for links/highlights.

## Polish
- Curly quotes on headings vs straight on body. Standardize via font feature.
- Text wrapping: Headline wraps at 3 lines on tablet; consider text-wrap: balance.

## Sub-Agent Review: UX + Copy

### C.L.E.A.R. Scores
| Dimension | Score | Notes |
|-----------|-------|-------|
| Clarity | B | CTA visible, hero headline clear |
| Layout | A | Clean, generous whitespace |
| Emphasis | B | Primary button not visually distinct (same color as secondary link) |
| Accessibility | A | WCAG AA, keyboard nav works |
| Reward | B | Loading skeleton present, success state quiet |

### Copy Audit
**Headline:** "Build better, together."
- WIIFM: Vague. Better what? (Bad)
- Clarity: Jargon. (Bad)
- Human Voice: Conversational, OK.
- Iconic Copy: Generic. (Bad)

**Rewrite:** "Keep your remote team in sync. See everything in one dashboard."

**CTA:** "Get Started"
- WIIFM: What am I starting? (Unclear)
- Clarity: Generic. (Bad)

**Rewrite:** "Start Your Free 7-Day Trial"

### UX Friction
1. Form doesn't validate in real-time — user submits before knowing email is invalid.
2. No empty state — when user creates account, dashboard is blank (what now?).

## Integrated Findings (Combined + Ranked)

### High
1. [design-drift] Heading scale (H2/H3 ratio off) → Fix: adjust sizes → 10 min
2. [Sub-agent] Headline too vague → Rewrite to lead with benefit → 5 min
3. [Primary] Focal point weak → Reduce nav prominence or fade on scroll → 20 min
4. [design-drift] Accent color mismatch → Update CSS variable → 5 min

### Medium
5. [Primary] Spacing outlier (12px gap) → Standardize → 15 min
6. [Sub-agent] CTA too generic → Rewrite with trial length → 2 min
7. [Primary] Color underused (accent only once) → Use on secondary elements → 20 min

### Polish
8. Curly quotes inconsistency → Standardize via font feature → 5 min
9. Text wrap on tablet → Add text-wrap: balance → 5 min

## Quick Wins
1. **Rewrite headline + CTA** — 5 min. Likely improves conversion.
2. **Fix accent color** — 5 min. Brand consistency.
3. **Adjust H2/H3 sizes** — 10 min. Improves hierarchy clarity.

---

**Baseline saved to `design-baseline.json`**
Next review: Compare against this snapshot to detect regressions.
```

---

## Tips for Running This Skill

1. **Be opinionated.** "This is confusing" beats "I notice some hierarchy challenges."
2. **Specific, not generic.** "H2 size 20px is 0.8x H1 size 24px" beats "sizes are inconsistent."
3. **Don't hedge.** You're the designer. Own the critique.
4. **Screenshot everything.** You'll reference it later in fixes.
5. **Test on real devices.** 4G mobile, touch, desktop. Simulators lie.
6. **Prioritize ruthlessly.** High impact first. Polish last.
7. **Pair with sub-agent.** Don't skip — copy often causes usability problems.
8. **Save baselines.** Future you will thank you when deciding "should we ship this?"

---

## Skill Complete

You have a full design review system. Use it for:
- Pre-launch audits (catch issues before ship)
- Regression detection (is the redesign working?)
- Design system compliance (drifts tracked, fixed)
- AI slop detection (catch template bullshit)
- Copy quality (WIIFM, tone, clarity)

Run this skill. Save the report. Triage findings. Ship better work.
