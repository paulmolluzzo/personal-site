'use strict';

const wHeight = function() { return window.innerHeight; }
const wWidth = function() { return window.innerHeight; }

document.querySelector('header').style.height = wHeight() + 'px';
