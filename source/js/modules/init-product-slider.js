const initProductSlider = () => {
  const productSlider = new Swiper('.product__slider-container', {
    loop: true,
    direction: 'vertical',
    navigation: {
      nextEl: '.product__slide-next',
      prevEl: '.product__slide-prev',
    },
    a11y: {
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    },
    slidesPerView: 'auto',
  });
};

export {initProductSlider};
