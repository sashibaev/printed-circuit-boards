'use strict';

window.main = (function () {
  var buttonNav = document.querySelector('.page-footer__nav-button');
  var buttonContacts = document.querySelector('.page-footer__contacts-button');
  var navList = document.querySelector('.page-footer__nav-wrapper');
  var contactsList = document.querySelector('.page-footer__contacts-list');

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

  buttonNav.addEventListener('click', function () {
    buttonNav.classList.toggle('page-footer__button-menu');
    navList.classList.toggle('page-footer__accordion');
  });

  buttonContacts.addEventListener('click', function () {
    buttonContacts.classList.toggle('page-footer__button-menu');
    contactsList.classList.toggle('page-footer__accordion');
  });
})();
