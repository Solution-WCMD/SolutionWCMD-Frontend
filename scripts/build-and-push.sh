#!/usr/bin/env bash
set -euo pipefail

image="${IMAGE_NAME:?IMAGE_NAME not set}"
version="${VERSION:?VERSION not set}"

full_image="${image}:${version}"

docker build -t "$full_image" .
docker push "$full_image"

echo "Pushed $full_image"