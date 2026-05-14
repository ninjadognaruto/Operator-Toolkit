# First Impression — dimensions reference

9 dimensions for capturing the visceral pre-attentive response to a design. Norman Level 1 (visceral) only — these dimensions deliberately ignore the behavioral and reflective layers that other skills handle.

## How to read this reference

- **Impact**: 5 = Critical (always run), 4 = High (run by default), 3 = Medium (optional)
- **Source**: the research backing
- **Output type**: structured capture / tri-state rating / forced choice
- **Prompt**: the literal question/test to apply

---

## Step 0 — Context (always first, not scored)

Before any dimension fires, lock down:

| Field | Question |
|-------|----------|
| **What** | What is this — app type, screen, page purpose? |
| **Who** | Who is the target user? |
| **State** | What emotional / cognitive state are they in when they land here? (anxious, casual, focused, in a hurry, time-pressured, browsing) |
| **Category** | What product category? — drives the Reaction Cards subset selection |

Adapted from Josh Puckett's Interface Craft. *"A divorce filing app demands different care than a podcast player."*

A first impression captured without context is meaningless. Premium / amateur / cold / inviting are all relative to category and user state.

---

## Category 1 — Sensory Capture (what hits the eye)

### 1. Fixation Order

- **Impact**: 5 (Critical) | **Source**: Treisman Feature Integration Theory (1980); Wolfe Guided Search 6.0 (2021); Itti & Koch saliency (1998)
- **Output type**: Ranked list (1st / 2nd / 3rd)
- **Prompt**: "What are the first 3 things your eye lands on, in order?"

**The mechanism.** Visual attention is captured pre-attentively by a small set of features that are processed in parallel across the entire visual field, before focused attention deploys. Wolfe's Guided Search lists them: **color, motion, orientation, size, luminance contrast, stereo depth**. The first 1-2 fixations are mostly determined by which element wins the saliency contest in these features.

**Critical constraint:** when reporting fixation order, name the **pre-attentive feature that won**, not the semantic content. The eye doesn't land on "the headline" pre-attentively; it lands on "the dark text block in the upper-left area" — and the brain then reads it. Reporting "the headline caught my eye first" smuggles in interpretation.

**Good example:**
- 1st: bright orange CTA button (high color saturation + size)
- 2nd: face in hero photo (faces always win)
- 3rd: dark navigation bar (luminance contrast against page bg)

**Poor example (smuggles interpretation):**
- 1st: the value prop ← but *why*? what's the visual signal?

**Diagnostic question:** what's the predicted pre-attentive winner (color/contrast/size analysis) — and does it match what the brand wants the user to see? Misalignment = hierarchy failure.

**The "should-have-been" probe.** After listing actual fixation order, ask: *"What was the brand trying to make you see first?"* If the actual ≠ intended, that's the headline finding.

---

### 5. Visual Complexity & Color Signature

- **Impact**: 4 (High) | **Source**: Reinecke et al. 2013 (CHI); Reinecke & Gajos 2014; Russell circumplex applied to color
- **Output type**: Tri-state ratings + observation
- **Prompt**: "Density: sparse / moderate / dense. Saturation: muted / moderate / saturated. Temperature: warm / neutral / cool."

**The mechanism.** Reinecke et al. (2013) collected 548 ratings of 450 websites and built computational models showing **perceived colorfulness and visual complexity together explain ~50% of variance in aesthetic appeal ratings** — after only 500ms exposure. This is the highest-leverage single observation in the visceral pass.

**The grid:**

| Density | Saturation | Temperature | Common visceral read |
|---------|-----------|-------------|---------------------|
| Sparse | Muted | Cool | Premium / clinical / cold |
| Sparse | Muted | Warm | Calm / understated / boutique |
| Sparse | Saturated | Warm | Confident / playful / DTC |
| Sparse | Saturated | Cool | Modern / techy / sharp |
| Dense | Muted | Cool | Professional / dated / utility |
| Dense | Muted | Warm | Cluttered / amateur / anxious |
| Dense | Saturated | Warm | Energetic / overstimulating / casino |
| Dense | Saturated | Cool | Loud / techy-bro / busy |

