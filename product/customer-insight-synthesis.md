---
name: customer-insight-synthesis
description: Synthesize customer feedback, interview notes, support tickets, or survey responses into structured JTBD-mapped insights with null hypothesis testing. Use whenever Rohit shares customer conversations, interview notes, support data, NPS verbatims, sales call transcripts, or asks to make sense of what customers are saying. Triggers include: "synthesize customer feedback", "what are customers telling us", "pattern the interviews", "what's the insight from these calls", "organize this feedback", "what do users actually want", or any batch of qualitative or mixed data about user behavior.
---

# Customer Insight Synthesis

Rohit builds a continuous mental model of the customer — not a one-time deliverable. The job of this skill is to take raw customer signal (interviews, tickets, surveys, sales call notes) and structure it in a way that sharpens that mental model and forces honest confrontation with the null hypothesis.

**The null hypothesis for B2B products is always:** customers will not pay / will not adopt / do not care enough. Every insight must either confirm or challenge this — synthesis that doesn't address it is incomplete.

---

## Step 1: Identify the Data Type and Gaps

Before synthesizing, classify what you have:

| Source Type | Strength | Watch Out For |
|------------|----------|---------------|
| Customer interviews | Rich motivation data | Courtesy bias — customers soften criticism |
| Support tickets | Real pain, urgent severity | Selection bias — only the frustrated speak |
| NPS verbatims | Volume + sentiment | Anchoring to score, missing root cause |
| Sales call notes | Buying signals, objections | Rep interpretation layered on top of customer words |
| Behavioral/usage data | Revealed preference | Can't tell you *why* |
| Surveys | Breadth | Stated preference ≠ actual behavior |

If data is thin or one-dimensional, flag it. Don't synthesize noise into false confidence.

**Rohit's rule:** If the data disagrees with qualitative feedback, assume the qualitative feedback is correct. If a customer says it's a bug, it's a bug.

---

## Step 2: Extract and Organize by JTBD

Map all signals to Jobs to Be Done across three layers:

### Functional Jobs
What they are trying to accomplish — the outcome they need.
- State the job in the customer's language, not product language
- Capture the circumstance: *When [situation], I want to [job], so I can [outcome]*
- Include: how they do it today (workarounds, alternatives, manual steps)

### Emotional Jobs
How they want to feel — or avoid feeling — as they do the functional job.
- Common patterns: want to feel competent / not embarrassed, want to feel in control, want to avoid being blamed
- Often the reason adoption fails even when functional job is solved

### Social Jobs
How they want to be perceived by others — their manager, their team, their peers.
- For B2B: "Will this make me look smart?" / "Will this help me not get fired?" / "Will this get me promoted?"
- The best B2B products directly serve one of three social jobs: get them promoted, contribute to their revenue, prevent them from getting fired

---

## Step 2b: Apply the Four Forces Lens (Moesta)

After mapping jobs, run the Four Forces of Progress analysis across the data. This surfaces *why customers switch or don't* — the forces that drive and block adoption.

For each major job or insight cluster, identify:

**Push of the current situation:** What's broken, painful, or inadequate about how they do this today? Look for: complaints about existing tools, workarounds, manual processes, frustration language, "I'm tired of..." statements. The push is the struggling moment — the seed of all demand.

**Pull of the new:** What's the vision of better? What outcome are they imagining? Look for: aspirational language, "I wish I could...", excitement when describing a potential solution, comparisons to better experiences elsewhere.

**Anxiety of the new:** What's stopping them from switching even when they want to? Look for: hesitation, questions about risk, "what if it doesn't work," concerns about migration, learning curve, social risk ("what will my team think?"), past failed switches.

**Habit of the present:** What keeps them locked into the current solution even when they hate it? Look for: "we've always done it this way," sunk cost language, comfort with the familiar, data/workflow lock-in, team inertia.

**Switching equation check:** For each cluster, assess whether (Push + Pull) > (Anxiety + Habit). If not, the insight may be real but the customer won't act on it — and that changes your prioritization.

