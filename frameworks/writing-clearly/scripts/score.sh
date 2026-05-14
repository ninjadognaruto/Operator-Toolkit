#!/usr/bin/env bash
# score.sh — Writing Clearly mechanical score.
#
# Outputs a single integer 0-100 to stdout. Nothing else.
# Designed as the verify command for /autoresearch:autoresearch.
#
# Usage:  bash score.sh path/to/draft.md
# Output: a single integer (e.g. "72")
#
# Scores 6 of 14 criteria mechanically (the rest require LLM judgment
# and are handled by the interactive SKILL.md workflow).
#
# Mechanical criteria covered:
#   #6  Active voice          (passive voice rate)
#   #7  Sentence economy      (long-sentence count, mean length)
#   #10 Omit needless words   (slop words, em-dash density, ID starts, transition openers)
#   #11 No buzzwords          (buzzword count)
#   #12 No hedges             (hedge count)
#   #13 No filler             (filler-phrase count)

# Note: do NOT enable `set -e` or `pipefail` — grep returns 1 on zero matches,
# which would abort the script. We rely on `wc -l` to convert that to 0.
set -u

if [ $# -lt 1 ]; then
  echo "Usage: $0 path/to/draft.md" >&2
  exit 1
fi

FILE="$1"
if [ ! -f "$FILE" ]; then
  echo "File not found: $FILE" >&2
  exit 1
fi

# Strip front matter and read the prose
PROSE=$(awk '/^---$/{n++; next} n==1{next} {print}' "$FILE" 2>/dev/null || cat "$FILE")
WORDS=$(echo "$PROSE" | wc -w | tr -d ' ')
[ "$WORDS" -eq 0 ] && echo "0" && exit 0

# Per-100-word normalization helper
per_100() {
  echo "$(( ($1 * 100 + WORDS / 2) / WORDS ))"
}

# ---------- #11 Buzzwords ----------
BUZZWORDS=$(echo "$PROSE" | grep -ioE '\b(leverage|synergy|ecosystem|learnings|ideate|circle back|deep[- ]dive|paradigm shift|best practice|value[- ]add|double[- ]click|net[- ]net|reach out|table stakes|move the needle|low[- ]hanging fruit|boil the ocean|drill down|game[- ]changer|disrupt|robust|comprehensive|holistic|seamless|frictionless|operationalize|incentivize|streamline|granular)\b' | wc -l | tr -d ' ')

# ---------- #12 Hedges ----------
HEDGES=$(echo "$PROSE" | grep -ioE '\b(somewhat|potentially|perhaps|arguably|generally|typically|largely|it could be argued|one might say|it seems that|it appears that|may possibly|could potentially|might consider)\b' | wc -l | tr -d ' ')

# ---------- #13 Filler ----------
FILLER=$(echo "$PROSE" | grep -ioE '(Great question|Certainly|Absolutely|It['"'"']s worth noting that|It['"'"']s important to (note|mention) that|Note that|It bears mentioning|In recent years|Throughout history|It has long been known|I['"'"']d like to discuss|To answer your question)' | wc -l | tr -d ' ')

# ---------- #10a Slop vocabulary ----------
SLOP=$(echo "$PROSE" | grep -ioE '\b(delve|tapestry|multifaceted|navigate|pivotal|foster|cultivate|intricate|nuanced|paradigm|seamlessly|effortlessly|unparalleled|unprecedented)\b' | wc -l | tr -d ' ')

# ---------- #10b Em-dash density ----------
EMDASHES=$(echo "$PROSE" | grep -o '—' | wc -l | tr -d ' ')
EMDASH_PER_150=$(( EMDASHES * 150 / (WORDS > 0 ? WORDS : 1) ))
EMDASH_VIOLATIONS=$(( EMDASH_PER_150 > 1 ? EMDASH_PER_150 - 1 : 0 ))

# ---------- #10c Transition-word paragraph openers ----------
TRANSITION_OPENERS=$(echo "$PROSE" | grep -E '^[[:space:]]*(Additionally|Furthermore|Moreover|Importantly|Notably|Crucially)[,[:space:]]' | wc -l | tr -d ' ')

# ---------- #10d Summary-ending paragraphs ----------
SUMMARY_ENDERS=$(echo "$PROSE" | grep -iE '(In summary|To summarize|In conclusion|Overall, this)' | wc -l | tr -d ' ')

# ---------- #6 Passive voice (heuristic) ----------
PASSIVE=$(echo "$PROSE" | grep -ioE '\b(was|were|been|being|is|are|am|be)\s+[a-z]+(ed|en)\b' | wc -l | tr -d ' ')

# ---------- #7 Long sentences ----------
# Split on sentence-ending punctuation, count words per sentence
LONG_SENTS=$(echo "$PROSE" | tr '\n' ' ' | sed 's/[.!?]/&\n/g' | awk '{ if (NF > 30) print }' | wc -l | tr -d ' ')

# Mean sentence length
TOTAL_SENTS=$(echo "$PROSE" | tr '\n' ' ' | sed 's/[.!?]/&\n/g' | awk 'NF>0' | wc -l | tr -d ' ')
[ "$TOTAL_SENTS" -eq 0 ] && TOTAL_SENTS=1
MEAN_LEN=$(( WORDS / TOTAL_SENTS ))
# Penalty for mean outside 12-22 range
MEAN_PENALTY=0
[ "$MEAN_LEN" -gt 25 ] && MEAN_PENALTY=$(( MEAN_LEN - 25 ))
[ "$MEAN_LEN" -lt 8 ] && MEAN_PENALTY=$(( 8 - MEAN_LEN ))

# ---------- Convert violations to ratings ----------
# 0 violations = green (1.0 = 4 points for High-tier)
# 1-3 violations (per 100 words for length-normalized) = yellow (0.5 = 2 points)
# 4+ violations = red (0.0 = 0 points)

rate() {
  local v=$1
  if [ "$v" -eq 0 ]; then echo 4
  elif [ "$v" -le 3 ]; then echo 2
  else echo 0; fi
}

# Normalize to per-1000-word rate for comparable thresholds across draft sizes
normalize() {
  local raw=$1
  echo "$(( raw * 1000 / (WORDS > 0 ? WORDS : 1) ))"
}

BUZZ_NORM=$(normalize $BUZZWORDS)
HEDGE_NORM=$(normalize $HEDGES)
FILLER_NORM=$(normalize $FILLER)
SLOP_TOTAL=$(( SLOP + EMDASH_VIOLATIONS + TRANSITION_OPENERS + SUMMARY_ENDERS ))
SLOP_NORM=$(normalize $SLOP_TOTAL)
PASSIVE_RATE=$(( PASSIVE * 100 / TOTAL_SENTS ))

SCORE_11=$(rate $BUZZ_NORM)         # buzzwords
SCORE_12=$(rate $HEDGE_NORM)        # hedges
SCORE_13=$(rate $FILLER_NORM)       # filler
SCORE_10=$(rate $SLOP_NORM)         # slop

# Active voice: passive rate as % of sentences
if [ "$PASSIVE_RATE" -le 5 ]; then SCORE_6=4
elif [ "$PASSIVE_RATE" -le 15 ]; then SCORE_6=2
else SCORE_6=0; fi

# Sentence economy: long sentences + mean penalty
SENT_PENALTY=$(( LONG_SENTS + MEAN_PENALTY ))
if [ "$SENT_PENALTY" -le 1 ]; then SCORE_7=4
elif [ "$SENT_PENALTY" -le 4 ]; then SCORE_7=2
else SCORE_7=0; fi

# ---------- Composite score ----------
# Mechanical layer scores 6 criteria worth 4 points each = 24 max
# Map to a 0-100 scale assuming subjective layer would average yellow = ~50% if
# the mechanical layer is clean. A pure mechanical pass = 88. Cap at 100.
RAW=$(( SCORE_6 + SCORE_7 + SCORE_10 + SCORE_11 + SCORE_12 + SCORE_13 ))
MAX=24
SCORE=$(( (RAW * 88) / MAX ))

# Floor at 0
[ "$SCORE" -lt 0 ] && SCORE=0
[ "$SCORE" -gt 100 ] && SCORE=100

echo "$SCORE"
