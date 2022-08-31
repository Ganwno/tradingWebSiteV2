/* swiper slider*/
const slider = document.querySelector(".slider");
const reviewSlider = document.querySelector(".reviews__slider");
if (slider) {

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

}
if(reviewSlider){
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
  
}


/*accordion*/

var acc = document.querySelectorAll('.accordion');
var panel = document.querySelectorAll('.panel') ;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* pop up window*/

let popUpBtn = document.querySelectorAll('.popUp__btn');
let popUpWindow = document.querySelector('.popUp__window');
let popUpContent = document.querySelector('.popUp__content');
let popUpSendBtn = document.querySelector('.popUp_send-btn');
let cong = document.querySelector('.popUp_congrats');
let popConForm = document.querySelector('.popUp_content-form');
let body = document.querySelector('body');



if(popUpBtn){
  for (let i = 0; i < popUpBtn.length; i++) {
    popUpBtn[i].addEventListener('click', function(){
      popUpWindow.classList.add('active');
      popUpContent.classList.add('active');
      body.classList.add('lock');
    })
  }
  popUpWindow.addEventListener('click', function () {
    this.classList.remove('active');
    popUpContent.classList.remove('active');
    body.classList.remove('lock');
    cong.style = `
    display:none;
    `
    popConForm.style = `
    display:block;
    `
  })
  
  popUpSendBtn.addEventListener('click', function () {
    cong.style = `
    display:flex;
    `
    popConForm.style = `
    display:none;
    `
  })
}
