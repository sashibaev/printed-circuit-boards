'use strict';

window.test = (function () {
  var Inputmask;
  var inputTelFormPopup = document.querySelector('#popup-tel');
  var inputTelForm = document.querySelector('#tel');
  var im = new Inputmask('+7([999\\)9999999]');
  im.mask(inputTelFormPopup);
  im.mask(inputTelForm);

  return {
    Inputmask: Inputmask
  };
})();
