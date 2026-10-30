# Instagram Profile Website 📸

A clean, responsive, Instagram-inspired personal profile website built with **plain HTML, CSS and JavaScript** — no build step, no dependencies. Perfect for hosting free on **GitHub Pages**.

## ✨ Features

- Instagram-style profile header (avatar, stats, bio, follow button)
- Highlights row
- Responsive photo grid with hover overlays
- Click-to-open **lightbox** with caption, likes and like button
- Keyboard support: `Esc` to close, `←` / `→` to navigate
- **Dark / light theme toggle** (remembers your choice)
- Fully mobile responsive
- Smooth fade-in animations

## 📁 Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure & content |
| `styles.css` | All styling and theming |
| `script.js` | Posts data + interactions |
| `README.md` | This file |

## 🔧 How to customise

### 1. Your profile info — edit `index.html`
Search for these and replace:
- `yourhandle` → your Instagram username
- `Your Name` → your display name
- The bio block inside `<p id="profileBio">`
- `https://instagram.com/yourhandle` → your real profile link (appears in several places)

### 2. Your posts — edit `script.js`
Open `script.js` and edit the `POSTS` array at the top:

```js
const POSTS = [
  { img: "images/my-photo.jpg", caption: "My trip 🌄", likes: 320 },
  // add as many as you like
];
```

### 3. Using your own photos
1. Create an `images/` folder in this project.
2. Drop your `.jpg` / `.png` files inside.
3. Point each `img` value to `images/your-file.jpg`.

The current version uses free placeholder images from [picsum.photos](https://picsum.photos) so the layout looks complete out of the box.

## 🚀 Run locally

Just open `index.html` in your browser. That's it.

## 🌐 Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to the repo → **Settings** → **Pages**.
3. Under **Source**, choose **Deploy from a branch** → `main` → `/ (root)`.
4. Save. Your site goes live at:
   `https://<your-username>.github.io/<repo-name>/`

## 📄 License

Free to use and modify for your own profile.
