# Writing Clearly — Criteria Reference

The 14 criteria, organized by category. Critical and High criteria get full deep dives (mechanism, sub-components, examples, originator quotes, diagnostics, connections). Medium criteria get standard treatment (definition, why, good/poor examples, source).

For each draft you evaluate, score every criterion 🟢 / 🟡 / 🔴 with a one-line assessment and a quoted line from the draft.

---

## How to read this reference

Every criterion has the same shape:

- **Definition** — one sentence on what the property is
- **Why it matters** — the mechanism, the rule's source, why bad writing fails this test
- **Best direction** — high / low / mid
- **Sub-components** (Critical/High only) — finer-grained checks
- **Quote** (Critical/High only) — the originator's own words
- **Good example / Poor example** — concrete illustrations
- **Diagnostic** — how to test the draft against this criterion
- **Connections** — how this criterion interacts with others
- **Source** — cite this rule when explaining a fix in the rewrite

---

# Setup — what you do before the first sentence

## #1 — Answer-first ordering

**Definition:** The conclusion appears first. Arguments support it.

**Impact:** Critical (5/5). **Best direction:** present.

**Why it matters:** Readers give about three seconds before deciding to keep reading. A buried conclusion is an abandoned read. Barbara Minto's Pyramid Principle: "your thinking will be easy to grasp if you present ideas as a pyramid under a single point." McKinsey memos lead with BLOT (bottom line on top). Amazon's first page IS the press release — as if launching tomorrow. The structure forces clear thinking before drafting.

**Sub-components:**
- The first sentence of the doc states the position, not the topic
- The TL;DR (if present) carries the recommendation, not a summary of contents
- Sections lead with their conclusion; supporting points follow
- Press-release / one-line headline can stand alone if extracted

**Quote:** Bezos — "There is no way to write a six-page narratively structured memo and not have clear thinking… The narrative structure of a good memo forces better thought and better understanding of what's more important than what."

**Good example:** "Q3 churn dropped 12%. Three changes drove it: better onboarding, billing fixes, and a price-tier merge. Here's what we did and what we'd do differently."

**Poor example:** "This memo discusses the various factors affecting customer retention in Q3, including a number of operational and product-led initiatives that we have undertaken…"

**Diagnostic:** Read only the first sentence. Does the reader know your stance? If not — fail. Read only the headers + first sentence of each section. Same test.

**Connections:** Sets up criterion #2 (curse-of-knowledge) and #3 (skim-readable). All three together produce a doc that respects the reader's time.

**Source:** Barbara Minto, *The Pyramid Principle*; Amazon six-pager; McKinsey BLOT.

---

## #2 — Curse-of-knowledge defeat

**Definition:** The reader's context is supplied before the claim. No assumed jargon, acronyms, or shared chunks.

**Impact:** Critical (5/5). **Best direction:** low (low curse).

**Why it matters:** Pinker calls this "the single best explanation I know of why good people write bad prose." Writers stop seeing the tangible — the colors, shapes, sounds, textures — because they live in the abstract version of their topic. The reader doesn't share the writer's chunks. So "conditions of good acoustic isolation" lands as fog where "a quiet room" lands as image.

**Sub-components:**
- Define every acronym on first use
- Use tangible language for tangible things
- Translate jargon into plain English when plain English exists
- Show drafts to a representative reader and watch where they pause
- When a term must stay technical, define it once, then keep using it consistently

**Quote:** Pinker — "The writer can see something that the reader has not yet noticed, and orients the reader's gaze so that she can see it for herself. The purpose of writing is presentation, and its motive is disinterested truth."

**Good example:** "Our churn rate (% of customers who cancel each month) dropped from 4.2% to 2.7% — meaning we kept 35 more customers out of every 1,000 each month."

**Poor example:** "MRR retention improved materially YoY across all cohorts driven by our renewed focus on customer-centric value-engineering initiatives."

