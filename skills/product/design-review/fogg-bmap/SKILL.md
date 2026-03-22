---
name: fogg-bmap
description: >
  Apply BJ Fogg's B=MAP behavior model to diagnose why a target behavior isn't happening.
  Use when a specific action or conversion isn't occurring and you need to pinpoint whether the
  failure is in Motivation, Ability, or the Prompt. Accepts screenshots, videos, or flow descriptions.
  Strong triggers: "why aren't users doing X", "diagnose this drop-off", "why isn't this converting",
  "BMAP analysis", "Fogg model", "behavior diagnostic", "what's stopping users from acting".
  Also use when designing a new behavior into a flow and you want to validate the MAP conditions are met.
---

# BMAP Behavior Diagnostic

You are applying BJ Fogg's B=MAP model: **Behavior = Motivation × Ability × Prompt**. All three must converge at the same moment for behavior to occur. Your job is to diagnose which element is failing — and then prescribe the specific fix.

**The core insight:** Before adding more motivation (which users resist), make the behavior simpler. Ability is almost always the faster lever. But if simplicity is already high, the problem is usually the Prompt timing or the wrong Motivation driver.

**The activation threshold:** Motivation and Ability trade off against each other on a curve. High motivation compensates for low ability and vice versa. If M × A places a user below the threshold, even a perfect prompt won't produce behavior. Your job is to find which side of the equation is dragging them under the threshold.

---

## Step 1 — Handle the Input

**Screenshots:** Read each image directly and note which screen represents which moment in the flow.

**Videos:** Extract frames first, then analyze the flow:
```bash
mkdir -p /tmp/bmap-frames
ffmpeg -i "<video_path>" -vf "fps=1" /tmp/bmap-frames/frame_%03d.png -y
```
Sample key frames that represent each major step. Focus on the screen where the target behavior is expected to occur.

**Descriptions only:** Work from the text, but ask one clarifying question if the target behavior or user context is ambiguous.

---

## Step 2 — Define the Target Behavior

Before any analysis, be precise about what behavior you're diagnosing. Name it specifically:

> "The target behavior is: [user clicks X / user completes Y / user returns to do Z]"

Vague behaviors produce vague diagnoses. "User engages more" is not a target behavior. "User sends their first message within the first session" is.

---

## Step 3 — Motivation Audit

Fogg identifies three core motivators. For each, assess whether the current design is activating it — and if so, how well.

