let menuIcon = document.querySelector(".bi-list");
let menu = document.querySelector(".header__menu2");

menuIcon.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