**Diagnostic:** Hand the draft to someone outside your context. Where do they pause? Those are the failures. If you can't, ask: would my mom understand this? Would a smart 16-year-old?

**Connections:** Pairs tightly with #9 (concrete) and #11 (no buzzwords) — those are the symptoms; this is the disease.

**Source:** Steven Pinker, *The Sense of Style*; Gopen & Swan, *The Science of Scientific Writing*; Google developer documentation style guide ("write for a global audience").

---

# Structure — how the doc is organized

## #3 — Skim-readable (5-second gist test)

**Definition:** The doc works at three zoom levels — 5-second scan, 30-second skim, full read. A scanner reading only headers + bolded phrases extracts the argument.

**Impact:** High (4/5). **Best direction:** present.

**Why it matters:** Steve Krug's *Don't Make Me Think* — readers don't read, they scan in F-shape patterns. Minto's pyramid is recursive: every node stands alone with its own answer-first structure. Amazon's section headlines summarize the section's argument. BBC: lead sentence carries all key facts. Stripe: TL;DRs at the top.

**Sub-components:**
- Headers state claims, not topics ("Q3 churn dropped 12%" not "Q3 metrics")
- Bold the load-bearing words: read only the bold and you should get the spine
- TL;DR at top of any doc longer than one page
- First sentence of each paragraph carries the paragraph's claim (topic sentence)
- The 5-second scan should yield the recommendation, not just the subject

**Quote:** Steve Krug — "We don't read pages. We scan them."

**Good example:** Headers: "Recommendation: extend the trial to 30 days" / "Why: 80% of cancellations come from users who couldn't complete onboarding in 14 days" / "What it costs: $40K/yr in additional CAC".

**Poor example:** Headers: "Background" / "Analysis" / "Considerations" / "Next Steps". Reader gets nothing from the scan.

**Diagnostic:** Show the doc to someone for 5 seconds. Ask what it says. Got the gist → green. Got the topic but not the position → yellow. Nothing useful → red.

**Connections:** Pairs with #1 (answer-first at the doc level) and #4 (spine + short paragraphs). When all three are green, the reader can read at any depth and get value.

**Source:** Steve Krug, *Don't Make Me Think*; Minto pyramid recursion; Amazon six-pager headlines; BBC News style guide; plainlanguage.gov ("informative headings").

---

## #4 — Visible spine + short paragraphs

**Definition:** Paragraphs are short; one idea each. Headers exist; they carry the argument forward. White space is generous.

**Impact:** High (4/5). **Best direction:** present.

**Why it matters:** BBC: "one idea per sentence in one paragraph." Amazon banned PowerPoint because slides hide structural failure; narrative exposes it. Zinsser: "Clear, uncluttered prose respects the reader's time." Your CLAUDE.md: "Short paragraphs. White space."

**Sub-components:**
- One idea per paragraph
- Paragraphs ≤ 4 sentences for most prose (longer is fine for narrative argument; flag anything >7 sentences)
- Every section has a header that carries a claim or question
- White space between sections is generous — never wall-of-text

**Quote:** Zinsser — "Clutter is the disease of American writing. We are a society strangling in unnecessary words, circular constructions, pompous frills and meaningless jargon."

**Good example:** Three-sentence paragraphs, each one carrying a single point. Headers like "Why we're doing this" and "What we'd cut to make room."

**Poor example:** Wall-of-text paragraphs running 12+ sentences with multiple ideas tangled together. Headers like "Background and Considerations."

**Diagnostic:** Read only the section headers in sequence. Do they tell the argument? If not — fail. Look at the longest paragraph. Is it doing more than one thing? Split it.

**Connections:** Required for #1 (answer-first) and #3 (skim-readable) to work at length.

**Source:** Zinsser, *On Writing Well*; BBC News style guide; Rohit's CLAUDE.md.

---

## #5 — Parallel structure

**Definition:** Coordinate ideas appear in similar grammatical form.

