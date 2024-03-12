let headerNav = document.querySelector("#header-nav");
document.body.style.paddingTop = headerNav.offsetHeight + "px";

window.onscroll = function () {
    headerNav.classList.toggle("sticky", this.scrollY > 150);
}

let openDrop = document.querySelectorAll(".nav-mobile ul li a .fa-chevron-down");
let navMobile = document.querySelector(".nav-mobile");
let headerBars = document.querySelector("#header-nav .fa-bars")
let overlayBody = document.querySelector(".overlay-body")
let closeNav = document.querySelector(".mobile-site-close")
openDrop.forEach(el => {
    el.onclick = function (e) {
        e.preventDefault();
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
            this.parentElement.parentElement.classList.add("active")
        } else {
            this.parentElement.parentElement.classList.remove("active")
        }
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