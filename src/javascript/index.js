import "../scss/style.scss";
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min";

// Button Hover Effect

function buttonAnimation(id) {
  const button = document.getElementById(id);
  button.onmousemove = function (event) {
    const { pageX, pageY } = event;
    const x = pageX - button.offsetLeft;
    const y = pageY - button.offsetTop;
    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  };
}

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  buttonAnimation(button.id);
});

let links = document.querySelectorAll(
  ".navbar .navbar__container .navbar__nav li a"
);
if (!window.innerWidth <= 991) {
  textAnimation();
}
function textAnimation() {
  for (let i = 0; i < links.length; i++) {
    let linkContent = links[i].textContent;
    let splitContent = linkContent.split("");
    links[i].textContent = "";
    for (let j = 0; j < splitContent.length; j++) {
      links[i].innerHTML += "<span>" + splitContent[j] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
      let span = document.querySelectorAll(
        ".navbar .navbar__container .navbar__nav li a span"
      )[char];

      span.classList.add("fade");
      char++;
      if (char === 15) {
        complate();
        return;
      }
    }

    function complate() {
      clearInterval(timer);
      timer = null;
    }
  }
}

let close_navbar_menu = document.getElementById("toggle-navbar-menu");
let navbarLinks = document.querySelectorAll(".navbar___nav__element a");

navbarLinks.forEach((link) => {
  link.onclick = function () {
    let navbar_nav = document.querySelector(".navbar .navbar__nav");

    navbar_nav.classList.remove("open");
  };
});
close_navbar_menu.addEventListener("click", onClose);

function onClose() {
  let navbar_nav = document.querySelector(".navbar .navbar__nav");

  navbar_nav.classList.toggle("open");
  setTimeout(() => {
    textAnimation();
  }, 100);
}

let footer = document.querySelector("footer");

footer.innerHTML += ` ${new Date().getFullYear()}`;

let appland = document.getElementById("view-code-button");
let alert = document.getElementById("alert");
let alertMessage = document.querySelector("#alert .text");

appland.onclick = function () {
  alert.classList.add("show");
  document.querySelector("html").style.overflow = "hidden";
  let text =
    "Can't Show This Website Source Code Right Now Because It's Have Big Issue. Will Fix It As Soon As Possible";

  alertMessage.innerHTML = text;
};

alert.onclick = function () {
  if (alert.classList.contains("show")) {
    alert.classList.remove("show");
    alertMessage.innerHTML = "";
    document.querySelector("html").style.overflow = "visible";
  }
};

let back_to_top = document.querySelector("#back-to-top");

back_to_top.onclick = function () {
  // I Just Type It Like That To Be Cool 🆒😎
  document.querySelector("header").scrollIntoView();
};
let prev_y = window.scrollY;
window.onscroll = function () {
  let current_y = window.scrollY;
  // user scroll up
  if (prev_y > current_y) {
    
  }
  if (window.scrollY >= 1000) {
    back_to_top.classList.add("show");
  } else {
    back_to_top.classList.remove("show");
  }
};
