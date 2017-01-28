'use strict';

const wHeight = function () {
  return window.innerHeight;
};

const wWidth = function () {
  return window.wWidth;
};

const headerAspectRatio = function(windowWidth) {
  return windowWidth / 2.6;
}

const projects = document.getElementsByClassName('project');

function resizeHeader() {
  document.querySelector('header').style.height = wHeight() + 'px';

  // preserve 2.6:1 width:height aspect ratio on header
  document.querySelector('header').style.maxHeight = headerAspectRatio(wWidth()) + 'px';
}

function resizeProjectList() {
  if (projects.length > 0) {
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
