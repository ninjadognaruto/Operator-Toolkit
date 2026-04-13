# Font readability criteria — complete reference

33 research-backed criteria for evaluating font readability. Each entry includes: definition, why it matters (with direction — high/low/middle), impact rating (1-5), and font examples.

## How to read this reference

- **Impact**: 5 = Critical, 4 = High, 3 = Medium, 2 = Low, 1 = Minimal
- **Best direction**: Whether high, low, or middle values produce the best readability
- **Good font**: A well-known font that scores well on this criterion
- **Poor font**: A well-known font that scores poorly on this criterion

---

## Part 1: Letterform properties

### 1. x-height ratio
- **Impact**: 5 (Critical) | **Best**: High (~67-74% of cap height)
- **Definition**: Height of lowercase letters relative to capitals
- **Why**: Higher ratio = larger readable body at any given font size. Too low = tiny lowercase strains eyes. Too high = crushes ascenders/descenders. Sweet spot ~67-74%.
- **Good**: Verdana (~74%), Inter (~72%), Lucida Grande (87.5%)
- **Poor**: Didot (~54%), Centaur, Bernhard Modern
- **Research**: Legge & Bigelow 2011, Sawyer et al. 2025 (248 WPM vs 232 WPM at small sizes)

### 2. Stroke weight contrast
- **Impact**: 5 (Critical) | **Best**: Low (~1:1 to 1.5:1 for body text)
- **Definition**: Ratio between thickest and thinnest parts of each letter
- **Why**: High contrast = hairlines vanish at small sizes, dazzle effect in paragraphs. Low contrast = even texture, no fatigue. Low is better for body text.
- **Good**: Futura (~1.1:1), Inter, Helvetica, Source Sans Pro, Roboto
- **Poor**: Bodoni (~6:1), Didot, Playfair Display
- **Research**: Beier & Oderkerk 2021, Chung & Bernard 2018 (optimal stroke width 12-16% of letter height)

### 3. Aperture openness
- **Impact**: 5 (Critical) | **Best**: High (wide open terminals)
- **Definition**: How wide the openings are on partially enclosed letters (c, e, a, s, g)
- **Why**: Open = instant letter recognition, brain doesn't "close" the shape via Gestalt. Closed = c/e/o become ambiguous. Strongest single legibility predictor in research.
- **Good**: Frutiger, FF Meta, Source Sans Pro, Inter, Calibri, Trebuchet MS
- **Poor**: Helvetica/Neue Helvetica (canonical closed-aperture example)
- **Research**: Beier & Larson 2010, Beier et al. 2022 ("exclude fonts with closed apertures for glance-like reading")

### 4. Counter size
- **Impact**: 4 (High) | **Best**: High (generous enclosed white space)
- **Definition**: The enclosed or partially enclosed white space inside letters like o, b, d, p, e
- **Why**: Larger counters = more spatial frequency information for recognition. Small counters fill in at small sizes or low resolution. Directly scales with legibility.
- **Good**: Verdana, Georgia, Lucida, Inter, Frutiger
- **Poor**: Bodoni (narrow counters), heavy/condensed weights of any font
- **Research**: Tinker 1964 ("greater enclosed white space = greater legibility"), Legge et al. 1985

### 5. Character disambiguation
- **Impact**: 5 (Critical) | **Best**: High (maximum distinction)
- **Definition**: How distinctly similar characters are differentiated: I/l/1, O/0, rn/m, b/d, p/q
- **Why**: High = zero misreading in UI, code, data, addresses. Low = errors in critical contexts. Essential for functional text.
- **Good**: Atkinson Hyperlegible (gold standard), Courier New, Inter (with ss02/ss04), IBM Plex Mono
- **Poor**: Gill Sans (I=l), Futura (I=l), Helvetica (O≈0)
- **Test string**: `Il1 O0 rn m aeogh`

### 6. Letter width (proportions)
- **Impact**: 3 (Medium) | **Best**: High (standard-to-slightly-wide)
- **Definition**: Width-to-height ratio of characters
- **Why**: Wider = better peripheral/parafoveal recognition. Condensed = harder to identify at a glance. Standard width (~0.6-0.8 ratio) is ideal.
- **Good**: Frutiger (individually proportioned), Source Sans Pro
- **Poor**: Impact, Helvetica Neue Condensed, Arial Narrow
- **Research**: Oderkerk & Beier 2022 (wider letter shapes significantly improved recognition)