**Impact:** Medium (3/5). **Best direction:** present.

**Why it matters:** Strunk Rule 15. Parallel form signals parallel meaning. When forms differ, the reader works to figure out whether the meaning differs too.

**Good example:** "We need to ship faster, hire smarter, and spend less."

**Poor example:** "We need to ship faster, smarter hiring, and reducing our costs."

**Source:** Strunk & White, Rule 15; Pinker, *The Sense of Style*.

---

# Sentence — how each line reads

## #6 — Active voice with named agent

**Definition:** Subject does the verb. The agent is visible.

**Impact:** High (4/5). **Best direction:** active.

**Why it matters:** Strunk Rule 14. Orwell. Plain language guidelines. Active voice keeps the agent visible — keeps responsibility visible. Passive often hides who, sometimes deliberately. Your CLAUDE.md: "Active voice. Always."

**Sub-components:**
- "We decided X" not "It was decided that X"
- "The team shipped Y" not "Y was shipped"
- Caveat: passive is correct when the agent is genuinely unknown ("The company was founded in 1962") or when emphasis belongs on the receiver ("Three engineers were laid off"). Don't witch-hunt — context matters.

**Quote:** Orwell — "Never use the passive where you can use the active."

**Good example:** "We cut churn by 12% in Q3."

**Poor example:** "Churn was cut by 12% in Q3."

**Diagnostic:** Find every "was/were/been + past participle." Ask: who did this? If the agent is knowable and it matters who did it — rewrite active.

**Connections:** Often paired with #2 (curse-of-knowledge) — passive voice often hides the agent because the writer assumed the reader knew.

**Source:** Strunk & White, Rule 14; Orwell, *Politics and the English Language*; plainlanguage.gov; Rohit's CLAUDE.md.

---

## #7 — Sentence economy + rhythm

**Definition:** Short sentences by default. Mix lengths for rhythm. Sentences over 30 words split.

**Impact:** High (4/5). **Best direction:** short by default; varied for rhythm.

**Why it matters:** Flesch-Kincaid: sentence length is half the readability formula. BBC: "one idea, one sentence." Hemingway: short sentences for punch, long for breath. Variety produces rhythm; uniformity produces drone. Your CLAUDE.md: "Short sentences. If a sentence can be cut in half, cut it."

**Sub-components:**
- Most sentences ≤ 20 words
- Sentences > 30 words split (usually contain two ideas)
- Mix 5-word sentences with 20-word sentences for rhythm
- Read aloud: where you run out of breath, cut

**Quote:** Hemingway's iceberg principle (paraphrased): if a sentence can carry only one truth, let it carry only one.

**Good example:** "Ship it. The data is solid. Engineering says two weeks. Marketing wants three. We're going in two."

**Poor example:** "After careful consideration of the various factors involved, including the input from engineering as well as marketing, and accounting for the data we've collected over the past quarter, we have determined that the appropriate timeline for shipping is two weeks rather than the three weeks suggested by some stakeholders."

**Diagnostic:** Word-count every sentence. Count those over 30 — split each. Read aloud and mark every place you needed extra breath.

**Connections:** Often improved by fixing #10 (omit needless words) — long sentences are usually padded short ones.

**Source:** Flesch-Kincaid readability research; Hemingway; BBC News style guide; Rohit's CLAUDE.md.

---

## #8 — Stress position discipline

**Definition:** New or emphatic information at the end of the sentence. Old or contextual information at the start.

**Impact:** Medium (3/5). **Best direction:** present.

**Why it matters:** Gopen & Swan's *Science of Scientific Writing*. Readers naturally emphasize material at the end of a sentence — the "stress position." Information placed there gets weight. Information buried in the middle gets ignored. The topic position (sentence start) is for context — what links backward and forward.

**Good example:** "Of all the metrics we track, the one that matters most is **net retention**."

**Poor example:** "Net retention is the metric that, of all the metrics we track, matters the most."

