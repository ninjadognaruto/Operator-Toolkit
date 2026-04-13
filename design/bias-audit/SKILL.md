---
name: bias-audit
description: >
  Apply the BIAS framework (Block → Interpret → Act → Store) to audit any screen or interface
  for System 1 cognitive optimization. Use when evaluating a specific screen, UI element, or
  interaction for attention, comprehension, and action — especially when you suspect users aren't
  noticing the right things, misunderstanding the interface, or failing to take an expected action.
  Accepts screenshots or videos. Strong triggers: "what does the brain see first", "BIAS audit",
  "cognitive review", "System 1 check", "why isn't this being noticed", "attention audit",
  "why aren't users clicking this", "screen-level review", "perception audit".
  Pair with fogg-bmap when you know what behavior you want but can't get it — BIAS tells you
  whether the interface is blocking the behavior before it even starts.
---

# BIAS System 1 Audit

You are auditing an interface for System 1 performance. System 1 is automatic, instinct-driven, and operates before the user consciously decides anything. If the interface fails at the System 1 level, no amount of clever copy or good motivation will save it — users will literally not register what you're trying to show them.

**The BIAS framework maps the System 1 cognitive sequence:**
- **B → Block:** What does the brain filter out before anything else is processed?
- **I → Interpret:** Of what's not filtered, what does the brain make of it?
- **A → Act:** Does the interface make the target action easy enough to take?
- **S → Store:** What impression does this interaction leave, and does it build positive psych?

Each stage feeds the next. Failing at Block means the user never gets to Interpret. Failing at Store means the next BIAS loop starts with lower Psych than the last.

---

## Step 1 — Handle the Input

**Screenshots:** Read each image directly. Note the image path — you'll use it for annotation.

**Videos:** Extract frames first, then identify the 2–4 key screens that matter most:
```bash
mkdir -p /tmp/bias-frames
ffmpeg -i "<video_path>" -vf "fps=1" /tmp/bias-frames/frame_%03d.png -y
```
For the BIAS audit, focus on the screen(s) where the target action is expected. If the video shows a multi-step flow, identify the screen with the most friction and anchor your audit there.

**Check actual image dimensions before annotation:**
```bash
python3 -c "from PIL import Image; img = Image.open('<image_path>'); print(img.size)"
```

---

## Step 2 — Define What You're Auditing For

Before running the framework, establish:

1. **Target action:** What specific action should the user take on this screen?
2. **Key information:** What is the most important thing the user needs to understand?
3. **Psych starting state:** Is the user arriving with high or low Psych? (e.g., they just hit an error = low; they just completed a milestone = high)

These shape the audit. A screen optimized for a high-Psych user who's excited to act needs different fixes than one designed for a skeptical user who's already frustrated.

---

## Step 3 — Run the BIAS Audit

### B — Block

The brain automatically filters. First understand what's being filtered out — then understand what's capturing attention instead.

**What the brain blocks:**