**What to watch for:**
- Most researchers over-index on push/pull and miss habit/anxiety. Habit and anxiety are where deals die. Surface them deliberately.
- If you have strong push but weak pull, customers know what's wrong but can't envision better — your positioning problem is clarity, not demand.
- If you have strong pull but weak push, customers admire the vision but won't move — there's not enough pain to justify switching. You're a nice-to-have.
- If anxiety is the dominant blocker, reduce it directly: free trials, return policies, case studies, migration support.
- If habit is the dominant blocker, break it: migration tools, "bring your data," switching incentives, onboarding that maps old workflows to new ones.

> See: `domains/product.md` → Four Forces of Progress (Bob Moesta) for the full framework, timeline interview method, and case studies.

---

## Step 3: Apply the Null Hypothesis Test

For each job or insight cluster, run this explicit filter:

> **Will they pay for this? Will they adopt? Do they care enough?**

Evidence for: specific language indicating urgency, frequency of the pain, workarounds they're already building, willingness to participate in beta/pilot, unprompted mention across multiple customers.

Evidence against: vague agreement ("yes that would be helpful"), surface-level complaints without behavioral evidence, only one or two customers mentioning it, mentioned late in interview when prompted.

**Output format:**
- 🟢 Strong signal — evidence of genuine pull
- 🟡 Weak signal — real pain, unclear urgency
- 🔴 Red flag — stated interest without behavioral evidence (classic "nice to have")

---

## Step 4: Build the Insight Map

Structure the synthesis as follows:

### Top Insights (3-5 max)
Each insight gets:

**[Insight name]** — one bold declarative sentence. Not a theme. A claim.

- **Evidence:** 2-3 direct quotes or behavioral observations, labeled by source type. Exact customer words > paraphrase.
- **JTBD:** Functional / Emotional / Social — which layer does this live in?
- **Forces:** Push [what's broken today] / Pull [vision of better] / Anxiety [what blocks switching] / Habit [what keeps them stuck]. Note which forces dominate.
- **Null hypothesis:** 🟢 / 🟡 / 🔴 + one sentence on why
- **Scale:** How many customers / what % of the cohort?
- **Severity:** Frequency × pain intensity. Is this always-on or episodic?
- **So what:** One sentence on what this implies for the product or roadmap — a directional call, not a hedge.

### Counterintuitions
What did you hear that contradicts your current assumptions? These are the most valuable signals. Flag them explicitly rather than averaging them away.

### Mental Model Update
What changed? Complete this sentence: "We used to think [X]. The data suggests [Y]." One per major shift.

---

## Step 5: Prioritization Signal

Run the impact equation against the top insights:

**Impact = Scale × Importance × Effort**
- **Scale** = number of customers / users affected
- **Importance** = severity of the problem × frequency of occurrence
- **Effort** = inverse (low effort = high score)

Don't produce a ranked list with fake decimal scores. Produce a 2x2 (high/low importance × many/few customers affected) and identify the quadrant each insight lives in. The top-right quadrant is your focus.

---

## Style Rules

- Lead every insight with the customer's language, not internal product language. If they said "I can never find the thing I set up last week," don't translate it to "discoverability of saved configurations."
- One insight per bullet cluster — don't merge two different jobs together to make the list look cleaner.
- Quotes are evidence. Use them. Even imperfect transcriptions ("something like — 'my manager keeps asking me why...'" is fine).
- Don't pad. If you only have 3 strong insights, say 3. Don't invent 5 to look thorough.
- State what you *don't* know. If a key job is unclear, name the gap and suggest the question to ask next.

---

## Output Template

```
## Customer Insight Synthesis — [Product/Feature/Topic]
### Data sources: [list] | Sample size: [N] | Date range: [range]

---

### Insight 1: [Bold claim]
- Evidence: [quotes/observations + source]
- JTBD layer: Functional / Emotional / Social
- Forces: Push [X] / Pull [Y] / Anxiety [Z] / Habit [W] — dominant force: [which one]
- Null hypothesis: 🟢 / 🟡 / 🔴 — [one sentence]
- Scale: [X of Y customers, or % of cohort]
- Severity: [frequency × pain]
- So what: [directional implication]

[Repeat for Insights 2-5]

---

### Counterintuitions
- [What surprised you / contradicts current model]

### Mental model update
- We used to think [X]. Data suggests [Y].

### What we still don't know
- [Gaps + the specific question to ask next]

### Priority map
[2x2: Importance × Scale — which quadrant each insight lives in]
```
