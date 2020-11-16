'use strict';

var Inputmask;
var im = new Inputmask('+7([999\\)9999999]');
im.mask(window.main.telFormPopup);
im.mask(window.main.telForm);
