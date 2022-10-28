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
  });
};

export {initMainscreenSlider};
