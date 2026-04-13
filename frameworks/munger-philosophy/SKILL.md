---
name: munger-philosophy
description: Evaluate any decision, strategy, investment thesis, or business against Charlie Munger's philosophy — 13 criteria across thinking quality, psychology, business analysis, and decision process. Use when someone asks "would Munger approve of this?", "evaluate this decision through Munger's lens", "apply Munger's mental models", "check this against Munger's principles", "is this good thinking?", "audit my reasoning", "what would Munger say about this?", or any request to stress-test a decision, investment, strategy, or business using Munger's frameworks. Also use when discussing mental models, cognitive biases, circle of competence, inversion thinking, or multidisciplinary analysis.
---

# Munger Philosophy Skill

Evaluate any decision, strategy, investment, or business against Charlie Munger's 13 principles — drawn from Poor Charlie's Almanack, the Psychology of Human Misjudgment, and decades of speeches and shareholder letters. Produces a green/yellow/red scorecard ranked by importance.

## When to use this skill

- Evaluating a business decision, investment thesis, or strategy
- Stress-testing your own reasoning or someone else's
- Checking for cognitive biases in a plan or argument
- Assessing whether a business is simple enough to understand
- Reviewing decision-making process quality
- Any "would Munger approve?" or "apply mental models" request

## The 13 criteria

For full details on each criterion, read:
```
/references/criteria.md
```

**Always read `references/criteria.md` before producing a detailed evaluation.**

## Impact tier summary

**Critical (5/5)** — the principles Munger returned to most; getting these wrong invalidates everything else:
- Inversion thinking, Bias awareness (25 tendencies), Circle of competence

**High (4/5)** — strong pillars of Munger's system:
- Multidisciplinary models, Incentive analysis, Emotional discipline, Margin of safety

**Medium (3/5)** — meaningful supporting principles:
- Second-order thinking, Lollapalooza detection, Simplicity, Opportunity cost thinking

**Low (2/5)** — refinement-level:
- Social proof resistance, Skin in the game

## How to evaluate a decision

Quick checklist — check Critical criteria first:

1. **Inversion** — Have you asked "what would make this fail?" and worked backward? Are you prioritizing error-avoidance over brilliance?
2. **Bias awareness** — Which of the 25 tendencies might be distorting your judgment? Are you arguing from ideology or from evidence?
3. **Circle of competence** — Are you operating within what you genuinely understand? Can you honestly say "I don't know" about the parts you don't?

Then check High-tier criteria: Are you drawing on multiple disciplines (#1)? Are incentives aligned (#6)? Are you being rational under pressure (#8)? Is there a margin of safety (#11)?

Then Medium: What are the second-order effects? Is there a lollapalooza forming? Is this simple enough to understand? What's the opportunity cost?

## Scorecard output (default for evaluation)

**Always produce a visual scorecard when evaluating.** Create a self-contained HTML file.

### Scorecard design spec

**Layout**: Single-column table, one row per criterion, sorted by impact (Critical first). Within each tier, sort by criterion number.

**Columns**:
1. **Impact** — tier badge (Critical/High/Medium/Low)
2. **Criterion** — name + category badge
3. **Rating** — green (good) / yellow (moderate) / red (poor)
4. **Assessment** — 1-line explanation of why this input gets that rating

**Rating logic**:
- 🟢 **Green** = the decision/strategy aligns well with this Munger principle
- 🟡 **Yellow** = partially aligned, some concerns, or insufficient evidence
- 🔴 **Red** = violates this principle or shows a significant blind spot

**Summary section at top**:
- Decision/strategy name + overall Munger grade (A/B/C/D/F)
- Green/yellow/red count
- Top 3 strengths (highest-impact greens)
- Top 3 risks (highest-impact reds/yellows)
- Munger verdict: what Munger would likely say about this in one sentence

**Weighted scoring**:
- Critical: 5 pts green, 2.5 yellow, 0 red
- High: 4 pts green, 2 yellow, 0 red
- Medium: 3 pts green, 1.5 yellow, 0 red
- Low: 2 pts green, 1 yellow, 0 red

**Grade thresholds** (% of max possible):
- A = 85%+, B = 70-84%, C = 55-69%, D = 40-54%, F = below 40%

**Color palette**:
- Green: #0F6E56 (bg #E1F5EE)
- Yellow/Amber: #854F0B (bg #FAEEDA)
- Red: #A32D2D (bg #FCEBEB)
- Category: Thinking #534AB7/#EEEDFE, Psychology #993C1D/#FAECE7, Business #185FA5/#E6F1FB, Decision #0F6E56/#E1F5EE

**File output**: Save as `{decision-name}-munger-scorecard.html`

### Multi-decision comparison

When comparing 2+ decisions or strategies, produce a comparison scorecard with one column per option, same row structure, color dots per option, and summary grades at bottom.

## Key sources

- Poor Charlie's Almanack (Stripe Press edition)
- The Psychology of Human Misjudgment (1995 speech, updated 2005)
- Berkshire Hathaway annual meeting transcripts
- USC Business School commencement speech (2007)
- "A Lesson on Elementary Worldly Wisdom" (1994)
- Wesco Financial shareholder letters
- fs.blog/charlie-munger and 25iq.com collections
