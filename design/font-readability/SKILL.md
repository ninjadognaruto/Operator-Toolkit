---
name: font-readability
description: Use this skill whenever the user asks about font readability, legibility, typography criteria, font selection, typeface comparison, or font evaluation. Triggers include questions like "what makes a font readable", "compare fonts for readability", "which font is more legible", "how to choose a body text font", "evaluate this typeface", "font accessibility", "dyslexia-friendly fonts", "font for UI text", "x-height", "aperture", "stroke contrast", "letter spacing", "kerning", or any discussion about why certain fonts are easier to read than others. Also use when the user wants to create a visual font comparison, font report, or typography audit. This skill covers 33 research-backed criteria across letterform design, spacing, layout, screen rendering, cognitive science, and accessibility.
---

# Font Readability Skill

A comprehensive, research-backed framework for evaluating and comparing fonts on readability and legibility. Covers 33 measurable criteria across 6 domains, with specific font examples, impact ratings, and visual comparison guidance.

## When to use this skill

- User asks about font readability, legibility, or typography quality
- User wants to compare fonts or choose a font for body text / UI
- User asks about specific typography properties (x-height, apertures, kerning, etc.)
- User needs accessibility-compliant font recommendations
- User wants a visual font comparison or typography audit report
- User asks "why is font X more readable than font Y"

## Quick response framework

When answering font readability questions, structure your response around these 6 domains, prioritized by impact:

### Domain 1: Letterform properties (most impactful)
These are intrinsic to the font design and account for the majority of legibility variance.

### Domain 2: Spacing properties
How letters and words sit together — kerning, tracking, word spacing, sidebearings.

### Domain 3: Layout properties
Paragraph-level: line-height, line length, typographic color, optical sizing, alignment, vertical rhythm.

### Domain 4: Screen rendering
Hinting, subpixel rendering, hi-DPI behavior. Decreasing in importance as Retina displays become standard.

### Domain 5: Cognitive science
How the brain processes text — parallel letter recognition, visual span, crowding, saccades, familiarity.

### Domain 6: Accessibility
WCAG contrast, dyslexia support, low-vision optimization, aging eye considerations.

## The 33 criteria

For full details on each criterion including research citations, font examples, and visual comparison data, read the reference file:

```
/references/criteria.md
```

**Always read `references/criteria.md` before answering detailed font readability questions.** It contains the complete list of 33 criteria with definitions, why each matters, impact ratings, which direction (high/low/middle) is better, and specific font examples for good vs. poor performance.

## Impact tier summary

Use this to quickly prioritize which criteria matter most:

**Critical (5/5)** — account for most legibility variance:
- x-height ratio, stroke contrast, aperture openness, character disambiguation
- Line-height, parallel letter recognition, contrast ratio (WCAG)

**High (4/5)** — strong measurable effects:
- Counter size, terminal style, tracking, word spacing
- Line length, visual span, crowding resistance, low-vision design, aging eye support

**Medium (3/5)** — meaningful but secondary:
- Letter width, ascender/descender length, kerning quality, sidebearings
- Typographic color, optical sizing, saccade efficiency, dyslexia support

**Low (2/5)** — refinement-level:
- Overshoot, bowl shape, text alignment, vertical rhythm, hinting, hi-DPI behavior, familiarity

**Minimal (1/5)** — niche or legacy:
- Ink traps, subpixel rendering optimization

## How to evaluate a font

When a user asks you to evaluate a specific font, check these 5 criteria first (they account for the majority of legibility variance):

1. **Aperture openness** — Look at c, e, a, s. Do terminals stay open or curl inward?
2. **Character disambiguation** — Check Il1, O0, rn vs m. Can you tell them apart instantly?
3. **x-height ratio** — Is the lowercase body at least ~65% of cap height?
4. **Stroke contrast** — Are thick/thin strokes similar (good) or dramatically different (problematic for body text)?
5. **Default spacing** — Does body text at 14-16px feel evenly spaced without manual adjustment?

Then note secondary factors if relevant to the user's context (screen vs print, body vs display, accessibility needs).

## Scorecard output (default for single-font evaluation)

**Always produce a visual scorecard when evaluating a font.** Create a self-contained HTML file that renders the font's performance across all 33 criteria as a color-coded scorecard.

### Scorecard design spec

**Layout**: Single-column table, one row per criterion, sorted by impact (Critical first, then High, Medium, Low, Minimal). Within each impact tier, sort by criterion number.

**Columns**:
1. **Impact** — badge showing tier (Critical/High/Medium/Low/Minimal) with tier color
2. **Criterion** — name + category badge
3. **Rating** — colored dot or pill: green (good), yellow (moderate), red (poor)
4. **Assessment** — 1-line explanation of why this font gets that rating
5. **Live sample** — the font rendered in the browser for visual proof (use Google Fonts `@import` if the font is on Google Fonts, otherwise use the font name and fall back to system fonts)

