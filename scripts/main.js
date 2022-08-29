const slider = document.querySelector(".slider");
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