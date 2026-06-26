#!/usr/bin/env bash
# Snapshot test runner for UniformCSS.
#
# Usage:
#   test/run.sh update   # (re)generate baseline snapshots
#   test/run.sh test     # compile fixtures and diff against snapshots (default)
#
# Requires `sass` on PATH (falls back to `npx sass`).

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FIXTURES="$ROOT/test/fixtures"
SNAPSHOTS="$ROOT/test/__snapshots__"
OUT="$ROOT/test/__out__"

if command -v sass >/dev/null 2>&1; then
  SASS="sass"
else
  SASS="npx --yes sass"
fi

MODE="${1:-test}"

mkdir -p "$SNAPSHOTS" "$OUT"

compile() {
  local name="$1" dest="$2"
  $SASS --quiet --load-path="$ROOT" --no-source-map "$FIXTURES/$name.scss" "$dest" >/dev/null
}

fixtures=(default nocompress json custom apply)

if [ "$MODE" = "update" ]; then
  for f in "${fixtures[@]}"; do
    compile "$f" "$SNAPSHOTS/$f.css"
    echo "updated snapshot: $f.css"
  done
  exit 0
fi

fail=0
for f in "${fixtures[@]}"; do
  compile "$f" "$OUT/$f.css"
  if diff -q "$SNAPSHOTS/$f.css" "$OUT/$f.css" >/dev/null 2>&1; then
    echo "PASS  $f"
  else
    echo "FAIL  $f  (diff $SNAPSHOTS/$f.css $OUT/$f.css)"
    fail=1
  fi
done

exit $fail
