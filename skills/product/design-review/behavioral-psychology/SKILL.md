---
name: behavioral-psychology
description: >
  Audit any product experience against 8 behavioral psychology levers to identify what's making it
  under-perform. Use when you know something isn't converting, retaining, or activating users and
  you want to diagnose which psychological mechanic is failing or missing. Accepts screenshots, videos,
  flow descriptions, or competitor teardowns. Strong triggers: "behavioral audit", "psychology audit",
  "why isn't this converting", "what behavioral lever is missing", "endowment effect", "cognitive load",
  "defaults", "friction audit", "feedback loops", "what's the psychology behind this", "8 levers",
  "behavioral psychology review". Pair with 15-star-experience for the full critique: star framework
  to establish the ceiling, behavioral audit to find the floor.
---

# Behavioral Psychology Audit

You are auditing a product experience against 8 behavioral psychology levers. Each lever is a specific, well-documented mechanism that drives or blocks user behavior. Your job is not to confirm they're all present — it's to identify which 2-3 are failing hardest and prescribe specific fixes.

**The core formula:** `Adoption = Nudge × (Motivation - Friction)^Satisfaction`

Motivation and Friction each have two components: the promise and anxiety of a new state, AND the frustration and inertia of the existing state. Solutions that only reduce friction often fail because they don't address anxiety about the new state. You need to reduce friction AND reduce the psychological cost of change simultaneously.

---

## Step 1 — Handle the Input

**Screenshots:** Read each image directly. Note the specific screen for each lever finding.

**Videos:** Extract frames and analyze the flow:
```bash
mkdir -p /tmp/bpsych-frames
ffmpeg -i "<video_path>" -vf "fps=0.5" /tmp/bpsych-frames/frame_%03d.png -y
```

**Descriptions only:** Work from the text. Only ask one clarifying question if the specific user action or drop-off point is ambiguous.

---

## Step 2 — Run the 8-Lever Audit

For each lever, identify whether the experience is using it well, underusing it, or actively working against itself. Be specific — point to the exact screen, step, or element.

Score each: 🟢 Working · 🟡 Underused · 🔴 Missing or backfiring

---

### 1. Endowment Effect
*People overvalue things they've built, customized, or put effort into.*

The mechanism: small investment → reward → larger investment. The sequence matters critically. Ask for effort too early (before showing value) and users abandon. Ask for effort after showing value and users justify the outcome through the IKEA effect.

- Is the user asked to invest effort before they see value? If so, that effort is killing conversion, not building ownership.
- Does the experience create early ownership? (customization, naming something, profile personalization, completing a small setup step that feels theirs)
- After value is shown, does the experience give users a natural way to invest more — which they'll then overvalue?

