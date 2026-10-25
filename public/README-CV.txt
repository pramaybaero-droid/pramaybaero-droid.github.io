Public CV download path: /Pramay_CV.pdf

Canonical editable source:
  scripts/generate_cv.py

GitHub Pages workflow:
  1. Installs ReportLab
  2. Generates public/Pramay_CV.pdf
  3. Builds and publishes the Vite site

The generated binary PDF is intentionally not committed to the repository.
This prevents a stale historical CV (including obsolete referee details)
from being served by mistake.

To regenerate locally:
  python -m pip install 'reportlab>=4,<5'
  python scripts/generate_cv.py

Verify thesis status and bibliographic metadata before editing.
