#!/usr/bin/env bash
set -euo pipefail

registry="ghcr.io"
username="${GHCR_USERNAME:?GHCR_USERNAME not set}"
token="${GHCR_TOKEN:?GHCR_TOKEN not set}"

echo "$token" | docker login "$registry" -u "$username" --password-stdin
echo "Logged into $registry as $username"