**Diagnostic question:** does the density × saturation × temperature combo match what the category demands? Premium luxury sites that go dense+saturated read as cheap. B2B SaaS that goes sparse+muted+cool reads as premium. Mismatches are diagnostic.

**Saturation drives arousal; lightness drives valence.** This is the bridge to the Emotion Grid (dimension 3). High saturation = high arousal regardless of valence. Light colors = positive valence.

---

### 8. Gestalt Groupings (Medium)

- **Impact**: 3 (Medium) | **Source**: Wertheimer; Wagemans et al. 2012 — *A Century of Gestalt Psychology*
- **Output type**: Count + brief description per group
- **Prompt**: "How many distinct visual groups do you see? What's in each?"

**The mechanism.** Gestalt grouping principles (proximity, similarity, closure, figure-ground) operate **at the pre-attentive bottom-up stages of perception**. Groupings *form before attention is deployed*. The brain sees groups, then deploys attention within or between them.

If a user can't tell how many groups exist on the page, the design is making them do work the brain should be doing automatically.

**Diagnostic questions:**
- How many distinct groups? Is that the right number for this content?
- What's in each group? Does the grouping make sense (related things grouped, unrelated things separated)?
- **Misgrouping risk**: anything that *looks* grouped but shouldn't be? (e.g., a card that visually contains both an action and an unrelated piece of metadata)
- Anything that *should* be grouped but isn't?

**Connection:** misgrouping is invisible to the user but contaminates everything downstream. They'll struggle without knowing why.

---

## Category 2 — Emotional Response (what hits the body)

### 2. Reaction Cards — Pick-5

- **Impact**: 5 (Critical) | **Source**: Benedek & Miner 2002 (Microsoft Product Reaction Cards)
- **Output type**: Forced 5-word commitment from a category-tuned subset
- **Prompt**: "From the {category} subset of Reaction Cards, pick exactly 5 words that describe the visceral feel of this design. No more, no less."

**The mechanism.** Microsoft built the 118-word Reaction Cards specifically to extract emotional response in a usability lab while bypassing social desirability bias. The list is **~60% positive / 40% negative or neutral** — intentional asymmetry, so the negative options are present and easy to pick. Forcing exactly 5 (not "describe how it feels") prevents the natural urge to elaborate or hedge.

**Why 5, not 1?** One word is too noisy. Five words let a pattern emerge and force prioritization. The user (or LLM standing in) commits to *this five and not those five*. The pattern is the signal.

**Why category-tuned subsets?** "Rigid" / "efficient" make sense for productivity software but are misapplied to a beauty DTC. "Sensual" / "expressive" matter for beauty, not for fintech. The skill picks the relevant ~30-40 cards from the full 118 based on Step 0 category.

**Available subsets** (defined in `references/reaction-cards.md`):
- Productivity / B2B SaaS
- Fintech / trust-critical
- Consumer / B2C / DTC
- Creative tool
- Lifestyle / beauty
- News / content
- Generic (fallback)

**Diagnostic question:** does the picked-5 set cluster on positive or negative? Are there contradictions (e.g., "premium" + "amateur") — and what does the contradiction reveal about mixed signals on the page?

**Output format:**
```
▢ professional (1) — clean grid, restrained color use
▢ dense (2)        — heavy text-to-whitespace ratio in the upper third
▢ trustworthy (3)  — financial logos in the footer carry weight
▢ dated (4)        — Helvetica + 2010s gradients
▢ rigid (5)        — no playful elements; corporate stiffness
```

Numbers in parens indicate pick order — first card picked is the most dominant signal.

---

### 3. Emotion Grid (Russell circumplex, plain English)

