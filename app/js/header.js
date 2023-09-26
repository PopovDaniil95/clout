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
  "КРЕАТИВ",
  "ВИДЕО КОНТЕНТ",
  "МОУШН ГРАФИКА",
  "РЕКЛАМА",
  "КЛИПЫ",
  "ЭТО КЛАУТ",
];
let currentWordIndex = 0;

// Функция для изменения слов в заголовке
function changeWord() {
  const title = document.getElementById("changingText");
  title.textContent = words[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % words.length;

  // Добавляем и убираем классы для анимации
  title.classList.remove("off-screen");
  void title.offsetWidth; // Принудительный перерасчет стилей
  title.classList.add("off-screen");
}

// Установите интервал для смены слов
setInterval(changeWord, 1000);
