$(document).ready(function(){
  $("#team-carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    }
  });
});

// NAVBAR SHRINK

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

// DARK MODE

let modeBtn = document.getElementById("mode-btn");
let darkBtn = document.getElementById("dark-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/dark.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

darkBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/dark.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

// toggle

function openNavbar() {
  document.getElementById("navbar__responsive").style.left = "-50%";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar__responsive").style.left = "-100%";
  document.getElementById("home").style.left = "-100%";
  document.getElementById("product").style.left = "-100%";
  document.getElementById("management").style.left = "-100%";
  document.getElementById("support").style.left = "-100%";
  document.getElementById("collabrative").style.left = "-100%";
  document.getElementById("process").style.left = "-100%";
  document.getElementById("strategies").style.left = "-100%";
  document.getElementById("price").style.left = "-100%";
  document.getElementById("about").style.left = "-100%";
  document.getElementById("join").style.left = "-100%";
  document.getElementById("footer").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar__open").addEventListener("click", openNavbar);
document.getElementById("navbar__close").addEventListener("click", closeNavbar);
document.getElementById("home").addEventListener("click", closeNavbar);
document.getElementById("product").addEventListener("click", closeNavbar);
document.getElementById("management").addEventListener("click", closeNavbar);
document.getElementById("support").addEventListener("click", closeNavbar);
document.getElementById("collabrative").addEventListener("click", closeNavbar);
document.getElementById("process").addEventListener("click", closeNavbar);
document.getElementById("strategies").addEventListener("click", closeNavbar);
document.getElementById("price").addEventListener("click", closeNavbar);
document.getElementById("about").addEventListener("click", closeNavbar);
document.getElementById("join").addEventListener("click", closeNavbar);
document.getElementById("footer").addEventListener("click", closeNavbar);

// BACKTOP

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}

// LOADING

const loading = document.getElementById("loader");


setTimeout(() => {
  loading.classList.add("loading-none");
}, 700);

window.addEventListener("scroll", function () {
  shrink();
});
