// nav-bar class selection
let navBar = document.querySelector(".nav-bar");
let navOpenBtn = document.querySelector(".nav-open-btn");
let navCloseBtn = document.querySelector(".nav-close-btn");

// working navbar toggle
navOpenBtn.addEventListener("click", () => {
  navBar.classList.add("active");
});
navCloseBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
});