**Sensation (Pleasure/Pain)**
The user seeks pleasure or avoids pain from the immediate experience itself.
- Is there a reward signal that fires on completion? (achievement, visual celebration, progress bar filling)
- Is loss aversion surfaced? (what they're missing, what's at risk if they don't act)
- Are gamification mechanics present and meaningful — or just decorative?
- Verdict: 🟢 Active / 🟡 Partial / 🔴 Missing

**Anticipation (Hope/Fear)**
The user is motivated by what completing this behavior will lead to — a future state they want or dread.
- Is there a clear, tangible picture of the "after" state? (storytelling, outcome preview, before/after framing)
- Is hope used ethically — pointing to intrinsic goals the user already has?
- Is scarcity or urgency present — and is it real, not manufactured?
- Is there curiosity being created that only action can resolve?
- Verdict: 🟢 Active / 🟡 Partial / 🔴 Missing

**Belonging (Acceptance/Rejection)**
The user is motivated by social acceptance, status, or fitting in.
- Is there social proof showing what others have done in this situation?
- Does the experience signal that doing this behavior is the norm (not deviant)?
- Is there a reciprocation dynamic? (something given first that creates felt obligation)
- Does the experience reinforce the user's identity or status?
- Verdict: 🟢 Active / 🟡 Partial / 🔴 Missing

**Motivation matching check:** Are you asking users to do something they don't already want to do? If so, you cannot simply layer on motivation — you need to reframe the behavior to align with existing motivation waves.

---

## Step 4 — Ability Audit

Ability = how simple the behavior is to perform. Fogg's rule: **simplicity is a function of the scarcest resource at the moment the behavior is prompted.** Find the weakest link.

For each factor, score it: ✅ Not a barrier · ⚠️ Partial barrier · ❌ Primary barrier

| Ability Factor | Score | Evidence from the design |
|---|---|---|
| **Time** — Does the behavior require more time than the user has? | | |
| **Money** — Does it require a financial commitment at this moment? | | |
| **Physical Capacity** — Is there any physical effort required that could block action? | | |
| **Mental Capacity** — How much cognitive load does this step require? Options, decisions, unfamiliar concepts? | | |
| **Practice/Routine** — Is this behavior familiar or is it asking the user to do something non-routine? | | |

**Identify the weakest link:** Which factor is making this behavior hardest to perform right now? That's the one to fix first — not all of them.

**Ability multipliers to check:**
- Limited choice (Hick's Law) — are there too many options at this decision point?
- Tunneling — is the user's path clear, or are there visible exits?
- Chunking/Sequencing — is a complex behavior broken into digestible pieces?
- Recognition over Recall — can users select from options rather than having to remember?
- Pre-filling / Smart defaults — can the system do work the user would otherwise need to do?

---

## Step 5 — Prompt Audit

Without a prompt, behavior does not occur — even when M × A is high. Three types:

**Spark** — User has ability but lacks motivation. The prompt must motivate.
- Is it using a relevant motivator (sensation/anticipation/belonging)?
- Is it timed when the user is in a motivation wave, not just on a schedule?

**Facilitator** — User has motivation but lacks ability. The prompt must make it easier.
- Does it convey "this is easy"? Does it remove the ability barrier in the prompt itself?
- Is it appearing when the user is already trying to act but hitting friction?

**Signal** — User has both motivation and ability. The prompt just needs to remind.
- Is it simple, clear, and non-intrusive?
- Does the user recognize it immediately as cue-to-action?

**Prompt timing check:**
- Is the prompt firing when M × A is above the threshold? (Not too early, not too late)
- Is the user's motivation wave active at the moment of the prompt?
- Does the prompt correlate with a user-initiated action, or is it interrupting?

**Common prompt failures:**
- Spark prompt firing when user has no ability (creates frustration)
- Facilitator prompt firing when user has no motivation (ignored or annoying)
- Signal prompt firing at wrong moment (no motivation wave active)
- No prompt at all — assuming users will self-initiate at the right moment

---

## Step 6 — MAP Diagnosis

Identify where this user sits on the activation threshold graph:

```
HIGH
  |           [Above threshold: prompt → behavior]
M |    *
O |         *
T |              * ← activation threshold curve
I |                   *
V |                        *
  |___[Below threshold: prompt → frustration/annoyance]
LOW
    LOW -------- ABILITY -------- HIGH
```

**Diagnosis options:**
- **High M, Low A** → User wants to act but can't. Fix: Facilitator prompt + Ability reduction.
- **Low M, High A** → User can act but doesn't want to. Fix: Spark prompt + Motivation activation.
- **Low M, Low A** → Neither present. Fix: Start with Ability (it's faster) + verify motivation matching.
- **High M, High A, No Prompt** → Classic missed conversion. Fix: Add the right prompt at the right moment.
- **High M, High A, Wrong Prompt** → Prompt is the wrong type or timed wrong. Fix: Match prompt type to current MAP state.
- **Motivation wave mismatch** → Users have motivation at certain moments but the product isn't there. Fix: Identify the wave trigger and build toward it.

---

## Step 7 — Output

### Behavior Diagnostic

**Target behavior:** [one precise sentence]

**MAP Position:** Where is this user on the activation threshold? One sentence diagnosis.

---

### The Bottleneck

Name the single biggest failure: Motivation (which driver?), Ability (which factor?), or Prompt (which type is wrong/missing?). Don't list all three as equal problems — make the call.

---

### Interventions

Ranked by impact-to-effort:

| Priority | Intervention | MAP Element | Effort | Expected Impact |
|---|---|---|---|---|
| 1 | | M / A / P | Low/Med/High | |
| 2 | | M / A / P | Low/Med/High | |
| 3 | | M / A / P | Low/Med/High | |

For each intervention, be specific. Not "improve motivation" but "add a 3-sentence outcome preview before the CTA showing what the user's dashboard will look like after setup."

---

### The One Change

If only one intervention happens, which is it? Specify it precisely.

---

## Rohit's Principles (embedded reference)

- **Fix Ability before adding Motivation.** Users resist motivation attempts. They don't resist things getting easier.
- **Match your behavioral goal to what users already want to do.** You can't create motivation from scratch — you redirect existing motivation waves.
- **Motivation waves are temporary.** When a user is in one, prompt them to do the hard thing. When it's gone, prompt only simple behaviors.
- **The scarcest resource wins.** Don't optimize for everything — find the weakest link in the ability chain and fix that first.
- **A prompt at the wrong moment is worse than no prompt.** Spark prompts on low-motivation users create resentment. Facilitator prompts on low-ability users create frustration. Time them right or don't fire them.
