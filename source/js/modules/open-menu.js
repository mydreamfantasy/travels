const navMain = document.querySelector(".header__nav");
const navToggle = document.querySelector(".header__nav__toggle");
const body = document.querySelector("body");
const links = document.querySelectorAll(".header__nav-link");

export const openMenu = () => {
  navMain.classList.remove("header__nav--nojs");

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains("header__nav--closed")) {
      navMain.classList.remove("header__nav--closed");
      navMain.classList.add("header__nav--opened");
      body.classList.add("header__nav-menu--opened");
    } else {
      document.addEventListener("click", (e) => {
        const withinBoundaries = e.composedPath().includes(navMain);
        if (!withinBoundaries) {
          navMain.classList.add("header__nav--closed");
          navMain.classList.remove("header__nav--opened");
          body.classList.remove("header__nav-menu--opened");
        }
      });

      navMain.classList.add("header__nav--closed");
      navMain.classList.remove("header__nav--opened");
      body.classList.remove("header__nav-menu--opened");
    }

    links.forEach((i) => {
      i.addEventListener("click", () => {
        navMain.classList.add("header__nav--closed");
        navMain.classList.remove("header__nav--opened");
        body.classList.remove("header__nav-menu--opened");
      });
    });
  });
};
