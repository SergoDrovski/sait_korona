const swiperQuestions = new Swiper(".slider-gallery", {
  direction: "horizontal",
  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // effect: "fade",
  // fadeEffect: {
  //     crossFade: true,
  // },
  spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      720: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  simulateTouch: true,
});

let formInput = document.querySelectorAll(".form-input");
let input = document.querySelectorAll(".input");
let label = document.querySelectorAll(".form-label");

formInput.forEach((element) => {
  element.addEventListener("click", (e) => {
    formInput.forEach((el) => {
      el.classList.remove("click-input");
    });
    element.classList.add("click-input");
  });
});
