# Skills Directory

Custom skills for Rohit. Each skill is a structured prompt that Claude reads before executing a specific type of task. They encode frameworks, output formats, and principles so Claude doesn't need to be re-briefed on them.

---

## How to Use a Skill

Tell Claude what you want to do. If a skill matches, Claude will read it and follow its instructions.

Examples:
- "Synthesize this article" → `article-synthesis`
- "What's wrong with this experience?" → `product/design-review/product-experience-critique`
- "Should I do X or Y?" → `hard-decision`
- "Help me write this update for the board" → `stakeholder-brief`

---

## Skill Index

### Thinking & Decisions

**`hard-decision`** — Inversion-first decision framework for any ambiguous, binary, or high-stakes call. Starts by flipping the question, then applies the micro-pessimist/macro-optimist filter, classifies decision type (reversible vs. not), runs an edge check, and produces a single recommendation with named assumptions and checkpoints. Use when stuck, pressure-testing a call, evaluating a strategic bet, or making a hiring/resource/pivot decision.

**`systems-influence`** — Donella Meadows' leverage point framework for changing behavior at the system level. Diagnoses which level of a system you've been pushing at, finds the real leverage point, and prescribes a specific intervention. Use when repeated attempts to change something aren't working — an org's behavior, a stuck negotiation, a narrative, a person's decision.

### Research & Synthesis

**`article-synthesis`** — Synthesizes any article, paper, book, or notes into Rohit's framework-first format. Outputs: core idea, taxonomy-style framework, mechanism, counterintuitions, behavioral implications (in "next time I will..." format), and connecting threads to other mental models. Follows Karpathy's learning principle — only keep what changes how you act.

**`customer-insight-synthesis`** — Synthesizes customer feedback, interviews, support tickets, or surveys into JTBD-mapped insights with null hypothesis testing. Maps signals to functional/emotional/social jobs, applies a strong signal/weak signal/red flag filter, and outputs a prioritization map. Confronts the B2B null hypothesis directly: will they pay? Will they adopt?

### Strategy & Positioning

**`product-strategy-audit`** — Pressure-tests any strategy doc, OKR set, or roadmap against Rohit's strategy framework. Checks for the four required components (priority, focus, choices, win condition), then runs a 10-question audit. Produces a scorecard, a directional verdict, and 2-3 specific rewrite suggestions.

**`positioning-canvas`** — Builds or stress-tests a product positioning statement using the Obviously Awesome framework. Works through competing alternatives → unique attributes → value themes → target customer (HXC) → market frame → positioning statement + one-liner. Includes a 6-question positioning audit for reviewing existing positioning.

### Communication

**`stakeholder-brief`** — Writes any stakeholder communication mapped to what the specific audience actually needs — functional, emotional, and social JTBD layers. Covers exec updates, board notes, investor memos, team announcements, sales enablement, partner briefs. Produces a structured brief with headline, context, core content, explicit ask, and out-of-scope.

### Product Design Review

Lives in `product/design-review/`. Six complementary lenses for evaluating product and interface quality. Choose based on what you're trying to diagnose.

**`product/design-review/15-star-experience`** — Maps any product experience against the 15-star framework, building backwards from the absurd ideal to identify the gap between current state and what's actually possible. Establishes the ceiling before critiquing what exists. Output: star map, gap dimension, subtraction list, the one move. **Use for: establishing direction, experience gap analysis, "what would the ideal version look like."**

**`product/design-review/behavioral-psychology`** — Audits any product experience against 8 behavioral psychology levers: endowment effect, self-initiated triggers, defaults, social/emotional JTBD, cognitive load, scarcity/status, friction, and feedback loops. Output: lever scorecard, top 3 missed levers with specific fixes, the one change. **Use for: conversion diagnosis, retention problems, "which psychology mechanic is failing."**

**`product/design-review/don-norman-review`** — Applies Don Norman's Design of Everyday Things framework with visual annotations. Scores a design against 7 Norman principles, identifies Gulf of Execution and Gulf of Evaluation, produces an annotated screenshot with numbered callouts (red/yellow severity), and delivers 5 ranked recommendations in problem → change → how → impact format. Has a support script (`scripts/annotate.py`) for generating annotated images. **Use for: specific screen or interaction critique, interface usability, visual annotation.**

**`product/design-review/fogg-bmap`** — Applies BJ Fogg's B=MAP model (Behavior = Motivation × Ability × Prompt) to diagnose why a target behavior isn't occurring. Audits all three motivators (Sensation, Anticipation, Belonging), all five Ability factors (Time, Money, Physical, Mental, Routine), and prompt type/timing against the activation threshold. Accepts screenshots and videos. Output: MAP position diagnosis, single bottleneck identification, ranked interventions. **Use for: conversion diagnosis, behavior design, "why aren't users doing X."**

**`product/design-review/bias-audit`** — Applies the BIAS framework (Block → Interpret → Act → Store) to audit a screen for System 1 cognitive performance. Identifies what the brain filters out before conscious processing, whether remaining information is correctly interpreted, whether action is facilitated, and what Psych the interaction stores. Produces annotated screenshots using the shared `annotate.py` script. **Use for: screen-level attention audit, "why isn't this being noticed," System 1 review.**

**`product/design-review/psych-journey`** — Maps a multi-step user flow as a Psych curve (Motivation × Ability over time), identifying Peaks, Pits, Jumps, Drops, and Transitions. Applies the 4 improvement tactics in priority order: Mark Transitions → Elevate Peak → Fill Pit → Reorder steps. Accepts multiple screenshots, video walkthroughs, or flow descriptions. **Use for: onboarding review, activation flow, retention drop-off diagnosis, "where is Psych dropping."**

---

## When Two Skills Apply

Use `15-star-experience` + `behavioral-psychology` together for a full broad review — star framework establishes the ceiling, behavioral audit finds the floor. Go deeper with the diagnostic skills when you've identified a specific problem type:
- **Behavior not happening at a specific step** → `fogg-bmap`
- **Screen-level attention or comprehension failure** → `bias-audit`
- **Drop-off somewhere in a multi-step flow** → `psych-journey`
- **Interface usability and interaction design** → `don-norman-review`

**Powerful combinations:**
- `15-star-experience` + `behavioral-psychology` for the full experience critique (these replaced the former `product-experience-critique`)
- `fogg-bmap` + `bias-audit` when behavior isn't happening and you want both the MAP diagnosis and the System 1 screen audit
- `psych-journey` to find the Pit, then `fogg-bmap` to diagnose what's causing it, then `bias-audit` to fix the screen

`positioning-canvas` and `stakeholder-brief` pair naturally: positioning first, then brief.

`product-strategy-audit` and `hard-decision` pair when evaluating a strategic bet that requires both pressure-testing the strategy and making the final call.
