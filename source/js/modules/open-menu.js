let navMain = document.querySelector(".header__nav");
let navToggle = document.querySelector(".header__nav__toggle");
let header = document.querySelector(".header__nav-list");

export const openMenu = () => {
  navMain.classList.remove("header__nav--nojs");

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains("header__nav--closed")) {
      navMain.classList.remove("header__nav--closed");
      navMain.classList.add("header__nav--opened");
    } else {
      header.addEventListener("click", function () {
        if (navMain.classList.contains("header__nav--opened")) {
          navMain.classList.add("header__nav--closed");
          navMain.classList.remove("header__nav--opened");
        }
      });
      navMain.classList.add("header__nav--closed");
      navMain.classList.remove("header__nav--opened");

      header.removeEventListener("click", function () {
        if (navMain.classList.contains("header__nav--opened")) {
          navMain.classList.add("header__nav--closed");
          navMain.classList.remove("header__nav--opened");
        }
      });
    }
  });
};
