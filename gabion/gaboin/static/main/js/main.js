// Большой слайдер
const main_slider = new Swiper('.main_slider', {
  wrapperClass: 'main_slider_wrap',
  slideClass: 'page',
  navigation: {
    nextEl: '.main_slider .arrow_next',
    prevEl: '.main_slider .arrow_prev',
  },
  loop: false,
  pagination: {
    el: '.slider_arrows .swiper-pagination-current',
    type: 'bullets',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

// Мини слайдер
let our_work_slider = new Swiper('.our_work_slider', {
  wrapperClass: 'our_work_slider_wrap',
  slideClass: 'work_card',
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.our_work_slider .our_work_pagination',
    type: 'bullets',
  },
})
if (window.screen.width < 580) {
  our_work_slider.params.slidesPerView = 2;
}
window.addEventListener('resize', () => {
  if (window.screen.width < 580) {
    our_work_slider.params.slidesPerView = 2;
    return;
  }
    our_work_slider.params.slidesPerView = 3;
})

