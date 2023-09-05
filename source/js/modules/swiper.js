import Swiper from "../vendor/swiper";
const swiperContainer = document.querySelectorAll("[data-swiper]");

export const getSwiper = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper(".banner", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    swiper.init();
    swiper.on("slideChange", function () {
      let firstIframe = document.querySelector(".banner__video-player");
      let secondIframe = document.querySelector(".banner__video-iframe");
      let secondIframeParent = document.querySelector(".banner__video-img");

      // setTimeout(() => {
      if (secondIframe === null) {
        secondIframe = document.createElement("iframe");

        secondIframe.width = "340";
        secondIframe.height = "220";
        secondIframe.className = "banner__video-iframe";
        secondIframe.setAttribute(
          "src",
          "https://music.yandex.ru/iframe/#track/112912322/25474374"
        );

        secondIframeParent.append(secondIframe);
      }

      // }, 500);
      secondIframe.remove();

      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();

      firstIframe.src = `${firstIframe.src}?${hours}:${minutes}:${seconds}`;
      // secondIframe.src = `${secondIframe.src}?${hours}:${minutes}:${seconds}`;
    });

    const duplicates = document.querySelectorAll(".swiper-slide-duplicate");
    duplicates.forEach((el) => el.removeAttribute("tabindex"));
  }
};

export const getSwiperTours = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="tours"]', {
      direction: "horizontal",
      watchOverflow: true,
      loop: false,

      navigation: {
        prevEl: ".tours__button--next",
        nextEl: ".tours__button--prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
          initialSlide: 0,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide: 0,
        },
      },
    });

    swiper.init();
  }
};

export const getSwiperLearn = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="learning"]', {
      direction: "horizontal",
      watchOverflow: true,
      loop: false,

      navigation: {
        prevEl: ".learning__button--next",
        nextEl: ".learning__button--prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide: 0,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
          initialSlide: 0,
        },
      },
    });

    swiper.init();
  }
};

export const getSwiperReviews = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="reviews"]', {
      direction: "horizontal",
      watchOverflow: true,
      loop: false,

      navigation: {
        prevEl: ".reviews__button--next",
        nextEl: ".reviews__button--prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 0,
        },

        768: {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 30,
        },
      },
    });

    swiper.init();
  }
};

export const getSwiperFeatures = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="features"]', {
      breakpoints: {
        1200: {
          slidesPerView: "auto",
          spaceBetween: 30,
          initialSlide: 0.6,
          direction: "horizontal",
          watchOverflow: true,
          loop: true,

          navigation: {
            prevEl: ".features__button--next",
            nextEl: ".features__button--prev",
          },
        },
      },
    });

    swiper.init();
  }
};

export const getSwiperGallery = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="gallery"]', {
      slidesPerView: "auto",
      spaceBetween: 5,
      navigation: {
        nextEl: ".gallery__button--prev",
        prevEl: ".gallery__button--next",
      },

      breakpoints: {
        320: {
          spaceBetween: 3,
        },

        768: {
          spaceBetween: 5,
        },
      },
    });
    swiper.init();
  }
};
