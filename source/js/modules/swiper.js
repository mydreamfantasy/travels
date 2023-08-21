import Swiper from '../vendor/swiper';
const swiperContainer = document.querySelectorAll('[data-swiper]');

export const getSwiper = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('.banner', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    swiper.init();
    const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
    duplicates.forEach((el) => el.removeAttribute('tabindex'));
  }
};

export const getSwiperTours = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="tours"]', {
      direction: 'horizontal',
      watchOverflow: true,
      loop: false,
      autoHeight: true,

      navigation: {
        prevEl: '.tours__button--next',
        nextEl: '.tours__button--prev',
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
      direction: 'horizontal',
      watchOverflow: true,
      loop: false,
      autoHeight: true,

      navigation: {
        prevEl: '.learning__button--next',
        nextEl: '.learning__button--prev',
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
      direction: 'horizontal',
      watchOverflow: true,
      loop: false,
      autoHeight: true,
      spaceBetween: 30,

      navigation: {
        prevEl: '.reviews__button--next',
        nextEl: '.reviews__button--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 0,
        },

        768: {
          slidesPerView: 'auto',
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
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide: 0.5,
          direction: 'horizontal',
          watchOverflow: true,
          loop: true,
          autoHeight: true,

          navigation: {
            prevEl: '.features__button--next',
            nextEl: '.features__button--prev',
          },
        },
      },
    });

    swiper.init();
    const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
    duplicates.forEach((el) => el.removeAttribute('tabindex'));
  }
};

export const getSwiperGallery = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="gallery"]', {
      slidesPerView: 'auto',
      spaceBetween: 5,
      loop: true,
      navigation: {
        nextEl: '.gallery__button--prev',
        prevEl: '.gallery__button--next',
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
