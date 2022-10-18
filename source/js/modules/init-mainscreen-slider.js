const initMainscreenSlider = () => {
  const mainSlider = new Swiper('.mainscreen__slider-container', {
    loop: true,
    direction: 'horizontal',
    navigation: {
      nextEl: '.mainscreen__slide-next',
      prevEl: '.mainscreen__slide-prev',
    },
    a11y: {
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    },
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

export {initMainscreenSlider};
