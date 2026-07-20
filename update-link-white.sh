#!/bin/bash
set -e

cd "$HOME/workforce-intelligence-platform"

echo "🎨 Updating Investment Technology Indonesia links..."

find src -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" \) | while read file
do
perl -0pi -e '
s#<a\s+href="https://investment-tech-indonesia\.web\.app"([^>]*)>#<a href="https://investment-tech-indonesia.web.app"\1 style={{color:"white",textDecoration:"none"}}>#g;
' "$file"
done

echo "📦 Building..."
npm run build

echo "🚀 Deploying..."
firebase deploy

echo ""
echo "===================================="
echo "✅ Link berhasil diubah menjadi putih"
echo "🌐 https://workforceip.web.app"
echo "===================================="
