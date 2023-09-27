function videoCoordinates() {
  var promoTitle = document.querySelector(".promo__title");
  var videoPresentation = document.querySelector(".video-presentation");

  if (promoTitle) {
    var rect = promoTitle.getBoundingClientRect();
    var promoTitleTop = rect.top;
    var promoTitleHeight = promoTitle.offsetHeight;

    var rect = videoPresentation.getBoundingClientRect();
    var videoPresentationTop = rect.top;

    var offsetTop =
      videoPresentationTop - promoTitleTop + promoTitleHeight + 30;

    var screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (screenWidth < 1150) {
      var offsetTop = videoPresentationTop - promoTitleTop + promoTitleHeight;
    }
    if (screenWidth < 898) {
      var offsetTop = videoPresentationTop - promoTitleTop + promoTitleHeight;
    }

    videoPresentation.style.top = -offsetTop + "px";
  }
}
videoCoordinates();

function refreshPage() {
  var promoTitle = document.querySelector(".promo__title");
  if (promoTitle) {
    location.reload();
  }
}
window.addEventListener("resize", refreshPage);

