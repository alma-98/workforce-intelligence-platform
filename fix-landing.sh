#!/bin/bash

set -e

echo "========================================="
echo " Workforce Intelligence Landing Fix"
echo "========================================="

PROJECT="$HOME/workforce-intelligence-platform"

cd "$PROJECT"

FILE=$(grep -RilE "Launch Demo|Launch Platform|Powered by" src | head -n1)

if [ -z "$FILE" ]; then
    echo "Landing page tidak ditemukan."
    exit 1
fi

echo "Landing File : $FILE"

cp "$FILE" "$FILE.bak"

perl -0pi -e '
s#Powered by\s*investment-tech-indonesia\.web\.app#
Powered by <a href="https://investment-tech-indonesia.web.app" target="_blank" rel="noopener noreferrer">Investment Technology Indonesia</a>#g;
' "$FILE"

perl -0pi -e '
s#Launch Demo#Launch Platform#g;
s#Launch Platform</button>#Launch Platform</button>#g;
' "$FILE"

if grep -q "window.location.href=\"/dashboard\"" "$FILE"; then
    echo "Dashboard navigation sudah ada."
else
    perl -0pi -e '
s#<button([^>]*)>Launch Platform</button>#<button\1 onClick={() => window.location.href="/dashboard"}>Launch Platform</button>#g;
' "$FILE"
fi

echo
echo "Build..."
npm run build

echo
echo "Deploy..."
firebase deploy

echo
echo "========================================="
echo "DONE"
echo "https://workforceip.web.app"
echo "========================================="
