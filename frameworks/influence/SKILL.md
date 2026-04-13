---
name: influence
description: Evaluate any interpersonal influence attempt — a pitch, negotiation, ask, persuasion play, or difficult conversation — against 12 research-backed criteria drawn from Cialdini, Voss, Moesta, Kahneman, Aristotle, and HBS negotiation. Produces a green/yellow/red scorecard ranked by importance. Use when someone asks "how do I get this person to say yes", "evaluate my pitch", "am I approaching this the right way", "help me influence X", "prep me for this conversation", "audit my persuasion strategy", "why isn't this person moving", "how do I get buy-in from Y", or any request to assess, plan, or improve an interpersonal influence attempt. Also use when preparing for negotiations, investor pitches, hiring conversations, stakeholder alignment, or any 1:1 where the outcome depends on changing someone's mind.
---

# Influence Skill

Evaluate any interpersonal influence attempt against 12 criteria drawn from Bob Moesta (JTBD/Demand-Side Sales), Robert Cialdini (Influence + Pre-Suasion), Chris Voss (Never Split the Difference), Daniel Kahneman (System 1/2), Aristotle (Rhetoric), BJ Fogg (B=MAP), Miller & Rollnick (Motivational Interviewing), Dale Carnegie, Cohen & Bradford (Influence Without Authority), and HBS Negotiation. Produces a green/yellow/red scorecard ranked by importance.

## When to use this skill

- Evaluating an influence strategy before executing it
- Preparing for a negotiation, pitch, or difficult conversation
- Diagnosing why someone isn't moving — investor, hire, customer, partner, board member
- Auditing a persuasion attempt after the fact (post-mortem)
- Planning how to get buy-in from a specific person or stakeholder
- Any "how do I get this person to say yes?" or "why isn't this working?" question

## The 12 criteria

For full details on each criterion, read:
```
/references/criteria.md
```

**Always read `references/criteria.md` before producing a detailed evaluation.**

## Impact tier summary

**Critical (5/5)** — getting these wrong makes everything else irrelevant:
- Demand-Side Diagnosis, Tactical Empathy, Resistance Dissolution

**High (4/5)** — strong pillars that multiply effectiveness:
- Pre-Suasion & Framing, Calibrated Questions, Reciprocity Architecture, Credibility Positioning, Force Field Mapping

**Medium (3/5)** — meaningful refinements for skilled operators:
- Identity & Unity Alignment, Commitment Escalation, Information Control, Emotional Regulation

## Category structure

**Preparation** — what you do before the conversation:
- Demand-Side Diagnosis, Pre-Suasion & Framing, Force Field Mapping

**Connection** — building the relationship foundation:
- Tactical Empathy, Credibility Positioning, Identity & Unity Alignment

**Execution** — the craft of the conversation itself:
- Calibrated Questions, Reciprocity Architecture, Resistance Dissolution, Commitment Escalation

**Framing & Self-Management** — how you position the message and manage yourself:
- Information Control, Emotional Regulation

## Counterpart style modifier

Before evaluating, identify the counterpart's dominant style (from Voss). Same criteria, different deployment:

