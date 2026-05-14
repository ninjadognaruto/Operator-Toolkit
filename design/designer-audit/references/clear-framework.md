# C.L.E.A.R. UI Framework — Full Reference

Source: Growth Design UI course. This is the canonical reference for the C.L.E.A.R. framework used in `designer-audit.md` and `ux-copy-review.md`.

---

## Framework Overview

1. **C – Copywriting**: Tell people why to care, what to do, and what will happen next.
2. **L – Layout**: Group, position, and align elements to make the screen easy to understand.
3. **E – Emphasis**: Make sure people can't miss the one thing that matters.
4. **A – Accessibility**: Design for different abilities so more people can use it with ease.
5. **R – Reward**: Turn any boring interaction into something that feels good.

Design with purpose: each element should help people either **understand** what's going on, **do** the next thing, or **feel safe** and focused while they do it.

---

## C — Copywriting

### 3 Common Mistakes

1. **Too long**: Big blocks of text get skimmed or skipped. "If I had time, I'd written a shorter letter" (Blaise Pascal). You're doing the hard thinking so users don't have to.
2. **Too generic**: Generic copy leaves users guessing or uninterested.
3. **Unnecessary & duplicated**: Extra sentences and repeated information add noise, hide what matters, increase confusion.

### 4 Practical Tips

