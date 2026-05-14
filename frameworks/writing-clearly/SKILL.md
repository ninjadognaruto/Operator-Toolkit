---
name: writing-clearly
description: Audit and rewrite any draft against 14 research-backed criteria for clear writing — synthesized from Strunk & White, Zinsser, Pinker, Gowers, Orwell, Hemingway, Paul Graham, BBC, Gopen & Swan, plus McKinsey (Pyramid / SCQA / MECE), Amazon (six-pager), Stripe (precision), and Google. Anchored in Rohit's CLAUDE.md voice. Produces a green/yellow/red scorecard with a weighted grade, then rewrites the worst sections — every fix cites its source rule. Four optional modes load on demand — Memo (Amazon), Consulting (McKinsey), Exec Comms (Stripe), Decision Doc (Rohit). Use when reviewing any draft (email, memo, board update, decision doc, exec comms, investor note, blog post, internal doc), or when the user says "tighten this", "make this clearer", "audit my writing", "rewrite this", "kill the slop", "is this any good", "edit this", or pastes prose for feedback.
---

# Writing Clearly Skill

Audit and rewrite any draft against 14 criteria. Score green/yellow/red on each, weighted by impact, produce a grade, then rewrite the worst sections — with every fix citing its source rule.

## When to use this skill

- Reviewing a draft of any kind: email, memo, board update, decision doc, investor note, blog post, internal doc, customer-facing copy
- "Tighten this", "make this clearer", "audit my writing", "rewrite this"
- Pre-shipping check on high-stakes writing (board, exec, investor, customer)
- After a first draft, before sending
- Any time prose needs to be sharper, shorter, or more direct
- Diagnosing why a draft isn't landing

## How this skill is built

The skill has two layers:

1. **Core (always on)** — 14 universal criteria that apply to any writing, anywhere. These are non-negotiable. Anchored in Rohit's CLAUDE.md "Brand Voice" rules, with cross-source synthesis from canonical writing guides and company memo conventions.
2. **Mode (user picks one, optional)** — adds structural requirements for a specific shape of document. Modes do not blend; the user invokes one deliberately. Mode references load only when invoked.

## The 14 criteria

For full details on each criterion, read:
```
references/criteria.md
```

**Always read `references/criteria.md` before producing a detailed evaluation.**

### Impact tier summary

**Critical (5/5)** — getting these wrong destroys the writing on its own:
1. Answer-first ordering
2. Curse-of-knowledge defeat
9. Concrete over abstract
10. Omit needless words (includes AI-slop pattern detection)

**High (4/5)** — strong pillars; multiplies clarity:
3. Skim-readable (5-second gist test)
4. Visible spine + short paragraphs
6. Active voice with named agent
7. Sentence economy + rhythm
11. No buzzwords or jargon
12. No hedges or weak qualifiers
13. No filler or throat-clearing

**Medium (3/5)** — refinement-level for skilled writers:
5. Parallel structure
8. Stress position discipline
14. Confidence without arrogance

### Category structure

