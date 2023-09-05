import { iosVhFix } from "./utils/ios-vh-fix";
import { Form } from "./modules/form-validate/form";
import {
  getSwiper,
  getSwiperTours,
  getSwiperLearn,
  getSwiperReviews,
  getSwiperFeatures,
  getSwiperGallery,
} from "./modules/swiper";
import { initVideo } from "./modules/video";
import { openMenu } from "./modules/open-menu";

// ---------------------------------

window.addEventListener("DOMContentLoaded", () => {
  // Utils
  // ---------------------------------
  initVideo();
  iosVhFix();

  // Modules
  // ---------------------------------
  getSwiper();
  getSwiperTours();
  getSwiperLearn();
  getSwiperReviews();
  getSwiperFeatures();
  getSwiperGallery();
  openMenu();

  /* eslint-disable no-undef */
  const map = L.map("map")
    .on("load", () => {})
    .setView(
      {
        lat: 55.774836,
        lng: 37.632664,
      },
      17
    );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  }).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: "./img/pin.svg",
    iconSize: [38, 50],
    iconAnchor: [5, 25],
  });

  const mainPinMarker = L.marker(
    {
      lat: 55.774836,
      lng: 37.632664,
    },
    {
      icon: mainPinIcon,
    }
  );

  mainPinMarker.addTo(map);

  mainPinMarker.on("moveend", (evt) => {
    evt.target.getLatLng();
  });

  map.setView(
    {
      lat: 55.774836,
      lng: 37.632664,
    },
    17
  );
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener("load", () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
