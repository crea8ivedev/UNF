// product slider
document.addEventListener("DOMContentLoaded", function () {
  const swiperThumbs = new Swiper(".ctm_pdp_mainproduct_thumbnail_slider", {
    loop: true,
    spaceBetween: 39,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        spaceBetween: 12,
      },
      1440: {
        spaceBetween: 39,
      },
    },
  });

  const swiperMain = new Swiper(".ctm_pdp_mainproduct_slider", {
    slidesPerView: 1,
    grabCursor: true,
    draggable: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperThumbs,
    },
    breakpoints: {
      0: {
        spaceBetween: 2,
      },
      768: {
        spaceBetween: 6,
      },
    },
  });
});
// Featured Collection
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".featured-collection-hp", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
