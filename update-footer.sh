#!/bin/bash
set -e

echo "========================================"
echo " Update Footer"
echo "========================================"

sed -i '' \
's|© 2026 Investment Technology Indonesia|© 2026 investment-tech-indonesia.web.app|g' \
src/App.tsx

echo ""
echo "========================================"
echo " Build"
echo "========================================"

npm run build

echo ""
echo "========================================"
echo " GitHub"
echo "========================================"

git add .
git commit -m "Update footer website" || echo "Tidak ada perubahan"

git push origin main

echo ""
echo "========================================"
echo " Firebase"
echo "========================================"

firebase deploy --only hosting

echo ""
echo "========================================"
echo " SELESAI"
echo "========================================"
echo "Website : https://workforceip.web.app"
