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

let headerNav = document.querySelector("#header-nav");
document.body.style.paddingTop = headerNav.offsetHeight + "px";

function scrollHeader() {
    headerNav.classList.toggle("sticky", this.scrollY > 150);
}
window.addEventListener("scroll", scrollHeader)

let allLinkTo = document.querySelectorAll("main ul li a.link-to");
allLinkTo.forEach(el => {
    el.onclick = function (e) {
        e.preventDefault();
        allLinkTo.forEach(el => el.classList.remove("active"));
        let toScroll = document.querySelector("#" + this.getAttribute("data-scroll")).offsetTop;
        scrollTo({
            top: toScroll - headerNav.offsetHeight,
            behavior: 'smooth'
        });
        this.classList.add("active");
    };
});


let openDrop = document.querySelectorAll("ul li a .fa-chevron-down");
let navMobile = document.querySelector("main");
let headerBars = document.querySelector("#header-nav .fa-bars")
let overlayBody = document.querySelector(".overlay-body")
let closeNav = document.querySelector(".mobile-site-close")

openDrop.forEach(el => {
    el.onclick = function (e) {
        e.preventDefault();
        el.parentElement.parentElement.classList.toggle("active")
        el.parentElement.parentElement.classList.contains("active")
            ? el.parentElement.parentElement.classList.add("active")
            : el.parentElement.parentElement.classList.remove("active")
    }
})

headerBars.onclick = function () {
    navMobile.classList.add("active")
    overlayBody.classList.add("active")
}

closeNav.onclick = function() {
    navMobile.classList.remove("active")
    overlayBody.classList.remove("active")
}

window.onclick = function (e) {
    if (e.target === overlayBody) {
        navMobile.classList.remove("active")
        overlayBody.classList.remove("active")
    }
}

let block = document.querySelectorAll(".block");
function scrollLinks() {
    block.forEach(el => {
        if (this.scrollY >= el.offsetTop - headerNav.offsetHeight) {
            allLinkTo.forEach(el => el.classList.remove("active"));
            document.querySelector("ul li a[data-scroll ="+el.id+"]").classList.add("active")
        }
    })
}
window.addEventListener("scroll", scrollLinks)

window.onresize = function () {
    if (this.innerWidth >= 992) {
        navMobile.classList.remove("active")
        overlayBody.classList.remove("active")
    }
}

let goUp = document.querySelector(".up");
window.onscroll = function () {
    goUp.classList.toggle('active', this.scrollY >= 550);
}

goUp.onclick = function () {
    scrollTo ({
        top: 0,
        behavior: 'smooth'
    })
}

let copyRight = document.querySelector(".copy-right span");
copyRight.innerHTML = new Date().getFullYear()