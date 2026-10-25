Public academic CV: /Pramay_CV.pdf

Source of truth:
  scripts/generate_cv.py

The GitHub Pages deployment workflow regenerates public/Pramay_CV.pdf
from this source before running the Vite build. The committed PDF is
a fallback copy and may be older than the deployed website version.

To regenerate locally:
  python -m pip install 'reportlab>=4,<5'
  python scripts/generate_cv.py

Keep thesis degree status, publication metadata, manuscripts and
research scope in sync with the paper record before each release.