**Rating logic** — for each criterion, assess the font and assign:
- 🟢 **Green** = font performs well on this criterion (e.g., open apertures, high x-height, good disambiguation)
- 🟡 **Yellow** = font is acceptable but not great, or the criterion is not fully applicable (e.g., decent but not outstanding kerning, moderate stroke contrast)
- 🔴 **Red** = font performs poorly on this criterion (e.g., closed apertures, ambiguous Il1, extreme stroke contrast for body text)

For "middle is best" criteria (tracking, word spacing, line-height, line length, visual span): green = near the ideal middle range, yellow = slightly outside, red = at an extreme.

**Summary section** at the top:
- Font name + overall readability grade (A/B/C/D/F based on weighted score)
- Green/yellow/red count summary (e.g., "22 green · 8 yellow · 3 red")
- Top 3 strengths (highest-impact greens)
- Top 3 risks (highest-impact reds/yellows)
- Best use case recommendation (body text, display, UI, code, etc.)

**Weighted scoring**:
- Critical (5): 5 points per green, 2.5 per yellow, 0 per red
- High (4): 4 points per green, 2 per yellow, 0 per red
- Medium (3): 3 points per green, 1.5 per yellow, 0 per red
- Low (2): 2 points per green, 1 per yellow, 0 per red
- Minimal (1): 1 point per green, 0.5 per yellow, 0 per red

**Grade thresholds** (percentage of max possible score):
- A = 85%+, B = 70-84%, C = 55-69%, D = 40-54%, F = below 40%

**Visual style**: Clean, minimal. White background. Use the same color palette as the criteria reference:
- Green: #0F6E56 (bg #E1F5EE)
- Yellow/Amber: #854F0B (bg #FAEEDA)
- Red: #A32D2D (bg #FCEBEB)
- Category badge colors: Letterform #534AB7/#EEEDFE, Spacing #0F6E56/#E1F5EE, Layout #185FA5/#E6F1FB, Screen #854F0B/#FAEEDA, Cognition #993C1D/#FAECE7, Access #A32D2D/#FCEBEB
- Impact badge colors: Critical #A32D2D/#FCEBEB, High #D85A30/#FAECE7, Medium #BA7517/#FAEEDA, Low #888780/#F1EFE8, Minimal #B4B2A9/#F1EFE8

**File output**: Save as `{font-name}-readability-scorecard.html` in the workspace folder.

### Multi-font comparison

When comparing 2+ fonts, produce a comparison scorecard HTML with:
- One column per font
- Same row structure (33 criteria sorted by impact)
- Color dots for each font in each row
- Summary row at bottom with overall grade per font
- Header showing font names rendered in their own font

## How to compare fonts

When comparing two or more fonts, create a structured comparison covering:

1. **Side-by-side samples** at the intended use size (not just display size)
2. **The Il1 O0 test** — show `Il1 O0 rn m` in each font
3. **Aperture letters** — show `c e a s g` in each font
4. **Paragraph texture** — a full paragraph in each to compare "color" evenness
5. **Small-size stress test** — the same text at 11-12px to see what breaks down

## Visual output guidance

When creating visual comparisons, use the interactive React table format. The reference file contains the complete data model with 33 criteria, font stacks, sample strings, labels, impact ratings, and color logic.

Key design decisions:
- Green = the better end of the dimension for readability
- Red = the worse end
- Amber = both extremes are bad (middle is best)
- The `bestIs` field per criterion controls this: "high", "low", or "mid"
- Impact badges use a 5-tier scale: Critical, High, Medium, Low, Minimal
- Category filters let users focus on one domain at a time
- Sort-by-impact reorders to show the most important criteria first

## Key research citations

Reference these when users ask for evidence:

- **Apertures**: Beier & Larson 2010, Beier et al. 2022 (Applied Ergonomics) — closed apertures significantly reduce recognition
- **Stroke contrast**: Beier & Oderkerk 2021 (Applied Ergonomics) — high contrast impairs bold font recognition
- **x-height**: Legge & Bigelow 2011 (Journal of Vision), Sawyer et al. 2025 — larger x-height = faster reading at small sizes
- **Counters**: Tinker 1964, Bernard et al. 2013 — greater enclosed white space = greater legibility
- **Word recognition**: Larson 2004 (Microsoft) — parallel letter recognition model replaced word shape model
- **Visual span**: Legge et al. 2007, Yu et al. 2007 — peaks at standard spacing, shrinks at both tighter AND looser
- **Crowding**: Pelli & Tillman 2008 (Nature Neuroscience) — crowding, not acuity, determines reading rate
- **Dyslexia fonts**: Rello & Baeza-Yates 2016, Wery & Diliberto 2017 — special dyslexia fonts show no benefit; good typography does
- **Contrast**: WCAG 2.2 — 4.5:1 minimum derived from Arditi & Faye research on 20/40 vision
- **Familiarity**: Beier & Larson 2013 — unfamiliar features affect preference but not speed; readers adapt within one session
- **Optical sizing**: Google Fonts Knowledge, Adobe Source Serif 4 — "not possible for a single font to look great at any size"