- **High-effort elements** — Anything cognitively demanding is deprioritized. Long paragraphs, dense options, unfamiliar UI patterns, too many choices (Hick's Law). Flag anything that requires real thinking to parse.
- **Unrelated content** — Content that doesn't match the user's current goal is screened out (selective attention). Are there elements on screen that don't connect to the user's intent at this moment?
- **Redundant patterns** — Elements that look like ads, appear in the same position every time, or follow familiar "ignore me" patterns (banner blindness). Sidebars, top banners, persistent popups, and "recommended" sections all suffer from this.

**What breaks through the filter (by design or accident):**

- **Primed content** — Things related to what the user just saw or did are easier to notice. Is there a continuity of focus from the previous screen?
- **Confirmation bias attractors** — Elements that match what the user already believes or wants to hear. Is the copy aligned with the user's existing mental model?
- **Pattern breaks** — Anything unexpected, personalized, animated, or visually distinct grabs attention. Is the key element differentiated enough? Or is the wrong element being most distinctive?

**Block audit findings:** List 1-3 elements likely being blocked, and 1-2 that are breaking through (correctly or incorrectly).

---

### I — Interpret

Of what's not blocked, what does the brain make of it? This is about framing, reference points, and comprehension — not rational analysis. Users don't read interfaces, they scan and match patterns.

Audit against these 7 interpretation levers:

| Lever | Question | Pass / Fail |
|---|---|---|
| **Familiarity** | Are existing patterns being reused? Does this look like things the user has seen before? | |
| **Cognitive Load** | Is the noise around critical information minimal? Can a user scan and land on the key thing in 3 seconds? | |
| **Benefits framing** | Is the information framed around what's in it for the user, not features or process? | |
| **Anchoring** | Is there a reference point that helps users contextualize the value? (comparison, before/after, social benchmark) | |
| **Loss Aversion** | Is the cost of inaction surfaced? Does the user understand what's at stake if they don't act? | |
| **Discoverability** | Are key elements visually prominent? Could a new user find the important thing without being told where to look? | |
| **Labor Illusion** | If there's work happening behind the scenes, is it shown? (progress indicators, "we found X for you" signals) | |

**Interpret audit findings:** Name the 1-2 levers that are most broken. What is the user likely concluding about this screen that you don't want them to conclude?

---

### A — Act

The user noticed the right things and understood them correctly. Now: does the interface make acting easy?

**Friction reduction — check all that apply:**

- **Choices removed:** How many options does the user see at this decision point? More than 3-4 is usually too many. Is there a clear primary action vs. secondary actions?
- **Valid defaults:** Does the interface have smart defaults that require zero input to proceed? What happens if the user just hits "continue" without changing anything?
- **Split steps:** Is a complex action broken into smaller sequential pieces, or is the user asked to do everything at once?
- **Progressive disclosure:** Are all features visible at once, or is advanced functionality hidden until needed?

**Nudges — check which are present:**

- **Social proof:** What are others doing? Showing peer behavior is one of the fastest trust shortcuts.
- **Curiosity gap:** Is there a partially-revealed piece of information that creates enough tension to drive action?
- **Scarcity:** If there's real scarcity (limited spots, time window, inventory), is it surfaced? (Only flag real scarcity — fake scarcity backfires.)

**Act audit findings:** What is the primary friction point preventing action? Navigational (too many steps) or cognitive (too much to decide)?

---

### S — Store

Every interaction leaves a mark. Users keep an internal tab of their cumulative experience with a product. What this screen stores determines how they'll Block, Interpret, and Act in the next session.

Audit the four Store levers in order of impact:

1. **Clear feedback** — After the user takes action (or even while they're deciding), is it clear what just happened? Not a spinner — a confirmation that the state changed and here's what changed. Score: ✅ / ⚠️ / ❌

2. **Reassurance** — Does the experience confirm the user is making the right call? Are there signals that they're in good hands, that the product is competent, that they won't regret this? Score: ✅ / ⚠️ / ❌

3. **Feeling of caring** — Does the interface communicate that it has the user's interests at heart — not just the business's? This often shows in microcopy, error handling, and the presence of helpful alternatives when something fails. Score: ✅ / ⚠️ / ❌

4. **Delighters** — Is there anything that exceeds expectation? An unexpected confirmation message, a personalized touch, a piece of useful information they didn't ask for but needed? Score: ✅ / ⚠️ / ❌

**Store audit findings:** What Psych is this user leaving with? Higher or lower than when they arrived?

---

## Step 4 — Annotate the Screen

Use the existing annotation script to mark up the screenshot(s) with BIAS findings.

**Annotation labeling convention:**
- Label format: `"[Stage]: [Issue]"` — e.g., `"B: Banner blindness"`, `"I: No anchor"`, `"A: Too many choices"`, `"S: No confirmation"`
- Severity: `"red"` = critical failure at this stage, `"yellow"` = partial issue
- Number each annotation to match your recommendations

**Run the annotation:**
```bash
python3 <path_to>/product/design-review/don-norman-review/scripts/annotate.py \
  "<image_path>" \
  '[{"number":1,"x1":NNN,"y1":NNN,"x2":NNN,"y2":NNN,"severity":"red","label":"B: Banner blindness"}, ...]' \
  "/sessions/gifted-compassionate-franklin/mnt/skills/bias-annotated-<screenname>.png"
```

After generating, show the image immediately using the Read tool and provide a computer:// link:
```
[View: BIAS Audit — Screen Name](computer:///sessions/gifted-compassionate-franklin/mnt/skills/bias-annotated-<screenname>.png)
```

Show annotated image(s) before writing the review.

---

## Step 5 — Write the Audit Output

### Quick Verdict
2–3 sentences. Which BIAS stage is failing hardest, and what is the likely consequence for user behavior? Be direct.

---

### BIAS Stage Scorecard

| Stage | Score | Primary Finding |
|---|---|---|
| **Block** | 🟢/🟡/🔴 | What's being filtered that shouldn't be / what's breaking through that shouldn't |
| **Interpret** | 🟢/🟡/🔴 | What is the user likely concluding incorrectly |
| **Act** | 🟢/🟡/🔴 | What is the primary friction stopping action |
| **Store** | 🟢/🟡/🔴 | What Psych is the user leaving with |

---

### Top 3 Fixes

Format each as:

> **[Stage] — [Issue title]**: [What's wrong] → [Specific change to make]
> Example: **Block — Wrong element wins attention**: The red promotional banner is the most visually prominent element, but the primary CTA is grey and below the fold. → Make the CTA the most visually distinctive element on the page. Demote or remove the banner.

---

### The One Change
If only one fix happens, what is it? Name it precisely.

---

### Psych Delta
State whether this screen is adding or subtracting Psych from the user's running tab — and by how much (rough estimate: small/significant/severe). This connects back to the PSYCH journey map if running that skill in parallel.

---

## Tone

Flag real failures. Don't soften "this screen is broken at the Block stage and users will never see the CTA" into "there may be some discoverability opportunities." Name what's happening and what to do about it.
