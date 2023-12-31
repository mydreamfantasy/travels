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
      breakpoints: {
        1200: {
          cssMode: true,
          slidesPerView: "auto",
        },
      },
    });

    swiper.init();
    swiper.on("slideChange", function () {
      const videoContainer = document.querySelectorAll("#video");
      const videoIframes = document.querySelectorAll(".banner__video-player");

      const audioContainer = document.querySelectorAll("#audio");
      const audioIframes = document.querySelectorAll(".banner__video-iframe");

      videoContainer.forEach((el) => {
        const newVideoEl = document.createElement("div");
        newVideoEl.setAttribute("class", "banner__video-player");
        newVideoEl.setAttribute("id", "player");
        newVideoEl.setAttribute("data-video-player", "");

        el.append(newVideoEl);
        el.classList.remove("banner__video--active");
      });

      videoIframes.length && videoIframes.forEach((el) => el.remove());

      audioContainer.forEach((el) => {
        const newAudioEl = document.createElement("iframe");
        newAudioEl.setAttribute("class", "banner__video-iframe");

        newAudioEl.setAttribute(
          "src",
          "https://music.yandex.ru/iframe/#track/112912322/25474374"
        );
        newAudioEl.width = "340";
        newAudioEl.height = "220";
        newAudioEl.setAttribute("tabindex", "-1");

        el.append(newAudioEl);
      });

      audioIframes.length && audioIframes.forEach((el) => el.remove());
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
