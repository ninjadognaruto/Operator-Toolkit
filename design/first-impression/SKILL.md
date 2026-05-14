---
name: first-impression
description: Capture the visceral, pre-attentive gut reaction to a design — what the eye sees first, what emotions land, what brand archetype it signals — before any analytical critique runs. Use when someone shares a screenshot, mockup, or URL and asks "what's your first reaction", "what's the gut feel", "what does this look like", "what emotion does this evoke", "what stands out", "first impression", "what does this remind you of", "5-second test", "trust gut-check", "visceral response", "what archetype does this feel like". This skill is Norman's visceral level (Level 1) only — it is NOT analytical critique. Run this FIRST before any deep design audit (designer-audit, design-critique, bias-audit, dont-make-me-think) because the halo effect contaminates analytical judgments the moment they begin. Outputs a structured First Impression Report with fixation order, reaction cards, emotion grid, trust gut-check, brand archetype, and a halo prediction handoff for downstream skills.
---

# First Impression Skill

Captures the **visceral pre-attentive response** to a design — what the eye lands on, what emotions register, what brand the gut reads — before conscious analysis kicks in. Norman's Level 1 only.

## Why this skill exists (and why it must run first)

Two findings make this skill mandatory:

1. **50ms aesthetic judgment** — Lindgaard et al. 2006 found that visual appeal ratings at 50ms exposure correlate r ≈ .9 with 500ms ratings. The gut verdict forms in one eye-blink and largely doesn't change.
2. **Halo effect (Thorndike 1920) + Aesthetic-Usability effect (Tractinsky 2000)** — that gut verdict then **silently contaminates every subsequent rating** of usability, trust, professionalism. The halo runs one direction: aesthetics colors usability judgments; not vice versa.

**Consequence:** if any analytical skill runs first, the analyst is already biased and the bias is invisible. This skill captures the visceral *before* it deploys, creating a record the analyst can check their own findings against.

## When to use this skill

- Someone shares a screenshot/mockup/URL and asks "what's your gut reaction"
- Pre-flight before `designer-audit`, `design-critique`, `bias-audit`, `dont-make-me-think`, `don-norman-review`
- "What's the first impression", "5-second test", "what stands out", "what does this remind me of"
- "Does this feel premium / trustworthy / playful / cold"
- Comparing design variants on emotional/visceral dimensions
- Brand-positioning sanity check ("does this look like the kind of company we want to be?")

## When NOT to use this skill

- Analytical usability audit → `dont-make-me-think`
- Cognitive walkthrough / System 1 attention failures → `bias-audit`
- Affordance / signifier critique → `don-norman-review`
- Deep visual quality scoring → `designer-audit` (run **this skill first**, then designer-audit)
- Multi-step flow analysis → `psych-journey`

## The 9 dimensions

For full details on each dimension (mechanism, prompts, taxonomy, examples), read:

```
references/criteria.md
```

Vocabulary references:
- `references/reaction-cards.md` — full Microsoft Product Reaction Cards 118-word list, with category-tuned subsets (B2B SaaS, B2C, fintech, DTC, creative tool, etc.)
- `references/archetypes.md` — Mark & Pearson's 12 Jung archetypes with visual signatures and digital examples

**Always read these references before producing a First Impression Report.**

## Step 0 — Context (always first)

Before any dimension fires, establish:
- **What is this?** (app/site type, screen purpose)
- **Who is the user?** (target persona)
- **What state are they in?** (anxious, casual, focused, time-pressured)
- **What category / industry?** — used to auto-select the relevant Reaction Cards subset

Adapted from Josh Puckett's Interface Craft. *"A divorce filing app demands different care than a podcast player."*

## Impact tier summary

**Critical (always run)**:
1. Fixation Order
2. Reaction Cards (Pick-5)
3. Emotion Grid
4. Trust Gut-Check

**High (run by default)**:
5. Visual Complexity & Color Signature
6. Anxiety / First Objection
7. Brand Archetype

**Medium (optional for quick passes)**:
8. Gestalt Groupings
9. Category / Mental-Model Placement

## Modifier 1 — Persona variance (opt-in)

Run all 9 dimensions from 2-3 personas. The variance itself is the signal — same design, wildly different first impressions across personas, reveals whose attention the design is actually catching. Default personas:
- *First-time visitor* — no prior context
- *Returning power user* — knows the brand, looking for something specific
- *Skeptic* — cautious, time-pressured, reading every signal as a trust input

Cross-cultural variance is real (Reinecke & Gajos 2014). For products targeting specific cultural contexts, add a region-specific persona.

## Modifier 2 — Trajectory (opt-in)

