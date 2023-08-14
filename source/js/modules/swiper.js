import Swiper from "../vendor/swiper";
const swiperContainer = document.querySelectorAll("[data-swiper]");

export const getSwiper = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper(".banner", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    swiper.init();
    const duplicates = document.querySelectorAll(".swiper-slide-duplicate");
    duplicates.forEach((el) => el.removeAttribute("tabindex"));
  }
};
