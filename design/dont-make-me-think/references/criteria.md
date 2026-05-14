# Don't Make Me Think — criteria reference

13 criteria for evaluating page-level usability against Steve Krug's *Don't Make Me Think* (3rd ed., 2014). Critical and High criteria carry full deep dives — mechanism, sub-components, Krug's quotes, named examples, diagnostic questions, and connections. Medium and Low get the standard treatment.

## How to read this reference

- **Impact**: 5 = Critical, 4 = High, 3 = Medium, 2 = Low
- **Best direction**: Whether passing means more, less, or balanced — most criteria here are pass/fail-direction (binary "obvious or not")
- **Sources**: Krug chapter + supporting practitioner sources where the mechanism comes from elsewhere
- **Behavior test**: The literal physical test Krug or a practitioner would run to score this

---

## Category 1 — Cognitive Load (the page in 5 seconds)

### 1. Self-Evidence (5-Second Test)

- **Impact**: 5 (Critical) | **Source**: Krug Ch 1
- **Definition**: When a stranger looks at the page, they understand what it is and what they can do — without reading body text or asking.

**The mechanism.** Krug's overriding principle: every second the user spends figuring out "what is this?", "where do I click?", "why is it called that?" is a cognitive tax. Pages that pass require zero conscious puzzle-solving. Krug's metaphor: a properly designed door — you never need a "push/pull" sign.

