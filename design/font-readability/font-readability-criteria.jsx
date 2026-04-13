import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const data = [
  {id:1,cat:"Letterform",name:"x-height ratio",def:"Lowercase height vs capitals",why:"High = larger readable body at any size. Low = tiny lowercase strains eyes. Sweet spot ~67-74%.",impact:5,bestIs:"high",hi:{font:"'Verdana',sans-serif",label:"Verdana ~74%",sample:"Hxdp",note:"Large lowercase body"},lo:{font:"'Didot','Bodoni Moda','Playfair Display',serif",label:"Didot ~54%",sample:"Hxdp",note:"Small lowercase body"}},
  {id:2,cat:"Letterform",name:"Stroke contrast",def:"Thick-to-thin stroke ratio",why:"High = hairlines vanish at small sizes. Low = even texture, no fatigue. Low is better for body text.",impact:5,bestIs:"low",hi:{font:"'Didot','Bodoni Moda','Playfair Display',serif",label:"Bodoni ~6:1",sample:"On",note:"Hairlines vanish small"},lo:{font:"'Futura','Avenir Next',system-ui",label:"Futura ~1.1:1",sample:"On",note:"Even paragraph texture"}},
  {id:3,cat:"Letterform",name:"Aperture openness",def:"Width of openings on c, e, a, s",why:"High = instant recognition, brain doesn't 'close' the shape. Low = letters become ambiguous. Strongest legibility predictor.",impact:5,bestIs:"high",hi:{font:"'Frutiger','Source Sans Pro',system-ui",label:"Source Sans",sample:"c e a s g",note:"Letters clearly distinct"},lo:{font:"'Helvetica Neue','Helvetica','Arial',sans-serif",label:"Helvetica",sample:"c e a s g",note:"Shapes blur together"}},
  {id:4,cat:"Letterform",name:"Counter size",def:"White space inside o, b, d, p, e",why:"High = more spatial frequency info for recognition. Low = counters fill in at small sizes. Directly scales with legibility.",impact:4,bestIs:"high",hi:{font:"'Verdana',sans-serif",label:"Verdana",sample:"o d p b e",note:"Generous interior"},lo:{font:"'Didot','Bodoni Moda','Playfair Display',serif",label:"Bodoni",sample:"o d p b e",note:"Tight, fills at small sizes"}},
  {id:5,cat:"Letterform",name:"Disambiguation",def:"I/l/1, O/0, rn/m distinction",why:"High = zero misreading in UI, code, data. Low = errors in critical contexts. Essential for functional text.",impact:5,bestIs:"high",hi:{font:"'Courier New',monospace",label:"Courier New",sample:"Il1 O0 rn m",note:"Every glyph unique"},lo:{font:"'Gill Sans','Futura',sans-serif",label:"Gill Sans",sample:"Il1 O0 rn m",note:"Need context to tell apart"}},
  {id:6,cat:"Letterform",name:"Letter width",def:"Width-to-height ratio",why:"Wider = better peripheral recognition. Condensed = harder to identify at a glance. Standard width is ideal.",impact:3,bestIs:"high",hi:{font:"'Frutiger','Source Sans Pro',system-ui",label:"Frutiger",sample:"abcdefg",note:"Natural comfortable width"},lo:{font:"'Impact','Arial Narrow',sans-serif",label:"Impact",sample:"abcdefg",note:"Compressed, hard to scan"}},
  {id:7,cat:"Letterform",name:"Overshoot",def:"Round letters extend past guides",why:"Present = O and H look the same height. Absent = round letters look short. A sign of professional craftsmanship.",impact:2,bestIs:"high",hi:{font:"'Georgia',serif",label:"Georgia",sample:"HOp",note:"Round + flat look aligned"},lo:{font:"'Comic Sans MS',cursive",label:"Amateur fonts",sample:"HOp",note:"Round letters look short"}},
  {id:8,cat:"Letterform",name:"Ink traps",def:"Notches at stroke junctions",why:"Present = cleaner joints at tiny sizes (6-8pt). Absent = junctions blob. Only matters at very small sizes or print.",impact:1,bestIs:"high",hi:{font:"'Consolas',monospace",label:"Bell Centennial style",sample:"MW ae",note:"Clean joints at tiny sizes"},lo:{font:"'Georgia',serif",label:"Standard (none)",sample:"MW ae",note:"May blob at 6pt"}},
  {id:9,cat:"Letterform",name:"Terminal style",def:"How stroke endings are shaped",why:"Angled = maximizes aperture opening. Vertical = closes apertures, reduces distinction. Directly tied to aperture openness.",impact:4,bestIs:"high",hi:{font:"'Source Sans Pro',system-ui",label:"Source Sans (angled)",sample:"c f r a",note:"Open, readable ends"},lo:{font:"'Helvetica Neue','Helvetica',sans-serif",label:"Helvetica (vertical)",sample:"c f r a",note:"Closed, similar shapes"}},
  {id:10,cat:"Letterform",name:"Ascender / descender",def:"How far b/d/h and p/g/y extend",why:"High = more distinctive word profiles. Low = flatter word shapes. Trade-off with x-height.",impact:3,bestIs:"high",hi:{font:"'Garamond','EB Garamond',serif",label:"Garamond",sample:"bdh pgy",note:"Distinct word shapes"},lo:{font:"'Verdana',sans-serif",label:"Verdana",sample:"bdh pgy",note:"Flatter word profiles"}},
  {id:11,cat:"Letterform",name:"Bowl shape",def:"Curvature of b, d, p, o bowls",why:"Varied (humanist) = more per-letter distinction. Uniform (geometric) = b/d/p/q become rotations. Subtle effect.",impact:2,bestIs:"high",hi:{font:"'Palatino','Book Antiqua',serif",label:"Palatino (humanist)",sample:"b d p q o",note:"Varied, organic curves"},lo:{font:"'Futura','Century Gothic',sans-serif",label:"Futura (geometric)",sample:"b d p q o",note:"Uniform perfect circles"}},
  {id:12,cat:"Spacing",name:"Kerning quality",def:"Pair-specific spacing (AV, To)",why:"High = smooth visual rhythm. Low = distracting holes between certain pairs. More important at display sizes.",impact:3,bestIs:"high",hi:{font:"'Georgia',serif",label:"Georgia",sample:"WAVE Today",note:"Visually even pairs"},lo:{font:"'Courier New',monospace",label:"Courier (fixed)",sample:"WAVE Today",note:"Rigid equal gaps"}},
  {id:13,cat:"Spacing",name:"Tracking",def:"Uniform letter-spacing",why:"Both extremes hurt. Too tight = crowding. Too loose = word shapes fracture. Default is usually best.",impact:4,bestIs:"mid",hi:{font:"system-ui",label:"Too loose (+0.15em)",sample:"Typography",note:"Word shapes fracture",es:"letter-spacing:0.15em"},lo:{font:"system-ui",label:"Too tight (-0.05em)",sample:"Typography",note:"Letters crowd",es:"letter-spacing:-0.05em"}},
  {id:14,cat:"Spacing",name:"Word spacing",def:"Gap between words (~3.5x letter sp.)",why:"Both extremes hurt. Too wide = rivers of white. Too narrow = words merge. ~3.5x letter-spacing is ideal.",impact:4,bestIs:"mid",hi:{font:"system-ui",label:"Too wide",sample:"The quick brown fox",note:"Rivers of white",es:"word-spacing:0.8em"},lo:{font:"system-ui",label:"Too narrow",sample:"The quick brown fox",note:"Words blend together",es:"word-spacing:-0.15em"}},
  {id:15,cat:"Spacing",name:"Sidebearings",def:"Built-in space around each glyph",why:"Generous = consistent rhythm, counters and gaps harmonize. Tight = letters jam. The invisible foundation of all spacing.",impact:3,bestIs:"high",hi:{font:"'Verdana',sans-serif",label:"Verdana (generous)",sample:"minimum",note:"Consistent rhythm"},lo:{font:"'Impact',sans-serif",label:"Impact (tight)",sample:"minimum",note:"Letters jammed together"}},
  {id:16,cat:"Layout",name:"Line-height",def:"Baseline-to-baseline distance",why:"1.4-1.6x = eye tracks line returns easily. <1.2x = lines tangle. >2x = paragraph disconnects.",impact:5,bestIs:"mid",hi:{font:"system-ui",label:"1.5x (optimal)",sample:"Good leading helps the eye return to the correct next line.",note:"Eye tracks easily",es:"line-height:1.55;font-size:13px"},lo:{font:"system-ui",label:"1.1x (cramped)",sample:"Cramped leading causes the eye to lose its place jumping between lines.",note:"Lines tangle",es:"line-height:1.1;font-size:13px"}},
  {id:17,cat:"Layout",name:"Line length",def:"Characters per line (45-75 CPL ideal)",why:"~65 CPL = eye's return sweep lands accurately. Too long = eye loses next line. Too short = excessive breaks.",impact:4,bestIs:"mid",hi:{font:"system-ui",label:"~65 CPL (ideal)",sample:"The quick brown fox jumps over the lazy dog near the river bank.",note:"Easy return sweeps",es:"font-size:13px"},lo:{font:"system-ui",label:"~120 CPL (too wide)",sample:"The quick brown fox jumps over the lazy dog near the bank of the river on a warm summer afternoon while the birds sang.",note:"Eye loses next line",es:"font-size:11px"}},
  {id:18,cat:"Layout",name:"Typographic color",def:"Evenness of text block gray value",why:"Even = eye glides without snagging. Uneven = bright-dark banding causes fatigue. Cumulative result of stroke + spacing.",impact:3,bestIs:"high",hi:{font:"'Georgia',serif",label:"Georgia (even)",sample:"Typography is the art of arranging type to make written language legible, readable, and appealing.",note:"Uniform gray rectangle",es:"font-size:12px;line-height:1.6"},lo:{font:"'Didot','Bodoni Moda','Playfair Display',serif",label:"Bodoni (uneven)",sample:"Typography is the art of arranging type to make written language legible, readable, and appealing.",note:"Bright-dark banding",es:"font-size:12px;line-height:1.6"}},
  {id:19,cat:"Layout",name:"Optical sizing",def:"Size-specific font tuning",why:"Present = adapted per size. Absent = one drawing for all sizes, compromised everywhere.",impact:3,bestIs:"high",hi:{font:"'Georgia',serif",label:"Georgia (screen-tuned)",sample:"Aa Bb Cc",note:"Adapted per size"},lo:{font:"'Didot','Bodoni Moda',serif",label:"Didot (display only)",sample:"Aa Bb Cc",note:"One drawing, all sizes"}},
  {id:20,cat:"Layout",name:"Text alignment",def:"Left vs justified",why:"Left = consistent word spacing, natural landmarks. Justified = uneven gaps without expert hyphenation. Left is safer.",impact:2,bestIs:"high",hi:{font:"system-ui",label:"Left (ragged right)",sample:"Ragged right maintains consistent word spacing and natural landmarks.",note:"Even word spacing",es:"text-align:left;font-size:12px;line-height:1.5"},lo:{font:"system-ui",label:"Justified (no hyphen)",sample:"Justified without hyphenation creates uneven gaps and white space rivers.",note:"Variable gaps",es:"text-align:justify;font-size:12px;line-height:1.5"}},
  {id:21,cat:"Layout",name:"Vertical rhythm",def:"Baseline grid alignment",why:"On-grid = mathematical consistency, professional feel. Off-grid = visual disorder. Important for multi-element layouts.",impact:2,bestIs:"high",hi:{font:"system-ui",label:"On-grid (consistent)",sample:"Heading + body on beat",note:"Mathematical order",es:"font-size:13px"},lo:{font:"system-ui",label:"Off-grid (arbitrary)",sample:"Heading + body off beat",note:"Visual syncopation",es:"font-size:13px"}},
  {id:22,cat:"Screen",name:"Hinting",def:"Pixel-grid snap instructions",why:"Good = crisp stems on low-DPI. Poor = blurry at 12px. Declining in importance as hi-DPI screens proliferate.",impact:2,bestIs:"high",hi:{font:"'Verdana',sans-serif",label:"Verdana (heavy hints)",sample:"Hinted text",note:"Crisp at 12px"},lo:{font:"'Didot','Bodoni Moda',serif",label:"Unhinted display font",sample:"Hinted text",note:"Blurry at 12px"}},
  {id:23,cat:"Screen",name:"Subpixel rendering",def:"RGB subpixel optimization",why:"Designed for it = sharper on LCDs. Not designed = no benefit. Only relevant on non-Retina LCDs.",impact:1,bestIs:"high",hi:{font:"'Calibri',sans-serif",label:"Calibri (ClearType)",sample:"Subpixel",note:"Designed for LCD"},lo:{font:"'Didot','Bodoni Moda',serif",label:"Not optimized",sample:"Subpixel",note:"Not tuned for screens"}},
  {id:24,cat:"Screen",name:"Hi-DPI behavior",def:"Performance on Retina / 4K",why:"Good = fine details shine. Poor = chunky/oversized. Increasingly important as hi-DPI becomes standard.",impact:2,bestIs:"high",hi:{font:"'Garamond','EB Garamond',serif",label:"Garamond",sample:"Hi-DPI text",note:"Fine details shine"},lo:{font:"'Verdana',sans-serif",label:"Verdana",sample:"Hi-DPI text",note:"Looks chunky on Retina"}},
  {id:25,cat:"Cognition",name:"Letter recognition",def:"Parallel letter ID efficiency",why:"High distinctiveness = fast parallel processing. Low = slower serial decoding. Letter clarity trumps word shape.",impact:5,bestIs:"high",hi:{font:"'Source Sans Pro',system-ui",label:"Source Sans",sample:"reading",note:"Each letter distinct"},lo:{font:"'Helvetica Neue','Helvetica',sans-serif",label:"Helvetica",sample:"reading",note:"Letters blend"}},
  {id:26,cat:"Cognition",name:"Visual span",def:"Letters recognized per fixation",why:"Default spacing = full ~10 letter span. Both tighter AND looser shrink it. Wider is surprisingly harmful.",impact:4,bestIs:"mid",hi:{font:"system-ui",label:"Default spacing",sample:"comfortable reading",note:"Full 10-letter span",es:"letter-spacing:0"},lo:{font:"system-ui",label:"Extra-wide",sample:"comfortable reading",note:"Reduced span",es:"letter-spacing:0.15em"}},
  {id:27,cat:"Cognition",name:"Crowding resistance",def:"Letter distinction among neighbors",why:"High = open apertures + counters reduce interference. Low = adjacent letters merge in peripheral vision.",impact:4,bestIs:"high",hi:{font:"'Frutiger','Source Sans Pro',system-ui",label:"Frutiger (open)",sample:"ecaos",note:"Distinct at distance"},lo:{font:"'Helvetica Neue','Helvetica',sans-serif",label:"Helvetica (closed)",sample:"ecaos",note:"Merge at distance"}},
  {id:28,cat:"Cognition",name:"Saccade efficiency",def:"Eye-jump targeting accuracy",why:"Regular width = natural 7-9 char saccades. Condensed = cramped jumps. Width directly governs eye behavior.",impact:3,bestIs:"high",hi:{font:"'Georgia',serif",label:"Georgia (regular)",sample:"Saccade targeting",note:"Natural jump distance"},lo:{font:"'Impact',sans-serif",label:"Impact (condensed)",sample:"Saccade targeting",note:"Cramped targeting"}},
  {id:29,cat:"Cognition",name:"Familiarity",def:"Reader's prior exposure",why:"Familiar = instant processing. Unfamiliar = slower initially but readers adapt within one session. Overridden by good design.",impact:2,bestIs:"high",hi:{font:"'Georgia',serif",label:"Georgia (common)",sample:"Familiar reading",note:"Instant fluency"},lo:{font:"'Papyrus',fantasy",label:"Papyrus",sample:"Familiar reading",note:"Needs adaptation"}},
  {id:30,cat:"Access",name:"Contrast ratio",def:"Text vs background luminance",why:"High (>4.5:1) = readable for 20/40 vision. Low (<3:1) = fails accessibility. 7:1 covers 20/80. Non-negotiable.",impact:5,bestIs:"high",hi:{font:"system-ui",label:"High (>7:1)",sample:"Readable text",note:"Passes AAA",es:"color:#1a1a1a"},lo:{font:"system-ui",label:"Low (<3:1)",sample:"Hard to read",note:"Fails AA",es:"color:#b0b0b0"}},
  {id:31,cat:"Access",name:"Dyslexia support",def:"Sans, large, spaced, left-aligned",why:"Good typography helps; special 'dyslexia fonts' do not (Rello 2016). Sans-serif + 18pt + spacing is evidence-based.",impact:3,bestIs:"high",hi:{font:"'Verdana',sans-serif",label:"Verdana 18px",sample:"Dyslexia friendly",note:"Sans, large, spaced",es:"font-size:18px;letter-spacing:0.04em"},lo:{font:"'Times New Roman',serif",label:"Times 12px",sample:"Dyslexia friendly",note:"Serif, small, tight",es:"font-size:12px;letter-spacing:-0.02em"}},
  {id:32,cat:"Access",name:"Low-vision design",def:"Max distinction, 16pt+, high contrast",why:"High = every glyph maximally distinct. Low = hairlines vanish. Affects 2.2B people worldwide.",impact:4,bestIs:"high",hi:{font:"'Courier New',monospace",label:"Hyperlegible style",sample:"Il1 O0 8B",note:"Every glyph distinct"},lo:{font:"'Didot','Bodoni Moda',serif",label:"Bodoni",sample:"Il1 O0 8B",note:"Hairlines disappear"}},
  {id:33,cat:"Access",name:"Aging eye support",def:"14pt+, medium weight, 7:1 contrast",why:"High = comfortable for presbyopic eyes (510M+ people). Low = squinting. Every reader ages into this category.",impact:4,bestIs:"high",hi:{font:"'Georgia',serif",label:"Georgia 16px",sample:"Easy on aging eyes",note:"Comfortable 60+",es:"font-size:16px;font-weight:500"},lo:{font:"'Helvetica Neue','Helvetica',sans-serif",label:"Helvetica 11px light",sample:"Hard on aging eyes",note:"Requires squinting",es:"font-size:11px;font-weight:300"}}
];

