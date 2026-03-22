---
name: article-synthesis
description: Synthesize any article, paper, book, newsletter, or set of notes into Rohit's framework-first, example-grounded format. Use this whenever Rohit shares a link, pastes article text, shares book highlights, or asks to summarize / make sense of something he's read. Triggers include: "synthesize this", "summarize this article", "what are the key takeaways", "turn this into notes", "capture what I learned", "break this down", "help me absorb this", or any time content is shared and needs to be distilled into actionable knowledge.
---

# Article Synthesis

Rohit learns by building frameworks, not by collecting facts. The goal of synthesis is not to compress the article — it is to extract its **structure**, **mechanism**, and **behavioral implications** in his voice.

He follows Karpathy's learning framework: summarize everything in your own words, teach it as if explaining to yourself, and only keep things that change how you act. The output should feel like notes Rohit would have taken himself, not a summary someone else wrote.

---

## Output Structure

Always produce the synthesis in this exact order:

### 1. The Core Idea (1-2 sentences)
What is the central claim or framework? State it definitively. No hedging. Write it as Rohit would write it if he were explaining it to a peer over coffee — not as a book jacket description.

> Bad: "This article explores how behavioral psychology can be applied to product design."
> Good: "Products get stuck because they optimize for utility and ignore the emotional and social jobs users are actually trying to do."

### 2. The Framework (taxonomy-first)
Break the core idea into 3-5 dimensions, stages, types, or categories. Open with: "At the highest level, you can think of this as..." or "There are [N] types/dimensions/stages here..."

Every bucket gets:
- A **bold label**
- A one-line definition (in italics or plain)
- One concrete real-world example (not abstract)
- One tech/product example if relevant

Use a table if the framework has 3+ dimensions that map cleanly (e.g., Category | Real-world example | Product example | Notes). Use bullets if the structure is more sequential or hierarchical.

### 3. The Mechanism (how it actually works)
What is the underlying logic that makes this true? Dig one level below the framework. This is where the "why" lives. Use the inversion pattern when helpful: what breaks when this principle is violated?

Keep this tight — 3-5 bullets max. Ground each bullet with evidence or an example. If the article contains an equation, formula, or explicit model, preserve it here.

### 4. Counterintuitions / What Most People Get Wrong
What does this article say that is non-obvious? What does the conventional approach miss? Rohit is drawn to ideas that invert conventional wisdom — surface those.

Format: 2-3 short bullets, each starting with "Most [people/PMs/companies] think X — but actually Y."

### 5. So What (behavioral implications)
This is the most important section. What changes about how Rohit acts based on this? Be specific and operational.

Format: "Next time I [situation], I will [action] instead of [old behavior]."

If there are no clear behavioral implications, the article wasn't worth synthesizing — say so.

### 6. Connecting Threads (optional)
Does this connect to other frameworks Rohit already uses? JTBD, the impact equation (Scale × Importance × Effort), adoption formula (Nudge × (Motivation - Friction)^Satisfaction), moat taxonomy, marketplace liquidity, behavioral psychology, inversion thinking? Call the connection explicitly. Skip this section if the connection is weak.

---

## Style Rules

These are non-negotiable and reflect how Rohit actually takes notes:

- **Short declarative bullets** — 8-15 words at the top level. Sub-bullets add the concrete example or qualification, never abstract elaboration.
- **Bold the concept**, then colon or dash, then the definition/example. E.g.: **Endowment effect**: once you build something, the act of building justifies keeping it.
- **Inline examples with e.g.** — "(e.g., Airbnb shifted from double-commit to buyer-pick to increase liquidity)"
- **No passive voice** — "Users abandon flows when friction exceeds motivation" not "Friction has been found to increase abandonment."
- **No caveats or hedges** — cut "it's worth noting that" and "one could argue." Make the claim.
- **No lengthy prose paragraphs** — if you're writing more than 3 sentences in a row without structure, break it.
- **Numbers when they exist** — "Uber's benefit from supply diminishes once time-to-fill drops below 3-5 minutes" is better than "Uber stops benefiting from additional drivers after a certain threshold."

---

## What to Do When the Input Is Raw / Messy

If Rohit pastes raw highlights, bullet notes, or a book chapter without context:

1. Infer the domain and core claim first — state it explicitly
2. Impose structure on what exists — find the implicit taxonomy
3. Flag if the source seems thin: "This is light on mechanism — here's what I'd read next to fill the gap: [suggestion]"
4. Never pad to look thorough. A tight 200-word synthesis beats a bloated 800-word one.

---

## Example Output Pattern

**Input:** Article about why DAU/MAU fails as a metric for infrequent products

**Output:**

**Core idea:** DAU/MAU conflates product quality with use-case frequency — a monthly-use product at 33% DAU/MAU can be healthier than a daily-use product at 20%.

**Framework:** Frequency is a product characteristic, not a health signal. Products split into four types by (frequency × switching cost):
- **High frequency, low switching cost** (e.g., news feeds): DAU/MAU is valid. Retention = habit.
- **High frequency, high switching cost** (e.g., enterprise SaaS): retention driven by lock-in, not love. DAU/MAU misleads.
- **Low frequency, high switching cost** (e.g., mortgages, taxes): measure NPS + re-engagement at the moment of need.
- **Low frequency, low switching cost** (e.g., hotel booking): hardest category. Top-of-mind wins. Measure prompted recall + SEO rank.

**Mechanism:** The null hypothesis for infrequent products is not "will users retain" but "will users think of you when the need arises." Marketing solves this more than product does.

**What most people get wrong:** Most PMs measure engagement using DAU/MAU because it's available — but actually, for low-frequency products the right metric is top-of-mind recall at the moment of need, which requires survey work, not analytics.

**So what:** Next time I'm evaluating a low-frequency product, I will set the primary metric as prompted recall or search rank at the moment of need, not DAU/MAU.
