import { Swiper } from "@/lib/swiper-bundle.esm.browser.min.js";

export function createSwiperReviews(){
    return new Swiper(".slider-gallery", {
        direction: "horizontal",
        slidesPerView: 3,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
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
}
