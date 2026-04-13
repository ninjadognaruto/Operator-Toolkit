# Operator Toolkit

A collection of Claude skills, frameworks, and AI agents built for founders and operators who move fast across product, strategy, design, and leadership.

Everything here is a working Claude skill — drop files into `.claude/skills/` and invoke by name. Frameworks are written to be used, not just read.

---

## What's inside

### [`/product`](./product)
Skills for product discovery, strategy, and research.

| Skill | What it does |
|---|---|
| `product-strategy-audit` | 10-question pressure test + strategy-vs-plan check |
| `positioning-canvas` | Obviously Awesome positioning framework |
| `product-goals-review` | F.O.C.U.S. framework + 7 diagnostic tests for OKRs |
| `customer-problem-hypothesis` | Structured problem statements + testable hypotheses |
| `customer-insight-synthesis` | JTBD-mapped insights + Four Forces + null hypothesis testing |
| `competitive-research` | Competitive analysis with feature matrices |
| `stake-holder-jtbd` | Stakeholder comms mapped to what each audience actually needs |
| `qual-research` | Qualitative research synthesis |
| `quant-analysis` | Statistical analysis framework |

### [`/frameworks`](./frameworks)
Mental models and thinking tools. Not product-specific — for decisions, writing, and influence.

| Skill | What it does |
|---|---|
| `decision-framework` | Inversion-first framework for binary and comparative decisions |
| `asking-the-right-question` | Design high-quality questions for any conversation |
| `systems-influence` | Donella Meadows' leverage points — where to push to change a system |
| `munger-philosophy` | 13-criteria Munger scorecard for decisions and business analysis |
| `influence` | 12-criteria influence scorecard (Cialdini, Voss, Kahneman, Aristotle, HBS) |
| `article-craft` | Traffic light analysis for article drafts across 5 dimensions |
| `git-sync` | Stage, commit, and push all changes to origin main |

### [`/design`](./design)
Behavioral design frameworks and visual review skills.

| Skill | What it does |
|---|---|
| `bias-audit` | BIAS framework (Block → Interpret → Act → Store) for cognitive optimization |
| `fogg-bmap` | BJ Fogg's B=MAP model — diagnose why a behavior isn't happening |
| `psych-journey` | Map a user flow as a Motivation × Ability Psych curve |
| `15-star-experience` | Build backwards from the absurd ideal to diagnose what's possible |
| `don-norman-review` | DOET framework design critique with annotated screenshots |
| `font-readability` | 33-criteria font readability assessment across 6 domains |
| `copy-analyzer` | Copy analysis across headlines, CTAs, microcopy, error states |
| `ux-review-clear` | C.L.E.A.R. framework UX + copy review |

### [`/research`](./research)
Research pipeline skills for sourcing, synthesizing, and building.

| Skill | What it does |
|---|---|
| `web-research` | Deep-dive knowledge base on any topic |
| `github-research` | Search GitHub for existing skills, prompts, and agent implementations |
| `topic-skill-builder` | Research → criteria → assessment skill pipeline |

### [`/agents`](./agents)
Multi-step orchestration agents. Each runs sub-skills in sequence, with human checkpoints.

| Agent | What it does |
|---|---|
| `product-opportunity-agent` | Screenshots → opportunity list → evidence-backed PRD |
| `ux-review-agent` | Structured UX + copy audit of any screen or flow |

---

## How to install

1. Clone this repo
2. Copy any skill folder or `.md` file into your `.claude/skills/` directory
3. Invoke by name in Claude Code (e.g. `run the product-strategy-audit skill`)

Skills with sub-skills (like the agents) need their full folder structure preserved.

---

## Stack

Built for [Claude Code](https://claude.ai/code). Skills are written as Claude prompt files — readable as standalone frameworks, runnable as Claude skills.
