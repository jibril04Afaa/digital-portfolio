const burgerMenu = document.querySelector(".burger-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});