---
name: spark
description: Generate, critique, and rank founder-grade startup ideas. Runs five founder lenses (Paul Graham, Sam Altman, Michael Seibel, Peter Thiel, Bob Moesta) to produce 5–15 candidate ideas, then scores each against 12 criteria across Demand Reality, Founder Edge, Strategic Insight, Wedge & Entry, and Survivability. Produces a ranked comparison scorecard with weighted grades. Use when starting a new venture, exploring a problem space, evaluating a list of ideas, deciding what to build next, pressure-testing your top idea against alternatives, or asking "what should I build", "ideate this", "give me startup ideas", "help me brainstorm", "rank these ideas", "is this idea any good", "evaluate my idea", "spark", "generate ideas", "find me an idea worth building".
---

# /spark

Generate divergent founder-grade ideas through five named founder lenses, then converge by scoring each against 12 criteria. Output: a ranked comparison scorecard with the strongest idea recommended for next-step exploration.

## When to use this skill

- Starting a new venture and exploring what to build
- Stuck on a problem space and want multiple angles before committing
- Evaluating a list of existing ideas against a debuggable framework
- Pressure-testing your favorite idea against alternatives you might not have generated
- Pre-mortem: identifying which of your candidates is actually strongest before committing capital, time, or identity

## How /spark works

Two frameworks operating in sequence:

1. **Generation** — five founder lenses each produce candidate ideas (divergent)
2. **Scoring** — each candidate is scored against 12 criteria (convergent)

Output is a comparison scorecard ranking ideas by weighted score, with one recommended idea to take forward.

---

## Generation framework — 5 founder lenses

Each lens generates ideas through a different mental model. Default: run all five.

| Lens | Generative prompt | What it produces |
|------|-------------------|------------------|
| **PG mode** (Paul Graham) | "What do you wish existed but doesn't? What task is tedious or broken that someone should fix?" | Organic / lived-problem ideas |
| **Altman mode** (Sam Altman) | "What small market is growing fast where a 10x improvement is available? Where could you become a monopoly?" | Monopoly-trajectory ideas |
| **Seibel mode** (Michael Seibel) | "What problem makes 10 specific people so frustrated they'd pay tomorrow? Who is drowning in this pain?" | Drowning-in-demand ideas |
| **Thiel mode** (Peter Thiel) | "What truth do you believe that few people agree with? What would you build if you were right about it?" | Contrarian / secret-driven ideas |
| **Moesta mode** (Bob Moesta) | "What thing is someone trying to fire from their life today? What would they hire instead, and why?" | JTBD / switching-equation ideas |

### Generation depth tiers

| Tier | Ideas per lens | Total candidates | Use when |
|------|----------------|------------------|----------|
| **Quick** | 1 | 5 | Initial scan; you want a fast read on the space |
| **Standard** (default) | 2 | 10 | Most use cases — enough variety, not overwhelming |
| **Deep** | 3 | 15 | Strategy work; you want the full divergent space before converging |

**Single-lens mode** — invoke with "spark in Thiel mode" or similar to generate 3–5 ideas through one lens only. Useful for follow-up rounds when one lens produced the strongest first batch.

---

## Scoring framework — 12 criteria

For full details on each criterion, read:
```
references/criteria.md
```

**Always read `references/criteria.md` before producing a detailed evaluation.**

### Impact tier summary

**Critical (5/5)** — getting these wrong makes everything else irrelevant:
- 1. Desperate-Demand Concentration
- 2. Painkiller Severity
- 3. Founder-Idea Fit

**High (4/5)** — strong pillars that multiply effectiveness:
- 4. Contrarian Insight
- 5. Monopoly Trajectory
- 6. Why-Now Wave
- 7. Wedge Specificity

**Medium (3/5)** — meaningful refinements:
- 8. Market Trajectory
- 9. Schlep / Tarpit Filter
- 10. Falsifiable Test
- 11. Mission Durability

**Low (2/5)** — sanity checks:
- 12. Adversarial Survival

### Category structure

**Demand Reality** — does someone actually want this?
- 1. Desperate-Demand Concentration · 2. Painkiller Severity

