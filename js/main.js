document.addEventListener("DOMContentLoaded", function () {
  const navToggler = document.querySelector(".nav-toggler");
  const navMenu = document.querySelector(".nav-menu");

  navToggler.addEventListener("click", function () {
      navMenu.classList.toggle("show");
  });
});
