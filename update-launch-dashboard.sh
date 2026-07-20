#!/bin/bash
set -e

cd "$HOME/workforce-intelligence-platform"

echo "🔍 Mencari Landing Page..."

FILE=$(grep -RilE "Launch Platform|Launch Demo" src || true)

if [ -z "$FILE" ]; then
    echo "❌ Landing Page tidak ditemukan."
    exit 1
fi

echo "📄 File ditemukan:"
echo "$FILE"

for f in $FILE; do
    cp "$f" "$f.bak"

    # Ubah button menjadi window.location
    perl -0pi -e '
    s#<button([^>]*)>\s*Launch Demo\s*</button>#<button\1 onClick={() => window.location.href="/dashboard"}>Launch Platform</button>#g;
    s#<button([^>]*)>\s*Launch Platform\s*</button>#<button\1 onClick={() => window.location.href="/dashboard"}>Launch Platform</button>#g;
    ' "$f"
done

echo "📦 Build..."
npm run build

echo "🚀 Deploy..."
firebase deploy

echo ""
echo "====================================="
echo "✅ Launch Platform → /dashboard"
echo "🌐 https://workforceip.web.app"
echo "====================================="
