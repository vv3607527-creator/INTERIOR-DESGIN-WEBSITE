#!/usr/bin/env bash
# Downloads latin-subset woff2 files for self-hosting into src/fonts/.
# Current families: Instrument Serif (display) + Instrument Sans (text).
set -euo pipefail
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36"
mkdir -p src/fonts/instrument-serif src/fonts/instrument
# Instrument Serif — upright latin (first), italic latin (second)
curl -sL -A "$UA" -o src/fonts/instrument-serif/InstrumentSerif-Regular.woff2 "https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-6zUTjg.woff2"
curl -sL -A "$UA" -o src/fonts/instrument-serif/InstrumentSerif-Italic.woff2 "https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zAjjH7M.woff2"
# Instrument Sans
for w in 400 500; do
  CSS=$(curl -sL -A "$UA" "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@$w")
  URL=$(echo "$CSS" | grep -o "https://fonts.gstatic.com[^)]*\.woff2" | tail -1)
  curl -sL -o "src/fonts/instrument/InstrumentSans-$([ $w = 400 ] && echo Regular || echo Medium).woff2" "$URL"
done
file src/fonts/instrument-serif/*.woff2 src/fonts/instrument/*.woff2
