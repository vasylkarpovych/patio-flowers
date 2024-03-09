const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
