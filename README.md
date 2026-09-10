# Greg Marshall Racing – GitHub static website clone

This package is a GitHub Pages-ready static recreation of the public-facing Greg Marshall Racing website.

## Files
- `index.html` – site shell and navigation
- `styles.css` – responsive styling
- `script.js` – pages, news cards, photo albums, mobile menu and lightbox
- `README.md` – this guide

## Upload to GitHub
1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js` and this README to the repository root.
3. In GitHub: Settings → Pages → Deploy from branch → select `main` and `/root`.
4. Wait for GitHub Pages to publish the site.
5. The navigation uses hash URLs (`#news`, `#photos`, etc.), so it works as a static GitHub Pages site without PHP or WordPress.

## Important
This is a **static front-end clone**, not a copy of the original WordPress installation. WordPress PHP, database, plugins and the original site's server-side administration are not exposed by the public website and therefore cannot be copied from it.

The current version references the original site's publicly served photographs and sponsor artwork by URL. This keeps the ZIP small and makes the visual recreation work immediately. For a completely self-contained archive, download those image files into an `assets/` folder and replace the URLs in `script.js`.

## External links
Merchandise links to the Greg Marshall Shopify store. Communications/website-credit links point to the organisations shown on the public site.

## Content
The page structure and public-facing information were recreated from the live Greg Marshall Racing site, including Home, News, Photos, About, 2026 and Sponsors.
