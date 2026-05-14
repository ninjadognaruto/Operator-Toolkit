# Consulting Mode (McKinsey)

Pyramid Principle + SCQA + MECE + BLOT. The structural backbone of every McKinsey memo, exec summary, and client deliverable. The voice still follows your CLAUDE.md spine — Consulting Mode adds *structure*, not consultant-speak.

## When to use

- Strategy doc presented to executives
- Executive summary that has to stand alone
- Client deliverable
- Board pre-read where decision-makers expect a structured argument
- Anything where the recommendation needs to survive being skimmed by a busy reader

## When not to use

- Anything narrative (use Memo Mode)
- Operational status (use Default)
- Decision documentation after the fact (use Decision Doc Mode)

## Structural requirements

In addition to the core 14 criteria, a Consulting Mode draft must satisfy:

### C1. SCQA opening (Critical for Consulting Mode)

The opening sets up Situation → Complication → Question → Answer.

- **Situation:** the indisputable starting truth ("We have 10,000 customers across three segments.")
- **Complication:** what changed or what's wrong ("Churn in our SMB segment doubled last quarter.")
- **Question:** the implicit question the reader is now asking ("How do we stop the bleeding?")
- **Answer:** the recommendation, stated directly ("Cut the SMB self-serve tier; refocus on mid-market.")

**Test:** Does the first paragraph contain all four moves, in order? If the Answer is buried, fail.

### C2. Pyramid Principle hierarchy (Critical for Consulting Mode)

The doc is a pyramid:
- **Top:** one summary point
- **Layer 2:** the 2–4 key arguments that support it
- **Layer 3:** the supporting data / examples / sub-arguments under each Layer 2 item

Each layer answers the "why" of the layer above. The pyramid principle is recursive — every section is itself a pyramid.

**Test:** Draw the pyramid. If you can't, the doc isn't pyramid-structured.

### C3. MECE arguments

Mutually Exclusive, Collectively Exhaustive. The Layer 2 arguments don't overlap, and together they cover the whole answer space.

**Test:** Could two of your Layer 2 arguments collapse into one (overlap)? Could a skeptic name a fourth argument you didn't address (exhaustiveness gap)? If yes — fail.

### C4. BLOT (Bottom Line On Top)

Every section, every paragraph, leads with its bottom line. The supporting analysis follows. Not "we analyzed X, Y, Z, and concluded Q" — but "Q. Here's why: X, Y, Z."

### C5. Executive summary that stands alone

If the doc has an executive summary, it must contain the recommendation, the reasoning, and the consequence — without requiring the body. A reader who reads only the exec summary should be able to act.

### C6. Argument structure visible at a glance

Section headers state claims, not topics ("Why we're losing the SMB segment" not "SMB segment analysis"). Sub-headers carry sub-claims. The argument is reconstructable from the table of contents alone.

## Scoring layer

Add 6 mode-specific rows. Weight each as High (4 points). Same green / yellow / red logic.

| # | Criterion | Test |
|---|-----------|------|
| C1 | SCQA opening | First paragraph hits all four moves, in order |
| C2 | Pyramid hierarchy | Top point + 2–4 supporting arguments + sub-evidence |
| C3 | MECE | Arguments don't overlap; coverage is exhaustive |
| C4 | BLOT | Every section / paragraph leads with conclusion |
| C5 | Standalone exec summary | If present, can stand alone with no body |
| C6 | Visible argument | TOC + headers reconstruct the argument |

## Quote (the source rule)

Barbara Minto, *The Pyramid Principle*: "Your reader will be able to grasp your message most readily if you state your major point first and then explain your supporting subpoints."

## Source

Barbara Minto, *The Pyramid Principle: Logic in Writing and Thinking*; McKinsey & Co. memo conventions; SCQA framework (Minto); MECE principle.
