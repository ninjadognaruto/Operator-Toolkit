---
name: customer-problem-hypothesis
description: Generate structured customer problem statements and hypotheses for product discovery. Use whenever someone needs to articulate a customer pain point, write a problem statement, frame a hypothesis for a product bet, prepare for a product review or sprint kickoff, or says things like "what's the customer problem here", "write a problem statement", "frame this as a hypothesis", "help me articulate the pain point", "I need to define the problem we're solving", "what are we betting on", or "turn this into a testable hypothesis". Also use when reviewing PRDs, feature specs, or product pitches that lack a clear problem framing.
---

# Customer Problem Statement & Hypothesis Generator

This skill produces two outputs for any product problem: a **customer problem statement** and a **testable hypothesis**. Together, they force clarity on who's struggling, why, and what we believe will fix it.

## When to use this

Product work goes sideways when the problem isn't articulated clearly. This skill is the forcing function. Use it when:

- Starting discovery on a new problem space
- Writing or reviewing a PRD that needs sharper problem framing
- Preparing for a product review, sprint planning, or roadmap discussion
- Translating a vague feature request into a structured customer need
- Stress-testing whether a team actually agrees on what they're solving

## How it works

### Step 1: Gather context

Before generating anything, make sure you understand:

1. **Who is the customer?** (role, segment, persona — be specific)
2. **What are they trying to do?** (the job-to-be-done, not the feature)
3. **What's going wrong?** (the friction, failure, or gap)
4. **Why is it going wrong?** (root causes — aim for 2-3)
5. **How does it make them feel?** (the emotional cost — frustration, anxiety, distrust, etc.)
6. **What's the proposed solution direction?** (for the hypothesis)
7. **How would we measure success?** (metrics that move if the hypothesis is right)

If the user hasn't provided enough context, ask. Don't guess on critical inputs — especially the customer, the root causes, and the metrics.

Ask upfront whether they want **one** customer problem or **multiple** (e.g., different segments or different facets of the same problem).

### Step 2: Generate the outputs

Produce two things:

**1. Customer Problem Statement**

Use the detailed format when there are multiple root causes worth separating. Use the short format when the problem is tight and a single "because" suffices.

**Detailed format:**

> *I am* [specific customer — role, context, segment]
> *and I'm trying to* [what they're trying to accomplish — the job-to-be-done]
>
> *But* [the problem they encounter — what blocks or frustrates them]
>
> *Because*
> - [Root cause 1]
> - [Root cause 2]
> - [Root cause 3]
>
> *Which makes me feel* [the emotional impact — be real, not corporate]

**Short format:**

> *I am* [customer]
> *and I'm trying to* [accomplish something]
> *But* [problem encountered]
> *Because* [single root cause]
> *Which makes me feel* [emotion]

**2. Hypothesis**

> *If we* [proposed action — what the team will build or change]
> *Then* [customer benefit — what improves for the user]
> *resulting in* [business outcome — the measurable impact]
> *Which we will measure by* [specific metrics — be concrete]

### Writing guidance

The power of this format is specificity. Generic statements are useless. Some principles:

- **Customer**: "A mid-market HR manager onboarding 50+ employees/quarter" beats "an HR professional." Ground it in observable reality.
- **Problem**: Describe what actually happens, not an abstract gap. "I can't find which documents are still pending across my new hires" beats "the onboarding process is inefficient."
- **Root causes**: Each one should be independently true and verifiable. If you can't validate it separately, it's not a distinct root cause — it's a restatement.
- **Emotion**: Use real human language. "Anxious that I'll miss a compliance deadline" beats "frustrated." The emotion should make someone in the room feel something.
- **Hypothesis action**: Describe what changes for the user, not internal implementation details. "Show a single dashboard of pending documents by new hire" not "build a document tracking microservice."
- **Metrics**: Pick metrics that would actually move if the hypothesis is correct, and wouldn't move if it's wrong. That's the test of a good metric choice.

### Step 3: Pressure-test

After generating, briefly flag any weaknesses:

- Is the "because" actually a root cause, or just a restatement of the "but"?
- Is the hypothesis falsifiable? Could you run an experiment?
- Are the metrics lagging indicators that won't move for months, or can you find leading signals?
- Does the problem statement hold if you swap in a slightly different customer — and if so, should you?

## Example

**Context**: A fintech app where small business owners struggle with cash flow forecasting.

**1. Customer Problem Statement (Detailed)**

> *I am* a small business owner with 5-15 employees and seasonal revenue swings
> *and I'm trying to* predict whether I'll have enough cash to cover payroll and expenses next month
>
> *But* I can't get a reliable picture of my upcoming cash position
>
> *Because*
> - My income is spread across 3-4 payment platforms and none of them talk to each other
> - Outstanding invoices are tracked in a spreadsheet I update manually (and often forget)
> - I don't know which expenses are recurring vs. one-time without digging through bank statements
>
> *Which makes me feel* anxious every month-end — like I'm flying blind and one late payment away from a crisis

**2. Hypothesis**

> *If we* automatically aggregate income and expenses from connected accounts and show a 30-day forward cash projection
> *Then* small business owners will be able to anticipate shortfalls before they happen
> *resulting in* fewer emergency borrowing events and higher retention among active users
> *Which we will measure by* % of users checking the forecast weekly, reduction in overdraft/credit line draws within 90 days, and 6-month retention rate vs. control
