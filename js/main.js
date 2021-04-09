document.addEventListener("DOMContentLoaded", () => {
  const swiperChannel = new Swiper(".subscript__slider", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 35,
      },
      1800: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
  });

  const swiperRecommended = new Swiper(".recommended__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      860: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".recommended__slider-button-next",
      prevEl: ".recommended__slider-button-prev",
    },
  });

  const swiperFavorit = new Swiper(".favorit__slider", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 35,
      },
      1800: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".favorit__slider-button-next",
      prevEl: ".favorit__slider-button-prev",
    },
  });

  const headerSearchMobile = document.querySelector(".header__search-mobile");
  const headerSearch = document.querySelector(".header__search");

  const headerSearchToggle = () => headerSearch.classList.toggle("is-open");

  headerSearchMobile.addEventListener("click", headerSearchToggle);

  headerSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    headerSearchToggle();
  });

  if (document.documentElement.scrollWidth <= 414) {
    swiperChannel.destroy();
    swiperRecommended.destroy();
    swiperFavorit.destroy();
  }
});
