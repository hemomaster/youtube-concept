document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".subscript__slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
  });
});
