#!/bin/bash
set -e

cd "$HOME/workforce-intelligence-platform"

echo "🔍 Mencari file..."

find src -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" \) | while read file
do
    perl -0pi -e '
    s#Powered by\s*investment-tech-indonesia\.web\.app#
Powered by <a href="https://investment-tech-indonesia.web.app" target="_blank" rel="noopener noreferrer">Investment Technology Indonesia</a>#g;

    s#©\s*2026\s*investment-tech-indonesia\.web\.app#
© 2026 <a href="https://investment-tech-indonesia.web.app" target="_blank" rel="noopener noreferrer">Investment Technology Indonesia</a>#g;
    ' "$file"
done

echo "📦 Build..."
npm run build

echo "🚀 Deploy..."
firebase deploy

echo "✅ Selesai!"
echo "https://workforceip.web.app"
