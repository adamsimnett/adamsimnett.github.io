# Your Hugo + PaperMod Site

Dark mode, amber accent, alternating career timeline, 2-column blog grid.

---

## First-time setup

### 1. Create your GitHub repo

Create a new repo named `yourusername.github.io` on GitHub (replace with your actual username).

### 2. Clone and add the PaperMod theme

In your VSCode terminal:

```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Copy the contents of this starter kit into the repo
# (drag and drop the files, or copy them in)

# Add PaperMod as a git submodule
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive
```

### 3. Enable GitHub Pages

In your GitHub repo settings:
- Go to **Settings → Pages**
- Under **Source**, select **GitHub Actions**

### 4. Add your headshot

Drop your photo into `static/images/headshot.jpg`.
If you name it something else, update `imageUrl` in `hugo.yaml`.

### 5. Update your CNAME

Edit `static/CNAME` and replace `yourdomain.com` with your actual domain.
Then point your domain's DNS to GitHub Pages:
- Add a CNAME record pointing to `yourusername.github.io`
- Or add A records pointing to GitHub's IPs (see GitHub docs)

### 6. Push and deploy

```bash
git add .
git commit -m "Initial site setup"
git push origin main
```

GitHub Actions will build and deploy automatically. Check the **Actions** tab in your repo to watch the build.

---

## Day-to-day: writing a new post

1. Create a new file in `content/posts/` — e.g. `content/posts/my-new-post.md`
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: 2026-03-22
draft: false
tags: ["azure", "infrastructure"]
description: "One sentence summary shown in the blog card."
---

Your post content here in Markdown.
```

3. Save the file, commit, and push. GitHub Actions deploys it automatically.

To preview locally before pushing, run `hugo server -D` in the terminal (requires Hugo installed).

---

## Editing the About page

The About page is at `content/about.md`.

Everything between the `---` frontmatter lines and the bottom is HTML.
Don't worry about the `<style>` block at the top — you won't need to touch that.

**To update your jobs**, find the timeline section and edit the text inside the cards:
- Update role title, company name, dates, location
- Update the description paragraph
- Update the skill tags (copy/paste a `<span class="tag">` to add more)
- Change the badge text and colour class if needed (`badge-amber`, `badge-blue`, `badge-green`)

**To add a new role**, copy an entire `<!-- Role N -->` block and paste it above or below.
Alternate the class between `tl-right` and `tl-left` to maintain the zigzag pattern.

---

## Customising colours

All colour and layout tweaks live in `assets/css/extended/custom.css`.

The amber accent colour is defined at the top:
```css
:root {
  --amber-400: #d97706;
  --amber-300: #f59e0b;
  --amber-200: #fcd34d;
}
```

Change these hex values to shift the whole site's accent colour.

---

## File structure reference

```
├── hugo.yaml                  # Main site config — title, nav, social links
├── content/
│   ├── about.md               # Your About page (edit your career here)
│   ├── search.md              # Search page (don't edit)
│   └── posts/
│       └── first-post.md      # Your first post — replace with real content
├── assets/
│   └── css/
│       └── extended/
│           └── custom.css     # All visual customisations
├── layouts/
│   └── _default/
│       └── about.html         # About page layout (don't edit)
├── static/
│   ├── CNAME                  # Your custom domain
│   └── images/
│       └── headshot.jpg       # Add your photo here
└── .github/
    └── workflows/
        └── hugo.yaml          # Auto-deploy on push to main
```

---

## Things to update before going live

- [ ] `hugo.yaml` → replace `Your Name`, `yourusername`, `yourdomain.com`, description
- [ ] `static/CNAME` → your actual domain
- [ ] `static/images/headshot.jpg` → your actual photo
- [ ] `content/about.md` → your real job history, bio, social links
- [ ] `content/posts/first-post.md` → replace with a real post or delete it
