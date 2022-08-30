/* swiper slider*/

const slider = document.querySelector(".slider");
const reviewSlider = document.querySelector(".reviews__slider");

mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".slider__dots",
      clickable: true,
    },
    slideClass: "slider__slide",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
mySwiper = new Swiper(reviewSlider, {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".reviews__dots",
      clickable: true,
    },
    slideClass: "reviews__slide",
    navigation: {
        nextEl: ".reviews-btn-next",
        prevEl: ".reviews-btn-prev",
      },
  });