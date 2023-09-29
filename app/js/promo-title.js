const words = [
  "КОНТЕНТ",
  "ФЭШН",
  "МОУШН",
  "РЕКЛАМА",
  "КЛИПЫ",
  "ЭТО КЛАУТ",
  "КРЕАТИВ",
];
let currentWordIndex = 0;

function changeWord() {
  const title = document.getElementById("changingText");

  title.classList.remove("animate-slide");

  setTimeout(() => {
    title.textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;

    title.classList.add("animate-slide");
  }, 2000);
}

document
  .getElementById("changingText")
  .addEventListener("animationiteration", changeWord);

changeWord();
