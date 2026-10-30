/* ============================================================
   Instagram-style profile website — interactions
   ------------------------------------------------------------
   Edit the POSTS array below to add / change your photos.
   Each post: { img, caption, likes }
   ============================================================ */

const POSTS = [
  { img: "https://picsum.photos/seed/ig1/800/800",  caption: "Golden hour never gets old ✨",        likes: 1243 },
  { img: "https://picsum.photos/seed/ig2/800/800",  caption: "Weekend adventures 🌄",               likes: 987 },
  { img: "https://picsum.photos/seed/ig3/800/800",  caption: "Coffee & city lights ☕",             likes: 654 },
  { img: "https://picsum.photos/seed/ig4/800/800",  caption: "Sunset chasing 🌅",                   likes: 2104 },
  { img: "https://picsum.photos/seed/ig5/800/800",  caption: "Street vibes 🛣️",                    likes: 432 },
  { img: "https://picsum.photos/seed/ig6/800/800",  caption: "Little moments, big memories 💛",     likes: 1567 },
  { img: "https://picsum.photos/seed/ig7/800/800",  caption: "Into the wild 🌲",                    likes: 876 },
  { img: "https://picsum.photos/seed/ig8/800/800",  caption: "Good food, good mood 🍜",             likes: 1122 },
  { img: "https://picsum.photos/seed/ig9/800/800",  caption: "Framing the sky ☁️",                  likes: 733 },
  { img: "https://picsum.photos/seed/ig10/800/800", caption: "Late night thoughts 🌙",              likes: 998 },
  { img: "https://picsum.photos/seed/ig11/800/800", caption: "Colors of the day 🎨",                likes: 1450 },
  { img: "https://picsum.photos/seed/ig12/800/800", caption: "Until next time 👋",                  likes: 621 },
];

const grid        = document.getElementById("postGrid");
const lightbox     = document.getElementById("lightbox");
const lightboxImg  = document.getElementById("lightboxImg");
const lightboxCap  = document.getElementById("lightboxCaption");
const lightboxLike = document.getElementById("lightboxLike");
const lightboxLikes= document.getElementById("lightboxLikes");
const lightboxClose= document.getElementById("lightboxClose");
const themeToggle  = document.getElementById("themeToggle");

let currentIndex = 0;
let likedState = POSTS.map(() => false);

/* ---------- Render the grid ---------- */
function renderGrid() {
  grid.innerHTML = "";
  POSTS.forEach((post, i) => {
    const item = document.createElement("div");
    item.className = "grid__item";
    item.style.animationDelay = `${i * 40}ms`;
    item.innerHTML = `
      <img src="${post.img}" alt="${post.caption}" loading="lazy" />
      <div class="grid__overlay">
        <span>❤️ ${post.likes.toLocaleString()}</span>
      </div>
    `;
    item.addEventListener("click", () => openLightbox(i));
    grid.appendChild(item);
  });
}

/* ---------- Lightbox ---------- */
function openLightbox(index) {
  currentIndex = index;
  const post = POSTS[index];
  lightboxImg.src = post.img;
  lightboxImg.alt = post.caption;
  lightboxCap.textContent = post.caption;
  updateLikeUI();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateLikeUI() {
  const post = POSTS[currentIndex];
  const liked = likedState[currentIndex];
  lightboxLike.classList.toggle("is-liked", liked);
  lightboxLikes.textContent = (post.likes + (liked ? 1 : 0)).toLocaleString() + " likes";
}

/* ---------- Events ---------- */
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

lightboxLike.addEventListener("click", () => {
  likedState[currentIndex] = !likedState[currentIndex];
  updateLikeUI();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") openLightbox((currentIndex + 1) % POSTS.length);
  if (e.key === "ArrowLeft")  openLightbox((currentIndex - 1 + POSTS.length) % POSTS.length);
});

/* ---------- Theme toggle ---------- */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("ig-theme", theme); } catch (_) {}
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

(function initTheme() {
  let saved = "light";
  try { saved = localStorage.getItem("ig-theme") || "light"; } catch (_) {}
  setTheme(saved);
})();

/* ---------- Tabs (visual only) ---------- */
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
  });
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

renderGrid();
