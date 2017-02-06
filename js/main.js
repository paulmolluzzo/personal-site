'use strict';

const wHeight = function () {
  return window.innerHeight;
};

const wWidth = function () {
  return window.innerWidth;
};

var lastWidth = wWidth();

const updateWindowWidth = function () {
  lastWidth = wWidth();
};

const newWidth = function () {
  return lastWidth !== wWidth();
};

function resizeHeader() {
  // if there is no height set or the window has a new width set the height
  if (!document.querySelector('header').style.height || newWidth()) {
    document.querySelector('header').style.height = wHeight() + 'px';
  }
}

window.addEventListener('resize', resizeHeader, false);
window.addEventListener('resize', updateWindowWidth, false);

resizeHeader();
