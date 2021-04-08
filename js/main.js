document.addEventListener("DOMContentLoaded", () => {
  const swiperChannel = new Swiper(".subscript__slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
  });
  const swiperRecommended = new Swiper(".recommended__slider", {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: ".recommended__slider-button-next",
      prevEl: ".recommended__slider-button-prev",
    },
  });
});