1. **WIIFM (What's In It For Me)**: Every person looking at something new silently asks this. Turn features into clear benefits. The more obvious the outcome, the easier it is to say yes.
2. **Reassure**: People hesitate in doubt. "You can change this later" or "No prep needed" can unblock them. Get ahead of fears by researching audience desires, pain points, and objections.
3. **Use specific & action words**: Clear verbs and concrete outcomes. Save everyone the trouble of guessing.
4. **Talk like a real person**: The Barstool Test — imagine explaining the product to a friend at a bar. If it sounds like a brochure, rewrite until it sounds natural and honest.

### Write With an Eraser

Always do a pass that removes as many words as possible. Great copy is mostly editing. For each sentence: if I delete this, does anything important break? If not, cut it.

### The Copy Swap Test

Your copy is not unique if your competitor can use it. Remove all logos and visuals, read the copy out loud. Could someone else use the same words? If yes, it's too vague.

### Iconic Copy Criteria

- Make it memorable
- Use juxtaposition or competitive comparison
- 3 types of comparison: on principles, on how to do things, on how competitors do things
- You should get the copy in "2 seconds"

**Examples**: "1000 songs in your pocket" (Apple), "The dating app designed to be deleted" (Hinge), "Worn by supermodels in London and dads in Ohio" (New Balance)

---

## L — Layout

A good layout lets people easily scan and understand information by grouping, positioning, and aligning elements that belong together. When the structure is clear, people follow your cues.

### Gestalt Principles

- **Similarity**: Same role → same look. Standardize styles, reuse components, minimize variants.
- **Proximity**: Tight spacing within groups, larger spacing between groups. Labels/inputs/values visually attached.
- **Simplicity**: Lower visual complexity reduces cognitive load. Remove styling that doesn't communicate meaning. Prefer repeatable patterns.
- **Alignment**: Pick a grid and commit. Align key edges consistently (left edges do most of the work). Reuse spacing values (4px steps).
- **Common Region**: Group content with sections/cards. Prefer subtle backgrounds + spacing before adding borders. Constrain overly-wide layouts.
- **Continuity**: Design an obvious scan path (usually top-left → bottom). Use consistent edges and landmarks. Avoid zig-zag scanning.

### F-Reading Pattern

Eye-tracking research shows readers start top-left, sweep right, then scan downward in shorter passes. Consistent left edges and repeated visual landmarks act as "handrails."

### Common Layout Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Sloppy Spacing | Inconsistent or missing spacing | Start with "too much" padding then adjust |
| Border Bloat | Overreliance on borders | Define areas with subtle container colors |
| Content Cramming | Squeezing too much information | Remove elements, use progressive disclosure |

---

## E — Emphasis

Layout helps people understand; Emphasis helps them notice what matters.

### The Foggy Glasses Test (Squint Test)

Blur the UI. The element that's most important should still be obvious. If everything looks equally loud (or quiet), emphasis isn't doing its job.

### 6 Emphasis Levers

1. **Size**: Bigger elements feel more important. Make the primary message/action noticeably larger. Turn down surrounding elements.
2. **Color**: Accent color for key actions. Muted color to demote secondary details.
3. **Space**: Whitespace isolates what matters. Add breathing room around primary elements. Buy space by shrinking secondary stuff.
4. **Placement**: What appears early in the scan path gets noticed faster. Use "prime real estate" (top/first scan) for the primary message.
5. **Visualization**: Show, don't tell. Turn abstract text into visual patterns (progress bar, chart, icon). Prefer at-a-glance meaning over paragraphs.
6. **Motion**: Movement grabs attention and communicates change. Use motion to reinforce the screen's goal. Avoid eye candy without purpose.

### Common Emphasis Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Wrong Dial | Solving with the wrong lever (e.g., color when the issue is placement) | Diagnose first: what's competing? Then pick the right dial. |
| Weak Dial | "Kind of" adjusting everything but nothing stands out | Make one dial clearly different. Fewer changes, bolder. |
| Screaming Dial | Multiple dials cranked to max — feels aggressive | Calm baseline, 1-2 dials to lead. Hierarchy comes from what you turn down. |

---

## A — Accessibility

Accessibility is about making your product usable for more people in more situations. Not just compliance — when you design for different abilities, your interface becomes more forgiving for everyone.

### 3 Types of Disabilities

1. **Permanent**: Long-term limitations
2. **Temporary**: Short-term limitations
3. **Situational**: "Life is happening" limitations

### 3 Accessibility Principles

| Principle | Question |
|-----------|----------|
| Visible without searching | Can you see the main action without digging, scrolling, or guessing? |
| Operable without precision | Can you hit it easily even with reduced ability (thumb, motion, fatigue)? |
| Actionable without guessing | Do actions look like actions? |

### 7 Common Accessibility Mistakes

1. Tiny & close targets: Small targets and crowded areas are hard to deal with
2. Low contrast text: Nobody wants to squint
3. Actions that don't look clickable: People won't guess correctly
4. Missing hints: People won't find key actions if they're hidden
5. Color-only meaning: Some people see the same color for different hues
6. Too many patterns in one view: Reduce cognitive load
7. "They'll figure it out" assumptions: Never assume anything

---

## R — Reward

Reward is about how the screen makes people feel after a meaningful moment — not just points or confetti. Based on Self-Determination Theory.

### The Reward Trifecta

#### 1. Control — "I'm safe / certain / in charge"

| Subcategory | Definition | In UI |
|-------------|-----------|-------|
| Safety | Reducing perceived threat, vulnerability, loss | Protection, privacy, guarantees, "you're covered" |
| Certainty | Increasing predictability of current state and outcomes | Status, ETAs, confirmations, "what happens next" |
| Agency | Perceived ability to influence events or correct mistakes | Undo/cancel/edit, preferences, branching choices |

**Look for Control at**: Post-action (checkout, submit), Waiting (shipping, processing), High-stakes (money, privacy), Recovery (errors, edge cases)

#### 2. Competence — "I'm improving / I can do this"

| Subcategory | Definition | In UI |
|-------------|-----------|-------|
| Completion | Clear evidence a task/step is finished | Done states, checkmarks, confirmations, "You're all set" |
| Progress | Evidence of moving toward a goal | Milestones, progress bars, streaks, "X% complete" |
| Mastery | Signals of getting better/faster/more accurate | Personal bests, quality scores, tips that improve performance |

**Look for Competence at**: Task completion, Long/multi-step flows, Performance feedback, After friction/recovery

#### 3. Recognition — "My work is recognized / I feel seen"

| Subcategory | Definition | In UI |
|-------------|-----------|-------|
| Acknowledgment | Explicit feedback that your action counts socially | Badges, credentials, "verified", shareable proof |
| Belonging | Cues that you're part of a group/role/identity | Teams, roles, member status, "Welcome back" |
| Reciprocity | Signals that another person saw and responded | Replies, reactions, approvals, "seen", "merged" |

**Look for Recognition at**: After outcomes (publish, ship), Social surfaces (profiles, feeds), Group spaces (teams, communities), Collaboration loops (reviews, handoffs)

### The 30-Second Reward Test

Users are silently asking:
- "What's going on — am I safe?" (Control)
- "Am I improving — did I do well?" (Competence)
- "Do others see this — am I recognized?" (Recognition)

If your UI can't answer at least one, it will feel emotionally flat — even if perfectly usable.

### Common Reward Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Wrong Reward | Payoff the user doesn't care about in that moment (e.g., "Congrats!" when anxious) | Match dominant emotion: Anxiety → Control, Effort → Competence, Pride → Recognition |
| Shy Reward | Reward exists but isn't visible enough or is generic praise with no evidence | Surface the payoff explicitly. Make it concrete: what happened, what it means, what they gained. |
| Over-Reward | Intensity/frequency is off (confetti for tiny actions) | Keep it proportional. Save big celebration for real milestones. |

---

## Deep Dive Resources

### Copywriting
- [Learn Copywriting in 76 Minutes — Harry Dry](https://www.youtube.com/watch?v=TUMjnmfsPeM)
- [Marketing Examples — Harry Dry](https://marketingexamples.com/)
- Ogilvy on Advertising, David Ogilvy (1985)
- Very Good Copy: 207 Micro-Lessons, Eddie Shleyner (2024)
- Microcopy: The Complete Guide, Kinneret Yifrah (2017)

### Layout
- [6 Layout Principles (.pdf)](https://growth.design/members/pdf/clear-ui/printable-layout-principles.pdf)
- [Game of UI Differences](https://cantunsee.space/)
- [Apple Human Interface Guidelines — Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Shopify Polaris — Layout](https://polaris-react.shopify.com/design/layout)
- [Gestalt Principles — Nielsen Norman Group (playlist)](https://www.youtube.com/playlist?list=PLJOFJ3Ok_iduObD_9dHwiYp804oZwpHze)
- [F-Shaped Pattern (eye-tracking) — Kara Pernice, NNg (2017)](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
- Grid Systems in Graphic Design, Josef Müller-Brockmann

### Emphasis
- [6 Emphasis Dials (.pdf)](https://growth.design/members/pdf/clear-ui/printable-emphasis-principles.pdf)
- [Making Motion Meaningful — Google Design](https://design.google/library/making-motion-meaningful)
- [Visual Hierarchy in Design — NNg](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)
- Information Visualization, Colin Ware — Perception for Design

### Accessibility
- [The A11Y Project Checklist](https://www.a11yproject.com/checklist/)
- [7 Things Every Designer Needs to Know about Accessibility](https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b)
- [Inclusive Components](https://inclusive-components.design/)

### Reward
- [Reward Trifecta (.pdf)](https://growth.design/members/pdf/clear-ui/printable-reward-trifecta.pdf)
- [Self-Determination Theory — Deci & Ryan](https://doi.org/10.1037/0003-066X.55.1.68)
- [Goal-Gradient Effect (PDF)](https://home.uchicago.edu/ourminsky/Goal-Gradient_Illusionary_Goal_Progress.pdf)
- Microinteractions, Dan Saffer
- Emotional Design, Don Norman
- Designing for Emotion, Aarron Walter