| Style | Profile | Adjust for |
|-------|---------|------------|
| **Analyst** | Methodical, data-driven, hates being rushed. Values accuracy over speed. Silence means thinking, not agreement. | Lead with Credibility (#7) and Information Control (#11). Give them time. Don't mistake silence for buy-in. |
| **Accommodator** | Relationship-first, optimistic, avoids conflict. "Yes" often means "I hear you," not commitment. | Lead with Tactical Empathy (#2) and Identity/Unity (#9). Pin down specifics — their agreeableness masks uncommitted yeses. |
| **Assertive** | Direct, competitive, values efficiency. Wants to be heard before they'll listen. | Let them talk first. Use Mirroring and Labels until they say "That's right." Then — and only then — present your case. Time spent listening = credibility earned. |

## How to evaluate an influence attempt

Quick checklist — check Critical criteria first:

1. **Demand-Side Diagnosis** — Can you describe their struggling moment, their hiring criteria (functional/emotional/social), and what they're "firing" by saying yes to you?
2. **Tactical Empathy** — Have you labeled their emotional state out loud? Did you get a "That's right"?
3. **Resistance Dissolution** — Have you run an accusation audit? Identified and addressed the specific anxiety and habit blocking action?

Then High-tier:
4. **Pre-Suasion** — What have you done to prime them before the ask? Loss frame or gain frame?
5. **Calibrated Questions** — Are you using "how/what" questions to give them the illusion of control?
6. **Reciprocity** — What have you given before asking? Do you know their currencies?
7. **Credibility** — Have you demonstrated expertise through pattern recognition, not claims?
8. **Force Field** — Which of the four forces is the binding constraint? Are you targeting it?

Then Medium:
9-12. Identity alignment, commitment sequencing, information timing, emotional state management.

## Scorecard output (default for evaluation)

**Always produce a visual scorecard when evaluating.** Create a self-contained HTML file.

### Scorecard design spec

**Layout**: Single-column table, one row per criterion, sorted by impact (Critical first). Within each tier, sort by criterion number.

**Columns**:
1. **Impact** — tier badge (Critical/High/Medium)
2. **Criterion** — name + category badge
3. **Rating** — green (good) / yellow (moderate) / red (poor)
4. **Assessment** — 1-line explanation of why this influence attempt gets that rating

**Rating logic**:
- 🟢 **Green** = the influence attempt performs well on this criterion
- 🟡 **Yellow** = partially addressed, some concerns, or insufficient evidence
- 🔴 **Red** = missing, poorly executed, or shows a significant blind spot

**Summary section at top**:
- Influence attempt name + overall grade (A/B/C/D/F)
- Counterpart style: [Analyst / Accommodator / Assertive / Unknown]
- Green/yellow/red count (e.g., "8 green · 3 yellow · 1 red")
- Top 3 strengths (highest-impact greens)
- Top 3 risks (highest-impact reds/yellows)
- Recommendation: the single most impactful thing to change

**Weighted scoring**:
- Critical: 5 pts green, 2.5 yellow, 0 red
- High: 4 pts green, 2 yellow, 0 red
- Medium: 3 pts green, 1.5 yellow, 0 red

**Grade thresholds** (% of max possible):
- A = 85%+, B = 70-84%, C = 55-69%, D = 40-54%, F = below 40%

**Color palette**:
- Green: #0F6E56 (bg #E1F5EE)
- Yellow/Amber: #854F0B (bg #FAEEDA)
- Red: #A32D2D (bg #FCEBEB)
- Category badges: Preparation #534AB7/#EEEDFE, Connection #185FA5/#E6F1FB, Execution #993C1D/#FAECE7, Framing #0F6E56/#E1F5EE

**File output**: Save as `{situation-name}-influence-scorecard.html`

### Multi-attempt comparison

When comparing 2+ influence strategies, produce a comparison scorecard with one column per strategy, same row structure, color dots per strategy, and summary grades at bottom.

## Key sources

- Bob Moesta & Chris Spiek — *Demand-Side Sales 101*, *Learning to Build*, JTBD/Four Forces
- Robert Cialdini — *Influence* (7 principles), *Pre-Suasion* (privileged moments, priming)
- Chris Voss — *Never Split the Difference* (tactical empathy, calibrated questions, accusation audit, Ackerman method)
- Daniel Kahneman — *Thinking, Fast and Slow* (System 1/2, framing effects, loss aversion)
- Aristotle — *Rhetoric* (ethos/pathos/logos, phronesis/arete/eunoia)
- BJ Fogg — *Tiny Habits*, B=MAP behavior model
- Miller & Rollnick — *Motivational Interviewing* (OARS, change talk, rolling with resistance)
- Dale Carnegie — *How to Win Friends and Influence People*
- Cohen & Bradford — *Influence Without Authority* (currencies of exchange)
- Robert Greene — *The 48 Laws of Power* (strategic patience, narrative control)
- HBS Negotiation — BATNA/ZOPA, anchoring, information asymmetry, value creation
