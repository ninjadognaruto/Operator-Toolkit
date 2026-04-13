---
name: product-copy-analyzer
description: >
  Analyze product screenshots or videos to identify copy opportunities across headlines, CTAs, microcopy, error messages, empty states, onboarding text, and reassurance copy. Use as Step 2a of the product opportunity agent, or standalone when someone shares a screen and asks "is the copy good?", "why isn't this converting?", "what should this say?", "the copy feels off", "review this flow's messaging", or "where is the copy letting us down?". Always use this skill when copy quality is in question across a product flow — even if the request is framed as a general review.
---

# Product Copy Analyzer

You are analyzing product copy through the lens of the **C from C.L.E.A.R.**: copy answers the question *"Why should I care, right now?"*

Your job is not to rewrite everything. It's to identify where the current copy is failing the user — and produce a prioritized, specific list of copy opportunities that downstream steps can act on.

---

## Step 1 — Handle the input

**Screenshots**: Analyze directly.

**Videos**: Extract frames first:
```bash
mkdir -p /tmp/copy-frames
ffmpeg -i "<video_path>" -vf "fps=1" /tmp/copy-frames/frame_%03d.png -y
```
Sample key moments: entry points, CTAs, confirmations, errors, empty states, transitions.

**Focus area**: If the user specified a screen or flow section, center your analysis there. If not, cover the full visible flow but flag the highest-leverage screens first.

---

## Step 2 — Run the copy audit

Work through every piece of visible text in the flow. For each screen or section, evaluate copy against the six lenses below. Be specific — name the exact element, quote the current copy, and explain what's wrong.

### Lens 1: WIIFM — What's In It For Me?

Every headline, subhead, and CTA should answer this silently for the reader. Ask: does this copy lead with the user's outcome, or with the product's feature?

- **Features masquerading as benefits**: "Smart matching algorithm" vs. "Find vets near you in 30 seconds"
- **Generic value props**: If the same sentence could appear on a competitor's site, it's too vague (Copy Swap Test — remove all logos and ask: could someone else use these words?)
- **CTAs that describe action but not outcome**: "Submit" vs. "Save your profile" vs. "Get my results"
- **Falsifiability test**: Can you prove the claim true or false? Vague claims ("seamless", "powerful", "easy") fail this test. Specific claims pass it.

### Lens 2: Reassurance — Remove Doubt Before It Arises

People hesitate when they have unanswered questions. Look for moments where the user might be thinking: *"Is this safe?", "What happens next?", "Can I undo this?", "How long will this take?"*

- Missing reassurance before high-stakes actions (payments, account creation, data sharing)
- Confirmation states that leave users wondering if something worked
- Error states that explain what went wrong but not how to fix it (structure: what happened + why + how to fix)
- No "you can change this later" / "no commitment required" / "takes 2 minutes" softeners where anxiety is likely

### Lens 3: Clarity — Specific and Action-Oriented

Generic copy forces the user to interpret. Specific copy removes that work.

- **Weak verbs**: "Get started", "Learn more", "Click here" — replace with what actually happens
- **Abstract nouns**: "solutions", "insights", "experience" — replace with concrete outcomes
- **Passive constructions**: "Your request has been submitted" → "We got your request — you'll hear back in 24 hours"
- **Jargon or internal language**: Does any copy assume knowledge the user may not have?

### Lens 4: Brevity — Write With an Eraser

For every block of copy, ask: if I delete this sentence, does anything important break or become unclear? If not, it should go.

- Long blocks of text that users will skim or skip
- Duplicate information appearing in headline + subhead + button (pick one, cut the rest)
- Disclaimer-heavy copy where the real message is buried
- Onboarding screens explaining features instead of helping users take one action

### Lens 5: Human Voice — The Barstool Test

Read the copy out loud. If you'd never say it in a real conversation, it needs rewriting.

- **Brochure language**: "Leverage our platform to unlock powerful synergies" — would you say this to a friend?
- **Corporate softening**: "There may be an opportunity to..." → "You can..."
- **Overly formal tone** in contexts that should feel warm (welcome screens, empty states, success moments)
- **Tone mismatch**: Error copy that's clinical, success copy that's flat, onboarding that feels like a legal document

### Lens 6: Iconic Copy — Memorable and Ownable

The highest standard: copy that could only come from this product. This is aspirational, not a blocker — flag it where the opportunity is clear.

Examples of the pattern: "1000 songs in your pocket" (specific + concrete), "Designed to be deleted" (juxtaposition), "Worn by supermodels in London, dads in Ohio" (contrast/comparison).

Ask: is any headline here sticky enough to remember 5 minutes later? Is there an opportunity to make it more specific, more contrasting, or more concrete?

---

## Step 3 — Output format

Produce a structured opportunity list. Group by screen or flow section. Within each group, list individual copy opportunities sorted by impact (High / Medium / Low).

```
## Copy Opportunities

### [Screen name / flow step]

| # | Element | Current copy | Problem | Lens | Impact |
|---|---------|-------------|---------|------|--------|
| 1 | [e.g. Hero headline] | "[exact current text]" | [Specific diagnosis] | WIIFM | High |
| 2 | [e.g. Primary CTA] | "[exact current text]" | [Specific diagnosis] | Clarity | High |
| 3 | [e.g. Subhead] | "[exact current text]" | [Specific diagnosis] | Brevity | Medium |

### [Next screen]
...

## Top 3 Priorities
[The three changes that would move the needle most, with a one-line rationale for each.]
```

Keep each "Problem" entry specific enough that someone can act on it without needing to ask a follow-up question. "Too generic" is not a problem description. "Value prop leads with the feature (document storage) instead of the outcome (never lose a vet record again)" is.

---

## What this feeds into

The output of this skill is the copy section of the master opportunity list used in Steps 3–6 of the product opportunity agent. Write it so a researcher can use it to generate qualitative interview questions, and a PM can use it to write specs directly.

---

## References

**Framework source**: C.L.E.A.R. UI framework — Copywriting pillar (growth.design)
**Additional depth**:
- UX Writing principles: clarity, concision, consistency, usefulness, human voice
- Copy Swap Test: remove logos, read copy aloud — could a competitor use the same words?
- Falsifiability test: specific claims that can be proven are more trustworthy than vague ones
- Barstool Test: if you wouldn't say it to a friend on a barstool, rewrite it
- Iconic copy pattern: specific + concrete + contrast/comparison = memorable
