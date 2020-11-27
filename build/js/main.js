'use strict';

window.main = (function () {
  var KEY_ENTER = 'Enter';
  var KEY_ESC = 'Escape';
  var MAIN_MOUSE_BUTTON = 1;

  var body = document.querySelector('body');
  var buttonNav = document.querySelector('.page-footer__nav-button');
  var buttonNavArea = document.querySelector('.page-footer__nav-button-area');
  var buttonContacts = document.querySelector('.page-footer__contacts-button');
  var buttonContactsArea = document.querySelector('.page-footer__contacts-button-area');
  var navList = document.querySelector('.page-footer__nav-wrapper');
  var contactsList = document.querySelector('.page-footer__contacts-list');
  var scrollLink = document.querySelector('.home-screen__scroll-link');
  var consultationMain = document.querySelector('.home-screen__link-main');
  var consultationMobile = document.querySelector('.home-screen__link-additional');
  var anchorAdvantages = document.querySelector('#advantages');
  var anchorForm = document.querySelector('#form');
  var openPopup = document.querySelector('.page-header__feedback');
  var formPopup = document.querySelector('.form-popup');
  var closePopup = formPopup.querySelector('.form-popup__close');
  var sendDataFormPopup = formPopup.querySelector('.form-popup__submit');
  var nameFormPopup = formPopup.querySelector('#popup-name');
  var telFormPopup = formPopup.querySelector('#popup-tel');
  var commentsFormPopup = formPopup.querySelector('#popup-comments');
  var form = document.querySelector('.feedback__form');
  var sendDataForm = form.querySelector('.feedback__submit');
  var nameForm = form.querySelector('#name');
  var telForm = form.querySelector('#tel');
  var commentsForm = form.querySelector('#comments');

  var polyfill = function (ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
      if (!this) {
        return null;
      }
      if (this.matches(selector)) {
        return this;
      }
      if (!this.parentElement) {
        return null;
      } else {
        return this.parentElement.closest(selector);
      }
    };
  };

  polyfill(Element.prototype);

  var onPopupEscPress = function (evt) {
    if (evt.key === KEY_ESC) {
      closeFormPopup();
    }
  };

  var onPopupEnterPress = function (evt) {
    if (evt.key === KEY_ENTER) {
      closeFormPopup();
    }
  };

  var onPopupOverlayPress = function (evt) {
    if (evt.which === MAIN_MOUSE_BUTTON && !(evt.target).closest('.form-popup__wrapper')) {
      closeFormPopup();
    }
  };

  var onOpenFormPopup = function () {
    formPopup.classList.remove('hidden');
    nameFormPopup.focus();
    body.classList.add('modal-open');

    document.addEventListener('mousedown', onPopupOverlayPress);
    document.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('keydown', onPopupEnterPress);
  };

  var resetForm = function (element1, element2, element3) {
    element1.value = '';
    element2.value = '';
    element3.value = '';
  };

  var closeFormPopup = function () {
    resetForm(nameFormPopup, telFormPopup, commentsFormPopup);
    formPopup.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('mousedown', onPopupOverlayPress);
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('keydown', onPopupEnterPress);
  };

  openPopup.addEventListener('click', function () {
    onOpenFormPopup();
  });

  openPopup.addEventListener('keydown', function (evt) {
    if (evt.key === KEY_ENTER) {
      onOpenFormPopup();
    }
  });

  closePopup.addEventListener('click', function () {
    closeFormPopup();
  });

  var onSendData = function (element1, element2, element3) {
    localStorage.setItem('name', element1.value);
    localStorage.setItem('tel', element2.value);
    localStorage.setItem('comments', element3.value);
  };

  formPopup.addEventListener('submit', function (evt) {
    if (evt.target !== sendDataFormPopup) {
      onSendData(nameFormPopup, telFormPopup, commentsFormPopup);
    }

    evt.preventDefault();
    closeFormPopup();
  });

  form.addEventListener('submit', function (evt) {
    if (evt.target !== sendDataForm) {
      onSendData(nameForm, telForm, commentsForm);
    }

    evt.preventDefault();
    resetForm(nameForm, telForm, commentsForm);
  });

  if (buttonNav) {
    buttonNav.classList.add('page-footer__button-menu');
  }

  if (buttonContacts) {
    buttonContacts.classList.add('page-footer__button-menu');
  }

  if (navList) {
    navList.classList.add('page-footer__accordion');
  }

  if (contactsList) {
    contactsList.classList.add('page-footer__accordion');
  }

  buttonNavArea.addEventListener('click', function () {
    if (!buttonContacts.classList.contains('page-footer__button-menu')) {
      buttonContacts.classList.add('page-footer__button-menu');
      contactsList.classList.add('page-footer__accordion');
    }

    buttonNav.classList.toggle('page-footer__button-menu');
    navList.classList.toggle('page-footer__accordion');
  });

  buttonContactsArea.addEventListener('click', function () {
    if (!buttonNav.classList.contains('page-footer__button-menu')) {
      buttonNav.classList.add('page-footer__button-menu');
      navList.classList.add('page-footer__accordion');
    }

    buttonContacts.classList.toggle('page-footer__button-menu');
    contactsList.classList.toggle('page-footer__accordion');
  });

  var onMakeMove = function (element) {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  scrollLink.addEventListener('click', function (evt) {
    onMakeMove(anchorAdvantages);
    evt.preventDefault();
  });

  consultationMain.addEventListener('click', function (evt) {
    onMakeMove(anchorForm);
    evt.preventDefault();
  });

  consultationMobile.addEventListener('click', function (evt) {
    onMakeMove(anchorForm);
    evt.preventDefault();
  });

  return {
    telFormPopup: telFormPopup,
    telForm: telForm
  };
})();

var Inputmask;
var im = new Inputmask('+7([999\\)9999999]');
im.mask(window.main.telFormPopup);
im.mask(window.main.telForm);