**Setup** — what you do before the first sentence:
- Answer-first ordering (#1), Curse-of-knowledge defeat (#2)

**Structure** — how the doc is organized:
- Skim-readable (#3), Visible spine + short paragraphs (#4), Parallel structure (#5)

**Sentence** — how each line reads:
- Active voice (#6), Sentence economy + rhythm (#7), Stress position (#8)

**Word** — what to put in and what to cut:
- Concrete over abstract (#9), Omit needless words (#10), No buzzwords (#11), No hedges (#12)

**Voice** — how it sounds:
- No filler or throat-clearing (#13), Confidence without arrogance (#14)

## Mode modifier (optional, user picks one)

Same 14 core criteria apply universally. Mode adds a *structural layer* loaded only when invoked.

| Mode | When to use | Reference |
|------|-------------|-----------|
| **Default (no mode)** | Email, Slack, doc, anything else | core 14 only |
| **Memo Mode** (Amazon) | New product, project kickoff, six-pagers, deep meetings | `references/modes/memo-mode.md` |
| **Consulting Mode** (McKinsey) | Strategy doc, exec summary, client deliverable, board pre-read | `references/modes/consulting-mode.md` |
| **Exec Comms Mode** (Stripe) | Board update, investor memo, technical decision doc | `references/modes/exec-comms-mode.md` |
| **Decision Doc Mode** (Rohit) | Internal call you're documenting, post-meeting memo | `references/modes/decision-doc-mode.md` |

When a mode is invoked, read its reference file first, then apply both the core 14 and the mode-specific structural requirements. Mode references load lazily — never read all four.

## Workflow

1. **Identify the mode.** Ask the user, or infer from context (board update → Exec Comms; product spec → Memo; strategy review → Consulting; post-decision memo → Decision Doc). Default if unclear.
2. **Read the draft.** Note its length, audience, intent.
3. **Score against the 14 core criteria.** Use the diagnostics in `references/criteria.md`. Each criterion gets green / yellow / red with a one-line assessment and a quoted example from the draft (paraphrasing isn't enough — show the writer their own words).
4. **If a mode is active, score against mode-specific requirements.** Add to the scorecard.
5. **Compute the grade.** Weighted by impact tier. Formula in `references/scoring-spec.md`.
6. **Rewrite the worst sections.** Pick the 2–3 lowest-scoring criteria. Rewrite the offending passages. For every change, cite the source rule (e.g. "Strunk Rule 17: Omit needless words" or "your CLAUDE.md: no filler openers").
7. **Output.** Scorecard + diagnosis + rewrites.

## Output format

Always include all four sections:

### 1. Header

- Mode (Default / Memo / Consulting / Exec Comms / Decision Doc)
- Word count, sentence count, average sentence length
- Grade: A / B / C / D / F (from weighted score)
- Green / Yellow / Red counts (e.g. "8 green · 4 yellow · 2 red")

### 2. Scorecard

Single-column table, sorted by impact (Critical first), then by criterion number:

| Impact | # | Criterion | Rating | Assessment |
|--------|---|-----------|--------|------------|
| Critical | 1 | Answer-first ordering | 🟢 / 🟡 / 🔴 | One-line verdict with quoted evidence |

### 3. Top 3 strengths + Top 3 risks

- **Strengths:** the highest-impact greens
- **Risks:** the highest-impact reds and yellows

### 4. Rewrites

For each of the 2–3 worst-scoring criteria, show:

- **Before** (the passage from the draft, quoted)
- **After** (the rewrite)
- **Why** (the rule cited — Strunk / Pinker / Zinsser / your CLAUDE.md / etc.)

End with a one-line recommendation: ship as-is, ship after these fixes, or rework before shipping.

## Scoring + autoresearch chain handoff

The skill produces a single composite integer score (0–100) — higher is better. Formula in `references/scoring-spec.md`.

For high-stakes drafts (board, exec, investor, customer-facing), chain into autoresearch:

```
draft.md
  → writing-clearly (audit + scorecard + first-pass rewrite)
  → /autoresearch:autoresearch (mechanical: drive composite score above threshold)
       Goal:      Drive writing-clearly score above 85 on draft.md
       Scope:     draft.md
       Metric:    bash skills/personal/writing-clearly/scripts/score.sh draft.md
       Direction: rewrite the lowest-scoring criterion each iteration
       Iterations: 15
  → /autoresearch:reason (subjective: adversarial polish on voice + structure)
       Task:   Rewrite this draft to maximize writing-clearly green ratings on subjective criteria (#1, #2, #3, #14)
       Domain: content
       Mode:   convergent
```

For Slack messages, emails, quick docs: stop after step 1.

The mechanical-only score script is at `scripts/score.sh`. It outputs a single integer suitable as an autoresearch verify command.

## Color palette (for HTML scorecard output)

- 🟢 Green: `#0F6E56` text on `#E1F5EE` background — passes the criterion
- 🟡 Yellow: `#854F0B` text on `#FAEEDA` background — partial / mixed
- 🔴 Red: `#A32D2D` text on `#FCEBEB` background — fails the criterion

## Voice guarantee

This skill never softens. If something is broken, it says so. If something is working, it says that too. The goal is clarity — for the reader of the draft, and for the writer revising it. No filler. No throat-clearing. No "great work overall, but consider..." Apply the criteria to the skill's own output.