**Source:** George Gopen & Judith Swan, "The Science of Scientific Writing" (American Scientist, 1990); Strunk & White Rule 18.

---

# Word — what to put in and what to cut

## #9 — Concrete over abstract

**Definition:** Specific nouns, strong verbs, numbers, names, places, dates. Not abstract gestures.

**Impact:** Critical (5/5). **Best direction:** concrete.

**Why it matters:** Strunk Rule 12: "definite, specific, concrete." Hemingway: a precise noun beats an imprecise noun + modifier. Pinker: classic style means writers see *things*, not categories. Your CLAUDE.md: "Concrete over abstract: 'cut churn by 12%' beats 'improved retention metrics.'" Numbers, named people, real figures, specific places — these are what make abstract arguments feel true.

**Sub-components:**
- Numbers > adjectives ("12% drop" > "significant drop")
- Named entities > pronouns + categories ("Stripe" > "the payment provider")
- Strong verbs > adverbs ("crept" > "walked slowly")
- Concrete nouns > abstract nouns ("a quiet room" > "conditions of acoustic isolation")
- Cited dates and times > "recently" / "soon"

**Quote:** Strunk — "Prefer the specific to the general, the definite to the vague, the concrete to the abstract."

**Good example:** "On March 14, three engineers walked into the conference room and told Patrick the migration would take six months, not six weeks."

**Poor example:** "Recently, several team members raised concerns regarding the timeline associated with the migration project."

**Diagnostic:** Find the most abstract sentence in the draft. Replace it with something specific. If you can't, you don't have a claim — you have a gesture.

**Connections:** Core defense against #2 (curse-of-knowledge). When concrete nouns are missing, the curse is the cause.

**Source:** Strunk & White, Rule 12; Hemingway; Pinker, *The Sense of Style*; Rohit's CLAUDE.md.

---

## #10 — Omit needless words (with AI-slop pattern detection)

**Definition:** Cut every word that doesn't earn its place. Including the modern slop patterns that LLMs produce by default.

**Impact:** Critical (5/5). **Best direction:** dense.

**Why it matters:** Strunk Rule 17 — the most quoted rule in English writing. "Vigorous writing is concise." Not because short = good, but because every word should earn its place. Zinsser's whole book is about clutter. Gowers: "Be short, be simple, be human." Your CLAUDE.md: "If a sentence can be cut in half, cut it."

**Sub-components — general cuts:**
- Throat-clearing ("In order to," "Due to the fact that," "It should be noted that")
- Redundant adverbs ("really," "very," "quite," "actually")
- Doubled adjectives ("each and every," "true and accurate")
- Preamble ("First, let me say," "I'd like to begin by")
- Summary-of-summary sentences ("In summary, this section explored…")

**Sub-components — AI-slop pattern detection** (specific patterns LLMs and lazy writers produce by default; flag any of these):

| Pattern | Example | Fix |
|---------|---------|-----|
| Slop vocabulary | delve, tapestry, multifaceted, navigate, pivotal, robust, comprehensive, leverage, foster, cultivate | Use plain English |
| Em-dash overuse | More than 1 em-dash per ~150 words, or em-dashes used as casual sentence punctuation | Use periods or commas |
| Identical sentence starts | Three sentences in a row beginning with the same word/phrase | Vary openings |
| Transition-word glue | Paragraphs opened with "Additionally," "Furthermore," "Moreover" | Cut the transition; let the next sentence stand |
| Summary-ending paragraphs | "In summary, this paragraph explored…" | Cut entirely |
| Prose-to-bullets bias | Bullets used when content is genuinely prose (continuous narrative argument) | Convert to paragraphs |
| Vague openers | "In today's fast-paced world," "It's important to note that," "Let's dive in" | Cut and start with the substance |
| Confident-but-vague claims | "This represents a paradigm shift" with no specifics | Replace with what actually changed |
| "I" as default opener | Multiple sentences starting "I think," "I believe," "I want to" | Cut the "I think" and state the claim |

