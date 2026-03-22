# Customer Problem Statements & Hypotheses — Reference File
# For: product-opportunity-agent/references/customer-problems-and-hypotheses.md

This file should be copied to:
/sessions/[session]/mnt/.skills/skills/product-opportunity-agent/references/customer-problems-and-hypotheses.md

---

## Customer Problem Statement Format

Write one problem statement per problem area. Keep it short — the goal is to name a theme, not describe a detailed scenario. Each statement must follow this structure exactly:

```
*I am* [customer type] trying to [accomplish something]
*But* [problem — one short sentence, name the theme not the symptoms]
*Because* [single root cause — the most important one only]
*Which makes me feel* [customer emotion]
```

### Writing Guidelines

- **"I am"**: Behavioral, not demographic. "a filer evaluating expert help" not "a 35-year-old with a W-2."
- **"trying to"**: The job to be done — what they want to accomplish, not what feature they want.
- **"But"**: Name the friction theme in one short sentence. Don't describe specific UI failures — describe the user experience pattern. "I can't trust the price" not "the CTA says free but charges appear mid-filing."
- **"Because"**: One root cause only. If you're tempted to list three, pick the one structural reason that if fixed would resolve the others.
- **"Which makes me feel"**: One or two emotions. "deceived" beats "slightly confused and somewhat frustrated."

### What to avoid
- Don't use "Because" to restate "But" in different words
- Don't list multiple Because bullets — one only
- Don't load "I am" or "trying to" with so much context the statement becomes a paragraph

### Examples (from Rohit's team)

```
I am a PYA filer new to DIWM trying to get expert help when I need it
But I'm not sure the expert I get will understand my situation
Because I'm connected to a different expert every session with no continuity
Which makes me feel anxious and unsupported
```

```
I am a DIY filer trying to track actions I need to complete later
But I have no way to do that without leaving the product
Because there's no in-product task or note system
Which makes me feel overwhelmed
```

```
I am a Tax Preparation specialist trying to finalize my client's return
But I can't tell if the return is complete enough to file
Because the system gives me no completeness signal
Which makes me feel frantic
```

---

## Hypothesis Format

Write one hypothesis per major opportunity. Each hypothesis must follow this structure:

```
*If we* [specific product/design/copy change]
*Then* [specific user outcome]
*resulting in* [business outcome]
*Which we will measure by* [specific metric(s) and method]
```

### Writing Guidelines

- **"If we"**: The strategic intent — not the implementation. Describe the capability or change at a level above the specific solution. "If we make pricing expectations clear before the user commits" not "if we add a pricing line beneath the CTA." The solution belongs in requirements, not here.
- **"Then"**: The user benefit. What does the user experience or feel differently? Tie it back to the problem statement.
- **"resulting in"**: The business outcome. Conversion, retention, support reduction, revenue — name it.
- **"Which we will measure by"**: Name the metric, the method, and ideally the time window. "CTA click-through rate in an A/B test over 4 weeks" not just "conversion rate."

**The key distinction for "If we":**
- ❌ Too solution-specific: "If we add a one-line pricing signal beneath the hero CTA"
- ✅ Right level: "If we make pricing expectations clear before the user commits"

- ❌ Too solution-specific: "If we relocate the star rating to the hero section"
- ✅ Right level: "If we improve social validation from other customers at the conversion moment"

- ❌ Too solution-specific: "If we rewrite the hero headline to mirror the user's fear state"
- ✅ Right level: "If we reframe the hero messaging to acknowledge the user's anxiety before resolving it"

### Examples

```
If we make pricing expectations clear before the user commits to starting
Then users will enter the funnel with their cost anxiety resolved rather than deferred
resulting in higher CTA click-through and lower pricing-related support tickets
Which we will measure by CTA CTR in an A/B test (4-week run), and pricing-related support ticket volume month-over-month
```

```
If we make the distinction between Expert Assist and Expert Full Service clear without requiring users to seek it out
Then users will arrive at the CTA confident they are on the right product
resulting in higher Expert Assist conversion and reduced page abandonment
Which we will measure by FAQ #1 click rate, CTA CTR, and scroll-to-CTA completion rate
```
