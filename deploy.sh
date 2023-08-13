#!/bin/bash

echo "-------------------------------------"
echo " DEPLOYMENT SCRIPT"
echo " Author: https://github.com/joshtune"
echo "-------------------------------------"

echo "[1/4]: Init ..."
echo "-------------------------------------"
rm -rf tmp
mkdir tmp
cd tmp

echo "[2/4]: Cloning ..."
echo "-------------------------------------"
git clone https://github.com/lehi31/lehi31.github.io.git
cd lehi31.github.io
rm -rf *

echo "[3/4]: Prepping ..."
echo "-------------------------------------"
cp -r ../../dist/static/* .
rm -rf assets/video

echo "[4/4]: Pushing ..."
echo "-------------------------------------"
git add .
git status
git commit -m "auto deployment updates"
git push

echo "[DONE]: deployment: DONE"
echo "====================================="
