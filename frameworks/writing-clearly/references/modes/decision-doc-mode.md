# Decision Doc Mode (Rohit)

The internal-decision memo. Used after a decision has been made, to document what was decided, why, what's being given up, and when it gets re-evaluated.

## When to use

- Documenting a strategic call you've made
- Capturing a decision after a meeting where the call was made verbally
- Internal memo to record the path-not-taken so future-you understands why
- Pairing with `decision-framework` skill output (decision-framework produces the call; decision-doc-mode formats the writeup)
- Any time the reader needs to know what you decided and why — without re-litigating it

## When not to use

- Open-ended strategy exploration → use Consulting Mode
- Product launch → use Memo Mode
- External-facing comms → use Exec Comms Mode
- The decision hasn't been made yet → use `decision-framework` skill first, then come back here

## Structural requirements

In addition to the core 14 criteria, a Decision Doc Mode draft must satisfy this six-section structure:

### D1. Recommendation (one sentence)

The first line is the decision, stated as a directive. Not "we should consider X." Not "I propose X." Just X.

**Good:** "Cut the SMB self-serve tier by end of Q3."
**Bad:** "It might be worth considering whether we should perhaps cut the SMB self-serve tier."

### D2. Why (3 bullets max)

The reasoning, in three bullets or fewer. If you need more than three, you haven't decided what mattered most.

Each bullet leads with the load-bearing fact, not the framing. ("SMB CAC payback is 18 months vs 6 for mid-market" not "There are concerns about SMB economics.")

### D3. Tradeoffs (the costs you're accepting)

What you're giving up by making this call. This section is mandatory. A decision without tradeoffs is a decision you haven't actually made.

**Examples of real tradeoffs:**
- "We lose ~$2M ARR from the bottom 200 customers."
- "We risk our reputation as the 'small-business friendly' option."
- "Three CSMs and one product manager need to be reassigned."

**Examples of fake tradeoffs to flag:**
- "Some customers may be unhappy" (vague — how many, who, what's the cost?)
- "It will require some change management" (every decision requires change management)

### D4. What we're not doing (and why)

The alternatives you considered and rejected, with one-line reasons.

**Why this section matters:** If you don't write this, future-you will rediscover the alternatives, get excited, and re-litigate. Document the rejection.

**Format:**
- *Option A: Raise SMB prices.* Rejected because: churn would spike, revenue gain marginal, doesn't fix CAC payback.
- *Option B: Cut marketing spend.* Rejected because: doesn't address the structural problem.

### D5. Checkpoints (when we re-evaluate)

A decision isn't permanent. State when it gets revisited, what would change your mind, and who's accountable for re-checking.

**Format:**
- *When:* End of Q4 2026
- *What would change our mind:* If mid-market CAC payback exceeds 12 months, or if SMB churn drops below 2% in the segments we keep
- *Who owns the recheck:* [Name]

### D6. Open questions (what we don't know)

What you're still uncertain about, even after deciding. Honest. Not "what do you think, team?" — but "we don't know whether the cut will accelerate or slow the upmarket motion."

## Voice-specific notes

The Decision Doc Mode has a distinct voice:
- **Active voice always** — "We decided X" not "It was decided that X"
- **Past tense for the decision** — "We chose," "We rejected," "We will revisit"
- **No hedging on what was decided** — even if the call was 51/49, the doc records it as decided. Hedging belongs in D6 (Open questions), not D1 (Recommendation).

## Scoring layer

Add 6 mode-specific rows. Weight each as High (4 points).

| # | Criterion | Test |
|---|-----------|------|
| D1 | One-sentence recommendation | First line is directive, not deliberative |
| D2 | Three or fewer reasons | Each carries a load-bearing fact |
| D3 | Real tradeoffs named | Specific costs you're accepting |
| D4 | Alternatives documented | Rejected options with one-line reasons |
| D5 | Checkpoints set | When, what would change, who owns |
| D6 | Real uncertainty stated | What you don't know, said honestly |

## Source

Rohit's CLAUDE.md decision-doc voice; pairs with the `decision-framework` skill (which produces the call); HBS LCA decision-doc conventions.
