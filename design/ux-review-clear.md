# UX Review C.L.E.A.R.

Run a focused UX + copy review. No research. No PRD. Look at what's in front of you, apply the C.L.E.A.R. framework rigorously, and produce a specific, ranked list of what to fix and why.

The workflow has two human checkpoints. Do not skip them.

**After completing each step, re-read the next step before proceeding.** The workflow spec is the source of truth.

---

## Workflow Overview

```
[Checkpoint 1] Context gathering
       ↓
[Step 2a + 2b] Copy analysis + UX analysis (parallel)
       ↓
[Checkpoint 2] Consolidated report in chat → user reviews
       ↓
[Step 3] Save HTML report → present to user
```

---

## Checkpoint 1 — Context Gathering

Before doing anything, ask the user for the following in a single message:

1. **Screenshots or video** of the product flow. Ask them to share the file(s) directly.
2. **Focus area** (optional): Is there a specific screen or step to prioritize? e.g. "the checkout screen", "onboarding step 2", "the empty state after signup"
3. **Goal**: What are they trying to improve or understand? e.g. "users aren't converting", "this feels confusing", "I want a copy audit before launch", "general review"

Wait for the user's response before proceeding.

---

## Step 2 — Copy + UX Analysis (parallel)

Run both analyses simultaneously using the same input.

**Analysis 2a — Copy**: Read and follow `skills/copy-analyzer/SKILL.md`.
- Input: the screenshots/video, focus area, goal
- Output: structured copy opportunity list — by screen, by lens, with impact ratings

**Analysis 2b — UX**: Read and follow `skills/ux-analyzer/SKILL.md`.
- Input: the screenshots/video, focus area, goal
- Output: structured UX opportunity list — by lens (Layout, Emphasis, Accessibility, Reward) with impact ratings

Complete both fully before moving to Checkpoint 2.

---

## Checkpoint 2 — Consolidated Opportunity Report

Merge the outputs from 2a and 2b into a single ranked view. Present the following to the user in chat — keep it tight:

```
## [Product/flow name] — UX + Copy Review — [Date]

**Goal:** [One sentence]

---

### Overall Health

| Pillar        | Status       | Key finding |
|---------------|--------------|-------------|
| Copy          | 🔴/🟡/🟢   | [One sentence — the most important issue] |
| Layout        | 🔴/🟡/🟢   | [One sentence] |
| Emphasis      | 🔴/🟡/🟢   | [One sentence] |
| Accessibility | 🔴/🟡/🟢   | [One sentence] |
| Reward        | 🔴/🟡/🟢   | [One sentence] |

🔴 = critical issues likely hurting the experience · 🟡 = meaningful gaps but functional · 🟢 = working well

---

### Top 10 Opportunities

| # | Opportunity | Pillar | Why it matters | Impact |
|---|-------------|--------|----------------|--------|
| 1 | ... | Copy / Layout / Emphasis / Accessibility / Reward | ... | High |
...
```

After presenting, ask:
> "Does this match what you're seeing? Anything to add, reprioritize, or dig deeper on before I generate the full report?"

Wait for their response. If they want changes or more focus on a specific area, adjust and re-present. Once confirmed, proceed to Step 3.

---

## Step 3 — HTML Report

Save the full detailed report as a local HTML file.

**Output path:**
```
/sessions/[session-id]/mnt/Claude Working Area/ux-review-clear/[product-name]-ux-review-[YYYY-MM-DD].html
```

Create the directory first if it doesn't exist:
```bash
mkdir -p "/sessions/[session-id]/mnt/Claude Working Area/ux-review-clear"
```

**Styling:**
- White background, clean sans-serif (system-ui or Inter), max-width 900px, centered
- Proper heading hierarchy
- Traffic light badges for each pillar (colored dot + label)
- Impact badges: High = red pill, Medium = amber, Low = gray
- All opportunity tables rendered as HTML tables
- Sticky top navigation linking to each section

**Report structure:**

```html
# [Product/flow name] — UX + Copy Review
## [Date] · Focus: [Focus area or "Full flow"] · Goal: [Goal]

## Summary
[2-3 sentences max. The most important things the user should know. Lead with the biggest problem.]

## Overall Health
[Traffic light table — one row per pillar, status + key finding]

## Top Opportunities
[Top 10 ranked list with pillar, why it matters, impact]

---

## Copy Analysis
[Full output from Step 2a — all screens, all lenses, all opportunities]

## UX Analysis

### Layout
[Full Layout table from Step 2b]

### Emphasis
[Full Emphasis table from Step 2b]

### Accessibility
[Full Accessibility table from Step 2b]

### Reward
[Full Reward table from Step 2b]
```

Present the file to the user with a `computer://` link immediately after saving.

---

## General Principles

**Be specific.** "The layout feels cluttered" is not an observation. "The three action buttons (Edit, Share, Delete) are identical in size, color, and placement — no primary action is defined, so the user must decide" is.

**Be opinionated.** Rank the opportunities. Say what matters most and why. Don't present a flat list of equally-weighted items.

**Don't manufacture problems.** If a pillar is genuinely working well, say so and move on. A green rating is a useful signal too.

**The report is the deliverable.** It should be clear and specific enough that a designer can open it and start executing without asking follow-up questions.

---

## Sub-skill References

This agent delegates the detailed analysis work to two standalone skills. Read each skill file in full before executing its analysis.

**Copy Analysis** → `skills/copy-analyzer/SKILL.md`
Covers the C pillar of C.L.E.A.R.: six copy lenses (WIIFM, Reassurance, Clarity, Brevity, Human Voice, Iconic Copy), output format, and scoring.

**UX Analysis** → `skills/ux-analyzer/SKILL.md`
Covers the L, E, A, R pillars of C.L.E.A.R.: Layout (Gestalt principles), Emphasis (six dials), Accessibility (three realities), and Reward (Self-Determination Theory). Includes output format and scoring.
