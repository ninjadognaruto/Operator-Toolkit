# /spark — Criteria Reference

The complete reference for the 12 criteria used to score candidate ideas. Read this before producing detailed evaluations.

## How to read this reference

- **Critical and High criteria** include the full treatment: mechanism, sub-components, originator quotes, named examples, diagnostic question, and connections to other criteria.
- **Medium and Low criteria** include definition, why it matters, good/poor examples, and source.
- Criteria are numbered for cross-reference (e.g., #1, #2). Numbers are stable — don't renumber when reordering by tier.

---

## CATEGORY: DEMAND REALITY

### 1. Desperate-Demand Concentration — 🔴 Critical

**Definition**: A small group of people are so frustrated with the current state that they'd pay or switch immediately. Depth × number — Paul Graham's Well test. The same area under the curve, but a small group desperately wanting beats a large group lukewarm.

**Mechanism**: Lukewarm demand can't sustain switching costs, word-of-mouth, or pricing power. Desperate demand creates pull strong enough to drag a rough early product through its first 100 customers. Founders who solve for "many people kinda want this" build features; founders who solve for "5 people will cry if I don't ship this" build companies.

**Sub-components**:
- **The Well shape** — narrow + deep, not wide + shallow. The shape determines whether you're building a niche addiction or a horizontal nice-to-have.
- **Drowning-in-demand signal** (Seibel) — early users emailing daily, can't ship fast enough, word-of-mouth without paid acquisition. The PMF tell.
- **Dogs eating the dog food** (Rachleff) — value hypothesis confirmed by behavior, not stated interest. "Yes that would be helpful" is not evidence.
- **Specific named users** — founder can name 5 specific people, by name, who would pay tomorrow.

**Quotes**:
- PG: *"You can either build something a large number of people want a small amount, or something a small number of people want a large amount. Choose the latter."*
- Seibel: *"If you are not drowning in demand, you don't have product-market fit."*
- Rachleff: *"If the dogs don't want to eat the dog food, then it doesn't matter how cost effectively you can acquire people."*

**Named examples**:
- **Microsoft / Altair Basic** — a few thousand desperate hobbyists. Tiny market, deep pain. Became Microsoft.
- **Facebook** — Harvard-only at launch. Tens of thousands of students, ~75% adoption in a month. The Well at maximum depth.
- **Wealthfront** — engineers at Facebook → engineers at LinkedIn → tech workers. Each segment was small but desperate, built word-of-mouth, expanded.
- **Counter-example**: Color (the photo-sharing app) — $41M raised, vague "anyone with a phone" target, no concentrated user. Died in months.

**Diagnostic question**: *"Can the founder name 5 specific people, by name, who would pay tomorrow? Are those 5 people from a coherent group with shared circumstance?"* If no to either, demand concentration is a red flag.

**Connections**:
- Reinforced by **#2 Painkiller Severity** — concentrated demand requires acute pain
- Reinforced by **#7 Wedge Specificity** — without concentration, the wedge is too thin to power expansion
- Inverted by **trend-extension origin** — "X for Y" ideas almost never have concentrated demand at the start

**Source**: Paul Graham, *How to Get Startup Ideas* (2012); Michael Seibel, drowning-in-demand framing; Andy Rachleff, *Value Hypothesis* (Wealthfront/Benchmark).

---

### 2. Painkiller Severity — 🔴 Critical

**Definition**: The pain being addressed is acute, identifiable, and triggers action — not a vitamin (nice-to-have) or candy (impulse delight). Empirical: ~80% of SaaS unicorns sell painkillers.

**Mechanism**: Painkillers self-recruit — users actively search for solutions. Vitamins require convincing, which is the death tell: if the founder finds themselves convincing prospects they have a problem, the pain isn't real. Combined with Moesta's switching equation, only acute Push (current pain) generates enough force to overcome Anxiety + Habit.

**Sub-components**:
- **Acute vs. chronic** — chronic pain is worse to live with but harder to monetize; acute pain triggers action and willingness to pay
- **Firing event identifiable** (Moesta) — the specific moment when the user fires the existing solution. "On Tuesday morning when [X happens], I'm done with [current solution]."
- **Workaround intensity** — users are already building manual workarounds, paying for half-solutions, hacking together duct-tape stacks. Strong workarounds = strong pain.
- **The convincing tell** — if the pitch requires convincing prospects of the problem's existence, the idea is a vitamin.

**Quotes**:
- Christensen: *"Customers don't buy products; they hire them to do a job."*
- Moesta: *"Money is made on the anxiety side."*

**Named examples**:
- **Stripe** — acute developer pain. Payment integration was a multi-week nightmare; Stripe collapsed it to one curl command. Extensive workarounds (Authorize.net, custom PCI flows) signaled the severity. Painkiller.
- **Slack** — acute team-comms pain post-email. Email thread chaos was a daily firing event in fast-moving teams. Workarounds: HipChat, Campfire, group SMS.
- **Counter-example**: WeWork's pivot to "community/lifestyle." The original short-term office painkiller worked. The lifestyle pivot was a vitamin nobody asked for.
- **Counter-example**: Most "wellness" apps — vitamins masquerading as painkillers. Users say they care about meditation; behavior says they don't.

**Diagnostic question**: *"Name the firing event in one sentence: When [specific situation], the user fires [current solution] because [specific failure]. What workarounds are they already building?"* If the firing event is fuzzy or workarounds don't exist, severity is fuzzy.

**Connections**:
- Reinforces **#1 Desperate-Demand Concentration** — concentrated demand requires acute pain
- Inverted by **#9 Schlep / Tarpit Filter** — tarpit ideas often masquerade as painkillers (e.g., "find new restaurants" feels acute but isn't)
- Multiplies under **organic origin modifier** — when the founder is the user, painkiller severity is easier to verify

**Source**: Knight Capital, *SaaS Pain Framework*; Bob Moesta, *Demand-Side Sales 101*; Clayton Christensen, *Competing Against Luck*.

---

## CATEGORY: FOUNDER EDGE

### 3. Founder-Idea Fit — 🔴 Critical

**Definition**: The founder has earned closeness to the problem — either as the target user themselves, or through demonstrated deep work in the domain. The best predictor of eventual product/market fit, especially for first-time founders (Dixon).

**Mechanism**: Founders with earned closeness skip months of discovery — they already know the user's failure modes, vocabulary, unspoken needs, and political landscape. Made-up ideas pattern-match to plausibility, not desperation, and crumble on first contact with real users. Founder/idea fit also creates durability under pivots: when the idea evolves (it always does), the founder still understands the problem space.

**Sub-components**:
- **Self-as-target-user** (PG, Altman) — founder personally feels the pain. Strongest form of fit. "I built this for myself."
- **Earned expertise** (Dixon) — closeness built through prior work, deep research, or test projects. Counts even when founder isn't the user.
- **Founder personifies the product** (Dixon) — the company is an extension of the founder's worldview, taste, and obsessions. Visible in early product decisions.
- **Brutal honesty test** — "I want to use this" ≠ founder/idea fit. Need real evidence: time spent in the problem space, customer relationships, prior failed attempts, deep domain artifacts.

**Quotes**:
- PG: *"The way to get startup ideas is not to try to think of startup ideas. It's to look for problems, preferably problems you have yourself."*
- Altman: *"In the best case, you yourself are the target user."*
- Dixon: *"Many of the best ideas seem like bad ideas at first… if you have founder/market fit, your conviction will be deep enough to push through."*

**Named examples**:
- **Apple** — Wozniak built the Apple I for himself. Hobbyist target user = founder. Maximum fit.
- **Stripe** — the Collison brothers had run Auctomatic; they had personally suffered payment-integration pain and knew the developer's frustration vocabulary cold.
- **Wealthfront** — engineers building for engineers. The team understood the target customer's mental model precisely.
- **Counter-example**: Quibi — Hollywood executives building for "Gen Z mobile attention spans" they had no closeness to. $1.75B raised, 6 months alive.
- **Counter-example**: Most "Uber for X" pitches — founders without closeness to either side of the marketplace they're trying to build.

**Diagnostic question**: *"What has the founder done in the last 12 months that demonstrates earned closeness? If the answer is 'talked to some users,' fit is shallow. Look for: prior career proximity, deep artifacts (essays, side projects, communities), specific named relationships in the domain."*

**Connections**:
- Multiplies **#11 Mission Durability** — earned fit creates 10-year durability
- Compensates for moderate weakness in **#1 Desperate-Demand Concentration** at the very earliest stage (founder is User #1)
- Inverse of **trend-extension origin** — pattern-matching ideas almost always lack founder fit

**Source**: Chris Dixon, *Founder/Market Fit* (2011); Paul Graham, *Organic Startup Ideas*; Sam Altman, *Startup Playbook*.

---

## CATEGORY: STRATEGIC INSIGHT

### 4. Contrarian Insight / The Secret — 🟠 High

**Definition**: The idea rests on a specific, testable claim about the world that few people agree with. Thiel's contrarian question: "What important truth do very few people agree with you on?" Every great business is built on a hidden truth.

**Mechanism**: If everyone agrees the idea is good, it's already taken or commoditized. The signature: the idea looks bad, weird, or trivial at first glance, which is why no one is racing to build it. Encouragement is a warning sign — universal "yeah that sounds nice" indicates a tarpit. Real ideas get dismissed by sophisticated outsiders.

**Sub-components**:
- **The secret itself** — a specific, testable claim about the world (not a vague "AI will change everything")
- **Bad-on-first-glance** (PG, Altman) — sophisticated outsiders dismiss it as trivial, weird, or unworkable
- **The encouragement test** (Caldwell) — universal positive reception = tarpit; controversy = signal
- **First-principles, not consensus** — derived from independent thinking, not pattern-matching

**Quotes**:
- Thiel: *"What important truth do very few people agree with you on?"*
- Altman: *"It's much easier to do something new and hard than something derivative and easy."*
- PG: *"The best ideas sound bad but are in fact good."*

**Named examples**:
- **Airbnb** — "people will let strangers into their homes." Universally dismissed in 2008. The secret: trust infrastructure (reviews, photos, payments) had reached the threshold to make it work.
- **Stripe** — "developers will pay 2.9%+30¢ for an API when banks are 'free'." Most thought banks owned this distribution. The secret: developers pay for time, not just money.
- **Bitcoin** — "decentralized money will work." Fringe in 2009. The secret: the consensus mechanism solves the double-spend problem without trust.
- **Counter-example**: Most "AI for X" pitches in the post-ChatGPT wave — no contrarian thesis, just pattern-matching on the trend. "AI is good for X" isn't a secret; everyone agrees.

**Diagnostic question**: *"State the secret in one sentence. Is it specific and testable? Do smart people push back on it when you say it out loud? If they nod politely, you don't have a secret — you have a consensus."*

**Connections**:
- Often the engine of **#5 Monopoly Trajectory** — secrets create category-defining advantages
- Often discovered through **#6 Why-Now Wave** — new tech makes old impossibilities possible
- Multiplies under **inversion / contrarian origin modifier**
- Tested by **#12 Adversarial Survival** — the secret must survive its strongest critic

**Source**: Peter Thiel, *Zero to One* (2014); Paul Graham, *How to Get Startup Ideas*; Sam Altman, *Startup Playbook*.

---

### 5. Monopoly Trajectory — 🟠 High

**Definition**: The idea has a clear path to monopoly economics — 10x improvement in one specific dimension, with defensibility through proprietary tech, network effects, scale economics, or brand. Thiel's four monopoly traits combined with Altman's 10x rule.

**Mechanism**: Monopoly profits fund long-horizon R&D and survive competition. 10% better gets commoditized; 10x better creates a category. The four moat types interact — strongest companies have multiple moats (Google = proprietary tech + scale + brand; Facebook = network effects + scale + brand). Last-mover advantage matters more than first-mover: be the final defining innovation in a category, not the first attempt.

**Sub-components**:
- **10x in one specific dimension** — better in one thing by an order of magnitude, not 30% better across the board. Pick the dimension.
- **Four moat types** (Thiel):
  - **Proprietary technology** — 10x better tech that can't be replicated easily (Google search, SpaceX reusability)
  - **Network effects** — value increases with users (Facebook, Stripe's payment network)
  - **Economies of scale** — unit economics improve with scale (Amazon logistics, AWS)
  - **Brand** — hardest to build, hardest to replicate (Apple, Coca-Cola)
- **Last-mover advantage** — dominate so completely that the category closes behind you
- **Compound mechanics** (Altman) — exponential dynamics in unit economics

**Quotes**:
- Thiel: *"Competition is for losers."*
- Thiel: *"Every moment in business happens only once. The next Bill Gates will not build an operating system."*
- Altman: *"We ask how the company will one day be a monopoly."*

**Named examples**:
- **Google** — 10x search quality (PageRank) + scale moat (crawl + ad infrastructure) + brand. Triple moat.
- **Amazon** — 10x book selection at launch → infrastructure moat (logistics + AWS) + scale economics + brand.
- **PayPal** — 10x friction-free payments + network effects on eBay first, then broader.
- **Counter-example**: Foursquare — first to local check-in, no defensibility, eaten by Facebook/Yelp/Google Maps. First-mover, not last-mover.
- **Counter-example**: Most "AI wrapper" startups — no proprietary tech, no network effects, no scale moat. Margins compressed by foundation models.

**Diagnostic question**: *"Name the 10x dimension in one sentence. Name the moat type. If the answer is 'we'll be better at lots of things' or 'we'll have data,' it's not a monopoly bet."*

**Connections**:
- Engined by **#4 Contrarian Insight** — without the secret, monopoly bets are flat
- Multiplied by **#6 Why-Now Wave** — moats often emerge from timing
- Reinforces **#7 Wedge Specificity** — small markets are where monopolies start

**Source**: Peter Thiel, *Zero to One*; Sam Altman, *Startup Playbook*.

---

### 6. Why-Now Wave — 🟠 High

**Definition**: A specific shift — new tech, behavior, regulation, or economic condition — makes this idea newly possible right now. The "why now?" answer must be concrete; without it, the idea has either been tried before (graveyards exist) or is too early (correct but unfundable).

**Mechanism**: 29% of failed startups fail from bad timing (CB Insights). Idea quality and execution don't beat wrong timing. Great ideas "live in the future" — they exist because the founder noticed something newly possible that others haven't yet. Strong Why-Now compensates for weaker Founder-Idea Fit (the tech-pull origin), because the wave itself is the unfair advantage.

**Sub-components**:
- **Live in the future** (PG) — founder is positioned to notice what's now possible
- **Tech-pull discovery** (Tan) — recent winners came in with discoveries from playing with new tech
- **The tailwind** — a real, specific shift, not vague optimism
- **The graveyard check** — if others have tried, what is specifically different now? Cheaper compute? New regulation? Behavior shift?
- **Right-on-time, not too early or too late** — too early = unfundable; too late = crowded

**Quotes**:
- PG: *"Live in the future, then build what's missing."*
- Garry Tan: *"They came in having played with the technology and discovered something."*

**Named examples**:
- **Uber** — smartphones (2007+) + GPS + behavior shift toward on-demand. Before 2009, impossible.
- **Stripe** — cloud-native + APIs + developer-led adoption. Before 2010, payment integration was sales-led.
- **ChatGPT-era LLM startups** — transformer breakthrough (2017) + scale (2020+) + chat interface (2022). Wave gave even mediocre teams runway.
- **Airbnb** — smartphones + trust infrastructure (reviews, payments) + 2008 recession (people needed money). Triple tailwind.
- **Counter-example**: Webvan (1999 grocery delivery) — right idea, decade too early. Same idea worked in 2014+ as Instacart.
- **Counter-example**: Most blockchain startups 2017–2022 — vague "decentralization" without specific Why-Now beyond hype.

**Diagnostic question**: *"Why couldn't this be built 5 years ago? Why might it be too late in 5 years? Both answers should be specific. If the answer is 'we'll be better' or 'now is the time,' there's no real Why-Now."*

**Connections**:
- Engines **#4 Contrarian Insight** — secrets often come from new tech making old impossibilities possible
- Compensates for moderate weakness in **#3 Founder-Idea Fit** under the tech-pull origin
- Multiplies **#5 Monopoly Trajectory** — first to ride a real wave can claim last-mover status

**Source**: Paul Graham, *How to Get Startup Ideas*; CB Insights, *Why Startups Fail*; Garry Tan interviews.

---

### 7. Wedge Specificity — 🟠 High

**Definition**: A narrow, specific entry point with a credible expansion path. Thiel's small-market-first + Rachleff's value hypothesis on a narrow audience. Dominate a tiny specific market, then expand.

**Mechanism**: The narrowest possible wedge has highest density of pain → fastest validation → strongest word-of-mouth → cleanest expansion path. Broad wedges spread thin and validate nothing — "any business that needs X" is no wedge at all. The expansion path must be credible: each adjacent segment shares enough job/circumstance with the beachhead that the product naturally extends.

**Sub-components**:
- **Specific named user** (Seibel) — one sentence describing exactly who. No "or" or "and."
- **Density** — high concentration of pain in this segment; the segment is more painful than average
- **Expansion path** — credible movement from beachhead to adjacent segments
- **Avoid the "anyone who" trap** — "any business," "anyone who works remotely," "all companies with X" = no wedge

**Quotes**:
- Thiel: *"The perfect target market for a startup is a small group of particular people concentrated together and served by few or no competitors."*

**Named examples**:
- **Amazon** — books → media → everything. Books were a perfect wedge: cataloged, non-perishable, high SKU count favoring online. Expansion path: any cataloged item.
- **Facebook** — Harvard → Ivy League → colleges → world. Each step was an adjacent segment with shared circumstance.
- **PayPal** — eBay power-sellers → broader eBay → general payments. Started in one corner of one platform.
- **Wealthfront** — Facebook engineers → tech workers → mass affluent. Each segment shared "high income, low time, suspicious of incumbent advisors."
- **Counter-example**: Most "platform for X" pitches at seed — no wedge, just aspiration. "We'll start with everyone."

**Diagnostic question**: *"State the wedge in one sentence: 'Our wedge is X.' Does it contain 'or' or 'and'? Does it name a specific group with shared circumstance? What's the next segment after this one, and why?"*

**Connections**:
- Requires **#1 Desperate-Demand Concentration** — without concentrated demand, the wedge is too thin
- Required by **#5 Monopoly Trajectory** — small markets are where monopolies start
- Inverted by **trend-extension origin** — "X for Y" pitches usually have no specific wedge

**Source**: Peter Thiel, *Zero to One*; Andy Rachleff, *Value Hypothesis*; Michael Seibel.

---

## CATEGORY: WEDGE & ENTRY (continued)

### 8. Market Trajectory — 🟡 Medium

**Definition**: The market is small now but on a fast-growing curve. Sam Altman: "small + fast-growing > big + flat." The idea is not a feature; it's a category seed.

**Why it matters**: Andreessen — "in a great market, the market pulls product out of the startup." Market growth covers a lot of execution sins. Small + flat markets cap the company; small + fast covers the same ground in a few years.

**Good example**: Slack at Series A — workspace messaging was tiny, growing fast as remote work + smartphone use exploded. Compounded into massive.

**Poor example**: Building an MP3 player in 2024. Market exists but is shrinking; product can't outgrow the curve.

**Diagnostic**: Is the market growing >40% YoY in the segments you'd actually serve? Is the growth rate accelerating or decelerating?

**Source**: Sam Altman, *Startup Playbook*; Marc Andreessen, *The Only Thing That Matters*.

---

### 9. Schlep / Tarpit Filter — 🟡 Medium

**Definition**: Avoids known tarpit ideas (graveyards that look easy) and embraces necessary unsexy work (schleps). Schlep blindness (PG): founders unconsciously avoid tedious-looking ideas. Tarpit ideas (Caldwell): ideas that look fun but have killed dozens of startups.

**Why it matters**: Tarpit ideas trap founders in sunk-cost loops because the idea felt good and got encouragement. Necessary schleps (payments, compliance, sales, operations-heavy work) keep competitors out — the unsexiness is a moat.

**Good example**: Stripe (schlep — payment integration is unsexy and hard, which is why no one had done it well). Plaid (schlep — bank data integration). Both became massive.

**Poor example**: "App to discover new restaurants/events," "Uber for X," "social network around [niche]." Classic tarpits — they feel sexy, get encouragement, kill founders for years.

**Tarpit watchlist** (Caldwell): apps to find restaurants/events; apps to coordinate with friends; "Uber for X"; new-grad social networks; "marketplace for X" without specific liquidity thesis.

**Diagnostic**: Does this idea appear on the tarpit watchlist? If yes, what specifically makes this attempt different from the dozens that failed?

**Source**: Paul Graham, *Schlep Blindness*; Dalton Caldwell + Michael Seibel, *Tarpit Ideas* (YC Library).

---

### 10. Falsifiable Test — 🟡 Medium

**Definition**: A cheap, fast experiment can validate or kill the idea within weeks, not years. Eric Ries — build-measure-learn. Rachleff — value hypothesis must be testable before growth hypothesis.

**Why it matters**: Untestable ideas burn capital. The strongest founders design experiments that produce binary signals: "Did 10 specific users sign up + use it weekly within 4 weeks? If no, kill or pivot."

**Good example**: Dropbox's MVP demo video (validated demand without building product). Airbnb listing photos for the inauguration weekend (validated supply + demand for one weekend before scaling).

**Poor example**: "We'll know if it's working in 18 months when we have 100K users." Not falsifiable on a useful timeline.

**Diagnostic**: Name the experiment, the timeline, and the binary outcome that would kill the idea. If you can't name a kill condition, the test isn't falsifiable.

**Source**: Eric Ries, *The Lean Startup*; Andy Rachleff, *Value Hypothesis*.

---

## CATEGORY: FOUNDER EDGE (continued)

### 11. Mission Durability — 🟡 Medium

**Definition**: The founder will work on this for 10 years. The mission is large enough to attract talent and survive pivots. Altman: "easier to recruit and persist on missions; derivative ideas can't attract talent."

**Why it matters**: Companies take 7–10 years minimum. Energy and identity-fit predict whether the founder survives the trough of sorrow. Missions also pull talent — engineers and operators want to work on something that matters.

**Good example**: SpaceX (mission: multi-planetary species — durable for decades). Stripe (increase the GDP of the internet — durable across products). Anthropic (AI safety — durable even as the AI landscape shifts).

**Poor example**: "I want to flip this in 18 months" or "we're going where the money is right now." Talent won't show up.

**Diagnostic**: Will the founder still be working on this when the idea has been pivoted three times? If the energy depends on the specific current shape, durability is low.

**Source**: Sam Altman, *Startup Playbook*; Paul Graham, *How to Get Startup Ideas*.

---

## CATEGORY: SURVIVABILITY (continued)

### 12. Adversarial Survival — 🟢 Low

**Definition**: The idea survives its strongest critic. Munger inversion: "what would have to be true for this to definitely fail?" Pre-mortem: assume failure in 3 years; what killed it? If the strongest argument against the idea is unanswerable, the idea is fragile.

**Why it matters**: This is a sanity check, not a primary signal. Most ideas have weaknesses; the question is whether the weakness is fatal or manageable. Pair with the Idea Origin modifier — contrarian-origin ideas need especially strong adversarial survival because their thesis IS contrarian.

**Good example**: Airbnb adversarial test in 2008 — "people won't let strangers in their homes." Answer: trust infrastructure addresses this. Survived. Stripe adversarial test — "developers won't pay 2.9% when banks are free." Answer: developers pay for time, not money. Survived.

**Poor example**: "What if the platform we're building on changes its terms?" without an answer. Many "Facebook app" startups died on this in the 2008–2012 era.

**Diagnostic**: State the strongest argument against the idea in one sentence. Is the answer specific or hand-wavy? Hand-wavy = fragile.

**Source**: Charlie Munger (inversion); Gary Klein (pre-mortem); see `skills/personal/munger-philosophy`.

---

## How the criteria interact (cross-criterion patterns)

These patterns emerge when scoring real ideas:

1. **Demand stack**: #1 (Concentration) + #2 (Severity) + #7 (Wedge) form the "is anyone actually paying?" stack. If any of these is red, the idea is in trouble regardless of other strengths.

2. **Insight stack**: #4 (Secret) + #5 (Monopoly) + #6 (Why-Now) form the "is this idea different and durable?" stack. Strong stack = potentially category-defining; weak stack = me-too execution play.

3. **Founder stack**: #3 (Fit) + #11 (Mission) determine whether the founder survives the 10-year journey. Both green = durable; both red = will quit before PMF.

4. **Survivability checks**: #9 (Tarpit) + #10 (Falsifiable) + #12 (Adversarial) catch the "great-on-paper, dies-in-execution" failure mode.

5. **Origin compensations**:
   - **Organic** → fit and severity criteria are easy to verify; relies on Why-Now being explicit
   - **Tech-pull** → Why-Now and Secret are easy to verify; needs work on fit and demand concentration
   - **Customer-signal** → demand concentration is easy to verify; needs work on tarpit filter (you're rarely the first to hear it)
   - **Trend-extension** → start skeptical; verify all 12

---

## Sources (canonical)

- Paul Graham — [How to Get Startup Ideas](https://paulgraham.com/startupideas.html), [Organic Startup Ideas](https://paulgraham.com/organic.html), [Schlep Blindness](https://paulgraham.com/schlep.html)
- Sam Altman — [Startup Playbook](https://playbook.samaltman.com/), [How to Be Successful](https://blog.samaltman.com/how-to-be-successful)
- Peter Thiel — *Zero to One* (Crown Business, 2014)
- Michael Seibel + Dalton Caldwell — [Where Do Great Startup Ideas Come From](https://www.ycombinator.com/library/DU-dalton-michael-where-do-great-startup-ideas-come-from), Tarpit Ideas talks
- Marc Andreessen — [The Only Thing That Matters](https://pmarchive.com/guide_to_startups_part4.html)
- Andy Rachleff — [Coining Product/Market Fit](https://www.unusual.vc/andy-rachleff-on-coining-the-term-product-market-fit/)
- Bob Moesta + Chris Spiek — *Demand-Side Sales 101*; KB: `domains/product.md`
- Clayton Christensen — *Competing Against Luck* (HarperBusiness, 2016), JTBD theory
- Chris Dixon — [Founder/Market Fit](https://cdixon.org/2011/06/19/foundermarket-fit/)
- Charlie Munger — KB: `skills/personal/munger-philosophy`
- Eric Ries — *The Lean Startup* (Crown Business, 2011)
- CB Insights — [Why Startups Fail](https://www.cbinsights.com/research/report/startup-failure-reasons-top/)
