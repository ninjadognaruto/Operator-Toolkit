---
name: psych-journey
description: >
  Map a user journey as a Psych curve — plotting how Motivation × Ability rises and falls across
  each key interaction — then apply the 4 improvement tactics to prioritize what to fix.
  Use when reviewing a multi-step flow (onboarding, checkout, activation, feature adoption) where
  you suspect Psych is dropping at specific points, or when you want to understand the emotional
  arc of a user experience before redesigning it.
  Accepts: multiple screenshots of sequential screens, a video walkthrough, or a flow description.
  Strong triggers: "map this journey", "psych curve", "where is Psych dropping", "journey map",
  "emotional arc", "onboarding review", "activation flow", "why do users drop off in this flow",
  "psych framework", "plot the journey". Pair with fogg-bmap for point-in-time behavior diagnosis
  and bias-audit for screen-level System 1 issues within the same flow.
---

# PSYCH Journey Mapping

You are mapping a user experience as a Psych curve. **Psych = Motivation × Ability** — it's the composite measure of a user's readiness and willingness to continue. Every interaction either adds or subtracts Psych. When Psych drops below zero (the "activation threshold"), users abandon.

**The strategic insight:** Most product teams optimize for feature completeness. Psych mapping optimizes for emotional readiness at each moment — which is what actually drives completion rates, retention, and habit formation.

**The 4 improvement tactics (always applied in this order):**
1. **Mark** the 🏁 Transitions — celebrate key milestones so users know they've made progress
2. **Elevate** the ⛰ Peak — make the highest-Psych moment even better; it anchors the memory of the experience
3. **Fill** the biggest 🕳 Pit — the lowest-Psych moment is where abandonment happens; fix this first
4. **Reorder** steps — use hyperbolic discounting: deliver a smaller reward now rather than a bigger one later

---

## Step 1 — Handle the Input

**Multiple screenshots:** Treat each screen as a moment in the journey. If the user provides them in order, label them 1–N. If unlabeled, infer the sequence from the design.

**Video:** Extract frames at key transition points:
```bash
mkdir -p /tmp/psych-frames
ffmpeg -i "<video_path>" -vf "fps=0.5" /tmp/psych-frames/frame_%03d.png -y
```
Use 0.5fps (one frame every 2 seconds) for a full flow walkthrough — this captures each distinct screen. Then select the 5–8 most meaningful moments: entry point, key actions, moments of friction or delight, and the end state.

**Description only:** Work from the text. Ask one clarifying question only if the sequence of events or the user's emotional context at entry is unclear.

---

## Step 2 — Establish the Starting State

Before mapping moments, establish two things:

**Starting Psych:** What level of Motivation × Ability does the user arrive with? This depends on context:
- User just signed up because a friend referred them → High Psych (motivated, curious)
- User was auto-redirected here after an error → Low Psych (frustrated, suspicious)
- User is returning after abandoning mid-flow → Medium-Low Psych (vaguely interested, previously blocked)

**User's goal:** What is the user actually trying to accomplish? Not the product's goal — the user's goal. These often differ. Mapping Psych without knowing the user's goal produces inaccurate readings.

---

## Step 3 — Identify the 5–6 Key Moments

**Don't map every screen.** Distill the journey to its 5–6 most meaningful moments. A good Psych map omits the mundane steps and highlights the moments where emotional state actually changes.

For each moment, classify it as one of five types:

| Type | Symbol | Definition |
|---|---|---|
| **Peak** | 🏔 | The single highest absolute Psych level in the journey. The moment of maximum engagement, delight, or "this is worth it" clarity. |
| **Pit** | 🕳 | The single lowest absolute Psych level. Where abandonment is most likely. Usually involves friction, confusion, or a demand that outpaces current Psych. |
| **Jump** | 🌈 | A moment where Psych measurably increases. Could be a reward, a revelation, a moment of progress, or friction removed. |
| **Drop** | 💧 | A moment where Psych decreases. Usually friction, an unexpected ask, a confusing step, or a delay. |
| **Transition** | 🏁 | A milestone boundary — the start or end of a meaningful phase. Examples: completing signup, making first payment, sending first message. |

---

## Step 4 — Map the Journey

Build the Psych map as a table. For each moment, assess both the Motivation contribution (which of the 3 BMAP motivators is active?) and the Ability state (which resource is being taxed?).

