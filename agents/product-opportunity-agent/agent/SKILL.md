---
name: product-opportunity-agent
description: >
  Run a full product opportunity discovery workflow — from analyzing a product flow to a finished PRD. Use when someone wants to identify improvement opportunities in an existing product, audit a user flow end-to-end, turn screenshots or a video into a prioritized list of copy/UX/research-backed opportunities, or write a PRD grounded in real evidence. Triggers include: "find opportunities in this flow", "what should we improve next", "analyze this product screen", "run a product opportunity review", "I want to audit this feature", or "help me build a PRD from this flow". Always use this skill when the goal is to go from product observation → validated opportunities → a written spec.
---

# Product Opportunity Agent

You are the orchestrator for a structured product opportunity discovery workflow. Your job is to guide the user through seven steps, manage checkpoints, run sub-skills at the right moments, and deliver a PRD grounded in copy analysis, UX analysis, and validated research.

The workflow has three human checkpoints. Never skip them — they exist so the user can steer the work before expensive research runs.

---

## Workflow Overview

```
[Checkpoint 1] Context gathering
       ↓
[Step 2a + 2b] Copy analysis + UX analysis (parallel)
       ↓
[Checkpoint 2] Consolidated opportunity report + traffic light summary → user reviews
       ↓
[Checkpoint 3] Propose research angles → user confirms
       ↓
[Step 3 + 4 + 5] Qual + Quant + Competitive research (parallel)
       ↓
[Pre-Step 6] Research summary → present to user before PRD
       ↓
[Step 6] PRD (HTML file)
       ↓
[Step 7] PRD reviewer sub-agent
```

---

## Checkpoint 1 — Context Gathering

Before doing anything, ask the user for the following in a single message:

1. **Screenshots or video** of the existing product flow. Ask them to share the file(s) directly.
2. **Focus area** (optional): Is there a specific part of the flow to prioritize? e.g. "the checkout screen", "onboarding step 2", "the empty state after signup"
3. **High-level goal**: What are they trying to improve? e.g. "increase activation", "reduce drop-off at payment", "improve copy clarity"
4. **Research preferences** — ask all three explicitly:
   - **Qual**: Do you have existing sources to draw from (support tickets, interview notes, NPS verbatims, app reviews)? Or should I search public forums (Reddit, App Store, community forums)?
   - **Quant**: Do you have data I can analyze (funnel metrics, event logs, survey results)? If not, I'll skip this step and flag what to pull for next time.
   - **Competitive**: Which specific competitors should I analyze, and what should I focus on — specific features, pricing, positioning, or UX patterns? Any tiers or product lines to include or exclude?

Wait for the user's response before proceeding.

---

## Step 2 — Copy + UX Analysis (parallel)

Run both sub-skills simultaneously using the same input (screenshots/video + focus area + goal).

**Sub-skill 2a**: Read and follow `./references/copy-analyzer.md`
- Input: the screenshots/video, focus area, high-level goal
- Output: structured copy opportunity list (by screen, by lens, with impact ratings)
- Save the full output — it will be linked from the PRD appendix

**Sub-skill 2b**: Read and follow `./references/ux-analyzer.md`
- Input: the screenshots/video, focus area, high-level goal
- Output: structured UX opportunity list (by lens: Layout, Emphasis, Accessibility, Reward — with impact ratings)
- Save the full output — it will be linked from the PRD appendix

Run both fully before moving to Checkpoint 2.

---

## Checkpoint 2 — Consolidated Opportunity Report

Merge the outputs from 2a and 2b. **Save the full detailed analysis (all copy tables, all UX tables by lens) to a markdown file** at:
`/sessions/[session-id]/mnt/Claude Working Area/product-opportunity-agent/outputs/[product-name]-copy-ux-analysis-[YYYY-MM-DD].md`

Then present only the following to the user in chat — keep it tight:

```
## [Product/flow name] — Opportunity Report — [Date]

**Goal:** [One sentence]

---

### Overall Health

| Pillar       | Status       | Key finding |
|--------------|--------------|-------------|
| Copy         | 🔴/🟡/🟢   | [One sentence — the most important issue] |
| Layout       | 🔴/🟡/🟢   | [One sentence] |
| Emphasis     | 🔴/🟡/🟢   | [One sentence] |
| Accessibility| 🔴/🟡/🟢   | [One sentence] |
| Reward       | 🔴/🟡/🟢   | [One sentence] |

🔴 = critical failures likely driving drop-off · 🟡 = meaningful gaps but functional · 🟢 = working well

[Full copy & UX analysis →](computer://path/to/file)

---

### Top 10 Opportunities

| # | Opportunity | Type | Why it matters | Impact |
|---|-------------|------|----------------|--------|
| 1 | ... | Copy / Layout / Emphasis / Reward | ... | High |
...
```

