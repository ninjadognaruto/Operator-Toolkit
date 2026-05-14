# Writing Clearly — Scoring Specification

How to compute the composite score from the 14 criteria. The output is a single integer 0–100, suitable as the verify metric for an `/autoresearch:autoresearch` loop.

## Weighted scoring formula

```
weight_critical = 5
weight_high     = 4
weight_medium   = 3

green  = 1.0
yellow = 0.5
red    = 0.0

raw_score = Σ (weight_tier × rating) for each criterion

max_score = (4 × 5) + (7 × 4) + (3 × 3) = 20 + 28 + 9 = 57

composite_score = round((raw_score / max_score) × 100)
```

## Grade thresholds

Map composite_score → letter grade:

| Grade | Threshold | Meaning |
|-------|-----------|---------|
| **A** | 85–100 | Ship as-is. Polish only. |
| **B** | 70–84 | Ship after applying the rewrites for the worst 1–2 criteria. |
| **C** | 55–69 | Rework the failing Critical criteria before sharing. |
| **D** | 40–54 | Major rewrite. Don't ship in this state. |
| **F** | 0–39 | Restart from the recommendation. |

## Two scoring layers

The composite score combines two layers. Different criteria are scored differently because some are mechanical (regex / count) and some require judgment (LLM evaluation).

### Layer A — Mechanical (deterministic, fast, used by `score.sh`)

Detected by regex, word counts, and simple heuristics. Used for the autoresearch verify command. Deterministic. Fast (<5s for any reasonable draft).

| # | Criterion | Detector |
|---|-----------|----------|
| 6 | Active voice | regex: `\b(was|were|been|being|is|are|am)\s+\w+ed\b` for passive constructions; flag if rate >5% of sentences |
| 7 | Sentence economy | count sentences; flag any >30 words; mean sentence length should fall in 12–22 word range |
| 10 | Omit needless words (slop) | grep against slop word list; em-dash density; identical sentence-start detection; transition-word glue at paragraph starts |
| 11 | No buzzwords | grep against buzzword cut list (see below) |
| 12 | No hedges | grep against hedge cut list |
| 13 | No filler | grep against filler cut list |

**Mechanical sub-scoring rule:** for each mechanical criterion, count violations. Map to rating:
- 0 violations → green (1.0)
- 1–3 violations → yellow (0.5)
- 4+ violations → red (0.0)

(Tune these thresholds against drafts of varying length — for a 2000-word doc, allow more raw violations before red than for a 200-word email.)

### Layer B — Subjective (LLM judgment, used in interactive runs)

Detected by reading the draft and applying the diagnostics. Used when the skill is invoked through SKILL.md by a user. Not deterministic. Not used by `score.sh`.

| # | Criterion | Detector |
|---|-----------|----------|
| 1 | Answer-first ordering | Read first sentence + first sentence of each section. Does the position appear? |
| 2 | Curse-of-knowledge | Read as a hypothetical outsider. Where do they pause? |
| 3 | Skim-readable | 5-second scan of headers + bold. Does the gist appear? |
| 4 | Visible spine + short paragraphs | Read headers in sequence. Do they tell the argument? |
| 5 | Parallel structure | Inspect coordinate clauses; flag breakage |
| 8 | Stress position | Identify each sentence's emphatic word; is it at the end? |
| 9 | Concrete over abstract | Pick the most abstract sentence; can it be replaced with specifics? |
| 14 | Confidence without arrogance | Read for hedging tics + chest-beating |

## Cut lists for mechanical detection

### Buzzword cut list (criterion #11)

```
leverage|synergy|ecosystem|learnings|ideate|pivot
circle back|deep[\- ]dive|paradigm shift|best practice
value[\- ]add|stakeholder|double[\- ]click|net[\- ]net
reach out|table stakes|move the needle|low[\- ]hanging fruit
boil the ocean|drill down|game[\- ]changer|disrupt
robust|comprehensive|holistic|seamless|frictionless
operationalize|incentivize|streamline|granular
```

### Hedge cut list (criterion #12)

```
somewhat|potentially|perhaps|arguably|generally
typically|often|sometimes|largely|primarily
it could be argued|one might say|it seems that|it appears that
may possibly|could potentially|might consider
in my opinion|from my perspective|I think (when stating fact)
I believe (when stating fact)
```

### Filler cut list (criterion #13)

```
Great question|Certainly|Absolutely|Of course
It's worth noting that|Note that|It's important to mention
It bears mentioning|Let me say|First, let me say
In recent years|In today's [adjective] world|Throughout history
It has long been known|It's important to note that
I'd like to discuss|This [memo|doc|note] will explore
You're asking about|To answer your question
```

### Slop word list (criterion #10, AI-slop sub-component)

```
delve|tapestry|multifaceted|navigate|pivotal
robust|comprehensive|leverage|foster|cultivate
intricate|nuanced|paradigm|ecosystem|holistic
seamlessly|effortlessly|unparalleled|unprecedented
```

### AI-slop pattern detectors

- **Em-dash density:** count em-dashes (`—`); flag if >1 per 150 words
- **Identical sentence starts:** check first 3 words of each sentence; flag if any sequence of 3+ consecutive sentences share their first word
- **Transition-word paragraph openers:** flag any paragraph whose first word is "Additionally," "Furthermore," "Moreover," "Importantly"
- **Summary-ending paragraphs:** flag any paragraph whose last sentence starts with "In summary," "To summarize," "In conclusion," "Overall"

## Output format for `score.sh`

The script outputs **only an integer** to stdout. Nothing else. This is so it can be used directly as an autoresearch verify command:

```
$ bash skills/personal/writing-clearly/scripts/score.sh draft.md
72
```

For human-readable output, use the SKILL.md workflow instead.

## Why the mechanical-only score is enough for autoresearch

The mechanical layer covers 6 of 14 criteria (#6, #7, #10, #11, #12, #13). All six are High-tier. They account for `(6 × 4) / 57 = 42%` of the maximum score. If a draft scores well on the mechanical layer, it will likely score well overall — clean prose at the sentence level usually means clean thinking at the structure level too.

Drafts that score high mechanically but low subjectively (e.g., great sentences but wrong answer-first) are real but rare. The fix: chain into `/autoresearch:reason` after the mechanical loop converges. That handles the subjective half.

## Calibration

For initial tuning, run the score.sh against:
- A sample of Rohit's existing best writing (target: 80+)
- A sample of obvious AI-slop output (target: <40)
- A sample of corporate boilerplate (target: <50)

Adjust violation thresholds until the mapping feels right. Re-tune quarterly as the slop word list ages.
