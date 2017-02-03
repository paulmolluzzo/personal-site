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

const projects = document.getElementsByClassName('project');

function resizeHeader() {
  // if there is no height set or the window has a new width set the height
  if (!document.querySelector('header').style.height || newWidth()) {
    document.querySelector('header').style.height = wHeight() + 'px';
  }
}

function resizeProjectList() {
  if (projects.length > 0) {
    if (!projects[0].style.height || newWidth()) {
      const tempWidth = ((projects[0].offsetWidth * 0.66) - 1).toFixed(0);

      // set height on all projects
      for (var i = 0; i < projects.length; i++) {
        projects[i].style.height = tempWidth + 'px';
      }
    }
  }
}

window.addEventListener('resize', resizeHeader, false);
window.addEventListener('resize', resizeProjectList, false);
window.addEventListener('resize', updateWindowWidth, false);

resizeHeader();
resizeProjectList();
