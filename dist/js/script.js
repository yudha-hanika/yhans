// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetLeft;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('#nav-list');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navList.classList.toggle('hidden');
});

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
