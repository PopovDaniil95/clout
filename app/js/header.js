const menuBtn = document.querySelector(".menu__btn-drop-down");
const menuMobile = document.getElementById("menu-list-id");
const menuOpen = document.getElementById("drop-down-open-id");
const menuClose = document.getElementById("drop-down-close-id");
const socialMedia = document.querySelector(".social-media");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__btn-drop-down_open");
  menuBtn.classList.toggle("menu__btn-drop-down_close");
  socialMedia.classList.toggle("social-media_drop-down");
  if (menuMobile.classList.contains("menu__btn-drop-down_open")) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "auto";
  }
});

const words = [
  "ВИДЕО КОНТЕНТ",
  "МОУШН ГРАФИКА",
  "РЕКЛАМА",
  "КЛИПЫ",
  "ЭТО КЛАУТ",
  "КРЕАТИВ",
];
let currentWordIndex = 0;

function changeWord() {
  const title = document.getElementById("changingText");
  title.textContent = words[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(changeWord, 2500);
