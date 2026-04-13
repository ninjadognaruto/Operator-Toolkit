# Agents

Multi-step Claude agents for end-to-end product workflows. Each agent orchestrates sub-skills, runs parallel analysis, and has defined human checkpoints.

---

## product-opportunity-agent

**What it does:** Full product opportunity discovery — from screenshots of an existing flow to a finished PRD.

**Workflow:**
1. Context gathering (product screenshots, focus area, goal)
2. Copy analysis + UX analysis (parallel)
3. Human checkpoint — review opportunity list
4. Qual, quant, and competitive research (parallel, based on what you have)
5. Human checkpoint — confirm research scope
6. PRD generation with embedded evidence

**Output:** HTML PRD grounded in copy analysis, UX review, and research.

**Use when:** You want to go from "what should we improve?" to a written, evidence-backed spec.

---

## ux-review-agent

**What it does:** Structured UX review of any product screen or flow, producing a scored audit with prioritized recommendations.

**Structure:**
- `SKILL.md` — main orchestrator
- `agents/reviewer.md` — sub-agent that reviews the output before delivery
- `references/ux-analyzer.md` — UX analysis framework
- `references/copy-analyzer.md` — copy analysis framework

**Use when:** You want a fast, rigorous review of a specific screen or flow — not a full discovery cycle.

---

## How to use these

Drop the folder into your `.claude/skills/` directory and invoke by name in Claude Code.