**Quote:** Strunk — "Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. This requires not that the writer make all his sentences short, or that he avoid all detail and treat his subjects only in outline, but that he make every word tell."

**Good example:** "Ship it. Engineering's blocker is solved." (5 words doing 5 words of work.)

**Poor example:** "It's important to note that, in light of the recent resolution of the engineering team's blocker, we should now be in a position to consider moving forward with shipping the product." (32 words doing 5 words of work.)

**Diagnostic:** Cut 25% of any draft. Did meaning drop? If not, the cuts were right. Repeat. Then check the AI-slop table — flag every pattern hit.

**Connections:** Tightly bound to #11 (buzzwords), #12 (hedges), #13 (filler). All cuts. When all four are green, slop disappears.

**Source:** Strunk & White, Rule 17; Zinsser, *On Writing Well*; Gowers, *Plain Words*; Wikipedia's "Signs of AI writing"; agent-style RULE-A through I; Rohit's CLAUDE.md.

---

## #11 — No buzzwords or jargon when plain English works

**Definition:** Replace corporatese with plain English. Replace jargon with plain English when plain English exists.

**Impact:** High (4/5). **Best direction:** plain.

**Why it matters:** Orwell's dying metaphors ("ride roughshod," "tow the line"). Gowers's commercialese. Pinker's classic style. Your CLAUDE.md flags a specific list. These signal status performance, not communication. Buzzwords also paper over thinking that hasn't happened — when you can't be specific, you reach for "synergy."

**Replacement table:**

| Buzzword | Plain |
|----------|-------|
| leverage (verb) | use |
| synergy | cooperation, fit |
| ecosystem | industry, market, community |
| learnings | lessons |
| ideate | think, brainstorm |
| pivot | change direction |
| circle back | follow up |
| deep-dive | investigate |
| paradigm shift | major change (or specify what changed) |
| best practice | what works |
| value-add | benefit |
| stakeholder | (name the person or group) |
| double-click | look closer |
| net-net | overall |
| reach out | call, email, ask |

**Quote:** Orwell, "Politics and the English Language" — "Never use a metaphor, simile or other figure of speech which you are used to seeing in print."

**Good example:** "We use Stripe for payments because it's faster to integrate."

**Poor example:** "We leverage Stripe within our payments ecosystem to drive synergistic value-add."

**Diagnostic:** Run a buzzword grep against the draft. Each hit gets flagged.

**Connections:** Symptom of #2 (curse-of-knowledge). Often paired with #9 (concrete) failures — buzzwords tend to be abstract substitutes.

**Source:** Orwell, *Politics and the English Language*; Gowers, *Plain Words*; Pinker; Rohit's CLAUDE.md (specific list).

---

## #12 — No hedges or weak qualifiers

**Definition:** Cut hedge words and weak qualifiers. Stand behind your claims.

**Impact:** High (4/5). **Best direction:** confident.

**Why it matters:** Pinker on overstate/understate. Hedges leak confidence and leak responsibility. "It could be argued" usually means "I argue." "Somewhat" is the writer covering their bet. Your CLAUDE.md flags this directly: cut excessive qualifiers.

