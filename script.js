const navBar = document.querySelector('.navbar');

const alertFunc = () => {
  const scrollDist = document.documentElement.scrollTop;

  if (scrollDist >= 5) {
    navBar.classList.add('nav-scroll');
  } else if (document.documentElement.scrollTop < 1) {
    navBar.classList.remove('nav-scroll');
  }
};

window.addEventListener('scroll', alertFunc);
