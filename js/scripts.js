$(function () {
    $('.owl-testmonials').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        items: 1,
        nav:false,
        dots: true,
        smartSpeed: 800,
    autoplayHoverPause:true
    })
})

// calc dynamic height
let headerNav = document.querySelector("#header-nav");
document.body.style.paddingTop = headerNav.offsetHeight + "px";

// toggle shadow when scroll
function scrollHeader() {
  headerNav.classList.toggle("sticky", this.scrollY > 150);
}
window.addEventListener("scroll", scrollHeader);

// add and remove classs active when click on links in navbar
let allLinkTo = document.querySelectorAll("main ul li a.link-to");
allLinkTo.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    allLinkTo.forEach((el) => el.classList.remove("active"));
    let toScroll = document.querySelector(
      "#" + this.getAttribute("data-scroll")
    ).offsetTop;
    scrollTo({
      top: toScroll - headerNav.offsetHeight,
      behavior: "smooth",
    });
    this.classList.add("active");
  };
});

let openDrop = document.querySelectorAll("ul li a .fa-chevron-down");
let navMobile = document.querySelector("main");
let headerBars = document.querySelector("#header-nav .fa-bars");
let overlayBody = document.querySelector(".overlay-body");
let closeNav = document.querySelector(".mobile-site-close");

// open dropdown
openDrop.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    el.parentElement.parentElement.classList.toggle("active");
    el.parentElement.parentElement.classList.contains("active")
      ? el.parentElement.parentElement.classList.add("active")
      : el.parentElement.parentElement.classList.remove("active");
  };
});

// open navbar
headerBars.onclick = function () {
  navMobile.classList.add("active");
  overlayBody.classList.add("active");
};
// close navbar
closeNav.onclick = function () {
  navMobile.classList.remove("active");
  overlayBody.classList.remove("active");
};
// when click on overlay remove navbar
window.onclick = function (e) {
  if (e.target === overlayBody) {
    navMobile.classList.remove("active");
    overlayBody.classList.remove("active");
  }
};

// toggle class active when scroll
let block = document.querySelectorAll(".block");
function scrollLinks() {
  block.forEach((el) => {
    if (this.scrollY >= el.offsetTop - headerNav.offsetHeight) {
      allLinkTo.forEach((el) => el.classList.remove("active"));
      document
        .querySelector("ul li a[data-scroll =" + el.id + "]")
        .classList.add("active");
    }
  });
}
window.addEventListener("scroll", scrollLinks);

// close navbar when resize
window.onresize = function () {
  if (this.innerWidth >= 992) {
    navMobile.classList.remove("active");
    overlayBody.classList.remove("active");
  }
};

// show arrow up when scroll
let goUp = document.querySelector(".up");
window.onscroll = function () {
  goUp.classList.toggle("active", this.scrollY >= 550);
};

// scroll to top when click on arrow
goUp.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// add or remove dark mode when click
let dark = document.querySelector(".lnr-moon");
dark.onclick = function () {
  let darkMode = localStorage.getItem("darkMode");
  darkMode === "dark" ? removeClassDarkMode() : addClassDarkMode();
};

function addClassDarkMode() {
  localStorage.setItem("darkMode", "dark");
  dark.classList.replace("lnr-moon", "lnr-sun");
  document.body.classList.add("dark-mode");
}
function removeClassDarkMode() {
  localStorage.setItem("darkMode", "light");
  dark.classList.replace("lnr-sun", "lnr-moon");
  document.body.classList.remove("dark-mode");
}

let darkMode = localStorage.getItem("darkMode");
if (darkMode === "dark") {
  dark.classList.replace("lnr-moon", "lnr-sun");
  document.body.classList.add("dark-mode");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addListener((e) => (e.matches ? addClassDarkMode() : removeClassDarkMode()));

let preloader = document.querySelector(".preloader");
window.onload = () => setTimeout(() => preloader.classList.add("show"), 300);

// change years dynamic in copy right in footer
let copyRight = document.querySelector(".copy-right span");
copyRight.innerHTML = new Date().getFullYear();