**Cut list:**
- somewhat / potentially / perhaps / arguably / generally / typically / often / sometimes / largely
- "it could be argued" / "one might say" / "it seems that" / "it appears that"
- "I think" / "I believe" / "in my opinion" (when stating a fact you're confident in)
- "may possibly" / "could potentially" (the doubled hedge — pick one or none)

**Caveat:** Genuine uncertainty deserves precise language. "Ranges from X to Y" beats "may possibly be." "We don't know yet" beats "it's somewhat unclear." Don't fake confidence about things you're guessing at — but don't hedge claims you actually believe.

**Good example:** "Ship it. The data is solid."

**Poor example:** "It seems that we should perhaps consider potentially shipping it, as the data appears to somewhat support that direction."

**Diagnostic:** Strike every hedge. Does the claim still stand? If yes — keep it cut. If no — replace the hedge with precise uncertainty language.

**Connections:** When #12 fails, #14 (confidence without arrogance) usually fails too — hedging is one symptom of unclear voice.

**Source:** Pinker, *The Sense of Style*; agent-style RULE-08; Rohit's CLAUDE.md.

---

# Voice — how it sounds

## #13 — No filler or throat-clearing

**Definition:** Cut warm-up phrases, transitional fluff, and meta-commentary about the writing itself.

**Impact:** High (4/5). **Best direction:** none.

**Why it matters:** Zinsser called this "throat-clearing" — phrases that warm up the engine without saying anything. Your CLAUDE.md flags filler openers ("Great question," "Certainly!," "Absolutely") and restating the question before answering. Article-craft already enforces hook-first openings ("In recent years…" and "It has long been known…" are death).

**Cut list:**
- **Conversational filler:** Great question / Certainly / Absolutely / Of course / Sure thing
- **Throat-clearing:** It's worth noting that / Note that / It's important to mention / It bears mentioning / Let me say
- **Time-vague openers:** In recent years / In today's [adjective] world / Throughout history / It has long been known
- **Restated questions:** "You're asking about X. The answer to your question about X is…"
- **Meta-commentary:** "I'd like to discuss…" / "This memo will explore…" / "First, let me say…"

**Quote:** Zinsser — "Examine every word you put on paper. You'll find a surprising number that don't serve any purpose."

**Good example:** "Ship it Friday."

**Poor example:** "Great question! It's worth noting that in today's fast-paced environment, the question of when to ship is one I'd like to address. The answer is Friday."

**Diagnostic:** Look at sentence #1 of the draft, the first sentence of every section, and the last sentence of each paragraph. These are where filler hides.

**Connections:** Overlap with #10 (omit needless words) — filler is a subset. But #13 is specifically about voice tics, not all word-economy violations.

**Source:** Zinsser, *On Writing Well*; Rohit's CLAUDE.md (filler openers list); article-craft (hook).

---

## #14 — Confidence without arrogance

**Definition:** Direct declarations. No hedges. But also no chest-beating, no smugness, no condescension.

**Impact:** Medium (3/5). **Best direction:** present.

**Why it matters:** Your CLAUDE.md: "Confident tone without arrogance." Pinker's classic style — the writer points; the reader sees. The voice is one of someone with something to say, not someone trying to impress.

**Good example:** "Here's what I'd do." / "We were wrong about Q2. Here's what we missed and what we'll change."

**Poor example (hedged):** "I'm probably not the right person to answer this, but maybe we could consider…"

**Poor example (arrogant):** "Obviously, anyone who's actually thought about this would already know that…"

**Source:** Pinker, *The Sense of Style* (classic prose); Zinsser (identity / voice); Rohit's CLAUDE.md.

---

# Cross-criterion notes

**When the draft fails multiple Critical criteria:** the rewrite needs full rework, not edits. Surface-level fixes can't save a draft that buries its conclusion (#1) and assumes shared context (#2). Recommend the writer restart from the recommendation.

**When the draft fails multiple Word criteria (#9, #10, #11, #12) but Setup and Structure are green:** mechanical autoresearch loop is the right next step. The skill produces the audit; `/autoresearch:autoresearch` iterates the rewrite until composite score climbs.

**When the draft fails Setup criteria (#1, #2) but Word and Sentence are green:** subjective work. `/autoresearch:reason` is the right next step — adversarial refinement converges on the right opening and the right level of context.

**Mode-specific failure pattern:** when the user is writing a board memo (Exec Comms Mode) but the draft reads like a Slack message — the core 14 may all pass but the mode-specific structural requirements fail. Always score against the mode's reference if a mode is invoked.
