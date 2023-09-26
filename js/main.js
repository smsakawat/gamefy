const headerElm = document.querySelector(".header-section");
const mobileNavBtn = document.querySelector(".btn-mobile-nav");

mobileNavBtn.addEventListener("click", () => {
  headerElm.classList.toggle("nav-open");
});
