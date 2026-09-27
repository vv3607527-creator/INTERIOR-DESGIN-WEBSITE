#!/usr/bin/env bash
# Downloads the curated photography set (Unsplash license) into public/images.
# Format: filename|photo-id|width|height
set -uo pipefail

DEST="public/images"
mkdir -p "$DEST"

LIST=(
  # ---- hero & feature ----
  "hero-home.jpg|1618221195710-dd6b41faaea6|2400|1350"
  "og-image.jpg|1618221195710-dd6b41faaea6|1200|630"
  "intro-studio.jpg|1600585154340-be6161a56a0c|1400|1750"

  # ---- mercer street loft (01) ----
  "project-mercer-01.jpg|1600607687939-ce8a6c25118c|2400|1350"
  "project-mercer-02.jpg|1600607687920-4e2a09cf159d|1600|1200"
  "project-mercer-03.jpg|1600566753190-17f0baa2a6c3|1600|1200"
  "project-mercer-04.jpg|1600585154526-990dced4db0d|1200|1500"
  "project-mercer-05.jpg|1600121848594-d8644e57abab|1200|1600"
  "project-mercer-06.jpg|1556228453-efd6c1ff04f6|2400|1100"

  # ---- west 11th townhouse (02) ----
  "project-west11-01.jpg|1600585154340-be6161a56a0c|2400|1350"
  "project-west11-02.jpg|1600210492486-724fe5c67fb0|2400|1350"
  "project-west11-03.jpg|1616486338812-3dadae4b4ace|1600|1200"
  "project-west11-04.jpg|1600121848594-d8644e57abab|1600|1200"
  "project-west11-05.jpg|1595526114035-0d45ed16cfbf|1200|1500"
  "project-west11-06.jpg|1615873968403-89e068629265|2400|1100"
  "project-west11-07.jpg|1600566753086-00f18fb6b3ea|1200|1500"
  "project-west11-08.jpg|1600585152220-90363fe7e115|1200|1600"
  "project-west11-09.jpg|1560448204-e02f11c3d0e2|2400|1100"

  # ---- park avenue residence (03) ----
  "project-parkave-01.jpg|1618220179428-22790b461013|2400|1350"
  "project-parkave-02.jpg|1616137466211-f939a420be84|1600|1200"
  "project-parkave-03.jpg|1616594039964-ae9021a400a0|1600|1200"
  "project-parkave-04.jpg|1600494603989-9650cf6ddd3d|1200|1500"
  "project-parkave-05.jpg|1616627561839-074385245ff6|1200|1600"
  "project-parkave-06.jpg|1600210491369-e753d80a41f3|2400|1100"

  # ---- amagansett house (04) ----
  "project-amagansett-01.jpg|1518780664697-55e3ad937233|2400|1350"
  "project-amagansett-02.jpg|1600585154363-67eb9e2e2099|1600|1200"
  "project-amagansett-03.jpg|1416331108676-a22ccb276e35|1600|1200"
  "project-amagansett-04.jpg|1523217582562-09d0def993a6|1200|1500"
  "project-amagansett-05.jpg|1540518614846-7eded433c457|1200|1600"
  "project-amagansett-06.jpg|1600607688969-a5bfcd646154|2400|1100"

  # ---- wythe residence (05) ----
  "project-wythe-01.jpg|1502005229762-cf1b2da7c5d6|2400|1350"
  "project-wythe-02.jpg|1556912173-3bb406ef7e77|1600|1200"
  "project-wythe-03.jpg|1552321554-5fefe8c9ef14|1600|1200"
  "project-wythe-04.jpg|1600566752355-35792bedcfea|1200|1500"
  "project-wythe-05.jpg|1505693416388-ac5ce068fe85|1200|1600"
  "project-wythe-06.jpg|1567767292278-a4f21aa2d36e|2400|1100"

  # ---- hudson house (06) ----
  "project-hudson-01.jpg|1449158743715-0a90ebb6d2d8|2400|1350"
  "project-hudson-02.jpg|1512917774080-9991f1c4c750|1600|1200"
  "project-hudson-03.jpg|1600585153490-76fb20a0f2b0|1600|1200"
  "project-hudson-04.jpg|1522708323590-d24dbb6b0267|1200|1500"
  "project-hudson-05.jpg|1505691938895-1758d7feb511|1200|1600"
  "project-hudson-06.jpg|1600566752734-2a1d6542d35e|2400|1100"

  # ---- philosophy / services / studio / process ----
  "philosophy.jpg|1615529182904-14819c35db37|2400|1200"
  "service-01.jpg|1600607686527-6fb886090705|1600|1200"
  "service-02.jpg|1616486029423-aaa4789e8c9a|1600|1200"
  "service-03.jpg|1600566752229-250ed79470f8|1200|1500"
  "service-04.jpg|1594026112284-02bb6f3352fe|1600|1200"
  "service-05.jpg|1517248135467-4c7edcad34c4|2400|1100"
  "founder-claire.jpg|1594744803329-e58b31de8bf5|1200|1500"
  "founder-ethan.jpg|1507003211169-0a1dd7228f2d|1200|1500"
  "studio-team.jpg|1521737604893-d14cc237f11d|2400|1350"
  "process-01.jpg|1581094794329-c8112a89af12|1200|1500"
  "process-02.jpg|1503387762-592deb58ef4e|1200|1500"
  "process-03.jpg|1429499419563-0ca6f7659e12|1200|1500"

  # ---- journal ----
  "journal-stone.jpg|1600566752915-45c0a2c7e75d|1200|1600"
  "journal-light.jpg|1507089947368-19c1da9775ae|2400|1200"
  "journal-materials.jpg|1524758631624-e2822e304c36|1200|1600"

  # ---- contact ----
  "contact.jpg|1497366216548-37526070297c|2400|1200"
)

FAILED=()
for entry in "${LIST[@]}"; do
  IFS='|' read -r name id w h <<< "$entry"
  out="$DEST/$name"
  if [ -s "$out" ]; then
    echo "skip  $name (exists)"
    continue
  fi
  url="https://images.unsplash.com/photo-$id?q=80&w=$w&h=$h&auto=format&fit=crop"
  code=$(curl -sL -o "$out" -w "%{http_code}" --max-time 60 "$url")
  ftype=$(file -b --mime-type "$out" 2>/dev/null || echo unknown)
  if [ "$code" = "200" ] && [[ "$ftype" == image/* ]]; then
    echo "ok    $name ($ftype)"
  else
    echo "FAIL  $name http=$code type=$ftype"
    FAILED+=("$name")
    rm -f "$out"
  fi
done

echo
if [ ${#FAILED[@]} -gt 0 ]; then
  echo "FAILED (${#FAILED[@]}): ${FAILED[*]}"
  exit 1
fi
echo "All images downloaded."
