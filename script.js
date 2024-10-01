const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".searchToggle");
const sidebarOpen = document.querySelector(".sidebarOpen");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  document.querySelectorAll('.koleksi-text, .koleksi-wall').forEach((element) => {
    element.style.transition = 'none';
  });

  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }

  setTimeout(() => {
    document.querySelectorAll('.koleksi-text, .koleksi-wall').forEach((element) => {
      element.style.transition = '';
    });
  }, 0);
});

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", e => {
  let clickedElm = e.target;

  if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");
  }
});

const loginLink = document.querySelector('.login-link');

loginLink.addEventListener('click', () => {
  loginLink.classList.toggle('dark');
});

const wallpaperSection = document.querySelector('.wallpaper-section');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('dark-light')) {
    wallpaperSection.classList.toggle('dark');
  }
});

const animeButton = document.querySelector('.wallpaper-buttons button:first-child');
const naturalButton = document.querySelector('.wallpaper-buttons button:nth-child(2)');
const mobilButton = document.querySelector('.wallpaper-buttons button:nth-child(3)');
const abstrakButton = document.querySelector('.wallpaper-buttons button:nth-child(4)');

animeButton.addEventListener('click', () => {
  document.querySelector('#anime-section').scrollIntoView({ behavior: 'smooth' });
});

naturalButton.addEventListener('click', () => {
  document.querySelector('#natural-section').scrollIntoView({ behavior: 'smooth' });
});

mobilButton.addEventListener('click', () => {
  document.querySelector('#mobil-section').scrollIntoView({ behavior: 'smooth' });
});

abstrakButton.addEventListener('click', () => {
  document.querySelector('#abstrak-section').scrollIntoView({ behavior: 'smooth' });
});

