# ux-copy-review

**Skill name:** ux-copy-review

**Purpose:** UX + Copy specialist review using the C.L.E.A.R. framework and 5 copy lenses. Scores layout, emphasis, accessibility, reward mechanics, and copy quality. Produces specific rewrites and friction points.

**Use when:**
- "Review the copy on this screen"
- "Is the UX copy good?"
- "C.L.E.A.R. review"
- "Copy audit"
- "What's wrong with the messaging?"
- "Why isn't this converting?"
- Called automatically as Phase 8 of `designer-audit.md`

**Output:** C.L.E.A.R. scores (A-F), per-lens copy audit, up to 3 copy rewrites, up to 3 UX friction points.

---

## Input

Accepts any of:
- **URL** → use Claude in Chrome to navigate, screenshot, inspect
- **HTML file** → read source, render if needed, screenshot
- **Screenshot** → visual-only review (no programmatic extraction)

If called from `designer-audit.md`, the target is already loaded — use the same context.

---

## C.L.E.A.R. Framework

Score each dimension A-F. Be opinionated — designers don't hedge.

### C: Clarity
- Is information hierarchy clear? (Primary info first, secondary grouped)
- Is the call-to-action unmistakable?
- Are labels, buttons, and instructions unambiguous?
- Can a first-time user understand what to do without reading documentation?

### L: Layout
- Is the layout intentional? (Not cluttered, not sparse)
- Do related elements group together? (Gestalt proximity)
- Is whitespace used to separate distinct sections?
- Does the layout guide the eye in a predictable path?

### E: Emphasis
- What is the main focal point? Is it the right one?
- Are primary elements visually prominent?
- Is there visual distinction between primary/secondary/tertiary actions?
- Does the visual weight match the importance weight?

### A: Accessibility
- Is color not the only way to encode information?
- Are font sizes legible (>=16px body)?
- Is text contrast sufficient (>=4.5:1 for normal text, >=3:1 for large text)?
- Are interactive elements keyboard-navigable?
- Are touch targets >=44px?

### R: Reward
- Does the interface feel responsive? (Visual feedback on interaction)
- Are loading states clear and non-jarring?
- Does success feel rewarding? (Toast, animation, confirmation, progress)
- Is there a sense of momentum or progress through the flow?

---

## Copy Analysis (5 Lenses)

For each piece of copy (headlines, CTAs, labels, error messages, empty states, onboarding text, confirmation dialogs):