- **Impact**: 5 (Critical) | **Source**: Russell 1980 — *A Circumplex Model of Affect*; Mehrabian & Russell PAD
- **Output type**: Single quadrant pick + 1-2 sentence reading
- **Prompt**: "Where does this design land on valence × arousal — positive+energizing, calm+pleasant, anxious+intense, or boring+flat?"

**The mechanism.** Every emotion can be located on two orthogonal axes: **valence** (unpleasant ↔ pleasant) and **arousal** (low ↔ high). The four quadrants give plain-English emotion territory:

| Quadrant | Valence | Arousal | Feels like |
|----------|---------|---------|-----------|
| **Positive + energizing** | + | + | Excited, delighted, eager, alive |
| **Calm + pleasant** | + | − | Relaxed, premium, confident, serene |
| **Anxious + intense** | − | + | Stressed, alarmed, busy, urgent |
| **Boring + flat** | − | − | Bored, dull, depressed, generic |

**Why quadrant, not score?** Plain English usable for stakeholders. Numerical (-5 to +5) coordinates are more rigorous but lose the "what does this mean" intuition for non-researchers.

**Common misalignments:**
- Premium product reading as boring+flat (under-saturated, no human warmth)
- Productivity tool reading as anxious+intense (too dense, too saturated)
- Calm meditation app reading as boring+flat (no stimulation cues)
- Fintech reading as anxious+intense (red errors everywhere, busy charts)

**Diagnostic questions:**
- Does the quadrant match the category's emotional brief? (Banking: calm+pleasant. Fitness: positive+energizing. News: depends on outlet positioning.)
- If not, what's pulling it into the wrong quadrant?

**Plutchik backup vocabulary.** If circumplex feels too abstract, name the closest Plutchik primary (joy / trust / fear / surprise / sadness / disgust / anger / anticipation) — but the quadrant is the primary output.

---

### 4. Trust Gut-Check

- **Impact**: 5 (Critical) | **Source**: Fogg 2003 — Stanford Web Credibility Project; Prominence-Interpretation Theory
- **Output type**: Tri-state per concrete commitment + reasoning
- **Prompts**:
  - "Would you enter your credit card here?" (commercial trust)
  - "Would you forward this URL to your mom?" (social trust)
  - "Would you trust this with your data?" (data trust)

**The mechanism.** Fogg's research at Stanford (n = 2,684) found **46.1% of credibility judgments were based on "the appeal of the overall visual design"** — beating content by a wide margin. For finance sites, **54.6%**. Visual design dominates trust gut-checks more than people realize.

Prominence-Interpretation Theory: credibility = **Prominence × Interpretation**. If neither is non-zero, no trust judgment forms. Prominence = whether an element is noticed (saliency mechanisms). Interpretation = the judgment assigned to it.

**Why concrete commitments, not abstract "trust"?** "Do you trust this site?" is too abstract — users hedge. "Would you enter your credit card?" is a discrete commitment with cost. The cost forces an honest answer.

**The three commitments in increasing intimacy:**
1. **Credit card test** — commercial trust. Lowest bar; lots of sites pass.
2. **Forward-to-mom test** — social trust. Would you stake your reputation on this?
3. **Data trust** — would you give this your email, your health data, your business?

**Diagnostic process:**
- For each commitment: **yes** / **hesitate** / **no**?
- If no or hesitate: **what specifically** triggered the hesitation? (Stanford prominence question.)
- What signals create trust on this page? (logos, testimonials, clean design, named author, certifications)
- What signals destroy it? (popups, generic stock photos, broken layout, sketchy URLs, fake-urgency banners)

**Output:**
```
Credit card:    hesitate — pricing is hidden behind a "Get a quote" button
Forward to mom: yes      — clean enough that it doesn't look sketchy
Data trust:     no       — no privacy signals; popup demanded email before page rendered
Trust signals: logo placement is professional, testimonials with named companies
Anti-trust signals: pricing opacity, aggressive popup, no "About" link in nav
```

---

