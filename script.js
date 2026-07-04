const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const mobileMenu = document.getElementById("mobileMenu");
const nav = document.getElementById("nav");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  themeIcon.textContent = savedTheme === "dark" ? "☀" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
  themeIcon.textContent = nextTheme === "dark" ? "☀" : "🌙";
});

mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