| # | Moment / Screen | Type | Psych Direction | M Lever Active | A Barrier | Notes |
|---|---|---|---|---|---|---|
| 1 | [Entry point] | 🏁 Transition | Starting state | | | |
| 2 | [First meaningful action] | 🌈 Jump / 💧 Drop | +/- | Sensation / Anticipation / Belonging / None | Time / Mental / Routine / None | |
| 3 | [Next key moment] | | | | | |
| 4 | [Moment of highest friction or highest reward] | 🕳 Pit / 🏔 Peak | | | | |
| 5 | [Approaching end] | | | | | |
| 6 | [End state / success moment] | | | | | |

**Psych direction guidance:**
- 🌈 Jump triggers: friction removed, reward delivered, social proof shown, milestone acknowledged, unexpected delight, value made visible
- 💧 Drop triggers: unexpected ask, form with more fields than expected, loading delay, error state, jargon, required account creation before value, cognitive overload
- Be honest. Don't mark a step as neutral if it's likely a Drop — most product flows have more Drops than they acknowledge.

---

## Step 5 — Identify What to Fix

**Find the Pit.** The Pit is the non-negotiable first fix — it's where you're losing the most users. What's causing it? Classify:
- Motivation collapse (nothing in the experience is fueling the drive to continue)
- Ability barrier (the ask exceeds current capacity — time, mental load, money, unfamiliarity)
- Prompt failure (no signal to act, or the prompt is firing at the wrong moment)
- Wrong sequencing (the right thing is asked at the wrong time)

**Find the Peak.** What's the high point? Is it strong enough to anchor the memory of the whole experience? Research (Kahneman's Peak-End Rule) shows users remember experiences by their Peak and their ending — not the average. If the Peak is weak, the whole journey feels mediocre in memory even if most steps were fine.

**Check Transitions.** Are milestones marked? When a user crosses a meaningful threshold (first value delivered, onboarding complete, first habit formed), is it celebrated? Unmarked transitions waste Psych — users did hard work and got nothing for it emotionally.

**Identify the reorder opportunity.** Is there a step that's currently late in the journey but delivers high Psych? Moving it earlier (hyperbolic discounting) — giving a smaller reward now rather than a bigger one later — often has outsized impact on completion rates.

---

## Step 6 — Output

### The Psych Arc
Describe the emotional shape of this journey in 2–3 sentences. Does Psych build, peak, then crash? Does it start high and immediately drop? Is it flat and forgettable? Name the shape before you go into recommendations.

---

### Journey Map

[Table from Step 4]

---

### The 4 Tactics Applied

**① Mark the Transitions 🏁**
Which transitions are currently unmarked? What should happen at each one? Be specific: "At the end of onboarding, instead of redirecting silently to the dashboard, show a brief '3 things you unlocked' summary before proceeding."

**② Elevate the Peak 🏔**
Where is the Peak? Is it strong enough? What specific change would make it better? Consider: more visual celebration, making the value more tangible, adding social reinforcement, or extending the moment's duration slightly.

**③ Fill the Pit 🕳**
Where is the Pit? What's causing it? What is the specific fix? Classify the root cause (motivation, ability, prompt, sequence) and prescribe the matching intervention.

**④ Reorder 🔀**
Is there a later step that currently delivers high Psych that could be moved earlier? If so, what's the new sequence — and what's the expected impact on completion at the current Pit?

---

### Priority Call
Apply all 4 tactics in order, but name which one will have the biggest impact for this specific journey. If filling the Pit saves 30% of users who currently abandon, that's the one. If the Peak is so weak that users don't remember the experience positively enough to return, that might be the one. Make the call.

---

### Psych Math Check
A final calibration: at the end of the journey (for users who complete it), are they leaving with net positive or net negative Psych? If it's net negative even for completers, retention is going to be hard regardless of conversion rate. Name this explicitly.

---

## Rohit's Principles (embedded reference)

- **Screens tell you what. Journeys tell you why.** Don't optimize the screen until you understand where it sits in the Psych arc.
- **The Peak-End Rule applies.** Users remember their peak moment and their final moment — not the average. A strong ending with a weak Peak still feels mediocre.
- **Motivating users is as important as reducing friction.** Most teams default to friction reduction. Don't forget that a user with enough Motivation will tolerate significant friction — and a frictionless experience with no Motivation still fails.
- **Hyperbolic discounting is real.** Users prefer a smaller reward now over a larger reward later. Every time you're about to make users wait for value, ask if you can give them a smaller version of it immediately instead.
- **The Pit is where you're losing people.** Fix that before anything else.
