#!/usr/bin/env bash

set -e

APP_NAME="vinzz-portfolio"

echo "===================================="
echo " Deploying Vinzz Portfolio"
echo "===================================="

if [ -d ".git" ]; then
  echo "[1/5] Pulling latest code..."
  git pull
else
  echo "[1/5] Git folder not found, skipping git pull..."
fi

echo "[2/5] Installing dependencies..."
npm install

echo "[3/5] Generating static site..."
npm run generate

echo "[4/5] Starting or restarting PM2 app..."
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 restart "$APP_NAME"
else
  pm2 start npm --name "$APP_NAME" -- run serve
fi

echo "[5/5] Saving PM2 process list..."
pm2 save

echo "===================================="
echo " Vinzz Portfolio deployed successfully"
echo "===================================="

pm2 list