Run dimensions 1-4 at three time-points to see whether the rating *degrades* on closer inspection. Lindgaard 2011 showed the 50ms verdict mostly holds — when it doesn't, that's diagnostic.

| Time | What's captured | Method |
|------|-----------------|--------|
| **50ms gestalt** | Color, contrast, complexity, balance | Cover everything but a heavy blur — what's the impression? |
| **5s** | Maze 5-second test methodology | Show 5 seconds, hide, ask the questions |
| **30s** | Start of behavioral level | Look freely, then report |

**Useful when:** the design "looks fine at first" but degrades, or vice versa.

## Modifier 3 — Halo Prediction (always on, output rule)

After the 9 dimensions, output a **Halo Prediction** rider for downstream analytical skills. Format:

> **Halo Prediction**: visceral skewed [positive/negative] on [premium / trustworthy / amateur / sketchy / cold / inviting]. Expect the analyst to [overweight / underweight] [usability / professionalism / clarity / trust] in the next pass. **Watch for**: [specific bias to audit].

Example:
> **Halo Prediction**: visceral skewed positive on premium and trustworthy. Expect to overweight usability and professionalism in the analytical pass. Watch for: rating UI charity that wouldn't be granted to an uglier version of the same flow. Bias-audit any "feels usable" judgments.

This makes the bias **visible to the next skill** before it can contaminate the output. The handoff is what makes this skill genuinely additive to a chain rather than parallel.

## How to evaluate a design

**Run the literal physical tests Krug, Maze, Lindgaard, and Microsoft built — don't just check abstractly.**

| Test | What it captures | Method |
|------|------------------|--------|
| **Squint test** | Visual hierarchy + complexity | Defocus eyes (or apply heavy Gaussian blur to a screenshot). Where does the eye still land? |
| **One-second test** | Single most prominent element | Show, hide, ask "what was the most important thing?" |
| **Five-second test** | First impression with minimal recall | Show 5 seconds, hide, ask "what is this site? what could you do here? what did you feel?" |
| **Pick-5 cards** | Forced emotion vocabulary commitment | From the contextually-filtered Reaction Cards subset, pick exactly 5 that describe this — no more, no less |
| **Mom-or-credit-card test** | Trust gut-check | "Would you forward this to your mom? Enter your credit card here? Trust this with your data?" |
| **Archetype pick** | Brand identity signal | From the 12 Jung archetypes, pick 1-2 that match the visceral read |
| **Missing-thing test** | First objection / anxiety | "What did you expect to see that you didn't?" |

## Output format — NOT a scorecard

This skill is **generative**, not pass/fail. Output is a **First Impression Report** in this structure:

```
═══════════════════════════════════════════════════
FIRST IMPRESSION REPORT — {design name}
═══════════════════════════════════════════════════

CONTEXT
  What: {1 sentence}
  User: {1 sentence}
  State: {1 sentence}
  Category: {category — drives Reaction Cards subset}

ONE-GLANCE SUMMARY
  Reaction Cards (5):  ▢ word1  ▢ word2  ▢ word3  ▢ word4  ▢ word5
  Emotion:             {plain English: e.g. "calm + pleasant", "anxious + intense"}
  Archetype:           {primary} (+ {secondary if applicable})
  Trust gut:           {high / mixed / low}

──── SENSORY CAPTURE ────

1. FIXATION ORDER (what the eye lands on, in order)
   1st: {element + why it wins — pre-attentive feature: contrast/color/size/motion}
   2nd: {element + why}
   3rd: {element + why}
   Notable: anything fighting for 1st place? Anything that should have been seen but wasn't?

5. VISUAL COMPLEXITY & COLOR
   Density:    sparse / moderate / dense  →  {observation}
   Saturation: muted / moderate / saturated  →  {observation}
   Temperature: warm / neutral / cool
   Reinecke check: complexity + colorfulness predict ~50% of appeal — does this fall in the right zone for the category?

8. GESTALT GROUPINGS (Medium — optional)
   Groups: {N}
   What's in each: {brief}
   Misgrouping risk: {anything that LOOKS grouped but shouldn't be, or vice versa}

──── EMOTIONAL RESPONSE ────

2. REACTION CARDS — picked 5 from {category} subset
   {card 1} — {1-line reason}
   {card 2} — {1-line reason}
   {card 3} — {1-line reason}
   {card 4} — {1-line reason}
   {card 5} — {1-line reason}

3. EMOTION GRID (Russell circumplex, plain English)
   Quadrant: {one of: positive+energizing / calm+pleasant / anxious+intense / boring+flat}
   Reading: {1-2 sentences on what specifically lands as that emotion}

4. TRUST GUT-CHECK
   Credit card test:    {yes / hesitate / no} — {why}
   Forward-to-mom test: {yes / hesitate / no} — {why}
   Data trust:          {yes / hesitate / no} — {why}
   Stanford signals: prominence-interpretation — what specifically created or destroyed trust?

6. ANXIETY / FIRST OBJECTION
   First worry:  {1 sentence}
   What's missing: {what did you expect to see that you didn't?}
   Friction guess: {where will users hesitate?}

──── IDENTITY SIGNAL ────

7. BRAND ARCHETYPE
   Primary:   {1 of 12} — {visual signal that creates this read}
   Secondary: {1 of 12, if mixed} — {if applicable}
   Misalignment risk: does this archetype match the brand's stated positioning? If not, that's the signal.

9. CATEGORY / MENTAL-MODEL PLACEMENT (Medium — optional)
   "Looks like a ___":  {category / industry}
   Specific competitor analog: {1-2 named competitors this evokes}
   Unintended association: {anything off-category that the visceral read picked up}

══════════════════════════════════════════════════
HALO PREDICTION (handoff to downstream skill)

{Visceral skewed [direction] on [attribute]. Expect the analyst to [overweight/underweight]
 [property] in the next pass. Watch for: [specific bias to audit].}

Recommended next skill: {designer-audit / design-critique / bias-audit / dont-make-me-think}
══════════════════════════════════════════════════
```

