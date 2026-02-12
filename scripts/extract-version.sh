#!/usr/bin/env bash
set -euo pipefail

ref="${GITHUB_REF:-}"

if [[ -z "$ref" ]]; then
  echo "GITHUB_REF is not set. Are you running inside GitHub Actions?"
  exit 1
fi

if [[ "$ref" != refs/tags/v* ]]; then
  echo "This workflow expects a tag starting with 'v'. Got: $ref"
  exit 1
fi

version="${ref#refs/tags/v}"
echo "VERSION=$version" >> "$GITHUB_ENV"
echo "Extracted VERSION=$version"