1. **WIIFM** (What's In It For Me) — Does the user understand the benefit immediately? Or is it about the product, not the user? Turn features into clear benefits: what will be easier, faster, or less stressful after they click?
2. **Reassurance** — Is there social proof, guarantees, safety language, or confidence-building? Especially important near forms, payments, and irreversible actions. Get ahead of fears before they arise — "You can change this later", "No prep needed."
3. **Brevity** — Is copy concise? Every word earning its place? No filler ("in order to," "please note that," "it is important to"). Great copy is mostly editing — for each sentence, ask: if I delete this, does anything important break?
4. **Human Voice** — Is the tone conversational, not robotic? The Barstool Test: imagine explaining this to a friend at a bar. If it sounds like a brochure, rewrite until it sounds natural and honest.
5. **Iconic Copy** — Is any phrase memorable or quotable? Criteria: get it in 2 seconds, use juxtaposition or comparison, competitor can't use the same words. Examples: "1000 songs in your pocket" (Apple), "The dating app designed to be deleted" (Hinge).

### Copy Quality Tests

Run these after the 6-lens audit:

- **The Copy Swap Test**: Remove all logos and visuals. Read the copy out loud. Could a competitor use the same words on their site? If yes, it's too vague.
- **The 3 Mistakes Check**: Is any copy (1) too long — would a wall of text get skimmed? (2) too generic — no specific benefit or outcome? (3) duplicated — repeating information already shown elsewhere on screen?
- **Write With an Eraser**: Do a pass removing as many words as possible. For each sentence: if I delete this, does anything important break or become unclear? If not, cut it.

---

## Workflow

### Step 1: Capture

Take a screenshot (or use the provided one). Note:
- What your eye goes to first, second, third
- Your immediate emotional reaction
- Any copy that feels off, even before formal analysis

### Step 2: C.L.E.A.R. Scoring

Walk each dimension. Score A-F. Write 1-2 sentence justification per score. Be specific — "CTA visible but label vague" beats "mostly clear."

### Step 3: Copy Audit

For each piece of visible copy, run the 5 lenses. Focus on:
- **Headlines** — the first thing users read
- **CTAs** — the thing you want them to click
- **Error messages** — the thing they see when something breaks
- **Empty states** — the thing they see before they have data
- **Microcopy** — labels, tooltips, helper text, placeholders

Don't audit every string. Focus on the 3-5 pieces of copy with the highest impact on user behavior.

### Step 4: Rewrites

For each problematic piece of copy, provide a specific rewrite. Format:

```
**Original:** "Submit"
**Problem:** Generic. User doesn't know what happens next.
**Rewrite:** "Start my free trial"
**Why:** Tells the user what they get, not what the system does.
```

Maximum 3 rewrites. Pick the highest-impact ones.

### Step 5: UX Friction Points

Identify up to 3 moments where the UX creates unnecessary friction. These are interaction-level issues, not copy issues:
- Form doesn't validate in real-time
- No loading feedback after button click
- Empty state is blank instead of helpful
- Success state is silent
- Destructive action has no confirmation

For each: describe the friction, explain why it matters, suggest the fix.

---

## Output Format

```
## UX + Copy Review

### C.L.E.A.R. Scores
| Dimension | Score | Notes |
|-----------|-------|-------|
| Clarity | [A-F] | [1-2 sentence justification] |
| Layout | [A-F] | [1-2 sentence justification] |
| Emphasis | [A-F] | [1-2 sentence justification] |
| Accessibility | [A-F] | [1-2 sentence justification] |
| Reward | [A-F] | [1-2 sentence justification] |

### Copy Audit

**[Copy element 1]:** "[exact text]"
- WIIFM: [Good/Bad + why]
- Reassurance: [Good/Bad/N/A + why]
- Brevity: [Good/Bad + why]
- Human Voice: [Good/Bad + why]
- Iconic Copy: [Good/Bad + why]

[Repeat for 3-5 key copy elements]

### Rewrites

1. **Original:** "[text]"
   **Problem:** [what's wrong]
   **Rewrite:** "[new text]"
   **Why:** [rationale]

2. [...]

3. [...]

### UX Friction Points

1. **[Friction]** — [Description]. Fix: [specific recommendation].
2. [...]
3. [...]
```

---

## Rules

1. **Be opinionated.** "This CTA is vague and will hurt conversion" beats "the CTA could perhaps be more specific."
2. **Specific rewrites, not suggestions.** Don't say "make it clearer." Write the actual better copy.
3. **Score honestly.** If it's an F, say F. Inflated scores don't help anyone.
4. **Copy > cleverness.** Clear always beats clever. If a rewrite is more creative but less clear, it's worse.
5. **Context matters.** A data-dense dashboard has different copy needs than a consumer onboarding flow. Score relative to the product type.
6. **Don't audit everything.** Focus on the 3-5 highest-impact copy elements. Exhaustive audits dilute the signal.
7. **No AI slop in your rewrites.** "Unlock the power of..." and "Seamlessly integrate..." are worse than what they replace.

---

## Integration

- **Standalone:** Run directly when someone asks for copy or UX feedback on a screen.
- **From designer-audit.md:** Called as Phase 8. Output gets merged into the final integrated findings in Phase 9.
- **From design-html-prototype.md:** Optional post-build check on copy quality before presenting.