**Three levels** (Krug's hierarchy):
- **Self-evident** — user understands without reading anything. Strive for this.
- **Self-explanatory** — user reads briefly and gets it. Settle here for genuinely novel things.
- **Requires figuring out** — fail.

**Krug's "things that make us think" list:**
- Cute or clever names (e.g., "Mindscape" for what should be called "Tools")
- Marketing-induced names ("ScreamerNet Pro" instead of "Movies")
- Company-specific jargon ("Just the FAQs" — only insiders parse this)
- Unfamiliar technical names
- Links and buttons that aren't obviously clickable
- Anything requiring scrolling to discover the page's purpose

**Behavior test (literal):**
- **5-Second Test** — show the page for 5 seconds, hide it, ask: "What is this site? What can you do here?" If the user can answer without reading body copy → self-evident. If they need a sentence of label text → self-explanatory. If they need a paragraph or are wrong → fail.

**Krug quote:** *"I think Krug's First Law of Usability is: Don't make me think! ... It means that as far as is humanly possible, when I look at a Web page it should be self-evident. Obvious. Self-explanatory."*

**Connections:**
- Reinforces #2 (Visual Hierarchy) — strong hierarchy makes the page self-evident at a glance
- Reinforces #4 (Clickability) — affordance failure means even an "obvious" page makes the user think "is this a link?"
- Antagonizes #6 (Convention Adherence) violations — breaking conventions is the most common cause of failed self-evidence

**Common failures:**
- Hero copy that describes the company instead of what the user does on the page
- Image-only navigation with no labels
- Multiple competing CTAs with equal weight
- Industry jargon as primary labels

**Diagnostic question:** Could you describe what this page lets the user do, using only the words visible above the fold, without reading body paragraphs?

---

### 2. Visual Hierarchy

- **Impact**: 5 (Critical) | **Source**: Krug Ch 3 ("Billboard Design 101")
- **Definition**: The page's geometry telegraphs what's important, what's grouped, and what's nested — readable in 1-2 seconds at a glance.

**The mechanism.** Krug compares browsing to reading a billboard at 60mph. Users don't read top-to-bottom; they consume visual hierarchy in the first 1-2 seconds and use it to decide where to click. If everything is the same size, weight, and color, the page conveys no priority — the user has to read everything to figure out what matters.

**Krug's three rules** (verbatim from Ch 3):

1. **The more important something is, the more prominent it is.** Achieved through size, weight, color, white space, or position near the top — usually a combination.
2. **Things that are related logically are related visually.** Group similar items under a heading, in the same visual style, or in a defined area. The relationships must be readable from the page's geometry.
3. **Things are 'nested' visually to show what's part of what.** A section name ("Computer Books") sits visually above the items in that section. Hierarchy is conveyed by containment.

**Behavior test (literal):**
- **Squint test** — defocus your eyes (or apply heavy Gaussian blur to a screenshot). The most important thing should still pop. The grouping should still be visible.

**Krug quote:** *"A page with a clear visual hierarchy is easy to grasp. A page without one is just a wall of stuff."*

**Connections:**
- Direct enabler of #1 (Self-Evidence) — without hierarchy, no page is self-evident
- Enables #3 (Scannability) — scanners use hierarchy to land on the right region
- Connects to Norman's signifiers (`don-norman-review`) — visual hierarchy IS the macro-signifier of the page

**Common failures:**
- Everything the same size (no priority signaled)
- Decorative emphasis used instead of meaning (bold/colors used for visual interest, not importance)
- Misleading grouping (related items separated, unrelated items adjacent)
- Inconsistent treatment of the same level of content across the site
- Headings that look like body text (no hierarchy between them)
- Modal cards / boxes around unrelated items, suggesting false grouping

**Diagnostic questions:**
- Squinting at the page, what's the first thing your eye lands on? Is that the right thing?
- Are headings clearly bigger/bolder than body? Is H2 visibly subordinate to H1?
- Do related items look related (same card style, same alignment, shared container)?
- Does any item look more important than it actually is?

---

### 3. Scannability

- **Impact**: 4 (High) | **Source**: Krug Ch 2 ("How we really use the Web")
- **Definition**: The page is structured for scanning — heading-led, short paragraphs, bulleted lists, highlighted key terms — not built for linear reading.

**The mechanism.** Krug's three "facts of life" about Web users (Ch 2):

1. **We don't read pages. We scan them.** Users hunt for words matching their task, words matching personal interests, and "trigger words" (Free, Sale, your name).
2. **We satisfice.** We pick the first reasonable option, not the best. (Borrowed from Herbert Simon — *satisfice* = "satisfy" + "suffice".)
3. **We muddle through.** We don't figure out how things work; we forge ahead with vaguely plausible stories.

Why: we're in a hurry, we know we don't have to read everything, and scanning has worked for us our whole reading lives.

**Krug's design implications:**
- Use plenty of headings (so scanners land on the right section)
- Keep paragraphs short
- Use bulleted lists
- Highlight key terms
- Format text for scanning, not reading

**Behavior test (literal):**
- **Scan test** — close your eyes for 3 seconds. Open. Sweep the page like a normal user (5-10 seconds, no deep reading). Where did your eye stop? What words registered? If you had to take an action, do you know which one to take based on the scan alone?

**Krug quote:** *"What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest or vaguely resembles the thing they're looking for. There are usually large parts of the page that they don't even look at."*

**Connections:**
- Depends on #2 (Visual Hierarchy) — scanning needs landmarks
- Direct beneficiary of #8 (Word Economy) — fewer words = scannable
- Reinforced by #7 (Information Scent) — scanned link text must signal destination

**Common failures:**
- Wall-of-text paragraphs with no headings
- Headings indistinct from body
- Long sentences buried under each other
- Key terms not highlighted (link, bold, distinctive color)
- Text justified or formatted for "elegance" over scanning

**Empirical backing.** Krug doesn't run his own experiments — he references Jared Spool's and Nielsen's eye-tracking and reading-rate work, plus 25+ years of usability test observation. Empirical scanning patterns (F-shape, zig-zag) are now well-documented in NN/g eye-tracking studies (2006, 2017).

**Diagnostic question:** If a user can only spend 8 seconds on this page, can they leave knowing what to do?

---

### 4. Clickability Affordance

- **Impact**: 4 (High) | **Source**: Krug Ch 1 + Ch 6
- **Definition**: Clickable elements are visually distinct from non-clickable ones at a glance — affordances are not hidden behind hover, icon-only mystery meat, or stylistic flatness.

**The mechanism.** "Is this clickable?" is the canonical thought-tax. Every link or button that doesn't look like a link or button forces the user to either guess or hover — and on touch devices, hover doesn't exist. Krug specifically calls out that links and buttons that aren't obviously clickable are top of his "things that make us think" list.

**Krug's specific affordance signals (web conventions):**
- Underlined or distinctly colored text links
- Buttons with obvious button styling (raised, contained, distinct background)
- Cursor change on hover (desktop only — don't rely on it)
- Hover/active visual states
- Icons paired with labels (avoid icon-only "mystery meat" navigation)

**Behavior test (literal):**
- **Clickability scan** — for every interactive element on the page, ask: would a user know this is clickable WITHOUT hovering? On mobile (no hover), is it still obvious?

**Krug's anti-pattern list:**
- Icon-only nav with no labels (the original "mystery meat")
- Text links that look identical to body text
- Flat buttons indistinguishable from cards
- Carousels where the dots/arrows are barely visible
- "Click here" floating in unstyled text
- Hover-only reveal of clickable areas

**Connections:**
- Multiplier on #1 (Self-Evidence) — even an obvious page fails if users can't tell what to click
- Antagonizes #6 (Convention Adherence) — flat-design trends often break long-standing button conventions
- Closely related to Norman's *signifiers* (`don-norman-review`)

**Krug quote:** *"If something looks like a button, it should act like a button. If something looks like a link, it should act like a link. And if something is a button or a link, it should look like one."*

**Common failures:**
- Modern flat-design buttons that look like text labels
- Card-based UI where the entire card is clickable but only the title looks interactive
- Hover-revealed action buttons (invisible on touch)
- Inline links the same color as body text
- Icon-only navigation bars

**Diagnostic question:** Without hovering, can you identify every clickable thing on this page? On a mobile device — same answer?

---

### 5. Trunk Test Pass

- **Impact**: 5 (Critical) | **Source**: Krug Ch 6 ("Street signs and Breadcrumbs")
- **Definition**: Dropped onto any internal page cold, the user can answer six orientation questions at a glance.

**The mechanism.** Krug's vivid metaphor: imagine you're blindfolded, stuffed in the trunk of a car, driven somewhere, and dumped on a random page of a website. Before the daze wears off, can you answer:

1. **What site is this?** (Site ID — usually logo, top-left)
2. **What page am I on?** (Page name — usually a clear page title)
3. **What are the major sections of this site?** (Sections — primary nav)
4. **What are my options at this level?** (Local nav)
5. **Where am I in the scheme of things?** ("You are here" — current section highlighted, breadcrumbs)
6. **How do I search?** (Search box — typically top-right)

If any answer requires more than a glance, the page fails.

**Why this matters.** Modern users land on internal pages from search and social — not the homepage. The homepage's careful narrative does nothing for them. Every page must orient the user as if it were a homepage. The trunk test is the way to score this.

**Behavior test (literal):**
- **Trunk test** — take a screenshot of an internal page (not the homepage). Show it cold to someone unfamiliar with the site. Have them answer the 6 questions. Note which they can't answer or get wrong.

**Krug quote:** *"You should be able to walk up to any page on a site and find: 1) Site ID. 2) Page name. 3) Sections (primary nav). 4) Local nav. 5) 'You are here' indicators. 6) Search."*

**Connections:**
- Strongly enabled by #6 (Convention Adherence) — conventional placement of these 6 elements is what makes the test passable
- Enabled by #2 (Visual Hierarchy) — orientation elements need to be prominent
- Enables #7 (Information Scent) — once oriented, users can navigate

**Common failures:**
- Logo not in top-left or not clickable home
- No page title (or page title is generic like "Home" on a non-home page)
- Hidden navigation (full-screen hamburger on desktop)
- No breadcrumb or current-section highlight
- Search hidden behind an icon with no label
- Section names so abstract the user can't guess what's in each

**Diagnostic question:** Take any internal page. Show it to a stranger for 10 seconds. Can they tell what site it is, what page it is, and where to go next?

---

## Category 2 — Wayfinding (how I move and orient)

### 6. Convention Adherence

- **Impact**: 4 (High) | **Source**: Krug Ch 1, Ch 6
- **Definition**: The page uses standard placements, patterns, and labels for common elements — innovating only when the new pattern is demonstrably better.

**The mechanism.** Conventions are the accumulated wisdom of millions of user-hours. They're prior probabilities the user brings to every page. When you follow them, the user doesn't think — they just use. When you break them, every user pays the cost of relearning.

**Krug's stance:** *"There's a great temptation to reinvent the wheel ... but you shouldn't, unless you're sure your new way is clearly better."* Innovation must be measurably better, not just different. The default bias is convention.

**Why designers resist:** Krug points out that praise, awards, and high-profile job offers are "rarely based on best use of conventions." The pull toward novelty is professional, not user-centered.

**Specific web conventions Krug names:**
- **Logo** — top-left, clickable, returns to homepage
- **Search box** — top-right (or top-center), labeled "Search"
- **Navigation** — persistent across pages (except homepage and forms)
- **Underlined or distinctly colored links**
- **Site sections** — named in a clickable list
- **Utilities** (sign-in, cart, help) — top-right
- **Breadcrumbs** — show path from home

**Behavior test (literal):**
- **Convention check** — go down Krug's list. For each convention, is the page following it? If not, is the deviation justified by being demonstrably better (not just stylistically preferred)?

**Krug quote:** *"Innovate when you know you have a better idea, but take advantage of conventions when you don't."*

**Connections:**
- Direct enabler of #5 (Trunk Test Pass) — conventional placement of orientation elements is what makes trunk test passable
- Reinforces #1 (Self-Evidence) — pages following conventions feel "obvious" because users have prior knowledge
- Antagonized by award-driven design — Awwwards-style sites often fail this hard

**Common violations:**
- Logo centered or right-aligned
- Logo not clickable to home
- Search hidden behind icon with no label, or absent entirely
- Hamburger nav on desktop (where there's no space constraint justifying it)
- Footer links that should be header links
- Mystery-meat icons replacing labeled nav

**The "junior designer trap":** Krug's caveat — "use conventions" can be over-applied as an excuse to never test anything new. The point isn't "don't innovate"; it's "innovate only when you've verified the new way is better."

**Diagnostic question:** Walk through Krug's convention list. For every deviation, can you justify it with evidence that the new pattern outperforms the standard?

---

### 7. Information Scent

- **Impact**: 4 (High) | **Source**: Krug Ch 4 ("Animal, Vegetable, or Mineral?") + Pirolli & Card's *Information Foraging Theory*
- **Definition**: Link text and category labels signal what the user will find — and choices at every fork are exhaustive, mutually exclusive, and unambiguous.

**The mechanism.** Krug's Second Law: *"It doesn't matter how many times I have to click, as long as each click is a mindless, unambiguous choice."* Information scent is what makes a click mindless — the link text "smells like the prey." Pirolli & Card's research shows users decide where to click based on the perceived signal that this path leads to what they want.

Krug's corollary: *"Three mindless, unambiguous clicks equal one click that requires thought."* This kills the "3-click rule" myth. Click count is not the cost; thought count is.

**Krug's "Animal, Vegetable, or Mineral" frame:** Twenty Questions opens with three categories that are exhaustive (everything fits) and mutually exclusive (no overlap). Web nav should aspire to that — at every fork, the user should know with confidence which choice contains what they want.

**Behavior test (literal):**
- **Click-mindlessness test** — walk a realistic user task. At each fork, is the choice unambiguous? Could the user decide without thinking, or do they have to deliberate which category contains their goal?
- **Information scent test** — for each primary link, ask: does the label predict what the user finds on the next page?

**Krug quote:** *"It doesn't matter how many times I have to click, as long as each click is a mindless, unambiguous choice."*

**Connections:**
- Enables Krug's Second Law from #5 (Trunk Test) — once oriented, users navigate by scent
- Reinforced by #9 (Self-Explanatory Labels) — labels are the scent
- Direct application of Pirolli & Card's *information foraging* (web research field)

**Common failures:**
- Vague category names ("Resources", "Solutions", "Tools" — all overlap, none exclusive)
- Marketing-y link text ("Learn more", "Discover") that doesn't say what the user finds
- Categories that overlap (a "Support" item could live under "Help" or "Resources" or "Customer")
- Missing mid-level categories — user has to drill 4 levels before seeing actual items
- "Click here" used as link text

**Diagnostic question:** For every primary link or category, can the user predict what they'll find on the next page from the label alone? Are there forks where they'd have to guess?

---

## Category 3 — Copy (the words on the page)

### 8. Word Economy

- **Impact**: 4 (High) | **Source**: Krug Ch 5 ("Omit Needless Words" — title borrowed from E.B. White's *Elements of Style*)
- **Definition**: Copy is cut to the bone. No happy talk. No marketing fluff above task content. Every word earns its place.

**The mechanism.** Krug's Third Law: *"Get rid of half the words on each page, then get rid of half of what's left."* Three benefits:
1. Reduces noise on the page
2. Makes useful content more prominent
3. Makes pages shorter — users see more without scrolling

**Krug's two big targets:**

**Happy talk** — *"Introductory text that's supposed to welcome users to the site and tell them how great it is, or to tell them what they're about to see in the section they just entered. It's content-free."* Examples Krug calls out:
- "Welcome to our site!"
- "We're delighted you've stopped by."
- Marketing intros at the top of section pages
- "Our mission is..." paragraphs above the actual product/feature

**Instructions** — Krug: *"Eliminate the need for instructions by making everything self-explanatory. When instructions must exist, cut them to a minimum, then cut them again."*

**Behavior test (literal):**
- **Half-the-words test** — mentally (or literally with a markup) cut 50% of the visible copy. Does the page still work? If yes, the original had bloat. Repeat — cut 50% of what's left. Often it still works.

**Krug quote:** *"Happy talk must die."* (Title of his most-quoted argument.)

**Connections:**
- Direct enabler of #3 (Scannability) — fewer words = scannable
- Enables #1 (Self-Evidence) — task-relevant copy near the top, not buried below welcome text
- Reinforced by #9 (Self-Explanatory Labels) — labels carry meaning so paragraphs aren't needed

**Common failures:**
- Hero section is a marketing paragraph instead of a clear "what this is + what to do"
- "Welcome to..." opener
- Section pages with 3-paragraph intros above the actual list
- Form fields with explanatory paragraphs above each one
- Tooltips and popups that explain things that should be obvious from the label

**The brutal version of the test.** Look at the first paragraph of body copy on the page. Could the page work with that paragraph deleted? Almost always yes. Delete it.

**Diagnostic question:** What's the first useful, task-relevant content on the page — and how much fluff sits above it? How much copy could be deleted without affecting what the user can do?

---

### 9. Self-Explanatory Labels

- **Impact**: 3 (Medium) | **Source**: Krug Ch 1 ("Things that make us think") + Ch 4
- **Definition**: Buttons, links, and category names use plain, descriptive language — not cute, branded, or cryptic terms.

**Why it matters.** Krug separates "happy talk" (filler paragraphs) from "cute names" (labels that obscure meaning). A clever button label adds friction every time a user encounters it. Plain language is invisible — users read it without thinking.

**Krug's anti-pattern list:**
- Cute / clever names ("Mindscape" instead of "Tools")
- Marketing-induced names ("ScreamerNet Pro" instead of "Movies")
- Company-specific jargon ("Just the FAQs", "MyDashboard Pro")
- Branded versions of standard concepts (calling Settings "Mission Control")

**Good examples:**
- "Sign in" (not "Begin your journey")
- "Add to cart" (not "Acquire this item")
- "Settings" (not "Control center")
- "Search" (not "Discover")

**Behavior test:** For every button, link, and category name on the page, ask: would a user who's never seen the brand understand what this does in plain English?

**Connection:** Reinforces #7 (Information Scent) — labels are the primary scent signal. Reinforces #1 (Self-Evidence).

**Diagnostic question:** Are any labels using branded or clever language where standard terms would work?

---

## Category 4 — Respect (how the design treats the user)

### 10. Goodwill Reservoir

- **Impact**: 5 (Critical) | **Source**: Krug Ch 11 ("Usability as Common Courtesy")
- **Definition**: The site surfaces what users came for, accepts forgiving input, and doesn't push work onto users that the system could do — preserving the user's finite reservoir of patience.

**The mechanism.** Krug's metaphor: every user arrives with a finite reservoir of goodwill. Each obstacle drains it. Each pleasant surprise refills it. Drain it dry → user leaves and tells others.

**Things that DRAIN the reservoir** (Krug's full list):
- Hiding information users want — especially **support phone numbers and pricing**
- Punishing users for not doing things your way — strict format requirements on phone numbers ("must include dashes"), zip codes, addresses
- Asking for unnecessary personal information
- Shoveling work onto the user — making them calculate, retype, reformat
- Sham sincerity (fake "we care" copy)
- Putting marketing fluff (Flash intros, popup interstitials) between the user and what they came for
- Amateurish-looking design — sloppy, broken, unprofessional sites bleed trust

**Things that REFILL the reservoir:**
- Knowing the main things users want and making them obvious and easy
- Telling users what they want to know (shipping costs, fees, errors, what's coming)
- Saving steps wherever possible — postcode lookup auto-fills address; "remember me"; smart defaults
- Forgiving mistakes — flexible input parsing
- Apologizing when you can't fix something
- Making the site easy to learn and remember

**Behavior test (literal):**
- **Goodwill scan** — ask: are pricing, contact, fees, and core info one click away? Are forms forgiving (does it accept "(555) 123-4567" and "5551234567"?)? Are there any popups, interstitials, or paywalls between the user and the thing they came for? Is the site doing work for the user, or making the user do work?

**Krug quote:** *"When you make a site that's hard to use, you're being rude to your users."*

**Connections:**
- Encompasses error handling and forgiveness (originally a separate criterion in early drafts — merged here)
- Antagonizes growth-team practices that drain goodwill (popups, mandatory account creation, gated pricing)
- Sister to Norman's "design as moral act"

**Common failures:**
- Pricing page requires signup or "contact sales"
- Email signup popup before user has seen anything
- Phone number format errors ("must be in format XXX-XXX-XXXX")
- Required fields that aren't actually required
- Account creation required to see what the product does
- "Cookie consent" walls of text
- Auto-playing video / sound

**The trade-off Krug acknowledges.** Some goodwill drains exist for valid business reasons — a paywall, a required signup, a legal disclosure. The point is that every drain has a cost paid in goodwill. Make sure the cost is worth it; don't drain casually.

**Diagnostic question:** Walk through the page's friction points. For each one — popup, gate, format requirement, hidden info — what's draining and what's refilling? Net positive or net negative?

---

### 11. Mobile Parity

- **Impact**: 3 (Medium) | **Source**: Krug Ch 10 ("Mobile: It's not just a city in Alabama anymore", new in 3rd ed.)
- **Definition**: The mobile experience offers the same content, depth, and goals as desktop — sized for thumb, with persistent navigation visible, one-handed usable.

**Krug's central claim.** "Mobile usability is the same as usability — there's no separate set of principles." But mobile imposes harsher tradeoffs.

**Krug's mobile-specific guidance:**
- **Don't strip out content "because it's mobile."** Users want the same things; they just want them packaged for the screen.
- **Avoid the "mobile site / desktop site" toggle anti-pattern.** Brittle and frustrating.
- **Beware the hamburger menu.** Krug: *"Out of sight is out of mind. When you hide your nav, users use it less."*
- **Affordance loss without hover** — clickable things must look extra-clickable on touch.
- **Chrome stealing space** — every persistent UI element costs precious vertical pixels. Earn it.

**Behavior test:** view the site on a real phone, one-handed, in transit. Can you navigate, find core info, and complete the primary task? Or does it feel like a stripped-down preview of the "real" site?

**Common failures:**
- Tap targets smaller than 44px
- Critical content stripped on mobile
- Multiple competing chrome elements eating the viewport
- Hamburger as the only nav with no visible primary actions
- Sticky banners (cookie consent, signup) eating most of the screen

**Note:** When evaluating a mobile screenshot, this criterion gets elevated — see SKILL.md page-type modifier.

---

### 12. Accessibility Floor

- **Impact**: 3 (Medium) | **Source**: Krug Ch 12 ("Accessibility and you")
- **Definition**: The page meets the high-impact accessibility basics — alt text, semantic headings, label-input pairing, sufficient color contrast.

**Krug's framing.** Accessibility is a usability question, not a separate project. If the site is hard for sighted, mouse-using, English-literate users, it'll be impossible for screen-reader users. Fix usability first, then run the accessibility audit.

**Krug's "low-hanging fruit":**
- Use `alt` attributes on images (descriptive for content images, empty for decorative)
- Use proper heading structure (`h1` → `h2` → `h3`, not just visual size)
- Make forms accessible: label-input pairing
- Use proper page titles
- Use adequate color contrast (WCAG 4.5:1 for body text)

**Krug's recommended reading:**
- *"Guidelines for Accessible and Usable Web Sites"* by Mary Theofanos and Janice (Ginny) Redish
- *A Web for Everyone* by Sarah Horton and Whitney Quesenbery

**Note on assessability.** From a static screenshot, you can assess color contrast and visible heading hierarchy. Alt text, semantic heading tags, and label-input pairing require code or DevTools inspection.

**Diagnostic question:** Can you spot any failing contrast (small text on subtle background)? Does the heading hierarchy match the visual size hierarchy? Are form fields paired with visible labels?

---

## Category 5 — Verification (process, not interface)

### 13. Tested With Real Users

- **Impact**: 2 (Low) | **Source**: Krug Ch 9 + *Rocket Surgery Made Easy*
- **Definition**: The page has been put in front of real users via DIY think-aloud testing — 3 users, monthly, with the team observing.

**Why it's listed.** Krug's argument: without testing, every other criterion above is speculation. But this is a *process* criterion, not an interface one — it can't be assessed from a screenshot or even from a live URL. It can only be assessed by asking the team.

**The DIY recipe (Krug's core method):**
- **Frequency**: One morning a month. Block "the third Thursday."
- **Users**: 3 per session (not 8). Three users finds most of the serious problems.
- **Tasks**: A handful of realistic tasks, read aloud and attempted.
- **Method**: Think-aloud protocol; facilitator nudges.
- **Observers**: Whole team in observation room (12-15 typical).
- **Debrief**: Over lunch, after all 3 sessions. Each observer writes top 3 problems; group picks overall top 3.
- **Output**: Short list of worst issues to fix in the next month.

**Krug vs. Nielsen on N=3 vs N=5+:** Nielsen's classic claim was 5 users finds 85% of problems. Krug pushes lower — 3 is enough, and the lower bar means teams will actually do it. Frequency beats sample size.

**RITE+Krug:** Practitioners combine Krug's monthly DIY rhythm with the RITE method (Rapid Iterative Testing and Evaluation), where you fix the bug between participants if it's blocking the test.

**Note:** mark this Not Assessable when evaluating from artifacts alone. Surface it to the user as: "Has this been tested with 3 real users? If not, every other finding is speculation."
