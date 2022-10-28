const initPromo = () => {
  let el = document.querySelectorAll('.promo__desc');

  el.forEach((item) => {
    let text = item.innerHTML;

    setInterval(function () {
      text = text[text.length - 1] + text.substring(0, text.length - 1);
      item.innerHTML = text;
    }, 100);
  });
  // let text = el.innerHTML;

  // setInterval(function () {
  //   text = text[text.length - 1] + text.substring(0, text.length - 1);
  //   el.innerHTML = text;
  // }, 100);

};

export {initPromo};