**Founder Edge** — do you have an unfair advantage?
- 3. Founder-Idea Fit · 11. Mission Durability

**Strategic Insight** — why is this idea different?
- 4. Contrarian Insight · 5. Monopoly Trajectory · 6. Why-Now Wave

**Wedge & Entry** — can you actually get in?
- 7. Wedge Specificity · 8. Market Trajectory · 9. Schlep / Tarpit Filter

**Survivability** — will this last?
- 10. Falsifiable Test · 12. Adversarial Survival

---

## Idea Origin modifier

Before scoring, identify each candidate's origin. Same criteria, different deployment — strong evidence on one criterion can compensate for weakness elsewhere depending on origin:

| Origin | Profile | What's easy to verify | Where to scrutinize harder |
|--------|---------|----------------------|---------------------------|
| **Organic / lived problem** | Founder personally has the pain | #3 Founder-Idea Fit, #2 Painkiller Severity | #6 Why-Now Wave (lived pain may be old pain) |
| **Tech-pull discovery** | New tech makes this newly possible | #6 Why-Now Wave, #4 Contrarian Insight | #3 Founder-Idea Fit, #1 Demand Concentration |
| **Customer signal** | Same complaint heard repeatedly | #1 Desperate-Demand Concentration | #9 Schlep / Tarpit Filter (you're rarely the first to hear it) |
| **Trend extension** ("X for Y") | Pattern matching on a hot category | None — start skeptical | All 12, especially #4 and #9 |
| **Inversion / contrarian** | "What truth do few agree with?" | #4 Contrarian Insight | #12 Adversarial Survival (the contrarian thesis must hold) |

---

## How to run /spark

### Phase 1 — Confidence gate

Before generating, score the input prompt:
- Is the problem space clear? (1–5)
- Is there a target user, constraint, or domain? (1–5)
- Is there a "why now" hint? (1–5)

If composite < 9/15, ask 1–3 clarifying questions before generating. Don't produce slop on vague triggers.

### Phase 2 — Generate (divergent)

Run all five lenses (or selected subset). Each lens produces N ideas at the chosen depth tier. Format each candidate:

```
**[One-line pitch]**
- **Wedge**: [specific user + acute pain]
- **Why now**: [specific shift]
- **Lens**: [PG / Altman / Seibel / Thiel / Moesta]
- **Origin**: [organic / tech-pull / customer-signal / trend-extension / inversion]
```

Ideas should be specific enough to score. "AI for healthcare" is not a candidate; "AI scribe for outpatient psychiatrists who type during sessions" is.

### Phase 3 — Score (convergent)

Score each candidate against the 12 criteria. Apply the Idea Origin modifier — weights don't change, but use the modifier to flag when a criterion is unusually strong/weak given origin.

Ratings:
- 🟢 **Green** — strong evidence the idea performs well on this criterion
- 🟡 **Yellow** — partially addressed or insufficient evidence
- 🔴 **Red** — poorly addressed, missing, or significant blind spot

For each rating, give a one-line assessment grounded in specifics from the candidate.

### Phase 4 — Rank + recommend

Compute weighted scores. Surface top 3 with rationale. Single recommendation: which idea to take forward.

---

## Scorecard output

**Always produce a visual scorecard.** Self-contained HTML.

### Comparison scorecard (default for multi-idea evaluation)

**Layout**: Multi-column comparison table.

**Rows**: 12 criteria sorted by impact (Critical → High → Medium → Low). Within tier, sorted by criterion number.

**Columns**:
1. **Impact** — tier badge (Critical/High/Medium/Low)
2. **Criterion** — name + category badge
3. **Idea 1** — color-coded cell (🟢/🟡/🔴) with optional 1-line note
4. **Idea 2** — same
5. … (one column per candidate, up to 15)

**Top section** (per-idea summary card):
- Idea name + one-line pitch
- Composite weighted score → letter grade (A/B/C/D/F)
- G/Y/R count
- Origin tag + Lens tag
- Top 2 strengths (highest-impact greens)
- Top 2 risks (highest-impact reds/yellows)

