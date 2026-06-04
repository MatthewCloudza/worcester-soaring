# Worcester Soaring Forecast

AI-powered soaring weather forecast for Worcester / Cape Gliding Club (FAWO).

## Features

- **Flyability Score (1-10)** - Glanceable go/no-go indicator
- **Plain-English Summaries** - No jargon, anyone can understand
- **Best Flying Window** - Visual timeline showing when to fly
- **Detailed Analysis** - CAPE, Showalter, LCL, wind, ridge, wave
- **RASP Soundings** - Live tephigram images with zoom
- **Learning Section** - Educational content for new pilots
- **PWA** - Installable on phones, works offline
- **Share Button** - Copy forecast to clipboard for WhatsApp

## How It Works

1. A scheduled agent runs Thu/Fri/Sat at 19:00 SAST
2. It downloads RASP sounding images for Worcester
3. AI analyzes the soundings and produces a structured assessment
4. The assessment is written to `forecast.js` (a JSON payload)
5. This web app reads `forecast.js` and renders the forecast

## Local Development

```bash
cd worcester-soaring
python -m http.server 8080
# Open http://localhost:8080
```

## Deploy to GitHub Pages (Free)

1. Create a GitHub repo (e.g. `worcester-soaring`)
2. Push this folder:
   ```bash
   cd worcester-soaring
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/worcester-soaring.git
   git push -u origin main
   ```
3. Go to repo Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`
4. Your site will be live at: `https://YOUR_USERNAME.github.io/worcester-soaring/`

## Updating forecast.js

The scheduled agent writes to Google Drive. To sync to GitHub Pages:

**Option A: Manual** - Download from Drive, commit to repo

**Option B: GitHub Action** (automated) - Add a workflow that pulls from Drive on a schedule:

```yaml
# .github/workflows/update-forecast.yml
name: Update Forecast
on:
  schedule:
    - cron: '30 17 * * 4,5,6'  # 17:30 UTC = 19:30 SAST (after agent runs)
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Download forecast.js from Google Drive
        run: |
          curl -L "https://drive.google.com/uc?export=download&id=1pPs-ocAlc5-WgpYJX2zxUCKqAbxqu48B" -o forecast.js
      - name: Commit and push
        run: |
          git config user.name "github-actions"
          git config user.email "actions@github.com"
          git add forecast.js
          git diff --cached --quiet || git commit -m "Update forecast $(date +%Y-%m-%d)"
          git push
```

Note: The `curl` approach works because the file is shared publicly. No API key needed.

## File Structure

```
worcester-soaring/
├── index.html      # The web app (single file, all CSS/JS inline)
├── forecast.js     # Forecast data (updated by agent)
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (offline + caching)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Tech Stack

- Zero build tools, zero frameworks
- Pure HTML/CSS/JS
- Font Awesome (CDN)
- Service Worker for offline
- Data from RASP South Africa + AI analysis
