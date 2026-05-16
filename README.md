# Pramay Academic Website

Single-page personal academic website for Pramay, PhD Scholar in Aerospace Engineering at IISc Bengaluru. The site is built with Vite, React, TypeScript, and Tailwind CSS, and is ready for free static deployment on GitHub Pages.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- GitHub Pages
- GitHub Actions

## Project Structure

```text
.
|-- .github/workflows/deploy.yml
|-- public/
|   |-- .nojekyll
|   `-- README-CV.txt
|-- src/
|   |-- components/
|   |   |-- Button.tsx
|   |   |-- ContactNetworkGraphic.tsx
|   |   |-- Footer.tsx
|   |   |-- Hero.tsx
|   |   |-- Navbar.tsx
|   |   |-- ProjectCard.tsx
|   |   |-- PublicationItem.tsx
|   |   |-- ResearchCard.tsx
|   |   |-- SectionHeading.tsx
|   |   `-- Tag.tsx
|   |-- data/
|   |   |-- links.ts
|   |   |-- profile.ts
|   |   |-- projects.ts
|   |   |-- publications.ts
|   |   `-- research.ts
|   |-- App.tsx
|   |-- main.tsx
|   |-- styles.css
|   `-- vite-env.d.ts
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- tsconfig.json
|-- tsconfig.node.json
`-- vite.config.ts
```

## Edit Content

Most website content is editable in these files:

- `src/data/profile.ts`
- `src/data/research.ts`
- `src/data/projects.ts`
- `src/data/publications.ts`
- `src/data/links.ts`

No backend, CMS, database, authentication, or paid service is required.

## Add Your CV

Place the PDF file here:

```text
public/Pramay_CV.pdf
```

The website uses this public path:

```text
/Pramay_CV.pdf
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

Initialize Git and push to the repository:

```bash
git init
git add .
git commit -m "Initial website"
git remote add origin https://github.com/pramaybaero-droid/pramaybaero-droid.github.io.git
git push -u origin main
```

Then enable GitHub Pages:

1. Open the repository on GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` will build and deploy the site.

Because the repository is named `pramaybaero-droid.github.io`, Vite is configured with `base: "/"`, which is suitable for a GitHub Pages user site.

## Notes

- Publication entries are placeholders only. Replace them with real publications when available.
- Project GitHub and demo links are placeholders. Update them in `src/data/projects.ts`.
- Contact and profile links are placeholders. Update them in `src/data/links.ts`.
- The design uses lightweight CSS and an inline SVG visual motif, so the site stays fast and easy to maintain.
