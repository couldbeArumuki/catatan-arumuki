# catatan-arumuki

## Deploy to GitHub Pages

This repository uses GitHub Actions to build and deploy Astro to GitHub Pages.

1. Open **Settings → Pages** in this repository.
2. Set **Source** to **GitHub Actions**.
3. Push to the default branch (or run the workflow manually).

Expected URL: https://couldbearumuki.github.io/catatan-arumuki/

## New UX additions

- Post pages now show **estimated reading time**.
- Post pages include a lightweight **reading progress bar** at the top.
- Post pages include a **Back to Top** button that appears while scrolling.
- Homepage now includes a personalized **hero section**, quick **search**, and category highlights.
- Navigation is now **sticky**, includes key sections, and has a **dark mode toggle** with saved preference.
- Added `/about` refresh plus default local assets for **avatar** and **cover fallback**.
- Post detail pages now include **related posts** and use a **fallback cover image** when needed.

## Cover images & popular posts

To add a cover image for a post:

1. Place the image under `public/images/`.
2. Add a frontmatter field: `coverImage: "/images/your-file.jpg"`.
3. (Optional) Mark popular posts with `popular: true` and set a `popularity` number to control ordering.

## Screenshot

![Reading progress and back-to-top](./public/screenshots/post-reading-progress.png)