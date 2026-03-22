---
name: 15-star-experience
description: >
  Map any product experience against the 15-star framework — building backwards from the absurd ideal
  to diagnose the gap between current state and what's actually possible. Use when reviewing a product
  flow, feature, onboarding, or competitor experience and you want to understand the ceiling before
  critiquing what exists. Strong triggers: "what would the ideal version look like", "10-star experience",
  "15-star experience", "what's the best this could be", "how far is this from great",
  "what would Amazon/Apple do with this", "experience gap", "what would a concierge version look like".
  Pair with behavioral-psychology to identify the specific levers closing the gap.
---

# 15-Star Experience Framework

You are mapping a product experience from the absurd ideal downward to diagnose where it actually sits — and what it would take to move up. The goal is not to critique what exists. The goal is to establish the direction clearly enough that the gap becomes obvious and actionable.

**Why this works:** Most product teams optimize by fixing what's broken. The 15-star framework reorients the question — instead of "what's wrong with this," it asks "what would make this magical" and then works backwards. The gap between 10-star and current state tells you more than any list of bugs.

**Rohit's rule:** "The best experience is too much minus one." Every element should earn its place. Products fail as often by adding too much as by having too little.

---

## Step 1 — Handle the Input

**Screenshots:** Read each image. If there are multiple, identify the flow sequence.

**Videos:** Extract frames to map the full flow:
```bash
mkdir -p /tmp/star-frames
ffmpeg -i "<video_path>" -vf "fps=0.5" /tmp/star-frames/frame_%03d.png -y
```

**Descriptions only:** Work from the text. Only ask a clarifying question if the core user goal is genuinely unclear.

---

## Step 2 — Name the Experience and the User's Job

Before building the star map, be precise about:

**The experience under review:** What is this flow/feature/product trying to do? One sentence.

**The user's job (JTBD):** What is the user actually trying to accomplish — in their terms, not the product's terms? Name all three layers:
- Functional: the practical thing they're trying to do
- Emotional: how they want to feel
- Social: how they want to be perceived / what they don't want to be blamed for

The star framework only works if it's anchored to the user's actual job. A 15-star experience for the wrong job is just a distraction.

---

## Step 3 — Build the Star Map

Map each level specifically to this experience. Don't use generic descriptions — name what each level looks like for this exact product and user.

### ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 15-Star
Physically or economically impossible. Science fiction. But it reveals the direction and tells you the emotional endpoint.
> "The product solves the problem before you know you have it. No decision required. The outcome arrives."

*Example for expense reporting:* Your expenses are filed, approved, and reimbursed before you land from the flight.

### ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10-Star
Delightful and possible. Not built yet, but someone could build it. This is the goal.
> "The product understands your context and acts on your behalf. You verify, not decide."

*Example for expense reporting:* Your receipts are auto-captured, categorized, submitted, and a draft approval is waiting when you open the app.

### ⭐⭐⭐⭐⭐ 5-Star
Good. Well-executed version of the current paradigm. Polished, thoughtful, no real friction.
> "A well-designed form, sensible defaults, clear steps, instant confirmation."

### ⭐⭐ Current State
Where the product actually is. Be honest. Don't round up.

### ⭐ 1-Star
What failure looks like. Useful anchor — it clarifies the floor.

---

## Step 4 — Identify the Gap

Three things to name:

**1. The gap level:** What star would you give the current experience, and what star is realistically achievable in 1-2 product cycles?

**2. The gap dimension:** Where does the biggest distance live? Choose the primary one:
- **Speed** — the product is too slow relative to expectation
- **Personalization** — the experience is generic where it could know more
- **Effort required** — the user is doing work the product could do
- **Feedback loops** — the user doesn't know what happened or what to do next
- **Emotional resonance** — functional but cold; doesn't make users feel good about the outcome
- **Trust** — users are uncertain about whether the product is reliable or has their interests at heart
- **Information architecture** — things are hard to find, steps are in the wrong order, context is missing

**3. The subtraction opportunity:** What is currently in the experience that shouldn't be? The best upgrade is often removal, not addition. Name 1-3 specific elements.

> **The subtraction test:** Would removing this element make the experience worse? If the answer is "not really" — cut it.

---

## Step 5 — Output

### The Verdict
2–3 sentences. Name the experience's current star level, its gap dimension, and the single biggest distance between now and 10-star. Be direct.

---

### Star Map

| Level | What It Looks Like For This Product |
|---|---|
| ⭐×15 — Impossible | |
| ⭐×10 — The Goal | |
| ⭐×5 — Good | |
| ⭐×2 — Current | |
| ⭐×1 — Failure | |

---

### The Gap

**Current rating:** [X-star] — [one sentence justification]

**Gap dimension:** [primary dimension] — [one sentence on why this is the main distance]

**Realistic next state:** What would a [X+2]-star version of this experience look like, built with current tech in a normal product cycle?

---

### Subtraction List

What to cut. 1–3 specific elements with a one-line reason for each.

| Element | Why it should go |
|---|---|
| | |

---

### The One Move
If one change moved this experience from current state toward 10-star, what is it? Not a list. A call. Be specific enough that a designer could act on it tomorrow.

---

## Pairing Note

This skill diagnoses the gap and direction. **`behavioral-psychology`** identifies the specific levers that are underperforming to create that gap. Run both for a full critique — star framework first to establish the ceiling, then behavioral audit to find the floor.
