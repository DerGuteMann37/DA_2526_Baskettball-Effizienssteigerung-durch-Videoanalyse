#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
IMG_DIR="$ROOT_DIR/img"
META="$ROOT_DIR/metadata.yaml"
DOCKERFILE="$ROOT_DIR/da-base-template/tools/docker/Dockerfile"
BIB_IN_META="literatur_clean.bib"

echo "Checking metadata for bibliography..."
if ! grep -q "$BIB_IN_META" "$META"; then
  echo "ERROR: $BIB_IN_META not found in $META"
  exit 2
fi

echo "Checking Dockerfile does not delete xelatex/lualatex..."
if grep -qE '/usr/bin/(xelatex|lualatex)' "$DOCKERFILE"; then
  echo "ERROR: Dockerfile still deletes xelatex/lualatex"
  grep -nE '/usr/bin/(xelatex|lualatex)' "$DOCKERFILE" || true
  exit 3
fi

echo "Scanning Markdown files for image references and verifying existence (case-sensitive)..."
missing=0
while IFS= read -r -d '' md; do
  while IFS= read -r -d '' imgref; do
    # extract path in parentheses
    path=$(echo "$imgref" | sed -n "s/.*(\([^)]*\)).*/\1/p")
    # ignore absolute URLs
    if echo "$path" | grep -qE '^https?://'; then
      continue
    fi
    # join relative path
    fullpath="$ROOT_DIR/$path"
    if [ ! -f "$fullpath" ]; then
      echo "MISSING: $path referenced in $md"
      missing=1
    fi
  done < <(grep -oP '!\[[^\]]*\]\([^)]*\)' "$md" -z || true)

done < <(find "$ROOT_DIR" -name '*.md' -print0)

if [ "$missing" -ne 0 ]; then
  echo "One or more referenced images are missing (case-sensitive)."
  exit 4
fi

echo "All quick checks passed."
exit 0
