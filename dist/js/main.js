const text = "i'm Fauzi Mulyana";
let index = 0;
const typingText = document.getElementById("typing-text");

function typeText() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
  } else {
    typingText.textContent = "";
    index = 0;
  }
  setTimeout(typeText, 200);
}

typeText();

// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