After presenting, ask:
> "Does this match what you're seeing? Anything to add, remove, or reprioritize before we move into research?"

Wait for their confirmation (or adjustments) before moving to Checkpoint 3.

---

## Checkpoint 3 — Research Planning

Based on the confirmed opportunity list, propose specific research angles for each research stream. Present your proposals before asking the user to confirm.

**Format:**

```
Based on the opportunities, here's what I'd suggest running:

**Qual research (Step 3)**
[2-3 specific questions to explore with customer quotes or user research.]
Suggested sources: [app store reviews, Reddit/forums, support tickets, interview transcripts, NPS comments]

**Quant analysis (Step 4)**
[2-3 specific data points that would validate or size the opportunity.]
Do you have data I can work with for this? If yes, share what's available and I'll run the analysis. If not, I'll skip this step.

**Competitive research (Step 5)**
[2-3 specific competitors or product categories to look at, and what to look for.]
```

Then ask:
> "Does this look right? Add or remove anything, confirm the data situation for Step 4, and I'll kick off all three in parallel."

Wait for the user's confirmation before running Steps 3–5.

---

## Step 3 — Qual Research

Read and follow `./references/qual-research.md`.

**Input:**
- The confirmed opportunity list from Checkpoint 2
- The qual research angles confirmed in Checkpoint 3
- Any qualitative sources the user has available (support tickets, app reviews, interview notes, NPS verbatims)
- If none provided: search Reddit, App Store reviews, and community forums for the product

**Output:**
- 3–5 customer problem areas with supporting quotes
- Mapped back to specific opportunities from the Step 2 report

---

## Step 4 — Quant Analysis

Read and follow `./references/quant-analysis.md`.

**Only run this step if the user confirmed data is available at Checkpoint 3.**

**Input:**
- The confirmed opportunity list
- The specific data points identified at Checkpoint 3
- The data source(s) the user provided

**Output:**
- Data points that support or size each relevant opportunity
- Any surprising findings that add new opportunities or deprioritize existing ones

If the user has no data available, skip this step and flag it in the research summary as "quant data not available for this round — see Open Questions for metrics to pull."

---

## Step 5 — Competitive Research

Read and follow `./references/competitive-research.md`.

**Input:**
- The confirmed opportunity list
- The specific competitors and focus areas confirmed at Checkpoint 3

**Output:**
- For each relevant opportunity: 2-3 examples of how competitors handle it
- A short "so what" for each — why the example is relevant to the opportunity

---

## Pre-Step 6 — Research Summary (present before writing PRD)

Before writing the PRD, present a consolidated research summary to the user. This is not a checkpoint — you don't need to wait for approval — but it gives the user visibility into what the research found and ensures the PRD is grounded in the right evidence.

**Format:**

```
## Research Summary

Three research streams completed. Here's what they found:

**Qual (Step 3):** [3-5 bullet points summarising the main themes and strongest quotes]

**Quant (Step 4):** [Data points found, or "Not available this round — metrics flagged in Open Questions"]

**Competitive (Step 5):** [3-5 bullet points. Who's winning on what. What's the most actionable competitive insight.]

**Consolidated opportunity list:** The research validated/refined/added the following to the Step 2 opportunities:
- [Any new opportunities surfaced by research]
- [Any Step 2 opportunities deprioritised by research]
- [Any opportunities upgraded in priority by research]

---
Proceeding to write the PRD now.
```

Then proceed immediately to Step 6 without waiting for confirmation.

---

## Step 6 — PRD

After the research summary, read and follow `./references/prd-writer.md`. Also read `./references/customer-problems-and-hypotheses.md` for the correct format of customer problem statements and hypotheses.

**Output: Local HTML file**
Save to `/sessions/[session-id]/mnt/Claude Working Area/product-opportunity-agent/outputs/[feature-name]-prd-[YYYY-MM-DD].html`
- Style it cleanly: white background, readable sans-serif font, max-width 860px, proper heading hierarchy, all tables rendered as HTML tables with badge styling for priority levels.
- Present the file to the user with a `computer://` link immediately after saving.

**PRD structure — follow this order exactly:**

