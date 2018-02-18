const header = document.querySelector('header');
const projects = document.querySelectorAll('.project');
const wHeight = () => window.innerHeight;
const wWidth = () => window.innerWidth;
let lastWidth = wWidth();

const updateWindowWidth = () => lastWidth = wWidth(); // eslint-disable-line no-return-assign

const isNewWidth = () => lastWidth !== wWidth();

// if there is no height set or the window has a new width set the height
function resizeHeader() {
  if (!header.style.height || isNewWidth()) {
    header.style.height = `${wHeight()}px`;
  }
}

window.addEventListener('resize', resizeHeader, false);
window.addEventListener('resize', updateWindowWidth, false);

resizeHeader();

function toggleActiveClass(entries) {
  entries.forEach(e => {
    e.target.classList = (e.isIntersecting & e.intersectionRatio >= 0.45) ? 'project active' : 'project';
    return e;
  });
}

const observer = new IntersectionObserver(
  toggleActiveClass,
  {threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
);

projects.forEach(p => {
  observer.observe(p);
});