### 6. Anxiety / First Objection

- **Impact**: 4 (High) | **Source**: Voss "accusation audit" pattern; Fogg negative prominence; standard usability heuristics
- **Output type**: 3 short answers
- **Prompts**:
  - "What's your first worry?"
  - "What did you expect to see that you didn't?"
  - "Where will users hesitate?"

**The mechanism.** First impressions surface not just attractions but objections. The visceral signals "something is off" before conscious analysis can articulate why. Capturing it now — before the analytical pass starts rationalizing — preserves the unfiltered objection.

**The missing-thing test (Voss-inspired).** "What did you expect to see that you didn't?" is a fast probe for violated category conventions. If a user expected social proof, pricing, or contact info and doesn't see it, that's a goodwill drain (Krug) and a trust-signal absence (Fogg) at the same time.

**Connection:** the missing-thing list often becomes the **fix list** for downstream design work. Before anyone says "what should we add?" — ask the visceral.

**Output:**
```
First worry:     "Is this still being maintained? The footer says 2019."
What's missing:  pricing, social proof, founder names, blog with recent posts
Friction guess:  the "Get Started" button has no signal of cost or commitment level — users will hesitate before clicking
```

---

## Category 3 — Identity Signal (what brand does this look like)

### 7. Brand Archetype

- **Impact**: 4 (High) | **Source**: Mark & Pearson 2002 — *The Hero and the Outlaw* (Jung-derived 12 archetypes)
- **Output type**: Forced pick of 1-2 archetypes from 12
- **Prompt**: "From the 12 brand archetypes, which 1-2 does this design feel like?"

**The mechanism.** Mark & Pearson mapped Jung's archetypes to 12 brand personalities organized on two axes (Stability ↔ Mastery; Belonging ↔ Independence). Each archetype has a recognizable visual / tonal signature — color palette, typography choices, image style, copy tone. The visceral read picks up the archetype before conscious analysis.

**The 12 archetypes** (full visual signatures + digital examples in `references/archetypes.md`):

| Archetype | Visual / tonal signature | Digital examples |
|-----------|--------------------------|------------------|
| **Sage** | Dense type, restrained color, library/serif feel | Bloomberg, NYT, Wikipedia |
| **Hero** | Bold sans-serif, high contrast, action photography | Nike, Stripe, Tesla |
| **Outlaw** | Punk type, off-color, breaking conventions | Liquid Death, Cash App, Vice |
| **Magician** | Dark mode, glow effects, premium minimalism | Apple, Tesla, Linear |
| **Creator** | Bright accents, expressive type, asymmetric layouts | Adobe, Figma, Notion |
| **Ruler** | Heavy weight, gold/dark palette, structured | Mercedes, Microsoft, BlackRock |
| **Caregiver** | Warm pastels, rounded forms, friendly imagery | Headspace, Calm, Volvo |
| **Lover** | Sensual photography, romantic palette, indulgent | Glossier, Aesop, Net-a-Porter |
| **Jester** | Playful illustration, bright color, copy with humor | Mailchimp, Old Spice, Slack |
| **Innocent** | Soft palette, simple shapes, optimistic copy | Coca-Cola, Dove, Airbnb (early) |
| **Explorer** | Adventure imagery, earthy palette, outdoor textures | REI, Patagonia, Strava |
| **Everyman** | Approachable, mid-saturation, no pretense | IKEA, Target, Etsy |

**Why all 12 stay in (not curated to ~7)?** The system is internally consistent — dropping any archetype breaks the discrimination. In practice 4-5 dominate digital products (Sage, Hero, Magician, Creator, Ruler), but having all 12 forces sharper picks when the design genuinely is Lover, Jester, or Caregiver. The full set is more discriminating, not less.

**Misalignment is the diagnostic.** If the brand is positioned as Hero but reads visually as Sage, that misalignment is the headline finding. Ask Step 0 context: what archetype was *intended*? Compare to what was *received*.