const categoryColors = {
  Letterform: { bg: '#EEEDFE', accent: '#534AB7' },
  Spacing: { bg: '#E1F5EE', accent: '#0F6E56' },
  Layout: { bg: '#E6F1FB', accent: '#185FA5' },
  Screen: { bg: '#FAEEDA', accent: '#854F0B' },
  Cognition: { bg: '#FAECE7', accent: '#993C1D' },
  Access: { bg: '#FCEBEB', accent: '#A32D2D' }
};

const impactColors = {
  5: '#A32D2D',
  4: '#D85A30',
  3: '#BA7517',
  2: '#888780',
  1: '#B4B2A9'
};

const categories = ['All', 'Letterform', 'Spacing', 'Layout', 'Screen', 'Cognition', 'Access'];

export default function FontReadabilityCriteria() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortByImpact, setSortByImpact] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const filtered = activeCategory === 'All'
    ? data
    : data.filter(d => d.cat === activeCategory);

  const sorted = sortByImpact
    ? [...filtered].sort((a, b) => b.impact - a.impact)
    : filtered;

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getImpactLabel = (impact) => {
    const labels = { 5: 'Critical', 4: 'High', 3: 'Medium', 2: 'Low', 1: 'Minimal' };
    return labels[impact];
  };

  return (
    <div style={{ padding: '32px', backgroundColor: '#fafafa', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 600, margin: '0 0 8px 0', color: '#1a1a1a' }}>
            Font Readability Criteria
          </h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
            33 criteria across 7 categories to evaluate typography for legibility and accessibility
          </p>
        </div>

        {/* Controls */}
        <div style={{ marginBottom: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Category buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: activeCategory === cat ? '#1a1a1a' : '#e0e0e0',
                  color: activeCategory === cat ? '#fff' : '#1a1a1a',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 200ms'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort toggle */}
          <button
            onClick={() => setSortByImpact(!sortByImpact)}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              backgroundColor: sortByImpact ? '#f0f0f0' : '#fff',
              color: '#1a1a1a',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              marginLeft: 'auto'
            }}
          >
            {sortByImpact ? '✓ By Impact' : 'Sort by Impact'}
          </button>
        </div>

        {/* Count */}
        <div style={{ fontSize: '12px', color: '#888', marginBottom: '16px' }}>
          Showing {sorted.length} of 33 criteria
        </div>

        {/* Table */}
        <div style={{ display: 'grid', gap: '8px' }}>
          {sorted.map(criterion => {
            const isExpanded = expandedId === criterion.id;
            const colors = categoryColors[criterion.cat];
            const impactColor = impactColors[criterion.impact];

            return (
              <div key={criterion.id}>
                {/* Row */}
                <button
                  onClick={() => toggleExpand(criterion.id)}
                  style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: '40px 1fr 120px 100px 40px',
                    gap: '16px',
                    alignItems: 'center',
                    padding: '16px',
                    backgroundColor: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 200ms',
                    textAlign: 'left'
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#ccc'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#e0e0e0'}
                >
                  {/* ID */}
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#999' }}>
                    #{criterion.id}
                  </div>

                  {/* Name & Def */}
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '4px' }}>
                      {criterion.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {criterion.def}
                    </div>
                  </div>

                  {/* Category pill */}
                  <div
                    style={{
                      padding: '6px 12px',
                      borderRadius: '4px',
                      backgroundColor: colors.bg,
                      color: colors.accent,
                      fontSize: '12px',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}
                  >
                    {criterion.cat}
                  </div>

                  {/* Impact */}
                  <div
                    style={{
                      padding: '6px 12px',
                      borderRadius: '4px',
                      backgroundColor: impactColor,
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}
                  >
                    {getImpactLabel(criterion.impact)}
                  </div>

                  {/* Expand icon */}
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#999' }}>
                    <ChevronDown
                      size={20}
                      style={{
                        transition: 'transform 200ms',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </button>

                {/* Expanded details */}
                {isExpanded && (
                  <div style={{
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #e0e0e0',
                    borderTop: 'none',
                    borderRadius: '0 0 6px 6px',
                    padding: '20px 16px'
                  }}>
                    {/* Why it matters */}
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#999', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Why It Matters
                      </div>
                      <div style={{ fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
                        {criterion.why}
                      </div>
                    </div>

                    {/* Examples grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {/* High/Good example */}
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: '#0F6E56', marginBottom: '8px' }}>
                          {criterion.bestIs === 'high' ? 'BETTER' : criterion.bestIs === 'mid' ? 'OPTIMAL' : 'BETTER'}
                        </div>
                        <div style={{
                          padding: '12px',
                          backgroundColor: '#fff',
                          border: '1px solid #e0e0e0',
                          borderRadius: '4px',
                          marginBottom: '8px'
                        }}>
                          <div
                            style={{
                              fontFamily: criterion.hi.font,
                              fontSize: '18px',
                              ...(criterion.hi.es ? Object.fromEntries(
                                criterion.hi.es.split(';').filter(s => s.trim()).map(s => {
                                  const [k, v] = s.split(':').map(x => x.trim());
                                  return [k.replace(/-./g, x => x[1].toUpperCase()), v];
                                })
                              ) : {})
                            }}
                          >
                            {criterion.hi.sample}
                          </div>
                        </div>
                        <div style={{ fontSize: '12px', color: '#666' }}>
                          <div style={{ fontWeight: 600, marginBottom: '2px' }}>{criterion.hi.label}</div>
                          <div>{criterion.hi.note}</div>
                        </div>
                      </div>

                      {/* Low/Worse example */}
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: '#993C1D', marginBottom: '8px' }}>
                          {criterion.bestIs === 'high' ? 'WORSE' : criterion.bestIs === 'mid' ? 'SUBOPTIMAL' : 'WORSE'}
                        </div>
                        <div style={{
                          padding: '12px',
                          backgroundColor: '#fff',
                          border: '1px solid #e0e0e0',
                          borderRadius: '4px',
                          marginBottom: '8px'
                        }}>
                          <div
                            style={{
                              fontFamily: criterion.lo.font,
                              fontSize: '18px',
                              ...(criterion.lo.es ? Object.fromEntries(
                                criterion.lo.es.split(';').filter(s => s.trim()).map(s => {
                                  const [k, v] = s.split(':').map(x => x.trim());
                                  return [k.replace(/-./g, x => x[1].toUpperCase()), v];
                                })
                              ) : {})
                            }}
                          >
                            {criterion.lo.sample}
                          </div>
                        </div>
                        <div style={{ fontSize: '12px', color: '#666' }}>
                          <div style={{ fontWeight: 600, marginBottom: '2px' }}>{criterion.lo.label}</div>
                          <div>{criterion.lo.note}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: '32px', padding: '16px', backgroundColor: '#f0f0f0', borderRadius: '6px' }}>
          <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.6' }}>
            <strong>Impact Scale:</strong> Critical (5) affects core readability for all users. High (4) significant effects on legibility. Medium (3) moderate effects in specific contexts. Low (2) subtle or edge-case effects. Minimal (1) measurable but practical impact limited. Use this to prioritize design decisions.
          </div>
        </div>
      </div>
    </div>
  );
}