### 7. Overshoot
- **Impact**: 2 (Low) | **Best**: High (present, ~1-3% extension)
- **Definition**: Round letters (O, C, S) extend slightly past alignment lines to appear optically equal to flat-topped letters
- **Why**: Present = professional optical alignment. Absent = round letters look short. Sign of craftsmanship but doesn't make or break readability.
- **Good**: Any professional font (Georgia, Garamond, Inter, etc.)
- **Poor**: Amateur/free fonts that skip this step

### 8. Ink traps
- **Impact**: 1 (Minimal) | **Best**: High (present at small sizes)
- **Definition**: Notches cut at stroke junctions to prevent ink bleed/pixel blob at small sizes
- **Why**: Clean joints at 4-8pt or low-res. Absent = junctions may blob. Only matters for very small sizes or print on absorbent paper.
- **Good**: Bell Centennial (seminal example), Consolas, Halyard Micro
- **Poor**: Most fonts (they simply don't need them above 9pt)

### 9. Terminal style
- **Impact**: 4 (High) | **Best**: High (angled/open terminals)
- **Definition**: How letter strokes end — angled, vertical/sheared, ball, or beak
- **Why**: Angled terminals maximize aperture opening, aiding recognition. Vertical/sheared terminals close apertures, reducing distinction. Directly tied to aperture openness.
- **Good**: Source Sans Pro, Frutiger (angled terminals)
- **Poor**: Helvetica (vertical/sheared terminals that close apertures)

### 10. Ascender / descender length
- **Impact**: 3 (Medium) | **Best**: High (generous extensions)
- **Definition**: How far letters like b/d/h rise above x-height and p/g/y drop below baseline
- **Why**: Longer = more distinctive word profiles, aids individual letter ID. Shorter = flatter word shapes. Trade-off: as x-height increases, asc/desc space shrinks.
- **Good**: Garamond, Georgia, Times New Roman (well-proportioned extensions)
- **Poor**: ITC Avant Garde, extreme high x-height fonts

### 11. Bowl shape
- **Impact**: 2 (Low) | **Best**: High (varied/humanist bowls)
- **Definition**: The curved enclosed parts of letters like b, d, p, o
- **Why**: Humanist (varied, asymmetric) = more per-letter distinction. Geometric (uniform circles) = b/d/p/q become rotations of each other. Subtle but measurable.
- **Good**: Palatino, Frutiger, Garamond (humanist, organic shapes)
- **Poor**: Futura, Century Gothic (all bowls approach perfect circles)

---

## Part 2: Spacing properties

### 12. Kerning quality
- **Impact**: 3 (Medium) | **Best**: High (well-crafted pair-specific adjustments)
- **Definition**: Spacing adjustments between specific character pairs (AV, To, Wa, Yo)
- **Why**: Good kerning = smooth visual rhythm, no awkward gaps. Poor = distracting holes. More visible at display sizes than body text.
- **Good**: Georgia, Garamond, Minion, Inter, Roboto
- **Poor**: Courier (monospaced, no kerning), many free fonts

### 13. Tracking / letter-spacing
- **Impact**: 4 (High) | **Best**: Middle (font's default, ~0em)
- **Definition**: Uniform spacing applied across all characters
- **Why**: Both extremes hurt. Too tight = visual crowding impairs recognition. Too loose = word shapes fracture, visual span shrinks. Default is usually best. Dyslexic readers may benefit from slightly wider.
- **Research**: Yu et al. 2007 (visual span peaks at standard spacing), Zorzi et al. 2012 (wider helps dyslexic readers)

### 14. Word spacing
- **Impact**: 4 (High) | **Best**: Middle (~M/4, at least 3.5x letter spacing)
- **Definition**: Space between words
- **Why**: Too wide = rivers of white space. Too narrow = words merge, can't segment. Must be ~3.5x letter-spacing minimum for efficient word boundary detection.
- **Research**: Rayner et al. 1998 (removing word spaces reduces speed ~50%), Slattery et al. 2016

### 15. Sidebearings
- **Impact**: 3 (Medium) | **Best**: High (generous, balanced with counters)
- **Definition**: Built-in horizontal space on each side of every glyph in the font file
- **Why**: Generous = consistent rhythm, external spacing harmonizes with counter spacing. Tight = letters jam. The invisible foundation all other spacing builds on.
- **Good**: Verdana, Inter (generous sidebearings for UI text)
- **Poor**: Impact, condensed display fonts

---

## Part 3: Layout properties

### 16. Line-height / leading
- **Impact**: 5 (Critical) | **Best**: Middle (1.4-1.6x font size for body)
- **Definition**: Vertical distance between baselines of consecutive lines
- **Why**: Optimal (1.4-1.6x) = eye tracks line returns easily. Cramped (<1.2x) = descenders tangle with ascenders. Too loose (>2x) = paragraph disconnects. Fonts with larger x-heights need MORE leading.
- **Research**: WCAG requires tolerance of at least 1.5x; research shows 100% to 120% increase improves accuracy by up to 20%

### 17. Line length / measure
- **Impact**: 4 (High) | **Best**: Middle (45-75 CPL desktop, 30-50 mobile)
- **Definition**: Number of characters per line
- **Why**: ~65 CPL = eye's return sweep lands accurately. Too long (>90) = eye loses next line. Too short (<30) = excessive breaks disrupt flow.
- **Research**: Bringhurst (45-75 CPL), Dyson 2021 (long lines not actually slower on screen, but readers prefer moderate lengths)

### 18. Typographic color / texture
- **Impact**: 3 (Medium) | **Best**: High (even, uniform gray value)
- **Definition**: Overall grayness and evenness of a text block viewed as a mass
- **Why**: Even = eye glides without snagging. Uneven = bright-dark banding causes fatigue. Cumulative result of stroke weight + spacing + proportions.
- **Good**: Adobe Garamond Pro, Minion Pro, Georgia
- **Poor**: Bodoni (high contrast creates uneven texture)

### 19. Optical sizing
- **Impact**: 3 (Medium) | **Best**: High (present, with size-specific variants)
- **Definition**: Different font versions tuned for different size ranges
- **Why**: Present = heavier strokes + wider spacing at small sizes, thinner + tighter at display. Absent = one drawing for all sizes, compromised at every size.
- **Good**: Minion 3, Source Serif 4, Roboto Flex, Helvetica Now (Micro/Text/Display)
- **Poor**: Any single-weight font used across all sizes without adjustment

### 20. Text alignment
- **Impact**: 2 (Low) | **Best**: High (left-aligned for most contexts)
- **Definition**: Left-aligned (ragged right) vs justified
- **Why**: Left = consistent word spacing, natural landmarks. Justified = uneven gaps without expert hyphenation. Left is safer for web; justified works with proper typesetting.
- **Research**: Gregory & Poulton 1970 (justified hurts poorer readers), Thompson 1991

### 21. Vertical rhythm
- **Impact**: 2 (Low) | **Best**: High (on-grid, all multiples of base leading)
- **Definition**: All vertical measurements align to a baseline grid
- **Why**: On-grid = mathematical consistency, professional feel. Off-grid = visual disorder. Important for multi-element layouts, less critical for single text blocks.

---

## Part 4: Screen rendering properties

### 22. Hinting quality
- **Impact**: 2 (Low, declining) | **Best**: High (well-hinted for target screens)
- **Definition**: Instructions embedded in font files that snap outlines to pixel grid
- **Why**: Good hinting = crisp stems on low-DPI screens (<150 PPI). Becoming less important as hi-DPI screens become standard. Apple largely ignores hints on Retina.
- **Good**: Verdana (Tom Rickner's legendary hinting), Georgia, ClearType Collection
- **Poor**: Many print-first fonts with minimal hinting

### 23. Subpixel rendering
- **Impact**: 1 (Minimal) | **Best**: High (designed for it, when applicable)
- **Definition**: Using individual RGB subpixels of an LCD to triple effective horizontal resolution
- **Why**: ClearType-optimized fonts benefit on standard LCDs. Irrelevant on Retina, OLED, CRT. A legacy concern for non-hi-DPI LCDs.
- **Good**: Calibri, Cambria, Candara, Consolas, Constantia, Corbel (ClearType Collection)

### 24. Hi-DPI behavior
- **Impact**: 2 (Low, rising) | **Best**: High (beautiful at high resolution)
- **Definition**: How a font performs on Retina/4K screens where hinting is irrelevant and true outlines show
- **Why**: Good = fine details and delicate strokes shine. Poor = fonts designed for pixel grid look chunky. Increasingly important as hi-DPI becomes standard.
- **Good**: Garamond, Minion, any well-drawn print font
- **Poor**: Verdana (designed for pixels, looks crude at hi-DPI)

---

## Part 5: Cognitive science properties

### 25. Parallel letter recognition
- **Impact**: 5 (Critical) | **Best**: High (maximum letter distinctiveness)
- **Definition**: We identify words through parallel processing of individual letters, not word shape
- **Why**: The word shape model is scientifically discredited (Larson 2004). Fonts should maximize individual letter distinctiveness for fast parallel processing.
- **Good**: Source Sans Pro, Inter, Frutiger (high per-letter distinction)
- **Poor**: Helvetica (many similar letterforms reduce parallel efficiency)

### 26. Visual span width
- **Impact**: 4 (High) | **Best**: Middle (default/standard spacing)
- **Definition**: Number of adjacent letters recognizable per fixation (~10 in normal vision)
- **Why**: Both tighter AND looser spacing shrink the visual span. Extra-wide spacing is surprisingly harmful — pushes letters outside the recognition window.
- **Research**: Yu et al. 2007 (visual span and reading speed peak at standard spacing)

### 27. Crowding resistance
- **Impact**: 4 (High) | **Best**: High (open apertures + generous counters)
- **Definition**: How well letters maintain distinctiveness when surrounded by neighboring letters
- **Why**: Open apertures and counters reduce inter-letter interference. Closed forms merge in peripheral vision. Crowding, not acuity, determines reading rate.
- **Research**: Pelli & Tillman 2008 (Nature Neuroscience) — Bouma's law: critical spacing ∝ eccentricity

### 28. Saccade efficiency
- **Impact**: 3 (Medium) | **Best**: High (regular-width fonts)
- **Definition**: Eye jumps span 7-9 character spaces; font width directly governs saccade targeting
- **Why**: Regular width = natural saccade distances. Condensed = cramped jumps, more regressions. Width governs eye movement behavior directly.
- **Research**: Morrison & Rayner 1981 (saccade size measured in character spaces, not visual angle)

### 29. Font familiarity
- **Impact**: 2 (Low) | **Best**: High (familiar fonts have initial advantage)
- **Definition**: Reader's prior exposure to a font
- **Why**: Familiar fonts process faster initially, but readers adapt remarkably fast (within one session). Good design features override familiarity advantage.
- **Research**: Beier & Larson 2013 (unfamiliar features affect preference not speed), Wallace et al. 2022 (up to 35% speed improvement from optimal font)

---

## Part 6: Accessibility properties

### 30. Contrast ratio (WCAG)
- **Impact**: 5 (Critical) | **Best**: High (>4.5:1 minimum, >7:1 enhanced)
- **Definition**: Luminance ratio between text and background
- **Why**: 4.5:1 compensates for 20/40 vision (age ~80). 7:1 for 20/80 vision. 2.2B people globally have vision impairment. Non-negotiable for compliance.
- **Research**: WCAG 2.2, derived from Arditi & Faye research; ANSI 3:1 baseline × 1.5 factor

### 31. Dyslexia-friendly traits
- **Impact**: 3 (Medium) | **Best**: High (sans-serif, large, spaced, left-aligned)
- **Definition**: Typography characteristics that help dyslexic readers
- **Why**: Special "dyslexia fonts" (OpenDyslexic, Dyslexie) do NOT work (Rello 2016, Wery 2017, Kuster 2018). Good general typography does: sans-serif + 18pt + generous spacing + left-aligned.
- **Good**: Verdana, Helvetica, Courier, Arial (all showed shorter fixations in research)
- **Poor**: OpenDyslexic (no measurable benefit over standard fonts)

### 32. Low-vision optimization
- **Impact**: 4 (High) | **Best**: High (maximum disambiguation + open apertures + size)
- **Definition**: Design features that serve readers with significant vision impairment
- **Why**: Maximum character disambiguation, open apertures, 16pt+ minimum, high contrast. Affects 2.2B people worldwide.
- **Good**: Atkinson Hyperlegible (Braille Institute, 43M+ weekly Google Fonts impressions), Tiresias, APHont, Luciole
- **Poor**: Bodoni, Didot (hairlines disappear for low-vision readers)

### 33. Aging eye support
- **Impact**: 4 (High) | **Best**: High (large, medium-weight, non-condensed, high contrast)
- **Definition**: Characteristics that accommodate age-related vision changes
- **Why**: Presbyopia (510M+ people), pupil shrinkage, contrast sensitivity decline. Every reader ages into this category. 14pt+ body, medium weight, 7:1 contrast, 1.5x leading.
- **Good**: Verdana, Georgia, Frutiger, Atkinson Hyperlegible, Century Schoolbook
- **Poor**: Ultra-light weights, condensed faces, low-contrast pairings
