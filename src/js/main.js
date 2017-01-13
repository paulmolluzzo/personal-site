'use strict';

const wHeight = function() { return window.innerHeight; }
const wWidth = function() { return window.innerHeight; }

function resizeHeader() {
  document.querySelector('header').style.height = wHeight() + 'px';
}

window.addEventListener('resize', resizeHeader, false);

resizeHeader();