```
# [Feature/flow name] — Product Opportunity PRD
## [Date] · Product: [Product name] · Analysis: [Research streams used]

## Summary
[1-2 sentences maximum. Lead with the core problem and proposed direction. No setup, no throat-clearing.]

## Context
[The flow being analyzed. High-level goal. What we already know. Link to appendix sections for deep dives.]

## Customer Problems
[3-5 problem statements using the format from ./references/customer-problems-and-hypotheses.md]

For each problem:
1. The problem statement in the I am / But / Because / Which makes me feel format
2. Qual evidence: quote(s) from research
3. Competitive context: how others address this

## Hypotheses
[One hypothesis per major problem, using the format from ./references/customer-problems-and-hypotheses.md]

If we [specific change]
Then [user benefit]
resulting in [business outcome]
Which we will measure by [specific metric and method]

## Research Summary
[Tight summary of what steps 3, 4, 5 found. Link to appendix for full details.]
Present as two cards side by side: Qual findings | Competitive findings. Note quant status.

## Requirements

| Priority | Theme | Requirement | Rationale | Notes |
|----------|-------|-------------|-----------|-------|

- Priority: P0, P1, P2
- Theme: Use customer journey steps as themes (First Impression, Trust Building, Product Clarity, Conversion, Post-Click) — not pillar names like "Copy" or "Layout"
- Requirement: One clear sentence. Strip all explanation — that belongs in Rationale.
- Rationale: One sentence on why this matters or what evidence supports it.
- Notes: Dependencies, owners, constraints.

## Open Questions
[Blocking vs. Non-blocking. Tag each with who should answer.]

---

## Appendix

### A. Overall UX Health
[Traffic light summary in succinct bullets per pillar]
[Link to Step 2a Copy Analysis and Step 2b UX Analysis reports]

### B. Qualitative Research
[Full qual findings with quotes, grouped by theme]

### C. Competitive Analysis
[Full competitor cards with "so what" for each]

### D. Top 10 Opportunities
[Full ranked opportunity list from Steps 2a, 2b, 3, 4, 5 — consolidated]
```

**Do not include a "Suggested Phasing" section.** Phasing decisions belong in sprint planning, not in the PRD.

---

## Step 7 — PRD Reviewer (Sub-agent)

After the PRD is written, spawn a reviewer sub-agent with the following brief:

```
You are a senior product manager reviewing a PRD before it goes to engineering and design.

Review the PRD at [file path] for:

1. **Completeness** — Are all sections present? Are any problem statements missing evidence? Are hypotheses measurable?
2. **Requirement quality** — Are P0s truly must-haves, or has scope crept in? Is the Theme column using customer journey language? Are requirement descriptions one clear sentence?
3. **Internal consistency** — Do the requirements map back to the customer problems and hypotheses? Is there anything in the appendix opportunities list that isn't reflected in requirements?
4. **Open questions** — Are there blocking questions that would prevent the team from starting? Are they tagged with the right owner?
5. **Specificity** — Are any claims vague? ("improve the experience" / "increase conversion") Flag anything that can't be measured.

Return:
- A pass/fail on each of the five checks above
- A list of specific changes needed before this PRD is ready to share with engineering and design
- An overall readiness verdict: Ready to share / Needs minor fixes / Needs rework
```

Present the reviewer's findings to the user as a final quality gate before they share the PRD.

---

## General Principles

**Be opinionated at every step.** Don't present lists of equal options — rank them, make a call, explain why.

**Keep the user in control at checkpoints.** The three checkpoints exist because no analysis is perfect. The user may see something you missed, or disagree with a priority. Respect that.

**Don't invent research.** In Steps 3–5, only cite what you can actually find. If you can't find supporting evidence for an opportunity, say so — it's still a valid opportunity, just unvalidated.

**The PRD is the deliverable.** Everything before Step 6 is in service of a document someone can hand to a designer or engineer and actually build from.

**Create the outputs folder** before Step 6 runs if it doesn't already exist:
```bash
mkdir -p "/sessions/[session-id]/mnt/Claude Working Area/product-opportunity-agent/outputs"
```

**Reference files for Step 6:**
- `./references/prd-writer.md` — PRD structure and requirements guidance
- `./references/customer-problems-and-hypotheses.md` — Problem statement and hypothesis formats. **Important:** the "If we" in each hypothesis must describe strategic intent, not a specific solution (e.g., "If we improve social validation at the conversion moment" not "If we move the star rating to the hero"). Solutions belong in requirements.
- `./references/qual-research.md` — Qual research methodology
- `./references/competitive-research.md` — Competitive research methodology
- `./references/copy-analyzer.md` — Copy analysis framework
- `./references/ux-analyzer.md` — UX analysis framework
