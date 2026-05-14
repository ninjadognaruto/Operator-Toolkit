---
name: dont-make-me-think
description: Evaluate any web page, app screen, or interface against Steve Krug's Don't Make Me Think usability principles. Use when someone shares a website screenshot, prototype, or live URL and asks "is this obvious?", "would a first-time user get this?", "audit this page", "review the usability", "trunk test this", "5-second test this", "is the navigation clear", "does this make me think", "Krug review", "happy talk audit", "scan test", or any request to evaluate page-level clarity, scannability, navigation, conventions, or copy efficiency. Produces a green/yellow/red scorecard across 13 criteria covering self-evidence, visual hierarchy, scannability, clickability, the trunk test, conventions, information scent, word economy, labels, goodwill, mobile parity, accessibility, and testing cadence. Behavior-test-driven (5-sec test, trunk test, half-the-words test) rather than checklist-driven.
---

# Don't Make Me Think Skill

A behavior-test-driven framework for evaluating page-level usability against Steve Krug's *Don't Make Me Think* (3rd ed.). Owns the "is it obvious?" lens. Pairs with sibling design skills for deeper diagnosis.

## When to use this skill

- User shares a screenshot, prototype, or URL and asks "is this obvious?", "would a first-time user get this?"
- User says "audit this page", "review the usability", "Krug review", "trunk test this", "5-second test this"
- User asks about scannability, clickability, navigation conventions, or page-level clarity
- User wants to cut copy ("happy talk audit", "is there too much text here?")
- User wants a usability scorecard or report on a specific page

## When NOT to use this skill