**Output:**
```
Primary:   Sage — dense type, restrained color, footnote-style references throughout
Secondary: Ruler — gold accents on the CTA, the "trusted by enterprise" frame
Misalignment: brand positioning copy says "scrappy challenger" — visceral reads Sage+Ruler. The visual identity contradicts the positioning.
```

---

### 9. Category / Mental-Model Placement (Medium)

- **Impact**: 3 (Medium) | **Source**: Mark & Pearson; mere-exposure / familiarity research; Loewy MAYA principle
- **Output type**: Free-form category guess + competitor analogs
- **Prompts**:
  - "Looks like a ___ in [industry]."
  - "What competitor or product does this remind you of?"
  - "Any unintended associations?"

**The mechanism.** The brain places novel inputs into known categories within milliseconds. The category placement carries assumptions about behavior, pricing, quality, trust. Surfacing the *received* category — versus the brand's *stated* category — reveals positioning misalignment.

**The "looks like a ___" prompt.** Force a sentence: "This looks like a [adjective] [category-noun]" — e.g., "this looks like a serious enterprise SaaS," "this looks like a 2010s-era startup," "this looks like a government website."

**The "competitor analog" prompt.** What product does this remind you of? Naming a specific competitor (or three) gives a sharper signal than category. "This reminds me of Notion" tells you something specific about the visual language.

**The "unintended association" prompt.** What does this look like that it shouldn't? A fintech that looks like a Web 1.0 forum. A meditation app that looks like productivity software. A B2B tool that looks like a children's website. These off-category signals are diagnostic.

**Output:**
```
Looks like a:   serious enterprise SaaS in the data infrastructure category
Competitor analog: closest to Snowflake's marketing site, with notes of Datadog
Unintended association: also slightly evokes a 2010s government-contracting page (the dense type + restrained palette tip into bureaucratic territory)
```

**Connection:** this dimension overlaps lightly with #7 (Brand Archetype). The distinction: archetype is the abstract personality; category placement is the concrete competitor reference. Both are useful; the second is more actionable for visual benchmarking.

---

## Halo Prediction (always output, after the 9 dimensions)

This isn't a 10th dimension — it's the **handoff rider** for downstream skills.

### Mechanism
Thorndike 1920 / Tractinsky 2000: visceral judgment silently colors all subsequent ratings. Aesthetic-Usability Effect runs one direction (aesthetics colors usability; not vice versa). Without an explicit halo prediction, the next analytical skill will make biased ratings without the analyst noticing.

### Format
```
HALO PREDICTION

Visceral skewed [positive/negative] on [property].
Expected bias: [overweight / underweight] [usability / professionalism / clarity / trust] in next pass.
Watch for: [specific bias to audit].

Recommended next skill: [designer-audit / dont-make-me-think / bias-audit / design-critique]
```

### Examples

**Halo positive:**
> Visceral skewed positive on "premium" and "trustworthy."
> Expected bias: overweight usability and clarity in next pass — willing to grant charity to friction that wouldn't be granted to an uglier design.
> Watch for: rating the "Get a quote" friction as acceptable when it's actually a pricing-opacity goodwill drain.
> Recommended next skill: dont-make-me-think (will catch the goodwill drain the halo would otherwise mask).

**Halo negative:**
> Visceral skewed negative on "amateur" and "dated."
> Expected bias: underweight usability and trust — likely to rate functional elements as broken when they actually work, because the aesthetic halo runs negative.
> Watch for: dismissing real usability strengths as "still feels off."
> Recommended next skill: designer-audit (separate visual quality from interaction quality before judging).

**Halo mixed:**
> Visceral skewed positive on "professional" but negative on "anxiety-inducing."
> Expected bias: split — will rate trust high but report stress in flow tests.
> Watch for: rationalizing the anxiety as "the user's problem" instead of a design choice.
> Recommended next skill: bias-audit (System 1 attention audit will surface what's creating the anxiety).