**Bottom recommendation**:
- Ranked list (1st–Nth by composite score)
- Single recommendation: "Take #1 forward" with one-paragraph rationale
- Top adversarial weakness across the field

### Single-idea scorecard

When evaluating one idea (no comparison), use the influence-skill row format: one row per criterion with Impact / Criterion / Rating / Assessment columns.

### Weighted scoring

- Critical (5): green = 5, yellow = 2.5, red = 0
- High (4): green = 4, yellow = 2, red = 0
- Medium (3): green = 3, yellow = 1.5, red = 0
- Low (2): green = 2, yellow = 1, red = 0

**Max possible** = (5×3) + (4×4) + (3×4) + (2×1) = 15 + 16 + 12 + 2 = **45 pts**

**Grade thresholds** (% of 45):
- A = 85%+ (≥38)
- B = 70–84% (32–37)
- C = 55–69% (25–31)
- D = 40–54% (18–24)
- F = below 40% (<18)

### Color palette

- Green: `#0F6E56` (bg `#E1F5EE`)
- Yellow/Amber: `#854F0B` (bg `#FAEEDA`)
- Red: `#A32D2D` (bg `#FCEBEB`)
- Category badges:
  - Demand Reality: `#A32D2D` / `#FCEBEB`
  - Founder Edge: `#534AB7` / `#EEEDFE`
  - Strategic Insight: `#185FA5` / `#E6F1FB`
  - Wedge & Entry: `#993C1D` / `#FAECE7`
  - Survivability: `#0F6E56` / `#E1F5EE`

**File output**: Save as `outputs/spark/{topic-slug}-spark-{YYYYMMDD}.html`

---

## Anti-patterns (don't do these)

1. **Don't generate without the confidence gate.** Vague prompts produce vague ideas.
2. **Don't soften the scoring.** A red is a red. Yellow is for genuine ambiguity, not politeness.
3. **Don't ignore the Origin modifier.** Same criteria score differently depending on where the idea came from.
4. **Don't recommend the highest-grade idea blindly.** The recommendation should weigh letter grade + the founder's specific situation. Sometimes the B-grade idea with strong Founder-Idea Fit beats the A-grade idea the founder doesn't connect to.
5. **Don't pad to 12 ideas.** If 6 lenses produced redundant candidates, output 6. Quality over count.

---

## Connection to other skills

- **Take the winning idea forward** — pair `/spark` with:
  - `customer-problem-hypothesis` to formalize the problem statement
  - `positioning-canvas` to draft early positioning
  - `customer-insight-synthesis` if customer data already exists
- **Pressure-test before committing** — pair with:
  - `decision-framework` for the actual go/no-go call
  - `llm-council` for adversarial review of the #1 idea
  - `personal/munger-philosophy` for inversion-heavy critique
- **Generate from existing customer signal** — if you have customer interview data, run `customer-insight-synthesis` first to extract jobs and forces, then feed insights into `/spark` Moesta mode

---

## Sources

- Paul Graham — *How to Get Startup Ideas*, *Organic Startup Ideas*, *Schlep Blindness* (paulgraham.com)
- Sam Altman — *Startup Playbook* (playbook.samaltman.com), *How to Be Successful*
- Peter Thiel — *Zero to One* (the secret, monopoly, last-mover, four monopoly traits)
- Michael Seibel + Dalton Caldwell — drowning in demand, tarpit ideas (YC Library)
- Marc Andreessen — *The Only Thing That Matters* (pmarchive.com)
- Andy Rachleff — value hypothesis vs. growth hypothesis (PMF coining)
- Bob Moesta + Chris Spiek — *Demand-Side Sales 101*, Four Forces of Progress (KB: `domains/product.md`)
- Clayton Christensen — *Competing Against Luck*, JTBD theory of innovation
- Chris Dixon — *Founder/Market Fit* (cdixon.org)
- Charlie Munger — inversion (KB: `skills/personal/munger-philosophy`)
- Eric Ries — *The Lean Startup* (falsifiability, build-measure-learn)
- CB Insights — *Why Startups Fail* (43% no PMF, 29% bad timing)
