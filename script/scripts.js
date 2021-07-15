const loader = document.getElementById("loader");
const body = document.body;

window.onload = function () {
  setTimeout(function () {
    loader.classList.add("fade-loader-n");
    body.classList.replace("no-scroll", "body-fade");
  }, 1500);
};



//DROPDOWN NAV MOVIL

const navContent = document.getElementById("navMovil");
const openButton = document.getElementById("open-btn");
const closeButton = document.getElementById("close-btn");

const wa = document.getElementById("wa-btn");
let clickCount = 0;

function openNav() {
  clickCount = clickCount + 1;
  if (clickCount <= 1) {
    openButton.classList.replace("btn-movil-o-active", "btn-movil-o");
    body.classList.add("no-scroll");
    navContent.classList.replace("mobile-nav-inactive", "mobile-nav-active");
    closeButton.classList.replace("btn-movil-c", "btn-movil-c-active");
    wa.classList.add("wa-button-a");
  } else {
    openButton.classList.replace("btn-movil-o-active", "btn-movil-o");
    navContent.classList.replace("mobile-nav-inactive", "mobile-nav-active");
    body.classList.add("no-scroll");
    closeButton.classList.replace("btn-movil-c", "btn-movil-c-active");
    wa.classList.replace("wa-button-b", "wa-button-a");
  }
}

function closeNav() {
  navContent.classList.replace("mobile-nav-active", "mobile-nav-inactive");
  body.classList.remove("no-scroll");
  openButton.classList.replace("btn-movil-o", "btn-movil-o-active");
  closeButton.classList.replace("btn-movil-c-active", "btn-movil-c");
  wa.classList.replace("wa-button-a", "wa-button-b");
}

openButton.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);