- Multi-step flow analysis → use `psych-journey` (Psych curve across interactions)
- Cognitive science / mental model critique → use `don-norman-review`
- System 1 attention audit → use `bias-audit` (BIAS framework)
- Behavior change diagnosis (why aren't users doing X?) → use `fogg-bmap`
- Establishing the experience ceiling → use `15-star-experience`

## The 13 criteria

For full details on each criterion (mechanism, sub-components, Krug's quotes, named examples, diagnostic questions), read:

```
/references/criteria.md
```

**Always read `references/criteria.md` before producing a scorecard.**

## Impact tier summary

**Critical (5/5)** — page-fails-without-these:
1. Self-Evidence (5-Second Test)
2. Visual Hierarchy
5. Trunk Test Pass
10. Goodwill Reservoir

**High (4/5)** — strong measurable effects:
3. Scannability
4. Clickability Affordance
6. Convention Adherence
7. Information Scent
8. Word Economy

**Medium (3/5)** — meaningful but secondary:
9. Self-Explanatory Labels
11. Mobile Parity
12. Accessibility Floor

**Low (2/5)** — process / verification:
13. Tested With Real Users

## Modifier 1 — Page type (changes which criteria dominate)

Krug's Ch 7 (Big Bang Theory) distinguishes homepage from interior. Adjust emphasis, not the criteria list.

| Page type | Criteria that carry the most weight |
|-----------|-------------------------------------|
| **Homepage** | Self-Evidence (1), Visual Hierarchy (2), Word Economy (8) — page must answer "what is this site, what can I do, why care" in seconds |
| **Interior / category page** | Trunk Test (5), Information Scent (7), Convention Adherence (6) — wayfinding dominates |
| **Form / task flow** | Goodwill Reservoir (10), Self-Explanatory Labels (9), Clickability (4) — respect the user's time, forgive input |
| **Search results / index** | Scannability (3), Information Scent (7) — built for the eye sweeping for a match |
| **Mobile screen** | All Critical + Mobile Parity (11) elevated to Critical |

## Modifier 2 — Input available (declare upfront, don't fake the rest)

Front-door pattern — at the start of any evaluation, state what input you have and which criteria become "Not Assessable."

| Input | Fully assessable | Not assessable |
|-------|-----------------|----------------|
| **Static screenshot (single page)** | 1, 2, 3, 4, 6, 8, 9, 11 (if mobile shot), 12 (visual contrast / heading order if visible) | 5 (need to land cold), 7 (need to follow links), 10 (need pricing/error/forgiveness flows), 13 (process) |
| **Multiple screens / click-through / video** | All except 13 | 13 |
| **Live URL** | All except 13 (which is process, not interface) | 13 |
| **Description / wireframe only** | None formally | All formally — produce hypotheses, not a scorecard |

If criteria are unassessable, mark them explicitly in the scorecard with `—` and "Needs [X]" rather than guessing.

## Modifier 3 — Persona walk-through (optional, for richer diagnosis)

Adapted from synthux pattern. For sites where audience varies sharply, run the 5-Second Test and Trunk Test from 2-3 personas:
- *First-time visitor* (no prior context)
- *Returning user* (knows the brand, looking for something specific)
- *Mobile commuter* (one-handed, distracted, in a hurry)

Report what each notices and misses. Different personas often hit different criteria failures on the same page.

## How to evaluate a page

Start with the **Critical four**. If any of these fail, the rest barely matters:

1. **Self-Evidence (1)** — Cover the body copy. Can you tell what the page is and what to do?
2. **Visual Hierarchy (2)** — Squint at the page. Does importance map to size/weight/position? Does grouping make sense?
3. **Trunk Test Pass (5)** — Drop in cold. Site ID? Page name? Sections? You-are-here? Search? (interior pages especially)
4. **Goodwill Reservoir (10)** — Is the page surfacing what users came for, or hiding it behind marketing?

Then High-tier (4-8): scan for affordance failures, convention violations, weak link copy, fluff text.

Then Medium and Low for completeness.

**Behavior tests Krug would actually run** (do these literally, don't just check abstractly):
- **5-Second Test** — Look at the page for 5 seconds. Close. What did you see? What can you do?
- **Trunk Test** — Drop into any internal page. Answer 6 questions: site / page / sections / location / options / search.
- **Half-the-Words Test** — Mentally cut 50% of the copy. Does the page still work? If yes, the original had bloat.
- **Squint Test** — Defocus your eyes. The most important thing should still pop.
- **Click-Mindlessness Test** — Walk a user task. At each fork: is the next click obvious without thought?

## Scorecard output (default for evaluation)

**Always produce a visual scorecard when evaluating.** Self-contained HTML file.

### Scorecard design spec

**Layout**: Single-column table, one row per criterion, sorted by impact (Critical first). Within each tier, sort by criterion number.

**Columns**:
1. **Impact** — tier badge (Critical/High/Medium/Low)
2. **Criterion** — name + category badge (Cognitive Load / Wayfinding / Copy / Respect / Verification)
3. **Rating** — green / yellow / red / `—` (Not Assessable)
4. **Assessment** — 1-line specific observation citing what on the page produced the rating
5. **Krug fix** — 1-line concrete change (the action)

**Rating logic** — apply 3-factor severity (Frequency × Impact × Persistence) borrowed from AndersonWang:
- 🟢 **Green** — passes the criterion. User wouldn't think about this.
- 🟡 **Yellow** — partial pass. Most users get it; a meaningful slice will hesitate.
- 🔴 **Red** — fails. Users will stop, puzzle, or bounce.
- **— Not Assessable** — input doesn't allow assessment (e.g. trunk test on a static homepage shot).

**Summary section at top**:
- Page name / URL + overall grade (A/B/C/D/F)
- Green/yellow/red/N-A count (e.g., "5 green · 4 yellow · 2 red · 2 N/A")
- **Top 3 strengths** (highest-impact greens)
- **Top 3 risks** (highest-impact reds, then yellows)
- **The one fix** — if the user could only ship one change, which red gets fixed first
- **Page type detected** + which criteria the modifier elevated

**Weighted scoring** (skip Not Assessable from denominator):
- Critical: 5 pts green, 2.5 yellow, 0 red
- High: 4 pts green, 2 yellow, 0 red
- Medium: 3 pts green, 1.5 yellow, 0 red
- Low: 2 pts green, 1 yellow, 0 red

**Grade thresholds** (% of max possible from assessed criteria):
- A = 85%+, B = 70-84%, C = 55-69%, D = 40-54%, F = below 40%

**Color palette**:
- Green: `#0F6E56` (bg `#E1F5EE`)
- Yellow/Amber: `#854F0B` (bg `#FAEEDA`)
- Red: `#A32D2D` (bg `#FCEBEB`)
- Not Assessable: `#888780` (bg `#F1EFE8`)
- Category badges:
  - Cognitive Load: `#534AB7` / `#EEEDFE`
  - Wayfinding: `#185FA5` / `#E6F1FB`
  - Copy: `#0F6E56` / `#E1F5EE`
  - Respect: `#993C1D` / `#FAECE7`
  - Verification: `#854F0B` / `#FAEEDA`
- Impact badges:
  - Critical: `#A32D2D` / `#FCEBEB`
  - High: `#D85A30` / `#FAECE7`
  - Medium: `#BA7517` / `#FAEEDA`
  - Low: `#888780` / `#F1EFE8`

**File output**: Save as `{page-name}-dmmt-scorecard.html` in `outputs/reports/` (per CLAUDE.md convention).

### Two output modes

**Mode 1 — Diagnose only** (default): scorecard with Krug fix one-liners.

**Mode 2 — Diagnose + rewrite** (if user asks): scorecard plus a rewritten copy block for any red/yellow on Word Economy (8), Self-Explanatory Labels (9), or Information Scent (7). Show "before / after" with byte counts.

### Multi-page comparison

When comparing 2+ pages or 2+ design variants, produce a comparison scorecard:
- One column per page
- Same row structure sorted by impact
- Color dot per page per criterion
- Summary row with overall grade per page
- Header showing page thumbnail + name

## How this skill pairs with siblings

- `dont-make-me-think` + `bias-audit` — Krug's page-level "obvious?" + System 1 attention check on the same screen
- `dont-make-me-think` + `psych-journey` — page audit for the entry point + Psych curve across the rest of the flow
- `dont-make-me-think` + `15-star-experience` — Krug establishes the floor (no obstacles); 15-star establishes the ceiling
- `dont-make-me-think` + `don-norman-review` — Krug's tactical web lens + Norman's affordance/signifier framework on the same artifact
- `dont-make-me-think` + `copy-analyzer` — Krug surfaces happy talk; copy-analyzer rewrites it

## Key Krug quotes (use sparingly when justifying findings)

- *"Don't make me think."* (First Law)
- *"It doesn't matter how many times I have to click, as long as each click is a mindless, unambiguous choice."* (Second Law)
- *"Get rid of half the words on each page, then get rid of half of what's left."* (Third Law)
- *"Happy talk must die."*
- *"Innovate when you know you have a better idea, but take advantage of conventions when you don't."*
- *"When you make a site that's hard to use, you're being rude to your users."*

## Key sources

- Krug, Steve. *Don't Make Me Think, Revisited* (3rd ed., 2014)
- Krug, Steve. *Rocket Surgery Made Easy* (2010) — DIY usability testing companion
- Spool, Jared — empirical scanning + information-scent research
- Theofanos & Redish — accessibility / screen reader observation (Krug's recommended reading)
- Pirolli & Card — Information Foraging Theory (information-scent backing)
- Herbert Simon — *satisficing* (origin of Krug's "fact of life")
