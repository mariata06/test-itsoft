const initExpertSlider = () => {
  const expertSlider = new Swiper('.expert__slider-container', {
    loop: true,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    a11y: {
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    },
    // autoplay: {
    //   delay: 2000,
    // },
    slidesPerView: 'auto',
    // pagination: {
    //   el: '.slider-info__pagination',
    //   clickable: true,
    //   type: 'fraction',
    // },
    // breakpoints: { // ломает слайдер, обрезает его ниже 2/3
    //   767: {
    //     autoHeight: true,
    //   },
    // },
  });
};

export {initExpertSlider};
