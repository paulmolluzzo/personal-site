'use strict';

const wHeight = function () {
  return window.innerHeight;
};

const wWidth = function () {
  return window.innerWidth;
};

let lastWidth = wWidth();

const updateWindowWidth = function () {
  lastWidth = wWidth();
};

const newWidth = function () {
  return lastWidth !== wWidth();
};

const projects = document.getElementsByClassName('project');

function resizeHeader() {
  // if there is no height set or the window has a new width set the height
  if (!document.querySelector('header').style.height || newWidth()) {
    document.querySelector('header').style.height = wHeight() + 'px';

    // update window width to test for future resize changes
    updateWindowWidth();
  }
}

function resizeProjectList() {
  if (projects.length > 0 && newWidth()) {
    // update window width to test for future resize changes
    updateWindowWidth();

    const tempWidth = ((projects[0].offsetWidth * 0.66) - 1).toFixed(0);

    for (var i = 0; i < projects.length; i++) {
      projects[i].style.height = tempWidth + 'px';
    }
  }
}

window.addEventListener('resize', resizeHeader, false);
window.addEventListener('resize', resizeProjectList, false);

resizeHeader();
resizeProjectList();
