const initMobileMenu = () => {
  let burgerBtn = document.querySelector('.main-nav__toggle');
  let mobileMenu = document.querySelector('.menu');
  let mainList = document.querySelector('.main-nav__list');
  let iconBurger = document.querySelector('.main-nav__toggle-icon-burger');
  let iconSqueeze = document.querySelector('.main-nav__toggle-icon-squeeze');

  burgerBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    mobileMenu.classList.toggle('show');
    mainList.classList.toggle('hide');
    iconBurger.classList.toggle('hide');
    iconSqueeze.classList.toggle('show');
  });
};

export {initMobileMenu};
