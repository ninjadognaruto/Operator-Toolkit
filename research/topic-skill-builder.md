---
name: topic-skill-builder
description: Research any topic deeply, distill it into ranked criteria with importance ratings, and build a complete assessment skill that evaluates inputs against those criteria with a green/yellow/red scorecard. Use when someone says "I want to learn about X and create a skill", "build me a skill for evaluating Y", "research Z and turn it into an assessment framework", "create a criteria-based skill for W", or any request that combines learning a domain with building a reusable evaluation tool. Also use when someone has already done research and wants to convert findings into a structured skill.
---

# Topic Skill Builder

You are building an assessment skill from scratch. The end product is a skill that can evaluate any input against a ranked set of research-backed criteria and produce a visual green/yellow/red scorecard.

The munger-philosophy skill (`skills/personal/munger-philosophy/`) is the reference implementation for depth and specificity. The font-readability skill (`skills/design/font-readability/`) is the reference for visual scorecard output. The influence skill (`skills/personal/influence/`) is the reference for multi-source synthesis and counterpart-style modifiers.

---

## Phase 0 — Source Inventory

**Before any web searches, take stock of what already exists.**

### Check the user's KB

Read `knowledge/_index.md` and scan for relevant domain files, HBS notes, or company experience entries. The user's existing knowledge is often richer and more specific than web search results — it's already been synthesized through their lens.

### Check existing skills

Scan `skills/CLAUDE.md` for skills that overlap with or relate to the topic. Existing skills may cover sub-topics that should be referenced rather than rebuilt, or they may reveal frameworks the user already trusts.

### Handle user-specified sources

If the user provides specific sources (books, authors, frameworks), use those as the seed list. The research phase then **validates and extends** rather than building from zero:

1. **Ingest the seed sources first** — read KB entries, run targeted searches for each named source
2. **Produce a source recommendation table** before broad research:

