function moveSocialMedia() {
  let socialMedia = document.querySelector(".social-media");
  let menu = document.querySelector(".menu ul");
  let headerWrapper = document.querySelector(".header__wrapper");

  if (window.innerWidth < 870) {
    menu.insertBefore(socialMedia, menu.lastElementChild.nextSibling);
  } else {
    headerWrapper.insertBefore(
      socialMedia,
      headerWrapper.lastElementChild.nextSibling
    );
  }
}

moveSocialMedia();

window.addEventListener("resize", moveSocialMedia);
