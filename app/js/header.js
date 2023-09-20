function moveSocialMedia() {
  let socialMedia = document.querySelector(".social-media");
  let menu = document.querySelector(".menu");
  let headerWrapper = document.querySelector(".header__wrapper");

  if (window.innerWidth < 870) {
    menu.insertBefore(socialMedia, menu.lastElementChild.nextSibling);
  } else {
    headerWrapper.insertBefore(socialMedia, headerWrapper.lastElementChild);
  }
}

moveSocialMedia();

window.addEventListener("resize", moveSocialMedia);

const menuBtn = document.querySelector(".menu__btn-drop-down");
const menuMobile = document.getElementById("menu");
const menuOpen = document.getElementById("drop-down-open-id");
const menuClose = document.getElementById("drop-down-close-id");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__btn-drop-down_open");
  if (menuMobile.classList.contains("menu__btn-drop-down_open")) {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
  } else {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
  }
});