| Proposed Source | Rationale | Status |
|----------------|-----------|--------|
| [User's source 1] | [already in KB / needs research] | Seed |
| [User's source 2] | [already in KB / needs research] | Seed |
| [Your suggestion 1] | [1-line why it's relevant] | Suggested |
| [Your suggestion 2] | [1-line why it's relevant] | Suggested |

3. **Get approval** on the source list before burning search budget on broad research

This prevents two failure modes: researching what's already in the KB, and missing sources the user would have wanted.

---

## Phase 1 — Research

Use the `web-research` skill pattern. Run 8-12 web searches across these categories:

1. **Foundational texts** — "[topic] foundational framework", "[topic] seminal research"
2. **Expert practitioners** — "[topic] expert guide", "[topic] best practices"
3. **Named frameworks** — "[topic] framework", "[topic] methodology", "[topic] criteria"
4. **Measurable dimensions** — "[topic] evaluation criteria", "[topic] scoring rubric", "[topic] assessment"
5. **Counterintuitions** — "[topic] myths", "[topic] common mistakes", "what most people get wrong about [topic]"
6. **Empirical evidence** — "[topic] research study", "[topic] data", "[topic] evidence-based"

**Goal**: Find the dimensions that actually matter. Look for:
- Named criteria from established frameworks
- Measurable properties (not vague qualities)
- Research-backed impact rankings (which criteria matter most)
- Examples at both ends of each dimension (good vs bad, high vs low)
- Thresholds or benchmarks where available

---

## Phase 1.5 — GitHub Audit

**Search GitHub for existing skills, prompts, and agent implementations on this topic.** Use the `github-research` skill pattern.

Run at least 5 searches:
```
site:github.com "[topic]" prompt OR skill OR framework
site:github.com "[topic]" "Chris Voss" OR "[key author]" prompt OR agent
site:github.com awesome-[topic] prompts
site:github.com "[topic]" "SKILL.md" OR "AGENT.md"
site:github.com "system prompt" [topic] agent
```

**What you're looking for:**
- **Structural patterns** — How do the best implementations organize their skill? (mindsets vs. techniques vs. workflow)
- **Frameworks referenced** — What named methodologies appear across repos?
- **Edge cases handled** — What failure modes or contextual modifiers do the best ones account for?
- **The gap** — What has nobody built? That's your differentiator.
- **Steal list** — Top 3-5 specific ideas worth incorporating

**Why this phase matters:** The influence skill build revealed that every existing implementation was single-source (just Voss OR just Cialdini). The GitHub audit confirmed that unifying multiple sources into one skill was the gap — which validated the approach and surfaced structural patterns (5-phase workflow, counterpart style taxonomy) that improved the final product.

---

## Phase 2 — Distill into Criteria

Extract a structured list of criteria. **Target 10-15 criteria.** Fewer, deeper criteria beat many shallow ones. If you're above 15, you probably have generic filler — pressure-test each one (see quality check below).

### For each criterion, define:

| Field | What to capture |
|-------|----------------|
| **Name** | Short, specific label (e.g., "Aperture openness", not "Letter design") |
| **Category** | Which domain/theme it belongs to (group related criteria) |
| **Definition** | One sentence. What this property measures. |
| **Why it matters** | 2-3 sentences. The mechanism — how and why this affects quality. Include direction: is higher better, lower better, or middle best? |
| **Impact tier** | Critical (5), High (4), Medium (3), Low (2), Minimal (1) — based on research evidence of how much this criterion affects overall quality |
| **Best direction** | "high", "low", or "mid" — which end of the spectrum is desirable |
| **Good example** | A specific, concrete example that scores well on this criterion |
| **Poor example** | A specific, concrete example that scores poorly |
| **Research basis** | Source or citation supporting the importance claim |

### Impact tier assignment rules:

- **Critical (5)** — Research shows this accounts for a large share of variance in quality. Getting this wrong makes everything else irrelevant. Reserve for 2-4 criteria max.
- **High (4)** — Strong measurable effect. Important in most contexts. 3-5 criteria.
- **Medium (3)** — Meaningful but secondary. Matters for quality refinement, not make-or-break. 3-5 criteria.
- **Low (2)** — Refinement-level. Matters to experts, not critical for good-enough outcomes. 1-3 criteria.
- **Minimal (1)** — Niche, legacy, or edge-case relevance only. 0-2 criteria.

### Category organization:

Group criteria into 3-5 categories. Each category should represent a distinct domain of the topic. Name categories concretely (not "General" or "Other").

**Prefer workflow-aligned categories when the topic has a natural sequence.** For the influence skill, Preparation → Connection → Execution → Self-Management mapped to the actual phases of an influence attempt. This is more useful than thematic grouping (e.g., "Psychology" / "Technique") because it tells the user WHEN to apply each criterion, not just what it is.

### Cross-source synthesis

When multiple sources describe the same mechanism in different language, merge them into one criterion rather than listing separately. This is the hardest and most valuable part of distillation.

Examples from the influence skill:
- Voss's "accusation audit" + MI's "rolling with resistance" + Moesta's "anxiety reduction" → merged into **Resistance Dissolution**
- Cialdini's "reciprocity" + Cohen/Bradford's "currencies of exchange" → merged into **Reciprocity Architecture**
- Kahneman's "framing effects" + Cialdini's "pre-suasion" + HBS "anchoring" → merged into **Pre-Suasion & Framing**

The cross-source synthesis IS the differentiator. Single-source criteria are what every other implementation already has.

### Modifiers vs. criteria

Some research produces **modifiers** — contextual variables that change how all criteria are deployed — rather than criteria that score independently.

Example: Voss's counterpart style taxonomy (Analyst / Accommodator / Assertive) isn't a 13th criterion in the influence skill. It's a modifier in the SKILL.md that tells the user: "same criteria, different deployment depending on who you're influencing."

**How to spot a modifier:** If the research finding answers "how should I adjust my approach based on X?" rather than "how well am I doing on X?", it's a modifier, not a criterion. Include modifiers in SKILL.md as a diagnostic table, not in the criteria list.

### Quality check — apply BEFORE presenting to user:

- [ ] **Specificity test**: Is each criterion specific to THIS topic, or is it general wisdom wearing a costume? "Intellectual humility" is generic; "Circle of competence" is Munger-specific. Cut or merge anything generic.
- [ ] **Overlap test**: Do any two criteria measure the same underlying thing? If so, merge the weaker one into the stronger one — absorb its best ideas, don't just delete.
- [ ] **Cross-source test**: Does each criterion synthesize insights from multiple sources where possible? Single-source criteria are weaker — check if another source describes the same mechanism.
- [ ] Every criterion is measurable or observable (not subjective vibes)
- [ ] Impact tiers follow a pyramid: few Critical, more Medium, few Minimal
- [ ] Each criterion has concrete good/poor examples, not abstract descriptions
- [ ] Categories are distinct with no major overlap
- [ ] The list covers the topic comprehensively — an expert wouldn't say "you missed X"

---

## Phase 2.5 — Deep Dives

**Before presenting to the user, run deep research on the top criteria.**

For every Critical and High-impact criterion (typically 5-8 criteria), run a dedicated web search to build a substantive reference entry. The goal: each deep dive should contain enough specificity that someone reading it learns something they didn't know, not just sees a definition they could have guessed.

### What a deep dive needs:

- **The specific mechanism** — not just "why it matters" but HOW it works, with the originator's own framing and language
- **Named sub-components** — if the criterion contains a framework, list its parts (e.g., Munger's 25 tendencies under "Bias awareness", the specific disciplines under "Multidisciplinary models")
- **Concrete, named examples** — not hypotheticals but real cases the originator or field uses (e.g., "FedEx night shift" for incentive analysis, "See's Candies" for simplicity)
- **The originator's own quotes** — direct language that captures the idea better than a paraphrase
- **Connection to other criteria** — how this criterion interacts with or reinforces others in the set
- **The antidote or diagnostic** — what question to ask or what action to take when evaluating against this criterion

### Deep dive search pattern:

For each criterion, run 2-3 targeted searches:
- "[topic] [criterion name] examples"
- "[topic originator] [criterion name] quote framework"
- "[criterion name] specific cases mechanism"

### Why this matters:

The deep dives change what gets kept or cut. When the user sees a thin reference next to a rich one, the contrast makes it obvious which criteria are real and which are filler. Presenting deep dives at the review gate gives the user the information they need to make good keep/merge/cut decisions.

---

## Phase 3 — Review Gate

**STOP. Present the research output to the user for review before building anything.**

Show them:
1. **Sources researched** — full list of sources (user-specified + KB + web + GitHub), so they can see coverage
2. **Proposed criteria list** — as a table with columns: #, Name, Category, Impact, Definition, Good Example, Poor Example
3. **Category structure** — the 3-5 groupings and what's in each
4. **Impact distribution** — how many Critical/High/Medium/Low/Minimal
5. **Modifiers** (if any) — contextual variables that change deployment, presented as diagnostic tables
6. **Deep dives** — for each Critical and High criterion, present the full deep dive (mechanism, sub-components, named examples, quotes, connections)
7. **GitHub findings** — top results, structural patterns found, the gap, and the steal list
8. **Open questions** — anything you're unsure about. Specifically flag:
   - Criteria that might be generic rather than topic-specific
   - Criteria that might overlap and should be merged
   - Impact tier calls you're uncertain about
   - For any criterion the user wants to remove: "Should this idea be absorbed into another criterion, or fully cut?"

Ask explicitly: "Want to adjust anything before I build the skill files?"

**Wait for approval or edits. Only proceed to Phase 4 after the user confirms.** Expect 1-3 rounds of iteration. This is where the skill gets shaped — don't rush it.

---

## Phase 4 — Build the Skill

Create two files that follow the reference implementations:

### File 1: `SKILL.md`

```
---
name: [topic-slug]
description: [Trigger description — when to use this skill. Include specific trigger phrases, keywords, and use cases. Be generous with triggers.]
---

# [Topic] Skill

[1-2 sentence description of what this skill does.]

## When to use this skill

- [Trigger condition 1]
- [Trigger condition 2]
- [Trigger condition 3]
- [Trigger condition 4]

## The [N] criteria

For full details on each criterion, read:
```
/references/criteria.md
```

**Always read `references/criteria.md` before answering detailed questions.**

## Impact tier summary

**Critical (5/5)** — [criteria names]
**High (4/5)** — [criteria names]
**Medium (3/5)** — [criteria names]
**Low (2/5)** — [criteria names]
**Minimal (1/5)** — [criteria names] (omit if none)

## [Modifier name] (if applicable)

[Diagnostic table showing how deployment changes based on context. See influence skill's counterpart style modifier as reference.]

## How to evaluate [an input]

Quick checklist — check the Critical criteria first:
1. [Criterion] — [What to look for]
2. [Criterion] — [What to look for]
...

Then High-tier: [brief guidance]
Then Medium: [brief guidance]

## Scorecard output (default for evaluation)

**Always produce a visual scorecard when evaluating.** Create a self-contained HTML file.

### Scorecard design spec

**Layout**: Single-column table, one row per criterion, sorted by impact (Critical first). Within each tier, sort by criterion number.

**Columns**:
1. **Impact** — tier badge (Critical/High/Medium/Low/Minimal)
2. **Criterion** — name + category badge
3. **Rating** — green (good) / yellow (moderate) / red (poor)
4. **Assessment** — 1-line explanation of why this input gets that rating

**Rating logic**:
- 🟢 **Green** = input performs well on this criterion
- 🟡 **Yellow** = acceptable but not great, or criterion partially applies
- 🔴 **Red** = input performs poorly on this criterion

For "middle is best" criteria: green = near ideal range, yellow = slightly outside, red = at an extreme.

**Summary section at top**:
- Input name + overall grade (A/B/C/D/F)
- Green/yellow/red count (e.g., "8 green · 3 yellow · 2 red")
- Top 3 strengths (highest-impact greens)
- Top 3 risks (highest-impact reds/yellows)
- Recommendation

**Weighted scoring**:
- Critical: 5 pts green, 2.5 yellow, 0 red
- High: 4 pts green, 2 yellow, 0 red
- Medium: 3 pts green, 1.5 yellow, 0 red
- Low: 2 pts green, 1 yellow, 0 red
- Minimal: 1 pt green, 0.5 yellow, 0 red

**Grade thresholds** (% of max possible):
- A = 85%+, B = 70-84%, C = 55-69%, D = 40-54%, F = below 40%

**Color palette**:
- Green: #0F6E56 (bg #E1F5EE)
- Yellow/Amber: #854F0B (bg #FAEEDA)
- Red: #A32D2D (bg #FCEBEB)

**File output**: Save as `{input-name}-{topic}-scorecard.html`

### Multi-input comparison

When comparing 2+ inputs, produce a comparison scorecard:
- One column per input
- Same row structure sorted by impact
- Color dots per input per criterion
- Summary row with overall grade per input
```

### File 2: `references/criteria.md`

The full criteria reference. One section per criterion organized by category, with a "How to read this reference" header explaining the format.

**Critical and High criteria** get the full deep dive treatment: mechanism, sub-components, named examples, originator quotes, connections to other criteria, diagnostic questions.

**Medium and Low criteria** get the standard treatment: definition, why, good/poor examples, source.

### File location:

Place the skill folder in the appropriate subdirectory of `skills/`:
- Design/visual topics → `skills/design/[topic-slug]/`
- Product/strategy topics → `skills/product/[topic-slug]/`
- Personal/decision topics → `skills/personal/[topic-slug]/`
- Research/analysis topics → `skills/research/[topic-slug]/`

If no existing category fits, create a new one.

---

## Phase 4.5 — Verification

**Run a completeness check before declaring done.**

Verify:
- [ ] Every criterion number in SKILL.md has a matching section in references/criteria.md
- [ ] Impact tier counts in SKILL.md match the actual criteria assignments in references/criteria.md
- [ ] All Critical and High criteria have full deep dives (sub-components, quotes, examples, diagnostics, connections)
- [ ] All Medium and Low criteria have at least definition, good/poor examples, and source
- [ ] Scorecard spec has weighted scoring, grade thresholds, and color palette
- [ ] Modifiers (if any) appear in SKILL.md with deployment guidance
- [ ] File paths and references are internally consistent

Use a subagent for verification on complex skills — it's cheap insurance against missing sections.

---

## Phase 5 — Update the Index

Add the new skill to `skills/CLAUDE.md` in the appropriate section with a one-line description following the existing format.

Also add combination recommendations at the bottom of `skills/CLAUDE.md` — which existing skills pair well with the new one, and when to use each.

---

## Workflow Summary

```
User: "I want to learn about [topic] and create a skill"
     ↓
Phase 0: Source inventory — check KB, existing skills, handle user-specified sources
     ↓
Phase 1: Deep web research (8-12 searches, source evaluation)
     ↓
Phase 1.5: GitHub audit — search for existing implementations, extract patterns
     ↓
Phase 2: Distill into 10-15 ranked criteria (with cross-source synthesis + modifier detection)
     ↓
Phase 2.5: Deep dive research on Critical + High criteria
     ↓
Phase 3: ⏸ REVIEW GATE — present criteria table + deep dives + GitHub findings, wait for approval
         (expect 1-3 rounds: user may cut generic criteria, merge overlaps, adjust tiers)
     ↓
Phase 4: Build SKILL.md + references/criteria.md
     ↓
Phase 4.5: Verification — completeness check across both files
     ↓
Phase 5: Install to skills/ folder + update CLAUDE.md index + add combination recommendations
     ↓
Output: Working skill that produces green/yellow/red scorecards
```

## Lessons Learned

These patterns emerged from building the munger-philosophy, font-readability, and influence skills:

1. **Generic criteria are a trap.** The first pass always produces plausible-sounding criteria that feel right but aren't topic-specific. Every criterion must pass: "is this specific to this topic, or is it general wisdom wearing a costume?"

2. **Merging > removing.** When cutting a criterion, first ask whether its core idea should be absorbed into another criterion. Three of the six cuts in the Munger skill were merges, not deletions.

3. **Deep dives change what gets kept.** When the user sees a thin reference next to a rich one, the contrast makes it obvious which criteria are real. Present deep dives at the review gate, not after.

4. **10-15 criteria is the sweet spot.** The Munger skill started at 25 and ended at 13. More than 15 usually means filler.

5. **The review gate is where the skill gets shaped.** Don't rush it. The user will cut, merge, reorder, and question tiers. That iteration is what makes the skill actually useful.

6. **Cross-source synthesis is the differentiator.** (From influence skill.) When multiple sources describe the same mechanism in different language, merging them into one criterion is where the real value lives. Single-source criteria are what every other implementation already has. The GitHub audit on the influence skill confirmed: nobody had unified Moesta + Cialdini + Voss + Kahneman into a single framework. That synthesis was the gap.

7. **Check the KB first.** (From influence skill.) Three of the richest inputs came from the user's existing knowledge base (HBS negotiation, Four Forces, systems-influence skill). Reading these before web searches shaped what to search for and prevented redundant research.

8. **GitHub audits surface structural patterns.** (From influence skill.) The GitHub audit found a 5-phase workflow structure, counterpart style taxonomy, and principle-to-situation matching — none of which came from web research. It also confirmed the gap (no unified multi-source influence skill existed), which validated the approach.

9. **Not everything is a criterion.** (From influence skill.) Contextual modifiers (Analyst/Accommodator/Assertive) change HOW criteria are deployed but don't score independently. Recognizing the distinction between criteria and modifiers prevents bloated criterion lists and produces a more usable skill.

10. **Workflow-aligned categories > thematic categories.** (From influence skill.) When the topic has a natural sequence (Preparation → Connection → Execution → Self-Management), organizing categories by phase is more actionable than organizing by theme. It tells the user WHEN, not just WHAT.

## Reference Implementations

Before building any new skill, read:
- `skills/personal/munger-philosophy/SKILL.md` — skill structure, depth of reference
- `skills/personal/munger-philosophy/references/criteria.md` — deep dive format for Critical/High criteria
- `skills/design/font-readability/SKILL.md` — scorecard visual spec
- `skills/design/font-readability/references/criteria.md` — criteria format for visual/design topics
- `skills/personal/influence/SKILL.md` — multi-source synthesis, counterpart-style modifiers, cross-source criteria
- `skills/personal/influence/references/criteria.md` — merging multiple frameworks into unified criteria
