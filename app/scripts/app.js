const toggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".header-mobile-nav");

toggle.addEventListener("click", () => {
  menu.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (
    e.target.closest(".header-mobile-nav") ||
    e.target.classList.contains("header-toggle")
  )
    return;
  menu.classList.remove("open");
});
