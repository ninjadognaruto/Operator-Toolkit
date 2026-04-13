---
name: product-ux-analyzer
description: >
  Analyze product screenshots or videos to identify opportunities in layout, visual emphasis, accessibility, and reward/engagement mechanics. Use as Step 2b of the product opportunity agent, or standalone when someone shares a screen and asks "why does this feel off?", "nothing stands out", "users aren't engaging", "this feels flat", "review the layout", "is the hierarchy right?", "why does this feel hard to use?", "why isn't this delightful?", or "the screen feels overwhelming". Always use this skill when visual structure, emphasis, friction, or emotional design are in question — even if the request is framed as a general product review.
---

# Product UX Analyzer

You are analyzing product screens through the **L, E, A, R pillars of C.L.E.A.R.**: Layout, Emphasis, Accessibility, and Reward.

These four lenses cover everything the eye sees and everything the user feels. Your job is to produce a specific, prioritized list of UX opportunities that can be validated by research and executed by a designer.

---

## Step 1 — Handle the input

**Screenshots**: Analyze directly.

**Videos**: Extract frames first:
```bash
mkdir -p /tmp/ux-frames
ffmpeg -i "<video_path>" -vf "fps=1" /tmp/ux-frames/frame_%03d.png -y
```
Capture key moments: first screen, any transitions, action states, confirmation or completion screens, error states.

**Focus area**: If the user specified a particular section (e.g. "the checkout flow" or "the onboarding"), concentrate there. Otherwise cover the full visible flow, flagging the highest-leverage screens first.

---

## Step 2 — Run the four-lens audit

Evaluate every screen through all four lenses below. Be specific — name the exact element, describe what you see, and explain the opportunity.

---

### Lens 1: Layout — Gestalt Principles

A good layout lets people scan and understand without searching. Apply the six Gestalt principles:

**Similarity** — Elements that share visual characteristics feel related.
- Do buttons, icons, text of the same role have the same visual style?
- Are there component variants that could be unified?

**Proximity** — Elements that are close together feel connected.
- Are labels visually attached to the inputs or values they describe?
- Is there consistent tight spacing *within* groups and looser spacing *between* them?

**Simplicity** — Lower visual complexity reduces cognitive load.
- Is there styling that doesn't communicate meaning? (decorative borders, gradients, shadows with no hierarchy purpose)
- Are there redundant controls or duplicate actions on the same screen?
- Does the screen ask users to decide too many things at once?

**Alignment** — Aligned edges create order; misalignment creates friction.
- Is there a consistent grid? Are left edges aligned predictably?
- Are spacing values consistent (ideally on a 4px or 8px grid)?

**Common Region** — Elements in the same bounded area feel grouped.
- Are related items contained in a section or card?
- Are containers defined with subtle backgrounds/spacing rather than heavy borders?

**Continuity** — People follow the smoothest visual path.
- Is there a clear scan path (usually top-left to bottom)?
- Does the layout support the F-shaped reading pattern — strong left edge, key info in the first sweep?

**Common layout mistakes to flag:**
- Sloppy spacing: inconsistent padding within and between components
- Border bloat: boxes defined by borders rather than spacing and subtle container colors
- Content cramming: too much information competing for the same space (solution: progressive disclosure)

---

### Lens 2: Emphasis — The Six Dials

Layout helps people understand. Emphasis helps them notice what matters. Apply the Foggy Glasses Test: if you blur or squint at this screen, is the most important element still obvious? If everything looks equally loud or quiet, emphasis isn't working.

Evaluate the six emphasis dials:

**Size** — Bigger feels more important.
- Is the primary message/action noticeably larger than its neighbors?
- Are secondary elements turned down enough that the primary doesn't have to compete?

**Color** — Accent color pulls attention; muted color demotes.
- Is accent color reserved for the primary action or key status?
- Are secondary elements in muted tones so they don't compete?
- Is color being used to communicate meaning (status, warning, success)?

**Space** — Whitespace isolates what matters.
- Does the primary element have breathing room?
- Is secondary content (logos, helper text, extras) shrunk or removed to buy space for what matters?

**Placement** — What appears early in the scan path gets seen first.
- Is the primary message or action in "prime real estate" — top of screen or first in the scan path?
- Is the action placed near the decision moment (close to the information that justifies it)?

**Visualization** — Show, don't tell.
- Is abstract text that could be a visual pattern (progress bar, chart, icon, illustration) still rendered as text?
- Does any metric or status rely on users reading a number when a visual representation would land faster?

**Motion** — Movement grabs attention and confirms change.
- Is motion used to guide attention or confirm a state change?
- Is there motion that exists purely as decoration, distracting from the primary goal?

**Common emphasis mistakes to flag:**
- Wrong dial: the problem is placement or space, but the fix attempted was color
- Weak dial: the adjustment exists but is too subtle to register at a glance
- Screaming dial: multiple dials cranked to max simultaneously — feels aggressive, exhausting

---

### Lens 3: Accessibility — Design for 3 Realities

Accessibility is not compliance — it's designing for every user in every situation. The three realities are permanent limitations, temporary limitations (broken arm, tired), and situational limitations (bright sun, one hand busy, noisy environment). When you design for these, you make the product better for everyone.

**Seven common accessibility mistakes to identify:**
1. **Tiny & close targets** — small touch/click targets or targets placed too close together
2. **Low contrast text** — text that requires squinting to read (body text needs at least 4.5:1 contrast, large text 3:1)
3. **Actions that don't look clickable** — interactive elements that look static
4. **Missing hints** — key actions hidden or not discoverable without guessing
5. **Color-only meaning** — status or state communicated only through color, with no secondary indicator (icon, label, pattern)
6. **Too many patterns in one view** — cognitive overload from inconsistent or competing UI patterns
7. **Assumed knowledge** — copy or flow that assumes the user understands what to do without explanation