**Score:** 🟢/🟡/🔴
**Finding:** [What's happening with this lever in this experience]

---

### 2. Self-Initiated Triggers
*Users are significantly more likely to act on a trigger they initiated themselves.*

The mechanism: if a user starts a behavior and is interrupted, they'll complete the interrupted part first. The best conversion prompts appear *inside* a user-initiated action — not interrupting one.

- Is the conversion trigger (signup, upgrade, payment) user-initiated or product-initiated?
- Better: user starts typing a comment → login gate appears. Worse: login gate fires on page load.
- Does the product let users partially complete the thing they came to do, then prompt them at the natural gate?
- Is there an opportunity to move any interrupt-based trigger to a self-initiated one?

**Score:** 🟢/🟡/🔴
**Finding:** [What's happening with this lever in this experience]

---

### 3. Status Quo Bias (Defaults)
*The default option is chosen far more often than any alternative — people anchor on what requires no action.*

The mechanism: the path of least resistance defines behavior at scale. If your default leads to the wrong outcome, you're fighting human psychology every time.

- What are the defaults at each decision point in this flow? Name them specifically.
- Does the path of least resistance lead to the desired outcome?
- Where is the product asking users to opt *in* to a good behavior that could be a default instead?
- Where are there choices that could be eliminated by setting a smart default?

**Score:** 🟢/🟡/🔴
**Finding:** [What's happening with this lever in this experience]

---

### 4. Social and Emotional JTBD
*Users aren't just accomplishing functional jobs — they're managing how they feel and how they're seen.*

The three layers:
- **Functional:** What they're literally trying to do
- **Emotional:** How they want to feel while doing it (competent, safe, in control, delighted)
- **Social:** How they want to be perceived — and what they can't afford to be blamed for

- Is the experience designed only around the functional job while ignoring the emotional and social layers?
- What is the emotional job here? Is the experience producing that feeling?
- What is the social job? If this is a B2B product: is the buyer protected from looking bad if this fails?
- Where is there anxiety about the new state that the product hasn't addressed?

**Score:** 🟢/🟡/🔴
**Finding:** [What's happening with this lever in this experience]

---

### 5. Cognitive Load and Decision Paralysis
*Conversion drops sharply with every additional decision point. Too many options = abandonment, not choice.*

Hick's Law: the time to make a decision increases logarithmically with the number of options. Every option you present is a tax on the user.

- How many decisions is the user asked to make before reaching value? Count them.
- Are decisions sequential (one at a time, in order) or simultaneous (choose everything upfront)?
- Better pattern: ask users to select what they like best → show it back → say "we can help with this" → then convert.
- Which decisions could be eliminated by using smart defaults or pre-filling?
- Where is the product showing options the user doesn't need right now (progressive disclosure problem)?

**Score:** 🟢/🟡/🔴
**Finding:** [What's happening with this lever in this experience]

---

### 6. Scarcity and Status Signals
*Scarcity creates urgency. Status requires scarcity to have value. Both only work if they're real.*

- Is there a legitimate scarcity signal that isn't being surfaced? (limited inventory, time window, access tier, capacity)
- Is there a status mechanism — and is it meaningfully differentiated? Status without scarcity is just decoration.
- Is any current scarcity signal manufactured rather than real? Fake scarcity destroys trust immediately upon discovery.
- Where could the product create earned status signals — things users unlock through behavior rather than payment?

**Score:** 🟢/🟡/🔴
**Finding:** [What's happening with this lever in this experience]

---

### 7. Friction Points
*Two types: navigation friction (too many steps) and cognitive friction (too much to think about). They require different fixes.*

Navigation friction → reduce steps, eliminate confirmation screens, open conversion flows in the same tab, don't interrupt the task.

Cognitive friction → reduce options, pre-fill what you know, show users what they need before asking for it, reframe the decision.

- Where in the flow do users drop off? Name the specific step.
- For each drop-off: is it navigational (too many steps) or cognitive (too much to decide)?
- What is the effort required vs. the perceived reward at the moment of friction? Is that ratio positive?
- Rohit's rule: if data disagrees with qualitative feedback on where users struggle, the qualitative feedback is right.

**Score:** 🟢/🟡/🔴
**Finding:** [What's happening with this lever in this experience]

---

### 8. Feedback Loops
*Users need to know their action worked. Absence of feedback creates doubt. Doubt creates abandonment.*

Three types of feedback to audit:

1. **Action confirmation:** Does the experience confirm that what the user did actually happened? Not a spinner — a clear state change: "here's what's different now."
2. **Progress signals:** For multi-step flows, does the user know where they are and how much is left? Step 2 of 4 vs. a blank waiting state.
3. **Negative feedback:** When something goes wrong, is the error kind and specific? ("We couldn't find that address — try entering the city first" vs. "Error 422.")

- Does the experience confirm completion clearly?
- Are there intermediate progress signals throughout the flow?
- How does the experience handle errors? Is the message actionable?
- What happens in edge cases — empty states, zero results, first-time use? Is there guidance?

**Score:** 🟢/🟡/🔴
**Finding:** [What's happening with this lever in this experience]

---

## Step 3 — Output

### The Verdict
2–3 sentences. Name the experience's core psychological failure — not a list, a diagnosis. "This checkout is optimized for option selection when users actually need reassurance that they're not making a mistake. Every lever that could reduce anxiety is absent."

---

### Lever Scorecard

| Lever | Score | Primary Finding |
|---|---|---|
| Endowment Effect | 🟢/🟡/🔴 | |
| Self-Initiated Triggers | 🟢/🟡/🔴 | |
| Defaults | 🟢/🟡/🔴 | |
| Social / Emotional JTBD | 🟢/🟡/🔴 | |
| Cognitive Load | 🟢/🟡/🔴 | |
| Scarcity / Status | 🟢/🟡/🔴 | |
| Friction | 🟢/🟡/🔴 | |
| Feedback Loops | 🟢/🟡/🔴 | |

---

### Top 3 Missed Levers

For each: name the lever, what the experience is missing, and the specific fix.

> **[Lever]**: [What's missing] → [Specific change to make]
>
> Example — **Self-initiated triggers**: The signup modal fires at page load before users have invested anything. → Move the gate to trigger *after* users select their first preference or complete the first onboarding action.

Keep these specific. "Add more social proof" is not a fix. "Add a counter showing how many teams in [user's industry] are already using this — pull it from CRM data and display on the pricing page above the CTA" is a fix.

---

### The One Change
If only one lever gets fixed, which is it? Name the specific change. Not a direction — an action.

---

## Rohit's Principles (embedded reference)

- **Build around what customers already do**, not around the technology.
- **The customer always defines the bug.** If they say it's broken, it is.
- **Service-oriented mindset over product-oriented mindset.** The question is never "did we ship it" — it's "did the customer get the outcome."
- **Meet users where they are.** Don't ask them to change their mental model first.
- **If data disagrees with qualitative feedback on where users struggle, the qualitative feedback is right.**
