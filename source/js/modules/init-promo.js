const initPromo = () => {
  // const promoBlock = document.querySelector('.promo__offer');
  // const marqueeContent = document.querySelector('.promo__desc');

  // if (promoBlock) {
  //   const marqueeElementsDisplayed = getComputedStyle(promoBlock).getPropertyValue('--marquee-elements-displayed');
  //   promoBlock.style.setProperty('--marquee-elements', marqueeContent.children.length);

  //   for (let i = 0; i < marqueeElementsDisplayed; i++) {
  //     marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  //   }
  // }

  // function animate(id) {
  //   var node = document.getElementById(id).childNodes[0];
  //   var text = node.data;
  //   setInterval(function () {
  //    text = text.substring(1) + text[0];
  //    node.data = text;
  //   }, 125); //интервал прокрутки, мс
  //  }
  //  window.addEventListener('load', function (e) { animate('marqueeline'); }, false);

  // function tekst(msg, ctrlwidth) {
  //   msg = ' ' + msg;
  //   let newmsg = msg;
  //   while (newmsg.length < ctrlwidth) {
  //     newmsg += msg;
  //   }
  //   document.write('<form name="Tekst">');
  //   document.write('<input name="tekst" style="border:0;font-weight:bold;" value= "' + newmsg + '" size= ' + ctrlwidth + ' />');
  //   document.write('</form>');
  //   prokrutka();
  // }

  // function prokrutka() {
  //   let NowMsg = document.Tekst.tekst.value;
  //   NowMsg = NowMsg.substring(1, NowMsg.length) + NowMsg.substring(0, 1);
  //   document.Tekst.tekst.value = NowMsg;
  //   let bannerid = setTimeout(prokrutka(), 56);
  // }

  // tekst();
};

export {initPromo};