**Three accessibility principles to evaluate against:**
- **Visible without searching**: Can the user see the main action without digging, scrolling, or guessing?
- **Operable without precision**: Can the user hit interactive elements easily, even with a thumb, tremor, or fatigue?
- **Actionable without guessing**: Do actions look like actions? Does every interactive element signal that it can be interacted with?

---

### Lens 4: Reward — The Emotional Outcome

Reward is about how the screen makes users *feel* after a meaningful moment — not just points or confetti. Based on Self-Determination Theory, humans are motivated by three core psychological needs. Every key screen should deliver at least one.

Apply the **30-Second Reward Test**: can the screen answer at least one of these three questions?
- *"What's going on — am I safe?"* → **Control**
- *"Am I improving — did I do well?"* → **Competence**
- *"Do others see this — am I recognized?"* → **Recognition**

If the screen can't answer any of them, it will feel emotionally flat even if it's perfectly usable.

**Control** — "I'm safe / certain / in charge"
Three subcategories to check:
- *Safety*: Are there reassurance cues at high-stakes moments (payments, data sharing, irreversible actions)? Guarantees, protection signals, fraud prevention copy.
- *Certainty*: Does the user know what just happened and what happens next? Status indicators, ETAs, confirmations, "what's happening now + what comes next."
- *Agency*: Can the user undo, edit, cancel, or change their mind? Are choices presented, not imposed?

Common Control moments to audit: post-action screens, waiting/processing states, high-stakes inputs, error recovery flows.

**Competence** — "I'm improving / I can do this"
Three subcategories:
- *Completion*: Is there a clear "done" state after a task finishes? Checkmarks, confirmations, "you're all set."
- *Progress*: Is forward momentum visible? Progress bars, step indicators, streaks, "X% complete," "+3 this week."
- *Mastery*: Does the product show users they're getting better? Personal bests, "well done," performance trends, quality scores.

Common Competence moments: task completion, multi-step flows, onboarding, analytics/habit tracking, post-error recovery.

**Recognition** — "My work is seen / I feel valued"
Three subcategories:
- *Acknowledgment*: Is the user's contribution explicitly noticed? Praise, badges, credentials, "verified," shareable proof.
- *Belonging*: Are there cues that the user is part of something? Team/community signals, roles, member status, cohort markers.
- *Reciprocity*: Is there evidence that others responded? Replies, reactions, approvals, "accepted," "assigned."

Common Recognition moments: after publishing/submitting/finishing, social surfaces, team/community spaces, collaboration loops.

**Common reward mistakes to flag:**
- *Wrong reward*: delivering "Congrats!" when the user is anxious (they need Control, not Recognition)
- *Shy reward*: the payoff exists but is invisible — "Saved 1 hour" buried in small gray text, or generic "Success!" with no concrete meaning
- *Over-reward*: fullscreen confetti on a trivial action; reward intensity out of proportion to the moment

---

## Step 3 — Output format

Produce a structured opportunity list. Group by lens, then by screen or flow section within each lens. Sort by impact.

```
## UX Opportunities

### Layout

| # | Screen | Element | Observation | Gestalt Principle | Impact |
|---|--------|---------|-------------|-------------------|--------|
| 1 | [Screen name] | [Specific element] | [What's wrong and why] | Proximity | High |
| 2 | ... | ... | ... | Simplicity | Medium |

### Emphasis

| # | Screen | Element | Observation | Dial | Impact |
|---|--------|---------|-------------|------|--------|
| 1 | [Screen name] | [Specific element] | [What's wrong — which dial, what problem] | Space | High |

### Accessibility

| # | Screen | Element | Observation | Mistake Type | Impact |
|---|--------|---------|-------------|--------------|--------|
| 1 | [Screen name] | [Specific element] | [What's wrong] | Low contrast | High |

### Reward

| # | Screen | Moment | Missing reward | Subcategory | Impact |
|---|--------|--------|---------------|-------------|--------|
| 1 | [Screen name] | [e.g. Post-payment] | [What's absent] | Certainty (Control) | High |

## Top 3 Priorities
[The three changes that would move the needle most. One sentence per item.]
```

Keep observations specific. "The layout feels cluttered" is not an observation. "The three action buttons (Edit, Share, Delete) are the same size, color, and placement — there is no primary action, so the user must decide" is.

---

## What this feeds into

The output of this skill is the layout/emphasis/accessibility/reward section of the master opportunity list used in Steps 3–6 of the product opportunity agent. Write it so a researcher can use it to build interview questions around specific friction points, and a PM can use it to scope design work directly.

---

## References

**Framework source**: C.L.E.A.R. UI framework — Layout, Emphasis, Accessibility, Reward pillars (growth.design)
**Gestalt principles**: Similarity, Proximity, Simplicity, Alignment, Common Region, Continuity
**Emphasis dials**: Size, Color, Space, Placement, Visualization, Motion
**Foggy Glasses / Squint Test**: blur the screen — the most important element should still be obvious
**Accessibility realities**: permanent, temporary, situational — design for all three
**Reward framework**: Self-Determination Theory (Deci & Ryan) — Control, Competence, Recognition
**30-Second Reward Test**: can the screen answer at least one of the three core psychological questions?
**Additional depth**: Don Norman's Design of Everyday Things (affordances, feedback, conceptual models), 10-star experience framework (gap between current and ideal state)