For multi-persona runs (Modifier 1), produce one report per persona, plus a **variance summary** noting which dimensions diverged most across personas — the divergence itself is the diagnostic.

For trajectory runs (Modifier 2), include a **trajectory delta** section showing how dimensions 1-4 changed between 50ms / 5s / 30s.

## Hybrid ratings

Most dimensions output structured capture (lists, picks, coordinates). Some get tri-state ratings where natural:

- **Visual complexity**: too sparse / right zone / too dense (relative to category)
- **Color saturation**: too muted / right / too saturated
- **Trust**: high / mixed / low
- **Archetype-positioning fit**: aligns / mixed / misaligns

These tri-states feed the Halo Prediction.

## Voice & tone (lifted from Interface Craft)

**BE**: specific, decisive, factual first, impact-aware, quantitative
**DO NOT**: hedge, apologize, be vague, prescribe without reasoning, add praise padding

Tone: senior designer reviewing work with a junior designer they respect. The visceral read is honest, direct, and unvarnished — but rooted in wanting the work to be great.

## How this skill chains with others

**Always run before:**
- `designer-audit` — first-impression is now its mandatory Step 0
- `design-critique` (Interface Craft) — provides the visceral capture before its analytical 5 steps
- `bias-audit` — visceral first, then BIAS framework cognitive performance
- `dont-make-me-think` — visceral first, then page-level clarity audit
- `don-norman-review` — visceral first, then DOET principles

**Useful pairings:**
- `first-impression` + `designer-audit` — gut + analytical visual quality
- `first-impression` + `design-shotgun` — capture first impressions across N variants for direct comparison
- `first-impression` + `15-star-experience` — visceral floor + 15-star ceiling
- `first-impression` + `positioning-canvas` — does the visceral archetype match the stated positioning?

## Key sources

- Lindgaard et al. 2006 — *"Attention web designers: You have 50 milliseconds..."* (50ms aesthetic judgment)
- Lindgaard et al. 2011 — visual appeal correlates with trust + usability r = .62 to .87
- Norman 2004 — *Emotional Design* — visceral / behavioral / reflective levels
- Benedek & Miner 2002 — Microsoft Product Reaction Cards (118-word desirability toolkit)
- Russell 1980 — Circumplex Model of Affect (valence × arousal)
- Plutchik — Wheel of 8 Emotions
- Hassenzahl — AttrakDiff (hedonic vs pragmatic quality)
- Kurosu & Kashimura 1995, Tractinsky 1997, 2000 — Aesthetic-Usability Effect
- Fogg 2003 — Stanford Web Credibility / Prominence-Interpretation Theory
- Reinecke et al. 2013 — visual complexity + colorfulness explain ~50% of appeal variance
- Treisman 1980 / Wolfe 2021 — pre-attentive features (Guided Search 6.0)
- Itti & Koch 1998 — saliency model
- Mark & Pearson 2002 — *The Hero and the Outlaw* (12 Jung archetypes)
- Thorndike 1920 — halo effect ("A Constant Error in Psychological Ratings")
- Maze / UsabilityHub — 5-second test methodology
- Wagemans et al. 2012 — *A Century of Gestalt Psychology* (pre-attentive grouping)
