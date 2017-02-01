'use strict';

const wHeight = function () {
  return window.innerHeight;
};

const projects = document.getElementsByClassName('project');

function resizeHeader() {
  document.querySelector('header').style.height = wHeight() + 'px';
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
