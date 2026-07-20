#!/bin/bash
set -e

echo "========================================"
echo " Update Footer Link"
echo "========================================"

perl -0pi -e 's|© 2026 Investment Technology Indonesia|<a href="https://investment-tech-indonesia.web.app" target="_blank" rel="noopener noreferrer" style={{color:"#2563eb",textDecoration:"none"}}>© 2026 Investment Technology Indonesia</a>|g' src/App.tsx

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
git commit -m "Footer link to Investment Technology Indonesia" || true
git push origin main

echo ""
echo "========================================"
echo " Firebase"
echo "========================================"

firebase deploy --only hosting

echo ""
echo "========================================"
echo " DONE"
echo "========================================"
