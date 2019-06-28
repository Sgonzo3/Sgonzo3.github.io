const navbar = document.querySelector('#navbar');

// const window = document.getElementsByName('window');

// const welcome = document.querySelector('#welcome-section');

function showNav() {
  navbar.setAttribute(`style`, `opacity: 1`);
}

function hideNav() {
  navbar.setAttribute(`style`, `opacity: 0`);
}

// tests for show / hide functions
window.addEventListener('scroll',() => {
  if (navbar.offsetTop === window.scrollY) {
    showNav();
  } else if (navbar.offsetTop > window.scrollY) {
    hideNav();
  }
});
