# The Design of Everyday Things — Framework Reference

This reference distills Norman's core analytical framework. Use it as a checklist and lens during any design review.

---

## The Two Goals of Good Design

**Discoverability**: Can the user figure out what actions are possible and how to perform them — without instructions?
**Understanding**: Does the user develop an accurate mental model of how the system works?

All Norman principles serve one or both of these goals.

---

## The 7 Principles

### 1. Affordances
The relationship between an object's properties and a user's capabilities that determines *how the object could be used*.

- Affordances exist whether perceived or not — but *perceived* affordances drive behavior
- A button affords clicking. A flat surface affords placing. A door handle affords gripping.
- **Design question**: Does this element's physical or visual form invite the right interaction?
- **Common failure**: Elements that look clickable but aren't, or interactive elements that look static

### 2. Signifiers
Signals — deliberate or accidental — that communicate *where* and *how* to act.

- Signifiers make affordances perceivable. An affordance without a signifier leaves users guessing.
- Examples: a "pull" label on a door, an underlined link, a placeholder text in an input field, a scroll indicator on the side of a page
- Signifiers can be: labels, visual cues, sounds, spatial conventions, cultural symbols
- **Design question**: Does the design clearly signal where actions should take place?
- **Common failure**: No visual affordance for interactive elements; mystery meat navigation; unlabeled icons

### 3. Feedback
Sending back information about the result of an action — immediately and clearly.

- Without feedback, users don't know if something worked, is in progress, or failed
- Good feedback is: immediate, informative, and not excessive
- Forms: visual changes, sounds, haptics, status messages, progress indicators
- **Design question**: Does the user know what happened after every action?
- **Common failure**: Silent form submissions; no loading state; ambiguous error messages; success states indistinguishable from idle states

### 4. Conceptual Model (Mental Model)
The explanation the design projects about how the system works — whether accurate or not.

- A good conceptual model lets users predict outcomes and recover from errors
- Consistency is the engine of good conceptual models — if buttons behave the same way across the whole system, users build accurate models fast
- The File/Folder metaphor on a desktop is a classic example of a strong conceptual model
- **Design question**: Does the design help users build an accurate understanding of how it works?
- **Common failure**: Inconsistent behavior of similar elements; hidden state; settings that don't match observable outcomes; jargon that projects a false model

### 5. Mappings
The relationship between controls and their effects — ideally spatial, logical, or causal.

- Natural mappings leverage physical analogies (stove controls that mirror burner layout)
- In digital products, mappings show up as: scroll direction, drag behavior, control placement relative to effect
- Best mapping: controls placed directly on or near the thing they affect
- **Design question**: Can users predict what a control will do based on its position or appearance?
- **Common failure**: Stove burner syndrome (which knob controls which burner?); settings buried far from the thing they affect; scroll directions that violate platform conventions

### 6. Constraints
Design choices that limit possible actions — reducing errors and guiding correct behavior.

Four types:
- **Physical**: Structural limits (a USB plug that only fits one way)
- **Cultural**: Conventions and norms (red = stop, green = go)
- **Semantic**: Meaning-based limits (you can only rate something once)
- **Logical**: Spatial or conceptual reasoning (only one piece fits in the remaining slot)

**Forcing functions** — a special class: a constraint that requires an action before proceeding. Can prevent serious errors. Examples: confirm dialogs before destructive actions, requiring password confirmation before delete.

- **Design question**: Does the design prevent wrong actions before they happen?
- **Common failure**: Allowing impossible or destructive actions without warning; no confirmation for irreversible actions; forms that accept invalid input and only complain on submit

### 7. Discoverability (as a composite)
Whether users can determine, without instructions, what actions are possible and how to perform them.

This is the synthesis of affordances + signifiers + mappings + constraints working together. Discoverability breaks down when any of these are absent or misleading.

---

## The Seven Stages of Action

Norman's model of how humans act on the world. Useful for diagnosing *where* a design breaks down:

1. **Goal** — Form a goal ("I want to send this message")
2. **Plan** — Determine action sequence ("I'll click Send")
3. **Specify** — Identify the action ("That button labeled Send")
4. **Perform** — Execute the action (click it)
5. **Perceive** — Observe the result (what changed?)
6. **Interpret** — Make sense of it (did it work?)
7. **Compare** — Evaluate against the goal (did I achieve what I wanted?)

Stages 1–4 relate to **execution**. Stages 5–7 relate to **evaluation**.
Breakdowns at stages 1–4 = Gulf of Execution. Breakdowns at 5–7 = Gulf of Evaluation.

---

## Gulf of Execution vs. Gulf of Evaluation

**Gulf of Execution**: The gap between what the user wants to do and the actions the design makes available/visible.
- Bridged by: signifiers, affordances, constraints, mappings, a clear conceptual model

**Gulf of Evaluation**: The gap between what the system does and how easy it is to perceive and interpret that outcome.
- Bridged by: feedback, a clear conceptual model

The wider either gulf, the more frustrating and error-prone the experience.

---

## Types of Human Error

**Slips** — The right goal, wrong execution. Usually caused by automatic behavior in the wrong context.
- Action slips: pressing a familiar button by habit
- Memory slips: forgetting a step mid-task
- Design fix: break patterns when high-stakes actions are involved; use visual/positional differentiation

**Mistakes** — The wrong goal. The user has an incorrect model of the system.
- Rule-based: applying the wrong rule ("I think this toggle means on")
- Knowledge-based: lacking the information to decide correctly
- Design fix: improve the conceptual model; add just-in-time explanations; make system state visible

**Key principle**: When a user makes an error, the design is at fault — not the user.

---

## Three Levels of Design

**Visceral** — Immediate, automatic, emotional response. Does this look and feel right? Is it beautiful, inviting, repellent?

**Behavioral** — The experience of use. Does it work well? Is it efficient, learnable, error-resistant? This is where most usability work happens.

**Reflective** — The story we tell ourselves about using it. Pride in owning it? Frustration that lingers? Trust built or broken?

All three matter. A design can win viscerally and lose behaviorally. A design can be ugly and beloved (Post-its, original Craigslist) because the reflective layer is strong.

---

## Applying Norman to Digital Products

Principles map directly to digital contexts:

| Norman Principle | Digital Manifestation |
|---|---|
| Signifiers | Button labels, hover states, cursor changes, placeholder text, empty states |
| Feedback | Loading indicators, success/error messages, micro-animations, toast notifications |
| Conceptual Model | Consistent UI patterns, information architecture, naming conventions |
| Mappings | Control placement relative to effect, scroll direction, drag-and-drop behavior |
| Constraints | Disabled states, confirmation dialogs, form validation, permission gating |
| Affordances | Visual weight, depth, shape cues (raised buttons, card borders) |

**Physical products** lean most heavily on affordances, mappings, and physical constraints.
**Digital products** lean most heavily on signifiers, feedback, and conceptual model.
**Multi-step flows** add consistency across steps as a critical dimension.
