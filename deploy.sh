#!/bin/bash

set -e

PROJECT_ID="workforceip-eb8ee"
HOSTING_URL="https://workforceip.web.app"
GITHUB_REPO="https://github.com/alma-98/workforce-intelligence-platform"

GREEN="\033[0;32m"
BLUE="\033[0;34m"
RED="\033[0;31m"
NC="\033[0m"

echo -e "${BLUE}"
echo "=========================================="
echo " Workforce Intelligence Platform"
echo " Auto Build • GitHub • Firebase Deploy"
echo "=========================================="
echo -e "${NC}"

if [ ! -f package.json ]; then
    echo -e "${RED}Error: package.json tidak ditemukan.${NC}"
    exit 1
fi

echo -e "${GREEN}[1/7] Firebase Project${NC}"
firebase use "$PROJECT_ID"

echo -e "${GREEN}[2/7] Install Dependency${NC}"
npm install

echo -e "${GREEN}[3/7] Build${NC}"
npm run build

echo -e "${GREEN}[4/7] Git Add${NC}"
git add .

if git diff --cached --quiet; then
    echo "Tidak ada perubahan untuk di-commit."
else
    echo -e "${GREEN}[5/7] Git Commit${NC}"
    git commit -m "Auto Deploy $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo -e "${GREEN}[6/7] Git Push${NC}"
git branch -M main
git push origin main

echo -e "${GREEN}[7/7] Firebase Deploy${NC}"
firebase deploy --only hosting

echo
echo -e "${GREEN}=========================================="
echo "DEPLOY BERHASIL"
echo "=========================================="
echo "Website : $HOSTING_URL"
echo "GitHub  : $GITHUB_REPO"
echo "==========================================${NC}"
